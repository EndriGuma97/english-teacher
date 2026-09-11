export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteName = "Learn Albanian with Debora";
export const contactEmail = "learnalb@gmail.com";
export const isProduction = process.env.VERCEL_ENV === "production";
