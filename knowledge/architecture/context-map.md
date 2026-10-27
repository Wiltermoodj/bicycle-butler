---
title: Project Architecture Context Map
type: context-map
description: High-level architectural map of core domains, subsystem responsibilities, and dependency flows.
tags:
  - architecture
  - context-map
  - agent-optimized
---

# Architecture Context Map

## Routing & Entrypoints
Entry (Layer 0): src/components/sections/index.ts -> domain: ui
Entry (Layer 0): src/data/ecosystem/index.ts -> domain: ecosystem
Entry (Layer 0): src/components/layout.tsx -> domain: core
Entry (Layer 0): src/data/products.ts -> domain: core
Entry (Layer 0): src/env.ts -> domain: core

## Subsystem Matrix
UI Sections Subsystem (L1): src/components/sections/index.ts -> deps: ecosystem | caps: ProductHero, FeatureGrid, EcosystemPanel, PersonaWorkflows, CtaSection
Ecosystem Modeling Subsystem (L1): src/data/ecosystem/index.ts -> deps: none | caps: getProductProfile, listProductProfiles, getEcosystemTaxonomy, PRODUCT_PROFILES
App Domain (L2): src/app/demo/demo-form.tsx -> deps: none | caps: DemoForm, handleSubmit, requestDemo
Core Entrypoints & Layout (L3): src/components/layout.tsx -> deps: ecosystem | caps: Header, Footer, ProductNav

## Domain Maps & Specs
- app: knowledge/architecture/domains/app-domain-map.md (hub: src/app/demo/demo-form.tsx)
- core: knowledge/architecture/domains/core-domain-map.md (hub: src/components/layout.tsx)

## Boundary Invariants
- Downward dependencies only: consumers depend on lower layers, never higher layers.
- Cross-domain calls must target the domain canonical hub module, never internal private helpers.
- Repo-level architectural decisions recorded in knowledge/planning/public-site-concept.md.

## Visual Architecture Map
Human visual Mermaid diagrams: knowledge/architecture/visual-map.md (agents: do not read unless requested)
