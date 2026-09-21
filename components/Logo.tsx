import Image from "next/image";

/**
 * The brand logo: "LEARN Albanian with Debora" with a plis (white felt cap) on the A.
 * The files in /public/brand are outlined vectors, so no extra webfont is needed.
 * - `compact`: nav lockup (no qilim band)
 * - `full`: the complete stacked logo
 * - `light`: the full logo for black backgrounds (footer)
 */
const variants = {
  compact: { src: "/brand/logo-compact.svg", width: 756, height: 340 },
  full: { src: "/brand/logo.svg", width: 770, height: 630 },
  light: { src: "/brand/logo-light.svg", width: 770, height: 630 },
} as const;

type LogoProps = {
  variant?: keyof typeof variants;
  className?: string;
  /** Above-the-fold logos (the nav) skip lazy loading. */
  eager?: boolean;
  /** Empty when the surrounding link already carries the accessible name. */
  alt?: string;
};

export function Logo({ variant = "compact", className, eager = false, alt = "" }: LogoProps) {
  const { src, width, height } = variants[variant];
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={eager ? "eager" : "lazy"}
    />
  );
}
