# SUNPOLE HUB Project Structure Plan

This plan is intentionally non-destructive. No files should be deleted, moved,
or renamed until redirects and canonical project choices are reviewed.

## Current root entry points

- `index.html` - public start page for SUNPOLE HUB at `https://sunpole.github.io/stilist/`.
- `hub-current.html` - stable current HUB entry that redirects to the active HUB.
- `hub-versions.html` - switcher for historical HUB versions.
- `project-view-v2.html` - project passport and detail page.
- `shop.html` - old storefront kept to avoid breaking old links.

## Current support folders

- `data/` - generated and manual catalog data, including `projects-hub.js`.
- `docs/` - roadmap, version notes, cleanup reports, and structure plans.
- `tools/` - local builder and future maintenance scripts.
- `assets/` - shared assets, overlays, media, and future shared screenshots.

## Future folders

- `apps/` - future home for reviewed canonical projects after redirects exist.
- `archive/` - future home for confirmed old versions and exact duplicates.

## Safe migration rules

1. Keep old links working.
2. Choose canonical projects before moving any project file.
3. Add redirect or moved pages before any physical move.
4. Keep `shop.html` until the HUB has fully replaced its role.
5. Keep project folders untouched until the next cleanup stage.
6. Do not run auto screenshots during this final-entry packaging step.
