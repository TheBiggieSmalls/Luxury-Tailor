import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import type { TranslationKey } from "@/i18n/translations";

type Trilingual = { en: string; nl: string; fr: string };
type Feature = TranslationKey | Trilingual;
type TierName = TranslationKey | Trilingual;

interface Tier {
  name: TierName;
  price: string;
  priceSuffix?: Trilingual;
  desc: TranslationKey | Trilingual;
  features: Feature[];
  featured?: boolean;
}

const categories: { id: string; en: string; nl: string; fr: string }[] = [
  { id: "suits", en: "Suits", nl: "Kostuums", fr: "Costumes" },
  { id: "shirts", en: "Shirts", nl: "Hemden", fr: "Chemises" },
  { id: "coats", en: "Coats", nl: "Jassen", fr: "Manteaux" },
  { id: "accessories", en: "Accessories", nl: "Accessoires", fr: "Accessoires" },
  { id: "memberships", en: "Memberships", nl: "Abonnementen", fr: "Abonnements" },
];

const tri = (en: string, nl: string, fr: string): Trilingual => ({ en, nl, fr });

const tiers: Record<string, Tier[]> = {
  suits: [
    {
      name: "pricing.essential",
      price: "€890",
      desc: "pricing.essential.desc",
      features: ["pricing.essential.f1", "pricing.essential.f2", "pricing.essential.f3", "pricing.essential.f4"],
    },
    {
      name: "pricing.signature",
      price: "€1,490",
      desc: "pricing.signature.desc",
      features: ["pricing.signature.f1", "pricing.signature.f2", "pricing.signature.f3", "pricing.signature.f4", "pricing.signature.f5"],
      featured: true,
    },
    {
      name: "pricing.premium",
      price: "€2,290",
      desc: "pricing.premium.desc",
      features: ["pricing.premium.f1", "pricing.premium.f2", "pricing.premium.f3", "pricing.premium.f4", "pricing.premium.f5"],
    },
    {
      name: "pricing.bespoke",
      price: "€3,490",
      desc: "pricing.bespoke.desc",
      features: ["pricing.bespoke.f1", "pricing.bespoke.f2", "pricing.bespoke.f3", "pricing.bespoke.f4", "pricing.bespoke.f5"],
    },
  ],
  shirts: [
    {
      name: "pricing.essential",
      price: "€150",
      desc: "pricing.essential.desc",
      features: ["pricing.essential.f1", "pricing.essential.f2", "pricing.essential.f3"],
    },
    {
      name: "pricing.signature",
      price: "€220",
      desc: "pricing.signature.desc",
      features: ["pricing.signature.f1", "pricing.signature.f2", "pricing.signature.f3", "pricing.signature.f4"],
      featured: true,
    },
    {
      name: "pricing.premium",
      price: "€350",
      desc: "pricing.premium.desc",
      features: ["pricing.premium.f1", "pricing.premium.f2", "pricing.premium.f3", "pricing.premium.f4"],
    },
  ],
  coats: [
    {
      name: "pricing.essential",
      price: "€1,290",
      desc: tri(
        "A refined overcoat for everyday elegance",
        "Een verfijnde overjas voor dagelijkse elegantie",
        "Un manteau raffiné pour une élégance quotidienne",
      ),
      features: [
        tri("Premium wool blend", "Premium wolmix", "Mélange de laine premium"),
        tri("Single-breasted, classic length", "Enkelrij, klassieke lengte", "Croisure simple, longueur classique"),
        tri("Standard lining", "Standaard voering", "Doublure standard"),
        tri("2 fitting sessions", "2 passessies", "2 séances d'essayage"),
      ],
    },
    {
      name: "pricing.signature",
      price: "€1,890",
      desc: tri(
        "Tailored cashmere blend with refined finishing",
        "Op maat gemaakte kasjmiermix met verfijnde afwerking",
        "Mélange cachemire taillé avec finitions raffinées",
      ),
      features: [
        tri("Wool & cashmere blend", "Wol & kasjmier mix", "Mélange laine & cachemire"),
        tri("Bemberg lining", "Bemberg voering", "Doublure Bemberg"),
        tri("Hand-finished collar & lapels", "Handafgewerkte kraag & revers", "Col & revers finis main"),
        tri("3 fitting sessions", "3 passessies", "3 séances d'essayage"),
      ],
      featured: true,
    },
    {
      name: "pricing.premium",
      price: "€2,690",
      desc: tri(
        "Pure cashmere, fully canvassed couture-grade outerwear",
        "Pure kasjmier, volledig gecanvaste couture buitenkleding",
        "Pur cachemire, manteau entièrement entoilé qualité couture",
      ),
      features: [
        tri("Pure cashmere or vicuña options", "Pure kasjmier of vicuña opties", "Pur cachemire ou options vicuña"),
        tri("Full canvas construction", "Volledige canvas constructie", "Construction toile entière"),
        tri("Hand-stitched throughout", "Volledig handgestikt", "Cousu main intégralement"),
        tri("Unlimited fittings", "Onbeperkte passessies", "Essayages illimités"),
      ],
    },
  ],
  accessories: [
    {
      name: tri("Cufflinks & Studs", "Manchetknopen & Studs", "Boutons de Manchette & Studs"),
      price: "€85",
      desc: tri(
        "Hand-finished cufflinks and dress studs",
        "Handafgewerkte manchetknopen en studs",
        "Boutons de manchette et studs finis main",
      ),
      features: [
        tri("Sterling silver or enamel", "Zilver of email", "Argent massif ou émail"),
        tri("Custom monogramming", "Persoonlijk monogram", "Monogramme personnalisé"),
        tri("Presented in leather case", "Geleverd in leren etui", "Présentés en écrin de cuir"),
      ],
    },
    {
      name: tri("Ties, Bowties & Pocket Squares", "Dassen, Strikjes & Pochettes", "Cravates, Nœuds & Pochettes"),
      price: "€95",
      desc: tri(
        "Hand-rolled silk neckwear and accessories",
        "Handgerolde zijden dassen en accessoires",
        "Cravates et accessoires en soie roulés main",
      ),
      features: [
        tri("Italian woven silk", "Italiaanse geweven zijde", "Soie italienne tissée"),
        tri("Hand-rolled edges", "Handgerolde randen", "Bords roulés à la main"),
        tri("Coordinated bowties & pocket squares", "Bijpassende strikjes & pochettes", "Nœuds & pochettes assortis"),
        tri("Bespoke patterns on request", "Bespoke patronen op aanvraag", "Motifs sur mesure sur demande"),
      ],
      featured: true,
    },
    {
      name: tri("Bespoke Shoes", "Schoenen op Maat", "Chaussures Sur Mesure"),
      price: "€690",
      desc: tri(
        "Hand-lasted leather shoes crafted to your measurements",
        "Handgemaakte leren schoenen naar uw maten",
        "Chaussures en cuir façonnées à vos mesures",
      ),
      features: [
        tri("Full-grain Italian leather", "Full-grain Italiaans leder", "Cuir italien pleine fleur"),
        tri("Goodyear-welted construction", "Goodyear genaaide constructie", "Cousu Goodyear"),
        tri("Personalised last & fitting", "Persoonlijke leest & pasvorm", "Forme & ajustage personnalisés"),
        tri("Lifetime resoling service", "Levenslange herzool service", "Service de ressemelage à vie"),
      ],
    },
  ],
  memberships: [
    {
      name: tri("Shirt Membership", "Hemden Abonnement", "Abonnement Chemises"),
      price: "€350",
      priceSuffix: tri("/ year", "/ jaar", "/ an"),
      desc: tri(
        "A refreshed wardrobe of custom shirts, delivered through the year",
        "Een vernieuwde garderobe van hemden op maat, het hele jaar door geleverd",
        "Une garde-robe renouvelée de chemises sur mesure, livrée tout au long de l'année",
      ),
      features: [
        tri("Quarterly shirt refresh", "Driemaandelijkse vernieuwing", "Renouvellement trimestriel"),
        tri("Priority appointments", "Voorrang bij afspraken", "Rendez-vous prioritaires"),
        tri("Access to exclusive fabrics", "Toegang tot exclusieve stoffen", "Accès à des tissus exclusifs"),
        tri("Complimentary alterations", "Gratis aanpassingen", "Retouches offertes"),
      ],
    },
    {
      name: tri("Seasonal Suit Membership", "Seizoens Kostuum Abonnement", "Abonnement Costume Saisonnier"),
      price: "€4,500",
      priceSuffix: tri("/ year", "/ jaar", "/ an"),
      desc: tri(
        "Two custom suits a year, with VIP access and personal styling",
        "Twee kostuums op maat per jaar, met VIP toegang en persoonlijke styling",
        "Deux costumes sur mesure par an, avec accès VIP et stylisme personnel",
      ),
      features: [
        tri("2 custom suits per year", "2 kostuums op maat per jaar", "2 costumes sur mesure par an"),
        tri("Priority tailoring & first fittings", "Voorrang in atelier & eerste passessies", "Atelier prioritaire & premiers essayages"),
        tri("Exclusive seasonal collections", "Exclusieve seizoenscollecties", "Collections saisonnières exclusives"),
        tri("Free alterations & VIP support", "Gratis aanpassingen & VIP-ondersteuning", "Retouches & support VIP offerts"),
        tri("Personal stylist & event wardrobe planning", "Persoonlijke stylist & event garderobe planning", "Styliste personnel & garde-robe événementielle"),
      ],
      featured: true,
    },
  ],
};

// Price filter system
const filterItems = [
  { id: "suit", label: { en: "Bespoke Suit", nl: "Maatpak", fr: "Costume" }, basePrice: 1490 },
  { id: "shirt", label: { en: "Custom Shirt", nl: "Hemd op Maat", fr: "Chemise" }, basePrice: 220 },
  { id: "accessories", label: { en: "Accessories", nl: "Accessoires", fr: "Accessoires" }, basePrice: 85 },
];

const isTrilingual = (v: unknown): v is Trilingual =>
  typeof v === "object" && v !== null && "en" in (v as object);

const Pricing = () => {
  const { t, language } = useLanguage();
  const { openBooking } = useBooking();
  const [activeCat, setActiveCat] = useState("suits");
  const [b2b, setB2b] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["suit"]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const tr = (v: TranslationKey | Trilingual): string =>
    isTrilingual(v) ? v[language] : t(v);

  const currentTiers = tiers[activeCat];
  const isMemberships = activeCat === "memberships";
  const b2bAvailable = !isMemberships;
  const showB2b = b2b && b2bAvailable;

  const b2bLabel = language === "nl" ? "Zakelijk" : language === "fr" ? "Entreprise" : "Business";
  const b2bNote = language === "nl"
    ? "B2B-tarief — vanaf 5 stuks. Tot 15% korting toegepast."
    : language === "fr"
    ? "Tarif B2B — à partir de 5 pièces. Jusqu'à 15% de remise appliquée."
    : "B2B pricing — from 5 pieces. Up to 15% discount applied.";

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll, { passive: true });
    return () => { if (el) el.removeEventListener("scroll", checkScroll); };
  }, [activeCat]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  const toggleFilter = (id: string) => {
    setSelectedFilters(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const totalPrice = selectedFilters.reduce((sum, id) => {
    const item = filterItems.find(f => f.id === id);
    return sum + (item?.basePrice || 0);
  }, 0);

  const formatPrice = (price: string) => {
    if (!showB2b) return price;
    const num = parseInt(price.replace(/[^\d]/g, ""), 10);
    if (!num) return price;
    const discounted = Math.round(num * 0.85);
    return `€${discounted.toLocaleString()}`;
  };

  const membershipCta = language === "nl"
    ? "Word Lid"
    : language === "fr"
    ? "Devenir Membre"
    : "Become a Member";

  return (
    <section id="pricing" className="py-24 md:py-36 bg-card">
      <div className="container mx-auto px-6">
        <div data-reveal className="mb-10 md:mb-16 max-w-xl">
          <p className="text-[11px] tracking-[0.4em] uppercase text-taupe font-body mb-4">{t("pricing.tag")}</p>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground leading-[1.1]">
            {t("pricing.title")}
          </h2>
        </div>

        {/* Category + B2B toggle */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-1 bg-background p-1 w-fit">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-5 py-2.5 text-[10px] tracking-[0.25em] uppercase font-body font-medium transition-all duration-300 ${
                  activeCat === cat.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat[language]}
              </button>
            ))}
          </div>

          {b2bAvailable && (
            <button
              onClick={() => setB2b(!b2b)}
              className={`px-5 py-2.5 text-[10px] tracking-[0.25em] uppercase font-body font-medium border transition-all duration-300 ${
                b2b
                  ? "bg-gold/90 text-background border-gold"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              }`}
              aria-pressed={b2b}
            >
              {b2bLabel} · {language === "fr" ? "dès 5 pièces" : language === "nl" ? "vanaf 5 stuks" : "From 5 pieces"}
            </button>
          )}
        </div>

        {showB2b && (
          <div className="mb-6 flex items-center gap-3 text-[11px] tracking-[0.15em] uppercase text-gold font-body">
            <span className="w-6 h-px bg-gold/60" />
            {b2bNote}
          </div>
        )}

        {/* Horizontal scroll pricing cards */}
        <div className="relative">
          {/* Scroll arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/90 border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/90 border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          {/* Scroll gradient hints */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card to-transparent z-[5] pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card to-transparent z-[5] pointer-events-none" />
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {currentTiers.map((tier, idx) => (
              <div
                key={activeCat + "-" + idx}
                className={`min-w-[280px] md:min-w-[300px] flex-shrink-0 p-8 md:p-10 bg-background border border-border flex flex-col justify-between snap-center ${
                  tier.featured ? "border-foreground/30" : ""
                }`}
              >
                <div>
                  {tier.featured && (
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6 font-body font-medium">
                      {isMemberships
                        ? (language === "nl" ? "Aanbevolen" : language === "fr" ? "Recommandé" : "Recommended")
                        : t("pricing.popular")}
                    </p>
                  )}
                  <h3 className="font-heading text-2xl font-light text-foreground">{tr(tier.name)}</h3>
                  <p className="text-xs text-muted-foreground mt-2 mb-6 font-body leading-relaxed">{tr(tier.desc)}</p>
                  <p className="font-heading text-4xl font-light text-foreground mb-2 flex items-baseline gap-2 flex-wrap">
                    {formatPrice(tier.price)}
                    {tier.priceSuffix && (
                      <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">
                        {tier.priceSuffix[language]}
                      </span>
                    )}
                    {showB2b && (
                      <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground line-through font-body">{tier.price}</span>
                    )}
                  </p>
                  {showB2b && (
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-body mb-6">
                      {language === "fr" ? "Par pièce · dès 5" : language === "nl" ? "Per stuk · vanaf 5" : "Per piece · from 5"}
                    </p>
                  )}
                  {!showB2b && <div className="mb-8" />}
                  <ul className="space-y-3 mb-10">
                    {tier.features.map((f, fi) => (
                      <li key={fi} className="text-sm text-muted-foreground flex items-start gap-3 font-body">
                        <span className="text-gold-muted mt-0.5 text-xs">—</span>
                        {tr(f)}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant={tier.featured ? "hero" : "subtle"}
                  className="w-full"
                  size="lg"
                  onClick={() => openBooking()}
                >
                  {isMemberships ? membershipCta : t("pricing.cta")}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Build Your Package — moved BELOW pricing table */}
        <div className="mt-16 p-6 md:p-8 border border-border bg-background">
          <p className="text-[10px] tracking-[0.3em] uppercase text-taupe font-body mb-2">
            {language === "nl" ? "Stel uw pakket samen" : language === "fr" ? "Composez votre ensemble" : "Build Your Package"}
          </p>
          <p className="text-xs text-muted-foreground font-body mb-5 leading-relaxed">
            {language === "nl"
              ? "Kies de stukken die u wenst — krijg direct een schatting."
              : language === "fr"
              ? "Choisissez vos pièces — recevez une estimation instantanée."
              : "Select the pieces you want — receive an instant estimate."}
          </p>
          <div className="flex flex-wrap gap-3 mb-5">
            {filterItems.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleFilter(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 border text-xs font-body tracking-wide transition-all duration-300 ${
                  selectedFilters.includes(item.id)
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground/40"
                }`}
              >
                {selectedFilters.includes(item.id) && <Check className="w-3 h-3" />}
                {item.label[language]}
                <span className="text-[10px] opacity-60">€{item.basePrice}</span>
              </button>
            ))}
          </div>

          {selectedFilters.length > 0 && (
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-taupe font-body">
                {language === "nl" ? "Geschatte totaal" : language === "fr" ? "Total estimé" : "Estimated Total"}
              </span>
              <span className="font-heading text-3xl font-light text-foreground">
                €{totalPrice.toLocaleString()}
              </span>
            </div>
          )}

          {/* Gift unlock — when both suit + shirt selected */}
          {selectedFilters.includes("suit") && selectedFilters.includes("shirt") && (
            <div className="mt-4 flex items-start gap-3 border-t border-border pt-4">
              <span className="text-gold text-lg leading-none mt-0.5">✦</span>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-body font-medium mb-1">
                  {language === "nl" ? "Complimentair Geschenk" : language === "fr" ? "Cadeau Offert" : "Complimentary Gift"}
                </p>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  {language === "nl"
                    ? "Een suit + hemd combinatie ontvangt een handgemaakte zijden pochette als geschenk."
                    : language === "fr"
                    ? "Une combinaison costume + chemise reçoit une pochette en soie faite main en cadeau."
                    : "A suit + shirt combination receives a handcrafted silk pocket square as our gift."}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Custom request */}
        <div className="mt-16 text-center max-w-2xl mx-auto space-y-6 border-t border-border pt-16">
          <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground">
            {t("pricing.custom.title")}
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-lg mx-auto">
            {t("pricing.custom.desc")}
          </p>
          <Button variant="hero" size="lg" className="px-10 py-6" onClick={() => openBooking()}>
            {t("pricing.custom.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
