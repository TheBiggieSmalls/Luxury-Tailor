import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/BookingContext";
import Promotion from "@/components/Promotion";
import PricingMaatpak from "@/components/PricingMaatpak";
import FAQ from "@/components/FAQ";
import FabricPartners from "@/components/FabricPartners";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import collectionVideo from "@/assets/collection-suit-video.mp4.asset.json";
import shirtVideo from "@/assets/shirt-detail-video.mp4.asset.json";
import suitsMontage from "@/assets/hero-suits-montage.mp4.asset.json";
import catBusiness from "@/assets/cat-business.jpg";
import catTuxedo from "@/assets/cat-tuxedo.jpg";
import catWedding from "@/assets/cat-wedding.jpg";
import catCasual from "@/assets/cat-casual.jpg";
import client1 from "@/assets/client-suit-1.jpg";
import client2 from "@/assets/client-suit-2.jpg";
import client3 from "@/assets/client-suit-3.jpg";
import fabric1 from "@/assets/editorial-fabric-1.jpg";
import fabric2 from "@/assets/editorial-fabric-2.jpg";
import fabric3 from "@/assets/editorial-fabric-3.jpg";
import fabric4 from "@/assets/editorial-fabric-4.jpg";
import fabric5 from "@/assets/editorial-fabric-5.jpg";
import fabric6 from "@/assets/editorial-fabric-6.jpg";

import logoLoroPiana from "@/assets/logo-loro-piana-v2.png";
import logoScabal from "@/assets/logo-scabal-v2.png";
import logoDormeuil from "@/assets/logo-dormeuil-v2.png";
import logoHolland from "@/assets/logo-holland-sherry-v2.png";

import testimonialImg1 from "@/assets/testimonial-1.jpg";
import testimonialImg2 from "@/assets/testimonial-2.jpg";
import testimonialImg3 from "@/assets/testimonial-3.jpg";
import testimonialImg4 from "@/assets/testimonial-4.jpg";
import testimonialImg5 from "@/assets/testimonial-5.jpg";

const BASE = "https://bespoke-canvas-charm.lovable.app";

const showcase = [
  {
    label: "Trouwpak",
    desc: "Dubbelrij silhouet — voor de meest persoonlijke dag.",
    type: "image" as const,
    media: catWedding,
    href: "/trouwpak-op-maat",
  },
  {
    label: "Zakelijk kostuum",
    desc: "Stille autoriteit voor de boardroom.",
    type: "video" as const,
    media: collectionVideo.url,
    poster: catBusiness,
    href: "/maatpak",
  },
  {
    label: "Smoking",
    desc: "Sjaalkraag, satijn revers — black tie zoals het hoort.",
    type: "image" as const,
    media: catTuxedo,
    href: "/maatpak",
  },
  {
    label: "Smart Casual",
    desc: "Ongedwongen elegantie — blazers, gilets en chino's op maat.",
    type: "image" as const,
    media: catCasual,
    href: "/maatpak",
  },
];


const galleryImages = [
  client1,
  testimonialImg1,
  client2,
  testimonialImg2,
  client3,
  testimonialImg3,
  testimonialImg4,
  testimonialImg5,
];

const fabricHouses = [
  {
    name: "Loro Piana",
    logo: logoLoroPiana,
    desc: "Italiaans atelier sinds 1924. Onbetwiste autoriteit op het gebied van superfijne wol en vicuña — stoffen die ademen, hangen en levenslang meegaan.",
    swatch: fabric1,
  },
  {
    name: "Scabal",
    logo: logoScabal,
    desc: "Brusselse weverij met meer dan 80 jaar geschiedenis. Bekend om innovatieve stoffenboeken en de tijdloze 'Treasure Box' collecties met goud- en zilverdraad.",
    swatch: fabric2,
  },
  {
    name: "Dormeuil",
    logo: logoDormeuil,
    desc: "Franse maison sinds 1842. Internationaal gerenommeerd voor exclusieve mengsels van wol, kasjmier en zijde — een staal van Europees vakmanschap.",
    swatch: fabric3,
  },
  {
    name: "Holland & Sherry",
    logo: logoHolland,
    desc: "Brits-Schotse weverij sinds 1836. De referentie voor zware Engelse wol, savile-row jaspé en flannel — stoffen die structuur en karakter geven aan elk pak.",
    swatch: fabric4,
  },
];

const subCategories = [
  {
    label: "Zakelijke Kostuums",
    img: catBusiness,
    desc: "Pakken die meegroeien met uw agenda. Voor de boardroom, de ontvangst en het diner dat erop volgt.",
    occasion: "business" as const,
  },
  {
    label: "Smokings",
    img: catTuxedo,
    desc: "Black tie volgens de regels van de kunst. Sjaalkraag, peak revers, satijnen passementerie — volledig op maat.",
    occasion: "event" as const,
  },
];

const faqMaatpak = [
  { q: "Hoeveel kost een maatpak bij Alex Nass?", a: "Onze pakken starten vanaf €890 (Essential) en gaan tot €3.490 voor volledig bespoke met handgenaaide constructie en exclusieve stoffen van Loro Piana of Holland & Sherry." },
  { q: "Hoeveel passessies zijn er nodig?", a: "Minimaal twee passessies voor Essential en Signature, drie of meer voor Premium en Bespoke. Bij elke passessie verfijnen we de pasvorm verder." },
  { q: "Hoe lang duurt het maken van een maatpak?", a: "Reken op 4 tot 6 weken voor Essential en Signature, en 8 tot 10 weken voor Premium of Bespoke met handafwerking." },
  { q: "Kan ik de stof zelf kiezen?", a: "Uiteraard. U krijgt toegang tot de volledige stoffenboeken van Loro Piana, Scabal, Dormeuil en Holland & Sherry, met persoonlijk advies van Alex." },
];

const Maatpak = () => {
  const { openBooking } = useBooking();
  const url = `${BASE}/maatpak`;

  return (
    <>
      <Helmet>
        <html lang="nl" />
        <title>Maatpak op maat | Alex Nass — Privé Atelier Brussel</title>
        <meta
          name="description"
          content="Maatpak op maat bij Alex Nass: zakelijke kostuums, smokings en smart casual. Loro Piana, Scabal, Dormeuil en Holland & Sherry. Vanaf €890."
        />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="nl-BE" href={`${BASE}/maatpak`} />
        <link rel="alternate" hrefLang="fr-BE" href={`${BASE}/costume-sur-mesure`} />
        <link rel="alternate" hrefLang="en" href={`${BASE}/bespoke-suits`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE}/maatpak`} />
        <meta property="og:title" content="Maatpak op maat | Alex Nass" />
        <meta property="og:description" content="Privé atelier in Brussel — zakelijke kostuums, smokings en smart casual maatpakken." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <AnnouncementBar />
      <Navbar />

      <main className="bg-background text-foreground">
        {/* INTRO */}
        <section className="pt-40 pb-12 md:pt-44 md:pb-16">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-6">— Maatpak —</p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] tracking-[-0.02em]">
              Een pak dat alleen voor u bestaat.
            </h1>
            <p className="mt-8 max-w-2xl mx-auto font-body text-foreground/70 leading-[1.9]">
              Drie silhouetten, één kleermaker. Ontdek het maatwerk van Alex Nass — van het eerste gesprek tot de laatste knoop.
            </p>
          </div>
        </section>

        {/* 1. SUIT SHOWCASE — 4 luxe categorieën, vullen ~75% van het scherm op desktop */}
        <section className="bg-card">
          <div className="mx-auto w-full lg:max-w-[1800px] xl:max-w-[90vw]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-3 md:px-4 py-3 md:py-4">
              {showcase.map((s) => (
                <Link
                  to={s.href}
                  key={s.label}
                  className="group relative overflow-hidden block aspect-[3/4] lg:aspect-[3/5]"
                >
                  {s.type === "video" ? (
                    <video
                      src={s.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={s.poster}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                    />
                  ) : (
                    <img
                      src={s.media}
                      alt={s.label}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
                    <h3 className="font-heading text-2xl md:text-3xl font-light text-cream tracking-[-0.01em]">{s.label}</h3>
                    <p className="mt-2 text-sm text-cream/75 font-body leading-relaxed max-w-[260px]">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 2. REVIEWS — same deftig style als /over-ons, met sterren */}
        <Testimonials />

        {/* 3. SEASONAL OFFER — 6-day countdown */}
        <Promotion countdown onClaimOffer={() => openBooking()} />


        {/* 4. PRICING */}
        <PricingMaatpak />


        {/* 5. FINISHED SUITS GALLERY */}
        <section className="py-section">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">— Galerij —</p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
                Afgewerkt vakmanschap.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="overflow-hidden bg-card aspect-[3/4]">
                  <img src={img} alt={`Afgewerkt maatpak ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FABRIC DETAIL */}
        <section className="bg-card py-section">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">— De stof maakt het pak —</p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
                De stoffen die wij kiezen.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 max-w-5xl mx-auto">
              {fabricHouses.map((f) => (
                <article key={f.name} className="bg-background border border-border p-8 flex flex-col gap-6">
                  <img src={f.logo} alt={f.name} className="h-10 w-auto object-contain self-start [filter:brightness(0)_saturate(100%)] opacity-70" />
                  <p className="font-body text-sm text-foreground/75 leading-[1.9]">{f.desc}</p>
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={f.swatch} alt={`${f.name} stof`} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                </article>
              ))}
            </div>

            {/* Fabric partners — inline marquee */}
            <div className="mt-20 md:mt-24 pt-12 md:pt-16 border-t border-border/60 max-w-5xl mx-auto">
              <FabricPartners />
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <ServiceArea intro="Vanuit ons atelier nabij Leuven ontvangen we klanten in heel Vlaams-Brabant, Brussel en omstreken — met huisbezoeken op aanvraag." />

        {/* 7. SUB-CATEGORIES */}
        <section className="py-section">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {subCategories.map((c) => (
                <div key={c.label} className="group relative aspect-[3/4] overflow-hidden">
                  <img src={c.img} alt={c.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    <h3 className="font-heading text-3xl md:text-4xl font-light text-cream mb-3 tracking-[-0.01em]">{c.label}</h3>
                    <p className="text-cream/80 font-body leading-[1.8] max-w-[28ch] mb-6 text-sm">{c.desc}</p>
                    <button
                      onClick={() => openBooking({ occasion: c.occasion })}
                      className="self-start text-[10px] tracking-[0.3em] uppercase text-cream font-body font-medium border-b border-cream/40 pb-1 hover:border-gold transition-colors"
                    >
                      Plan een consultatie →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="bg-card py-section">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">Veelgestelde vragen</p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">Goed om te weten.</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqMaatpak.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="font-heading text-lg font-light text-foreground text-left hover:no-underline py-6">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground font-body leading-[1.9] pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground text-cream py-section">
          <div className="container mx-auto px-6 max-w-3xl text-center space-y-8">
            <h2 className="font-heading text-3xl md:text-5xl font-light leading-[1.15]">
              Klaar voor uw eerste maatpak?
            </h2>
            <Button
              variant="hero"
              size="sm"
              className="px-8 py-5 bg-cream text-espresso hover:bg-cream/90 border-0 tracking-[0.22em] text-[10px] uppercase rounded-none"
              onClick={() => openBooking()}
            >
              Reserveer een consultatie →
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Maatpak;
