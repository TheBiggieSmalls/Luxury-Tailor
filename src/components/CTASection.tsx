import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const { t } = useLanguage();
  const { openBooking } = useBooking();
  const ref = useScrollReveal();

  return (
    <section className="py-32 md:py-44">
      <div ref={ref} className="container mx-auto px-6 text-center max-w-2xl space-y-8">
        <p className="text-[11px] tracking-[0.4em] uppercase text-taupe font-body">{t("cta.tag")}</p>
        <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground leading-[1.1]">
          {t("cta.title")}
        </h2>
        <p className="text-muted-foreground leading-[1.8] font-body text-sm max-w-md mx-auto">
          {t("cta.desc")}
        </p>
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-body font-medium">
          {t("cta.urgency")}
        </p>
        <div className="pt-4">
          <Button variant="hero" size="lg" className="px-14 py-6" onClick={openBooking}>
            {t("cta.button")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
