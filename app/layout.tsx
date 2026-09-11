import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { about, hero } from "@/lib/content";
import { isProduction, siteName, siteUrl } from "@/lib/site";
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

const description = `${hero.subtitle} ${about.paragraphs[0][0]}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} — Online Albanian Lessons with a Native Teacher`,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    url: "/",
    title: `${siteName} — Online Albanian Lessons with a Native Teacher`,
    description,
  },
  twitter: { card: "summary_large_image" },
  // Never index preview deployments.
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
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
