import { useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

export type LeadSource = "wedding-guide" | "blog-suit-mistakes" | "newsletter";

interface LeadCaptureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source: LeadSource;
  /** Path to the PDF in /public, e.g. "/guides/alex-nass-wedding-style-guide.pdf" */
  pdfUrl: string;
  /** Filename used for the download */
  pdfFilename: string;
  /** Eyebrow / category label shown at top of dialog */
  eyebrow: { en: string; nl: string; fr: string };
  /** Headline */
  headline: { en: string; nl: string; fr: string };
  /** Subhead */
  subhead: { en: string; nl: string; fr: string };
}

const L = {
  name: { en: "Full name", nl: "Volledige naam", fr: "Nom complet" },
  email: { en: "Email", nl: "E-mail", fr: "E-mail" },
  cta: {
    en: "Download Free Guide",
    nl: "Download Gratis Gids",
    fr: "Télécharger le Guide Gratuit",
  },
  thanks: { en: "Thank you.", nl: "Dank u.", fr: "Merci." },
  thanksBody: {
    en: "Your guide is downloading now. We have also saved your details so we can share new editions with you.",
    nl: "Uw gids wordt nu gedownload. We hebben uw gegevens bewaard om u nieuwe edities te kunnen sturen.",
    fr: "Votre guide est en cours de téléchargement. Nous avons enregistré vos coordonnées pour vous envoyer les prochaines éditions.",
  },
  error: {
    en: "Something went wrong. Please try again.",
    nl: "Er ging iets mis. Probeer opnieuw.",
    fr: "Une erreur s'est produite. Veuillez réessayer.",
  },
  close: { en: "Close", nl: "Sluiten", fr: "Fermer" },
  privacy: {
    en: "We use your details only to deliver this guide and occasional editorial. Unsubscribe anytime.",
    nl: "We gebruiken uw gegevens enkel om deze gids en af en toe redactionele content te bezorgen. Steeds uitschrijfbaar.",
    fr: "Nous utilisons vos coordonnées uniquement pour vous envoyer ce guide et des éditions occasionnelles. Désinscription à tout moment.",
  },
};

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
});

const triggerDownload = (url: string, filename: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => a.remove(), 100);
};

const LeadCaptureDialog = ({
  open,
  onOpenChange,
  source,
  pdfUrl,
  pdfFilename,
  eyebrow,
  headline,
  subhead,
}: LeadCaptureDialogProps) => {
  const { language } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const tr = <K extends keyof typeof L>(k: K) => L[k][language];

  const reset = () => {
    setName("");
    setEmail("");
    setSubmitting(false);
    setDone(false);
    setErr(null);
  };

  const handleOpenChange = (v: boolean) => {
    onOpenChange(v);
    if (!v) setTimeout(reset, 250);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    const parsed = schema.safeParse({ name, email });
    if (!parsed.success) {
      setErr(L.error[language]);
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      source,
      language,
    });
    setSubmitting(false);
    if (error) {
      setErr(L.error[language]);
      return;
    }
    setDone(true);
    triggerDownload(pdfUrl, pdfFilename);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[560px] bg-background p-0 gap-0 rounded-none border-0 shadow-2xl">
        <DialogTitle className="sr-only">{headline[language]}</DialogTitle>

        <div className="relative bg-gradient-to-br from-espresso to-espresso-light text-cream px-8 md:px-10 pt-8 pb-7 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 85% 15%, hsl(var(--gold)) 0%, transparent 55%)",
            }}
          />
          <p className="relative text-[10px] tracking-[0.4em] uppercase text-gold font-body font-medium mb-4">
            {eyebrow[language]}
          </p>
          <h2 className="relative font-heading text-2xl md:text-3xl font-light leading-[1.15] tracking-[-0.01em] text-cream">
            {headline[language]}
          </h2>
          <p className="relative font-body text-sm text-cream/75 italic mt-3 max-w-md leading-relaxed">
            {subhead[language]}
          </p>
        </div>

        {!done ? (
          <form onSubmit={submit} className="px-8 md:px-10 py-8 space-y-6">
            <div>
              <label className="text-eyebrow block mb-2">{tr("name")}</label>
              <input
                className="input-underline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={120}
                required
                autoFocus
              />
            </div>
            <div>
              <label className="text-eyebrow block mb-2">{tr("email")}</label>
              <input
                type="email"
                className="input-underline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                required
              />
            </div>

            {err && (
              <p className="text-xs text-destructive font-body">{err}</p>
            )}

            <button
              type="submit"
              disabled={submitting || !name || !email}
              className={cn(
                "w-full px-7 py-4 text-[10px] tracking-[0.3em] uppercase font-body border border-foreground text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:pointer-events-none"
              )}
            >
              {tr("cta")}
            </button>

            <p className="text-[10px] tracking-wide text-foreground/45 font-body italic leading-relaxed pt-2">
              {tr("privacy")}
            </p>
          </form>
        ) : (
          <div className="px-8 md:px-10 py-12 text-center">
            <p className="text-eyebrow mb-5">— {eyebrow[language]} —</p>
            <h3 className="font-heading text-3xl font-light text-foreground">
              {tr("thanks")}
            </h3>
            <p className="font-body text-sm text-foreground/65 mt-5 max-w-sm mx-auto leading-[1.9]">
              {tr("thanksBody")}
            </p>
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="mt-8 text-[10px] tracking-[0.35em] uppercase text-foreground/60 hover:text-foreground link-underline"
            >
              {tr("close")}
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureDialog;
