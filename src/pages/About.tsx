import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/BookingContext";
import AtelierBackdrop from "@/components/about/AtelierBackdrop";
import StoryTimeline, { type StoryBeat } from "@/components/about/StoryTimeline";
import MissionVision from "@/components/about/MissionVision";
import {
  ButtonIcon,
  Needle,
  Scissors,
  Spool,
  Tape,
} from "@/components/about/atelierIcons";
import editorialHero from "@/assets/editorial-hero.jpg";
import Testimonials from "@/components/Testimonials";
import FabricPartners from "@/components/FabricPartners";

type Locale = "nl" | "fr" | "en";

const BASE_URL = "https://bespoke-canvas-charm.lovable.app";

type Copy = {
  path: string;
  title: string;
  meta: string;
  eyebrow: string;
  h1: string;
  lede: string;
  ctaPrimary: string;
  ctaSecondary: string;
  storyTitle: string;
  storyIntro: string;
  beats: StoryBeat[];
  mvTitle: string;
  mvIntro: string;
  mission: { eyebrow: string; title: string; body: string };
  vision: { eyebrow: string; title: string; body: string };
  valuesTitle: string;
  values: { title: string; body: string }[];
  finalTitle: string;
  finalBody: string;
};

const copy: Record<Locale, Copy> = {
  nl: {
    path: "/over-ons",
    title: "Over Alex Nass — Kleermaker in Leuven & Brussel",
    meta:
      "Ontmoet Alex Nass, onafhankelijk kleermaker in Leuven: maatpakken, trouwpakken en costumes sur mesure voor Brussel en heel Vlaanderen.",
    eyebrow: "Atelier · Leuven & Brussel",
    h1: "De kleermaker achter elk maatpak.",
    lede:
      "Alex Nass is geen confectiehuis. Het is één kleermaker, één atelier in Leuven, en honderden mannen die uit Brussel, Antwerpen en heel Vlaams-Brabant naar hier komen voor een maatpak dat alleen voor hen bestaat. Dit is het verhaal achter de naald.",
    ctaPrimary: "Plan je afspraak",
    ctaSecondary: "Lees ons verhaal",
    storyTitle: "Een verhaal in maten",
    storyIntro:
      "Geen marketingverhaal. Een leerschool van zestien jaar, één steek per keer, opgebouwd in échte ateliers met échte klanten.",
    beats: [
      { year: "2008", title: "Eerste schaar", body: "Alex begint als leerling-kleermaker in een klassiek atelier in Brussel. Drie jaar lang: knopen, voeringen, revers — voor één lijn op een eigen patroon getekend mag worden." },
      { year: "2012", title: "Eerste eigen maatpak", body: "Het eerste pak op eigen patroon, voor een klant in Leuven. De pasvorm zit. Het besluit is genomen: alleen maatwerk, nooit confectie." },
      { year: "2016", title: "Atelier in Leuven", body: "Een eigen ruimte tussen Naamsestraat en Sint-Pieter. Stoffenboeken van Loro Piana, Dormeuil en Scabal vinden hun vaste plaats op de werktafel." },
      { year: "2020", title: "Trouwpak op maat", body: "Een aparte lijn voor bruidegoms — inclusief getuigen — wordt gelanceerd. Vandaag is dat ongeveer veertig trouwpakken per jaar." },
      { year: "2024", title: "Honderden klanten", body: "Klanten uit Antwerpen, Mechelen, Hasselt en Brussel vinden de weg naar Leuven. Voor wie niet kan komen, gaat Alex zelf op pad." },
      { year: "Vandaag", title: "De volgende maat is de jouwe", body: "Eén klant per consultatie. Eén pak per patroon. En altijd dezelfde kleermaker — van het eerste meetlint tot de laatste knoop." },
    ],
    mvTitle: "Missie & Visie",
    mvIntro: "Twee zinnen die elke beslissing in het atelier sturen.",
    mission: {
      eyebrow: "Missie",
      title: "Eén klant, één pak, één kleermaker.",
      body:
        "Een maatpak hoort persoonlijk te zijn — niet alleen in de pasvorm, maar in elk gesprek dat eraan voorafgaat. Daarom werken we nooit met een verkoopteam. Je spreekt rechtstreeks met de kleermaker die je pak ook effectief naait.",
    },
    vision: {
      eyebrow: "Visie",
      title: "Maatwerk dat een leven meegaat.",
      body:
        "Een trouwpak op maat of een costume sur mesure is geen modeobject. Het is een stuk vakmanschap dat tien, twintig jaar later nog steeds zit zoals op dag één — omdat patroon, stof en handwerk daarvoor gemaakt zijn.",
    },
    valuesTitle: "Vier ankerpunten",
    values: [
      { title: "Stof", body: "Alleen Italiaanse en Engelse weverijen — Loro Piana, Dormeuil, Scabal." },
      { title: "Pasvorm", body: "Meer dan 30 metingen, minimaal drie passessies, één eigen patroon." },
      { title: "Tijd", body: "Acht tot twaalf weken. Het pak krijgt de tijd die het nodig heeft." },
      { title: "Vertrouwen", body: "Eén kleermaker van begin tot eind. Geen tussenpersonen." },
    ],
    finalTitle: "Kom langs in het atelier.",
    finalBody:
      "Een eerste consultatie duurt 60 minuten en is volledig vrijblijvend. Geen verkoopgesprek — een kennismaking met de kleermaker en de stoffen.",
  },
  en: {
    path: "/about",
    title: "About Alex Nass — Bespoke Tailor in Leuven & Brussels",
    meta:
      "Meet Alex Nass: independent tailor in Leuven crafting bespoke suits, wedding suits and made-to-measure for clients in Brussels and Flanders.",
    eyebrow: "Atelier · Leuven & Brussels",
    h1: "The tailor behind every suit.",
    lede:
      "Alex Nass is not a confection house. It is one tailor, one atelier in Leuven, and hundreds of men who travel from Brussels, Antwerp and across Flanders for a bespoke suit made only for them. This is the story behind the needle.",
    ctaPrimary: "Book your appointment",
    ctaSecondary: "Read our story",
    storyTitle: "A story measured in inches",
    storyIntro:
      "No marketing arc. Sixteen years of apprenticeship, one stitch at a time, built inside real ateliers with real clients.",
    beats: [
      { year: "2008", title: "First scissors", body: "Alex begins as an apprentice tailor in a classical Brussels atelier. Three years of buttons, linings and lapels — before being allowed to draw a single line on a personal pattern." },
      { year: "2012", title: "First bespoke suit", body: "The first suit drafted on his own pattern, for a client in Leuven. The fit is right. The decision is made: bespoke only, never off-the-rack." },
      { year: "2016", title: "Atelier in Leuven", body: "A workspace between Naamsestraat and Sint-Pieter. Fabric books from Loro Piana, Dormeuil and Scabal take their permanent place on the cutting table." },
      { year: "2020", title: "Bespoke wedding suits", body: "A dedicated wedding line — grooms and groomsmen — is launched. Today that is roughly forty wedding suits a year." },
      { year: "2024", title: "Hundreds of clients", body: "Clients from Antwerp, Mechelen, Hasselt and Brussels find their way to Leuven. For those who can't, Alex travels to them." },
      { year: "Today", title: "The next measure is yours", body: "One client per consultation. One suit per pattern. And always the same tailor — from the first measuring tape to the final button." },
    ],
    mvTitle: "Mission & Vision",
    mvIntro: "Two sentences that guide every decision in the atelier.",
    mission: {
      eyebrow: "Mission",
      title: "One client, one suit, one tailor.",
      body:
        "A bespoke suit should be personal — not only in the fit, but in every conversation that comes before it. That is why there is no sales team. You speak directly with the tailor who will also stitch your suit.",
    },
    vision: {
      eyebrow: "Vision",
      title: "Tailoring that outlives the trend.",
      body:
        "A bespoke suit is not a fashion object. It is a piece of craft that still fits ten or twenty years later — because the pattern, the cloth and the handwork were made for that.",
    },
    valuesTitle: "Four anchors",
    values: [
      { title: "Cloth", body: "Only Italian and English mills — Loro Piana, Dormeuil, Scabal." },
      { title: "Fit", body: "Over 30 measurements, three fittings minimum, one personal pattern." },
      { title: "Time", body: "Eight to twelve weeks. The suit takes the time it needs." },
      { title: "Trust", body: "One tailor from start to finish. No middlemen." },
    ],
    finalTitle: "Step into the atelier.",
    finalBody:
      "A first consultation lasts 60 minutes and commits you to nothing. Not a sales pitch — an introduction to the tailor and the cloth.",
  },
  fr: {
    path: "/a-propos",
    title: "À propos d'Alex Nass — Tailleur à Louvain & Bruxelles",
    meta:
      "Rencontrez Alex Nass, tailleur indépendant à Louvain : costumes sur mesure et de mariage pour clients à Bruxelles et en Flandre.",
    eyebrow: "Atelier · Louvain & Bruxelles",
    h1: "Le tailleur derrière chaque costume.",
    lede:
      "Alex Nass n'est pas une maison de confection. C'est un tailleur, un atelier à Louvain, et des centaines d'hommes qui viennent de Bruxelles, d'Anvers et de toute la Flandre pour un costume sur mesure fait uniquement pour eux. Voici l'histoire derrière l'aiguille.",
    ctaPrimary: "Prendre rendez-vous",
    ctaSecondary: "Découvrir l'histoire",
    storyTitle: "Une histoire en centimètres",
    storyIntro:
      "Pas un récit marketing. Seize ans d'apprentissage, point par point, dans de vrais ateliers, avec de vrais clients.",
    beats: [
      { year: "2008", title: "Premiers ciseaux", body: "Alex débute comme apprenti tailleur dans un atelier classique à Bruxelles. Trois années de boutons, de doublures et de revers — avant d'être autorisé à tracer une seule ligne sur un patron personnel." },
      { year: "2012", title: "Premier costume sur mesure", body: "Le premier costume tracé sur son propre patron, pour un client à Louvain. La coupe est juste. La décision est prise : sur mesure uniquement, jamais de prêt-à-porter." },
      { year: "2016", title: "Atelier à Louvain", body: "Un espace entre la Naamsestraat et Sint-Pieter. Les livres de tissus de Loro Piana, Dormeuil et Scabal prennent place sur la table de coupe." },
      { year: "2020", title: "Costume de mariage sur mesure", body: "Une ligne dédiée aux mariés — et à leurs témoins — est lancée. Aujourd'hui : une quarantaine de costumes de mariage par an." },
      { year: "2024", title: "Des centaines de clients", body: "Des clients d'Anvers, de Malines, de Hasselt et de Bruxelles trouvent leur chemin vers Louvain. Pour ceux qui ne peuvent pas, Alex se déplace." },
      { year: "Aujourd'hui", title: "La prochaine mesure est la vôtre", body: "Un client par consultation. Un costume par patron. Et toujours le même tailleur — du premier mètre ruban au dernier bouton." },
    ],
    mvTitle: "Mission & Vision",
    mvIntro: "Deux phrases qui guident chaque décision dans l'atelier.",
    mission: {
      eyebrow: "Mission",
      title: "Un client, un costume, un tailleur.",
      body:
        "Un costume sur mesure doit être personnel — pas seulement dans la coupe, mais dans chaque conversation qui le précède. C'est pourquoi il n'y a pas d'équipe de vente. Vous parlez directement au tailleur qui coudra votre costume.",
    },
    vision: {
      eyebrow: "Vision",
      title: "Un sur-mesure qui traverse le temps.",
      body:
        "Un costume sur mesure n'est pas un objet de mode. C'est une pièce d'artisanat qui tombe encore parfaitement dix ou vingt ans plus tard — parce que le patron, le tissu et le travail à la main ont été pensés pour cela.",
    },
    valuesTitle: "Quatre ancrages",
    values: [
      { title: "Tissu", body: "Uniquement des manufactures italiennes et anglaises — Loro Piana, Dormeuil, Scabal." },
      { title: "Coupe", body: "Plus de 30 mesures, trois essayages minimum, un patron unique." },
      { title: "Temps", body: "Huit à douze semaines. Le costume prend le temps qu'il faut." },
      { title: "Confiance", body: "Un tailleur du début à la fin. Sans intermédiaire." },
    ],
    finalTitle: "Venez à l'atelier.",
    finalBody:
      "Une première consultation dure 60 minutes et n'engage à rien. Pas un argumentaire — une rencontre avec le tailleur et les tissus.",
  },
};

const valueIcons = [Spool, Tape, Needle, ButtonIcon];

const About = () => {
  const { pathname } = useLocation();
  const locale: Locale =
    pathname === "/over-ons" ? "nl" : pathname === "/a-propos" ? "fr" : "en";
  const c = copy[locale];
  const { openBooking } = useBooking();
  const url = `${BASE_URL}${c.path}`;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alex Nass",
    jobTitle: locale === "fr" ? "Tailleur sur mesure" : locale === "nl" ? "Kleermaker" : "Bespoke Tailor",
    worksFor: { "@type": "LocalBusiness", name: "Alex Nass" },
    address: { "@type": "PostalAddress", addressLocality: "Leuven", addressCountry: "BE" },
    url,
  };
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alex Nass",
    image: `${BASE_URL}${editorialHero}`,
    address: { "@type": "PostalAddress", addressLocality: "Leuven", addressRegion: "Vlaams-Brabant", addressCountry: "BE" },
    areaServed: ["Leuven", "Brussel", "Antwerpen", "Mechelen", "Hasselt"],
    url,
  };

  return (
    <>
      <Helmet>
        <html lang={locale} />
        <title>{c.title}</title>
        <meta name="description" content={c.meta} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={c.title} />
        <meta property="og:description" content={c.meta} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <link rel="alternate" hrefLang="nl-BE" href={`${BASE_URL}/over-ons`} />
        <link rel="alternate" hrefLang="fr-BE" href={`${BASE_URL}/a-propos`} />
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}/about`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/about`} />
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>

      <AnnouncementBar />
      <Navbar />
      <AtelierBackdrop />

      <main className="relative text-foreground">
        {/* HERO */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 0.18, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0 -z-0"
            >
              <img
                src={editorialHero}
                alt=""
                className="w-full h-full object-cover"
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
            </motion.div>

            <div className="relative max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[11px] tracking-[0.4em] uppercase text-gold font-body mb-7"
              >
                {c.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.01em] mb-8"
              >
                {c.h1}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="font-body text-base md:text-lg text-muted-foreground leading-[1.85] mb-10 max-w-2xl"
              >
                {c.lede}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
              >
                <Button variant="hero" size="lg" onClick={() => openBooking("showroom")}>
                  {c.ctaPrimary}
                </Button>
                <a
                  href="#story"
                  className="text-[11px] tracking-[0.3em] uppercase text-foreground font-body font-medium border-b border-foreground/40 pb-1 hover:border-gold transition-colors"
                >
                  {c.ctaSecondary}
                </a>
              </motion.div>

              {/* Floating scissors animation accent */}
              <motion.div
                aria-hidden
                initial={{ rotate: -8 }}
                animate={{ rotate: [-8, 4, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:block absolute -right-12 top-4 text-gold/40"
              >
                <Scissors className="w-24 h-24" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* STORY TIMELINE */}
        <section id="story" className="py-section">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
              <p className="text-[11px] tracking-[0.4em] uppercase text-gold font-body mb-5">
                {locale === "nl" ? "Het verhaal" : locale === "fr" ? "L'histoire" : "The story"}
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-light leading-[1.1] mb-6">
                {c.storyTitle}
              </h2>
              <p className="font-body text-muted-foreground leading-[1.85]">{c.storyIntro}</p>
            </div>
            <StoryTimeline beats={c.beats} />
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-section bg-card/60 backdrop-blur-sm border-y border-border">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[11px] tracking-[0.4em] uppercase text-gold font-body mb-5">
                {c.mvTitle}
              </p>
              <p className="font-body text-muted-foreground leading-[1.85]">{c.mvIntro}</p>
            </div>
            <MissionVision mission={c.mission} vision={c.vision} />
          </div>
        </section>

        {/* VALUES */}
        <section className="py-section">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-16">
              {c.valuesTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
              {c.values.map((v, i) => {
                const Icon = valueIcons[i % valueIcons.length];
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="w-10 h-10 text-gold mx-auto mb-5" />
                    <h3 className="font-heading text-lg font-light text-foreground mb-3">
                      {v.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-[1.8]">
                      {v.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS (moved from homepage) */}
        <Testimonials />

        {/* FABRIC PARTNERS (moved from homepage) */}
        <FabricPartners />

        {/* FINAL CTA */}
        <section className="py-section">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              {c.finalTitle}
            </h2>
            <p className="font-body text-muted-foreground leading-[1.85] mb-10">
              {c.finalBody}
            </p>
            <Button variant="hero" size="lg" onClick={() => openBooking("showroom")}>
              {c.ctaPrimary}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
