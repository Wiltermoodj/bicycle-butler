---
title: Core Entrypoints & Runtime — Domain Context Map
type: domain-context-map
domain: core
parent_map: ../context-map.md
description: Deep-dive context map for the core domain, subsystem responsibilities, and internal modules.
tags:
  - domain-map
  - core
  - agent-optimized
---

# Core Entrypoints & Runtime — Domain Context Map

Parent Context Map: knowledge/architecture/context-map.md

## Domain Purpose & Responsibilities
The Core Entrypoints & Runtime coordinates domain logic, core types, and services for the core subsystem.

## Key Modules & Files
src/env.ts (Hub) -> deps: none | caps: internal

## Domain Invariants
- Downward dependencies only: cross-domain calls must target canonical domain hubs.
- External consumers must interface through env.ts, never private internal helpers.
- State changes must adhere to lifecycle and containment invariants.
