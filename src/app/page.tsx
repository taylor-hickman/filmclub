import Link from "next/link";
import { redirect } from "next/navigation";

import { getFeatureDefinition } from "~/platform/feature-registry";
import { auth } from "~/server/auth";
import { authProviderAvailability } from "~/server/auth/config";

const watchlistsFeature = getFeatureDefinition("WATCHLIST");

export default async function HomePage() {
  const session = await auth();

  if (session?.user) {
    redirect("/app");
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6">
      <header className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-950/60 px-6 py-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs tracking-[0.24em] text-sky-200/70 uppercase">
            FilmClub
          </p>
          <p className="mt-1 text-sm text-slate-400">
            A modular home for movie-night tools.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/api/auth/signin?callbackUrl=%2Fapp"
            className="rounded-full bg-amber-200 px-5 py-3 font-medium text-slate-950 transition hover:bg-amber-100"
          >
            Open FilmClub
          </Link>
          {authProviderAvailability.google ? (
            <Link
              href="/api/auth/signin/google?callbackUrl=%2Fapp"
              className="rounded-full border border-white/15 px-5 py-3 font-medium text-white transition hover:border-white/30"
            >
              Continue with Google
            </Link>
          ) : null}
        </div>
      </header>

      <main className="grid flex-1 gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(251,191,36,0.16),rgba(8,47,73,0.75)_48%,rgba(2,6,23,0.92))] p-8 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.22),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.16),transparent_28%)]" />
          <div className="relative space-y-6">
            <p className="text-sm tracking-[0.26em] text-sky-100/70 uppercase">
              FilmClub v1
            </p>
            <h1 className="font-display max-w-4xl text-5xl leading-tight text-white sm:text-6xl">
              One account for every tool your film group needs.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-200">
              FilmClub starts with collaborative watchlists and is structured to
              grow into a broader platform for planning, sharing, and deciding
              what to watch together.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-5">
                <p className="text-xs tracking-[0.22em] text-slate-400 uppercase">
                  First feature
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  {watchlistsFeature.name}
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {watchlistsFeature.detail}
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-5">
                <p className="text-xs tracking-[0.22em] text-slate-400 uppercase">
                  Platform shape
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Shared auth, a feature hub, reusable invites, and space for
                  additional modules to land without rebuilding the shell.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs tracking-[0.22em] text-slate-500 uppercase">
              Available now
            </p>
            <h2 className="font-display mt-3 text-4xl text-white">
              Create a watchlist
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Build private movie or TV queues, search TMDB live, keep notes,
              reorder titles, and invite collaborators by email.
            </p>
            <Link
              href="/api/auth/signin?callbackUrl=%2Fapp%2Fwatchlists"
              className="mt-5 inline-flex rounded-full border border-white/15 px-5 py-3 font-medium text-white transition hover:border-white/30"
            >
              Enter via Watchlists
            </Link>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-white">
              Provider status
            </h2>
            <dl className="mt-4 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <dt>Google OAuth</dt>
                <dd>
                  {authProviderAvailability.google
                    ? "Configured"
                    : "Missing env vars"}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt>Email magic links</dt>
                <dd>
                  {authProviderAvailability.email
                    ? "Configured"
                    : "Missing env vars"}
                </dd>
              </div>
            </dl>
            <p className="mt-6 leading-7 text-slate-500">
              Configure `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`,
              `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `TMDB_API_KEY` before
              using the full flow.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
