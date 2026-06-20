import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import logoLoroPiana from "@/assets/logo-loro-piana-v2.png";
import logoScabal from "@/assets/logo-scabal-v2.png";
import logoDormeuil from "@/assets/logo-dormeuil-v2.png";
import logoHolland from "@/assets/logo-holland-sherry-v2.png";
import logoDrago from "@/assets/logo-drago-v2.png";
import logoZegna from "@/assets/logo-zegna-v2.png";
import logoAlbini from "@/assets/logo-albini.png";
import logoStylbiella from "@/assets/logo-stylbiella.png";

const partners = [
  { name: "Loro Piana", logo: logoLoroPiana },
  { name: "Scabal", logo: logoScabal },
  { name: "Dormeuil", logo: logoDormeuil },
  { name: "Holland & Sherry", logo: logoHolland },
  { name: "Drago", logo: logoDrago },
  { name: "Ermenegildo Zegna", logo: logoZegna },
  { name: "Albini", logo: logoAlbini },
  { name: "Stylbiella", logo: logoStylbiella },
];

// Duplicate the list so the marquee can loop seamlessly
const loop = [...partners, ...partners];

const FabricPartners = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-32 border-y border-border overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        <p className="text-[11px] tracking-[0.4em] uppercase text-taupe font-body text-center mb-16">
          {t("partners.tag")}
        </p>

        <div className="relative group">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 z-10 bg-gradient-to-l from-background to-transparent" />

          <div
            className="fabric-marquee flex items-center"
            style={{ width: "200%" }}
          >
            {loop.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="shrink-0 flex items-center justify-center px-6 md:px-10 lg:px-14"
                style={{ width: "calc(100% / 8)" }}
                aria-hidden={i >= partners.length}
              >
                <img
                  src={p.logo}
                  alt={i < partners.length ? p.name : ""}
                  loading="lazy"
                  className="h-8 md:h-10 lg:h-12 w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-500 [filter:brightness(0)_saturate(100%)] dark:[filter:brightness(0)_invert(1)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricPartners;
