"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { ArrowUpIcon } from "./Icons";

/**
 * Sticky bottom "Reserve your spot" bar on mobile (appears once the hero has scrolled out of view,
 * hides while the booking/contact/footer area is on screen) plus a back-to-top button.
 */
export function MobileCtaBar() {
  const [heroGone, setHeroGone] = useState(false);
  const [endVisible, setEndVisible] = useState(false);
  const [scrolledFar, setScrolledFar] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const ends = ["book", "contact"].map((id) => document.getElementById(id)).filter(Boolean) as Element[];
    const footerEl = document.querySelector("footer");
    if (footerEl) ends.push(footerEl);

    const heroIo = new IntersectionObserver(([e]) => setHeroGone(!e.isIntersecting), { threshold: 0 });
    if (hero) heroIo.observe(hero);

    const visible = new Set<Element>();
    const endIo = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        setEndVisible(visible.size > 0);
      },
      { threshold: 0 },
    );
    ends.forEach((el) => endIo.observe(el));

    const onScroll = () => setScrolledFar(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      heroIo.disconnect();
      endIo.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const barVisible = heroGone && !endVisible;

  return (
    <>
      <div className={`cta-bar ${barVisible ? "is-visible" : ""}`} aria-hidden={!barVisible}>
        <a href={nav.cta.href} className="btn btn--primary w-full" tabIndex={barVisible ? 0 : -1}>
          {nav.cta.label}
        </a>
      </div>
      <a
        href="#top"
        className={`to-top icon-btn ${scrolledFar ? "is-visible" : ""} ${barVisible ? "is-raised" : ""}`}
        aria-label="Back to top"
        tabIndex={scrolledFar ? 0 : -1}
      >
        <ArrowUpIcon size={20} />
      </a>
    </>
  );
}
