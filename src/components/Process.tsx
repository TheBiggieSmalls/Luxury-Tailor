import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import bgConsult from "@/assets/process-bg-consultation.jpg";
import bgMeasure from "@/assets/process-bg-measurements.jpg";
import bgFitting from "@/assets/process-bg-fitting.jpg";
import bgDelivery from "@/assets/process-bg-delivery.jpg";

const stepKeys: { num: string; title: TranslationKey; desc: TranslationKey; img: string }[] = [
  { num: "01", title: "process.consultation", desc: "process.consultation.desc", img: bgConsult },
  { num: "02", title: "process.measurements", desc: "process.measurements.desc", img: bgMeasure },
  { num: "03", title: "process.fitting", desc: "process.fitting.desc", img: bgFitting },
  { num: "04", title: "process.delivery", desc: "process.delivery.desc", img: bgDelivery },
];

const FlipCard = ({ step, t }: { step: typeof stepKeys[0]; t: (k: TranslationKey) => string }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group relative aspect-[3/4] md:aspect-[2/3] md:cursor-default cursor-pointer [perspective:1000px]"
      onClick={() => {
        if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) {
          setFlipped((v) => !v);
        }
      }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)] lg:[transform:none]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden">
          <img
            src={step.img}
            alt={t(step.title)}
            loading="lazy"
            width={600}
            height={800}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-espresso/55 transition-colors duration-500" />
          <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-8">
            <span className="font-heading text-4xl md:text-5xl font-light text-cream/15 block leading-none mb-2">
              {step.num}
            </span>
            <h3 className="font-heading text-lg md:text-xl font-light text-cream mb-2 tracking-[-0.01em]">{t(step.title)}</h3>
            {/* Description visible on lg+, hidden below (tap to flip) */}
            <p className="text-[15px] md:text-xs text-cream/60 leading-[1.7] font-body hidden lg:block">{t(step.desc)}</p>
            <p className="text-[9px] tracking-[0.2em] uppercase text-cream/40 font-body mt-2 lg:hidden">Tik om te lezen</p>
          </div>
        </div>

        {/* Back — visible on touch sizes */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-espresso flex flex-col justify-center p-6 lg:hidden overflow-y-auto">
          <span className="font-heading text-3xl font-light text-cream/20 mb-3">{step.num}</span>
          <h3 className="font-heading text-lg font-light text-cream mb-4">{t(step.title)}</h3>
          <p className="text-[15px] text-cream/80 leading-[1.8] font-body">{t(step.desc)}</p>
          <p className="text-[9px] tracking-[0.2em] uppercase text-cream/40 font-body mt-4">Tik om te sluiten</p>
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div data-reveal className="mb-12 md:mb-20 max-w-xl">
          <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">{t("process.tag")}</p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] tracking-[-0.02em]">
            {t("process.title")}
          </h2>
        </div>

        <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stepKeys.map((step) => (
            <FlipCard key={step.num} step={step} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
