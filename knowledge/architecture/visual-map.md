---
title: Project Architecture Visual Diagram
type: visual-diagram
audience: human-developer
tags:
  - architecture
  - visual
  - mermaid
---

# Architecture Visual Map

<!-- For AI coding agents: read knowledge/architecture/context-map.md or run npx stubs query "map:" -->

```mermaid
flowchart TD
  subgraph L6 ["Layer 6: Interface"]
    n_src_app_demo_actions_ts["actions.ts"]
    n_src_app_demo_demo_form_tsx["demo-form.tsx"]
    n_src_app_demo_page_tsx["page.tsx"]
    n_src_app_layout_tsx["layout.tsx"]
    n_src_app_page_tsx["page.tsx"]
    n_src_app_privacy_page_tsx["page.tsx"]
    n_src_app_products__slug__not_found_tsx["not-found.tsx"]
    n_src_app_products__slug__page_tsx["page.tsx"]
    n_src_app_products_page_tsx["page.tsx"]
    n_src_app_terms_page_tsx["page.tsx"]
    n_src_components_layout_tsx["layout.tsx"]
    n_src_data_products_ts["products.ts"]
    n_src_env_ts["env.ts"]
  end
  n_src_app_demo_demo_form_tsx --> n_src_app_demo_actions_ts
  n_src_app_demo_page_tsx --> n_src_app_demo_demo_form_tsx
```
