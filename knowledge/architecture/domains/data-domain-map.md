---
title: Data Domain — Domain Context Map
type: domain-context-map
domain: data
parent_map: ../context-map.md
description: Deep-dive context map for the data domain, subsystem responsibilities, and internal modules.
tags:
  - domain-map
  - data
  - agent-optimized
---

# Data Domain — Domain Context Map

Parent Context Map: knowledge/architecture/context-map.md

## Domain Purpose & Responsibilities
The Data Domain coordinates domain logic, core types, and services for the data subsystem.

## Key Modules & Files
src/data/ecosystem/index.ts (Hub) -> deps: none | caps: getProductProfile, listProductProfiles, getEcosystemTaxonomy, getProduct
src/data/ecosystem/types.ts -> deps: none | caps: DomainCategory, CompanionApp, PersonaWorkflow, ProductProfile, Product
src/data/stations/types.ts -> deps: none | caps: StationAppRef, OperationalStation
src/data/scenes/index.ts -> deps: none | caps: getSceneDescriptor
src/data/scenes/types.ts -> deps: none | caps: SceneDescriptor
src/data/ecosystem/registry.ts -> deps: none | caps: internal
src/data/products.ts -> deps: none | caps: internal
src/data/stations/index.ts -> deps: none | caps: internal

## Domain Invariants
- Downward dependencies only: cross-domain calls must target canonical domain hubs.
- External consumers must interface through index.ts, never private internal helpers.
- State changes must adhere to lifecycle and containment invariants.
