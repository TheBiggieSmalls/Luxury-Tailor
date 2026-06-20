import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Locale = "nl" | "fr" | "en";

interface Link {
  label: string;
  href: string;
}

const labels = {
  heading: {
    nl: "Wat wil je hierna ontdekken?",
    fr: "Que souhaitez-vous découvrir ensuite ?",
    en: "What would you like to explore next?",
  },
  hint: {
    nl: "Kies een onderwerp en we brengen je er meteen heen.",
    fr: "Choisissez un sujet et nous vous y emmenons.",
    en: "Pick a topic and we'll take you there.",
  },
  go: { nl: "Ga naar", fr: "Aller à", en: "Go to" },
};

const NextStepSelector = ({ links, locale = "en" }: { links: Link[]; locale?: Locale }) => {
  const [selected, setSelected] = useState<Link | null>(null);

  const isInternal = (href: string) => href.startsWith("/") && !href.startsWith("/#");

  return (
    <div className="text-center">
      <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-3">
        {labels.heading[locale]}
      </h3>
      <p className="font-body text-sm text-muted-foreground mb-10">
        {labels.hint[locale]}
      </p>

      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {links.map((l) => {
          const active = selected?.href === l.href;
          return (
            <button
              key={l.href}
              type="button"
              onClick={() => setSelected(active ? null : l)}
              className={`px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase font-body transition-all duration-300 hover:-translate-y-0.5 border ${
                active
                  ? "bg-gold border-gold text-espresso shadow-md"
                  : "bg-background border-border text-foreground/70 hover:border-gold hover:text-foreground"
              }`}
            >
              {l.label}
            </button>
          );
        })}
      </div>

      <div
        className="mt-10 transition-all duration-500"
        style={{
          opacity: selected ? 1 : 0,
          transform: selected ? "translateY(0)" : "translateY(8px)",
          pointerEvents: selected ? "auto" : "none",
        }}
      >
        {selected && (
          (isInternal(selected.href) ? (
            <Link
              to={selected.href}
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-[11px] tracking-[0.3em] uppercase font-body hover:bg-gold hover:text-espresso transition-colors"
            >
              {labels.go[locale]} {selected.label}
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          ) : (
            <a
              href={selected.href}
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-[11px] tracking-[0.3em] uppercase font-body hover:bg-gold hover:text-espresso transition-colors"
            >
              {labels.go[locale]} {selected.label}
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default NextStepSelector;
