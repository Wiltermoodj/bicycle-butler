import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    RESEND_API_KEY: z.string().optional(),
    DEMO_FROM_EMAIL: z.string().email().optional(),
    DEMO_TO_EMAIL: z.string().email().optional(),
    SKIP_ENV_VALIDATION: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  isServer: typeof window === "undefined" || process.env.NODE_ENV === "test",
  skipValidation: Boolean(process.env.SKIP_ENV_VALIDATION),
  emptyStringAsUndefined: true,
});
