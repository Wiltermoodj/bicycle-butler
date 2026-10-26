# Bicycle Butler — Public Marketing Site

The public-facing marketing site for the Bicycle Butler ecosystem. Built as a
standalone Next.js app, separate from the internal tooling, so the public
surface stays isolated.

## What is here

- **Hub** (`/`) — what Bicycle Butler is, the ecosystem value prop, links to products.
- **Products** (`/products`, `/products/[slug]`) — one page per ecosystem app.
- **Demo** (`/demo`) — a server-action form that captures demo requests (email via Resend, no DB, no auth).

## Brand

Dark slate base with a single **muted gold/amber** accent. No bright green, no purple.
See `src/app/globals.css` `@theme`.

## Stack

Next.js 16 (App Router) · React 19 · Tailwind v4 · lucide-react · `@t3-oss/env-nextjs`.

## Local development

```bash
npm install
cp .env.example .env.local   # fill RESEND_API_KEY only when you want real emails
npm run dev
```

Without `RESEND_API_KEY`, demo submissions are accepted locally and logged (no email sent).

## Constraints (from the grill)

- No references to internal tooling anywhere in the public site.
- Fully anonymous — no auth, no sessions, no tenant data on this site.
- Copy is hardcoded in the repo, edited by PR.
