import { Fragment, type ReactNode } from "react";
import { EagleMark } from "./EagleMark";

const FLAG = "🇦🇱";

/**
 * The Albanian flag emoji has no glyph on Windows (it shows as "AL"),
 * so it is drawn as a small inline SVG: flag red with the geometric eagle mark.
 */
export function AlbanianFlag({ className = "flag" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 21" className={className} role="img" aria-label="Albanian flag">
      <rect width="30" height="21" rx="2.5" fill="#E41E20" />
      <EagleMark x="7.5" y="2" width="15" height="17" style={{ color: "#000" }} />
    </svg>
  );
}

/** Renders a single emoji, swapping the flag for the SVG version. */
export function Emoji({ symbol }: { symbol: string }) {
  return symbol === FLAG ? <AlbanianFlag /> : <>{symbol}</>;
}

/** Renders a copy string, replacing any Albanian flag emoji inside it with the SVG version. */
export function TextWithFlag({ text }: { text: string }): ReactNode {
  const parts = text.split(FLAG);
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <AlbanianFlag />}
    </Fragment>
  ));
}
