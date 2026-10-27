import { PRODUCT_PROFILES } from "./registry";
import type { DomainCategory, Product, ProductProfile } from "./types";

export * from "./types";
export { PRODUCT_PROFILES };

/**
 * Retrieves the full enriched product profile with domain taxonomy,
 * capabilities, companion applications, and persona workflows.
 */
export function getProductProfile(slug: string): ProductProfile | undefined {
  return PRODUCT_PROFILES.find((p) => p.slug === slug);
}

/**
 * Returns all active ecosystem product profiles.
 */
export function listProductProfiles(): ProductProfile[] {
  return PRODUCT_PROFILES;
}

/**
 * Returns products grouped by domain category for directory navigation.
 */
export function getEcosystemTaxonomy(): Record<DomainCategory, { label: string; products: ProductProfile[] }> {
  const taxonomy: Partial<Record<DomainCategory, { label: string; products: ProductProfile[] }>> = {};

  for (const product of PRODUCT_PROFILES) {
    if (!taxonomy[product.domainCategory]) {
      taxonomy[product.domainCategory] = {
        label: product.domainLabel,
        products: [],
      };
    }
    taxonomy[product.domainCategory]!.products.push(product);
  }

  return taxonomy as Record<DomainCategory, { label: string; products: ProductProfile[] }>;
}

/**
 * Backwards-compatible legacy helper
 */
export const PRODUCTS: Product[] = PRODUCT_PROFILES;

export function getProduct(slug: string): Product | undefined {
  return getProductProfile(slug);
}
