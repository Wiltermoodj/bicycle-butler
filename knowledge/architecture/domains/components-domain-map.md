---
title: Components Domain — Domain Context Map
type: domain-context-map
domain: components
parent_map: ../context-map.md
description: Deep-dive context map for the components domain, subsystem responsibilities, and internal modules.
tags:
  - domain-map
  - components
  - agent-optimized
---

# Components Domain — Domain Context Map

Parent Context Map: knowledge/architecture/context-map.md

## Domain Purpose & Responsibilities
The Components Domain coordinates domain logic, core types, and services for the components subsystem.

## Key Modules & Files
src/components/telemetry/index.tsx (Hub) -> deps: none | caps: HeroLiveTelemetry, RegisterTerminalPreview, ServiceWorkOrderPreview, InventoryBinPreview, WholesaleDispatchPreview
src/components/layout.tsx -> deps: none | caps: Header, Footer, ProductNav
src/components/hero/hero-stage.tsx -> deps: none | caps: HeroStageProps, HeroStage
src/components/sections/cta-section.tsx -> deps: none | caps: CtaSectionProps, CtaSection
src/components/sections/ecosystem-panel.tsx -> deps: none | caps: EcosystemPanelProps, EcosystemPanel
src/components/sections/feature-grid.tsx -> deps: none | caps: FeatureGridProps, FeatureGrid
src/components/sections/persona-workflows.tsx -> deps: none | caps: PersonaWorkflowsProps, PersonaWorkflows
src/components/showcase/operational-showcase.tsx -> deps: none | caps: OperationalShowcaseProps, OperationalShowcase
src/components/sections/product-hero.tsx -> deps: none | caps: ProductHero
src/components/hero/index.ts -> deps: none | caps: internal
src/components/sections/index.ts -> deps: none | caps: internal
src/components/showcase/index.ts -> deps: none | caps: internal

## Domain Invariants
- Downward dependencies only: cross-domain calls must target canonical domain hubs.
- External consumers must interface through index.tsx, never private internal helpers.
- State changes must adhere to lifecycle and containment invariants.
