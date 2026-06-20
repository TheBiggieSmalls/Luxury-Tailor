import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { Scissors, Sparkles, Award, Ruler } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/BookingContext";
import shopShirts from "@/assets/shop-shirts.jpg";
import shopPolos from "@/assets/shop-polos.jpg";
import shopBowties from "@/assets/shop-bowties.jpg";
import shopCoats from "@/assets/shop-coats.jpg";

type ProductSlug = "overhemden" | "polos" | "vlinderdassen" | "overjassen";

interface Product {
  slug: ProductSlug;
  name: string;
  price: string;
  img: string;
  description: string;
  highlights: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; text: string }[];
  fabricStory: string;
  ctaType: "configurator" | "booking";
}

const PRODUCTS: Record<ProductSlug, Product> = {
  overhemden: {
    slug: "overhemden",
    name: "Overhemden op Maat",
    price: "vanaf € 189",
    img: shopShirts,
    description:
      "Volledig handgemaakt in onze ateliers met klassieke kraagconstructie en franse zijnaden. Gemaakt van Italiaanse two-ply katoenen geweven door Albini en Thomas Mason. Onmisbaar voor zakelijke meetings, ceremonies en de meest verfijnde casual momenten.",
    highlights: [
      { icon: Scissors, text: "Met de hand gesneden patroon — uniek per klant" },
      { icon: Sparkles, text: "Mother-of-pearl knopen, met de hand aangezet" },
      { icon: Award, text: "Wisselbare boorden en manchetten op aanvraag" },
    ],
    fabricStory:
      "We werken uitsluitend met Italiaanse weverijen die al generaties lang katoen produceren met een minimum van 140 garens. De zachte twill en knapperige poplin behouden hun structuur ook na honderden wasbeurten.",
    ctaType: "configurator",
  },
  polos: {
    slug: "polos",
    name: "Polo's",
    price: "vanaf € 149",
    img: shopPolos,
    description:
      "Een herinterpretatie van het klassieke polo-silhouet met een verfijnde kraagstructuur en exacte mouwlengtes. Geweven uit Italiaans piqué en zijde-katoen jersey. Perfect voor smart-casual diners, jachtweekends en zomerse ontvangsten.",
    highlights: [
      { icon: Scissors, text: "Vaste kraag die zijn vorm behoudt" },
      { icon: Sparkles, text: "Piqué en jersey met natuurlijke stretch" },
      { icon: Award, text: "Persoonlijke pasvorm — slim, regular of relaxed" },
    ],
    fabricStory:
      "Onze piqué komt uit Biella, waar de katoengarens worden gewassen in zacht alpenwater — een proces dat de stof zijn zijdezachte hand geeft. De jersey-versie is gebreid met een fijne Mako-katoen die ademend en kleurvast blijft.",
    ctaType: "booking",
  },
  vlinderdassen: {
    slug: "vlinderdassen",
    name: "Vlinderdassen",
    price: "vanaf € 79",
    img: shopBowties,
    description:
      "Met de hand geknoopt en gevouwen uit Italiaanse jacquard-zijde, met een zelf-bindbare structuur voor de echte liefhebber. Verkrijgbaar in tijdloze patronen en seizoenskleuren. Onmisbaar voor smokings, bruiloften en galadiners.",
    highlights: [
      { icon: Scissors, text: "Volledig met de hand geknoopt" },
      { icon: Sparkles, text: "100% Italiaanse jacquard-zijde" },
      { icon: Award, text: "Verstelbare halsband — één maat, perfect pas" },
    ],
    fabricStory:
      "De zijde komt uit Como, het hart van de Italiaanse zijdeproductie. Elk patroon wordt geweven op antieke jacquardgetouwen waarvan sommige meer dan honderd jaar oud zijn — een techniek die de diepte van de kleuren en de fijne lijntekening behoudt.",
    ctaType: "booking",
  },
  overjassen: {
    slug: "overjassen",
    name: "Overjassen",
    price: "vanaf € 490",
    img: shopCoats,
    description:
      "Volledig gevoerde overjassen met handgenaaide kraag en raglan- of klassieke schoudernaad. Vervaardigd uit Britse en Italiaanse wol- en kasjmiermengsels. Voor wintermeetings, internationale reizen en avondontvangsten.",
    highlights: [
      { icon: Scissors, text: "Handgenaaide kraag en revers" },
      { icon: Sparkles, text: "Wol-kasjmier mengsels van Loro Piana en Fox Brothers" },
      { icon: Award, text: "Bemo-pasvorm — slank silhouet over een pak" },
    ],
    fabricStory:
      "Onze winterwol komt uit Yorkshire en Biella. De kasjmier wordt gewonnen uit de zachte onderlaag van geiten in de Mongoolse hooglanden en wordt vervolgens in Italië gesponnen tot een fijne, isolerende draad die warm en licht tegelijk is.",
    ctaType: "booking",
  },
};

const RELATED: Record<ProductSlug, ProductSlug[]> = {
  overhemden: ["polos", "vlinderdassen"],
  polos: ["overhemden", "overjassen"],
  vlinderdassen: ["overhemden", "overjassen"],
  overjassen: ["overhemden", "polos"],
};

const ShopProduct = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openBooking } = useBooking();

  const product = slug && (PRODUCTS as Record<string, Product>)[slug];
  if (!product) return <Navigate to="/" replace />;

  const handleCta = () => {
    if (product.ctaType === "booking") {
      openBooking({ occasion: "personal", notes: `Geïnteresseerd in: ${product.name}` });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${product.name} | Alex Nass`}</title>
        <meta name="description" content={product.description.split(".")[0]} />
      </Helmet>

      <AnnouncementBar />
      <Navbar />

      <main className="pt-[110px]">
        {/* Hero */}
        <section className="container mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="aspect-[4/5] overflow-hidden bg-card">
            <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="md:sticky md:top-32">
            <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">Collectie</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[-0.02em] mb-4">
              {product.name}
            </h1>
            <p className="font-heading text-2xl text-foreground/60 mb-8">{product.price}</p>

            <p className="text-foreground/75 font-body leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Highlights */}
            <div className="border-t border-border pt-8 mb-10">
              <p className="text-[10px] tracking-[0.4em] uppercase text-gold font-body font-medium mb-6">
                Wat maakt dit bijzonder
              </p>
              <ul className="space-y-4">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <h.icon className="w-4 h-4 text-foreground/70 mt-1 shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-foreground/80 font-body leading-relaxed">{h.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sizing note */}
            <div className="flex items-start gap-3 bg-muted/40 border border-border p-5 mb-8">
              <Ruler className="w-4 h-4 text-foreground/70 mt-0.5 shrink-0" strokeWidth={1.5} />
              <p className="text-sm text-foreground/80 font-body leading-relaxed">
                Volledig op maat — we nemen uw maten tijdens de consultatie.
              </p>
            </div>

            {/* CTA */}
            {product.ctaType === "configurator" ? (
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/hemden-op-maat">Configureer uw overhemd →</Link>
              </Button>
            ) : (
              <Button variant="hero" size="lg" onClick={handleCta} className="w-full sm:w-auto">
                Plan een consultatie →
              </Button>
            )}
          </div>
        </section>

        {/* Fabric story */}
        <section className="bg-card py-20 md:py-28">
          <div className="container mx-auto px-6 max-w-3xl">
            <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">Het verhaal van de stof</p>
            <p className="font-heading text-2xl md:text-3xl font-light text-foreground leading-snug tracking-[-0.01em]">
              {product.fabricStory}
            </p>
          </div>
        </section>

        {/* Related products */}
        <section className="container mx-auto px-6 py-20 md:py-28">
          <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-10">Ontdek ook</p>
          <div className="grid sm:grid-cols-2 gap-8">
            {RELATED[product.slug].map((relSlug) => {
              const rel = PRODUCTS[relSlug];
              return (
                <Link
                  key={rel.slug}
                  to={`/shop/${rel.slug}`}
                  className="group block"
                >
                  <div className="aspect-[4/5] overflow-hidden mb-6 bg-card">
                    <img
                      src={rel.img}
                      alt={rel.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-heading text-xl md:text-2xl font-light text-foreground group-hover:text-espresso-light transition-colors tracking-[-0.01em]">
                      {rel.name}
                    </h3>
                    <span className="font-heading text-lg text-foreground/50">{rel.price}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShopProduct;
