#!/usr/bin/env bash

set -euo pipefail

BASE_SHA="${1:-}"
HEAD_SHA="${2:-HEAD}"

if [[ -z "$BASE_SHA" ]]; then
  echo "No base SHA provided; skipping artifact checks."
  exit 0
fi

changed_files="$(git diff --name-only "$BASE_SHA" "$HEAD_SHA")"

if [[ -z "$changed_files" ]]; then
  echo "No changed files detected between $BASE_SHA and $HEAD_SHA."
  exit 0
fi

if grep -Fqx "prisma/schema.prisma" <<<"$changed_files"; then
  if ! grep -q '^prisma/migrations/.*/migration\.sql$' <<<"$changed_files"; then
    echo "prisma/schema.prisma changed without a committed migration."
    exit 1
  fi

  if ! grep -q '^generated/prisma/' <<<"$changed_files"; then
    echo "prisma/schema.prisma changed without committed generated/prisma output."
    exit 1
  fi
fi

if grep -Fqx "src/env.js" <<<"$changed_files"; then
  if ! grep -Fqx ".env.example" <<<"$changed_files"; then
    echo "src/env.js changed without updating .env.example."
    exit 1
  fi
fi

echo "Artifact checks passed."
