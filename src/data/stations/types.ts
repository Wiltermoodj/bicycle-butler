export interface StationAppRef {
  slug: string;
  name: string;
  role: string;
}

export interface OperationalStation {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  syncGuarantee: string;
  backdrop: {
    src: string;
    alt: string;
  };
  associatedApps: StationAppRef[];
  previewKey: "register" | "service" | "inventory" | "wholesale";
}
