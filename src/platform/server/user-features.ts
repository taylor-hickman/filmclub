import type { FeatureKeyValue } from "~/platform/feature-registry";
import type { db } from "~/server/db";

type DatabaseClient = {
  userFeature: Pick<typeof db.userFeature, "findMany" | "upsert">;
};

export async function listUserFeatures(
  database: DatabaseClient,
  userId: string,
) {
  return database.userFeature.findMany({
    where: {
      userId,
    },
  });
}

export async function touchUserFeature(
  database: DatabaseClient,
  userId: string,
  featureKey: FeatureKeyValue,
) {
  const now = new Date();

  return database.userFeature.upsert({
    where: {
      userId_featureKey: {
        userId,
        featureKey,
      },
    },
    update: {
      lastVisitedAt: now,
    },
    create: {
      userId,
      featureKey,
      enabledAt: now,
      lastVisitedAt: now,
    },
  });
}
