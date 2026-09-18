# SUNPOLE HUB Catalog Cleanup Report

Snapshot for `v0.7.6-conflict-free-redirects`.

## Catalog counts

- Total cards: 201
- `main`: 11
- `experiment`: 18
- `review`: 170
- `archive`: 2
- Cards with `canonicalOf`: 13
- Cards with `versionOf`: 76
- Cards without a real screenshot: 165
- Cards with `needsReviewReason`: 186

## Current decision

The catalog is now a working map of the repository, not a completed cleanup.
The first canonical migrations are complete: the code is copied into its own
local Git repository and public GitHub repository before an old entry page is
replaced by a redirect. Canonical identifiers use `YYNNNN` to avoid collisions
with existing short CODE_CLUB folder numbers. All remaining physical cleanup is
deferred until each individual project passes the same checks.

## Deferred work

- Review cards marked with `needsReviewReason`.
- Confirm canonical projects for duplicate/version groups.
- Add real screenshots later.
- Decide which reviewed projects can move to `apps/`.
- Decide which confirmed old versions can move to `archive/`.
