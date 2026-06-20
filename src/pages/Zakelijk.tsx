import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { UserPlus, Gift, Users, MessageSquare, Scissors, Truck, Building2 } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useBooking } from "@/contexts/BookingContext";

const useCases = [
  {
    icon: UserPlus,
    title: "Nieuwe medewerkers",
    desc: "Instapkledingpakket voor executives en management.",
    scenario: "Nieuwe directeur start in september — pak klaar op dag 1, eerste indruk verzekerd.",
    price: "Vanaf €890 per persoon",
  },
  {
    icon: Gift,
    title: "Zakelijke gifting",
    desc: "Een uniek cadeau voor relaties of jubilarissen.",
    scenario: "Een uniek relatiegeschenk dat jaren meegaat en elke dag aan u herinnert.",
    price: "Vanaf €149 per stuk",
  },
  {
    icon: Users,
    title: "Team events / trunk shows",
    desc: "Wij komen naar uw kantoor of event toe.",
    scenario: "Wij komen naar uw kantoor — uw team wordt opgemeten en gekleed zonder één werkuur te verliezen.",
    price: "Offerte op maat",
  },
];

const steps = [
  { icon: MessageSquare, title: "Intake gesprek", desc: "We luisteren naar de context, doelgroep en doelstellingen." },
  { icon: Scissors, title: "Stof & stijlkeuze", desc: "Persoonlijk advies, fabric library, kleurpalet." },
  { icon: Building2, title: "Productie", desc: "Vakmanschap in onze ateliers, met aandacht voor detail." },
  { icon: Truck, title: "Levering & nazorg", desc: "On-site fittings en blijvende ondersteuning." },
];

const groupTiers = [
  {
    range: "5–10 personen",
    bullets: [
      "Individuele consultaties per medewerker",
      "Atelier of op uw locatie",
      "Pakket klaar in 4–6 weken",
    ],
  },
  {
    range: "10–20 personen",
    bullets: [
      "Trunk show op uw kantoor",
      "Één dag, meerdere fittings",
      "Gecoördineerde stijl per team",
    ],
  },
  {
    range: "20+ personen",
    bullets: [
      "Volledig garderobeprogramma",
      "Dedicated account bij Alex Nass",
      "Seizoensmatige opvolging inbegrepen",
    ],
  },
];

const faqsZakelijk = [
  {
    q: "Is een maatpak fiscaal aftrekbaar voor mijn bedrijf?",
    a: "In de meeste gevallen kunnen zelfstandigen en vennootschappen professionele maatkleding fiscaal inbrengen als beroepskledij. Vraag uw boekhouder voor de exacte toepassingsvoorwaarden in uw situatie.",
  },
  {
    q: "Hoeveel kost een zakelijk maatpak op maat?",
    a: "Onze zakelijke maatpakken starten vanaf €890 per persoon. De prijs is afhankelijk van de gekozen stof, constructie en afwerking. Voor teams maken wij een offerte op maat.",
  },
  {
    q: "Kunnen jullie ook naar ons kantoor komen?",
    a: "Ja. Vanaf 5 personen komen wij met de volledige stoffencollectie naar uw kantoor in Brussel, Leuven, Antwerpen of elders in België. Wij plannen alle metingen op één dag.",
  },
  {
    q: "Wat is een trunk show en hoe werkt het praktisch?",
    a: "Een trunk show is een privé sessie op uw locatie waarbij uw team kennismaakt met onze collectie, stoffen kiest en wordt opgemeten — zonder dat iemand zijn werkplek verlaat.",
  },
  {
    q: "Hoe snel kan een zakelijk pak klaar zijn?",
    a: "Reken op 4 tot 6 weken vanaf de eerste meting. Voor urgente situaties (nieuwe directeur, gala, internationale meeting) kunnen wij in overleg een spoedtraject voorzien.",
  },
];

const Zakelijk = () => {
  const { openBooking } = useBooking();
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 400;
      const formEl = formRef.current;
      let formInView = false;
      if (formEl) {
        const r = formEl.getBoundingClientRect();
        formInView = r.top < window.innerHeight && r.bottom > 0;
      }
      setShowSticky(past && !formInView);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Zakelijke Maatkleding voor Bedrijven in België | Alex Nass B2B</title>
        <meta
          name="description"
          content="Maatpakken voor executives, nieuwe medewerkers en teams. Trunk shows op kantoor. Fiscaal aftrekbaar. Vanaf 5 personen — offerte op maat. Brussel, Leuven, Antwerpen."
        />
        <link rel="canonical" href="https://bespoke-canvas-charm.lovable.app/zakelijk" />
        <link rel="alternate" hrefLang="nl-BE" href="https://bespoke-canvas-charm.lovable.app/zakelijk" />
        <link rel="alternate" hrefLang="fr-BE" href="https://bespoke-canvas-charm.lovable.app/fr/costume-sur-mesure-entreprise" />
        <link rel="alternate" hrefLang="en" href="https://bespoke-canvas-charm.lovable.app/en/corporate-bespoke-suits" />
      </Helmet>

      <AnnouncementBar />
      <Navbar />

      <main className="bg-background">
        {/* HERO */}
        <section className="relative bg-espresso text-cream pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(circle at 75% 25%, hsl(var(--gold)) 0%, transparent 55%)" }}
          />
          <div className="container mx-auto px-6 max-w-4xl relative">
            <p className="text-[10px] tracking-[0.5em] uppercase text-gold font-body mb-6">
              Alex Nass · Zakelijke maatkleding bedrijven
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.02em] mb-8">
              Uw team, gekleed op maat.
            </h1>
            <p className="text-cream/70 font-body leading-[1.9] max-w-2xl mb-10 text-base md:text-lg">
              Corporate maatpak op maat in België — voor executives, nieuwe medewerkers en zakelijke relaties.
              Discreet, persoonlijk en volledig op maat in Brussel, Leuven en Antwerpen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="sm"
                className="px-8 py-5 bg-cream text-espresso hover:bg-cream/90 border-0 tracking-[0.22em] text-[10px] uppercase"
                asChild
              >
                <a href="#offerte">Vraag offerte aan →</a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="px-8 py-5 bg-transparent border-cream/40 text-cream hover:bg-cream/10 tracking-[0.22em] text-[10px] uppercase"
                onClick={() => openBooking({ occasion: "team" })}
              >
                Plan een gesprek →
              </Button>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL — bestaand */}
        <section className="py-section bg-cream/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <blockquote className="border-l-2 border-gold pl-8 md:pl-12 py-2">
              <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground italic leading-[1.4] mb-8">
                "Alex begrijpt dat kledij een strategisch instrument is. Onze nieuwe directeur stond op dag één gekleed voor zijn functie."
              </p>
              <footer className="text-[10px] tracking-[0.3em] uppercase text-taupe font-body">
                — HR Director, internationale Brusselse groep
              </footer>
            </blockquote>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-section">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <p className="text-eyebrow text-taupe mb-5">Toepassingen</p>
              <h2 className="text-section-title text-foreground">Wanneer wij u van dienst kunnen zijn.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((u) => {
                const Icon = u.icon;
                return (
                  <div
                    key={u.title}
                    className="border border-foreground/10 p-8 hover:border-gold/40 transition-colors flex flex-col"
                  >
                    <Icon className="w-7 h-7 text-gold mb-6" strokeWidth={1.25} />
                    <h3 className="font-heading text-xl text-foreground mb-3 font-light">{u.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-[1.8] mb-4">{u.desc}</p>
                    <p className="text-sm italic text-foreground/70 font-body leading-[1.8] mb-6 flex-1">
                      "{u.scenario}"
                    </p>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-body font-medium pt-4 border-t border-foreground/10">
                      {u.price}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-section bg-cream/30">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <p className="text-eyebrow text-taupe mb-5">Het proces</p>
              <h2 className="text-section-title text-foreground">Hoe het werkt.</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.title}>
                    <div className="flex items-baseline gap-3 mb-5">
                      <span className="font-heading text-3xl font-light text-gold/60">0{i + 1}</span>
                      <Icon className="w-5 h-5 text-foreground/70" strokeWidth={1.25} />
                    </div>
                    <h3 className="font-heading text-lg text-foreground mb-2 font-light">{s.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-[1.8]">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* GROUP APPROACH */}
        <section className="py-section">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-14 text-center mx-auto">
              <p className="text-eyebrow text-taupe mb-5">Aanpak per groepsgrootte</p>
              <h2 className="text-section-title text-foreground">Op maat van uw team.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {groupTiers.map((g) => (
                <div key={g.range} className="border border-foreground/10 p-8 flex flex-col">
                  <p className="font-heading text-2xl font-light text-foreground mb-4">{g.range}</p>
                  <div className="w-10 h-px bg-gold mb-5" />
                  <ul className="space-y-3">
                    {g.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-muted-foreground font-body leading-[1.7]">
                        <span className="text-gold mt-1">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REFERENCES — single testimonial in cream */}
        <section className="py-section bg-cream/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-eyebrow text-taupe mb-8 text-center">Onze zakelijke klanten</p>
            <blockquote className="border-l-2 border-gold pl-8 md:pl-12 py-2">
              <p className="font-heading text-xl md:text-2xl lg:text-3xl font-light text-foreground italic leading-[1.5] mb-8">
                "Drie van onze managers kregen hun eerste maatpak via Alex Nass. De reacties waren onmiddellijk — intern en extern. Het is een investering die zichzelf terugverdient."
              </p>
              <footer className="text-[10px] tracking-[0.3em] uppercase text-taupe font-body">
                — Directeur, Brusselse consultancyfirma
              </footer>
            </blockquote>
          </div>
        </section>

        {/* FISCAL NOTE — boven contact */}
        <section className="pt-16 pb-0">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="border border-foreground/10 border-l-[3px] border-l-gold bg-cream/40 px-6 py-5">
              <p className="text-sm font-body text-foreground/80 leading-[1.7]">
                <span className="mr-1">💡</span>
                Professionele maatkleding is <strong className="font-medium">fiscaal aftrekbaar als beroepskledij</strong> voor zelfstandigen en
                vennootschappen in België. Vraag uw boekhouder voor de exacte toepassingsvoorwaarden.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="offerte" ref={formRef} className="py-section">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="mb-10 text-center">
              <p className="text-eyebrow text-taupe mb-5">Contact</p>
              <h2 className="text-section-title text-foreground">Vraag een offerte aan.</h2>
            </div>

            {sent ? (
              <div className="border border-gold/40 bg-gold/5 p-10 text-center">
                <p className="font-heading text-xl text-foreground font-light leading-relaxed">
                  Bedankt. Alex neemt binnen 1 werkdag contact op.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <Input required placeholder="Bedrijfsnaam" className="rounded-none border-foreground/20" />
                <div className="grid md:grid-cols-2 gap-5">
                  <Input required placeholder="Naam" className="rounded-none border-foreground/20" />
                  <Input required type="email" placeholder="E-mail" className="rounded-none border-foreground/20" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Input placeholder="Telefoon" className="rounded-none border-foreground/20" />
                  <select
                    required
                    className="h-10 w-full rounded-none border border-foreground/20 bg-background px-3 text-sm font-body text-foreground"
                    defaultValue=""
                  >
                    <option value="" disabled>Aantal personen</option>
                    <option value="1-4">1–4</option>
                    <option value="5-10">5–10</option>
                    <option value="10-20">10–20</option>
                    <option value="20+">20+</option>
                  </select>
                </div>
                <Textarea required placeholder="Bericht" rows={5} className="rounded-none border-foreground/20" />
                <Button
                  type="submit"
                  className="w-full bg-espresso text-cream hover:bg-espresso/90 rounded-none tracking-[0.22em] text-[10px] uppercase py-6"
                >
                  Verstuur aanvraag
                </Button>
              </form>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-section bg-cream/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-eyebrow text-taupe mb-5">Veelgestelde vragen</p>
              <h2 className="text-section-title text-foreground">Veelgestelde vragen</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqsZakelijk.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-foreground/15">
                  <AccordionTrigger className="font-heading text-lg font-light text-foreground text-left hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground font-body leading-[1.9] pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-section bg-espresso text-cream">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-8 leading-tight">
              Liever direct in gesprek?
            </h2>
            <Button
              size="sm"
              className="px-8 py-5 bg-gold text-espresso hover:bg-gold/90 rounded-none tracking-[0.22em] text-[10px] uppercase"
              onClick={() => openBooking({ occasion: "team" })}
            >
              Plan een zakelijk gesprek
            </Button>
          </div>
        </section>

        {/* STICKY OFFERTE BUTTON — desktop only */}
        {showSticky && (
          <a
            href="#offerte"
            className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-2 px-6 py-4 rounded-none tracking-[0.22em] text-[10px] uppercase font-body shadow-2xl transition-colors"
            style={{ backgroundColor: "#2A1F14", color: "hsl(var(--cream))" }}
          >
            Vraag offerte aan ↗
          </a>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Zakelijk;
