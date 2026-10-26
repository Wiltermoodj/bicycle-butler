import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "https://bicyclebutler.cc"),
  title: {
    default: "Bicycle Butler — An ecosystem for bicycle retail",
    template: "%s — Bicycle Butler",
  },
  description:
    "Bicycle Butler is an interconnected ecosystem of applications for bicycle retail: wholesale, CRM, POS, warehouse, sync, marketing, and more.",
  openGraph: {
    title: "Bicycle Butler — An ecosystem for bicycle retail",
    description: "One ecosystem. Wholesale, CRM, POS, warehouse, sync, and more — built for bike retail.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
