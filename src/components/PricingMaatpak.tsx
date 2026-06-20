import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/BookingContext";
import { Check } from "lucide-react";

type Tier = {
  id: "left" | "signature" | "bespoke";
  badge: string;
  badgeAmber?: boolean;
  name: string;
  ideal: string;
  price: string;
  perDay: string;
  value: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const CATEGORIES = [
  { id: "suits", label: "Kostuums" },
  { id: "shirts", label: "Hemden" },
  { id: "coats", label: "Jassen" },
  { id: "accessories", label: "Accessoires" },
  { id: "memberships", label: "Abonnementen" },
];

const TIERS_BY_CAT: Record<string, Tier[]> = {
  suits: [
    {
      id: "left",
      badge: "Kennismaking",
      name: "Signature Entry",
      ideal: "Voor de man die maatwerk ontdekt",
      price: "€1.190",
      perDay: "€3,26 per dag · gedurende 1 jaar",
      value: "Minder dan uw dagelijkse koffie",
      features: [
        "Half-canvas constructie",
        "Italiaanse wol — Vitale Barberis Canonico",
        "Twee passessies",
        "Levering in 5 weken",
      ],
      cta: "Begin met Signature Entry →",
    },
    {
      id: "signature",
      badge: "Meest gekozen",
      name: "Signature",
      ideal: "De professional die altijd correct gekleed wil zijn",
      price: "€1.490",
      perDay: "€4,08 per dag · gedurende 1 jaar",
      value: "Minder dan een businesslunch per maand",
      features: [
        "Full-canvas constructie",
        "Loro Piana, Scabal of Dormeuil",
        "Drie passessies",
        "Persoonlijk patroon bewaard",
        "Levering in 6 weken",
      ],
      cta: "Start mijn Signature →",
      featured: true,
    },
    {
      id: "bespoke",
      badge: "Uitsluitend op uitnodiging",
      badgeAmber: true,
      name: "Bespoke",
      ideal: "De ondernemer waarvoor stijl een strategisch wapen is",
      price: "€3.490",
      perDay: "Max. 8 nieuwe klanten per jaar",
      value: "Volledig handgemaakt · Eigen patroon bewaard",
      features: [
        "Volledig handgenaaide constructie",
        "Holland & Sherry, vicuña op aanvraag",
        "Onbeperkte passessies",
        "Eigen patroon levenslang bewaard",
        "Persoonlijke styling",
      ],
      cta: "Vraag een gesprek aan →",
    },
  ],
  shirts: [
    {
      id: "left",
      badge: "Kennismaking",
      name: "Hemd Essential",
      ideal: "Voor wie maatwerk ontdekt",
      price: "€150",
      perDay: "€0,41 per dag · gedurende 1 jaar",
      value: "Minder dan uw dagelijkse koffie",
      features: ["Oxford of Poplin", "Kent of button-down kraag", "Enkelvoudige manchet", "Levering 4 weken"],
      cta: "Begin met Essential →",
    },
    {
      id: "signature",
      badge: "Meest gekozen",
      name: "Hemd Signature",
      ideal: "De dagelijkse drager",
      price: "€220",
      perDay: "€0,60 per dag · gedurende 1 jaar",
      value: "Minder dan een businesslunch per maand",
      features: ["Thomas Mason of Albini", "Vrije kraag- en manchetkeuze", "Monogram optioneel", "Levering 3 weken"],
      cta: "Start mijn Signature →",
      featured: true,
    },
    {
      id: "bespoke",
      badge: "Uitsluitend op uitnodiging",
      badgeAmber: true,
      name: "Hemd Bespoke",
      ideal: "Wie het perfecte wil",
      price: "€350",
      perDay: "Exclusief atelierwerk",
      value: "Volledig handgemaakt · Eigen patroon bewaard",
      features: ["Exclusieve stoffen", "Handgenaaide details", "Eigen patroon bewaard", "Levering 5 weken"],
      cta: "Vraag een gesprek aan →",
    },
  ],
  coats: [
    {
      id: "left",
      badge: "Kennismaking",
      name: "Jas Essential",
      ideal: "Voor wie maatwerk ontdekt",
      price: "€1.290",
      perDay: "€3,53 per dag · gedurende 1 jaar",
      value: "Een jas die meerdere winters meegaat",
      features: ["Premium wolmix", "Klassieke lengte", "Standaard voering", "Twee passessies"],
      cta: "Begin met Essential →",
    },
    {
      id: "signature",
      badge: "Meest gekozen",
      name: "Jas Signature",
      ideal: "De professional die altijd correct gekleed wil zijn",
      price: "€1.890",
      perDay: "€5,18 per dag · gedurende 1 jaar",
      value: "Minder dan een businesslunch per maand",
      features: ["Wol & kasjmier mix", "Bemberg voering", "Handafgewerkte kraag", "Drie passessies"],
      cta: "Start mijn Signature →",
      featured: true,
    },
    {
      id: "bespoke",
      badge: "Uitsluitend op uitnodiging",
      badgeAmber: true,
      name: "Jas Bespoke",
      ideal: "Wie het perfecte wil",
      price: "€2.690",
      perDay: "Exclusief atelierwerk",
      value: "Pure kasjmier · Volledig handgestikt",
      features: ["Pure kasjmier of vicuña", "Volledige canvas constructie", "Volledig handgestikt", "Onbeperkte passessies"],
      cta: "Vraag een gesprek aan →",
    },
  ],
  accessories: [
    {
      id: "left",
      badge: "Kennismaking",
      name: "Manchetknopen & Studs",
      ideal: "Het detail dat het verschil maakt",
      price: "€85",
      perDay: "Levenslang accessoire",
      value: "Klein detail, groot effect",
      features: ["Zilver of email", "Persoonlijk monogram", "Geleverd in leren etui"],
      cta: "Bekijk →",
    },
    {
      id: "signature",
      badge: "Meest gekozen",
      name: "Dassen & Pochettes",
      ideal: "De professional die altijd correct gekleed wil zijn",
      price: "€95",
      perDay: "Italiaanse zijde",
      value: "Handgerolde randen",
      features: ["Italiaanse geweven zijde", "Handgerolde randen", "Bijpassende strikjes", "Bespoke patronen mogelijk"],
      cta: "Start mijn Signature →",
      featured: true,
    },
    {
      id: "bespoke",
      badge: "Uitsluitend op uitnodiging",
      badgeAmber: true,
      name: "Schoenen op Maat",
      ideal: "Wie het perfecte wil",
      price: "€690",
      perDay: "Levenslange herzool service",
      value: "Goodyear genaaid · Eigen leest",
      features: ["Italiaans full-grain leder", "Goodyear genaaide constructie", "Persoonlijke leest", "Levenslange herzool"],
      cta: "Vraag een gesprek aan →",
    },
  ],
  memberships: [
    {
      id: "left",
      badge: "Kennismaking",
      name: "Hemden Abonnement",
      ideal: "Een vernieuwde garderobe het hele jaar door",
      price: "€350",
      perDay: "€0,96 per dag · per jaar",
      value: "Vier hemden per jaar",
      features: ["Driemaandelijkse vernieuwing", "Voorrang bij afspraken", "Toegang exclusieve stoffen", "Gratis aanpassingen"],
      cta: "Word lid →",
    },
    {
      id: "signature",
      badge: "Meest gekozen",
      name: "Seizoens Kostuum",
      ideal: "De professional die altijd correct gekleed wil zijn",
      price: "€4.500",
      perDay: "€12,33 per dag · per jaar",
      value: "Twee kostuums + VIP styling",
      features: [
        "2 kostuums op maat per jaar",
        "Voorrang in atelier",
        "Exclusieve seizoenscollecties",
        "Gratis aanpassingen & VIP",
        "Persoonlijke stylist",
      ],
      cta: "Word lid →",
      featured: true,
    },
    {
      id: "bespoke",
      badge: "Uitsluitend op uitnodiging",
      badgeAmber: true,
      name: "Bespoke Concierge",
      ideal: "De ondernemer waarvoor stijl een strategisch wapen is",
      price: "Op aanvraag",
      perDay: "Max. 8 leden per jaar",
      value: "Volledige garderobe begeleid",
      features: [
        "Onbeperkte consultaties",
        "Reizende kleermaker",
        "Volledige garderobe planning",
        "Eigen patroon bewaard",
      ],
      cta: "Vraag een gesprek aan →",
    },
  ],
};

const BUILDER_ITEMS = [
  { id: "suit", label: "Maatpak", price: 1490 },
  { id: "shirt", label: "Hemd op Maat", price: 220 },
  { id: "accessories", label: "Accessoires", price: 85 },
];

const PricingMaatpak = () => {
  const { openBooking } = useBooking();
  const [activeCat, setActiveCat] = useState("suits");
  const [selected, setSelected] = useState<string[]>(["suit"]);

  const tiers = TIERS_BY_CAT[activeCat];
  const total = selected.reduce((s, id) => s + (BUILDER_ITEMS.find((b) => b.id === id)?.price || 0), 0);

  const toggle = (id: string) =>
    setSelected((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <section id="pricing" className="py-24 md:py-36 bg-card">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-2xl mb-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold font-body mb-4">— Uw investering —</p>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground leading-[1.1]">
            Wat uw pak u waard is.
          </h2>
          <p className="mt-5 text-sm font-body text-muted-foreground leading-[1.8]">
            7 op 10 klanten kiest Signature · Elk pak gaat 10–15 jaar mee
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap gap-1 bg-background p-1 w-fit mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-5 py-2.5 text-[10px] tracking-[0.25em] uppercase font-body font-medium transition-all duration-300 ${
                activeCat === cat.id
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3 TIERS */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-background border p-8 md:p-10 flex flex-col ${
                tier.featured
                  ? "border-[#C4A882] shadow-[0_12px_40px_-15px_hsl(var(--gold)/0.4)]"
                  : "border-border"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C4A882] text-espresso text-[9px] tracking-[0.3em] uppercase font-body font-medium px-3 py-1.5 whitespace-nowrap">
                  7 op 10 klanten kiest dit
                </span>
              )}

              <p
                className={`text-[10px] tracking-[0.3em] uppercase font-body font-medium mb-4 ${
                  tier.badgeAmber ? "text-gold" : "text-muted-foreground"
                }`}
              >
                {tier.badge}
              </p>
              <h3 className="font-heading text-xl font-light text-foreground">{tier.name}</h3>
              <p className="italic text-[11px] text-muted-foreground font-body mt-2 mb-6 leading-[1.6]">
                {tier.ideal}
              </p>

              <p className="font-heading text-4xl font-light text-foreground">{tier.price}</p>
              <p className="text-[11px] font-body text-muted-foreground mt-2">{tier.perDay}</p>
              <p className="text-[11px] text-gold font-body mt-2 mb-5">{tier.value}</p>

              <div className="h-px bg-border mb-6" />

              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground font-body flex items-start gap-3">
                    <span className="text-gold-muted mt-0.5 text-xs">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.featured ? "hero" : "subtle"}
                size="lg"
                className={`w-full ${tier.featured ? "bg-[#C4A882] text-espresso hover:bg-[#C4A882]/90" : ""}`}
                onClick={() => openBooking()}
              >
                {tier.cta}
              </Button>
              <p className="text-[10px] text-muted-foreground font-body text-center mt-3">
                of plan een gratis consultatie
              </p>
            </div>
          ))}
        </div>

        {/* PACKAGE BUILDER */}
        <div className="mt-16 p-6 md:p-10 border border-border bg-background max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-taupe font-body mb-2">
            Stel uw pakket samen
          </p>
          <p className="text-xs text-muted-foreground font-body mb-6 leading-relaxed">
            Kies de stukken die u wenst — krijg direct een schatting.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {BUILDER_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 border text-xs font-body tracking-wide transition-all ${
                  selected.includes(item.id)
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground/40"
                }`}
              >
                {selected.includes(item.id) && <Check className="w-3 h-3" />}
                {item.label}
                <span className="text-[10px] opacity-60">€{item.price}</span>
              </button>
            ))}
          </div>
          {selected.length > 0 && (
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-taupe font-body">
                Geschatte investering
              </span>
              <span className="font-heading text-3xl font-light text-foreground">
                €{total.toLocaleString("nl-BE")}
              </span>
            </div>
          )}
        </div>

        {/* COST COMPARISON */}
        <div className="mt-12 border border-border bg-[hsl(var(--cream))]/60 p-8 md:p-12 max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-taupe font-body text-center mb-10">
            Waarom een maatpak de slimste aankoop is die u kunt doen
          </p>
          <div className="grid md:grid-cols-3 gap-8 md:gap-0">
            <div className="md:px-8 text-center md:border-r border-border">
              <p className="text-xs font-body text-muted-foreground mb-3">3 confectiepakken in 10 jaar</p>
              <p className="font-heading text-3xl font-light text-[hsl(0_45%_45%)] mb-2">€1.800+</p>
              <p className="text-[11px] font-body text-muted-foreground italic">
                Zit nooit perfect · Slijt snel
              </p>
            </div>
            <div className="md:px-8 text-center md:border-r border-border">
              <p className="text-xs font-body text-muted-foreground mb-3">1 Alex Nass Signature</p>
              <p className="font-heading text-3xl font-light text-[hsl(140_30%_35%)] mb-2">€1.490</p>
              <p className="text-[11px] font-body text-muted-foreground italic">
                15 jaar mee · Altijd perfect
              </p>
            </div>
            <div className="md:px-8 text-center">
              <p className="text-xs font-body text-muted-foreground mb-3">Uw besparing</p>
              <p className="font-heading text-3xl font-light text-gold mb-2">€310+</p>
              <p className="text-[11px] font-body text-muted-foreground italic">
                En u ziet er altijd optimaal uit
              </p>
            </div>
          </div>
        </div>

        {/* ESSENTIAL BANNER */}
        <div className="mt-12 max-w-5xl mx-auto border border-border bg-background p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body mb-2">
              Nog niet zeker? Begin met Essential.
            </p>
            <p className="text-sm font-body text-foreground/75 leading-[1.7] max-w-xl">
              Een eerste maatpak met fused canvas constructie en Italiaanse wol — al uw maten worden bewaard voor latere upgrades.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <p className="font-heading text-2xl font-light text-foreground">€890</p>
            <Button variant="subtle" size="lg" onClick={() => openBooking()}>
              Begin met Essential →
            </Button>
          </div>
        </div>

        {/* CUSTOM REQUEST */}
        <div className="mt-20 text-center max-w-2xl mx-auto space-y-6 border-t border-border pt-16">
          <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground">
            Iets Unieks in Gedachten?
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-lg mx-auto">
            Vraag een gesprek aan — wij bespreken graag uw idee, stof en pasvorm.
          </p>
          <Button variant="hero" size="lg" className="px-10 py-6" onClick={() => openBooking()}>
            Plan een consultatie →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingMaatpak;
