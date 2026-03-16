import "server-only";

import { TRPCError } from "@trpc/server";

import { env } from "~/env";
import { type WatchlistMediaTypeValue } from "~/features/watchlists/lib/watchlist-media";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

type TmdbCrewMember = {
  job: string;
  name: string;
};

type TmdbMovieResult = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string | null;
  credits?: {
    crew: TmdbCrewMember[];
  };
};

type TmdbTvResult = {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string | null;
  created_by?: Array<{
    name: string;
  }>;
};

export type MediaSearchResult = {
  tmdbId: number;
  mediaType: WatchlistMediaTypeValue;
  title: string;
  creditNames: string | null;
  overview: string;
  posterPath: string | null;
  backdropPath: string | null;
  year: number | null;
};

function getUniqueNames(names: string[]) {
  const normalizedNames = names
    .map((name) => name.trim())
    .filter((name) => name.length > 0);

  return [...new Set(normalizedNames)];
}

function getDirector(crew: TmdbMovieResult["credits"] = { crew: [] }) {
  const directors = crew.crew
    .filter((member) => member.job === "Director")
    .map((member) => member.name);
  const uniqueDirectors = getUniqueNames(directors);

  return uniqueDirectors.length > 0 ? uniqueDirectors.join(", ") : null;
}

function getCreators(createdBy: TmdbTvResult["created_by"] = []) {
  const uniqueCreators = getUniqueNames(
    createdBy.map((creator) => creator.name),
  );

  return uniqueCreators.length > 0 ? uniqueCreators.join(", ") : null;
}

function parseYear(date: string | null | undefined) {
  const year = date?.slice(0, 4);

  return year ? Number(year) : null;
}

export function mapTmdbMovie(movie: TmdbMovieResult): MediaSearchResult {
  return {
    tmdbId: movie.id,
    mediaType: "MOVIE",
    title: movie.title,
    creditNames: getDirector(movie.credits),
    overview: movie.overview,
    posterPath: movie.poster_path,
    backdropPath: movie.backdrop_path,
    year: parseYear(movie.release_date),
  };
}

export function mapTmdbTv(show: TmdbTvResult): MediaSearchResult {
  return {
    tmdbId: show.id,
    mediaType: "TV",
    title: show.name,
    creditNames: getCreators(show.created_by),
    overview: show.overview,
    posterPath: show.poster_path,
    backdropPath: show.backdrop_path,
    year: parseYear(show.first_air_date),
  };
}

function getTmdbApiKey() {
  const apiKey = env.TMDB_API_KEY;
  if (!apiKey) {
    throw new TRPCError({
      code: "PRECONDITION_FAILED",
      message: "TMDB_API_KEY is not configured.",
    });
  }

  return apiKey;
}

async function tmdbFetch<T>(path: string, searchParams?: URLSearchParams) {
  const apiKey = getTmdbApiKey();
  const url = new URL(`${TMDB_BASE_URL}${path}`);
  url.searchParams.set("api_key", apiKey);

  for (const [key, value] of searchParams ?? []) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url, {
    next: { revalidate: 60 * 60 * 6 },
  });

  if (!response.ok) {
    throw new TRPCError({
      code: "BAD_GATEWAY",
      message: "TMDB request failed.",
    });
  }

  return (await response.json()) as T;
}

async function searchMovies(query: string) {
  const payload = await tmdbFetch<{ results: TmdbMovieResult[] }>(
    "/search/movie",
    new URLSearchParams({
      include_adult: "false",
      query,
    }),
  );

  const topResults = payload.results.slice(0, 10).map(mapTmdbMovie);
  const detailResults = await Promise.allSettled(
    topResults.map((movie) => getMovieDetails(movie.tmdbId)),
  );

  return topResults.map((movie, index) => {
    const detailResult = detailResults[index];

    if (detailResult?.status !== "fulfilled") {
      return movie;
    }

    return {
      ...movie,
      creditNames: detailResult.value.creditNames,
    };
  });
}

async function searchTv(query: string) {
  const payload = await tmdbFetch<{ results: TmdbTvResult[] }>(
    "/search/tv",
    new URLSearchParams({
      include_adult: "false",
      query,
    }),
  );

  const topResults = payload.results.slice(0, 10).map(mapTmdbTv);
  const detailResults = await Promise.allSettled(
    topResults.map((show) => getTvDetails(show.tmdbId)),
  );

  return topResults.map((show, index) => {
    const detailResult = detailResults[index];

    if (detailResult?.status !== "fulfilled") {
      return show;
    }

    return {
      ...show,
      creditNames: detailResult.value.creditNames,
    };
  });
}

async function getMovieDetails(tmdbId: number) {
  const payload = await tmdbFetch<TmdbMovieResult>(
    `/movie/${tmdbId}`,
    new URLSearchParams({
      append_to_response: "credits",
    }),
  );

  return mapTmdbMovie(payload);
}

async function getTvDetails(tmdbId: number) {
  const payload = await tmdbFetch<TmdbTvResult>(`/tv/${tmdbId}`);

  return mapTmdbTv(payload);
}

export async function searchMedia(
  query: string,
  mediaType: WatchlistMediaTypeValue,
) {
  return mediaType === "TV" ? searchTv(query) : searchMovies(query);
}

export async function getMediaDetails(
  tmdbId: number,
  mediaType: WatchlistMediaTypeValue,
) {
  return mediaType === "TV" ? getTvDetails(tmdbId) : getMovieDetails(tmdbId);
}
