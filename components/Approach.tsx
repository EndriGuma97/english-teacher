import Image from "next/image";
import { about, approach } from "@/lib/content";

/** The qilim diamond from the logo band, oversized as a faint watermark. */
function QilimWatermark() {
  return (
    <svg viewBox="0 0 80 56" className="approach__mark" aria-hidden="true" focusable="false">
      <path d="M40 4 76 28 40 52 4 28Z" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="M40 18 54 28 40 38 26 28Z" fill="currentColor" />
    </svg>
  );
}

export function Approach() {
  const { slide } = about.images;
  return (
    <section id="approach" className="approach section" aria-labelledby="approach-title">
      <QilimWatermark />
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h2 id="approach-title" className="display h2 text-ivory!">
            {approach.heading}
          </h2>
          <p className="lead mt-8 max-w-[30ch]">{approach.lead}</p>
          <p className="pull-quote">{approach.pullQuote}</p>
          <div className="space-y-5 text-ivory/85">
            {approach.paragraphs.map((p) => (
              <p key={p} className="measure">
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="frame">
          <Image
            src={slide.src}
            alt={slide.alt}
            width={slide.width}
            height={slide.height}
            sizes="(max-width: 1024px) 92vw, 480px"
          />
        </div>
      </div>
    </section>
  );
}
