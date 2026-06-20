// Mid-size hand-drawn sketches for the timing timeline nodes.
const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const SketchCalendar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" {...props}>
    <g {...baseProps}>
      <rect x="10" y="14" width="44" height="40" rx="2" />
      <path d="M10 24 L54 24" />
      <path d="M20 10 L20 18 M44 10 L44 18" />
      <circle cx="22" cy="34" r="1.5" />
      <circle cx="32" cy="34" r="1.5" />
      <circle cx="42" cy="34" r="1.5" />
      <circle cx="22" cy="44" r="1.5" />
      <circle cx="32" cy="44" r="1.5" />
    </g>
  </svg>
);

export const SketchTape = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" {...props}>
    <g {...baseProps}>
      <circle cx="22" cy="32" r="14" />
      <circle cx="22" cy="32" r="4" />
      <path d="M36 32 C 44 32, 48 26, 56 32 L 60 30 L 58 36 L 56 32" />
      <path d="M40 30 l1 3 M46 30 l1 3 M52 30 l1 3" />
    </g>
  </svg>
);

export const SketchScissorsSm = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" {...props}>
    <g {...baseProps}>
      <circle cx="16" cy="22" r="6" />
      <circle cx="16" cy="42" r="6" />
      <path d="M22 25 L 56 32 L 22 39" />
      <path d="M30 32 L 56 32" />
    </g>
  </svg>
);

export const SketchChampagne = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" {...props}>
    <g {...baseProps}>
      <path d="M22 10 L42 10 L40 24 C 40 30, 36 34, 32 34 C 28 34, 24 30, 24 24 Z" />
      <path d="M32 34 L 32 50" />
      <path d="M24 50 L 40 50" />
      <circle cx="29" cy="20" r="1" />
      <circle cx="34" cy="22" r="1" />
      <circle cx="31" cy="26" r="1" />
    </g>
  </svg>
);

export const timingSketches = [SketchCalendar, SketchTape, SketchScissorsSm, SketchChampagne];
