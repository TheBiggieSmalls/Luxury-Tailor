import { Helmet } from "react-helmet-async";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useBooking } from "@/contexts/BookingContext";
import { Check, Star } from "lucide-react";
import weddingHero from "@/assets/cat-wedding.jpg";
import heroVideo from "@/assets/hero-suits-montage.mp4.asset.json";
import { sketches } from "@/components/wedding/StepSketches";
import FabricSlideshow from "@/components/wedding/FabricSlideshow";
import WeddingTimeline from "@/components/wedding/WeddingTimeline";
import FlandersMap from "@/components/wedding/FlandersMap";
import ProcessRow from "@/components/wedding/ProcessRow";
import ClientMarquee from "@/components/wedding/ClientMarquee";
import NextStepSelector from "@/components/wedding/NextStepSelector";
import WeddingLeadMagnet from "@/components/wedding/WeddingLeadMagnet";

export type WeddingLocale = "nl" | "fr" | "en";

export interface WeddingContent {
  locale: WeddingLocale;
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  introTagline: string;
  intro: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustItems: { value: string; label: string }[];
  processTitle: string;
  processIntro: string;
  processSteps: { week: string; title: string; desc: string }[];
  pricingTitle: string;
  pricingIntro: string;
  pricingTiers: { name: string; price: string; desc: string; features: string[]; popular?: boolean }[];
  fabricsTitle: string;
  fabricsIntro: string;
  fabricHouses: string[];
  fittingsTitle: string;
  fittingsBody: string;
  timingTitle: string;
  timingBody: string;
  timingTimeline: { months: string; what: string; status?: "ideal" | "possible" | "urgent" }[];
  timingNote?: string;
  testimonialsTitle: string;
  testimonials: { quote: string; name: string; context: string }[];
  prepTitle: string;
  prepBody: string;
  prepBullets: string[];
  areaTitle: string;
  areaIntro: string;
  cities: string[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  finalTitle: string;
  finalBody: string;
  internalLinks: { label: string; href: string }[];
  alternates?: { lang: string; href: string }[];
  xDefault?: string;
}

const BASE_URL = "https://bespoke-canvas-charm.lovable.app";


const labels = {
  nextStep: { nl: "Volgende stap", fr: "Étape suivante", en: "Next step" },
  reset: { nl: "Opnieuw", fr: "Recommencer", en: "Reset" },
  step: { nl: "Stap", fr: "Étape", en: "Step" },
  serveTitle: { nl: "We werken in heel Vlaanderen", fr: "Nous travaillons dans toute la Flandre", en: "We work across Flanders" },
  serveIntro: {
    nl: "Vanuit ons atelier nabij Leuven bedienen we bruidegoms in heel Vlaams-Brabant, Brussel en omstreken.",
    fr: "Depuis notre atelier près de Louvain, nous habillons les mariés dans tout le Brabant flamand, à Bruxelles et alentours.",
    en: "From our atelier near Leuven, we dress grooms across Flemish Brabant, Brussels and surroundings.",
  },
};

const WeddingPage = ({ content }: { content: WeddingContent }) => {
  const { openBooking } = useBooking();
  const url = `${BASE_URL}${content.path}`;
  

  const alternates = content.alternates ?? [
    { lang: "nl-BE", href: `${BASE_URL}/trouwpak-op-maat` },
    { lang: "fr-BE", href: `${BASE_URL}/costume-mariage-sur-mesure` },
    { lang: "en", href: `${BASE_URL}/custom-wedding-suits` },
  ];
  const xDefault = content.xDefault ?? `${BASE_URL}/custom-wedding-suits`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: content.h1,
    provider: {
      "@type": "LocalBusiness",
      name: "Alex Nass",
      address: { "@type": "PostalAddress", addressLocality: "Leuven", addressRegion: "Vlaams-Brabant", addressCountry: "BE" },
      areaServed: content.cities,
    },
    areaServed: content.cities,
    url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Alex Nass", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: content.h1, item: url },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang={content.locale} />
        <title>{content.title}</title>
        <meta name="description" content={content.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={content.locale === "nl" ? "nl_BE" : content.locale === "fr" ? "fr_BE" : "en_US"} />
        {alternates.map((a) => (
          <link key={a.lang} rel="alternate" hrefLang={a.lang} href={a.href} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={xDefault} />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <AnnouncementBar />
      <Navbar />

      <main className="bg-background text-foreground">
        {/* HERO — full-bleed video background + white-suit portrait */}
        <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Looping ambient video background */}
          <video
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Espresso veil for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />

          <div className="relative container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <p className="text-[11px] tracking-[0.4em] uppercase text-gold font-body mb-6">
                  {content.introTagline}
                </p>
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-foreground mb-8 tracking-[-0.01em]">
                  {content.h1}
                </h1>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-[1.85] max-w-xl mb-10">
                  {content.intro}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <Button variant="hero" size="lg" onClick={() => openBooking("showroom")}>
                    {content.ctaPrimary}
                  </Button>
                  <a href="#wedding-pricing" className="text-[11px] tracking-[0.3em] uppercase text-foreground font-body font-medium border-b border-foreground/40 pb-1 hover:border-gold transition-colors">
                    {content.ctaSecondary}
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div
                  className="relative aspect-[4/5] overflow-hidden bg-card shadow-2xl"
                  style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))" }}
                >
                  <img
                    src={weddingHero}
                    alt={content.h1}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute -bottom-px left-0 right-0 h-px bg-gold/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="border-y border-border py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {content.trustItems.map((t) => (
                <div key={t.label}>
                  <div className="font-heading text-3xl md:text-4xl font-light text-foreground mb-2">{t.value}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body">{t.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS — 4 steps left → right, scroll-revealed */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6 text-center">
              {content.processTitle}
            </h2>
            <p className="font-body text-muted-foreground leading-[1.8] text-center max-w-2xl mx-auto mb-16">
              {content.processIntro}
            </p>
            <ProcessRow
              locale={content.locale}
              steps={content.processSteps.map((s, i) => ({
                ...s,
                Sketch: sketches[i] ?? sketches[0],
              }))}
            />
          </div>
        </section>

        {/* PRICING */}
        <section id="wedding-pricing" className="py-24 md:py-32 bg-card">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6 text-center">
              {content.pricingTitle}
            </h2>
            <p className="font-body text-muted-foreground leading-[1.8] text-center max-w-2xl mx-auto mb-16">
              {content.pricingIntro}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {content.pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`p-8 border ${tier.popular ? "border-gold bg-background" : "border-border"} relative`}
                  style={tier.popular ? { clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)" } : undefined}
                >
                  {tier.popular && (
                    <>
                      {/* Tailor pocket-flap ribbon */}
                      <svg className="absolute -top-1 -right-1 w-24 h-16 pointer-events-none" viewBox="0 0 96 64" aria-hidden="true">
                        <path d="M 0 0 L 96 0 L 96 56 L 48 64 L 0 56 Z" fill="hsl(var(--gold))" />
                        <path d="M 8 6 L 88 6" stroke="hsl(var(--espresso) / 0.4)" strokeWidth="0.75" strokeDasharray="2 3" />
                        <text x="48" y="32" textAnchor="middle" fill="hsl(var(--espresso))" fontFamily="serif" fontSize="11" fontStyle="italic" letterSpacing="2">Signature</text>
                      </svg>
                    </>
                  )}
                  <h3 className="font-heading text-2xl font-light text-foreground mb-2">{tier.name}</h3>
                  <div className="font-heading text-4xl font-light text-foreground mb-2">{tier.price}</div>
                  <p className="font-body text-sm text-muted-foreground mb-6">{tier.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FABRICS — swatch grid with logo overlay */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6">
                  {content.fabricsTitle}
                </h2>
                <p className="font-body text-muted-foreground leading-[1.8] mb-6">
                  {content.fabricsIntro}
                </p>
                <p className="font-body text-sm text-foreground/55 leading-[1.8] italic">
                  {content.fabricHouses.join(" · ")}
                </p>
              </div>
              <div>
                <FabricSlideshow />
              </div>
            </div>
          </div>
        </section>

        {/* FITTINGS + VISUAL TIMELINE */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-6">
                  {content.fittingsTitle}
                </h2>
                <p className="font-body text-muted-foreground leading-[1.8]">
                  {content.fittingsBody}
                </p>
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-6">
                  {content.timingTitle}
                </h2>
                <p className="font-body text-muted-foreground leading-[1.8]">
                  {content.timingBody}
                </p>
              </div>
            </div>
            <WeddingTimeline nodes={content.timingTimeline} note={content.timingNote} />
          </div>
        </section>

        {/* TESTIMONIALS — real-client photo marquee + quotes (no faces) */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-12 text-center">
              {content.testimonialsTitle}
            </h2>
          </div>
          <div className="mb-20">
            <ClientMarquee />
          </div>
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-12">
              {content.testimonials.map((t, i) => (
                <figure key={i} className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-0.5 mb-4 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="font-heading text-lg font-light text-foreground leading-[1.6] mb-6 italic">
                    "{t.quote}"
                  </blockquote>
                  <figcaption>
                    <div className="font-body text-sm font-medium text-foreground">{t.name}</div>
                    <div className="font-body text-xs text-muted-foreground mt-1">{t.context}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* WEDDING PREP */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6 text-center">
              {content.prepTitle}
            </h2>
            <p className="font-body text-muted-foreground leading-[1.8] text-center mb-10">
              {content.prepBody}
            </p>
            <ul className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {content.prepBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LEAD MAGNET — Wedding Style Guide */}
        <WeddingLeadMagnet locale={content.locale} />

        {/* SERVICE AREA — Flanders sketch map */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-6">
                {labels.serveTitle[content.locale]}
              </h2>
              <p className="font-body text-muted-foreground leading-[1.8] max-w-2xl mx-auto">
                {labels.serveIntro[content.locale]}
              </p>
            </div>
            <FlandersMap cities={content.cities} locale={content.locale} />
            <div className="border-t border-border mt-16 pt-12">
              <NextStepSelector links={content.internalLinks} locale={content.locale} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-12 text-center">
              {content.faqTitle}
            </h2>
            <Accordion type="single" collapsible>
              {content.faqs.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`} className="border-border border-t last:border-b">
                  <AccordionTrigger className="font-heading text-lg font-light text-foreground hover:no-underline py-6 text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-[1.8] pb-6 font-body text-sm">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6">
              {content.finalTitle}
            </h2>
            <p className="font-body text-muted-foreground leading-[1.8] mb-10">
              {content.finalBody}
            </p>
            <Button variant="hero" size="lg" onClick={() => openBooking("showroom")}>
              {content.ctaPrimary}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WeddingPage;
