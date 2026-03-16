export const watchlistMediaTypes = ["MOVIE", "TV"] as const;

export type WatchlistMediaTypeValue = (typeof watchlistMediaTypes)[number];

export function getWatchlistTypeLabel(mediaType: WatchlistMediaTypeValue) {
  return mediaType === "TV" ? "TV Show" : "Movie";
}

export function getWatchlistBadgeLabel(mediaType: WatchlistMediaTypeValue) {
  return mediaType === "TV" ? "TV list" : "Movie list";
}

export function getAddMediaHeading(mediaType: WatchlistMediaTypeValue) {
  return mediaType === "TV" ? "Add TV shows" : "Add movies";
}

export function getSearchPlaceholder(mediaType: WatchlistMediaTypeValue) {
  return mediaType === "TV" ? "Search TV shows..." : "Search movies...";
}

export function getSearchEmptyLabel(mediaType: WatchlistMediaTypeValue) {
  return mediaType === "TV"
    ? "No matching TV shows yet."
    : "No matching movies yet.";
}

export function getNoResultsLabel(mediaType: WatchlistMediaTypeValue) {
  return mediaType === "TV"
    ? "No TV shows matched this search."
    : "No movies matched this search.";
}

export function getEmptyQueueLabel(mediaType: WatchlistMediaTypeValue) {
  return mediaType === "TV"
    ? "No TV shows on this list yet."
    : "No movies on this list yet.";
}

export function getWaitingForFirstTitleLabel(
  mediaType: WatchlistMediaTypeValue,
) {
  return mediaType === "TV"
    ? "Waiting for the first TV show"
    : "Waiting for the first movie";
}

export function getCreditPrefix(mediaType: WatchlistMediaTypeValue) {
  return mediaType === "TV" ? "Created by" : "Directed by";
}

export function getMissingCreditLabel(mediaType: WatchlistMediaTypeValue) {
  return mediaType === "TV" ? "Creator unavailable" : "Director unavailable";
}

export function getYearPrefix(mediaType: WatchlistMediaTypeValue) {
  return mediaType === "TV" ? "First aired" : "Released";
}
