import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const optionalOutsideProduction = () =>
  process.env.NODE_ENV === "production"
    ? z.string().min(1)
    : z.string().min(1).optional();

export const env = createEnv({
  server: {
    AUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),
    AUTH_GOOGLE_ID: optionalOutsideProduction(),
    AUTH_GOOGLE_SECRET: optionalOutsideProduction(),
    RESEND_API_KEY: optionalOutsideProduction(),
    RESEND_FROM_EMAIL: optionalOutsideProduction(),
    DATABASE_URL: z.string().url(),
    TMDB_API_KEY: optionalOutsideProduction(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },
  client: {
    NEXT_PUBLIC_APP_NAME: z.string().default("FilmClub"),
  },
  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    DATABASE_URL: process.env.DATABASE_URL,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
