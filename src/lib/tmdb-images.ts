const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export type TmdbImageSize = "w154" | "w342" | "w780";

export function getTmdbImageUrl(
  path: string | null | undefined,
  size: TmdbImageSize,
) {
  if (!path) {
    return null;
  }

  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}
