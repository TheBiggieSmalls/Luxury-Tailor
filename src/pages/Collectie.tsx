import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Scissors, Sparkles, Award } from "lucide-react";

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
import ProductModal from "@/components/ProductModal";

import shopShirts from "@/assets/shop-shirts.jpg";
import shopPolos from "@/assets/shop-polos.jpg";
import shopBowties from "@/assets/shop-bowties.jpg";
import shopCoats from "@/assets/shop-coats.jpg";

const BASE = "https://bespoke-canvas-charm.lovable.app";

type Slug = "overhemden" | "polos" | "vlinderdassen" | "overjassen";
type Kind = "maat" | "direct";

interface Product {
  slug: Slug;
  name: string;
  price: string;
  img: string;
  fabricStory: string;
  bullets: string[];
  scarcity: string;
  kind: Kind;
  cta: "configurator" | "booking" | "order" | "order+booking";
  mailtoSubject?: string;
}

const products: Product[] = [
  {
    slug: "overhemden",
    name: "Overhemden op maat",
    price: "vanaf €189",
    img: shopShirts,
    fabricStory:
      "Twee-draads Italiaans katoen van Albini en Thomas Mason, geweven in Biella met meer dan 140 garens. De stof behoudt zijn structuur na honderden wasbeurten en wordt zijdezacht met de tijd. We kozen voor poplin en twill omdat ze comfort, glans en duurzaamheid in zich verenigen.",
    bullets: [
      "Met de hand gesneden patroon — uniek per klant",
      "Mother-of-pearl knopen, met de hand aangezet",
      "Franse zijnaden en wisselbare boorden op aanvraag",
    ],
    scarcity: "60+ uur vakmanschap per stuk",
    kind: "maat",
    cta: "configurator",
  },
  {
    slug: "polos",
    name: "Polo's op maat",
    price: "vanaf €149",
    img: shopPolos,
    fabricStory:
      "Italiaans piqué uit Biella, gewassen in zacht alpenwater — een proces dat de katoengarens hun karakteristieke zijdezachte hand geeft. Voor de jersey-versie kozen we Mako-katoen omwille van zijn fijne breisel, ademend karakter en duurzame kleurvastheid.",
    bullets: [
      "Vaste kraag die zijn vorm behoudt",
      "Piqué en jersey met natuurlijke stretch",
      "Persoonlijke pasvorm — slim, regular of relaxed",
    ],
    scarcity: "Seizoenscollectie — beperkte oplage",
    kind: "direct",
    cta: "order+booking",
    mailtoSubject: "Bestelling Polo",
  },
  {
    slug: "vlinderdassen",
    name: "Vlinderdassen",
    price: "vanaf €79",
    img: shopBowties,
    fabricStory:
      "Italiaanse jacquard-zijde uit Como, geweven op antieke jacquardgetouwen — sommige meer dan honderd jaar oud. Deze techniek geeft de kleuren hun diepte en de patronen hun fijne lijntekening. Elke vlinderdas wordt met de hand geknoopt en gevouwen.",
    bullets: [
      "Volledig met de hand geknoopt",
      "100% Italiaanse jacquard-zijde",
      "Verstelbare halsband — één maat, perfect pas",
    ],
    scarcity: "Handgebonden · Beperkte collectie",
    kind: "direct",
    cta: "order",
    mailtoSubject: "Bestelling Vlinderdas",
  },
  {
    slug: "overjassen",
    name: "Overjassen op maat",
    price: "vanaf €490",
    img: shopCoats,
    fabricStory:
      "Wol uit Yorkshire en Biella, gemengd met kasjmier uit de Mongoolse hooglanden. De onderlaag van geitenwol wordt in Italië gesponnen tot een fijne, isolerende draad die warm en licht tegelijk is — perfect voor wintermeetings en internationale reizen.",
    bullets: [
      "Handgenaaide kraag en revers",
      "Wol-kasjmier mengsels van Loro Piana en Fox Brothers",
      "Slank silhouet dat soepel over een pak valt",
    ],
    scarcity: "Op bestelling · 6–8 weken levertijd",
    kind: "maat",
    cta: "booking",
  },
];

type Filter = "all" | "maat" | "direct";

const Collectie = () => {
  const { openBooking } = useBooking();
  const url = `${BASE}/collectie`;
  const [filter, setFilter] = useState<Filter>("all");
  const [modalProduct, setModalProduct] = useState<{ img: string; title: string; price: string } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openPurchase = (p: Product) => {
    setModalProduct({ img: p.img, title: p.name, price: p.price });
    setModalOpen(true);
  };

  const visible = products.filter((p) =>
    filter === "all" ? true : filter === "maat" ? p.kind === "maat" : p.kind === "direct"
  );

  return (
    <>
      <Helmet>
        <html lang="nl" />
        <title>Collectie — Overhemden & Accessoires | Alex Nass</title>
        <meta
          name="description"
          content="Ontdek de Alex Nass collectie: overhemden op maat, polo's, zijden vlinderdassen en overjassen. Handgemaakt vakmanschap, direct te bestellen of op maat gemaakt."
        />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="nl-BE" href={`${BASE}/collectie`} />
        <link rel="alternate" hrefLang="x-default" href={url} />
        <meta property="og:title" content="De Collectie | Alex Nass" />
        <meta property="og:description" content="Volledige collectie: handgemaakte overhemden, polo's, vlinderdassen en overjassen." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <AnnouncementBar />
      <Navbar />

      <main className="bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center pt-32 pb-16 md:pb-20">
          <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">— Collectie —</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] tracking-[-0.02em]">
            Stuk voor stuk verfijnd.
          </h1>
          <p className="mt-8 font-body text-foreground/70 leading-[1.9] max-w-xl mx-auto">
            Geselecteerde stukken uit het atelier — op maat gemaakt of direct te bestellen.
          </p>

          {/* Filter tabs */}
          <div className="mt-10 flex items-center justify-center gap-2 text-[10px] tracking-[0.3em] uppercase font-body">
            {([
              { id: "all", label: "Alles" },
              { id: "maat", label: "Op maat" },
              { id: "direct", label: "Direct te bestellen" },
            ] as { id: Filter; label: string }[]).map((tab, i) => (
              <div key={tab.id} className="flex items-center gap-2">
                {i > 0 && <span className="text-foreground/30">·</span>}
                <button
                  onClick={() => setFilter(tab.id)}
                  className={`pb-1 border-b transition-colors ${
                    filter === tab.id
                      ? "border-gold text-foreground"
                      : "border-transparent text-foreground/50 hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              </div>
            ))}
          </div>
        </div>

        {visible.map((p, idx) => {
          const reverse = idx % 2 === 1;
          const bg = idx % 2 === 0 ? "bg-background" : "bg-card";
          return (
            <section key={p.slug} id={p.slug} className={`${bg} py-section`}>
              <div className="container mx-auto px-6">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
                  <div className={`aspect-[4/5] overflow-hidden bg-card ${reverse ? "lg:[direction:ltr]" : ""}`}>
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className={reverse ? "lg:[direction:ltr]" : ""}>
                    <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">{`0${idx + 1} · Collectie`}</p>
                    <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground leading-[1.1] tracking-[-0.01em] mb-4">
                      {p.name}
                    </h2>
                    <p className="font-heading text-2xl text-foreground/60 mb-2">{p.price}</p>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-body font-medium mb-8">
                      {p.scarcity}
                    </p>

                    <p className="font-body text-foreground/80 leading-[1.9] mb-10">{p.fabricStory}</p>

                    <div className="border-t border-border pt-6 mb-6">
                      <p className="text-[10px] tracking-[0.4em] uppercase text-gold font-body font-medium mb-5">
                        Wat maakt dit bijzonder
                      </p>
                      <ul className="space-y-3">
                        {p.bullets.map((b, i) => {
                          const Icon = [Scissors, Sparkles, Award][i] ?? Award;
                          return (
                            <li key={i} className="flex items-start gap-3">
                              <Icon className="w-4 h-4 text-foreground/70 mt-1 shrink-0" strokeWidth={1.5} />
                              <span className="text-sm text-foreground/80 font-body leading-[1.8]">{b}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <Accordion type="single" collapsible className="mb-8">
                      <AccordionItem value="material" className="border-border">
                        <AccordionTrigger className="text-[11px] tracking-[0.3em] uppercase text-foreground/80 font-body font-medium py-4 hover:no-underline">
                          Meer over het materiaal
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground font-body leading-[1.9] pb-4">
                          [Materiaalverhaal wordt aangevuld — herkomst, weverij, verzorging]
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <p className="text-xs font-body italic text-foreground/60 leading-[1.7] mb-8">
                      Op maat gemaakt — maten worden opgenomen tijdens uw consultatie.
                    </p>

                    {/* CTAs */}
                    {p.cta === "configurator" && (
                      <Button
                        size="lg"
                        className="bg-gold text-espresso hover:bg-gold/90 rounded-none tracking-[0.22em] text-[10px] uppercase px-8 py-6"
                        asChild
                      >
                        <Link to="/hemden-op-maat">Configureer uw overhemd →</Link>
                      </Button>
                    )}
                    {p.cta === "booking" && (
                      <Button
                        variant="hero"
                        size="lg"
                        onClick={() =>
                          openBooking({ occasion: "personal", notes: `Geïnteresseerd in: ${p.name}` })
                        }
                      >
                        Plan een consultatie →
                      </Button>
                    )}
                    {p.cta === "order" && (
                      <Button
                        size="lg"
                        className="bg-espresso text-cream hover:bg-espresso/90 rounded-none tracking-[0.22em] text-[10px] uppercase px-8 py-6"
                        onClick={() => openPurchase(p)}
                      >
                        Bestel nu →
                      </Button>
                    )}
                    {p.cta === "order+booking" && (
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          size="lg"
                          className="bg-espresso text-cream hover:bg-espresso/90 rounded-none tracking-[0.22em] text-[10px] uppercase px-8 py-6"
                          onClick={() => openPurchase(p)}
                        >
                          Bestel nu →
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="rounded-none tracking-[0.22em] text-[10px] uppercase px-8 py-6 border-foreground/30"
                          onClick={() =>
                            openBooking({ occasion: "personal", notes: `Geïnteresseerd in: ${p.name}` })
                          }
                        >
                          Plan consultatie →
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* CROSS-SELL */}
        <section className="bg-espresso text-cream py-section">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <p className="text-[10px] tracking-[0.5em] uppercase text-gold font-body mb-5">— Combineer —</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light leading-tight mb-6">
              Combineer met een maatpak.
            </h2>
            <p className="text-cream/70 font-body leading-[1.9] max-w-xl mx-auto mb-10">
              Elk accessoire is ontworpen om naadloos samen te gaan met uw maatpak.
            </p>
            <Button
              size="sm"
              className="px-10 py-6 bg-gold text-espresso hover:bg-gold/90 rounded-none tracking-[0.22em] text-[10px] uppercase"
              asChild
            >
              <Link to="/maatpak">Ontdek onze maatpakken →</Link>
            </Button>
          </div>
        </section>
      </main>

      <ProductModal open={modalOpen} onOpenChange={setModalOpen} product={modalProduct} />

      <Footer />
    </>
  );
};

export default Collectie;
