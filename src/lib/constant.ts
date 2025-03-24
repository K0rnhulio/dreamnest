import { env } from '@/env.mjs';

export const siteConfig = {
  title: () => "DreamNest - Holistic Wellness & Coaching",
  description: () => "A premium wellness coaching platform designed to create a nurturing space for personal growth and transformation.",
  keywords: () => [
    "wellness coaching",
    "holistic approach",
    "personal growth",
    "feminine design",
    "breathwork",
    "coaching services",
    "transformative experiences",
    "wellness platform",
    "nextjs",
    "tailwindcss",
  ],
  url: () => env.APP_URL || "https://dreamnest.vercel.app",
  googleSiteVerificationId: () => env.GOOGLE_SITE_VERIFICATION_ID || '',
};
