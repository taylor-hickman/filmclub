import Link from "next/link";
import { redirect } from "next/navigation";

import { orderedFeatureDefinitions } from "~/platform/feature-registry";
import { auth, signOut } from "~/server/auth";

export default async function FilmClubAppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=%2Fapp");
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6">
      <header className="mb-10 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <Link href="/app" className="font-display text-4xl text-white">
              FilmClub
            </Link>
            <p className="text-sm text-slate-400">
              A shared home for movie-night tools.
            </p>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
            <Link
              href="/app"
              className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/25 hover:text-white"
            >
              Hub
            </Link>
            {orderedFeatureDefinitions.map((feature) => (
              <Link
                key={feature.key}
                href={feature.href}
                className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/25 hover:text-white"
              >
                {feature.shortName}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-slate-400">
              {session.user.name ?? session.user.email}
            </span>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button
                type="submit"
                className="rounded-full bg-amber-200 px-4 py-2 font-medium text-slate-950 transition hover:bg-amber-100"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}
