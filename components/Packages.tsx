import { packages } from "@/lib/content";
import { Emoji } from "./Emoji";
import { RichText } from "./RichText";

export function Packages() {
  return (
    <section id="packages" className="section" aria-labelledby="packages-title">
      <div className="container">
        <div className="text-center">
          <h2 id="packages-title" className="display h2">
            {packages.heading}
          </h2>
          <p className="lead mx-auto mt-4 max-w-[40ch]">{packages.subheading}</p>
          <p className="mx-auto mt-3 max-w-[52ch] text-muted">
            <RichText segments={packages.note} />
          </p>
        </div>

        <ul className="plans mt-12">
          {packages.plans.map((plan) => (
            <li key={plan.key} className="plan">
              <div className="flex items-center gap-3">
                <span className="chip chip--lg chip--stone" aria-hidden="true">
                  <Emoji symbol={plan.emoji} />
                </span>
                <div>
                  <h3 className="plan__name">{plan.name}</h3>
                  <p className="font-semibold text-muted">{plan.classes}</p>
                </div>
              </div>

              <p className="plan__price mt-6">
                <span className="sr-only">Regular price </span>
                <s>€{plan.was}</s>
                <span className="sr-only">, now </span>
                <strong>€{plan.price}</strong>
                <span className="plan__per">{packages.perMonth}</span>
              </p>
              <p className="pill plan__save mt-3">
                {packages.save} €{plan.was - plan.price}
              </p>

              <p className="mt-5">{plan.text}</p>

              <p className="mt-6 font-semibold">{packages.included}</p>
              <ul className="plan__features mt-3">
                {plan.features.map((f) => (
                  <li key={f.text}>
                    <span className="plan__emoji" aria-hidden="true">
                      <Emoji symbol={f.emoji} />
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <a
                href={packages.cta.href}
                className="btn btn--outline mt-8 w-full"
                aria-label={`${packages.cta.label} — ${plan.name}`}
              >
                {packages.cta.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
