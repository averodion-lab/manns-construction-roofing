#!/usr/bin/env bash
# Build the site for GitHub Pages and publish dist/ to the gh-pages branch.
set -euo pipefail

cd "$(dirname "$0")/.."
REMOTE="$(git remote get-url origin)"

GITHUB_PAGES=1 npx astro build
touch dist/.nojekyll # serve the _astro/ folder (Jekyll skips underscore dirs)

cd dist
git init -q -b gh-pages
git add -A
git commit -qm "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
git push -qf "$REMOTE" gh-pages
rm -rf .git
echo "Deployed to gh-pages."
