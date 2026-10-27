export const metadata = {
  title: "Privacy Commitment",
  description: "Bicycle Butler zero-tracking and data minimization policy.",
};

export default function PrivacyPage(): React.JSX.Element {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 lg:py-28 sm:px-6 lg:px-8">
      <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-accent-400">
        Data Minimization
      </span>
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-ink-100">Privacy Policy</h1>
      
      <div className="space-y-6 text-base leading-relaxed text-ink-300">
        <p>
          Bicycle Butler believes in strict data minimization. Our public marketing site does not track you,
          does not store advertising cookies, and does not run third-party surveillance or behavioral analytics scripts.
        </p>

        <h2 className="text-xl font-bold text-ink-100">Zero Cookies & Zero Tracking</h2>
        <p>
          You will not see a cookie consent banner on this site because we do not set tracking, marketing,
          or analytics cookies. We do not use third-party tracking pixels or fingerprinting techniques.
        </p>

        <h2 className="text-xl font-bold text-ink-100">Demonstration Inquiries</h2>
        <p>
          When you submit a request via our demo form, we receive only the specific fields you provide
          (name, work email, shop name, product interest, and your note). This information is transmitted
          solely to deliver your inquiry to our team and arrange a walkthrough. We never sell, rent, or trade your contact details.
        </p>

        <h2 className="text-xl font-bold text-ink-100">Contact</h2>
        <p>
          For questions regarding privacy, reach out directly to privacy@bicyclebutler.cc.
        </p>
      </div>
    </section>
  );
}
