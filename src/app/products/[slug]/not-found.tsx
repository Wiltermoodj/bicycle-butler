import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";

export default function NotFound(): React.JSX.Element {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="mb-4 text-4xl font-extrabold text-ink-100">404</h1>
      <p className="mb-8 text-ink-400">That product page does not exist.</p>
      <a
        href="/products"
        className="rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-base-950 hover:bg-accent-400"
      >
        Browse products
      </a>
    </div>
  );
}
