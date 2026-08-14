# SUNPOLE HUB Project Structure Plan

This plan is intentionally non-destructive. The first physical migration stage
keeps old public links alive while the HUB catalog starts using `apps/` and
`archive/`.

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

- `apps/` - active and reviewable project entries.
- `archive/` - confirmed old versions, duplicates, and alternate variants.

## Current migration stage

- 194 catalog cards remain in `data/projects-hub.js`.
- 130 catalog entries now point into `apps/`.
- 63 catalog entries now point into `archive/`.
- 143 old root project HTML files are redirect stubs.
- 37 old project folders are copied into `apps/` or `archive/`.
- Existing project folders are kept at old URLs for compatibility.
- The only catalog card still pointing to a root HTML file is the service entry `index.html`.

## Safe migration rules

1. Keep old links working.
2. Choose canonical projects before moving any project file.
3. Add redirect or moved pages before any physical move.
4. Keep `shop.html` until the HUB has fully replaced its role.
5. Keep old project folders reachable until folder-level redirects and asset paths are reviewed.
6. Do not run auto screenshots during this migration step.
