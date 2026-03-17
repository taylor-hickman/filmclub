import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { Prisma, WatchlistItemStatus } from "../../../../generated/prisma";
import { requireWatchlistMembership } from "~/features/watchlists/server/access";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { getMediaDetails } from "~/server/tmdb";

const watchlistIdSchema = z.string().cuid();

async function resequenceItems(
  tx: Prisma.TransactionClient,
  watchlistId: string,
) {
  const items = await tx.watchlistItem.findMany({
    where: {
      watchlistId,
    },
    orderBy: {
      position: "asc",
    },
    select: {
      id: true,
    },
  });

  await Promise.all(
    items.map((item, index) =>
      tx.watchlistItem.update({
        where: {
          id: item.id,
        },
        data: {
          position: index,
        },
      }),
    ),
  );
}

export const itemsRouter = createTRPCRouter({
  add: protectedProcedure
    .input(
      z.object({
        watchlistId: watchlistIdSchema,
        tmdbId: z.number().int().positive(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const membership = await requireWatchlistMembership(
        ctx.db,
        ctx.session.user.id,
        input.watchlistId,
      );

      const media = await getMediaDetails(
        input.tmdbId,
        membership.watchlist.mediaType,
      );
      const position = await ctx.db.watchlistItem.count({
        where: {
          watchlistId: input.watchlistId,
        },
      });

      try {
        return await ctx.db.watchlistItem.create({
          data: {
            watchlistId: input.watchlistId,
            tmdbId: media.tmdbId,
            title: media.title,
            creditNames: media.creditNames,
            year: media.year,
            posterPath: media.posterPath,
            backdropPath: media.backdropPath,
            overview: media.overview,
            position,
            addedById: ctx.session.user.id,
          },
        });
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "That title is already on this watchlist.",
          });
        }

        throw error;
      }
    }),

  update: protectedProcedure
    .input(
      z.object({
        itemId: z.string().cuid(),
        note: z.string().max(2_000).optional(),
        status: z.nativeEnum(WatchlistItemStatus).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const item = await ctx.db.watchlistItem.findUniqueOrThrow({
        where: {
          id: input.itemId,
        },
        select: {
          watchlistId: true,
        },
      });

      await requireWatchlistMembership(
        ctx.db,
        ctx.session.user.id,
        item.watchlistId,
      );

      return ctx.db.watchlistItem.update({
        where: {
          id: input.itemId,
        },
        data: {
          note: input.note,
          status: input.status,
          watchedAt:
            input.status === WatchlistItemStatus.WATCHED
              ? new Date()
              : input.status === WatchlistItemStatus.QUEUED
                ? null
                : undefined,
        },
      });
    }),

  remove: protectedProcedure
    .input(
      z.object({
        itemId: z.string().cuid(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const item = await ctx.db.watchlistItem.findUniqueOrThrow({
        where: {
          id: input.itemId,
        },
        select: {
          id: true,
          watchlistId: true,
        },
      });

      await requireWatchlistMembership(
        ctx.db,
        ctx.session.user.id,
        item.watchlistId,
      );

      await ctx.db.$transaction(async (tx) => {
        await tx.watchlistItem.delete({
          where: {
            id: item.id,
          },
        });

        await resequenceItems(tx, item.watchlistId);
      });

      return { success: true };
    }),

  setWeight: protectedProcedure
    .input(
      z.object({
        itemId: z.string().cuid(),
        weight: z.number().int().min(1).max(5).nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const item = await ctx.db.watchlistItem.findUniqueOrThrow({
        where: {
          id: input.itemId,
        },
        select: {
          id: true,
          watchlistId: true,
        },
      });

      await requireWatchlistMembership(
        ctx.db,
        ctx.session.user.id,
        item.watchlistId,
      );

      if (input.weight === null) {
        await ctx.db.watchlistItemWeight.deleteMany({
          where: {
            watchlistItemId: item.id,
            userId: ctx.session.user.id,
          },
        });

        return { success: true };
      }

      await ctx.db.watchlistItemWeight.upsert({
        where: {
          watchlistItemId_userId: {
            watchlistItemId: item.id,
            userId: ctx.session.user.id,
          },
        },
        create: {
          watchlistItemId: item.id,
          userId: ctx.session.user.id,
          weight: input.weight,
        },
        update: {
          weight: input.weight,
        },
      });

      return { success: true };
    }),
});
