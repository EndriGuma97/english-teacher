import type { MetadataRoute } from "next";
import { hero } from "@/lib/content";
import { brand, siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Albanian with Debora",
    description: hero.subtitle,
    start_url: "/",
    display: "browser",
    lang: "en",
    background_color: brand.ivory,
    theme_color: brand.red,
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
