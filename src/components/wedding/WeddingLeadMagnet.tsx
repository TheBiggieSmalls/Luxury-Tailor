import { useState } from "react";
import LeadCaptureDialog from "@/components/LeadCaptureDialog";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { WeddingLocale } from "@/pages/wedding/WeddingPage";

const COPY = {
  en: {
    eyebrow: "Free Field Guide",
    title: "The Modern Groom's Style Guide",
    intro:
      "Trends, color palettes and the small decisions that hold a wedding party together — distilled into a 5-chapter guide.",
    sections: [
      {
        h: "Current wedding suit trends",
        p: "Softer silhouettes, earth tones and the return of the three-piece. What today's most-photographed grooms are choosing.",
      },
      {
        h: "Recommended color palettes",
        p: "Champagne neutrals, deep navy with chestnut undertones, terracotta for autumn — matched to season and venue light.",
      },
      {
        h: "Groomsmen styling tips",
        p: "How to coordinate without uniformity. The single-shade rule, accessory hierarchy and what to never let your groomsmen wear.",
      },
      {
        h: "Coordinating the wedding party",
        p: "A simple framework for blending groom, groomsmen, fathers and ushers into one composed visual family.",
      },
    ],
    cta: "Download Free Wedding Style Guide",
    sub: "Five chapters · 4 minutes · PDF · Sent in your language",
    dialogEyebrow: "Wedding Style Guide",
    dialogHead: "Send me the wedding style guide",
    dialogSub:
      "Add your name and email — your guide downloads instantly and we'll save it to your inbox.",
  },
  nl: {
    eyebrow: "Gratis Gids",
    title: "De Stijlgids voor de Moderne Bruidegom",
    intro:
      "Trends, kleurpaletten en de kleine beslissingen die een bruiloftsstoet bij elkaar houden — samengebracht in een gids van 5 hoofdstukken.",
    sections: [
      {
        h: "Actuele trends in trouwpakken",
        p: "Zachtere silhouetten, aardetinten en de terugkeer van het driedelig pak. Wat de meest gefotografeerde bruidegoms vandaag dragen.",
      },
      {
        h: "Aanbevolen kleurpaletten",
        p: "Champagne neutralen, diep navy met kastanje-ondertoon, terracotta voor de herfst — afgestemd op seizoen en lichtval.",
      },
      {
        h: "Stijltips voor de getuigen",
        p: "Coördineren zonder uniformiteit. De één-tint regel, hiërarchie van accessoires en wat u uw getuigen nooit moet laten dragen.",
      },
      {
        h: "De bruiloftsstoet samenbrengen",
        p: "Een eenvoudig kader om bruidegom, getuigen, vaders en ushers tot één visueel familiebeeld te smelten.",
      },
    ],
    cta: "Download Gratis Trouwgids",
    sub: "Vijf hoofdstukken · 4 minuten · PDF · In uw taal verzonden",
    dialogEyebrow: "Trouw Stijlgids",
    dialogHead: "Stuur mij de trouwstijlgids",
    dialogSub:
      "Geef uw naam en e-mail — uw gids wordt onmiddellijk gedownload en bewaard in uw inbox.",
  },
  fr: {
    eyebrow: "Guide Gratuit",
    title: "Le Guide Style du Marié Moderne",
    intro:
      "Tendances, palettes de couleurs et les petites décisions qui unifient un cortège — réunies dans un guide en 5 chapitres.",
    sections: [
      {
        h: "Tendances actuelles du costume de mariage",
        p: "Silhouettes plus souples, tons terreux et retour du trois-pièces. Ce que portent aujourd'hui les mariés les plus photographiés.",
      },
      {
        h: "Palettes de couleurs recommandées",
        p: "Neutres champagne, marine profond aux nuances châtaigne, terracotta pour l'automne — accordés à la saison et à la lumière du lieu.",
      },
      {
        h: "Conseils stylistiques pour les témoins",
        p: "Coordonner sans uniformiser. La règle d'une seule teinte, la hiérarchie des accessoires et ce qu'il ne faut jamais laisser porter à vos témoins.",
      },
      {
        h: "Harmoniser le cortège",
        p: "Un cadre simple pour fondre marié, témoins, pères et placeurs en une même famille visuelle composée.",
      },
    ],
    cta: "Télécharger le Guide Mariage",
    sub: "Cinq chapitres · 4 minutes · PDF · Envoyé dans votre langue",
    dialogEyebrow: "Guide Style Mariage",
    dialogHead: "Envoyez-moi le guide style mariage",
    dialogSub:
      "Indiquez vos coordonnées — votre guide se télécharge immédiatement et reste dans votre boîte mail.",
  },
};

const WeddingLeadMagnet = ({ locale = "nl" }: { locale?: WeddingLocale }) => {
  const ref = useScrollReveal();
  const [open, setOpen] = useState(false);
  const c = COPY[locale];

  return (
    <>
      <section className="py-24 md:py-32 bg-card">
        <div ref={ref} className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Editorial copy */}
            <div className="lg:col-span-7">
              <p className="text-[11px] tracking-[0.4em] uppercase text-gold font-body mb-6">
                {c.eyebrow}
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground leading-[1.1] tracking-[-0.01em] mb-6">
                {c.title}
              </h2>
              <p className="font-body text-base text-muted-foreground leading-[1.85] mb-12 max-w-xl">
                {c.intro}
              </p>

              <ul className="space-y-7 max-w-xl">
                {c.sections.map((s, i) => (
                  <li key={i} className="border-t border-border pt-5">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-body font-medium">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-lg md:text-xl font-light text-foreground">
                        {s.h}
                      </h3>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-[1.85] pl-10">
                      {s.p}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lead capture card */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28">
              <div
                className="relative bg-background border border-foreground/10 p-8 md:p-10 shadow-xl"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
                }}
              >
                {/* Folded-paper accent */}
                <svg
                  className="absolute -top-1 -right-1 w-20 h-14 pointer-events-none"
                  viewBox="0 0 80 56"
                  aria-hidden="true"
                >
                  <path d="M 0 0 L 80 0 L 80 48 L 40 56 L 0 48 Z" fill="hsl(var(--gold))" />
                  <text
                    x="40"
                    y="28"
                    textAnchor="middle"
                    fill="hsl(var(--espresso))"
                    fontFamily="serif"
                    fontSize="9"
                    fontStyle="italic"
                    letterSpacing="2"
                  >
                    Free
                  </text>
                </svg>

                <p className="text-[10px] tracking-[0.35em] uppercase text-taupe font-body mb-4">
                  PDF · 5 chapters
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground leading-[1.2] mb-4">
                  {c.dialogHead}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-[1.85] mb-8">
                  {c.dialogSub}
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="w-full px-7 py-4 text-[10px] tracking-[0.3em] uppercase font-body bg-foreground text-background hover:bg-espresso-light transition-colors duration-300"
                >
                  {c.cta}
                </button>
                <p className="text-[10px] tracking-wide text-foreground/45 font-body italic leading-relaxed mt-5 text-center">
                  {c.sub}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <LeadCaptureDialog
        open={open}
        onOpenChange={setOpen}
        source="wedding-guide"
        pdfUrl="/guides/alex-nass-wedding-style-guide.pdf"
        pdfFilename="Alex-Nass-Wedding-Style-Guide.pdf"
        eyebrow={{
          en: COPY.en.dialogEyebrow,
          nl: COPY.nl.dialogEyebrow,
          fr: COPY.fr.dialogEyebrow,
        }}
        headline={{
          en: COPY.en.dialogHead,
          nl: COPY.nl.dialogHead,
          fr: COPY.fr.dialogHead,
        }}
        subhead={{
          en: COPY.en.dialogSub,
          nl: COPY.nl.dialogSub,
          fr: COPY.fr.dialogSub,
        }}
      />
    </>
  );
};

export default WeddingLeadMagnet;
