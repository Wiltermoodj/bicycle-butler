export const metadata = {
  title: "Terms of Service",
  description: "Bicycle Butler public site terms and operational scope.",
};

export default function TermsPage(): React.JSX.Element {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 lg:py-28 sm:px-6 lg:px-8">
      <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-accent-400">
        Legal Notice
      </span>
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-ink-100">Terms of Service</h1>

      <div className="space-y-6 text-base leading-relaxed text-ink-300">
        <p>
          Welcome to Bicycle Butler. By accessing our public marketing website, you agree to these terms
          of service.
        </p>

        <h2 className="text-xl font-bold text-ink-100">Informational Purpose</h2>
        <p>
          This website provides general information and technical architectural overviews of the applications
          comprising the Bicycle Butler retail ecosystem. Features, supported integrations, and software availability
          are subject to change as products evolve.
        </p>

        <h2 className="text-xl font-bold text-ink-100">Commercial Inquiries & Demonstrations</h2>
        <p>
          Requesting a product demonstration does not constitute a binding commercial agreement. Commercial access,
          terms of service, and service-level commitments for ecosystem applications are governed by individual
          merchant and dealer agreements.
        </p>

        <h2 className="text-xl font-bold text-ink-100">Intellectual Property</h2>
        <p>
          All trademarks, application names, service marks, and interface designs appearing on this site are the
          property of Bicycle Butler LLC or their respective owners.
        </p>
      </div>
    </section>
  );
}
