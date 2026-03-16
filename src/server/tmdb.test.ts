import { describe, expect, it } from "vitest";

import { mapTmdbMovie, mapTmdbTv } from "~/server/tmdb";

describe("tmdb mapping", () => {
  it("maps movie payloads into the shared local shape", () => {
    expect(
      mapTmdbMovie({
        id: 42,
        title: "Alien",
        overview: "Xenomorph problems.",
        poster_path: "/alien.jpg",
        backdrop_path: "/alien-backdrop.jpg",
        release_date: "1979-05-25",
        credits: {
          crew: [
            {
              job: "Director",
              name: "Ridley Scott",
            },
          ],
        },
      }),
    ).toEqual({
      tmdbId: 42,
      mediaType: "MOVIE",
      title: "Alien",
      creditNames: "Ridley Scott",
      overview: "Xenomorph problems.",
      posterPath: "/alien.jpg",
      backdropPath: "/alien-backdrop.jpg",
      year: 1979,
    });
  });

  it("joins multiple directors in credit order without duplicates", () => {
    expect(
      mapTmdbMovie({
        id: 8,
        title: "Collaborative Feature",
        overview: "Two directors, one movie.",
        poster_path: null,
        backdrop_path: null,
        release_date: "2024-10-11",
        credits: {
          crew: [
            {
              job: "Writer",
              name: "Writer Name",
            },
            {
              job: "Director",
              name: "Director One",
            },
            {
              job: "Director",
              name: "Director Two",
            },
            {
              job: "Director",
              name: "Director One",
            },
          ],
        },
      }),
    ).toMatchObject({
      creditNames: "Director One, Director Two",
    });
  });

  it("joins TV creators in order without duplicates", () => {
    expect(
      mapTmdbTv({
        id: 1399,
        name: "Game of Thrones",
        overview: "Winter is coming.",
        poster_path: "/got.jpg",
        backdrop_path: "/got-backdrop.jpg",
        first_air_date: "2011-04-17",
        created_by: [
          { name: "David Benioff" },
          { name: "D. B. Weiss" },
          { name: "David Benioff" },
        ],
      }),
    ).toEqual({
      tmdbId: 1399,
      mediaType: "TV",
      title: "Game of Thrones",
      creditNames: "David Benioff, D. B. Weiss",
      overview: "Winter is coming.",
      posterPath: "/got.jpg",
      backdropPath: "/got-backdrop.jpg",
      year: 2011,
    });
  });

  it("falls back to null TV creator and year when metadata is missing", () => {
    expect(
      mapTmdbTv({
        id: 999,
        name: "Unknown Series",
        overview: "",
        poster_path: null,
        backdrop_path: null,
        first_air_date: null,
        created_by: [],
      }),
    ).toEqual({
      tmdbId: 999,
      mediaType: "TV",
      title: "Unknown Series",
      creditNames: null,
      overview: "",
      posterPath: null,
      backdropPath: null,
      year: null,
    });
  });
});
