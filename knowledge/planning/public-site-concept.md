---
title: Bicycle Butler Public Site — Architectural Concept Plan
type: concept-plan
status: settled
created: 2026-10-26
tags:
  - architecture
  - planning
  - public-site
  - abstract-grill
---

# Bicycle Butler Public Site — Architectural Concept Plan

This document establishes the finalized architectural paradigms, invariant boundaries, and module contracts for the Bicycle Butler marketing website (`Wiltermoodj/bicycle-butler`), settled through the `/abstract-grill` architectural review.

## 1. Architectural Mission & Invariant Boundaries

The Bicycle Butler public site is a high-performance marketing portal for an interconnected ecosystem of 13 bicycle retail applications (Rift, Lead, Vise, Stow, Mesh, Beam, Wire, Echo, Pars, Gear, Tally, TrailTune, Relay).

### Core Boundaries & Invariants:
1. **Strict Internal Isolation**: The site never references internal tooling or parent monorepo naming (`omnibutler`). It speaks purely as "Bicycle Butler" with zero private package imports.
2. **Absolute Data Minimization**: Zero cookies, zero third-party tracking pixels, zero persistent database dependencies for visitors. Lead capture is ephemeral and strictly in-flight.
3. **Deep Modules with Narrow Interfaces**: Page templates and routing components remain lean presentation shells consuming wide, invariant-protecting capability modules.

## 2. Settled Architectural Decisions

### Decision 1: Ecosystem Product Graph & Inter-Product Capability Modeling
* **Paradigm**: Hybrid Synthesis — Declarative Capability Matrix + Persona Workflow Projections.
* **Problem Solved**: Replaces flat static strings and hardcoded boilerplate with a typed capability engine that automatically derives cross-product connections and merchant-facing workflows.
* **Module Boundary**: `src/data/ecosystem/`
* **Public Contract**:
  ```typescript
  export interface ProductProfile {
    slug: string;
    name: string;
    tagline: string;
    oneLiner: string;
    description: string;
    icon: string;
    domain: "retail-pos" | "wholesale" | "logistics" | "crm" | "marketing" | "service" | "analytics";
    capabilities: string[];
    features: Array<{ title: string; body: string }>;
    companionApps: Array<{ slug: string; name: string; relationship: string }>;
    personaWorkflows: Array<{
      personaTitle: string;
      operationalBenefit: string;
      roleInStack: string;
    }>;
    liveUrl?: string;
  }

  export function getProductProfile(slug: string): ProductProfile | undefined;
  export function listProductProfiles(): ProductProfile[];
  export function getEcosystemTaxonomy(): Record<string, ProductProfile[]>;
  ```
* **Encapsulated Mechanics**:
  - Hides graph traversal and cross-product compatibility logic.
  - Automatically derives the "How it connects" connection strip based on shared operational data (for example, inventory counts between Vise and Stow).
  - Pre-renders persona workflow packages for solo mechanics, multi-register shops, and brand distributors.

### Decision 2: Privacy-Preserving Lead Capture & Anti-Abuse Dispatch Pipeline
* **Paradigm**: Hybrid Synthesis — Stateless Pipe-and-Filter Pipeline + Deterministic Degradation Machine.
* **Problem Solved**: Protects against automated spam without violating the zero-cookie / zero-tracking mandate (no Google reCAPTCHA or Cloudflare Turnstile cookies), while guaranteeing zero lead loss even during API outages.
* **Module Boundary**: `src/app/demo/`
* **Pipeline Filters**:
  1. **Honeypot Filter**: Detects hidden bot trap fields without client-side scripts.
  2. **Timestamp Verification Filter**: Calculates elapsed time between form render and submission token (rejects sub-second machine submissions).
  3. **Zod Schema & Sanitization Filter**: Strictly normalizes name, email, shop, and system fields.
  4. **Pluggable Sink Dispatcher**:
     - *Production Sink*: Resend API HTTPS request using server-only environment credentials.
     - *Dev/Staging Sink*: Console logging with structured JSON (zero local credentials required).
     - *Emergency Degradation Sink*: If the primary transport fails, yields a deterministic mailto fallback payload so the user can send their inquiry directly without losing entered data.
* **Public Contract**:
  ```typescript
  export type LeadSubmissionOutcome =
    | { status: "success" }
    | { status: "degraded_mailto"; mailtoUrl: string; explanation: string }
    | { status: "validation_error"; message: string };

  export async function submitDemoLead(formData: FormData): Promise<LeadSubmissionOutcome>;
  ```

### Decision 3: Semantic Design Token Engine & Visual Component Architecture
* **Paradigm**: Hybrid Synthesis — Tailwind v4 `@theme` Registry + Reusable Composite Section Layouts.
* **Problem Solved**: Eliminates styling drift between Hub landing (`/`) and the 13 product pages (`/products/[slug]`) while strictly adhering to the dark slate foundation and muted gold accent.
* **Module Boundary**: `src/app/globals.css` & `src/components/sections/`
* **Tailwind v4 Token Mapping**:
  ```css
  @theme {
    --color-base-100: var(--theme-base-100);
    --color-base-800: var(--theme-base-800);
    --color-base-900: var(--theme-base-900);
    --color-base-950: var(--theme-base-950);

    --color-accent-400: var(--theme-accent-400);
    --color-accent-500: var(--theme-accent-500);
    --color-accent-600: var(--theme-accent-600);

    --color-ink-100: var(--theme-ink-100);
    --color-ink-200: var(--theme-ink-200);
    --color-ink-300: var(--theme-ink-300);
    --color-ink-400: var(--theme-ink-400);
  }
  ```
* **Composite Section Shells**:
  - `<ProductHero profile={product} />`: Standardizes radial gradient backdrop, category chip, accent icon box, and dual CTA buttons.
  - `<FeatureGrid features={product.features} />`: Encapsulates 3-column mesh-style card elevation, hover borders, and icon containers.
  - `<EcosystemPanel companions={product.companionApps} />`: Standardizes interconnected ecosystem narrative and badges.
  - `<PersonaWorkflowSection workflows={product.personaWorkflows} />`: Presents retail operations in terms of shop owner personas.
  - `<CtaSection title={...} subtitle={...} />`: Unified conversion trigger linking to `/demo`.

### Decision 4: Hero Visual Staging & Immersive Media Architecture
* **Paradigm**: Hybrid Synthesis — Declarative Scene Registry + Viewport Stage (`<HeroStage>`).
* **Problem Solved**: Replaces flat, generic text-only hero sections with deep cinematic environmental staging (workshop/register imagery, gold spotlights, dark slate radial scrims) without leaking CSS filter math or asset coordinates into page components.
* **Module Boundary**: `src/data/scenes/` & `src/components/hero/`
* **Public Contract**:
  ```typescript
  export interface SceneDescriptor {
    id: string;
    title: string;
    badge: string;
    headline: string;
    subheadline: string;
    backdrop: {
      src: string;
      alt: string;
      focalX: number; // percentage
      focalY: number; // percentage
      scrimDensity: "subtle" | "medium" | "deep";
    };
    telemetry?: {
      badgeText: string;
      headline: string;
      detail: string;
    };
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  }

  export function getSceneDescriptor(id: string): SceneDescriptor | undefined;
  export function HeroStage(props: { scene: SceneDescriptor }): React.JSX.Element;
  ```
* **Encapsulated Mechanics**:
  - Encapsulates Next.js responsive image loading, `priority`, and WebP picture delivery.
  - Generates semantic radial gradient masks (`from-base-950 through-base-950/75 to-transparent`) making sure that 100% WCAG AAA text contrast across arbitrary backgrounds.
  - Renders floating glassmorphic live-sync status telemetry badge over the image.

### Decision 5: Progressive Disclosure & Navigation into Details
* **Paradigm**: Hybrid Synthesis — Sticky Narrative Storyboard with Station Quick-Nav Deck.
* **Problem Solved**: Replaces disjointed flat card stacks with an intuitive, cinematic retail journey (Front Counter POS → Service Bench → Backroom Stockroom → E-Commerce Sync) that passive scrollers can experience linearly and deliberate evaluators can jump through instantaneously.
* **Module Boundary**: `src/components/showcase/` & `src/data/stations/`
* **Public Contract**:
  ```typescript
  export interface OperationalStation {
    id: string;
    tabLabel: string;
    title: string;
    tagline: string;
    description: string;
    operationalSyncGuarantee: string;
    backdrop: string;
    associatedAppSlugs: string[];
    telemetryCard: {
      title: string;
      status: string;
      metrics: Array<{ label: string; value: string }>;
    };
  }

  export function OperationalShowcase(props: {
    stations: OperationalStation[];
  }): React.JSX.Element;
  ```
* **Encapsulated Mechanics**:
  - Split-screen sticky viewport layout on desktop (`sticky top-24`) paired with smooth-scrolling narrative cards.
  - Interactive top anchor rail that allows immediate direct switching to any station.
  - Automatic mobile collapse into elegant stacked cards without sticky traps or scroll lock.

### Decision 6: Operational UI Simulation & Asset Pipeline
* **Paradigm**: Hybrid Synthesis — Atmospheric Environmental Backdrops with Live Glassmorphic UI Telemetry Overlays.
* **Problem Solved**: Overcomes the generic feel of stock photography by layering warm, atmospheric physical retail backdrops (repair stands, parts shelves, POS counters) with razor-sharp, accessible React DOM UI cards displaying realistic bike shop data.
* **Asset Storage & Isolation Invariant**:
  - Assets live in `/public/images/` and `/public/icons/`.
  - Icon assets migrated from local asset repositories are sanitized to remove all internal namespace references, adhering strictly to the public brand isolation invariant.
* **Encapsulated Components**:
  - `<RegisterTerminalPreview>`: Real DOM simulation of a fast checkout counter with SKU line items and live inventory sync broadcast indicator.
  - `<StockSyncBadge>`: Live animated stock availability pill ("Stock synced across 3 registers & online store in 14ms").
  - `<ServiceWorkOrderPreview>`: Repair stand telemetry showing work orders and customer SMS notification readiness.

## 3. Implementation Roadmap

1. **Phase 1: Token Unification & Composite Sections** (Completed)
   - Refactor `src/app/globals.css` with native Tailwind v4 `@theme` mappings for `base-*`, `accent-*`, and `ink-*`.
   - Implement `src/components/sections/` composite components.
2. **Phase 2: Ecosystem Modeling Engine** (Completed)
   - Create `src/data/ecosystem/` with declarative capability declarations and persona workflow projections.
   - Refactor `src/app/products/[slug]/page.tsx` and `src/app/products/page.tsx` to consume `getProductProfile()`.
3. **Phase 3: Privacy Lead Pipeline** (Completed)
   - Refactor `src/app/demo/actions.ts` into the stateless filter pipeline with degradation state machine.
   - Update `src/app/demo/demo-form.tsx` to handle the mailto degradation gracefully.
4. **Phase 4: High-Production Visual Staging & Interactive Narrative Showcase**
   - Populate `/public/icons/` from `/Users/lappier/code/projects/omnibutler-icons` without internal references.
   - Establish `/public/images/` with atmospheric photographic backgrounds and generate high-impact SVG/CSS composite textures.
   - Implement `src/data/scenes/` and `src/components/hero/hero-stage.tsx`.
   - Implement `src/data/stations/` and `src/components/showcase/operational-showcase.tsx` with live glassmorphic UI telemetry cards.
   - Assemble enhanced landing page (`src/app/page.tsx`) with high-impact hero and sticky station walkthrough.

