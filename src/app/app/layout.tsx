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
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/app"
              className="font-display text-2xl italic text-white sm:text-4xl"
            >
              filmclub
            </Link>

            <nav className="hidden gap-1 text-sm text-stone-500 sm:flex">
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
                aria-label="Sign out"
                className="min-h-[44px] min-w-[44px] rounded-full bg-white/10 p-2.5 text-stone-300 transition hover:bg-white/15 sm:min-w-0 sm:px-3 sm:py-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto sm:hidden"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                <span className="hidden text-sm font-medium sm:inline">
                  Sign out
                </span>
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}
