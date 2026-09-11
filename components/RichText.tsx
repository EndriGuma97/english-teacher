import type { RichText as RichTextType } from "@/lib/content";

/** Renders copy from lib/content.ts that contains highlighted stats or Albanian words. */
export function RichText({ segments }: { segments: RichTextType }) {
  return (
    <>
      {segments.map((seg, i) => {
        if (typeof seg === "string") return seg;
        if (seg.kind === "stat")
          return (
            <strong key={i} className="stat">
              {seg.text}
            </strong>
          );
        if (seg.kind === "sq")
          return (
            <span key={i} lang="sq">
              {seg.text}
            </span>
          );
        return <strong key={i}>{seg.text}</strong>;
      })}
    </>
  );
}
