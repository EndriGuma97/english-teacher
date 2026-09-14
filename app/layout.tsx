import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { about, hero } from "@/lib/content";
import { brand, isProduction, siteName, siteTagline, siteUrl } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
});

const body = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-body",
});

const title = `${siteName} — ${siteTagline}`;
const description = `${hero.subtitle} ${about.paragraphs[0][0]}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s · ${siteName}` },
  description,
  applicationName: siteName,
  authors: [{ name: "Debora", url: siteUrl }],
  creator: "Debora",
  keywords: [
    "learn Albanian",
    "Albanian lessons",
    "Albanian teacher",
    "online Albanian lessons",
    "Albanian tutor",
    "Albanian for beginners",
    "learn Albanian online",
    "Albanian language course",
    "mëso shqip",
    "English lessons for kids",
  ],
  category: "education",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    url: "/",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: false, address: false, email: false },
  // Never index preview deployments.
  robots: isProduction
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: brand.ivory,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
