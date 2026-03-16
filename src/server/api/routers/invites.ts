import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { getFeatureDefinition } from "~/platform/feature-registry";
import {
  hashInviteToken,
  isInviteActive,
  normalizeEmail,
} from "~/platform/server/invites";
import { touchUserFeature } from "~/platform/server/user-features";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const tokenSchema = z.object({
  token: z.string().min(20),
});

export const invitesRouter = createTRPCRouter({
  lookup: publicProcedure.input(tokenSchema).query(async ({ ctx, input }) => {
    const invite = await ctx.db.featureInvite.findUnique({
      where: {
        tokenHash: hashInviteToken(input.token),
      },
      include: {
        inviter: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        featureInstance: {
          select: {
            id: true,
            featureKey: true,
            watchlist: {
              select: {
                id: true,
                name: true,
                description: true,
              },
            },
          },
        },
      },
    });

    if (!invite) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Invite not found." });
    }

    return {
      id: invite.id,
      email: invite.email,
      expiresAt: invite.expiresAt,
      acceptedAt: invite.acceptedAt,
      revokedAt: invite.revokedAt,
      isActive: isInviteActive(invite),
      inviter: invite.inviter,
      feature: getFeatureDefinition(invite.featureKey),
      featureKey: invite.featureKey,
      watchlist: invite.featureInstance.watchlist,
    };
  }),

  accept: protectedProcedure
    .input(tokenSchema)
    .mutation(async ({ ctx, input }) => {
      const userEmail = normalizeEmail(ctx.session.user.email ?? "");
      if (!userEmail) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Your account must have a verified email to accept invites.",
        });
      }

      const invite = await ctx.db.featureInvite.findUnique({
        where: {
          tokenHash: hashInviteToken(input.token),
        },
        include: {
          featureInstance: {
            select: {
              id: true,
              featureKey: true,
              watchlist: {
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      if (!invite) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Invite not found.",
        });
      }

      if (invite.revokedAt) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "This invite has been revoked.",
        });
      }

      if (invite.acceptedAt) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "This invite has already been used.",
        });
      }

      if (invite.expiresAt <= new Date()) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "This invite has expired.",
        });
      }

      if (normalizeEmail(invite.email) !== userEmail) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message:
            "Sign in with the invited email address to accept this invite.",
        });
      }

      await ctx.db.$transaction(async (tx) => {
        const existingMembership = await tx.featureMembership.findUnique({
          where: {
            featureInstanceId_userId: {
              featureInstanceId: invite.featureInstanceId,
              userId: ctx.session.user.id,
            },
          },
        });

        if (!existingMembership) {
          await tx.featureMembership.create({
            data: {
              featureInstanceId: invite.featureInstanceId,
              userId: ctx.session.user.id,
              role: "MEMBER",
            },
          });
        }

        await touchUserFeature(tx, ctx.session.user.id, invite.featureKey);

        await tx.featureInvite.update({
          where: {
            id: invite.id,
          },
          data: {
            acceptedAt: new Date(),
          },
        });
      });

      return {
        success: true,
        featureKey: invite.featureKey,
        redirectPath: invite.featureInstance.watchlist
          ? `/app/watchlists/${invite.featureInstance.watchlist.id}`
          : "/app",
      };
    }),
});
