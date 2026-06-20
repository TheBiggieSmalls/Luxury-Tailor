import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import SocialIcons from "@/components/SocialIcons";
import { legalRouteByLang, legalNavLabel } from "@/data/legal";

const Footer = () => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-foreground text-cream relative">
      {/* Decorative separator: framing the footer apart from preceding dark sections */}
      <div className="absolute -top-px left-0 right-0 flex items-center justify-center pointer-events-none">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-gold/40 max-w-[40%]" />
        <div className="px-5">
          <span className="block w-2 h-2 rotate-45 bg-gold/70" aria-hidden />
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/40 to-gold/40 max-w-[40%]" />
      </div>
      <div className="container mx-auto px-6">

        <div className="py-20 md:py-28 grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-heading text-2xl font-light text-cream tracking-[0.05em]">Alex Nass</h4>
            <p className="text-sm text-cream/50 leading-[1.9] font-body max-w-xs">
              {t("footer.desc")}
            </p>
            <SocialIcons
              className="text-cream/40 hover:text-cream"
              links={[
                { label: "Instagram", href: "https://instagram.com/alexnass" },
                { label: "LinkedIn", href: "https://linkedin.com/company/alexnass" },
                { label: "Facebook", href: "https://facebook.com/alexnass" },
                { label: "WhatsApp", href: "https://wa.me/32000000000" },
              ]}
            />
          </div>

          {/* Services */}
          <div className="md:col-span-2 md:col-start-6 space-y-5">
            <h5 className="text-[10px] tracking-[0.4em] uppercase text-cream/40 font-body font-medium">{t("footer.services")}</h5>
            <ul className="space-y-3 text-sm text-cream/60 font-body">
              <li>
                <a
                  href={
                    language === "nl" ? "/trouwpak-op-maat" :
                    language === "fr" ? "/costume-mariage-sur-mesure" :
                    "/custom-wedding-suits"
                  }
                  className="hover:text-cream transition-colors"
                >
                  {language === "nl" ? "Trouwpak op maat" : language === "fr" ? "Costume de mariage" : "Wedding Suits"}
                </a>
              </li>
              <li><a href="#collection" className="hover:text-cream transition-colors">{t("footer.business_suits")}</a></li>
              <li><a href="#collection" className="hover:text-cream transition-colors">{t("footer.tuxedos")}</a></li>
              <li><Link to="/hemden-op-maat" className="hover:text-cream transition-colors">{language === "fr" ? "Chemise sur mesure" : language === "en" ? "Custom Shirts" : "Hemd op maat"}</Link></li>
              <li><Link to="/zakelijk" className="hover:text-cream transition-colors">{language === "fr" ? "Entreprises" : language === "en" ? "Business" : "Zakelijk"}</Link></li>
              <li><Link to="/lidmaatschap" className="hover:text-cream transition-colors">{language === "fr" ? "Adhésion" : language === "en" ? "Membership" : "Lidmaatschap"}</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div className="md:col-span-2 space-y-5">
            <h5 className="text-[10px] tracking-[0.4em] uppercase text-cream/40 font-body font-medium">{t("footer.information")}</h5>
            <ul className="space-y-3 text-sm text-cream/60 font-body">
              <li><a href="#process" className="hover:text-cream transition-colors">{t("footer.our_process")}</a></li>
              <li><a href="#pricing" className="hover:text-cream transition-colors">{t("footer.pricing")}</a></li>
              <li>
                <a
                  href={language === "nl" ? "/over-ons" : language === "fr" ? "/a-propos" : "/about"}
                  className="hover:text-cream transition-colors"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li><a href="#faq" className="hover:text-cream transition-colors">{t("footer.faq")}</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 md:col-start-10 space-y-5">
            <h5 className="text-[10px] tracking-[0.4em] uppercase text-cream/40 font-body font-medium">{t("newsletter.tag")}</h5>
            {subscribed ? (
              <p className="text-sm text-cream font-body">{t("newsletter.thanks")}</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("newsletter.placeholder")}
                  className="w-full bg-transparent border-b border-cream/20 py-3 text-sm font-body text-cream placeholder:text-cream/30 focus:outline-none focus:border-cream/60 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="text-[10px] tracking-[0.3em] uppercase text-cream font-body font-medium hover:text-gold transition-colors"
                >
                  {t("newsletter.cta")} →
                </button>
              </form>
            )}
            <p className="text-[10px] text-cream/30 font-body">{t("newsletter.privacy")}</p>
          </div>
        </div>

        {/* Service area */}
        <div className="py-6 border-t border-cream/10">
          <p className="text-[10px] text-cream/40 tracking-[0.2em] uppercase font-body mb-2">{t("footer.area")}</p>
          <p className="text-xs text-cream/50 font-body leading-[1.7]">{t("footer.area_desc")}</p>
          <p className="text-[10px] text-cream/30 font-body mt-3 tracking-[0.05em]">
            KBO / BCE: BE 0000.000.000 · BTW / TVA: BE 0000.000.000
          </p>
        </div>

        {/* Bottom */}
        <div className="py-8 border-t border-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[10px] text-cream/30 tracking-[0.2em] font-body">
            © 2026 Alex Nass. {t("footer.rights")}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              to={legalRouteByLang[language]}
              className="text-[10px] text-cream/40 font-body tracking-[0.15em] uppercase hover:text-cream transition-colors"
            >
              {legalNavLabel[language]}
            </Link>
            <Link
              to="/fr/binnenkort"
              className="text-[10px] text-cream/40 font-body tracking-[0.15em] uppercase hover:text-cream transition-colors"
            >
              FR
            </Link>
            <a href="mailto:info@maisondael.be" className="text-[10px] text-cream/40 font-body tracking-[0.15em] hover:text-cream transition-colors">
              info@maisondael.be
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
