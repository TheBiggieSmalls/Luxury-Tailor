import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/i18n/LanguageContext";
import { Gift, Check } from "lucide-react";

interface ClaimOfferDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ClaimOfferDialog = ({ open, onOpenChange }: ClaimOfferDialogProps) => {
  const { language } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const t = (obj: Record<string, string>) => obj[language] || obj.en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onOpenChange(false);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setSubmitted(false); }}>
      <DialogContent className="sm:max-w-[420px] max-h-[88vh] overflow-y-auto bg-background border-border p-0 gap-0 rounded-sm shadow-2xl">
        <DialogTitle className="sr-only">Claim Offer</DialogTitle>

        {/* Header — compact */}
        <div className="bg-gradient-to-br from-[hsl(38,55%,52%)] to-[hsl(36,30%,42%)] px-6 py-5 text-center">
          <Gift className="w-5 h-5 text-cream mx-auto mb-2" strokeWidth={1.5} />
          <h2 className="font-heading text-xl font-light text-cream tracking-wide leading-snug">
            {t({ en: "Claim Your Exclusive Offer", nl: "Claim Uw Exclusief Aanbod", fr: "Profitez de Votre Offre Exclusive" })}
          </h2>
          <p className="text-cream/75 text-xs mt-2 font-body max-w-xs mx-auto leading-relaxed">
            {t({
              en: "Bespoke suit + complimentary custom shirt. Limited this season.",
              nl: "Maatpak + gratis hemd op maat. Beperkt dit seizoen.",
              fr: "Costume sur mesure + chemise offerte. Disponibilité limitée.",
            })}
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-foreground/5 border border-border flex items-center justify-center mx-auto">
              <Check className="w-5 h-5 text-gold" />
            </div>
            <p className="font-heading text-lg text-foreground">
              {t({ en: "Offer Claimed!", nl: "Aanbod Geclaimd!", fr: "Offre Réclamée !" })}
            </p>
            <p className="text-xs text-muted-foreground font-body">
              {t({ en: "We'll contact you shortly.", nl: "We nemen spoedig contact met u op.", fr: "Nous vous contacterons sous peu." })}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-3">
            <div className="space-y-1.5">
              <Label className="text-[10px] tracking-[0.25em] uppercase text-taupe font-body font-medium">
                {t({ en: "Full Name", nl: "Volledige Naam", fr: "Nom Complet" })}
              </Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} required className="bg-transparent border-border rounded-sm font-body h-9" />
            </div>

            <div className="space-y-1.5">
              <Label className="text-[10px] tracking-[0.25em] uppercase text-taupe font-body font-medium">
                {t({ en: "Email", nl: "E-mail", fr: "E-mail" })}
              </Label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-transparent border-border rounded-sm font-body h-9" />
            </div>

            <Button type="submit" variant="hero" size="sm" className="w-full py-4 mt-1" disabled={!name || !email}>
              {t({ en: "Claim This Offer", nl: "Claim Dit Aanbod", fr: "Profiter de l'Offre" })}
            </Button>

            <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/60 text-center font-body pt-1">
              {t({ en: "Limited to 10 clients per month", nl: "Beperkt tot 10 klanten per maand", fr: "Limité à 10 clients par mois" })}
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ClaimOfferDialog;
