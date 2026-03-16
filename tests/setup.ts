import { vi } from "vitest";

process.env.DATABASE_URL ??=
  "postgresql://postgres:password@localhost:5432/movie_watchlist_test";
process.env.AUTH_SECRET ??= "test-secret";
process.env.RESEND_API_KEY ??= "test-resend";
process.env.RESEND_FROM_EMAIL ??= "watchlist@example.com";
process.env.TMDB_API_KEY ??= "test-tmdb";

vi.mock("server-only", () => ({}));
vi.mock("next-auth", () => ({
  default: () => ({
    auth: vi.fn(),
    handlers: { GET: vi.fn(), POST: vi.fn() },
    signIn: vi.fn(),
    signOut: vi.fn(),
  }),
}));
