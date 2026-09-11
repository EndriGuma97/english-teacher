import Image from "next/image";
import { about } from "@/lib/content";
import { RichText } from "./RichText";

export function About() {
  const { vowels, slide, tablet } = about.images;
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <h2 id="about-title" className="display h2">
            {about.heading}
          </h2>
          <div className="mt-7 space-y-5 text-[1.05em] leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="measure">
                <RichText segments={p} />
              </p>
            ))}
          </div>
        </div>

        <div>
          <div className="collage">
            <figure>
              <Image src={vowels.src} alt={vowels.alt} fill sizes="(max-width: 1024px) 92vw, 520px" />
            </figure>
            <figure>
              <Image src={slide.src} alt={slide.alt} fill sizes="(max-width: 1024px) 46vw, 260px" />
            </figure>
            <figure>
              <Image src={tablet.src} alt={tablet.alt} fill sizes="(max-width: 1024px) 46vw, 260px" />
            </figure>
          </div>
          <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-muted">
            <span className="inline-block h-2 w-2 rotate-45 bg-red" aria-hidden="true" />
            {about.collageCaption}
          </p>
        </div>
      </div>
    </section>
  );
}
