// Hand-drawn-style SVG sketches for the 4 wedding process steps.
// Stroked lines, no fill — sit subtly behind text.

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const SketchConsultation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 120" {...props}>
    <g {...baseProps}>
      {/* tape measure */}
      <circle cx="40" cy="60" r="22" />
      <circle cx="40" cy="60" r="6" />
      <path d="M62 60 C 80 60, 90 50, 100 60 L 110 56 L 108 66 L 100 60" />
      <path d="M68 58 l2 4 M76 58 l2 4 M84 58 l2 4 M92 58 l2 4" />
    </g>
  </svg>
);

export const SketchMeasure = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 120" {...props}>
    <g {...baseProps}>
      {/* dress form silhouette */}
      <path d="M60 18 c -10 6 -14 18 -14 28 c 0 10 -8 18 -14 28 l 14 8 l -2 22 l 32 0 l -2 -22 l 14 -8 c -6 -10 -14 -18 -14 -28 c 0 -10 -4 -22 -14 -28 z" />
      <path d="M46 60 l 28 0 M48 72 l 24 0 M50 84 l 20 0" strokeDasharray="2 3" />
    </g>
  </svg>
);

export const SketchScissors = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 120" {...props}>
    <g {...baseProps}>
      <circle cx="34" cy="42" r="10" />
      <circle cx="34" cy="78" r="10" />
      <path d="M44 48 L 100 60 L 44 72" />
      <path d="M56 60 L 100 60" />
    </g>
  </svg>
);

export const SketchJacket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 120" {...props}>
    <g {...baseProps}>
      <path d="M40 28 L 60 36 L 80 28 L 96 44 L 92 100 L 28 100 L 24 44 z" />
      <path d="M60 36 L 60 100" />
      <path d="M60 36 L 48 60 L 60 56" />
      <path d="M60 36 L 72 60 L 60 56" />
      <circle cx="60" cy="62" r="1.5" />
      <circle cx="60" cy="74" r="1.5" />
      <circle cx="60" cy="86" r="1.5" />
    </g>
  </svg>
);

export const sketches = [SketchConsultation, SketchMeasure, SketchScissors, SketchJacket];
