#!/bin/bash

git checkout dist
git merge main
git push origin dist
git checkout main
