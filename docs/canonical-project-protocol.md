# Canonical project protocol

## Invariant

One visible SUNPOLE project has exactly one canonical local Git repository and
one public `sunpole` GitHub repository. Their directory/repository name is the
same:

```text
C:\!CODE_CLUB\projects\YYNNNN-slug
https://github.com/sunpole/YYNNNN-slug
https://sunpole.github.io/YYNNNN-slug/
```

`YYNNNN` is a six-digit identifier: the two-digit intake year and a four-digit
sequence within that year (for example, `260001`). It expresses intake order
only; it is not a quality rank. The longer prefix prevents collisions with the
existing short local numbering in `C:\!CODE_CLUB\new 2026`.

## One small batch

- Complex project: one project per pass.
- Small static project: one to five independent projects per pass.
- Never combine unrelated project code in the same repository.

## Required gates before publication

1. Read only the candidate files; identify its entry point, title and scope.
2. Scan every candidate file for credentials, private keys, `.env` files and
   token-like values.
3. If any secret or suspicious credential is found, mark the project as
   `blocked-secrets`, do not copy, commit, create a repository or publish it;
   report it to the owner after that pass.
4. Copy rather than delete the legacy source. Replace the old public entry page
   with a zero-delay legacy redirect: HTML meta refresh, a JavaScript redirect
   and a visible canonical link must all target the new Pages URL. Keep the
   legacy card hidden with `canonicalOf` until old links are verified.
5. Add `README.md`, `VERSION`, `CHANGELOG.md`, `project.json`, `.gitignore`,
   a public GitHub Pages workflow and a real interface screenshot.
6. Publish the new public repository and Pages site, verify the live interface
   and only then create/update the visible HUB card with repository and Pages
   links.

## Versioning

Start each newly extracted project at `0.1.0`. Update `VERSION` and
`CHANGELOG.md` together for every released change. A release tag is added only
after a verified public version exists.
