import { TRPCError } from "@trpc/server";

import type { db } from "~/server/db";

type DatabaseClient = {
  featureMembership: Pick<typeof db.featureMembership, "findUnique">;
};

export async function getFeatureMembership(
  database: DatabaseClient,
  userId: string,
  featureInstanceId: string,
) {
  return database.featureMembership.findUnique({
    where: {
      featureInstanceId_userId: {
        featureInstanceId,
        userId,
      },
    },
    include: {
      featureInstance: {
        select: {
          id: true,
          featureKey: true,
          ownerId: true,
        },
      },
    },
  });
}

export async function requireFeatureMembership(
  database: DatabaseClient,
  userId: string,
  featureInstanceId: string,
) {
  const membership = await getFeatureMembership(
    database,
    userId,
    featureInstanceId,
  );
  if (!membership) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "You do not have access to this feature.",
    });
  }

  return membership;
}

export async function requireFeatureOwner(
  database: DatabaseClient,
  userId: string,
  featureInstanceId: string,
) {
  const membership = await requireFeatureMembership(
    database,
    userId,
    featureInstanceId,
  );
  if (membership.role !== "OWNER") {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "Only the feature owner can do that.",
    });
  }

  return membership;
}
