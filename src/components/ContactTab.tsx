import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { Calendar, Mail, Phone } from "lucide-react";

const ContactTab = () => {
  const { language } = useLanguage();
  const { openBooking } = useBooking();
  const [expanded, setExpanded] = useState(false);

  const labels = {
    book: { en: "Book Appointment", nl: "Afspraak Maken", fr: "Prendre RDV" },
    enquire: { en: "Enquire", nl: "Informeren", fr: "Renseigner" },
    call: { en: "Call Us", nl: "Bel Ons", fr: "Appelez-nous" },
  };

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex items-stretch"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Expanded panel */}
      <div
        className={`bg-foreground overflow-hidden transition-all duration-500 ease-out flex flex-col justify-center ${
          expanded ? "w-56 opacity-100" : "w-0 opacity-0"
        }`}
      >
        <div className="py-6 px-5 space-y-1 whitespace-nowrap">
          <button
            onClick={openBooking}
            className="flex items-center gap-3 w-full py-3 px-3 text-background/80 hover:text-background hover:bg-background/10 transition-colors rounded"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span className="text-[11px] tracking-[0.15em] uppercase font-body">{labels.book[language]}</span>
          </button>
          <a
            href="mailto:info@maisondael.be"
            className="flex items-center gap-3 w-full py-3 px-3 text-background/80 hover:text-background hover:bg-background/10 transition-colors rounded"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span className="text-[11px] tracking-[0.15em] uppercase font-body">{labels.enquire[language]}</span>
          </a>
          <a
            href="tel:+3225551234"
            className="flex items-center gap-3 w-full py-3 px-3 text-background/80 hover:text-background hover:bg-background/10 transition-colors rounded"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span className="text-[11px] tracking-[0.15em] uppercase font-body">{labels.call[language]}</span>
          </a>
        </div>
      </div>

      {/* Tab handle */}
      <div className="bg-foreground text-background flex items-center cursor-pointer writing-vertical">
        <span
          className="text-[10px] tracking-[0.35em] uppercase font-body font-medium px-3 py-8"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Contact
        </span>
      </div>
    </div>
  );
};

export default ContactTab;
