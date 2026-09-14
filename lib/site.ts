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

/**
 * Debora's two Calendly event types. The defaults are her live links;
 * the env vars exist only so they can be swapped in Vercel without a code change.
 */
export const calendlyUrls = {
  one: env(process.env.NEXT_PUBLIC_CALENDLY_URL) ?? "https://calendly.com/learnalb/new-meeting",
  group: env(process.env.NEXT_PUBLIC_CALENDLY_GROUP_URL) ?? "https://calendly.com/learnalb/learn-albanian",
} as const;

export type LessonKind = keyof typeof calendlyUrls;
