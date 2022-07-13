#!/usr/bin/env sh

set -e

pnpm docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:study-bing/vue3-template-doc.git main

cd -