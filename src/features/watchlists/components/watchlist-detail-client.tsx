"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { TmdbBackdrop, TmdbPoster } from "~/app/_components/tmdb-media";
import {
  getAddMediaHeading,
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
  const reorderItems = api.items.reorder.useMutation({
    onSuccess: invalidateWatchlist,
  });

  const orderedItemIds = useMemo(
    () => watchlist?.items.map((item) => item.id) ?? [],
    [watchlist?.items],
  );
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

  const moveItem = (itemId: string, direction: "up" | "down") => {
    const currentIndex = orderedItemIds.indexOf(itemId);
    if (currentIndex === -1) {
      return;
    }

    const nextIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    if (nextIndex < 0 || nextIndex >= orderedItemIds.length) {
      return;
    }

    const nextOrder = [...orderedItemIds];
    const [item] = nextOrder.splice(currentIndex, 1);
    if (!item) {
      return;
    }

    nextOrder.splice(nextIndex, 0, item);
    reorderItems.mutate({
      watchlistId,
      itemIds: nextOrder,
    });
  };

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
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-sm text-stone-400">
        <Link href="/app/watchlists" className="transition hover:text-white">
          ← Back to watchlists
        </Link>
        <span>Owner: {watchlist.owner.name ?? watchlist.owner.email}</span>
        <span>{watchlist.items.length} titles</span>
      </div>

      <section className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-8">
          <TmdbBackdrop
            title={watchlist.name}
            backdropPath={leadItem?.backdropPath ?? null}
            posterPath={leadItem?.posterPath ?? null}
            priority
            className="border border-white/10"
          >
            <div className="flex h-full flex-col justify-between gap-8 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-stone-300">
                <span className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-stone-200">
                  {getWatchlistBadgeLabel(mediaType)}
                </span>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div className="space-y-4">
                  <div>
                    <h1 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                      {watchlist.name}
                    </h1>
                    {watchlist.description ? (
                      <p className="mt-3 max-w-2xl text-stone-200">
                        {watchlist.description}
                      </p>
                    ) : null}
                  </div>

                </div>

              </div>
            </div>
          </TmdbBackdrop>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">
              {getAddMediaHeading(mediaType)}
            </h2>

            <div className="mt-5">
              <div className="relative">
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
                    className="w-full rounded-[1.5rem] border border-white/10 bg-stone-950 px-4 py-4 pr-28 text-white transition outline-none focus:border-white/30"
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
                      className="absolute right-4 rounded-full border border-white/10 px-3 py-1 text-xs tracking-[0.18em] text-stone-300 uppercase transition hover:border-white/25 hover:text-white"
                    >
                      Clear
                    </button>
                  ) : null}
                </div>

                {dropdownOpen ? (
                  <div
                    onMouseDown={(event) => event.preventDefault()}
                    className="absolute inset-x-0 top-[calc(100%+0.75rem)] z-20 overflow-hidden rounded-[1.5rem] border border-white/10 bg-stone-950/95 shadow-2xl shadow-black/40 backdrop-blur"
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
                      <div className="max-h-[22rem] overflow-y-auto p-2">
                        {suggestionResults.map((result, index) => {
                          const alreadyAdded = existingTmdbIds.has(
                            result.tmdbId,
                          );

                          return (
                            <div
                              key={result.tmdbId}
                              className={`grid grid-cols-[56px_1fr_auto] items-center gap-3 rounded-[1.2rem] px-3 py-3 transition ${
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
                                className="aspect-[2/3] rounded-[0.9rem]"
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
                                <p className="text-sm text-stone-400">
                                  {result.overview || "No overview available."}
                                </p>
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

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold tracking-[0.2em] text-stone-500 uppercase">
                  Search results
                </h3>
                {searchReady ? (
                  <p className="text-sm text-stone-500">
                    {isSearchPending
                      ? "Refreshing artwork..."
                      : `${searchResults.length} results`}
                  </p>
                ) : null}
              </div>

              {searchReady && !isSearchPending && searchResults.length === 0 ? (
                <div className="rounded-[1.75rem] border border-dashed border-white/10 bg-stone-950/60 p-5 text-stone-400">
                  {getNoResultsLabel(mediaType)}
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {searchResults.map((result) => {
                  const alreadyAdded = existingTmdbIds.has(result.tmdbId);

                  return (
                    <div
                      key={result.tmdbId}
                      className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-stone-950/80"
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

            {addItem.error ? (
              <p className="mt-4 text-sm text-rose-300">
                {addItem.error.message}
              </p>
            ) : null}
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Queue</h2>

            {watchlist.items.length === 0 ? (
              <div className="mt-5 rounded-[1.75rem] border border-dashed border-white/10 bg-stone-950/60 p-5 text-stone-400">
                {getEmptyQueueLabel(mediaType)}
              </div>
            ) : null}

            <div className="mt-5 grid gap-5">
              {watchlist.items.map((item, index) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-stone-950/85"
                >
                  <div className="grid gap-5 p-4 lg:grid-cols-[210px_1fr] lg:p-5">
                    <TmdbPoster
                      title={item.title}
                      posterPath={item.posterPath}
                      backdropPath={item.backdropPath}
                      className="aspect-[2/3] rounded-[1.25rem]"
                    />

                    <div className="space-y-5">
                      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide text-stone-300 uppercase">
                                #{index + 1}
                              </span>
                              <h3 className="text-2xl font-semibold text-white">
                                {item.title}
                              </h3>
                              {item.year ? (
                                <span className="text-sm text-stone-500">
                                  {item.year}
                                </span>
                              ) : null}
                              <span className="rounded-full bg-white/5 px-3 py-1 text-xs tracking-wide text-stone-300 uppercase">
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

                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => moveItem(item.id, "up")}
                            disabled={index === 0 || reorderItems.isPending}
                            className="rounded-full border border-white/15 px-3 py-2 text-sm transition hover:border-white/30 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            Move up
                          </button>
                          <button
                            type="button"
                            onClick={() => moveItem(item.id, "down")}
                            disabled={
                              index === watchlist.items.length - 1 ||
                              reorderItems.isPending
                            }
                            className="rounded-full border border-white/15 px-3 py-2 text-sm transition hover:border-white/30 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            Move down
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              updateItem.mutate({
                                itemId: item.id,
                                status:
                                  item.status === "WATCHED"
                                    ? "QUEUED"
                                    : "WATCHED",
                                note: noteDrafts[item.id] ?? item.note,
                              })
                            }
                            className="rounded-full border border-white/15 px-3 py-2 text-sm transition hover:border-white/30"
                          >
                            {item.status === "WATCHED"
                              ? "Move to queue"
                              : "Mark watched"}
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              removeItem.mutate({ itemId: item.id })
                            }
                            className="rounded-full border border-rose-400/20 px-3 py-2 text-sm text-rose-200 transition hover:border-rose-300/40"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <textarea
                          value={noteDrafts[item.id] ?? ""}
                          onChange={(event) =>
                            setNoteDrafts((current) => ({
                              ...current,
                              [item.id]: event.target.value,
                            }))
                          }
                          className="min-h-28 w-full rounded-[1.25rem] border border-white/10 bg-stone-950 px-4 py-3 text-white transition outline-none focus:border-white/30"
                          placeholder="Shared note for this title..."
                        />
                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              updateItem.mutate({
                                itemId: item.id,
                                note: noteDrafts[item.id] ?? "",
                                status: item.status,
                              })
                            }
                            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-stone-900 transition hover:bg-stone-200"
                          >
                            Save note
                          </button>
                          {item.watchedAt ? (
                            <span className="text-xs tracking-wide text-stone-500 uppercase">
                              Watched{" "}
                              {new Date(item.watchedAt).toLocaleDateString()}
                            </span>
                          ) : null}
                        </div>
                      </div>
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
            {reorderItems.error ? (
              <p className="mt-4 text-sm text-rose-300">
                {reorderItems.error.message}
              </p>
            ) : null}
          </section>
        </div>

        <aside className="space-y-8">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Settings</h2>

            {watchlist.canManage ? (
              <form
                className="mt-5 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  updateWatchlist.mutate({
                    watchlistId,
                    name: draftName,
                    description: draftDescription || undefined,
                  });
                }}
              >
                <label className="block space-y-2">
                  <span className="text-sm text-stone-300">Name</span>
                  <input
                    required
                    value={draftName}
                    onChange={(event) => setDraftName(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-stone-950 px-4 py-3 text-white transition outline-none focus:border-white/30"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-sm text-stone-300">Description</span>
                  <textarea
                    value={draftDescription}
                    onChange={(event) =>
                      setDraftDescription(event.target.value)
                    }
                    className="min-h-24 w-full rounded-2xl border border-white/10 bg-stone-950 px-4 py-3 text-white transition outline-none focus:border-white/30"
                  />
                </label>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="rounded-full bg-white px-4 py-2 font-medium text-stone-900 transition hover:bg-stone-200"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm("Delete this watchlist?")) {
                        deleteWatchlist.mutate({ watchlistId });
                      }
                    }}
                    className="rounded-full border border-rose-400/20 px-4 py-2 text-rose-200 transition hover:border-rose-300/40"
                  >
                    Delete watchlist
                  </button>
                </div>
              </form>
            ) : (
              <p className="mt-5 text-sm text-stone-400">
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

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">
              Collaborators
            </h2>

            {watchlist.canManage ? (
              <form
                className="mt-5 flex flex-col gap-3"
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
                  className="w-full rounded-2xl border border-white/10 bg-stone-950 px-4 py-3 text-white transition outline-none focus:border-white/30"
                  placeholder="friend@example.com"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white px-4 py-2 font-medium text-stone-900 transition hover:bg-stone-200"
                >
                  Send invite
                </button>
              </form>
            ) : null}

            {inviteMember.error ? (
              <p className="mt-4 text-sm text-rose-300">
                {inviteMember.error.message}
              </p>
            ) : null}

            <div className="mt-6 space-y-3">
              {watchlist.members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-stone-950/80 px-4 py-3"
                >
                  <div>
                    <div className="font-medium text-white">
                      {member.user.name ?? member.user.email}
                    </div>
                    <div className="text-xs tracking-wide text-stone-500 uppercase">
                      {member.role}
                    </div>
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
                      className="rounded-full border border-rose-400/20 px-3 py-2 text-sm text-rose-200 transition hover:border-rose-300/40"
                    >
                      Remove
                    </button>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold tracking-[0.18em] text-stone-500 uppercase">
                Pending invites
              </h3>
              <div className="mt-3 space-y-3">
                {watchlist.invites.length === 0 ? (
                  <p className="text-sm text-stone-400">No pending invites.</p>
                ) : null}

                {watchlist.invites.map((invite) => (
                  <div
                    key={invite.id}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-stone-950/80 px-4 py-3"
                  >
                    <div>
                      <div className="font-medium text-white">
                        {invite.email}
                      </div>
                      <div className="text-xs tracking-wide text-stone-500 uppercase">
                        Expires{" "}
                        {new Date(invite.expiresAt).toLocaleDateString()}
                      </div>
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
                        className="rounded-full border border-white/15 px-3 py-2 text-sm transition hover:border-white/30"
                      >
                        Revoke
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

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
        </aside>
      </section>
    </div>
  );
}
