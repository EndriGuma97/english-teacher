import { journey } from "@/lib/content";
import { TextWithFlag } from "./Emoji";
import { RichText } from "./RichText";

export function JourneyCta() {
  return (
    <section className="bg-stone" aria-labelledby="journey-title">
      <div className="qilim-divider" aria-hidden="true" />
      <div className="container section text-center">
        <h2 id="journey-title" className="display h2">
          {journey.heading}
        </h2>
        <p className="lead mx-auto mt-6 max-w-[38ch]">
          <RichText segments={journey.paragraph} />
        </p>
        <p className="mt-10 font-semibold text-muted">{journey.ready}</p>
        <p className="serif-line mt-2 text-[clamp(1.75rem,4vw,2.75rem)] text-black">
          <TextWithFlag text={journey.closing} />
        </p>
        <a href={journey.cta.href} className="btn btn--primary mt-8">
          {journey.cta.label}
        </a>
      </div>
    </section>
  );
}
