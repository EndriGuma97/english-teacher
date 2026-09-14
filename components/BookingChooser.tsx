"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { book } from "@/lib/content";
import { calendlyUrls, type LessonKind } from "@/lib/site";

declare global {
  interface Window {
    Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void };
  }
}

/**
 * Step 1: the visitor picks 1:1 or group. Step 2: the matching Calendly calendar
 * is mounted inline. Calendly's script is loaded once (lazily); switching the
 * lesson type re-initialises the widget in the same slot.
 */
export function BookingChooser() {
  const [kind, setKind] = useState<LessonKind | null>(null);
  const [ready, setReady] = useState(false);
  const slotRef = useRef<HTMLDivElement>(null);
  const url = kind ? calendlyUrls[kind] : null;

  // `ready` flips when Calendly's script has loaded (onReady also fires on remounts).
  useEffect(() => {
    const slot = slotRef.current;
    if (!slot || !url || !ready || !window.Calendly) return;
    slot.innerHTML = "";
    const sep = url.includes("?") ? "&" : "?";
    window.Calendly.initInlineWidget({
      url: `${url}${sep}primary_color=e41e20&hide_gdpr_banner=1`, // brand red for the widget accents
      parentElement: slot,
    });
  }, [url, ready]);

  return (
    <div>
      <p className="text-center font-semibold">{book.choose.label}</p>
      <div className="lesson-choice mt-4" role="radiogroup" aria-label={book.choose.label}>
        {book.choose.options.map((o) => {
          const selected = kind === o.key;
          return (
            <button
              key={o.key}
              type="button"
              role="radio"
              aria-checked={selected}
              className={`lesson-choice__opt ${selected ? "is-selected" : ""}`}
              onClick={() => setKind(o.key)}
            >
              <span className="chip chip--stone" aria-hidden="true">
                {o.emoji}
              </span>
              <span className="lesson-choice__body">
                <strong>{o.title}</strong>
                <span>{o.text}</span>
              </span>
            </button>
          );
        })}
      </div>

      {kind ? (
        <div className="book-slot mt-6" aria-live="polite">
          <div ref={slotRef} className="book-slot__widget" />
        </div>
      ) : (
        <p className="mt-6 text-center text-muted">{book.choose.hint}</p>
      )}

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onReady={() => setReady(true)}
      />
    </div>
  );
}
