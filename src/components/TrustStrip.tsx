import { useLanguage } from "@/i18n/LanguageContext";
import { Ruler, Gem, UserCheck } from "lucide-react";

const TrustStrip = () => {
  const { t, language } = useLanguage();

  const pillars = [
    {
      label: language === "nl" ? "Perfecte pasvorm" : language === "fr" ? "Coupe parfaite" : "Perfect fit",
      icon: Ruler,
      body:
        language === "nl"
          ? "Meer dan dertig metingen. Een eigen patroon getekend op uw houding en uw lichaam. Minimaal drie passessies, want vakmanschap heeft tijd nodig om écht te zitten."
          : language === "fr"
          ? "Plus de trente mesures. Un patron personnel tracé sur votre posture et votre morphologie. Au moins trois essayages — l'artisanat a besoin de temps pour tomber juste."
          : "Over thirty measurements. A personal pattern drawn on your posture and body. At least three fittings, because craft needs time to settle into place.",
    },
    {
      label: language === "nl" ? "Premium stoffen" : language === "fr" ? "Tissus premium" : "Premium fabrics",
      icon: Gem,
      body:
        language === "nl"
          ? "Uitsluitend Italiaanse en Engelse weverijen: Loro Piana, Scabal, Dormeuil, Holland & Sherry. Stoffen die ademen, hangen en jaren meegaan — geen confectiekwaliteit, geen compromissen."
          : language === "fr"
          ? "Uniquement des manufactures italiennes et anglaises : Loro Piana, Scabal, Dormeuil, Holland & Sherry. Des tissus qui respirent, tombent et durent — jamais de compromis."
          : "Only Italian and English mills: Loro Piana, Scabal, Dormeuil, Holland & Sherry. Cloth that breathes, drapes, and lasts — no confection, no compromise.",
    },
    {
      label: language === "nl" ? "Persoonlijke begeleiding" : language === "fr" ? "Conseil personnel" : "Personal guidance",
      icon: UserCheck,
      body:
        language === "nl"
          ? "Eén klant per consultatie. U spreekt rechtstreeks met de kleermaker die uw pak ook effectief naait. Geen verkoopteam, geen tussenpersonen — alleen advies dat klopt."
          : language === "fr"
          ? "Un client par consultation. Vous parlez directement au tailleur qui coudra votre costume. Pas d'équipe commerciale — juste un conseil juste."
          : "One client per consultation. You speak directly with the tailor who will also stitch your suit. No sales team — only advice that is honest.",
    },
  ];

  return (
    <>
      {/* QUOTE SECTION — full width, framed by hairlines */}
      <section className="bg-card relative py-section">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gold/40" />
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div
            aria-hidden
            className="font-heading text-gold/30 leading-none mb-6 select-none"
            style={{ fontSize: "clamp(6rem, 12vw, 11rem)" }}
          >
            “
          </div>
          <p className="font-heading italic text-2xl md:text-4xl lg:text-[2.75rem] font-light text-foreground leading-[1.3] tracking-[-0.01em] -mt-12 md:-mt-16">
            {t("hero.quote")}
          </p>
          <p className="mt-10 text-[10px] tracking-[0.5em] uppercase text-taupe font-body">
            — Alex Nass, {language === "fr" ? "Tailleur" : language === "en" ? "Tailor" : "Kleermaker"}
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gold/40" />
      </section>

      {/* THREE PILLARS — unified warm espresso surface */}
      <section className="text-cream relative bg-espresso">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.label}
              data-reveal
              className={`flex flex-col items-center text-center px-8 md:px-10 py-20 md:py-28 transition-all duration-500 hover:brightness-110 group ${i > 0 ? "md:border-l border-cream/10" : ""}`}
            >
              <p.icon
                className="w-8 h-8 text-gold mb-8 transition-transform duration-500 group-hover:-translate-y-1"
                strokeWidth={1}
              />
              <div className="text-[9px] tracking-[0.5em] uppercase text-gold/70 font-body mb-4">
                — 0{i + 1} —
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-light text-cream tracking-[0.18em] uppercase mb-6 leading-tight">
                {p.label}
              </h3>
              <span className="w-8 h-px bg-gold/50 mb-6" />
              <p className="text-sm text-cream/75 leading-[1.95] font-body font-light max-w-[300px]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TrustStrip;

