---
title: App Domain — Domain Context Map
type: domain-context-map
domain: app
parent_map: ../context-map.md
description: Deep-dive context map for the app domain, subsystem responsibilities, and internal modules.
tags:
  - domain-map
  - app
  - agent-optimized
---

# App Domain — Domain Context Map

Parent Context Map: knowledge/architecture/context-map.md

## Domain Purpose & Responsibilities
The App Domain coordinates domain logic, core types, and services for the app subsystem.

## Key Modules & Files
src/app/demo/demo-form.tsx (Hub) -> deps: none | caps: Status, DemoForm, handleSubmit, Field, Select, SubmitButton
src/app/demo/actions.ts -> deps: none | caps: DemoResult, requestDemo, renderHtml, escapeHtml
src/app/products/[slug]/page.tsx -> deps: none | caps: generateStaticParams, generateMetadata, ProductPage
src/app/demo/page.tsx -> deps: none | caps: DemoPage
src/app/layout.tsx -> deps: none | caps: RootLayout
src/app/page.tsx -> deps: none | caps: RootLayout
src/app/privacy/page.tsx -> deps: none | caps: PrivacyPage
src/app/products/[slug]/not-found.tsx -> deps: none | caps: NotFound
src/app/products/page.tsx -> deps: none | caps: ProductsPage
src/app/terms/page.tsx -> deps: none | caps: TermsPage

## Domain Invariants
- Downward dependencies only: cross-domain calls must target canonical domain hubs.
- External consumers must interface through demo-form.tsx, never private internal helpers.
- State changes must adhere to lifecycle and containment invariants.
