"use client";

import Script from "next/script";
import { book } from "@/lib/content";

function CalendarIllustration() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true" focusable="false">
      <rect x="10" y="18" width="76" height="66" rx="10" fill="#FFFDF7" stroke="#1F1F1F" strokeWidth="2" />
      <rect x="10" y="18" width="76" height="18" rx="10" fill="#E41E20" />
      <rect x="10" y="28" width="76" height="8" fill="#E41E20" />
      <rect x="26" y="10" width="6" height="16" rx="3" fill="#1F1F1F" />
      <rect x="64" y="10" width="6" height="16" rx="3" fill="#1F1F1F" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={20 + c * 16}
            y={44 + r * 12}
            width="10"
            height="8"
            rx="2"
            fill={r === 1 && c === 2 ? "#E41E20" : "#ECE7DD"}
          />
        )),
      )}
    </svg>
  );
}

function CalendlyPlaceholder() {
  return (
    /* CALENDLY PLACEHOLDER — set NEXT_PUBLIC_CALENDLY_URL in Vercel to activate the real embed */
    <div id="calendly-placeholder" className="book-placeholder">
      <CalendarIllustration />
      <p className="display text-2xl">{book.placeholder.title}</p>
      <p className="text-muted">{book.placeholder.line}</p>
    </div>
  );
}

/**
 * Inline Calendly widget, driven by NEXT_PUBLIC_CALENDLY_URL.
 * Empty (now): a clearly marked placeholder. Set (later): the real widget, script loaded lazily.
 * Both reserve the same height (see --book-h) so switching causes no layout shift.
 */
export function CalendlyEmbed({ url }: { url?: string }) {
  if (!url) return <CalendlyPlaceholder />;

  const sep = url.includes("?") ? "&" : "?";
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={`${url}${sep}primary_color=e41e20`} // Calendly colour param to match the brand
        style={{ minWidth: 320 }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  );
}
