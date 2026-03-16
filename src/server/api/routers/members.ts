import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { env } from "~/env";
import {
  requireWatchlistMembership,
  requireWatchlistOwner,
} from "~/features/watchlists/server/access";
import { getFeatureDefinition } from "~/platform/feature-registry";
import {
  buildInviteUrl,
  createInviteToken,
  getInviteExpiry,
  hashInviteToken,
  normalizeEmail,
} from "~/platform/server/invites";
import { requireFeatureMembership } from "~/platform/server/permissions";
import { sendFeatureInviteEmail } from "~/server/email";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

const watchlistIdSchema = z.string().cuid();
const watchlistsFeature = getFeatureDefinition("WATCHLIST");

export const membersRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z.object({
        watchlistId: watchlistIdSchema,
      }),
    )
    .query(async ({ ctx, input }) => {
      const access = await requireWatchlistMembership(
        ctx.db,
        ctx.session.user.id,
        input.watchlistId,
      );

      const [members, invites] = await Promise.all([
        ctx.db.featureMembership.findMany({
          where: {
            featureInstanceId: access.watchlist.featureInstanceId,
          },
          orderBy: [{ role: "asc" }, { createdAt: "asc" }],
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                image: true,
              },
            },
          },
        }),
        ctx.db.featureInvite.findMany({
          where: {
            featureInstanceId: access.watchlist.featureInstanceId,
            acceptedAt: null,
            revokedAt: null,
            expiresAt: {
              gt: new Date(),
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        }),
      ]);

      return { members, invites };
    }),

  invite: protectedProcedure
    .input(
      z.object({
        watchlistId: watchlistIdSchema,
        email: z.string().email(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const access = await requireWatchlistOwner(
        ctx.db,
        ctx.session.user.id,
        input.watchlistId,
      );

      if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "Invite email is not configured.",
        });
      }

      const email = normalizeEmail(input.email);
      const currentUserEmail = normalizeEmail(ctx.session.user.email ?? "");
      if (email === currentUserEmail) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You already have access to this watchlist.",
        });
      }

      const existingMembership = await ctx.db.featureMembership.findFirst({
        where: {
          featureInstanceId: access.watchlist.featureInstanceId,
          user: {
            email,
          },
        },
      });

      if (existingMembership) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "That user is already a collaborator.",
        });
      }

      const rawToken = createInviteToken();
      const tokenHash = hashInviteToken(rawToken);
      const invite = await ctx.db.$transaction(async (tx) => {
        await tx.featureInvite.updateMany({
          where: {
            featureInstanceId: access.watchlist.featureInstanceId,
            email,
            acceptedAt: null,
            revokedAt: null,
            expiresAt: {
              gt: new Date(),
            },
          },
          data: {
            revokedAt: new Date(),
          },
        });

        return tx.featureInvite.create({
          data: {
            featureInstanceId: access.watchlist.featureInstanceId,
            featureKey: "WATCHLIST",
            inviterId: ctx.session.user.id,
            email,
            tokenHash,
            expiresAt: getInviteExpiry(),
          },
        });
      });

      await sendFeatureInviteEmail({
        email,
        featureName: watchlistsFeature.name,
        instanceName: access.watchlist.name,
        inviteUrl: buildInviteUrl(ctx.headers, rawToken),
        inviterName: ctx.session.user.name ?? currentUserEmail,
      });

      return invite;
    }),

  revokeInvite: protectedProcedure
    .input(
      z.object({
        watchlistId: watchlistIdSchema,
        inviteId: z.string().cuid(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const access = await requireWatchlistOwner(
        ctx.db,
        ctx.session.user.id,
        input.watchlistId,
      );

      await ctx.db.featureInvite.updateMany({
        where: {
          id: input.inviteId,
          featureInstanceId: access.watchlist.featureInstanceId,
          acceptedAt: null,
          revokedAt: null,
        },
        data: {
          revokedAt: new Date(),
        },
      });

      return { success: true };
    }),

  remove: protectedProcedure
    .input(
      z.object({
        watchlistId: watchlistIdSchema,
        userId: z.string().cuid(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const access = await requireWatchlistOwner(
        ctx.db,
        ctx.session.user.id,
        input.watchlistId,
      );

      const target = await requireFeatureMembership(
        ctx.db,
        input.userId,
        access.watchlist.featureInstanceId,
      );
      if (target.role === "OWNER") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "The owner cannot be removed from the watchlist.",
        });
      }

      await ctx.db.featureMembership.delete({
        where: {
          featureInstanceId_userId: {
            featureInstanceId: access.watchlist.featureInstanceId,
            userId: input.userId,
          },
        },
      });

      return { success: true };
    }),
});
