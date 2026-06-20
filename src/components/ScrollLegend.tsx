import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "collection", label: "Collection" },
  { id: "shop", label: "Shop" },
  { id: "process", label: "Process" },
  { id: "reviews", label: "Reviews" },
  { id: "pricing", label: "Pricing" },
  { id: "wizard", label: "Design" },
  { id: "visit", label: "Visit" },
  { id: "blog", label: "Blog" },
  { id: "faq", label: "FAQ" },
];

const darkSections = ["hero", "visit"];

const ScrollLegend = () => {
  const [activeId, setActiveId] = useState("hero");
  const [isDark, setIsDark] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const threshold = hero ? hero.offsetHeight - 80 : 600;
      setPastHero(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const most = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActiveId(most.target.id);
          setIsDark(darkSections.includes(most.target.id));
        }
      },
      { threshold: [0.2, 0.5], rootMargin: "-10% 0px -10% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block transition-all duration-500 ${
        pastHero ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Section navigation"
    >
      <ul className="flex flex-col items-start">
        {sections.map((s) => {
          const isActive = activeId === s.id;

          const lineColor = isDark
            ? `rgba(255,255,255,${isActive ? 0.7 : 0.18})`
            : `rgba(30,25,20,${isActive ? 0.65 : 0.18})`;
          const textColor = isDark ? `rgba(255,255,255,0.85)` : `rgba(30,25,20,0.85)`;

          return (
            <li key={s.id} className="group">
              <button
                onClick={() => handleClick(s.id)}
                onMouseEnter={() => setHoveredId(s.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative flex items-center h-7 cursor-pointer rounded-full px-3 -mx-1 my-0.5 transition-all duration-300 ${
                  hoveredId === s.id || isActive
                    ? isDark
                      ? "bg-background/15 backdrop-blur-sm"
                      : "bg-foreground/[0.06] backdrop-blur-sm"
                    : "bg-transparent"
                }`}
                aria-label={`Go to ${s.label}`}
              >
                <span
                  className="block h-px transition-all duration-500 ease-out"
                  style={{
                    width: isActive ? "28px" : "14px",
                    backgroundColor: lineColor,
                  }}
                />
                <span
                  className="ml-3 text-[9px] tracking-[0.32em] uppercase font-body whitespace-nowrap transition-all duration-300 pointer-events-none"
                  style={{
                    color: textColor,
                    opacity: hoveredId === s.id || isActive ? 1 : 0,
                    transform: hoveredId === s.id || isActive ? "translateX(0)" : "translateX(-4px)",
                  }}
                >
                  {s.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ScrollLegend;
