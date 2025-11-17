#!/usr/bin/env bash
set -e

npm run build

npx gh-pages -d dist -b gh-pages
