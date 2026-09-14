import Image from "next/image";
import { english } from "@/lib/content";
import { contactEmail } from "@/lib/site";

/**
 * Deliberately small and quiet: Albanian is the focus of the site,
 * this is a short aside for parents looking for an English tutor.
 */
export function EnglishKids() {
  const subject = encodeURIComponent(english.emailSubject);
  return (
    <section id="english" className="section--tight" aria-labelledby="english-title">
      <div className="container">
        <div className="english">
          <div className="english__text">
            <p className="english__kicker">{english.kicker}</p>
            <h2 id="english-title" className="display h3 mt-2">
              {english.heading}
            </h2>
            <p className="mt-3 text-[0.98em] leading-relaxed text-muted">{english.text}</p>
            <a href={`mailto:${contactEmail}?subject=${subject}`} className="btn btn--outline btn--sm mt-5">
              {english.cta}
            </a>

            <ul className="certs mt-6" aria-label="Teaching certificates">
              {english.certificates.map((c) => (
                <li key={c.src}>
                  <Image src={c.src} alt={c.alt} width={c.width} height={c.height} sizes="96px" />
                  <span>{c.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="english__photos" aria-label="Inside my English lessons">
            {english.photos.map((p) => (
              <li key={p.src}>
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 1024px) 30vw, 200px" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
