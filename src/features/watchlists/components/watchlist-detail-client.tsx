"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import { TmdbBackdrop, TmdbPoster } from "~/app/_components/tmdb-media";
import {
  getCreditPrefix,
  getEmptyQueueLabel,
  getMissingCreditLabel,
  getNoResultsLabel,
  getSearchEmptyLabel,
  getSearchPlaceholder,
  getWatchlistBadgeLabel,
  type WatchlistMediaTypeValue,
} from "~/features/watchlists/lib/watchlist-media";
import { api } from "~/trpc/react";

type WatchlistDetailClientProps = {
  watchlistId: string;
};

const weightOptions = [1, 2, 3, 4, 5] as const;

function CreditLine({
  creditNames,
  mediaType,
  className,
}: {
  creditNames?: string | null;
  mediaType: WatchlistMediaTypeValue;
  className: string;
}) {
  return (
    <p className={className}>
      {creditNames
        ? `${getCreditPrefix(mediaType)} ${creditNames}`
        : getMissingCreditLabel(mediaType)}
    </p>
  );
}

export function WatchlistDetailClient({
  watchlistId,
}: WatchlistDetailClientProps) {
  const router = useRouter();
  const utils = api.useUtils();
  const [draftName, setDraftName] = useState("");
  const [draftDescription, setDraftDescription] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({});
  const [expandedNotes, setExpandedNotes] = useState<Set<string>>(new Set());
  const [confirmRemove, setConfirmRemove] = useState<string | null>(null);
  const [feedbackMap, setFeedbackMap] = useState<Record<string, string>>({});
  const [openPanel, setOpenPanel] = useState<
    "settings" | "collaborators" | null
  >(null);

  const showFeedback = useCallback((key: string, message: string) => {
    setFeedbackMap((prev) => ({ ...prev, [key]: message }));
    setTimeout(() => {
      setFeedbackMap((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }, 1500);
  }, []);

  const watchlistQuery = api.watchlists.get.useQuery({ watchlistId });
  const watchlist = watchlistQuery.data;

  useEffect(() => {
    const trimmed = searchInput.trim();
    if (trimmed.length < 2) {
      setSearchQuery("");
      setActiveSuggestionIndex(0);
      return;
    }

    const timeout = window.setTimeout(() => {
      setSearchQuery(trimmed);
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [searchInput]);

  const mediaSearchQuery = api.media.search.useQuery(
    {
      query: searchQuery,
      mediaType: watchlist?.mediaType ?? "MOVIE",
    },
    {
      enabled: !!watchlist && searchQuery.length >= 2,
    },
  );

  useEffect(() => {
    if (!watchlist) {
      return;
    }

    setDraftName(watchlist.name);
    setDraftDescription(watchlist.description ?? "");
    setNoteDrafts(
      Object.fromEntries(watchlist.items.map((item) => [item.id, item.note])),
    );
  }, [watchlist]);

  useEffect(() => {
    setActiveSuggestionIndex(0);
  }, [searchQuery]);

  const invalidateWatchlist = async () => {
    await Promise.all([
      utils.watchlists.get.invalidate({ watchlistId }),
      utils.watchlists.list.invalidate(),
      utils.members.list.invalidate({ watchlistId }),
    ]);
  };

  const updateWatchlist = api.watchlists.update.useMutation({
    onSuccess: invalidateWatchlist,
  });
  const deleteWatchlist = api.watchlists.delete.useMutation({
    onSuccess: async () => {
      await utils.watchlists.list.invalidate();
      router.push("/app/watchlists");
    },
  });
  const inviteMember = api.members.invite.useMutation({
    onSuccess: async () => {
      setInviteEmail("");
      showFeedback("invite", "Invited");
      await invalidateWatchlist();
    },
  });
  const revokeInvite = api.members.revokeInvite.useMutation({
    onSuccess: invalidateWatchlist,
  });
  const removeMember = api.members.remove.useMutation({
    onSuccess: invalidateWatchlist,
  });
  const addItem = api.items.add.useMutation({
    onSuccess: invalidateWatchlist,
  });
  const updateItem = api.items.update.useMutation({
    onSuccess: invalidateWatchlist,
  });
  const removeItem = api.items.remove.useMutation({
    onSuccess: invalidateWatchlist,
  });
  const setItemWeight = api.items.setWeight.useMutation({
    onSuccess: invalidateWatchlist,
  });

  const existingTmdbIds = useMemo(
    () => new Set(watchlist?.items.map((item) => item.tmdbId) ?? []),
    [watchlist?.items],
  );
  const leadItem = useMemo(
    () =>
      watchlist?.items.find((item) => item.backdropPath) ?? watchlist?.items[0],
    [watchlist?.items],
  );

  const trimmedSearchInput = searchInput.trim();
  const searchReady = trimmedSearchInput.length >= 2;
  const searchResults = mediaSearchQuery.data ?? [];
  const suggestionResults = searchResults.slice(0, 5);
  const dropdownOpen = searchFocused && searchReady;
  const isSearchPending =
    (searchReady && trimmedSearchInput !== searchQuery) ||
    mediaSearchQuery.isFetching;

  const hasBackdrop = !!(leadItem?.backdropPath ?? leadItem?.posterPath);

  if (watchlistQuery.isLoading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-stone-300">
        Loading watchlist...
      </div>
    );
  }

  if (watchlistQuery.error || !watchlist) {
    return (
      <div className="rounded-3xl border border-rose-400/20 bg-rose-500/10 p-6 text-rose-200">
        {watchlistQuery.error?.message ?? "Watchlist not found."}
      </div>
    );
  }

  const mediaType = watchlist.mediaType;

  return (
    <div className="space-y-5 sm:space-y-8">
      <div className="flex items-center justify-between gap-2 text-sm text-stone-400">
        <div className="flex min-w-0 items-center gap-2 overflow-hidden">
          <Link
            href="/app/watchlists"
            className="shrink-0 transition hover:text-white"
          >
            ←
          </Link>
          <span className="truncate">
            {watchlist.owner.name ?? watchlist.owner.email}
          </span>
          <span className="shrink-0">{watchlist.items.length} titles</span>
        </div>

        <div className="flex shrink-0 items-center gap-0.5">
          <button
            type="button"
            onClick={() =>
              setOpenPanel((prev) =>
                prev === "collaborators" ? null : "collaborators",
              )
            }
            aria-label="Collaborators"
            className={`min-h-[44px] min-w-[44px] rounded-full p-2.5 transition ${openPanel === "collaborators" ? "bg-white/10 text-white" : "text-stone-400 hover:text-white"}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() =>
              setOpenPanel((prev) => (prev === "settings" ? null : "settings"))
            }
            aria-label="Settings"
            className={`min-h-[44px] min-w-[44px] rounded-full p-2.5 transition ${openPanel === "settings" ? "bg-white/10 text-white" : "text-stone-400 hover:text-white"}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Collapsible settings panel */}
      {openPanel === "settings" ? (
        <section className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Settings</h2>
            <button
              type="button"
              onClick={() => setOpenPanel(null)}
              className="min-h-[44px] px-2 text-sm text-stone-400 transition hover:text-white"
            >
              Close
            </button>
          </div>

          {watchlist.canManage ? (
            <>
              <form
                className="mt-4 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  void updateWatchlist
                    .mutateAsync({
                      watchlistId,
                      name: draftName,
                      description: draftDescription ?? undefined,
                    })
                    .then(() => showFeedback("settings", "Saved"));
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-2">
                    <span className="text-sm text-stone-300">Name</span>
                    <input
                      required
                      value={draftName}
                      onChange={(event) => setDraftName(event.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-stone-950 px-3.5 py-3 text-base text-white transition outline-none focus:border-white/30"
                    />
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm text-stone-300">Description</span>
                    <input
                      value={draftDescription}
                      onChange={(event) =>
                        setDraftDescription(event.target.value)
                      }
                      className="w-full rounded-xl border border-white/10 bg-stone-950 px-3.5 py-3 text-base text-white transition outline-none focus:border-white/30"
                    />
                  </label>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="min-h-[44px] rounded-full bg-white px-4 py-2.5 text-sm font-medium text-stone-900 transition hover:bg-stone-200"
                  >
                    Save
                  </button>
                  {feedbackMap.settings ? (
                    <span className="text-xs text-emerald-400">
                      {feedbackMap.settings}
                    </span>
                  ) : null}
                </div>
              </form>

              <hr className="my-5 border-white/10" />

              <button
                type="button"
                onClick={() => {
                  if (window.confirm("Delete this watchlist?")) {
                    deleteWatchlist.mutate({ watchlistId });
                  }
                }}
                className="rounded-full border border-rose-400/20 px-4 py-2 text-sm text-rose-200 transition hover:border-rose-300/40"
              >
                Delete watchlist
              </button>
            </>
          ) : (
            <p className="mt-4 text-sm text-stone-400">
              Only the owner can change watchlist settings.
            </p>
          )}

          {updateWatchlist.error ? (
            <p className="mt-4 text-sm text-rose-300">
              {updateWatchlist.error.message}
            </p>
          ) : null}
          {deleteWatchlist.error ? (
            <p className="mt-4 text-sm text-rose-300">
              {deleteWatchlist.error.message}
            </p>
          ) : null}
        </section>
      ) : null}

      {/* Collapsible collaborators panel */}
      {openPanel === "collaborators" ? (
        <section className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Collaborators</h2>
            <button
              type="button"
              onClick={() => setOpenPanel(null)}
              className="min-h-[44px] px-2 text-sm text-stone-400 transition hover:text-white"
            >
              Close
            </button>
          </div>

          {watchlist.canManage ? (
            <form
              className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end"
              onSubmit={(event) => {
                event.preventDefault();
                inviteMember.mutate({
                  watchlistId,
                  email: inviteEmail,
                });
              }}
            >
              <input
                required
                type="email"
                value={inviteEmail}
                onChange={(event) => setInviteEmail(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-stone-950 px-3.5 py-3 text-base text-white transition outline-none focus:border-white/30 sm:max-w-xs"
                placeholder="friend@example.com"
              />
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="min-h-[44px] rounded-full bg-white px-4 py-2.5 text-sm font-medium text-stone-900 transition hover:bg-stone-200"
                >
                  Send invite
                </button>
                {feedbackMap.invite ? (
                  <span className="text-xs text-emerald-400">
                    {feedbackMap.invite}
                  </span>
                ) : null}
              </div>
            </form>
          ) : null}

          {inviteMember.error ? (
            <p className="mt-4 text-sm text-rose-300">
              {inviteMember.error.message}
            </p>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-3">
            {watchlist.members.map((member) => (
              <div
                key={member.id}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-stone-950/80 px-4 py-2.5"
              >
                <div>
                  <span className="text-sm font-medium text-white">
                    {member.user.name ?? member.user.email}
                  </span>
                  <span className="ml-2 text-xs tracking-wide text-stone-500 uppercase">
                    {member.role}
                  </span>
                </div>

                {watchlist.canManage && member.role !== "OWNER" ? (
                  <button
                    type="button"
                    onClick={() =>
                      removeMember.mutate({
                        watchlistId,
                        userId: member.userId,
                      })
                    }
                    className="text-xs text-rose-300 transition hover:text-rose-200"
                  >
                    Remove
                  </button>
                ) : null}
              </div>
            ))}
          </div>

          {watchlist.invites.length > 0 ? (
            <div className="mt-4">
              <h3 className="text-xs font-semibold tracking-[0.18em] text-stone-500 uppercase">
                Pending invites
              </h3>
              <div className="mt-2 flex flex-wrap gap-3">
                {watchlist.invites.map((invite) => (
                  <div
                    key={invite.id}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-stone-950/80 px-4 py-2.5"
                  >
                    <div>
                      <span className="text-sm font-medium text-white">
                        {invite.email}
                      </span>
                      <span className="ml-2 text-xs text-stone-500">
                        expires{" "}
                        {new Date(invite.expiresAt).toLocaleDateString()}
                      </span>
                    </div>

                    {watchlist.canManage ? (
                      <button
                        type="button"
                        onClick={() =>
                          revokeInvite.mutate({
                            watchlistId,
                            inviteId: invite.id,
                          })
                        }
                        className="text-xs text-stone-400 transition hover:text-white"
                      >
                        Revoke
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {removeMember.error ? (
            <p className="mt-4 text-sm text-rose-300">
              {removeMember.error.message}
            </p>
          ) : null}
          {revokeInvite.error ? (
            <p className="mt-4 text-sm text-rose-300">
              {revokeInvite.error.message}
            </p>
          ) : null}
        </section>
      ) : null}

      <div className="space-y-5 sm:space-y-8">
        {/* Hero — compact when no backdrop image */}
        <TmdbBackdrop
          title={watchlist.name}
          backdropPath={leadItem?.backdropPath ?? null}
          posterPath={leadItem?.posterPath ?? null}
          priority
          className={`border border-white/10 ${hasBackdrop ? "min-h-[12rem] sm:min-h-[16rem]" : ""}`}
        >
          <div
            className={`flex h-full flex-col justify-end ${hasBackdrop ? "gap-4 p-4 sm:gap-8 sm:p-8" : "gap-3 p-3 sm:gap-4 sm:p-5"}`}
          >
            <div className="flex flex-wrap items-center gap-2 text-sm text-stone-300">
              <span className="rounded-full border border-white/10 bg-black/10 px-2.5 py-0.5 text-xs text-stone-200">
                {getWatchlistBadgeLabel(mediaType)}
              </span>
            </div>

            <div>
              <h1 className="text-2xl font-semibold text-white sm:text-4xl">
                {watchlist.name}
              </h1>
              {watchlist.description ? (
                <p className="mt-2 text-sm text-stone-200 sm:mt-3 sm:text-base">
                  {watchlist.description}
                </p>
              ) : null}
            </div>
          </div>
        </TmdbBackdrop>

        {/* Queue section with integrated search */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:rounded-3xl sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-white">Queue</h2>
            <div className="relative flex-1 sm:max-w-sm">
              <div className="relative flex items-center">
                <input
                  value={searchInput}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => {
                    window.setTimeout(() => setSearchFocused(false), 120);
                  }}
                  onChange={(event) => setSearchInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (!dropdownOpen || suggestionResults.length === 0) {
                      if (event.key === "Escape") {
                        setSearchFocused(false);
                      }
                      return;
                    }

                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      setActiveSuggestionIndex((current) =>
                        current >= suggestionResults.length - 1
                          ? 0
                          : current + 1,
                      );
                    }

                    if (event.key === "ArrowUp") {
                      event.preventDefault();
                      setActiveSuggestionIndex((current) =>
                        current <= 0
                          ? suggestionResults.length - 1
                          : current - 1,
                      );
                    }

                    if (event.key === "Escape") {
                      event.preventDefault();
                      setSearchFocused(false);
                    }
                  }}
                  className="w-full rounded-xl border border-white/10 bg-stone-950 px-3.5 py-3 pr-16 text-base text-white transition outline-none focus:border-white/30 sm:rounded-2xl sm:pr-20"
                  placeholder={getSearchPlaceholder(mediaType)}
                />

                {searchInput ? (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchInput("");
                      setSearchQuery("");
                      setSearchFocused(false);
                    }}
                    className="absolute right-3 min-h-[36px] rounded-full border border-white/10 px-3 py-1.5 text-xs text-stone-400 transition hover:border-white/25 hover:text-white"
                  >
                    Clear
                  </button>
                ) : null}
              </div>

              {dropdownOpen ? (
                <div
                  onMouseDown={(event) => event.preventDefault()}
                  className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-20 overflow-hidden rounded-2xl border border-white/10 bg-stone-950/95 shadow-2xl shadow-black/40 backdrop-blur"
                >
                  {isSearchPending ? (
                    <div className="px-4 py-4 text-sm text-stone-400">
                      Searching TMDB...
                    </div>
                  ) : mediaSearchQuery.error ? (
                    <div className="px-4 py-4 text-sm text-rose-300">
                      {mediaSearchQuery.error.message}
                    </div>
                  ) : suggestionResults.length === 0 ? (
                    <div className="px-4 py-4 text-sm text-stone-400">
                      {getSearchEmptyLabel(mediaType)}
                    </div>
                  ) : (
                    <div className="max-h-[60vh] overflow-y-auto p-2 sm:max-h-[22rem]">
                      {suggestionResults.map((result, index) => {
                        const alreadyAdded = existingTmdbIds.has(result.tmdbId);

                        return (
                          <div
                            key={result.tmdbId}
                            className={`grid grid-cols-[56px_1fr_auto] items-center gap-3 rounded-xl px-3 py-3 transition ${
                              index === activeSuggestionIndex
                                ? "bg-white/10"
                                : "hover:bg-white/5"
                            }`}
                          >
                            <TmdbPoster
                              title={result.title}
                              posterPath={result.posterPath}
                              backdropPath={result.backdropPath}
                              size="thumb"
                              className="aspect-[2/3] rounded-lg"
                            />

                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="truncate font-medium text-white">
                                  {result.title}
                                </p>
                                {result.year ? (
                                  <span className="text-xs text-stone-500">
                                    {result.year}
                                  </span>
                                ) : null}
                              </div>
                              <CreditLine
                                creditNames={result.creditNames}
                                mediaType={mediaType}
                                className="truncate text-sm text-stone-300"
                              />
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                addItem.mutate({
                                  watchlistId,
                                  tmdbId: result.tmdbId,
                                })
                              }
                              disabled={alreadyAdded || addItem.isPending}
                              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                                alreadyAdded
                                  ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-100"
                                  : "border border-white/15 text-white hover:border-white/30"
                              } disabled:cursor-not-allowed disabled:opacity-70`}
                            >
                              {alreadyAdded
                                ? "Added"
                                : addItem.isPending
                                  ? "Adding..."
                                  : "Add"}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>

          {/* Search results — only visible when actively searching */}
          {searchReady ? (
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold tracking-[0.2em] text-stone-500 uppercase">
                  Search results
                </h3>
                <p className="text-sm text-stone-500">
                  {isSearchPending
                    ? "Searching..."
                    : `${searchResults.length} results`}
                </p>
              </div>

              {!isSearchPending && searchResults.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-white/10 bg-stone-950/60 p-5 text-stone-400">
                  {getNoResultsLabel(mediaType)}
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {searchResults.map((result) => {
                  const alreadyAdded = existingTmdbIds.has(result.tmdbId);

                  return (
                    <div
                      key={result.tmdbId}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-stone-950/80"
                    >
                      <TmdbPoster
                        title={result.title}
                        posterPath={result.posterPath}
                        backdropPath={result.backdropPath}
                        className="aspect-[2/3] rounded-none"
                      />

                      <div className="space-y-4 p-4">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-semibold text-white">
                              {result.title}
                            </h3>
                            {result.year ? (
                              <span className="text-sm text-stone-500">
                                {result.year}
                              </span>
                            ) : null}
                          </div>
                          <CreditLine
                            creditNames={result.creditNames}
                            mediaType={mediaType}
                            className="text-sm text-stone-300"
                          />
                        </div>

                        <p className="min-h-24 text-sm text-stone-400">
                          {result.overview || "No overview available."}
                        </p>

                        <button
                          type="button"
                          onClick={() =>
                            addItem.mutate({
                              watchlistId,
                              tmdbId: result.tmdbId,
                            })
                          }
                          disabled={alreadyAdded || addItem.isPending}
                          className={`w-full rounded-full px-4 py-3 text-sm font-medium transition ${
                            alreadyAdded
                              ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-100"
                              : "bg-white text-stone-900 hover:bg-stone-200"
                          } disabled:cursor-not-allowed disabled:opacity-70`}
                        >
                          {alreadyAdded
                            ? "Already on this list"
                            : addItem.isPending
                              ? "Adding..."
                              : "Add to queue"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}

          {addItem.error ? (
            <p className="mt-4 text-sm text-rose-300">
              {addItem.error.message}
            </p>
          ) : null}

          {/* Queue items */}
          {watchlist.items.length === 0 ? (
            <div className="mt-5 rounded-2xl border border-dashed border-white/10 bg-stone-950/60 p-5 text-stone-400">
              {getEmptyQueueLabel(mediaType)}
            </div>
          ) : null}

          <div className="mt-5 grid gap-5">
            {watchlist.items.map((item, index) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-stone-950/85"
              >
                <div className="grid grid-cols-[80px_1fr] gap-3 p-3 sm:gap-5 sm:p-4 lg:grid-cols-[210px_1fr] lg:p-5">
                  <TmdbPoster
                    title={item.title}
                    posterPath={item.posterPath}
                    backdropPath={item.backdropPath}
                    className="aspect-[2/3] rounded-lg sm:rounded-[1.25rem]"
                  />

                  <div className="min-w-0 space-y-3 sm:space-y-5">
                    <div className="flex flex-col gap-3 sm:gap-4 xl:flex-row xl:items-start xl:justify-between">
                      <div className="min-w-0 space-y-2 sm:space-y-3">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] tracking-wide text-stone-300 uppercase sm:px-3 sm:py-1 sm:text-xs">
                              #{index + 1}
                            </span>
                            <h3 className="text-lg font-semibold text-white sm:text-2xl">
                              {item.title}
                            </h3>
                            {item.year ? (
                              <span className="text-sm text-stone-500">
                                {item.year}
                              </span>
                            ) : null}
                            <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] tracking-wide text-stone-300 uppercase sm:px-3 sm:py-1 sm:text-xs">
                              {item.status}
                            </span>
                          </div>
                          <CreditLine
                            creditNames={item.creditNames}
                            mediaType={mediaType}
                            className="text-sm text-stone-300"
                          />
                        </div>

                        {item.overview ? (
                          <p className="max-w-3xl text-sm text-stone-400">
                            {item.overview}
                          </p>
                        ) : (
                          <p className="text-sm text-stone-500">
                            No overview available.
                          </p>
                        )}

                        <p className="text-xs tracking-wide text-stone-500 uppercase">
                          Added by {item.addedBy.name ?? item.addedBy.email}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 xl:items-end">
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 xl:text-right">
                          <p className="text-[10px] tracking-[0.2em] text-stone-500 uppercase">
                            Priority
                          </p>
                          <p className="mt-1 text-sm font-medium text-white">
                            {item.totalWeight} point
                            {item.totalWeight === 1 ? "" : "s"}
                          </p>
                          <p className="text-xs text-stone-400">
                            {item.weightCount === 0
                              ? "No votes yet"
                              : `${item.weightCount} vote${item.weightCount === 1 ? "" : "s"}`}
                            {item.viewerWeight === null
                              ? " · You have not voted"
                              : ` · You: ${item.viewerWeight}`}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 xl:justify-end">
                          {weightOptions.map((weight) => (
                            <button
                              key={weight}
                              type="button"
                              onClick={() =>
                                void setItemWeight
                                  .mutateAsync({
                                    itemId: item.id,
                                    weight,
                                  })
                                  .then(() => {
                                    showFeedback(
                                      `weight-${item.id}`,
                                      `Priority ${weight}`,
                                    );
                                  })
                              }
                              disabled={setItemWeight.isPending}
                              aria-label={`Set priority to ${weight}`}
                              className={`min-h-[40px] min-w-[40px] rounded-full border px-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-60 ${
                                item.viewerWeight === weight
                                  ? "border-white/40 bg-white text-stone-950"
                                  : "border-white/15 text-white hover:border-white/30"
                              }`}
                            >
                              {weight}
                            </button>
                          ))}

                          <button
                            type="button"
                            onClick={() =>
                              void setItemWeight
                                .mutateAsync({
                                  itemId: item.id,
                                  weight: null,
                                })
                                .then(() => {
                                  showFeedback(`weight-${item.id}`, "Cleared");
                                })
                            }
                            disabled={
                              item.viewerWeight === null ||
                              setItemWeight.isPending
                            }
                            className="min-h-[40px] rounded-full border border-white/15 px-3 text-sm text-stone-300 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            Clear
                          </button>
                        </div>

                        {feedbackMap[`weight-${item.id}`] ? (
                          <span className="text-xs text-emerald-400">
                            {feedbackMap[`weight-${item.id}`]}
                          </span>
                        ) : null}

                        <div className="flex items-center gap-1 xl:justify-end">
                          <button
                            type="button"
                            onClick={() =>
                              void updateItem
                                .mutateAsync({
                                  itemId: item.id,
                                  status:
                                    item.status === "WATCHED"
                                      ? "QUEUED"
                                      : "WATCHED",
                                  note: noteDrafts[item.id] ?? item.note,
                                })
                                .then(() => {
                                  showFeedback(
                                    `watched-${item.id}`,
                                    item.status === "WATCHED"
                                      ? "Queued"
                                      : "Done",
                                  );
                                })
                            }
                            aria-label={
                              item.status === "WATCHED"
                                ? "Move to queue"
                                : "Mark watched"
                            }
                            className={`min-h-[44px] min-w-[44px] rounded-full border p-2.5 transition ${item.status === "WATCHED" ? "border-emerald-400/20 text-emerald-400 hover:border-emerald-400/40" : "border-white/15 text-stone-400 hover:border-white/30 hover:text-white"}`}
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
                            >
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </button>
                          {feedbackMap[`watched-${item.id}`] ? (
                            <span className="text-xs text-emerald-400">
                              {feedbackMap[`watched-${item.id}`]}
                            </span>
                          ) : null}
                          {confirmRemove === item.id ? (
                            <button
                              type="button"
                              onClick={() => {
                                removeItem.mutate({ itemId: item.id });
                                setConfirmRemove(null);
                              }}
                              onBlur={() => setConfirmRemove(null)}
                              autoFocus
                              className="min-h-[44px] rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-xs font-medium text-rose-300 transition hover:bg-rose-500/20"
                            >
                              Remove?
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setConfirmRemove(item.id)}
                              aria-label="Remove"
                              className="min-h-[44px] min-w-[44px] rounded-full border border-rose-400/20 p-2.5 text-rose-300 transition hover:border-rose-300/40 hover:text-rose-200"
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
                              >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Collapsible notes */}
                    {expandedNotes.has(item.id) ? (
                      <div className="space-y-3">
                        <textarea
                          value={noteDrafts[item.id] ?? ""}
                          onChange={(event) =>
                            setNoteDrafts((current) => ({
                              ...current,
                              [item.id]: event.target.value,
                            }))
                          }
                          className="min-h-28 w-full rounded-xl border border-white/10 bg-stone-950 px-4 py-3 text-white transition outline-none focus:border-white/30"
                          placeholder="Shared note for this title..."
                        />
                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              void updateItem
                                .mutateAsync({
                                  itemId: item.id,
                                  note: noteDrafts[item.id] ?? "",
                                  status: item.status,
                                })
                                .then(() => {
                                  setExpandedNotes((prev) => {
                                    const next = new Set(prev);
                                    next.delete(item.id);
                                    return next;
                                  });
                                  showFeedback(`note-${item.id}`, "Saved");
                                })
                            }
                            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-stone-900 transition hover:bg-stone-200"
                          >
                            Save note
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedNotes((prev) => {
                                const next = new Set(prev);
                                next.delete(item.id);
                                return next;
                              })
                            }
                            className="text-sm text-stone-400 transition hover:text-white"
                          >
                            Cancel
                          </button>
                          {feedbackMap[`note-${item.id}`] ? (
                            <span className="text-xs text-emerald-400">
                              {feedbackMap[`note-${item.id}`]}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    ) : (
                      <div>
                        {item.note ? (
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedNotes((prev) =>
                                new Set(prev).add(item.id),
                              )
                            }
                            className="line-clamp-2 max-w-3xl text-left text-sm text-stone-300 transition hover:text-white"
                          >
                            {item.note}
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedNotes((prev) =>
                                new Set(prev).add(item.id),
                              )
                            }
                            className="text-sm text-stone-500 transition hover:text-stone-300"
                          >
                            Add note
                          </button>
                        )}
                        {feedbackMap[`note-${item.id}`] ? (
                          <span className="ml-2 text-xs text-emerald-400">
                            {feedbackMap[`note-${item.id}`]}
                          </span>
                        ) : null}
                        {item.watchedAt ? (
                          <span className="ml-3 text-xs tracking-wide text-stone-500 uppercase">
                            Watched{" "}
                            {new Date(item.watchedAt).toLocaleDateString()}
                          </span>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {updateItem.error ? (
            <p className="mt-4 text-sm text-rose-300">
              {updateItem.error.message}
            </p>
          ) : null}
          {removeItem.error ? (
            <p className="mt-4 text-sm text-rose-300">
              {removeItem.error.message}
            </p>
          ) : null}
          {setItemWeight.error ? (
            <p className="mt-4 text-sm text-rose-300">
              {setItemWeight.error.message}
            </p>
          ) : null}
        </section>
      </div>
    </div>
  );
}
