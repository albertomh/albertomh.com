---
layout: post
title: Pycliché & Djereo
blurb: Opinionated, batteries-included project templates for Python & Django.
createdAt: '2025-06-26'
path: /2025/pycliche-and-djereo
permalink: 2025/pycliche-and-djereo/
attribution: ''
tags: ['post']
---

<!-- markdownlint-disable MD013 line-length -->
<!-- markdownlint-disable MD033 no-inline-html -->

Starting a Python or Django project? Steal my templates!

As part of making 2025 my 'year of Django' I've authored 'pycliché' & 'djereo',
opinionated project templates for Python & Django, respectively.

They provide paved paths for someone looking to build using modern Python tooling
(pyproject.toml, IPython, structlog, nox), postgres, GitHub Actions for CI/CD, and produce
a lean container image you can chuck onto a VPS.

Features:

- Wizard-style CLI setup, with configurable version choices and opt-in extras such as htmx
& feature flags.
- Best practices and future-proof patterns sourced from the community.
- A focus on ergonomics and Developer Experience.
- Deploy-first approach to protect you from pain later down the line.
- Out-of-the-box automations with sensible defaults: pre-commit hooks, dependabot, Release
Please.

Read the docs and try them out at:

<a href="https://github.com/albertomh/pycliche" target="_blank">https://github.com/albertomh/pycliche</a>

<a href="https://github.com/albertomh/djereo" target="_blank">https://github.com/albertomh/djereo</a>

<img src="/assets/img/post/2025/2025-06_pycliche&djereo.png" alt="pycliché and djereo project logos, with badges showing technologies used in each." class="img-fluid pb-3">

These templates owe much to conversations I've had in the community after DjangoCon,
titbits picked up from Django Chat, and the writings of Adam Johnson & others.

While I don't expect my templates to compete with Will Vincent's Lithium, SaaS Pegasus or
the venerable Cookiecutter Django, building these templates has been a fantastic learning
experience.

- I've learnt that the buzz around Rust-powered tooling - Astral's excellent uv & ruff,
and BiomeJS - is real and these are viable tools.
- It was my first time using `nox` and GitHub Action's matrix strategy to boost confidence
in tests.
- Having recently completed <a href="https://developers.google.com/tech-writing/overview" target="_blank">Google's Tech Writing course</a>,
they were the perfect excuse to flex my documentation-writing muscles.

Try the templates, star them, let me know what you think!  
Spot a bug? Have ideas for improvement? Please drop me a line or raise a GitHub issue.
