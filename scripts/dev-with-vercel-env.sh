#!/usr/bin/env bash

set -euo pipefail

set -a

if [[ -f ".env" ]]; then
  source ".env"
fi

if [[ -f ".env.vercel" ]]; then
  source ".env.vercel"
fi

set +a

exec next dev --turbo "$@"
