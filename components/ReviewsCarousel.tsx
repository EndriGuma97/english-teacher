"use client";

import { useEffect, useRef, useState } from "react";
import { StarIcon } from "./Icons";

type Review = { quote: string; attribution: string };

function Stars() {
  return (
    <span className="stars" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} size={18} />
      ))}
    </span>
  );
}

/**
 * Grid on desktop; horizontal scroll-snap carousel with dots on mobile.
 * The cards are plain markup — only the dots need client state.
 */
export function ReviewsCarousel({ items }: { items: readonly Review[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const cards = Array.from(list.children);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(cards.indexOf(e.target));
        }
      },
      { root: list, threshold: 0.6 },
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  const goTo = (i: number) => {
    const list = listRef.current;
    const card = list?.children[i] as HTMLElement | undefined;
    if (!list || !card) return;
    list.scrollTo({ left: card.offsetLeft - list.offsetLeft, behavior: "smooth" });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(Math.min(active + 1, items.length - 1));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(Math.max(active - 1, 0));
    }
  };

  return (
    <div>
      <ul
        ref={listRef}
        className="reviews"
        tabIndex={0}
        aria-label="Student reviews"
        onKeyDown={onKeyDown}
      >
        {items.map((r) => (
          <li key={r.attribution} className="review">
            <figure className="contents">
              <Stars />
              <blockquote>
                <p>{r.quote}</p>
              </blockquote>
              <figcaption>{r.attribution}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="dots md:hidden" role="tablist" aria-label="Choose a review">
        {items.map((r, i) => (
          <button
            key={r.attribution}
            type="button"
            role="tab"
            className="dot"
            aria-current={i === active ? "true" : undefined}
            aria-selected={i === active}
            aria-label={`Review ${i + 1} of ${items.length}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
