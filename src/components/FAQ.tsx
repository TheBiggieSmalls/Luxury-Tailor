import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useBooking } from "@/contexts/BookingContext";
import type { TranslationKey } from "@/i18n/translations";

type FaqEntry = {
  q: TranslationKey;
  a: TranslationKey;
  link?: { kind: "wedding" | "booking" | "anchor"; anchor?: string; labelEn: string; labelNl: string; labelFr: string };
};

const faqEntries: FaqEntry[] = [
  { q: "faq.q1", a: "faq.a1", link: { kind: "anchor", anchor: "#process", labelEn: "See our process", labelNl: "Bekijk ons proces", labelFr: "Voir notre processus" } },
  { q: "faq.q4", a: "faq.a4", link: { kind: "anchor", anchor: "#pricing", labelEn: "View pricing tiers", labelNl: "Bekijk de prijzen", labelFr: "Voir les tarifs" } },
  { q: "faq.q2", a: "faq.a2", link: { kind: "wedding", labelEn: "Wedding suits page", labelNl: "Trouwpak op maat", labelFr: "Costume de mariage sur mesure" } },
  { q: "faq.q3", a: "faq.a3", link: { kind: "anchor", anchor: "#visit", labelEn: "Visit us", labelNl: "Kom langs", labelFr: "Nous rendre visite" } },
  { q: "faq.q5", a: "faq.a5", link: { kind: "booking", labelEn: "Book your appointment", labelNl: "Maak een afspraak", labelFr: "Prendre rendez-vous" } },
  { q: "faq.q7", a: "faq.a7", link: { kind: "wedding", labelEn: "More on wedding suits", labelNl: "Meer over trouwpakken", labelFr: "Plus sur les costumes de mariage" } },
];

const FAQ = () => {
  const { t, language } = useLanguage();
  const { openBooking } = useBooking();
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 150 });

  const weddingHref =
    language === "nl" ? "/trouwpak-op-maat" :
    language === "fr" ? "/costume-mariage-sur-mesure" :
    "/custom-wedding-suits";

  const linkLabel = (l: NonNullable<FaqEntry["link"]>) =>
    language === "nl" ? l.labelNl : language === "fr" ? l.labelFr : l.labelEn;

  return (
    <section id="faq" className="py-24 md:py-36 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div ref={headerRef} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <p className="text-[11px] tracking-[0.4em] uppercase text-taupe font-body mb-4">{t("faq.tag")}</p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground leading-[1.1]">
              {t("faq.title")}
            </h2>
          </div>
          <div ref={contentRef} className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-0">
              {faqEntries.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border border-t last:border-b">
                  <AccordionTrigger className="font-heading text-lg font-light text-foreground hover:no-underline py-6 text-left">
                    {t(faq.q)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-[1.8] pb-6 font-body text-sm">
                    <p>{t(faq.a)}</p>
                    {faq.link && (
                      <div className="mt-4">
                        {faq.link.kind === "booking" ? (
                          <button
                            type="button"
                            onClick={() => openBooking()}
                            className="text-[10px] tracking-[0.3em] uppercase text-foreground hover:text-gold font-body font-medium border-b border-foreground/30 pb-1 transition-colors"
                          >
                            {linkLabel(faq.link)} →
                          </button>
                        ) : (
                          <a
                            href={faq.link.kind === "wedding" ? weddingHref : faq.link.anchor}
                            className="text-[10px] tracking-[0.3em] uppercase text-foreground hover:text-gold font-body font-medium border-b border-foreground/30 pb-1 transition-colors"
                          >
                            {linkLabel(faq.link)} →
                          </a>
                        )}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
