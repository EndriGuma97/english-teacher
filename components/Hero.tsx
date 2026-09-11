import Image from "next/image";
import { hero } from "@/lib/content";
import { TextWithFlag } from "./Emoji";
import portrait from "@/public/images/debora-portrait.webp";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero__glow" />
      <svg
        className="hero__mountains"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M0 220V150l80-40 70 30 90-70 110 60 80-30 100 50 120-90 110 70 90-40 100 60 90-50 110 80 90-40 80 50 120-60V220Z"
        />
      </svg>

      <div className="container grid items-end gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
        <div className="pb-10 lg:pb-24">
          <h1 id="hero-title" className="display h1 a-rise">
            <TextWithFlag text={hero.title} />
          </h1>
          <p className="lead a-rise d1 mt-5 max-w-[34ch] text-muted">{hero.subtitle}</p>
          <div className="a-rise d2 mt-8 flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className="btn btn--primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn--outline">
              {hero.secondaryCta.label}
            </a>
          </div>
          <ul className="trust a-rise d3 mt-6">
            {hero.trust.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="arch a-fade">
          <div className="arch__frame">
            <div className="arch__inner">
              <Image
                src={portrait}
                alt={hero.portraitAlt}
                width={960}
                height={1437}
                priority
                sizes="(max-width: 768px) 80vw, 480px"
                className="arch__img"
              />
            </div>
          </div>
          <div className="badge a-pop">
            <span className="chip chip--stone" aria-hidden="true">
              {hero.badge.emoji}
            </span>
            <span className="leading-tight">
              <span className="display block text-lg" lang="sq">
                {hero.badge.greeting}
              </span>
              <span className="block text-sm text-muted">{hero.badge.line}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
