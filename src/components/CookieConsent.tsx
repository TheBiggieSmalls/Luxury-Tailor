import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { legalRouteByLang } from "@/data/legal";

const CookieConsent = () => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem("cookies_accepted");
    if (accepted) return;

    let scrollCount = 0;
    const handleScroll = () => {
      scrollCount++;
      if (scrollCount === 1) {
        setVisible(true);
      }
      // Auto-accept after continued scrolling (3+ scroll events after showing)
      if (scrollCount > 8) {
        sessionStorage.setItem("cookies_accepted", "true");
        setVisible(false);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const accept = () => {
    sessionStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  const labels = {
    text: {
      en: "We use cookies to enhance your experience.",
      nl: "Wij gebruiken cookies om uw ervaring te verbeteren.",
      fr: "Nous utilisons des cookies pour améliorer votre expérience.",
    },
    accept: { en: "Accept", nl: "Accepteren", fr: "Accepter" },
    settings: { en: "Settings", nl: "Instellingen", fr: "Paramètres" },
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 transition-all duration-500 animate-fade-up max-w-xs">
      <div className="bg-foreground/95 backdrop-blur-sm p-5 space-y-4">
        <p className="text-[11px] tracking-[0.05em] text-background/70 font-body leading-relaxed">
          {labels.text[language]}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={accept}
            className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-background bg-background/15 hover:bg-background/25 px-4 py-2 transition-colors"
          >
            {labels.accept[language]}
          </button>
          <Link
            to={legalRouteByLang[language]}
            onClick={() => setVisible(false)}
            className="text-[10px] tracking-[0.2em] uppercase font-body text-background/50 hover:text-background/80 px-3 py-2 transition-colors"
          >
            {labels.settings[language]}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
