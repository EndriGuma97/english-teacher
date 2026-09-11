import { learn } from "@/lib/content";
import { Emoji } from "./Emoji";

export function Learn() {
  return (
    <section id="learn" className="section" aria-labelledby="learn-title">
      <div className="container">
        <h2 id="learn-title" className="display h2">
          {learn.heading}
        </h2>
        <ul className="skills mt-10">
          {learn.skills.map((s) => (
            <li key={s.title} className="skill">
              <span className="chip chip--lg chip--stone" aria-hidden="true">
                <Emoji symbol={s.emoji} />
              </span>
              <h3 className="display h3 mt-5">{s.title}</h3>
              <p className="mt-2 text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
