import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/BookingContext";
import { citiesBySlug, cities, type CitySlug } from "@/data/cities";

const BASE = "https://bespoke-canvas-charm.lovable.app";

export default function CityPage() {
  const { city } = useParams<{ city: string }>();
  const { openBooking } = useBooking();

  const data = city ? citiesBySlug[city as CitySlug] : undefined;
  if (!data) return <Navigate to="/" replace />;

  const url = `${BASE}/maatpak/${data.slug}`;
  const title = `Maatpak op maat in ${data.name} | Kleermaker Alex Nass`;
  const meta = `Maatpak en trouwpak op maat in ${data.name} door kleermaker Alex Nass. Atelier nabij Leuven, passessies aan huis in ${data.name}. Boek je consultatie.`;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Alex Nass — Kleermaker (${data.name})`,
    url,
    image: `${BASE}/og.jpg`,
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Leuven",
      addressRegion: "Vlaams-Brabant",
      addressCountry: "BE",
    },
    areaServed: { "@type": "City", name: data.name, postalCode: data.postalCode, addressCountry: "BE" },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Alex Nass", item: BASE },
      { "@type": "ListItem", position: 2, name: "Maatpak op maat", item: `${BASE}/maatpak-op-maat` },
      { "@type": "ListItem", position: 3, name: data.name, item: url },
    ],
  };

  const otherCities = cities.filter((c) => c.slug !== data.slug);

  return (
    <>
      <Helmet>
        <html lang="nl" />
        <title>{title}</title>
        <meta name="description" content={meta} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={meta} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_BE" />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <AnnouncementBar />
      <Navbar />

      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="pt-40 pb-20 md:pt-48 md:pb-28">
          <div className="container mx-auto px-6 max-w-5xl">
            <p className="text-eyebrow text-gold mb-6">Kleermaker · {data.name}</p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.01em] mb-8"
            >
              Maatpak op maat in {data.name}
            </motion.h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-[1.85] max-w-2xl mb-10">
              {data.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button variant="hero" size="lg" onClick={() => openBooking("showroom")}>
                Plan je afspraak
              </Button>
              <Button variant="outline" size="lg" onClick={() => openBooking("athome")}>
                Passessie aan huis in {data.name}
              </Button>
            </div>
          </div>
        </section>

        {/* Travel + profile */}
        <section className="py-section border-t border-border/40">
          <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-eyebrow text-gold mb-4">Vanuit Leuven</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light mb-6">Bereikbaar voor wie in {data.name} woont of werkt</h2>
              <p className="font-body text-muted-foreground leading-[1.85]">{data.travel}</p>
            </div>
            <div>
              <p className="text-eyebrow text-gold mb-4">Onze {data.name}-klanten</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light mb-6">Wie komt er bij ons langs?</h2>
              <p className="font-body text-muted-foreground leading-[1.85]">{data.profile}</p>
            </div>
          </div>
        </section>

        {/* Venues / wedding angle */}
        <section className="py-section bg-card/30">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <p className="text-eyebrow text-gold mb-4">Trouwpak in {data.name}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-8">Bruidegoms in en rond {data.name}</h2>
            <p className="font-body text-muted-foreground leading-[1.85] mb-10">{data.venues}</p>
            <Link to="/trouwpak-op-maat" className="text-eyebrow text-foreground border-b border-foreground/40 hover:border-gold transition-colors pb-1">
              Meer over trouwpakken op maat →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
              Klaar voor je maatpak?
            </h2>
            <p className="font-body text-muted-foreground mb-10">
              Eén consultatie in het atelier in Leuven, of een eerste gesprek per video — beide zijn vrijblijvend.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button variant="hero" size="lg" onClick={() => openBooking("showroom")}>
                Showroombezoek in Leuven
              </Button>
              <Button variant="outline" size="lg" onClick={() => openBooking("virtual")}>
                Eerst een videocall
              </Button>
            </div>
          </div>
        </section>

        {/* Other cities */}
        <section className="py-section border-t border-border/40">
          <div className="container mx-auto px-6 max-w-5xl">
            <p className="text-eyebrow text-gold mb-6 text-center">Ook in</p>
            <div className="flex flex-wrap justify-center gap-3">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/maatpak/${c.slug}`}
                  className="px-5 py-2 border border-border/60 rounded-full text-sm font-body hover:border-gold hover:text-gold transition-colors"
                >
                  Maatpak in {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
