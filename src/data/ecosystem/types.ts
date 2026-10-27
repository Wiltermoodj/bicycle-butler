export type DomainCategory =
  | "pos-checkout"
  | "wholesale-commerce"
  | "warehouse-inventory"
  | "dealer-crm"
  | "marketing-ai"
  | "market-intelligence"
  | "service-kinematics"
  | "financials-commission"
  | "messaging-fabric";

export interface CompanionApp {
  slug: string;
  name: string;
  relationship: string;
  operationalFlow: string;
}

export interface PersonaWorkflow {
  personaTitle: string;
  personaRole: string;
  operationalBenefit: string;
  stackSuite: string[];
}

export interface ProductProfile {
  slug: string;
  name: string;
  tagline: string;
  oneLiner: string;
  description: string;
  icon: string;
  domainCategory: DomainCategory;
  domainLabel: string;
  capabilities: string[];
  features: Array<{ title: string; body: string }>;
  integrations?: string[];
  companionApps: CompanionApp[];
  personaWorkflows: PersonaWorkflow[];
  cta: { label: string; href: string };
  liveUrl?: string;
}

/** Legacy backwards-compatible interface */
export interface Product {
  slug: string;
  name: string;
  tagline: string;
  oneLiner: string;
  description: string;
  icon: string;
  features: { title: string; body: string }[];
  integrations?: string[];
  cta: { label: string; href: string };
  liveUrl?: string;
}
