# Physical Migration Map

SUNPOLE HUB is moving toward a cleaner GitHub Pages structure while preserving old public links.

This migration is intentionally conservative:

- No project file is removed without a live compatibility path.
- Root HTML project files become redirect stubs when their catalog entry moves.
- Existing project folders stay in place during this phase and are copied into `apps/` or `archive/` so old folder URLs and asset URLs do not break.
- HUB service pages remain in the repository root.

## Root Files To Keep

These files remain in the root because they are public entry points, HUB runtime pages, or repository metadata:

- `index.html` - SUNPOLE HUB landing page for GitHub Pages.
- `hub-current.html` - stable current HUB redirect.
- `hub-v4-clean.html` - current 194-project catalog UI.
- `hub-versions.html` - HUB version index.
- `project-view-v2.html` - project detail view.
- `project-moved.html` - generic moved-project helper page.
- `shop.html` - legacy shop entry kept for old links.
- `README.md` - repository overview.
- `LICENSE` - license file.
- `sw.js` - service worker, kept until cache behavior is reviewed.

## Service Pages

These files are service/HUB pages and must not be moved into `apps/`:

- `index.html`
- `hub-current.html`
- `hub-v4-clean.html`
- `hub-versions.html`
- `project-view-v2.html`
- `project-moved.html`
- `shop.html`

Older HUB/admin pages are not part of the active app catalog. They may be archived in a later phase after a separate redirect plan.

## Move To `apps/`

`apps/` is for active or reviewable project entries that are not marked as a duplicate or old version.

Rules used in this PR:

- Catalog entries without `canonicalOf` and without `versionOf` move to `apps/`.
- Root-level project HTML moves to `apps/<project-id>/index.html` with the old root file replaced by a redirect stub.
- Folder projects are copied to `apps/<folder>/` while the original folder remains as the old public URL.

Actual result:

- 130 catalog entries now point into `apps/`.
- 143 root project HTML files were copied into app/archive project folders before their old root files became redirect stubs.
- 24 project folders were copied into `apps/`.

## Move To `archive/`

`archive/` is for known duplicates, old versions, and alternate variants.

Rules used in this PR:

- Catalog entries with `canonicalOf` or `versionOf` move to `archive/`.
- Root-level archive entries move to `archive/<project-id>/index.html` with the old root file replaced by a redirect stub.
- Folder variants are copied to `archive/<folder>/` while the original folder remains as the old public URL.

Actual result:

- 63 catalog entries now point into `archive/`.
- 13 project folders were copied into `archive/`.

## Temporary Compatibility Files

The root will still contain redirect stubs for old project URLs after this PR. These are intentional compatibility files, not active project sources.

Existing project folders are also temporarily retained at their old paths in this phase. This keeps folder URLs and folder-local assets available while the HUB catalog starts using the new `apps/` and `archive/` paths.

Current compatibility counts:

- 143 root redirect files.
- 37 old project folders retained.
- 985 catalog path/link/source references updated.

## Catalog Status After Migration

- Total project cards: 194.
- `main`: 6.
- `experiment`: 18.
- `review`: 170.
- Root catalog paths remaining: `index.html` only, kept as the SUNPOLE HUB service entry.

## Data And Tooling

These directories remain in their current role:

- `data/` - SUNPOLE HUB project catalog and metadata.
- `docs/` - project documentation and migration reports.
- `tools/` - HUB builder and utilities.
- `assets/` - shared HUB assets.

## Next Phase

After this PR is reviewed and GitHub Pages is checked, the next phase can replace old retained folders with folder-level redirect pages where that is safe, and move shared media into `assets/`.
