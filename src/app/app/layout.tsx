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
      <header className="mb-10 border-b border-white/[0.08] bg-transparent pb-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/app" className="font-display text-4xl text-white">
            FilmClub
          </Link>

          <nav className="flex flex-wrap gap-3 text-sm text-stone-500">
            <Link
              href="/app"
              className="px-4 py-2 transition hover:text-white"
            >
              Home
            </Link>
            {orderedFeatureDefinitions.map((feature) => (
              <Link
                key={feature.key}
                href={feature.href}
                className="px-4 py-2 transition hover:text-white"
              >
                {feature.shortName}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-stone-400">
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
                className="rounded-full bg-white/10 px-4 py-2 font-medium text-stone-300 transition hover:bg-white/15"
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
