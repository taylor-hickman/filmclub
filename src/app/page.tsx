import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { authProviderAvailability } from "~/server/auth/config";

export default async function HomePage() {
  const session = await auth();

  if (session?.user) {
    redirect("/app");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm space-y-8 text-center">
        <h1 className="font-display text-4xl text-white sm:text-5xl">
          FilmClub
        </h1>
        <p className="text-base text-stone-500">
          A place for your watchlists.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/api/auth/signin?callbackUrl=%2Fapp"
            className="rounded-full bg-white px-5 py-3.5 text-center font-medium text-stone-900 transition hover:bg-stone-200"
          >
            Sign in
          </Link>
          {authProviderAvailability.google ? (
            <Link
              href="/api/auth/signin/google?callbackUrl=%2Fapp"
              className="rounded-full border border-white/15 px-5 py-3.5 text-center font-medium text-stone-400 transition hover:text-white"
            >
              Continue with Google
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
