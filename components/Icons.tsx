import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    ...rest,
  };
}

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
export const CloseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
export const ArrowUpIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);
export const ArrowDownIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);
export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
export const CopyIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);
export const MailIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
export const WhatsAppIcon = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8Zm-3.3 4.4c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 5 4.4 2.5 1 3 .8 3.5.7.5 0 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4l-.6-.3-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.4-3c-.2-.4.3-.4.8-1.4.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6Z" />
  </svg>
);
export const InstagramIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect width="18" height="18" x="3" y="3" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);
export const StarIcon = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="M11.5 3.3a.55.55 0 0 1 1 0l2.2 4.6c.08.16.23.28.41.3l5 .73c.45.07.63.62.3.94l-3.6 3.6a.55.55 0 0 0-.16.49l.86 5.03a.55.55 0 0 1-.8.58l-4.46-2.4a.55.55 0 0 0-.52 0l-4.46 2.4a.55.55 0 0 1-.8-.58l.86-5.03a.55.55 0 0 0-.16-.49l-3.6-3.6a.55.55 0 0 1 .3-.94l5-.73a.55.55 0 0 0 .41-.3z" />
  </svg>
);
