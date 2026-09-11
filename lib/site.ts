/** Returns the env value only if it is a non-empty string (Vercel may store an empty value). */
function env(value: string | undefined): string | undefined {
  const v = value?.trim();
  return v ? v : undefined;
}

const configuredUrl = env(process.env.NEXT_PUBLIC_SITE_URL);
const vercelProductionUrl = env(process.env.VERCEL_PROJECT_PRODUCTION_URL);

export const siteUrl =
  configuredUrl ??
  (vercelProductionUrl ? `https://${vercelProductionUrl}` : "http://localhost:3000");

export const siteName = "Learn Albanian with Debora";
export const contactEmail = "learnalb@gmail.com";
export const isProduction = process.env.VERCEL_ENV === "production";
export const calendlyUrl = env(process.env.NEXT_PUBLIC_CALENDLY_URL);
