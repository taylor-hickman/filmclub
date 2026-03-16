"use client";

import Link from "next/link";

import { api } from "~/trpc/react";

export function FeatureHubClient() {
  const featuresQuery = api.features.list.useQuery();

  if (featuresQuery.isLoading) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-slate-300">
        Loading FilmClub features...
      </div>
    );
  }

  if (featuresQuery.error || !featuresQuery.data) {
    return (
      <div className="rounded-[2rem] border border-rose-400/20 bg-rose-500/10 p-6 text-rose-200">
        {featuresQuery.error?.message ?? "Unable to load features."}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <p className="text-xs tracking-[0.24em] text-sky-200/70 uppercase">
          FilmClub Hub
        </p>
        <h1 className="font-display mt-3 text-4xl text-white sm:text-5xl">
          Choose the tool you want to open.
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
          Your account, navigation, and invitations now live at the FilmClub
          level. Each feature plugs into the same shell instead of acting like a
          standalone app.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-5">
          {featuresQuery.data.map((feature) => (
            <Link
              key={feature.key}
              href={feature.href}
              className="group rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(251,191,36,0.14),rgba(15,23,42,0.88)_48%,rgba(2,6,23,0.96))] p-6 transition hover:border-white/20 hover:shadow-[0_24px_80px_rgba(8,47,73,0.22)]"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-[0.18em] text-slate-200 uppercase">
                  {feature.badge}
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                  {feature.enabled ? "Enabled" : "Ready to open"}
                </span>
              </div>

              <div className="mt-6 space-y-3">
                <h2 className="font-display text-4xl text-white">
                  {feature.name}
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-slate-300">
                  {feature.detail}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                  {feature.instanceCount} accessible{" "}
                  {feature.instanceCount === 1 ? "space" : "spaces"}
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                  {feature.lastVisitedAt
                    ? `Last opened ${new Date(feature.lastVisitedAt).toLocaleDateString()}`
                    : "Not opened yet"}
                </span>
              </div>

              <div className="mt-6 text-sm font-medium text-amber-100 transition group-hover:text-white">
                {feature.enabled ? "Continue →" : `${feature.ctaLabel} →`}
              </div>
            </Link>
          ))}
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
          <p className="text-xs tracking-[0.22em] text-slate-500 uppercase">
            Next up
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            More FilmClub modules can land here later.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            The hub is already driven by a shared registry and platform-level
            feature records, so later tools can plug into the same auth, nav,
            and invite model.
          </p>
        </aside>
      </section>
    </div>
  );
}
