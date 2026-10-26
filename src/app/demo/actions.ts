"use server";

import { z } from "zod";
import { env } from "@/env";

const DemoSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Enter a valid email").max(200),
  company: z.string().max(120).optional(),
  product: z.string().max(60).optional(),
  message: z.string().max(2000).optional(),
});

export type DemoResult =
  | { ok: true }
  | { ok: false; error: string };

export async function requestDemo(input: z.infer<typeof DemoSchema>): Promise<DemoResult> {
  const parsed = DemoSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.errors[0]?.message ?? "Invalid submission." };
  }
  const data = parsed.data;

  // Without an API key, accept the lead locally and report success.
  // The client never sees the key; the server action runs on the server.
  if (!env.RESEND_API_KEY) {
    console.info("[demo] lead (no email configured):", {
      name: data.name,
      email: data.email,
      company: data.company,
      product: data.product,
    });
    return { ok: true };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.DEMO_FROM_EMAIL ?? "demos@bicyclebutler.cc",
        to: env.DEMO_TO_EMAIL ?? "demos@bicyclebutler.cc",
        subject: `New demo request — ${data.product || "Bicycle Butler"}`,
        html: renderHtml(data),
      }),
    });
    if (!res.ok) {
      return { ok: false, error: "We could not send your request right now. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Something went wrong sending your request. Please try again." };
  }
}

function renderHtml(data: z.infer<typeof DemoSchema>): string {
  const row = (k: string, v?: string) => (v ? `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>` : "");
  return `
    <h2>New demo request</h2>
    ${row("Name", data.name)}
    ${row("Email", data.email)}
    ${row("Company", data.company)}
    ${row("Product", data.product)}
    ${row("Message", data.message)}
  `;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
