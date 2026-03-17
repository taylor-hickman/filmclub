"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { api } from "~/trpc/react";

type WatchlistInviteAcceptanceClientProps = {
  token: string;
  viewerEmail?: string | null;
};

export function WatchlistInviteAcceptanceClient({
  token,
  viewerEmail,
}: WatchlistInviteAcceptanceClientProps) {
  const router = useRouter();
  const inviteQuery = api.invites.lookup.useQuery({ token });
  const acceptInvite = api.invites.accept.useMutation({
    onSuccess: ({ redirectPath }) => {
      router.push(redirectPath);
    },
  });

  if (inviteQuery.isLoading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-stone-300">
        Loading invite...
      </div>
    );
  }

  if (inviteQuery.error || !inviteQuery.data) {
    return (
      <div className="rounded-3xl border border-rose-400/20 bg-rose-500/10 p-6 text-rose-200">
        {inviteQuery.error?.message ?? "Invite not found."}
      </div>
    );
  }

  const invite = inviteQuery.data;
  const callbackUrl = encodeURIComponent(`/join/${token}`);
  const watchlist = invite.watchlist;

  return (
    <section className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="space-y-2">
        <p className="text-sm tracking-[0.22em] text-stone-500 uppercase">
          Invitation
        </p>
        <h1 className="font-display text-4xl text-white">
          {watchlist?.name ?? invite.feature.name}
        </h1>
        {watchlist?.description ? (
          <p className="text-stone-300">{watchlist.description}</p>
        ) : (
          <p className="text-stone-300">{invite.feature.detail}</p>
        )}
      </div>

      <div className="rounded-2xl border border-white/10 bg-stone-950/80 p-5 text-sm text-stone-300">
        <p>
          Invited email:{" "}
          <span className="font-medium text-white">{invite.email}</span>
        </p>
        <p className="mt-2">
          Invited by{" "}
          <span className="font-medium text-white">
            {invite.inviter.name ?? invite.inviter.email}
          </span>
        </p>
        <p className="mt-2 text-stone-500">
          Expires {new Date(invite.expiresAt).toLocaleString()}
        </p>
      </div>

      {!invite.isActive ? (
        <div className="rounded-2xl border border-stone-400/20 bg-stone-500/10 p-5 text-stone-300">
          This invite is no longer active. It may have expired, been revoked, or
          already been used.
        </div>
      ) : null}

      {!viewerEmail ? (
        <div className="space-y-4">
          <p className="text-stone-300">
            Sign in with{" "}
            <span className="font-medium text-white">{invite.email}</span> to
            accept this invite.
          </p>
          <Link
            href={`/api/auth/signin?callbackUrl=${callbackUrl}`}
            className="inline-flex rounded-full bg-white px-5 py-3 font-medium text-stone-900 transition hover:bg-stone-200"
          >
            Sign in to accept
          </Link>
        </div>
      ) : null}

      {viewerEmail &&
      viewerEmail.toLowerCase() !== invite.email.toLowerCase() ? (
        <div className="rounded-2xl border border-stone-400/20 bg-stone-500/10 p-5 text-stone-300">
          You are signed in as {viewerEmail}, but this invite was sent to{" "}
          {invite.email}. Switch accounts and try again.
        </div>
      ) : null}

      {invite.isActive &&
      viewerEmail?.toLowerCase() === invite.email.toLowerCase() ? (
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => acceptInvite.mutate({ token })}
            disabled={acceptInvite.isPending}
            className="rounded-full bg-white px-5 py-3 font-medium text-stone-900 transition hover:bg-stone-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {acceptInvite.isPending ? "Accepting..." : "Accept invite"}
          </button>
          {acceptInvite.error ? (
            <p className="text-sm text-rose-300">
              {acceptInvite.error.message}
            </p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
