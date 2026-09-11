import { marquee } from "@/lib/content";

function List({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="marquee__list" aria-hidden={hidden ? "true" : undefined}>
      {marquee.map((w) => (
        <li key={w.sq} className="marquee__item">
          <span className="marquee__sq" lang="sq">
            {w.sq}
          </span>
          <span className="marquee__en">{w.en}</span>
        </li>
      ))}
    </ul>
  );
}

/** Pure-CSS marquee of everyday Albanian words. Pauses on hover; wraps statically under reduced motion. */
export function Marquee() {
  return (
    <div className="marquee" aria-label="Everyday Albanian words">
      <div className="marquee__track">
        <List />
        <List hidden />
      </div>
    </div>
  );
}
