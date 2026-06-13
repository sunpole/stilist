# SUNPOLE HUB

SUNPOLE HUB is the project storefront and working catalog for the `sunpole/stilist`
repository. It collects games, utilities, experiments, project passports, and
older HUB versions into one safe navigation layer.

Main public URL:

```text
https://sunpole.github.io/stilist/
```

Current HUB entry:

```text
hub-current.html
```

`data/projects-hub.js` is the auto catalog used by the HUB. It currently tracks
194 discovered project cards and includes service metadata for cleanup work:
`canonicalOf`, `versionOf`, `hasRealScreenshot`, and `needsReviewReason`.

Physical migration is now handled as a safe staged process. Catalog project
entries point to `apps/` and `archive/`, while old root project URLs remain as
redirect stubs and old project folders remain available for compatibility.

Useful entry points:

- `index.html` - public start page for SUNPOLE HUB.
- `hub-current.html` - current working HUB redirect.
- `hub-v4-clean.html` - current full catalog interface.
- `hub-versions.html` - version switcher.
- `project-view-v2.html` - project passport view.
- `shop.html` - old storefront kept for compatibility.

Structure folders:

- `apps/` - active and reviewable project entries used by the HUB catalog.
- `archive/` - old versions, duplicates, and alternate variants.
- `data/` - generated HUB catalog data.
- `docs/` - roadmap, migration notes, and cleanup reports.
- `tools/` - HUB builder and local utilities.
- `assets/` - shared HUB assets.
