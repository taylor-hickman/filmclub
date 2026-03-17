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
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 sm:py-6">
      <header className="mb-6 border-b border-white/[0.08] pb-4 sm:mb-10 sm:pb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/app"
              className="font-display text-2xl text-white sm:text-4xl"
            >
              FilmClub
            </Link>

            <nav className="flex gap-1 text-sm text-stone-500">
              <Link
                href="/app"
                className="rounded-full px-3 py-2 transition hover:text-white"
              >
                Home
              </Link>
              {orderedFeatureDefinitions.map((feature) => (
                <Link
                  key={feature.key}
                  href={feature.href}
                  className="rounded-full px-3 py-2 transition hover:text-white"
                >
                  {feature.shortName}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-stone-400 sm:inline">
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
                className="rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-stone-300 transition hover:bg-white/15"
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
