import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound(): React.JSX.Element {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-20 text-center">
      <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-accent-400">
        Ecosystem Directory
      </span>
      <h1 className="mb-4 text-5xl font-extrabold text-ink-100">404</h1>
      <p className="mb-8 text-lg text-ink-300">
        That application could not be found in the Bicycle Butler ecosystem.
      </p>
      <Link
        href="/products"
        className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-sm font-bold text-base-950 transition-colors hover:bg-accent-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Browse all 13 products
      </Link>
    </div>
  );
}
