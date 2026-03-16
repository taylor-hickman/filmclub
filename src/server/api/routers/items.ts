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

  reorder: protectedProcedure
    .input(
      z.object({
        watchlistId: watchlistIdSchema,
        itemIds: z.array(z.string().cuid()),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await requireWatchlistMembership(
        ctx.db,
        ctx.session.user.id,
        input.watchlistId,
      );

      const items = await ctx.db.watchlistItem.findMany({
        where: {
          watchlistId: input.watchlistId,
        },
        select: {
          id: true,
        },
      });

      if (items.length !== input.itemIds.length) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            "The reorder payload does not match the current watchlist items.",
        });
      }

      const currentIds = new Set(items.map((item) => item.id));
      const nextIds = new Set(input.itemIds);

      if (
        currentIds.size !== nextIds.size ||
        [...currentIds].some((id) => !nextIds.has(id))
      ) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "The reorder payload contains invalid item ids.",
        });
      }

      await ctx.db.$transaction(
        input.itemIds.map((itemId, index) =>
          ctx.db.watchlistItem.update({
            where: {
              id: itemId,
            },
            data: {
              position: index,
            },
          }),
        ),
      );

      return { success: true };
    }),
});
