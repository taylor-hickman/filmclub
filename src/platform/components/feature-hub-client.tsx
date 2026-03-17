"use client";

import Link from "next/link";

import { api } from "~/trpc/react";

export function FeatureHubClient() {
  const featuresQuery = api.features.list.useQuery();

  if (featuresQuery.isLoading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-stone-300 sm:p-6">
        Loading...
      </div>
    );
  }

  if (featuresQuery.error || !featuresQuery.data) {
    return (
      <div className="rounded-3xl border border-rose-400/20 bg-rose-500/10 p-5 text-rose-200 sm:p-6">
        {featuresQuery.error?.message ?? "Unable to load features."}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:gap-5">
      {featuresQuery.data.map((feature) => (
        <Link
          key={feature.key}
          href={feature.href}
          className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 transition hover:border-white/10 sm:rounded-3xl sm:p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 space-y-2 sm:space-y-3">
              <h2 className="font-display text-2xl italic text-white sm:text-4xl">
                {feature.name}
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-stone-400 sm:text-base sm:leading-7">
                {feature.detail}
              </p>
            </div>

            <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-stone-400 transition group-hover:border-white/20 group-hover:text-white sm:text-sm">
              {feature.enabled ? "Continue" : feature.ctaLabel} →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
