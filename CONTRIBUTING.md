# Contributing

## Branch Workflow

This repo should stay deployable from Git alone. Use this workflow for every feature, fix, or refactor:

1. `git fetch origin`
2. `git switch main`
3. `git pull --ff-only`
4. `git switch -c <branch-name>`
5. Make the change
6. Run `npm run verify`
7. Inspect `git status --short` and `git diff --stat`
8. Commit only the intended files
9. Push the branch and open a PR

Avoid direct commits to `main` outside of emergencies.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start PostgreSQL locally:

```bash
./start-database.sh
```

3. Create local env files:

```bash
cp .env.example .env
```

Optional: pull shared Vercel env vars for local feature work:

```bash
vercel env pull .env.vercel
```

4. Apply committed migrations:

```bash
npm run db:migrate
```

5. Start the app:

```bash
npm run dev
```

If you rely on Vercel-managed env vars locally, use:

```bash
npm run dev:vercel
```

The default local database name in `.env.example` is `filmclub`.

## Schema Changes

Use a migrations-first workflow.

For schema edits:

```bash
npm run db:dev -- --name <migration-name>
npm run prisma:generate
```

Every Prisma schema change must include:

- `prisma/schema.prisma`
- a new migration folder in `prisma/migrations/`
- updated committed files in `generated/prisma/`

`npm run db:push` is not the normal workflow. Keep it for one-off local recovery only.

## Verification

Run this before every PR:

```bash
npm run verify
```

If you touched build-time behavior, env validation, or deployment code, also run:

```bash
npm run build
```

If you changed UI behavior, include screenshots or a short visual summary in the PR.

## Pull Requests

PRs should clearly state:

- what changed
- how it was verified
- whether Prisma schema changed
- whether env vars changed
- whether Vercel preview should be checked for UI updates

## Recommended Repo Settings

These settings are not stored in the repo, but should be enabled in GitHub/Vercel:

- protect `main`
- require the CI workflow to pass before merge
- require Vercel preview/build checks before merge
- deploy production from `main` only
