import { Helmet } from "react-helmet-async";
import { CalendarClock, Sparkles, ClipboardList, Layers, Check } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useBooking } from "@/contexts/BookingContext";
import { cn } from "@/lib/utils";
import ServiceArea from "@/components/ServiceArea";

const tiers = [
  {
    name: "Essentieel",
    price: "Vanaf €— /jaar",
    featured: false,
    invitationOnly: false,
    features: [
      "1 jaarlijks onderhoudsgesprek",
      "Prioritaire planning",
      "5% korting op nieuwe stukken",
    ],
    ideal: "de man die jaarlijks een pak laat maken",
    cta: "Begin met Essentieel →",
  },
  {
    name: "Signature",
    price: "Vanaf €— /jaar",
    featured: true,
    invitationOnly: false,
    features: [
      "2 sessies per jaar",
      "Seasonal stijladvies",
      "10% korting",
      "Gratis kleine aanpassingen",
    ],
    ideal: "de professional die altijd correct gekleed wil zijn",
    cta: "Start mijn Signature →",
  },
  {
    name: "Bespoke Partner",
    price: "Vanaf €— /jaar",
    featured: false,
    invitationOnly: true,
    features: [
      "Onbeperkt advies",
      "Seizoensgarderobe planning",
      "15% korting",
      "Thuisbezoek inbegrepen",
    ],
    ideal: "de ondernemer waarvoor stijl een strategisch wapen is",
    cta: "Neem contact op →",
  },
];

const benefits = [
  {
    icon: CalendarClock,
    label: "Prioritaire agenda-toegang",
    body: "Als lid boekt u altijd als eerste — ook in het drukke trouwseizoen. Geen wachttijden.",
  },
  {
    icon: ClipboardList,
    label: "Persoonlijke stijlkaart",
    body: "Wij bewaren uw maten, stofvoorkeuren en stijlhistoriek. Elk volgend stuk sluit naadloos aan.",
  },
  {
    icon: Layers,
    label: "Jaarlijkse garderobe-audit",
    body: "Een jaarlijkse sessie waarin we uw garderobe doornemen en adviseren over aanvullingen of aanpassingen.",
  },
  {
    icon: Sparkles,
    label: "Exclusieve stofpreviews",
    body: "U ziet de nieuwe seizoensstoffen van Loro Piana en Scabal voordat ze publiek beschikbaar zijn.",
  },
];

const faqs = [
  {
    q: "Kan ik op elk moment opzeggen?",
    a: "Ja. Het lidmaatschap loopt per jaar en is steeds opzegbaar tegen het einde van uw lopende termijn.",
  },
  {
    q: "Geldt de korting op alle producten?",
    a: "De korting geldt op alle maatkleding en accessoires. Specifieke stofcollecties of partneraanbiedingen kunnen uitgesloten zijn.",
  },
  {
    q: "Wat als ik al klant ben?",
    a: "Bestaande klanten kunnen op elk moment instappen. We rekenen reeds gemaakte fittings en advies eerlijk mee in uw eerste jaartermijn.",
  },
  {
    q: "Wat kost een garderobe abonnement bij een kleermaker?",
    a: "De prijs hangt af van de gekozen formule en het aantal sessies. Wij werken met drie niveaus. Plan een vrijblijvend kennismakingsgesprek voor een persoonlijke offerte.",
  },
  {
    q: "Is het lidmaatschap fiscaal aftrekbaar voor zelfstandigen?",
    a: "Als zelfstandige of vennootschap kunt u professionele maatkleding in veel gevallen fiscaal inbrengen als beroepskledij. Vraag uw boekhouder voor de exacte toepassingsvoorwaarden.",
  },
];

const SPOTS_REMAINING = 4;
const MEMBER_COUNT = 20;

const Lidmaatschap = () => {
  const { openBooking } = useBooking();

  return (
    <>
      <Helmet>
        <title>Garderobe Lidmaatschap — Persoonlijke Stijlservice | Alex Nass Brussel</title>
        <meta
          name="description"
          content="Altijd goed gekleed zonder moeite. Prioritaire afspraken, persoonlijke stijlkaart en exclusieve stofpreviews van Loro Piana en Scabal. Essentieel, Signature of Bespoke Partner — kies uw formule."
        />
        <link rel="canonical" href="https://bespoke-canvas-charm.lovable.app/lidmaatschap" />
        <link rel="alternate" hrefLang="nl-BE" href="https://bespoke-canvas-charm.lovable.app/lidmaatschap" />
        <link rel="alternate" hrefLang="fr-BE" href="https://bespoke-canvas-charm.lovable.app/fr/abonnement-garde-robe" />
        <link rel="alternate" hrefLang="en" href="https://bespoke-canvas-charm.lovable.app/en/wardrobe-membership" />
      </Helmet>

      <AnnouncementBar />
      <Navbar />

      <main className="bg-background">
        {/* HERO */}
        <section className="relative bg-espresso text-cream pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(circle at 20% 30%, hsl(var(--gold)) 0%, transparent 55%)" }}
          />
          <div className="container mx-auto px-6 max-w-4xl relative">
            <p className="text-[10px] tracking-[0.5em] uppercase text-gold font-body mb-6">
              Het AlexNass Lidmaatschap
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.02em] mb-8">
              Altijd goed gekleed. Zonder gedoe.
            </h1>
            <p className="text-cream/70 font-body leading-[1.9] max-w-2xl text-base md:text-lg mb-6">
              Een persoonlijk garderobe abonnement België voor de man die kwaliteit waardeert en tijd respecteert — exclusief kledingabonnement met wardrobe service Brussel.
            </p>
            <p className="text-gold/90 font-body text-sm italic mb-4">
              Momenteel zijn er nog {SPOTS_REMAINING} plaatsen beschikbaar dit seizoen.
            </p>
            <p className="flex items-center gap-2 text-cream/70 font-body text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-gold" />
              Meer dan {MEMBER_COUNT} leden kozen al voor Alex Nass
            </p>
          </div>
        </section>

        {/* TIERS */}
        <section className="py-section">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={cn(
                    "relative bg-background p-8 md:p-10 flex flex-col",
                    tier.featured
                      ? "border-2 border-gold shadow-xl md:-translate-y-2"
                      : "border border-foreground/15"
                  )}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-espresso text-[9px] tracking-[0.3em] uppercase font-body px-3 py-1">
                      Meest gekozen
                    </span>
                  )}
                  {tier.invitationOnly && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background border border-gold text-gold text-[9px] tracking-[0.3em] uppercase font-body px-3 py-1">
                      Uitsluitend op uitnodiging
                    </span>
                  )}
                  <h3 className="font-heading text-2xl font-light text-foreground mb-2">{tier.name}</h3>
                  <p className="font-heading text-2xl font-light text-foreground mb-6">
                    {tier.price}
                  </p>
                  <ul className="space-y-3 mb-5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm font-body text-foreground/80">
                        <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs italic text-muted-foreground font-body mb-8 flex-1">
                    Ideaal voor: {tier.ideal}
                  </p>
                  <Button
                    onClick={() => openBooking({ occasion: "personal" })}
                    className={cn(
                      "w-full rounded-none tracking-[0.22em] text-[10px] uppercase py-5",
                      tier.featured
                        ? "bg-gold text-espresso hover:bg-gold/90"
                        : "bg-transparent border border-foreground/30 text-foreground hover:bg-foreground hover:text-cream"
                    )}
                    style={tier.featured ? { color: "#2A1F14" } : undefined}
                  >
                    {tier.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-section" style={{ backgroundColor: "#F0EBE3" }}>
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <p className="text-eyebrow text-taupe mb-5">Voordelen</p>
              <h2 className="text-section-title text-foreground">Inbegrepen in elk lidmaatschap.</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.label} className="flex flex-col items-start">
                    <Icon className="w-7 h-7 text-gold mb-4" strokeWidth={1.25} />
                    <p className="font-heading text-base text-foreground font-light leading-snug mb-3">{b.label}</p>
                    <p className="text-sm text-muted-foreground font-body leading-[1.8]">{b.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* MEMBER TESTIMONIAL */}
        <section className="py-section bg-cream/30">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <p className="text-gold text-lg tracking-[0.3em] mb-6">★★★★★</p>
            <blockquote>
              <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground italic leading-[1.4] mb-8">
                "Ik ben nu twee jaar lid. Elke keer dat er een nieuwe gelegenheid komt, bel ik Alex. Hij weet al wat ik nodig heb — en het klopt altijd."
              </p>
              <footer className="text-[10px] tracking-[0.3em] uppercase text-taupe font-body">
                — Philippe R., Ondernemer · Signature lid sinds 2023
              </footer>
            </blockquote>
          </div>
        </section>

        <ServiceArea intro="Vanuit ons atelier nabij Leuven ontvangen we leden uit heel Vlaams-Brabant, Brussel en omstreken — met huisbezoeken op aanvraag." />

        {/* FAQ */}
        <section className="py-section">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="mb-10 text-center">
              <p className="text-eyebrow text-taupe mb-5">Veelgestelde vragen</p>
              <h2 className="text-section-title text-foreground">Goed om te weten.</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-foreground/15">
                  <AccordionTrigger className="font-heading text-lg font-light text-foreground text-left hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground font-body leading-[1.9]">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* SIGNUP FLOW */}
        <section className="py-section bg-espresso text-cream relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle at 80% 50%, hsl(var(--gold)) 0%, transparent 60%)" }}
          />
          <div className="container mx-auto px-6 max-w-5xl relative">
            <div className="text-center mb-16">
              <p className="text-[10px] tracking-[0.5em] uppercase text-gold font-body mb-5">In 3 stappen</p>
              <h2 className="font-heading text-3xl md:text-5xl font-light leading-tight">
                Word lid in 3 stappen.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-cream/10 mb-16">
              <button
                onClick={() => document.querySelector('section.py-section')?.scrollIntoView({ behavior: "smooth" })}
                className="bg-espresso text-left p-10 md:p-12 hover:bg-espresso/70 transition-colors group"
              >
                <p className="font-heading text-4xl font-light text-gold/70 mb-6 group-hover:text-gold transition-colors">01</p>
                <h3 className="font-heading text-xl font-light mb-3 leading-snug">Kies uw formule</h3>
                <p className="text-sm text-cream/65 font-body leading-[1.85]">
                  Essentieel, Signature of Bespoke Partner — passend bij uw levensritme.
                </p>
              </button>
              <button
                onClick={() => openBooking({ occasion: "personal" })}
                className="bg-espresso text-left p-10 md:p-12 hover:bg-espresso/70 transition-colors group"
              >
                <p className="font-heading text-4xl font-light text-gold/70 mb-6 group-hover:text-gold transition-colors">02</p>
                <h3 className="font-heading text-xl font-light mb-3 leading-snug">Plan een kennismakingsgesprek</h3>
                <p className="text-sm text-cream/65 font-body leading-[1.85]">
                  Een rustig gesprek in het atelier of bij u thuis. Geen verplichtingen.
                </p>
              </button>
              <button
                onClick={() => openBooking({ occasion: "personal" })}
                className="bg-espresso text-left p-10 md:p-12 hover:bg-espresso/70 transition-colors group"
              >
                <p className="font-heading text-4xl font-light text-gold/70 mb-6 group-hover:text-gold transition-colors">03</p>
                <h3 className="font-heading text-xl font-light mb-3 leading-snug">Ontvang uw welkomstpakket</h3>
                <p className="text-sm text-cream/65 font-body leading-[1.85] mb-4">
                  Stijlkaart, fabric swatches en uw eerste prioritaire boeking.
                </p>
                <ul className="space-y-2 text-sm text-cream/70 font-body leading-[1.7]">
                  <li className="flex gap-2"><span className="text-gold">·</span> Uw persoonlijke stijlkaart met maten en voorkeuren</li>
                  <li className="flex gap-2"><span className="text-gold">·</span> Fabric swatches van het lopende seizoen</li>
                  <li className="flex gap-2"><span className="text-gold">·</span> Uw eerste prioritaire boeking ingepland</li>
                </ul>
              </button>
            </div>
            <div className="text-center">
              <Button
                size="sm"
                className="px-10 py-6 bg-gold text-espresso hover:bg-gold/90 rounded-none tracking-[0.22em] text-[10px] uppercase"
                onClick={() => openBooking({ occasion: "personal" })}
              >
                Start uw lidmaatschap →
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Lidmaatschap;
