# Bicycle Butler — Public Site Intent

## What this is
The public-facing marketing site for the Bicycle Butler ecosystem. A standalone
Next.js 16 (App Router / React 19 / Tailwind v4) application, separate from any
internal tooling, so the public surface stays isolated and minimal.

## Live routes
- `/` — hub landing: what Bicycle Butler is, the ecosystem value prop, product grid.
- `/products` — index of all ecosystem apps.
- `/products/[slug]` — one page per app (Rift, Lead, Vise, Stow, Mesh, Beam, Wire,
  Echo, Pars, Gear, Tally, TrailTune, Relay).
- `/demo` — demo request form (server action, email via Resend).
- `/privacy`, `/terms` — minimal legal pages.
- `/demo` actions log submissions locally when `RESEND_API_KEY` is absent.

## Core decisions

### 1. No internal references
"The public-facing site should not reference omnibutler." The word does not
appear anywhere in the repo. The site speaks as "Bicycle Butler" only. This keeps
the public surface from dragging in internal naming, architecture docs, or
conventions that would create unnecessary documentation and policy overhead.

### 2. Data minimization (no cookies, no tracking)
> "we won't be tracking anyone's cookies or taking any of their data minimize the
amount of documentation or policies we would need to create minimizing how much
and what we do with data"

- No cookie banner.
- No analytics scripts.
- No third-party tracking.
- The demo form submits only the fields in the form (name, email, shop, system).
  That data is sent to Resend as an email and is otherwise not stored.

### 3. Separate repo
> "this will need to be a separate repo from omnibutler"

The site lives in `Wiltermoodj/bicycle-butler` (locally at
`~/code/projects/bicycle-butler`). It is not workspace-linked to any internal
tooling repo. There are no `@wiltermoodj/*` or `@omnibutler/*` dependencies in
the public graph.

### 4. Brand — semantic theme, no bright green or purple
> "we should consider colors that are not bright green or any kind of purple"
> "use semantic themed variables so that … we can make CSS themes for the pages"

- Dark slate base with a single **muted gold/amber** accent.
- Colors are expressed as CSS custom properties (`--theme-base-*`, `--theme-accent-*`,
  `--theme-ink-*`) defined in `src/app/globals.css` and switched via
  `data-theme="light"` / `data-theme="brand"` on `<html>`.
- Components reference semantic variables, not literal colors, so one theme change
  updates every page.

### 5. Layout reference
> "the middlewarez application has a good example of a landing page that we
serve at mesh.bicyclebutler.cc - use … the mesh pages a reference point"
> "The mesh page is already good. Let's review the other pages and polish them
visually"

Product pages mirror the mesh.bicyclebutler.cc layout:
gradient hero + icon box → "at a glance" strip → feature cards → ecosystem
connection panel → integrations → footer CTA.

### 6. Marketing copy — omnibutler style guide
> "the public facing ad copy should not use our ste guidelines, the omnibutler
ecosystem has separate guidelines for marketing copy that we should use instead"

Copy follows the omnibutler `marketing-copy-guide.md`: outcome-first value, no
false absolutes, professional operator tone, Layer 2 merchant vernacular
("registers", "stockrooms", "price protection").

### 7. Demo / Resend key
> "The resend API key will be placed in vercel environment variables, not hard
coded locally"

`RESEND_API_KEY` is a Vercel environment variable only. It is read in
`src/env.ts` via `@t3-oss/env-nextjs` (server-side only). When absent, the demo
form accepts submissions and logs them (exit 0), so local dev requires no
credentials and sends no email.

## Local development
```bash
npm install
cp .env.example .env.local   # fill RESEND_API_KEY only when you want real email
npm run dev
```

## Verified
- `npm run build` — all 20 routes prerender (13 product pages SSG + demo etc.)
- `npm run typecheck` — exit 0
- No `omnibutler` references anywhere in the repo.
