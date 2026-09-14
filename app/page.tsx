import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Book } from "@/components/Book";
import { Contact } from "@/components/Contact";
import { EnglishKids } from "@/components/EnglishKids";
import { Hero } from "@/components/Hero";
import { JourneyCta } from "@/components/JourneyCta";
import { Learn } from "@/components/Learn";
import { Marquee } from "@/components/Marquee";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Reviews } from "@/components/Reviews";
import { Why } from "@/components/Why";
import { contactEmail, siteUrl } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Debora",
  jobTitle: "Albanian Language Teacher",
  email: contactEmail,
  url: siteUrl,
  image: `${siteUrl}/images/debora-portrait.webp`,
  knowsLanguage: ["sq", "en"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <Marquee />
      <About />
      <Why />
      <Learn />
      <Approach />
      <EnglishKids />
      <Reviews />
      <JourneyCta />
      <Book />
      <Contact />
      <MobileCtaBar />
    </>
  );
}
