import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 group transition-all duration-500 ${
        visible ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-2"
      }`}
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        className="drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        {/* Tailor-collar / lapel-notch shape */}
        <path
          d="M 28 2 L 50 16 L 46 50 L 28 44 L 10 50 L 6 16 Z"
          fill="hsl(var(--espresso))"
          stroke="hsl(var(--gold))"
          strokeWidth="1.5"
          className="transition-all duration-300 group-hover:stroke-[2]"
        />
        {/* Center stitch line */}
        <line
          x1="28"
          y1="44"
          x2="28"
          y2="38"
          stroke="hsl(var(--gold) / 0.5)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        {/* Up arrow */}
        <polyline
          points="20,30 28,20 36,30"
          fill="none"
          stroke="hsl(var(--cream))"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="28"
          y1="20"
          x2="28"
          y2="34"
          stroke="hsl(var(--cream))"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default BackToTop;
