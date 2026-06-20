import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

interface Step {
  week: string;
  title: string;
  desc: string;
  Sketch: React.FC<React.SVGProps<SVGSVGElement>>;
}

type Locale = "nl" | "fr" | "en";

const labels = {
  reveal: {
    nl: "Toon volgende stap",
    fr: "Révéler l'étape suivante",
    en: "Reveal next step",
  },
  reset: { nl: "Opnieuw", fr: "Recommencer", en: "Reset" },
  step: { nl: "Stap", fr: "Étape", en: "Step" },
  of: { nl: "van", fr: "sur", en: "of" },
};

const ProcessRow = ({ steps, locale = "en" }: { steps: Step[]; locale?: Locale }) => {
  const [visible, setVisible] = useState(1);
  const total = steps.length;
  const isComplete = visible >= total;
  const activeIndex = visible - 1;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
        <div className="hidden md:block absolute top-[64px] left-[12%] right-[12%] h-px bg-border" />
        {steps.map((s, i) => {
          const isOn = i < visible;
          const isActive = i === activeIndex;
          const showControl = isActive;
          return (
            <div
              key={i}
              className="relative flex flex-col items-center text-center px-2 transition-all duration-[700ms] ease-out"
              style={{
                opacity: isOn ? 1 : 0,
                transform: isOn ? "translateX(0)" : "translateX(28px)",
                pointerEvents: isOn ? "auto" : "none",
              }}
            >
              <s.Sketch className="w-24 h-24 md:w-28 md:h-28 text-gold/70 mb-4 relative z-10 bg-background" />
              <div className="w-2.5 h-2.5 rounded-full bg-gold ring-4 ring-background relative z-10 mb-5" />
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold font-body mb-3">
                {s.week}
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-light text-foreground mb-3 leading-tight">
                {s.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-[1.75] max-w-xs">
                {s.desc}
              </p>

              {/* Inline reveal control attached to the active step */}
              {showControl && (
                <button
                  type="button"
                  onClick={() => setVisible((v) => (v >= total ? 1 : v + 1))}
                  aria-label={isComplete ? labels.reset[locale] : labels.reveal[locale]}
                  title={isComplete ? labels.reset[locale] : labels.reveal[locale]}
                  className="group/ctrl mt-6 md:mt-0 md:absolute md:top-[58px] md:right-[-18px] z-20 inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold text-gold bg-background shadow-md transition-all duration-300 hover:bg-gold hover:text-espresso hover:scale-110 animate-fade-in"
                >
                  {isComplete ? (
                    <RotateCcw className="w-4 h-4" strokeWidth={1.5} />
                  ) : (
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/ctrl:translate-x-0.5" strokeWidth={1.5} />
                  )}
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[0.3em] uppercase font-body text-foreground/60 opacity-0 group-hover/ctrl:opacity-100 transition-opacity">
                    {isComplete ? labels.reset[locale] : labels.reveal[locale]}
                  </span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-12 text-center text-[10px] tracking-[0.35em] uppercase text-foreground/55 font-body">
        {labels.step[locale]} {visible} {labels.of[locale]} {total}
      </p>
    </div>
  );
};

export default ProcessRow;
