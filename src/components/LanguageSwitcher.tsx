import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

// Only NL and FR are exposed publicly for now. FR is a "coming soon" placeholder.
const visibleLanguages: { code: Exclude<Language, "en">; label: string }[] = [
  { code: "nl", label: "NL" },
  { code: "fr", label: "FR" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  // If the active language is "en", display NL as visually-active in the toggle.
  const activeCode: "nl" | "fr" = language === "fr" ? "fr" : "nl";
  const current = visibleLanguages.find((l) => l.code === activeCode)!;
  const others = visibleLanguages.filter((l) => l.code !== activeCode);

  const handleSelect = (lang: "nl" | "fr") => {
    setLanguage(lang);
    setExpanded(false);
    if (lang === "fr") {
      navigate("/fr/binnenkort");
    }
  };

  return (
    <div
      className="relative flex items-center font-body text-xs tracking-wider"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <button
        type="button"
        className="px-2 py-1 text-foreground font-medium transition-colors"
        onClick={() => setExpanded((v) => !v)}
        aria-label={`Current language: ${current.label}`}
      >
        {current.label}
      </button>

      <div
        className={`flex items-center overflow-hidden transition-all duration-300 ease-out ${
          expanded ? "max-w-[80px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        <span className="text-muted-foreground/50 px-1">|</span>
        {others.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => handleSelect(lang.code)}
            className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
