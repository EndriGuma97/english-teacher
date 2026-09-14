"use client";

import { useEffect, useRef, useState } from "react";
import type { Review } from "@/lib/content";
import { Flag } from "./Flag";
import { StarIcon } from "./Icons";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} size={18} className={i < rating ? undefined : "star--off"} />
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
        aria-label="Student reviews, newest first"
        onKeyDown={onKeyDown}
      >
        {items.map((r, i) => (
          <li key={`${r.name}-${r.when}-${i}`} className="review">
            <figure className="contents">
              <Stars rating={r.rating} />
              <blockquote>
                <p>{r.quote}</p>
              </blockquote>
              <figcaption>
                <span className="review__name">
                  {r.name}
                  {r.country && (
                    <>
                      {" "}
                      <Flag country={r.country} />
                    </>
                  )}
                </span>
                <span className="review__when">{r.when}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="dots md:hidden" role="tablist" aria-label="Choose a review">
        {items.map((r, i) => (
          <button
            key={`${r.name}-${r.when}-${i}`}
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
