import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { orderedFeatureDefinitions } from "~/platform/feature-registry";
import { listUserFeatures } from "~/platform/server/user-features";

export const featuresRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    const [userFeatures, memberships] = await Promise.all([
      listUserFeatures(ctx.db, ctx.session.user.id),
      ctx.db.featureMembership.findMany({
        where: {
          userId: ctx.session.user.id,
        },
        select: {
          featureInstance: {
            select: {
              featureKey: true,
            },
          },
        },
      }),
    ]);

    const featureStateMap = new Map(
      userFeatures.map((feature) => [feature.featureKey, feature]),
    );
    const membershipCounts = new Map<string, number>();

    for (const membership of memberships) {
      const featureKey = membership.featureInstance.featureKey;
      membershipCounts.set(
        featureKey,
        (membershipCounts.get(featureKey) ?? 0) + 1,
      );
    }

    return orderedFeatureDefinitions.map((feature) => {
      const state = featureStateMap.get(feature.key);

      return {
        ...feature,
        enabled: Boolean(state),
        enabledAt: state?.enabledAt ?? null,
        lastVisitedAt: state?.lastVisitedAt ?? null,
        instanceCount: membershipCounts.get(feature.key) ?? 0,
      };
    });
  }),
});
