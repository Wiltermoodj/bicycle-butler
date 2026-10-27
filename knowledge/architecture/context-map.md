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
Entry (Layer 0): src/env.ts -> domain: core

## Subsystem Matrix
Components Domain (L1): src/components/telemetry/index.tsx -> deps: none | caps: HeroLiveTelemetry, RegisterTerminalPreview, ServiceWorkOrderPreview, InventoryBinPreview
App Domain (L2): src/app/demo/demo-form.tsx -> deps: none | caps: Status, DemoForm, handleSubmit, Field
Data Domain (L3): src/data/ecosystem/index.ts -> deps: none | caps: getProductProfile, listProductProfiles, getEcosystemTaxonomy, getProduct
Core Entrypoints & Runtime (L4): src/env.ts -> deps: none | caps: subsystem services

## Domain Maps & Specs
- components: knowledge/architecture/domains/components-domain-map.md (hub: src/components/telemetry/index.tsx)
- app: knowledge/architecture/domains/app-domain-map.md (hub: src/app/demo/demo-form.tsx)
- data: knowledge/architecture/domains/data-domain-map.md (hub: src/data/ecosystem/index.ts)
- core: knowledge/architecture/domains/core-domain-map.md (hub: src/env.ts)

## Boundary Invariants
- Downward dependencies only: consumers depend on lower layers, never higher layers.
- Cross-domain calls must target the domain canonical hub module, never internal private helpers.
- Repo-level architectural decisions recorded in knowledge/architecture/ADR/. Module nuances recorded in domain maps and sidecars.

## Visual Architecture Map
Human visual Mermaid diagrams: knowledge/architecture/visual-map.md (agents: do not read unless requested)
