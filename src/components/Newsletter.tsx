import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const Newsletter = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-28 border-y border-border">
      <div className="container mx-auto px-6">
        <div data-reveal className="max-w-xl mx-auto text-center space-y-6">
          <p className="text-[11px] tracking-[0.4em] uppercase text-taupe font-body">
            {t("newsletter.tag")}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground leading-[1.1]">
            {t("newsletter.title")}
          </h2>
          <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-md mx-auto">
            {t("newsletter.desc")}
          </p>

          {submitted ? (
            <p className="font-heading text-xl text-gold italic">{t("newsletter.thanks")}</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("newsletter.placeholder")}
                className="flex-1 px-5 py-3 bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold-muted transition-colors"
              />
              <Button variant="hero" size="lg" type="submit" className="px-8">
                {t("newsletter.cta")}
              </Button>
            </form>
          )}

          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 font-body">
            {t("newsletter.privacy")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
