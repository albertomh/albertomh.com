#!/bin/bash

git stash
git checkout dist
git merge main
git push origin dist
git checkout main
git stash pop
