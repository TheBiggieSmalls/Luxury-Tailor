import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  legalDocs,
  legalRouteByLang,
  legalTabLabels,
  type LegalDocId,
  type LegalLang,
} from "@/data/legal";

const SITE = "https://bespoke-canvas-charm.lovable.app";

const Legal = () => {
  const { language } = useLanguage();
  const lang = (language as LegalLang) ?? "en";
  const [active, setActive] = useState<LegalDocId>("privacy");

  const docs = legalDocs[lang];
  const tabs = legalTabLabels[lang];
  const doc = docs[active];

  const canonical = SITE + legalRouteByLang[lang];

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{`${doc.title} — Alex Nass`}</title>
        <meta name="description" content={`${doc.title} — Alex Nass bespoke tailoring, Leuven, Belgium.`} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={canonical} />
        {(["en", "nl", "fr"] as LegalLang[]).map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={SITE + legalRouteByLang[l]} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={SITE + legalRouteByLang.en} />
      </Helmet>

      <Navbar />

      <main className="pt-40 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-6 max-w-3xl">
          <header className="mb-12 text-center">
            <p className="text-eyebrow mb-4">{doc.updated}</p>
            <h1 className="text-display">{doc.title}</h1>
          </header>

          {/* Tab selector */}
          <div
            role="tablist"
            aria-label="Legal documents"
            className="flex flex-wrap justify-center gap-1 mb-14 border border-border/60 p-1 bg-card/40 w-fit mx-auto"
          >
            {(Object.keys(tabs) as LegalDocId[]).map((id) => {
              const selected = id === active;
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(id)}
                  className={`px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase font-body font-medium transition-colors ${
                    selected
                      ? "bg-foreground text-background"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {tabs[id]}
                </button>
              );
            })}
          </div>

          {/* Document body */}
          <article className="space-y-10">
            {doc.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-heading text-2xl font-light text-foreground mb-4 tracking-tight">
                  {s.heading}
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.85] text-foreground/75 font-body">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Legal;
