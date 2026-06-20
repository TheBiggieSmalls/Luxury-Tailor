import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

interface Props {
  title?: string;
}

const COPY = {
  nl: {
    eyebrow: "Binnenkort beschikbaar",
    title: "Deze pagina is in ontwikkeling",
    body: "We werken aan iets moois. Kom binnenkort terug — of maak nu reeds een afspraak voor een persoonlijke consultatie.",
    cta: "Terug naar home",
    metaTitle: "Binnenkort beschikbaar | Alex Nass",
    metaDesc: "Deze pagina is in ontwikkeling. Maak ondertussen een afspraak voor een persoonlijke consultatie bij kleermaker Alex Nass.",
  },
  fr: {
    eyebrow: "Bientôt disponible",
    title: "Cette page est en cours de préparation",
    body: "Nous travaillons sur quelque chose de beau. Revenez bientôt — ou prenez dès maintenant rendez-vous pour une consultation personnelle.",
    cta: "Retour à l'accueil",
    metaTitle: "Bientôt disponible | Alex Nass",
    metaDesc: "Cette page est en cours de préparation. Prenez rendez-vous pour une consultation personnelle avec le tailleur Alex Nass.",
  },
  en: {
    eyebrow: "Coming soon",
    title: "This page is in the works",
    body: "We're crafting something refined. Check back shortly — or book a personal consultation now.",
    cta: "Back to home",
    metaTitle: "Coming soon | Alex Nass",
    metaDesc: "This page is in the works. Book a personal consultation with bespoke tailor Alex Nass in the meantime.",
  },
};

const BASE = "https://bespoke-canvas-charm.lovable.app";

const ComingSoon = ({ title }: Props) => {
  const { language } = useLanguage();
  const location = useLocation();
  const c = COPY[(language as "nl" | "fr" | "en") ?? "nl"] ?? COPY.nl;
  const url = `${BASE}${location.pathname}`;
  const pageTitle = title ? `${title} | Alex Nass` : c.metaTitle;
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={c.metaDesc} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={c.metaDesc} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>
      <main className="min-h-screen flex items-center justify-center bg-background px-6 pt-32 pb-20">
        <div className="max-w-xl text-center space-y-6">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold font-body">{c.eyebrow}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-foreground leading-tight">
            {title ?? c.title}
          </h1>
          <p className="text-muted-foreground font-body leading-relaxed">{c.body}</p>
          <div className="pt-4">
            <Link
              to="/"
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-foreground font-body border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
            >
              {c.cta} →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ComingSoon;
