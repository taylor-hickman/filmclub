"use client";

import Link from "next/link";

import { api } from "~/trpc/react";

export function FeatureHubClient() {
  const featuresQuery = api.features.list.useQuery();

  if (featuresQuery.isLoading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-stone-300">
        Loading...
      </div>
    );
  }

  if (featuresQuery.error || !featuresQuery.data) {
    return (
      <div className="rounded-3xl border border-rose-400/20 bg-rose-500/10 p-6 text-rose-200">
        {featuresQuery.error?.message ?? "Unable to load features."}
      </div>
    );
  }

  return (
    <div className="grid gap-5">
      {featuresQuery.data.map((feature) => (
        <Link
          key={feature.key}
          href={feature.href}
          className="group rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 transition hover:border-white/10"
        >
          <div className="space-y-3">
            <h2 className="font-display text-4xl text-white">
              {feature.name}
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-stone-400">
              {feature.detail}
            </p>
          </div>

          <div className="mt-6 text-sm font-medium text-stone-400 transition group-hover:text-white">
            {feature.enabled ? "Continue →" : `${feature.ctaLabel} →`}
          </div>
        </Link>
      ))}
    </div>
  );
}
