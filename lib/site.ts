/** Returns the env value only if it is a non-empty string (Vercel may store an empty value). */
function env(value: string | undefined): string | undefined {
  const v = value?.trim();
  return v ? v : undefined;
}

/**
 * The live domain. The apex (learnalbanianwithdebora.com) 308-redirects to `www` in Vercel,
 * so `www` is the canonical host for search engines and social previews.
 */
export const productionUrl = "https://www.learnalbanianwithdebora.com";

const configuredUrl = env(process.env.NEXT_PUBLIC_SITE_URL);

/** Canonical origin: env override → the live domain on Vercel → localhost when developing. */
export const siteUrl = configuredUrl ?? (process.env.VERCEL ? productionUrl : "http://localhost:3000");

export const siteName = "Learn Albanian with Debora";
export const siteTagline = "Online Albanian Lessons with a Native Teacher";
export const contactEmail = "learnalb@gmail.com";

/** Debora's WhatsApp number. Stored in E.164 form; `whatsappDisplay` is the human-readable version. */
export const whatsappNumber = "+355685168472";
export const whatsappDisplay = "+355 68 516 8472";

export const instagramUrl = "https://www.instagram.com/speakalbanianwithdebora";
export const instagramHandle = "@speakalbanianwithdebora";
export const whatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
export const isProduction = process.env.VERCEL_ENV === "production";

/** Brand colours, mirrored from `app/globals.css` for the manifest and theme-color tags. */
export const brand = { red: "#e41e20", ivory: "#fffdf7" } as const;

/**
 * Debora's Calendly event (the group class). The default is her live link;
 * the env var exists only so it can be swapped in Vercel without a code change.
 */
export const calendlyUrl =
  env(process.env.NEXT_PUBLIC_CALENDLY_GROUP_URL) ?? "https://calendly.com/learnalb/learn-albanian";
