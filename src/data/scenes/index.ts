import type { SceneDescriptor } from "./types";

export * from "./types";

export const HOME_HERO_SCENE: SceneDescriptor = {
  id: "home-hub",
  badge: "Unified Bicycle Retail Infrastructure",
  headline: "Stop overselling between your registers and your online store",
  subheadline:
    "When a bike or component sells on your shop floor, your online channels, dealer portals, and backroom inventory update instantly. No spreadsheets. No double-counts. No disappointed riders.",
  backdrop: {
    src: "/images/hero/workshop-hero.jpg",
    alt: "High-end bicycle retail showroom and precision workshop with registers and carbon bikes",
    focalPosition: "center 35%",
  },
  telemetry: {
    badgeText: "Live Sync Broadcast Active",
    headline: "Shimano Deore XT M8100 12-Speed Cassette",
    detail: "Floor Register 01 Sold 1 unit • Stock 3 → 2",
    subdetail: "Synced to Online Store, Rift B2B & Stow Warehouse in 14ms",
  },
  primaryCta: {
    label: "Request a demo",
    href: "/demo",
  },
  secondaryCta: {
    label: "Explore all 13 products",
    href: "#showcase",
  },
};

const SCENES: Record<string, SceneDescriptor> = {
  "home-hub": HOME_HERO_SCENE,
};

export function getSceneDescriptor(id: string): SceneDescriptor | undefined {
  return SCENES[id];
}
