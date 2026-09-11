import Image from "next/image";
import { about, approach } from "@/lib/content";
import { EagleMark } from "./EagleMark";

export function Approach() {
  const { slide } = about.images;
  return (
    <section id="approach" className="approach section" aria-labelledby="approach-title">
      <EagleMark className="approach__eagle" />
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
