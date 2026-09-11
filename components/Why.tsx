import { why } from "@/lib/content";
import { Emoji } from "./Emoji";

export function Why() {
  return (
    <section id="why" className="section bg-stone" aria-labelledby="why-title">
      <div className="container">
        <div className="max-w-[46rem]">
          <h2 id="why-title" className="display h2">
            {why.heading}
          </h2>
          <p className="lead mt-7">{why.intro[0]}</p>
          <p className="mt-4 measure">{why.intro[1]}</p>
          <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="How my lessons feel">
            {why.pills.map((p) => (
              <li key={p} className="pill bg-ivory!">
                {p}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="display h3 mt-14">{why.subheading}</h3>
        <ul className="reasons mt-6">
          {why.reasons.map((r) => (
            <li key={r.text}>
              <span className="chip" aria-hidden="true">
                <Emoji symbol={r.emoji} />
              </span>
              <span>{r.text}</span>
            </li>
          ))}
        </ul>

        <p className="serif-line mx-auto mt-14 max-w-[30ch] text-center text-[clamp(1.5rem,3vw,2.25rem)] text-black">
          {why.closing}
        </p>
      </div>
    </section>
  );
}
