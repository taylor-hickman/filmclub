import { TRPCError } from "@trpc/server";

import { getFeatureMembership } from "~/platform/server/permissions";
import type { db } from "~/server/db";

type DatabaseClient = {
  featureMembership: Pick<typeof db.featureMembership, "findUnique">;
  watchlist: Pick<typeof db.watchlist, "findUnique">;
};

export async function getWatchlistMembership(
  database: DatabaseClient,
  userId: string,
  watchlistId: string,
) {
  const watchlist = await database.watchlist.findUnique({
    where: {
      id: watchlistId,
    },
    select: {
      id: true,
      featureInstanceId: true,
      mediaType: true,
      name: true,
      featureInstance: {
        select: {
          ownerId: true,
        },
      },
    },
  });
  if (!watchlist) {
    return null;
  }

  const membership = await getFeatureMembership(
    database,
    userId,
    watchlist.featureInstanceId,
  );
  if (!membership) {
    return null;
  }

  return {
    ...membership,
    watchlist,
  };
}

export async function requireWatchlistMembership(
  database: DatabaseClient,
  userId: string,
  watchlistId: string,
) {
  const membership = await getWatchlistMembership(
    database,
    userId,
    watchlistId,
  );
  if (!membership) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "You do not have access to this watchlist.",
    });
  }

  return membership;
}

export async function requireWatchlistOwner(
  database: DatabaseClient,
  userId: string,
  watchlistId: string,
) {
  const membership = await requireWatchlistMembership(
    database,
    userId,
    watchlistId,
  );
  if (membership.role !== "OWNER") {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "Only the watchlist owner can do that.",
    });
  }

  return membership;
}
