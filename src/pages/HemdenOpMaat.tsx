import { Helmet } from "react-helmet-async";
import { Camera, Sun, User, Shield, Clock, Check } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Button } from "@/components/ui/button";
import MeasurementWizard from "@/components/MeasurementWizard";
import { useBooking } from "@/contexts/BookingContext";
import ServiceArea from "@/components/ServiceArea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import shirtHero from "@/assets/shirt-detail-1.jpg";
import fabric1 from "@/assets/editorial-fabric-1.jpg";
import fabric2 from "@/assets/editorial-fabric-2.jpg";
import fabric3 from "@/assets/editorial-fabric-3.jpg";

const BASE = "https://bespoke-canvas-charm.lovable.app";

const fabricHouses = [
  {
    name: "Thomas Mason",
    location: "Londen",
    desc: "De referentie voor hemdstoffen sinds 1796. Fijn 2-ply katoen van de hoogste kwaliteit.",
    swatch: fabric1,
  },
  {
    name: "Albini Group",
    location: "Bergamo",
    desc: "Het meest vooraanstaande Italiaanse wevershuis. Licht, ademend en tijdloos van structuur.",
    swatch: fabric2,
  },
  {
    name: "Canclini",
    location: "Como",
    desc: "Specialist in lichte zomerstoffen. Ongeëvenaarde zachtheid en comfort.",
    swatch: fabric3,
  },
];

const tiers = [
  {
    name: "Essential Hemd",
    price: "vanaf €150",
    ideal: "eerste kennismaking met maatwerk",
    features: [
      "Oxford of Poplin stof",
      "Kent of button-down kraag",
      "Enkelvoudige manchet",
      "Levering in 4 weken",
    ],
    cta: "Begin met Essential →",
    featured: false,
  },
  {
    name: "Signature Hemd",
    price: "vanaf €180",
    ideal: "de dagelijkse drager",
    features: [
      "Thomas Mason of Albini stof",
      "Vrije kraag- en manchetkeuze",
      "Monogram optioneel (+€25)",
      "Levering in 3 weken",
    ],
    cta: "Start mijn Signature →",
    featured: true,
  },
  {
    name: "Bespoke Hemd",
    price: "vanaf €220",
    ideal: "wie het perfecte wil",
    features: [
      "Exclusieve stoffen op aanvraag",
      "Volledig handgenaaide details",
      "Eigen patroon bewaard",
      "Levering in 5 weken",
    ],
    cta: "Vraag een gesprek →",
    featured: false,
  },
];

const faqs = [
  {
    q: "Wat is het verschil tussen een MTM hemd en confectie?",
    a: "Een MTM (made-to-measure) hemd wordt geconfectioneerd op basis van uw persoonlijke maten en voorkeuren — stof, kraag, manchet, monogram. Confectie volgt een vaste standaardmaat en biedt geen aanpassing aan uw lichaamsbouw.",
  },
  {
    q: "Hoe worden mijn maten opgenomen?",
    a: "U kunt langskomen voor een traditionele opmeting in ons atelier in Brussel of Leuven, of u laat uw maten digitaal opnemen via onze AI-meetcomputer. Twee foto's volstaan — werkmarge 2–3 cm.",
  },
  {
    q: "Hoeveel kost een hemd op maat?",
    a: "Vanaf €150 voor een Essential maatoverhemd in Oxford of Poplin. Signature start vanaf €180 met stoffen van Thomas Mason of Albini. Bespoke vanaf €220 met exclusieve stoffen en handafwerking.",
  },
  {
    q: "Hoe lang duurt het proces?",
    a: "Levertijd is 3 tot 5 weken na de opmeting, afhankelijk van het gekozen niveau. Eerste paspas en kleine aanpassingen zijn altijd inbegrepen.",
  },
  {
    q: "Kan ik mijn hemd online bestellen?",
    a: "Ja — via de configurator kiest u stof, kraag, manchet en pasvorm. Na het opnemen van uw maten (digitaal of in atelier) gaat uw bestelling in productie.",
  },
  {
    q: "Worden mijn maten bewaard voor een volgend hemd?",
    a: "Uiteraard. Uw maten en pasvormvoorkeuren worden discreet bewaard zodat uw volgende bestellingen probleemloos en sneller verlopen.",
  },
];

const HemdenOpMaat = () => {
  const { openBooking } = useBooking();
  const url = `${BASE}/hemden-op-maat`;

  return (
    <>
      <Helmet>
        <html lang="nl" />
        <title>Hemden op Maat — MTM Overhemden vanaf €150 | Alex Nass Brussel</title>
        <meta
          name="description"
          content="Ontwerp uw overhemd op maat: kies stof, kraag en manchet. Thomas Mason en Albini stoffen. Vanaf €150. Atelier Brussel en Leuven."
        />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="nl-BE" href={url} />
        <link rel="alternate" hrefLang="x-default" href={url} />
        <meta property="og:title" content="Hemden op Maat | Alex Nass Brussel" />
        <meta
          property="og:description"
          content="Maatoverhemd Brussel — chemise sur mesure Bruxelles. Bespoke shirt Belgium vanaf €150."
        />
        <meta property="og:url" content={url} />
      </Helmet>

      <AnnouncementBar />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative min-h-[78vh] flex items-end overflow-hidden">
          <img
            src={shirtHero}
            alt="Hemd op maat — detail van een MTM overhemd"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/40" />
          <div className="relative z-10 container mx-auto px-6 pt-40 pb-20 md:pb-28 max-w-3xl">
            <p className="text-[10px] tracking-[0.5em] uppercase text-gold font-body mb-7">
              — Overhemd op maat · MTM hemd België —
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.05] tracking-[-0.02em] mb-8">
              Het hemd, helemaal voor u.
            </h1>
            <p className="text-cream/75 font-body leading-[1.9] max-w-xl text-base md:text-lg">
              Italiaans katoen, met de hand getekend patroon, en een pasvorm die zit zoals een hemd hoort te zitten — vanaf het eerste knoopje tot de manchet.
            </p>
          </div>
        </section>

        {/* STOFDETAIL */}
        <section className="py-section bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground tracking-[-0.01em]">
                De stoffen die wij kiezen.
              </h2>
              <p className="mt-5 text-sm font-body text-muted-foreground leading-[1.8]">
                Uitsluitend van de beste Europese weverijen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {fabricHouses.map((f) => (
                <article
                  key={f.name}
                  className="border border-border bg-[hsl(var(--cream))]/60 p-8 flex flex-col gap-5"
                >
                  <div>
                    <h3 className="font-heading text-xl font-medium text-foreground">{f.name}</h3>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-taupe font-body mt-1">
                      {f.location}
                    </p>
                  </div>
                  <p className="font-body text-sm text-foreground/75 leading-[1.9]">{f.desc}</p>
                  <div className="aspect-[3/2] overflow-hidden bg-sand">
                    <img src={f.swatch} alt={`${f.name} stof`} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONFIGURATOR */}
        <MeasurementWizard onBookVirtual={() => openBooking("virtual")} />

        {/* AI MEASUREMENT */}
        <section className="bg-card py-section">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">— Digitale meting —</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-6">
              Uw maten, zonder meetlint.
            </h2>
            <p className="font-body text-foreground/75 leading-[1.9] mb-10">
              Wij werken met een AI-meetcomputer die uw maten digitaal opneemt met een werkmarge van 2–3 cm. U maakt twee foto's in rechtstaande houding — de rest gebeurt automatisch.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              {[
                { icon: Camera, t: "Twee foto's — voor en zijkant" },
                { icon: Sun, t: "Goede, gelijkmatige verlichting" },
                { icon: User, t: "Sta rechtop, neutrale houding" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <s.icon className="w-6 h-6 text-gold" strokeWidth={1.25} />
                  <p className="text-sm font-body text-foreground/80 leading-[1.7]">{s.t}</p>
                </div>
              ))}
            </div>

            <p className="text-xs font-body text-muted-foreground leading-[1.8] mb-12">
              Werkmarge: 2–3 cm · Geen meetlint nodig · Maten bewaard voor toekomstige bestellingen
            </p>

            <Button variant="hero" size="lg" className="px-10" onClick={() => openBooking("virtual")}>
              Start meting →
            </Button>

            <div className="mt-10 inline-flex items-center gap-2 text-xs italic font-body text-foreground/60">
              <Shield className="w-3.5 h-3.5" />
              Uw maten worden enkel gebruikt voor uw bestelling en nooit gedeeld.
            </div>
          </div>
        </section>

        {/* DELIVERY + INCLUDED */}
        <section className="py-section">
          <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="border border-border p-8 md:p-12">
              <Clock className="w-6 h-6 text-gold mb-5" strokeWidth={1.25} />
              <h3 className="font-heading text-2xl font-light text-foreground mb-6">Levertijd</h3>
              <ul className="space-y-3 text-sm font-body text-foreground/80 leading-[1.8]">
                <li><span className="text-foreground font-medium">Essential</span> — 4 weken na opmeting</li>
                <li><span className="text-foreground font-medium">Signature</span> — 3 weken na opmeting</li>
                <li><span className="text-foreground font-medium">Bespoke</span> — 5 weken na opmeting</li>
                <li><span className="text-foreground font-medium">Spoedbestelling</span> — op aanvraag</li>
              </ul>
            </div>
            <div className="border border-border p-8 md:p-12 bg-card">
              <Check className="w-6 h-6 text-gold mb-5" strokeWidth={1.25} />
              <h3 className="font-heading text-2xl font-light text-foreground mb-6">Wat altijd inbegrepen is</h3>
              <ul className="space-y-3 text-sm font-body text-foreground/80 leading-[1.8]">
                <li>— Eerste paspas inbegrepen</li>
                <li>— Kleine aanpassingen gratis</li>
                <li>— Uw maten bewaard voor toekomstige bestellingen</li>
                <li>— Discrete levering</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING TIERS */}
        <section className="py-section bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <p className="text-[10px] tracking-[0.5em] uppercase text-gold font-body mb-5">— Uw investering —</p>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground tracking-[-0.01em]">
                Uw investering
              </h2>
              <p className="mt-5 text-sm font-body text-muted-foreground leading-[1.8]">
                Alle prijzen worden definitief bevestigd na uw eerste consultatie.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative bg-background border p-8 md:p-10 flex flex-col ${
                    tier.featured
                      ? "border-gold shadow-[0_10px_40px_-15px_hsl(var(--gold)/0.35)]"
                      : "border-border"
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-espresso text-[9px] tracking-[0.3em] uppercase font-body font-medium px-3 py-1.5">
                      Meest gekozen
                    </span>
                  )}
                  <h3 className="font-heading text-2xl font-light text-foreground">{tier.name}</h3>
                  <p className="font-heading text-3xl font-light text-foreground mt-3">{tier.price}</p>
                  <p className="text-xs italic text-muted-foreground font-body mt-3 mb-6">
                    Ideaal voor: {tier.ideal}
                  </p>
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
                    className={`w-full ${tier.featured ? "bg-gold text-espresso hover:bg-gold/90" : ""}`}
                    onClick={() => openBooking()}
                  >
                    {tier.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceArea intro="Vanuit ons atelier nabij Leuven leveren we hemden op maat aan klanten in heel Vlaams-Brabant, Brussel en omstreken." />

        {/* FAQ */}
        <section className="py-section">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">— FAQ —</p>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground">
                Veelgestelde vragen
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="font-heading text-lg font-light text-foreground text-left hover:no-underline py-6">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground font-body leading-[1.9] pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="sr-only">
              Maatoverhemd Brussel, chemise sur mesure Bruxelles, bespoke shirt Belgium — Alex Nass atelier Brussel en Leuven.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HemdenOpMaat;
