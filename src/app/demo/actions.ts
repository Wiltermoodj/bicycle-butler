"use server";

import { z } from "zod";
import { env } from "@/env";

const DemoPayloadSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Enter a valid email address").max(200),
  company: z.string().max(120).optional(),
  product: z.string().max(60).optional(),
  message: z.string().max(2000).optional(),
  // Anti-abuse honeypot & timing tokens
  _bb_hp: z.string().max(100).optional(),
  _bb_ts: z.string().optional(),
});

export type LeadSubmissionOutcome =
  | { status: "success" }
  | { status: "degraded_mailto"; mailtoUrl: string; reason: string }
  | { status: "error"; message: string };

export async function requestDemo(input: z.infer<typeof DemoPayloadSchema>): Promise<LeadSubmissionOutcome> {
  // 1. Zod schema validation filter
  const parsed = DemoPayloadSchema.safeParse(input);
  if (!parsed.success) {
    return { status: "error", message: parsed.error.errors[0]?.message ?? "Invalid form submission." };
  }
  const data = parsed.data;

  // 2. Honeypot Filter: If bot trap filled, silently succeed without dispatching
  if (data._bb_hp && data._bb_hp.trim().length > 0) {
    console.info("[demo] honeypot triggered; silently suppressed");
    return { status: "success" };
  }

  // 3. Timing Filter: Minimum 1.5s between form render and submit
  if (data._bb_ts) {
    const renderTime = parseInt(data._bb_ts, 10);
    const now = Date.now();
    if (!isNaN(renderTime) && now - renderTime < 1500) {
      console.info("[demo] sub-second bot submission detected; suppressed");
      return { status: "success" };
    }
  }

  // 4. Fallback mailto generator in case of external service failure
  const mailtoRecipient = env.DEMO_TO_EMAIL ?? "demos@bicyclebutler.cc";
  const mailtoSubject = encodeURIComponent(`Demo Inquiry: ${data.product || "Bicycle Butler"}`);
  const mailtoBody = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "N/A"}\nProduct: ${
      data.product || "Ecosystem"
    }\n\nMessage:\n${data.message || "I would like to request a demo."}`
  );
  const mailtoUrl = `mailto:${mailtoRecipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

  // 5. Dev/Local Sink (Zero credentials required)
  if (!env.RESEND_API_KEY) {
    console.info("[demo] Local Dev Sink — lead captured:", {
      name: data.name,
      email: data.email,
      company: data.company,
      product: data.product,
      message: data.message,
    });
    return { status: "success" };
  }

  // 6. Production Resend Sink with deterministic degradation
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.DEMO_FROM_EMAIL ?? "demos@bicyclebutler.cc",
        to: mailtoRecipient,
        subject: `New demo request — ${data.product || "Bicycle Butler"}`,
        html: renderHtml(data),
      }),
    });

    if (!res.ok) {
      console.error("[demo] Resend API error:", res.status, await res.text().catch(() => ""));
      return {
        status: "degraded_mailto",
        mailtoUrl,
        reason: "Our email service is temporarily slow to respond. Click below to launch your email client with your prefilled details.",
      };
    }

    return { status: "success" };
  } catch (err) {
    console.error("[demo] Network dispatch failure:", err);
    return {
      status: "degraded_mailto",
      mailtoUrl,
      reason: "Network timeout connecting to email service. Click below to send your request directly via email.",
    };
  }
}

function renderHtml(data: z.infer<typeof DemoPayloadSchema>): string {
  const row = (k: string, v?: string) => (v ? `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>` : "");
  return `
    <h2>New Bicycle Butler Demo Request</h2>
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
