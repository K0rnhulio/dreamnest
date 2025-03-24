import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().optional().default('dummy-db-url'),
    APP_URL: z.string().optional().default('http://localhost:3000'),
    GOOGLE_SITE_VERIFICATION_ID: z.string().optional().default(''),
    GITHUB_ID: z.string().optional().default('dummy-github-id'),
    GITHUB_SECRET: z.string().optional().default('dummy-github-secret'),
    NEXTAUTH_URL: z.string().optional().default('http://localhost:3000'),
    NEXTAUTH_SECRET: z.string().optional().default('dummy-nextauth-secret'),
    STRIPE_SECRET_KEY: z.string().optional().default('dummy-stripe-secret'),
    STRIPE_WEBHOOK_SECRET_KEY: z.string().optional().default('dummy-webhook-secret'),
    STRIPE_SUBSCRIPTION_PRICE_ID: z.string().optional().default('dummy-price-id'),
  },
  client: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional().default('dummy-publishable-key'),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    APP_URL: process.env.APP_URL,
    GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET_KEY: process.env.STRIPE_WEBHOOK_SECRET_KEY,
    STRIPE_SUBSCRIPTION_PRICE_ID: process.env.STRIPE_SUBSCRIPTION_PRICE_ID,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
});
