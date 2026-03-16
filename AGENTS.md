# FilmClub Agent Workflow

This repo deploys from GitHub to Vercel. Future agent work must keep Git history, Prisma artifacts, and deployment state reproducible from the repository alone.

## Required Git Flow

1. Start from a clean worktree. Run `git status --short` before making changes.
2. Sync `main` before feature work:
   - `git fetch origin`
   - `git switch main`
   - `git pull --ff-only`
   - If that fails because the local branch tracks multiple upstreams, run `git pull --ff-only origin main`.
3. Create a short-lived branch for every change.
4. Before committing, run:
   - `git status --short`
   - `git diff --stat`
   - `npm run verify`
5. Commit only intended files. Do not bundle unrelated local changes.
6. Push the branch and open a PR for every non-emergency change.
7. Wait for GitHub CI and Vercel preview checks to finish before merging.
8. This repository does not allow merge commits. Merge PRs with squash (preferred) or rebase, not with `--merge`.
9. After merge, verify the push to `main` finishes GitHub CI and the production Vercel deployment for the merged commit succeeds.

## Prisma Rules

- Treat Prisma as migrations-first.
- If `prisma/schema.prisma` changes:
  - run `npm run db:dev -- --name <migration-name>`
  - run `npm run prisma:generate`
  - commit the new folder under `prisma/migrations/`
  - commit the updated `generated/prisma/` output
- Do not use `db:push` for normal feature work. It is only a local escape hatch.

## Env Rules

- Never commit `.env`, `.env.local`, or `.env.vercel`.
- Keep `.env.example` in sync with any change to `src/env.js`.
- If you need Vercel-managed env vars locally, pull them into `.env.vercel` and start the app with `npm run dev:vercel`.

## Verification Rules

- Default pre-commit verification: `npm run verify`
- If you change build-time behavior or env handling, also run `npm run build` with valid env vars.
- When you need a local production build and real secrets are unavailable, use the same stub-style env values CI uses. This is sufficient for schema validation:
  - `AUTH_SECRET=ci-auth-secret`
  - `AUTH_GOOGLE_ID=ci-google-id`
  - `AUTH_GOOGLE_SECRET=ci-google-secret`
  - `DATABASE_URL=postgresql://postgres:password@127.0.0.1:5432/filmclub`
  - `NEXT_PUBLIC_APP_NAME=FilmClub`
  - `RESEND_API_KEY=ci-resend-key`
  - `RESEND_FROM_EMAIL=filmclub@example.com`
  - `TMDB_API_KEY=ci-tmdb-key`
  - `NODE_ENV=production`
- If you change UI behavior, include screenshots or a short note in the PR describing what changed.

## GitHub / Vercel Expectations

- Open a PR for every non-emergency change.
- CI must stay green before merge.
- Vercel preview deployments should be reviewed for UI-facing work.
- Prefer GitHub CLI for release flow work:
  - `gh pr create` to open the PR
  - `gh pr checks <pr-number> --watch` to monitor PR checks
  - `gh pr merge <pr-number> --squash --delete-branch` to merge
  - `gh run watch <run-id>` to monitor the post-merge `main` workflow
- Vercel CLI is not guaranteed to be authenticated locally. If `vercel whoami` fails, use GitHub PR checks or commit statuses to monitor preview/production deploys instead.
- Vercel posts commit statuses for both preview and production deployments. Check the merged commit status if you need to confirm the production rollout completed for `main`.
