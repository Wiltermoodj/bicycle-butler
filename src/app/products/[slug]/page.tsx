import { notFound } from "next/navigation";
import { getProductProfile, listProductProfiles } from "@/data/ecosystem";
import {
  ProductHero,
  FeatureGrid,
  EcosystemPanel,
  PersonaWorkflows,
  CtaSection,
} from "@/components/sections";

export function generateStaticParams() {
  return listProductProfiles().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductProfile(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
    openGraph: {
      title: `${product.name} — ${product.tagline}`,
      description: product.description,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.JSX.Element> {
  const { slug } = await params;
  const product = getProductProfile(slug);
  if (!product) notFound();

  return (
    <div className="flex flex-col">
      <ProductHero profile={product} />
      <FeatureGrid
        productName={product.name}
        oneLiner={product.oneLiner}
        features={product.features}
      />
      <EcosystemPanel
        productName={product.name}
        companionApps={product.companionApps}
        integrations={product.integrations}
      />
      <PersonaWorkflows
        productName={product.name}
        workflows={product.personaWorkflows}
      />
      <CtaSection
        title={`See ${product.name} in action`}
        subtitle={`Tell us what you run and we will show you how ${product.name} fits into your bicycle operation.`}
        buttonLabel={`Request a ${product.name} demo`}
        href="/demo"
      />
    </div>
  );
}
