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
import { about, book, hero, learn } from "@/lib/content";
import { calendlyUrls, contactEmail, siteName, siteTagline, siteUrl } from "@/lib/site";

const personId = `${siteUrl}/#debora`;
const websiteId = `${siteUrl}/#website`;

/** Structured data: the site, Debora, and the two lesson types she offers. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: siteName,
      description: hero.subtitle,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: `${siteName} — ${siteTagline}`,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      primaryImageOfPage: `${siteUrl}/opengraph-image.jpg`,
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Debora",
      jobTitle: "Albanian Language Teacher",
      description: about.paragraphs[0][0],
      email: contactEmail,
      url: siteUrl,
      image: `${siteUrl}/images/debora-portrait.webp`,
      nationality: { "@type": "Country", name: "Albania" },
      knowsLanguage: [
        { "@type": "Language", name: "Albanian", alternateName: "sq" },
        { "@type": "Language", name: "English", alternateName: "en" },
      ],
      knowsAbout: learn.skills.map((skill) => `Albanian ${skill.title.toLowerCase()}`),
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "120-hour Advanced TEFL/TESOL Certificate",
          credentialCategory: "certificate",
        },
        { "@type": "EducationalOccupationalCredential", name: "TESOL Certificate", credentialCategory: "certificate" },
      ],
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#lessons`,
      name: "Online Albanian lessons",
      serviceType: "Language lessons",
      description: `${hero.subtitle} ${book.subtext}`,
      provider: { "@id": personId },
      areaServed: "Worldwide",
      availableLanguage: ["en", "sq"],
      availableChannel: { "@type": "ServiceChannel", serviceUrl: `${siteUrl}/#book`, availableLanguage: "en" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Lesson types",
        itemListElement: book.choose.options.map((option) => ({
          "@type": "Offer",
          name: option.title,
          description: option.text,
          url: calendlyUrls[option.key],
          category: "Albanian lessons",
        })),
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
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
