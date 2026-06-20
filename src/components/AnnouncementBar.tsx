import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const MESSAGES: Record<"nl" | "fr" | "en", string[]> = {
  nl: [
    "Uitsluitend op afspraak",
    "Gratis stijlconsultatie — beperkt aantal plaatsen",
    "Trouwpakken: boek minstens 4 maanden op voorhand",
  ],
  fr: [
    "Uniquement sur rendez-vous",
    "Consultation style offerte — places limitées",
    "Costumes de mariage : réservez au moins 4 mois à l'avance",
  ],
  en: [
    "By appointment only",
    "Complimentary style consultation — limited spots",
    "Wedding suits: book at least 4 months in advance",
  ],
};

const AnnouncementBar = () => {
  const { language } = useLanguage();
  const list = MESSAGES[(language as "nl" | "fr" | "en") ?? "nl"] ?? MESSAGES.nl;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % list.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [list.length]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-foreground overflow-hidden">
      <div className="container mx-auto px-6 py-2 text-center h-[28px] flex items-center justify-center">
        <p
          key={idx}
          className="text-[10px] tracking-[0.5em] uppercase text-background font-body font-medium animate-fade-in"
        >
          {list[idx]}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
