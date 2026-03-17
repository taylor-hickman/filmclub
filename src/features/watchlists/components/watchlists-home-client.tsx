"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { TmdbBackdrop, TmdbPoster } from "~/app/_components/tmdb-media";
import {
  getWatchlistBadgeLabel,
  getWatchlistTypeLabel,
  type WatchlistMediaTypeValue,
  watchlistMediaTypes,
} from "~/features/watchlists/lib/watchlist-media";
import { api } from "~/trpc/react";

function CreateWatchlistForm({
  onSubmit,
  isPending,
  error,
  onCancel,
}: {
  onSubmit: (data: {
    name: string;
    description?: string;
    mediaType: WatchlistMediaTypeValue;
  }) => void;
  isPending: boolean;
  error?: string | null;
  onCancel?: () => void;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [mediaType, setMediaType] = useState<WatchlistMediaTypeValue>("MOVIE");

  return (
    <form
      className="space-y-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 sm:rounded-3xl sm:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({
          name,
          description: description || undefined,
          mediaType,
        });
      }}
    >
      <h2 className="text-xl font-semibold text-white sm:text-2xl">
        Create a watchlist
      </h2>

      <label className="block space-y-1.5">
        <span className="text-sm text-stone-300">Name</span>
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-xl border border-white/10 bg-stone-950 px-3.5 py-3 text-base text-white transition outline-none focus:border-white/30 sm:px-4"
          placeholder="Friday horror queue"
        />
      </label>

      <fieldset className="space-y-1.5">
        <legend className="text-sm text-stone-300">List type</legend>
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {watchlistMediaTypes.map((option) => (
            <label
              key={option}
              className={`flex min-h-[44px] cursor-pointer items-center justify-center rounded-xl border px-3 py-2.5 text-sm transition ${
                mediaType === option
                  ? "border-white/40 bg-white/10 text-white"
                  : "border-white/10 bg-stone-950 text-stone-300 hover:border-white/20"
              }`}
            >
              <span>{getWatchlistTypeLabel(option)}</span>
              <input
                type="radio"
                name="mediaType"
                value={option}
                checked={mediaType === option}
                onChange={() => setMediaType(option)}
                className="sr-only"
              />
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block space-y-1.5">
        <span className="text-sm text-stone-300">Description</span>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="min-h-24 w-full rounded-xl border border-white/10 bg-stone-950 px-3.5 py-3 text-base text-white transition outline-none focus:border-white/30 sm:px-4"
          placeholder="What is this list for?"
        />
      </label>

      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="min-h-[44px] rounded-full bg-white px-5 py-3 font-medium text-stone-900 transition hover:bg-stone-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Creating..." : "Create watchlist"}
        </button>
        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            className="min-h-[44px] rounded-full px-4 py-3 text-sm text-stone-400 transition hover:text-white"
          >
            Cancel
          </button>
        ) : null}
      </div>

      {error ? (
        <p className="text-sm text-rose-300">{error}</p>
      ) : null}
    </form>
  );
}

export function WatchlistsHomeClient() {
  const router = useRouter();
  const utils = api.useUtils();
  const [formOpen, setFormOpen] = useState(false);

  const watchlistsQuery = api.watchlists.list.useQuery();
  const createWatchlist = api.watchlists.create.useMutation({
    onSuccess: async (watchlist) => {
      setFormOpen(false);
      await utils.watchlists.list.invalidate();
      router.push(`/app/watchlists/${watchlist.id}`);
    },
  });

  const showEmptyState =
    watchlistsQuery.data?.length === 0;

  return (
    <div className="space-y-6">
      {showEmptyState ? (
        <CreateWatchlistForm
          onSubmit={(data) => createWatchlist.mutate(data)}
          isPending={createWatchlist.isPending}
          error={createWatchlist.error?.message}
        />
      ) : (
        <>
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Your watchlists
            </h2>
            {!formOpen ? (
              <button
                type="button"
                onClick={() => setFormOpen(true)}
                className="min-h-[44px] rounded-full border border-white/10 px-4 py-2.5 text-sm text-stone-400 transition hover:border-white/20 hover:text-white"
              >
                + New
              </button>
            ) : null}
          </div>

          {formOpen ? (
            <CreateWatchlistForm
              onSubmit={(data) => createWatchlist.mutate(data)}
              isPending={createWatchlist.isPending}
              error={createWatchlist.error?.message}
              onCancel={() => setFormOpen(false)}
            />
          ) : null}

          {watchlistsQuery.isLoading ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-stone-300 sm:p-6">
              Loading watchlists...
            </div>
          ) : null}

          {watchlistsQuery.error ? (
            <div className="rounded-2xl border border-rose-400/20 bg-rose-500/10 p-4 text-rose-200 sm:p-6">
              {watchlistsQuery.error.message}
            </div>
          ) : null}

          <div className="grid gap-4 sm:gap-5">
            {watchlistsQuery.data?.map((watchlist) => {
              const leadPreview =
                watchlist.previewItems.find((item) => item.backdropPath) ??
                watchlist.previewItems[0];

              return (
                <Link
                  key={watchlist.id}
                  href={`/app/watchlists/${watchlist.id}`}
                  className="block overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] transition hover:border-white/10 sm:rounded-[2rem]"
                >
                  <TmdbBackdrop
                    title={watchlist.name}
                    backdropPath={leadPreview?.backdropPath ?? null}
                    posterPath={leadPreview?.posterPath ?? null}
                    className="min-h-[14rem] sm:min-h-[19rem]"
                  >
                    <div className="flex h-full flex-col justify-between gap-4 p-4 sm:gap-6 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-white/10 bg-black/10 px-2.5 py-0.5 text-xs text-stone-200">
                          {getWatchlistBadgeLabel(watchlist.mediaType)}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-xl font-semibold text-white sm:text-2xl">
                          {watchlist.name}
                        </h3>
                        <p className="text-xs text-stone-400 sm:text-sm">
                          {watchlist.itemCount}{" "}
                          {watchlist.itemCount === 1 ? "title" : "titles"} ·{" "}
                          {watchlist.memberCount}{" "}
                          {watchlist.memberCount === 1
                            ? "member"
                            : "members"}
                        </p>
                        {watchlist.description ? (
                          <p className="text-sm text-stone-200 line-clamp-2">
                            {watchlist.description}
                          </p>
                        ) : null}

                        {watchlist.previewItems.length > 0 ? (
                          <div className="flex gap-2 overflow-x-auto pt-2 sm:gap-3 sm:pt-3">
                            {watchlist.previewItems.map((item) => (
                              <div
                                key={`${watchlist.id}-${item.tmdbId}`}
                                className="w-[56px] shrink-0 sm:w-[72px]"
                              >
                                <TmdbPoster
                                  title={item.title}
                                  posterPath={item.posterPath}
                                  backdropPath={item.backdropPath}
                                  size="thumb"
                                  className="aspect-[2/3] rounded-lg border border-white/10 sm:rounded-[1rem]"
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="pt-2 text-sm text-stone-500">
                            No titles yet.
                          </p>
                        )}
                      </div>
                    </div>
                  </TmdbBackdrop>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
