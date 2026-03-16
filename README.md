# FilmClub

FilmClub is a modular movie-night web app built on the T3 stack. The first
shipped feature is Watchlists: collaborative movie and TV queues with TMDB
search, invite-based sharing, notes, reorder controls, and watched state.

The app is structured around a shared FilmClub shell with:

- a public marketing home at `/`
- an authenticated feature hub at `/app`
- reusable feature-instance membership and invite primitives
- Watchlists as the first feature at `/app/watchlists`

See [CONTRIBUTING.md](CONTRIBUTING.md) for the human workflow and
[AGENTS.md](AGENTS.md) for repo-specific agent rules.

## Stack

- Next.js App Router
- TypeScript
- tRPC
- Prisma + PostgreSQL
- Auth.js
- Tailwind CSS

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Start PostgreSQL locally:

```bash
./start-database.sh
```

3. Copy the example env file and fill in the missing values:

```bash
cp .env.example .env
```

Required secrets for the full app flow:

- `AUTH_SECRET`
- `AUTH_GOOGLE_ID`
- `AUTH_GOOGLE_SECRET`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `TMDB_API_KEY`
- `DATABASE_URL`
- `DIRECT_URL`

Optional: pull shared Vercel env vars for local development:

```bash
vercel env pull .env.vercel
```

4. Apply committed Prisma migrations:

```bash
npm run db:migrate
```

5. Start the dev server:

```bash
npm run dev
```

If you want to load both `.env` and `.env.vercel` locally, use:

```bash
npm run dev:vercel
```

## Useful commands

```bash
npm run prisma:generate
npm run db:dev -- --name <migration-name>
npm run check
npm run verify
npm test
npm run test:e2e
npm run build
```

`npm run build` requires production-style env vars. During verification, stub
values are enough for Google, Resend, and TMDB because the build only needs
schema-valid configuration.

## Database connection setup

- `DATABASE_URL` should be the pooled runtime connection string in hosted
  environments such as Vercel.
- `DIRECT_URL` should be the direct PostgreSQL connection string used by Prisma
  CLI commands such as `prisma migrate deploy`.
- For Supabase, that means `DATABASE_URL` should use the Supavisor pooler and
  `DIRECT_URL` should use the direct `db.<project-ref>.supabase.co:5432` host.

## Product scope

- FilmClub feature hub with shared auth and navigation
- Generic feature-instance ownership, membership, and invite records
- Watchlists feature with private movie and TV queues
- TMDB-backed metadata snapshots for watchlist items
- Shared reorder, note, remove, and watched-state actions
