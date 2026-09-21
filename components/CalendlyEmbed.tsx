"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { book } from "@/lib/content";
import { calendlyUrl } from "@/lib/site";

declare global {
  interface Window {
    Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void };
  }
}

/**
 * Debora's Calendly calendar, mounted inline. Calendly's script is only requested
 * once the booking block is close to the viewport, so it never competes with the
 * first paint; the slot keeps its reserved height the whole time (no layout shift).
 */
export function CalendlyEmbed() {
  const [near, setNear] = useState(false);
  const [ready, setReady] = useState(false);
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        io.disconnect();
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(slot);
    return () => io.disconnect();
  }, []);

  // `ready` flips when Calendly's script has loaded (onReady also fires on remounts).
  useEffect(() => {
    const slot = slotRef.current;
    if (!slot || !ready || !window.Calendly) return;
    slot.innerHTML = "";
    const sep = calendlyUrl.includes("?") ? "&" : "?";
    window.Calendly.initInlineWidget({
      url: `${calendlyUrl}${sep}primary_color=e41e20&hide_gdpr_banner=1`, // brand red for the widget accents
      parentElement: slot,
    });
  }, [ready]);

  return (
    <div className="book-slot" role="region" aria-label={book.calendarLabel}>
      <div ref={slotRef} className="book-slot__widget" />
      {near && (
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
          onReady={() => setReady(true)}
        />
      )}
    </div>
  );
}
