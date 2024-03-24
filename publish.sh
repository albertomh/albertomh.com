#!/bin/bash

git stash
git switch dist
git merge main
git push origin dist
git switch main
git stash pop
