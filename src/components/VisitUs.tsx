import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { MapPin, Home, Briefcase, Clock } from "lucide-react";
import visitBg from "@/assets/visit-bg.jpg";

const VisitUs = () => {
  const { t, language } = useLanguage();
  const { openBooking } = useBooking();

  const options = [
    {
      icon: MapPin,
      title: "visit.showroom.title" as const,
      desc: "visit.showroom.desc" as const,
      type: "showroom" as const,
    },
    {
      icon: Home,
      title: "visit.home.title" as const,
      desc: "visit.home.desc" as const,
      type: "athome" as const,
    },
    {
      icon: Briefcase,
      title: "visit.trunk.title" as const,
      desc: "visit.trunk.desc" as const,
      type: "trunkshow" as const,
    },
  ];

  const byApptLabel =
    language === "nl"
      ? "Uitsluitend op afspraak"
      : language === "fr"
      ? "Sur rendez-vous uniquement"
      : "By appointment only";

  return (
    <section id="visit" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={visitBg}
          alt=""
          loading="lazy"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/80" />
      </div>

      <div className="relative z-10 py-28 md:py-40">
        <div className="container mx-auto px-6">
          <div data-reveal className="max-w-2xl mb-14 md:mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase text-gold font-body mb-5">
              {t("visit.tag")}
            </p>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.05] tracking-[-0.02em]">
              {t("visit.title")}
            </h2>
            <p className="text-sm text-cream/60 font-body leading-[1.9] mt-8 max-w-md">
              {t("visit.desc")}
            </p>

            {/* Compact address / hours / appointment strip */}
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-xs text-cream/70 font-body">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                <span>Rue de Namur 48 · 1000 Brussels</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                <span>Mon — Sat · 09:00 — 18:00</span>
              </div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-gold/70">
                {byApptLabel}
              </span>
            </div>
          </div>

          {/* 3 service cards */}
          <div data-stagger className="grid md:grid-cols-3 gap-6 md:gap-6">
            {options.map((opt) => (
              <div
                key={opt.title}
                className="border border-cream/10 p-10 md:p-12 hover:border-cream/25 transition-colors duration-500 group"
              >
                <opt.icon className="w-5 h-5 text-gold mb-8" strokeWidth={1.5} />
                <h3 className="font-heading text-xl md:text-2xl font-light text-cream mb-4 tracking-[-0.01em]">
                  {t(opt.title)}
                </h3>
                <p className="text-sm text-cream/50 font-body leading-[1.8] mb-10">
                  {t(opt.desc)}
                </p>
                <Button
                  variant="hero"
                  size="sm"
                  className="bg-cream/10 text-cream hover:bg-cream/20 border border-cream/15 tracking-[0.15em] text-[10px] uppercase"
                  onClick={() => openBooking(opt.type)}
                >
                  {t("visit.cta")}
                </Button>
              </div>
            ))}
          </div>

          {/* Virtual fallback link */}
          <div className="mt-12 md:mt-14 text-center md:text-left">
            <button
              onClick={() => openBooking("virtual")}
              className="text-[10px] tracking-[0.35em] uppercase text-cream/60 hover:text-cream link-underline font-body"
            >
              {language === "nl"
                ? "Liever eerst virtueel ontmoeten? — Boek een videoconsultatie"
                : language === "fr"
                ? "Plutôt une première rencontre virtuelle ? — Réservez une consultation vidéo"
                : "Prefer to meet virtually first? — Book a video consultation"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
