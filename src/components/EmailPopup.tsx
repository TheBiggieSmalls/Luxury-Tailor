import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { X } from "lucide-react";

const EmailPopup = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("md-popup-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, 120000); // 2 minutes

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("md-popup-dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(handleClose, 2500);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] max-w-[calc(100vw-2rem)] w-[380px] animate-slide-in-bottom">
      <div className="relative bg-background border border-border shadow-2xl p-7 md:p-8">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center space-y-3 py-2">
            <p className="font-heading text-xl text-foreground italic">{t("popup.thanks")}</p>
            <p className="text-xs text-muted-foreground font-body">{t("popup.thanks.desc")}</p>
          </div>
        ) : (
          <div className="space-y-4 text-left">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold font-body">
              {t("popup.tag")}
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-light text-foreground leading-[1.2]">
              {t("popup.title")}
            </h3>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              {t("popup.desc")}
            </p>
            <form onSubmit={handleSubmit} className="space-y-2 pt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("newsletter.placeholder")}
                className="w-full px-4 py-2.5 bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold-muted transition-colors"
              />
              <Button variant="hero" type="submit" className="w-full">
                {t("popup.cta")}
              </Button>
            </form>
            <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/60 font-body">
              {t("newsletter.privacy")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailPopup;
