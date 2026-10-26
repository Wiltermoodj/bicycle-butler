"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { PRODUCTS } from "@/data/products";

const NAV = [
  { label: "Products", href: "#products" },
  { label: "Why", href: "#why" },
  { label: "Demo", href: "/demo" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-base-800 bg-base-950/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-accent-500 to-accent-400 text-base-950 font-black text-lg">
            B
          </span>
          <span className="text-lg font-bold tracking-tight text-ink-100">
            Bicycle Butler
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-ink-400 transition-colors hover:text-ink-100"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/demo"
            className="rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-base-950 transition-colors hover:bg-accent-400"
          >
            Request a demo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="text-ink-300 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-base-800 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-300 hover:text-ink-100"
              >
                {n.label}
              </a>
            ))}
            <Link
              href="/demo"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-accent-500 px-4 py-2 text-center text-sm font-semibold text-base-950"
            >
              Request a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-base-800 bg-base-950 py-12 text-xs text-ink-500">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-ink-300">Bicycle Butler</span>
          <span>•</span>
          <span>An ecosystem for bicycle retail</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="/privacy" className="transition-colors hover:text-ink-300">
            Privacy
          </a>
          <a href="/terms" className="transition-colors hover:text-ink-300">
            Terms
          </a>
          <Link href="/demo" className="transition-colors hover:text-ink-300">
            Demo
          </Link>
          <Link href="/products" className="transition-colors hover:text-ink-300">
            Products
          </Link>
        </div>
        <div>© {new Date().getFullYear()} Bicycle Butler LLC. All rights reserved.</div>
      </div>
    </footer>
  );
}

export function ProductNav() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center gap-2">
        {PRODUCTS.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="rounded-full border border-base-700 px-3 py-1 text-xs font-medium text-ink-400 transition-colors hover:border-accent-500/60 hover:text-ink-100"
          >
            {p.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
