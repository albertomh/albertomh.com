#!/bin/bash

# TODO: replace with GitHub Action

git stash --include-untracked
git switch dist
git merge main
git push origin dist
git switch main
git stash pop
