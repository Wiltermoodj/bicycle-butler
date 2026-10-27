export interface SceneDescriptor {
  id: string;
  badge: string;
  headline: string;
  subheadline: string;
  backdrop: {
    src: string;
    alt: string;
    focalPosition?: string;
  };
  telemetry: {
    badgeText: string;
    headline: string;
    detail: string;
    subdetail: string;
  };
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}
