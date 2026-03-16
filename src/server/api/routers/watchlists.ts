import { z } from "zod";

import { watchlistMediaTypes } from "~/features/watchlists/lib/watchlist-media";
import {
  requireWatchlistMembership,
  requireWatchlistOwner,
} from "~/features/watchlists/server/access";
import { touchUserFeature } from "~/platform/server/user-features";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

const watchlistIdSchema = z.string().cuid();
const mediaTypeSchema = z.enum(watchlistMediaTypes);

export const watchlistsRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    await touchUserFeature(ctx.db, ctx.session.user.id, "WATCHLIST");

    const watchlists = await ctx.db.watchlist.findMany({
      where: {
        featureInstance: {
          memberships: {
            some: {
              userId: ctx.session.user.id,
            },
          },
        },
      },
      include: {
        featureInstance: {
          include: {
            owner: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
            _count: {
              select: {
                memberships: true,
              },
            },
            memberships: {
              where: {
                userId: ctx.session.user.id,
              },
              select: {
                role: true,
              },
            },
          },
        },
        _count: {
          select: {
            items: true,
          },
        },
        items: {
          orderBy: {
            position: "asc",
          },
          take: 3,
          select: {
            tmdbId: true,
            title: true,
            posterPath: true,
            backdropPath: true,
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return watchlists.map((watchlist) => ({
      id: watchlist.id,
      name: watchlist.name,
      description: watchlist.description,
      mediaType: watchlist.mediaType,
      createdAt: watchlist.createdAt,
      updatedAt: watchlist.updatedAt,
      owner: watchlist.featureInstance.owner,
      viewerRole: watchlist.featureInstance.memberships[0]?.role ?? "MEMBER",
      itemCount: watchlist._count.items,
      memberCount: watchlist.featureInstance._count.memberships,
      previewItems: watchlist.items,
    }));
  }),

  get: protectedProcedure
    .input(
      z.object({
        watchlistId: watchlistIdSchema,
      }),
    )
    .query(async ({ ctx, input }) => {
      await touchUserFeature(ctx.db, ctx.session.user.id, "WATCHLIST");

      const membership = await requireWatchlistMembership(
        ctx.db,
        ctx.session.user.id,
        input.watchlistId,
      );

      const watchlist = await ctx.db.watchlist.findUniqueOrThrow({
        where: {
          id: input.watchlistId,
        },
        include: {
          featureInstance: {
            include: {
              owner: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                },
              },
              memberships: {
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
              },
              invites: {
                where: {
                  acceptedAt: null,
                  revokedAt: null,
                  expiresAt: {
                    gt: new Date(),
                  },
                },
                orderBy: {
                  createdAt: "desc",
                },
              },
            },
          },
          items: {
            orderBy: {
              position: "asc",
            },
            include: {
              addedBy: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                },
              },
            },
          },
        },
      });

      return {
        id: watchlist.id,
        name: watchlist.name,
        description: watchlist.description,
        mediaType: watchlist.mediaType,
        createdAt: watchlist.createdAt,
        updatedAt: watchlist.updatedAt,
        owner: watchlist.featureInstance.owner,
        members: watchlist.featureInstance.memberships,
        invites: watchlist.featureInstance.invites,
        items: watchlist.items,
        viewerRole: membership.role,
        canManage: membership.role === "OWNER",
      };
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string().trim().min(1).max(100),
        description: z.string().trim().max(500).optional(),
        mediaType: mediaTypeSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.$transaction(async (tx) => {
        await touchUserFeature(tx, ctx.session.user.id, "WATCHLIST");

        const featureInstance = await tx.featureInstance.create({
          data: {
            featureKey: "WATCHLIST",
            ownerId: ctx.session.user.id,
          },
        });

        await tx.featureMembership.create({
          data: {
            featureInstanceId: featureInstance.id,
            userId: ctx.session.user.id,
            role: "OWNER",
          },
        });

        return tx.watchlist.create({
          data: {
            featureInstanceId: featureInstance.id,
            name: input.name,
            description: input.description?.trim() ?? null,
            mediaType: input.mediaType,
          },
        });
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        watchlistId: watchlistIdSchema,
        name: z.string().trim().min(1).max(100),
        description: z.string().trim().max(500).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await requireWatchlistOwner(
        ctx.db,
        ctx.session.user.id,
        input.watchlistId,
      );

      return ctx.db.watchlist.update({
        where: {
          id: input.watchlistId,
        },
        data: {
          name: input.name,
          description: input.description?.trim() ?? null,
        },
      });
    }),

  delete: protectedProcedure
    .input(
      z.object({
        watchlistId: watchlistIdSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await requireWatchlistOwner(
        ctx.db,
        ctx.session.user.id,
        input.watchlistId,
      );

      await ctx.db.watchlist.delete({
        where: {
          id: input.watchlistId,
        },
      });

      return { success: true };
    }),
});
