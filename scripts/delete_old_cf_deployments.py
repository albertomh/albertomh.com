#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.11"
# ///

"""Delete old Cloudflare Pages deployments while preserving main deployments."""

from __future__ import annotations

import argparse
import json
import os
import sys
from dataclasses import dataclass
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlencode
from urllib.request import Request, urlopen


API_ROOT = "https://api.cloudflare.com/client/v4"


@dataclass(frozen=True)
class Deployment:
    id: str
    created_on: str
    branch: str | None


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--do-delete",
        action="store_true",
        help="delete deployments; the default is a dry run",
    )
    parser.add_argument(
        "--keep",
        type=int,
        default=10,
        metavar="COUNT",
        help="number of newest deployments to keep (default: 10)",
    )
    args = parser.parse_args()
    if args.keep < 0:
        parser.error("--keep must be zero or greater")
    return args


def required_environment(name: str) -> str:
    value = os.environ.get(name)
    if not value:
        raise SystemExit(f"Set {name}")
    return value


def request_json(url: str, token: str, method: str = "GET") -> dict[str, Any]:
    request = Request(url, headers={"Authorization": f"Bearer {token}"}, method=method)
    try:
        with urlopen(request) as response:  # noqa: S310 -- URL is the fixed Cloudflare API.
            payload = json.load(response)
    except HTTPError as error:
        body = error.read().decode(errors="replace")
        raise RuntimeError(f"Cloudflare API returned HTTP {error.code}: {body}") from error
    except URLError as error:
        raise RuntimeError(f"Could not reach the Cloudflare API: {error.reason}") from error

    if not payload.get("success", False):
        errors = payload.get("errors", [])
        raise RuntimeError(f"Cloudflare API request failed: {errors}")
    return payload


def deployments_from(payload: dict[str, Any]) -> list[Deployment]:
    result = payload.get("result", [])
    return sorted(
        (
            Deployment(
                id=deployment["id"],
                created_on=deployment["created_on"].split(".", 1)[0],
                branch=(deployment.get("deployment_trigger", {}).get("metadata", {}).get("branch")),
            )
            for deployment in result
        ),
        key=lambda deployment: deployment.created_on,
        reverse=True,
    )


def main() -> None:
    args = parse_args()
    token = required_environment("CF_API_TOKEN")
    account_id = required_environment("CF_ACCOUNT_ID")
    project_name = required_environment("CF_PROJECT_NAME")
    deployments_url = (
        f"{API_ROOT}/accounts/{quote(account_id, safe='')}"
        f"/pages/projects/{quote(project_name, safe='')}/deployments"
    )

    print(f"Keeping latest {args.keep} deployments for project '{project_name}'")
    if not args.do_delete:
        print("[DRY RUN] Pass --do-delete to actually delete")

    deleted = skipped = seen = 0
    page = 1
    while True:
        response = request_json(f"{deployments_url}?{urlencode({'page': page, 'per_page': 25})}", token)
        for deployment in deployments_from(response):
            seen += 1
            if seen <= args.keep or deployment.branch == "main":
                continue

            if not args.do_delete:
                print(f"  [DRY RUN] Would delete: {deployment.id} (created: {deployment.created_on})")
                deleted += 1
                continue

            print(f"  Deleting: {deployment.id} (created: {deployment.created_on})")
            try:
                request_json(f"{deployments_url}/{quote(deployment.id, safe='')}", token, "DELETE")
            except RuntimeError as error:
                print(f"  Skipped {deployment.id} ({error})")
                skipped += 1
            else:
                deleted += 1

        total_pages = response.get("result_info", {}).get("total_pages", 1)
        if page >= total_pages:
            break
        page += 1

    if args.do_delete:
        print(f"Done. Deleted: {deleted}, Skipped: {skipped}")
    else:
        print(f"Done. Would have deleted {deleted} deployments")


if __name__ == "__main__":
    try:
        main()
    except RuntimeError as error:
        print(f"Error: {error}", file=sys.stderr)
        raise SystemExit(1) from error
