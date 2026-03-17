export const featureKeys = ["WATCHLIST"] as const;

export type FeatureKeyValue = (typeof featureKeys)[number];

export type FeatureDefinition = {
  key: FeatureKeyValue;
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  detail: string;
  href: string;
  badge: string;
  ctaLabel: string;
};

export const featureRegistry = {
  WATCHLIST: {
    key: "WATCHLIST",
    slug: "watchlists",
    name: "Watchlists",
    shortName: "Watchlists",
    summary: "Collaborative watchlists.",
    detail: "Build and share movie queues with your group.",
    href: "/app/watchlists",
    badge: "Watchlists",
    ctaLabel: "Open",
  },
} satisfies Record<FeatureKeyValue, FeatureDefinition>;

export const orderedFeatureDefinitions = featureKeys.map(
  (featureKey) => featureRegistry[featureKey],
);

export function getFeatureDefinition(featureKey: FeatureKeyValue) {
  return featureRegistry[featureKey];
}

export function getFeatureDefinitionBySlug(slug: string) {
  return orderedFeatureDefinitions.find((feature) => feature.slug === slug);
}
