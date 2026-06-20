import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Scissors = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" {...base} {...p}>
    <circle cx="14" cy="44" r="7" />
    <circle cx="14" cy="20" r="7" />
    <path d="M21 24 L56 50" />
    <path d="M21 40 L56 14" />
    <path d="M30 32 L36 32" />
  </svg>
);

export const Needle = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" {...base} {...p}>
    <path d="M8 56 L52 12" />
    <ellipse cx="52" cy="12" rx="3" ry="2" transform="rotate(-45 52 12)" />
    <path d="M14 50 Q22 46 30 50 T46 50" />
  </svg>
);

export const Spool = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" {...base} {...p}>
    <rect x="16" y="10" width="32" height="44" rx="2" />
    <line x1="16" y1="18" x2="48" y2="18" />
    <line x1="16" y1="46" x2="48" y2="46" />
    <line x1="22" y1="22" x2="22" y2="42" />
    <line x1="32" y1="22" x2="32" y2="42" />
    <line x1="42" y1="22" x2="42" y2="42" />
  </svg>
);

export const Tape = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" {...base} {...p}>
    <path d="M4 36 Q4 26 14 26 L52 26 Q60 26 60 34 Q60 42 52 42 L18 42 Q14 42 14 38" />
    <line x1="22" y1="42" x2="22" y2="48" />
    <line x1="30" y1="42" x2="30" y2="46" />
    <line x1="38" y1="42" x2="38" y2="48" />
    <line x1="46" y1="42" x2="46" y2="46" />
  </svg>
);

export const Thimble = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" {...base} {...p}>
    <path d="M22 18 Q22 8 32 8 Q42 8 42 18 L42 48 Q42 54 32 54 Q22 54 22 48 Z" />
    <circle cx="28" cy="20" r="1" />
    <circle cx="34" cy="22" r="1" />
    <circle cx="30" cy="28" r="1" />
    <circle cx="36" cy="30" r="1" />
    <circle cx="28" cy="36" r="1" />
    <circle cx="34" cy="38" r="1" />
  </svg>
);

export const ButtonIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" {...base} {...p}>
    <circle cx="32" cy="32" r="22" />
    <circle cx="32" cy="32" r="14" />
    <circle cx="28" cy="28" r="1.5" />
    <circle cx="36" cy="28" r="1.5" />
    <circle cx="28" cy="36" r="1.5" />
    <circle cx="36" cy="36" r="1.5" />
  </svg>
);

export const DressForm = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" {...base} {...p}>
    <path d="M32 6 L32 14" />
    <path d="M22 16 Q32 14 42 16 L48 36 Q40 42 32 42 Q24 42 16 36 Z" />
    <path d="M32 42 L32 52" />
    <line x1="24" y1="52" x2="40" y2="52" />
  </svg>
);

export const Hanger = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" {...base} {...p}>
    <path d="M32 16 Q32 10 36 10 Q40 10 40 14" />
    <path d="M32 16 L32 22" />
    <path d="M32 22 L8 40 L56 40 L32 22 Z" />
  </svg>
);
