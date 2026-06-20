import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import promoBg from "@/assets/promo-bg.jpg";

interface PromotionProps {
  onClaimOffer: () => void;
  /** When true, replaces the CTA with a 6-day countdown timer. */
  countdown?: boolean;
  /** Number of days the offer is valid from first view (default 6). */
  countdownDays?: number;
  /** localStorage key to persist the start timestamp. */
  storageKey?: string;
}

const useCountdown = (targetMs: number | null) => {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!targetMs) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [targetMs]);
  if (!targetMs) return null;
  const diff = Math.max(0, targetMs - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s, expired: diff === 0 };
};

const pad = (n: number) => String(n).padStart(2, "0");

const Promotion = ({
  onClaimOffer,
  countdown = false,
  countdownDays = 6,
  storageKey = "alexnass_promo_started_at",
}: PromotionProps) => {
  const { t, language } = useLanguage();
  const ref = useScrollReveal();

  const [target, setTarget] = useState<number | null>(null);
  useEffect(() => {
    if (!countdown) return;
    let start = Number(localStorage.getItem(storageKey));
    if (!start || Number.isNaN(start)) {
      start = Date.now();
      localStorage.setItem(storageKey, String(start));
    }
    setTarget(start + countdownDays * 86400000);
  }, [countdown, countdownDays, storageKey]);

  const cd = useCountdown(target);

  const unitLabels =
    language === "fr"
      ? { d: "JOURS", h: "HEURES", m: "MIN", s: "SEC" }
      : language === "en"
      ? { d: "DAYS", h: "HOURS", m: "MIN", s: "SEC" }
      : { d: "DAGEN", h: "UREN", m: "MIN", s: "SEC" };

  const expiredLabel =
    language === "fr" ? "Offre expirée" : language === "en" ? "Offer expired" : "Aanbod verlopen";

  const ctaLabel =
    language === "fr"
      ? "Réservez votre place →"
      : language === "en"
      ? "Reserve your spot →"
      : "Reserveer uw plaats →";

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={promoBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-espresso/85" />
      </div>

      <div ref={ref} className="relative container mx-auto px-6 py-24 md:py-32 text-center max-w-3xl space-y-8">
        <p className="text-[11px] tracking-[0.5em] uppercase text-gold/80 font-body">
          {t("promo.tag")}
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light leading-[1.15] text-cream">
          {t("promo.title")}
        </h2>
        <p className="text-cream/70 font-body text-sm leading-relaxed max-w-md mx-auto">
          {t("promo.desc")}
        </p>

        {countdown ? (
          <div className="pt-2 space-y-8">
            {cd && !cd.expired ? (
              <div className="flex items-start justify-center gap-4 md:gap-8 tabular-nums">
                {([
                  [cd.d, unitLabels.d],
                  [cd.h, unitLabels.h],
                  [cd.m, unitLabels.m],
                  [cd.s, unitLabels.s],
                ] as [number, string][]).map(([val, lbl], i) => (
                  <div key={lbl} className="flex items-start gap-4 md:gap-8">
                    <div className="flex flex-col items-center">
                      <span className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-gold leading-none">
                        {pad(val)}
                      </span>
                      <span className="mt-3 text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-cream/55 font-body">
                        {lbl}
                      </span>
                    </div>
                    {i < 3 && (
                      <span className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-gold/40 leading-none">
                        :
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="font-heading text-2xl md:text-3xl text-cream/80 font-light italic">
                {expiredLabel}
              </p>
            )}

            <div>
              <Button
                variant="hero"
                size="sm"
                className="px-10 py-5 bg-cream text-espresso hover:bg-cream/90 border-0 tracking-[0.22em] text-[10px] uppercase rounded-none"
                onClick={onClaimOffer}
              >
                {ctaLabel}
              </Button>
              <p className="mt-5 text-[10px] tracking-[0.3em] uppercase text-cream/40 font-body">
                {t("promo.trust")}
              </p>
            </div>
          </div>
        ) : (
          <div className="pt-2 space-y-4">
            <Button
              variant="hero"
              size="lg"
              className="px-12 py-6 bg-cream text-espresso hover:bg-cream/90"
              onClick={onClaimOffer}
            >
              {t("promo.cta")}
            </Button>
            <p className="text-[10px] tracking-[0.3em] uppercase text-cream/40 font-body">
              {t("promo.trust")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Promotion;
