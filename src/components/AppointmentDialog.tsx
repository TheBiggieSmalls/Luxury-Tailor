import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Gem,
  Briefcase,
  Shirt,
  PartyPopper,
  Palette,
  Users,
  MapPin,
  Home,
  Video,
  CalendarPlus,
  MessageCircle,
  Info,
  type LucideIcon,
} from "lucide-react";

export type AppointmentType = "showroom" | "athome" | "trunkshow" | "virtual";
type Location = "atelier" | "athome" | "virtual";
type PlatformId = "zoom" | "teams" | "meet";
type StepId = "platform" | "datetime" | "occasion" | "contact" | "address" | "confirm";

interface AppointmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type?: AppointmentType;
  initialOccasion?: OccasionId;
  initialNotes?: string;
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00",
];

const UNAVAILABLE_SLOTS = new Set(["10:30", "14:00", "16:30"]);

const locationOptions: { id: Location; label: string; icon: LucideIcon; blurb: string }[] = [
  { id: "atelier", label: "Atelier Brussel", icon: MapPin, blurb: "U bezoekt ons privé atelier in het hart van Brussel — Rue de Namur 48." },
  { id: "athome", label: "Bij u thuis / kantoor", icon: Home, blurb: "Wij komen met de volledige stoffencollectie naar u toe — discreet en op uw tempo." },
  { id: "virtual", label: "Videoconsultatie", icon: Video, blurb: "Eerste kennismaking via Zoom, Teams of Google Meet — link per e-mail." },
];

const platformOptions: { id: PlatformId; label: string }[] = [
  { id: "zoom", label: "Zoom" },
  { id: "teams", label: "Microsoft Teams" },
  { id: "meet", label: "Google Meet" },
];

type OccasionId =
  | "wedding"
  | "business"
  | "shirt"
  | "event"
  | "personal"
  | "team";

const occasions: {
  id: OccasionId;
  title: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  { id: "wedding", title: "Trouwpak", desc: "Volledig op maat voor uw trouwdag", icon: Gem },
  { id: "business", title: "Zakelijk kostuum", desc: "Professionele uitstraling, perfect passend", icon: Briefcase },
  { id: "shirt", title: "Hemd op maat", desc: "MTM overhemden vanaf €150", icon: Shirt },
  { id: "event", title: "Speciale gelegenheid", desc: "Gala, diner, bijzondere dag", icon: PartyPopper },
  { id: "personal", title: "Persoonlijke garderobe", desc: "Stylingadvies en maatkleding", icon: Palette },
  { id: "team", title: "Zakelijk / team", desc: "5 of meer personen — offerte op maat", icon: Users },
];

const typeToLocation = (t: AppointmentType): Location => {
  if (t === "athome") return "athome";
  if (t === "virtual") return "virtual";
  return "atelier";
};

const L = {
  eyebrow: { nl: "Afspraak", fr: "Rendez-vous", en: "Appointment" },
  stepPlatform: { nl: "Hoe wilt u ons spreken.", fr: "Comment souhaitez-vous nous parler.", en: "How would you like to meet." },
  stepPlatformSub: { nl: "Kies een videoplatform — de link wordt na bevestiging per e-mail bezorgd.", fr: "Choisissez une plateforme — le lien sera envoyé par e-mail après confirmation.", en: "Choose a platform — the link is sent by email after confirmation." },
  step01: { nl: "Wanneer mogen wij u verwachten.", fr: "Quand vous attendre.", en: "When shall we expect you." },
  step01sub: { nl: "Drie manieren om elkaar te ontmoeten — atelier, bij u thuis of via video.", fr: "Trois manières de se rencontrer — atelier, chez vous ou en visio.", en: "Three ways to meet — atelier, at your place, or by video." },
  step02: { nl: "En de gelegenheid.", fr: "Et l'occasion.", en: "And the occasion." },
  step02sub: { nl: "Een paar woorden over wat u brengt.", fr: "Quelques mots sur votre venue.", en: "A few words on what brings you in." },
  step03: { nl: "Bijna klaar.", fr: "Presque terminé.", en: "Almost there." },
  step03sub: { nl: "Hoe kunnen wij u bereiken.", fr: "Comment vous joindre.", en: "How can we reach you." },
  stepAddress: { nl: "Waar mogen wij langskomen.", fr: "Où devons-nous venir.", en: "Where shall we visit." },
  stepAddressSub: { nl: "Vul uw adres in zodat wij precies weten waar u ons verwacht.", fr: "Indiquez votre adresse pour que nous sachions où vous attendre.", en: "Share your address so we know exactly where to come." },
  morning: { nl: "Ochtend", fr: "Matin", en: "Morning" },
  afternoon: { nl: "Namiddag", fr: "Après-midi", en: "Afternoon" },
  locationLabel: { nl: "Locatie", fr: "Lieu", en: "Location" },
  back: { nl: "Terug", fr: "Retour", en: "Back" },
  next: { nl: "Verder", fr: "Continuer", en: "Continue" },
  confirm: { nl: "BEVESTIG AFSPRAAK", fr: "CONFIRMER LE RDV", en: "CONFIRM APPOINTMENT" },
  name: { nl: "Volledige naam", fr: "Nom complet", en: "Full name" },
  email: { nl: "E-mail", fr: "E-mail", en: "Email" },
  phone: { nl: "Telefoon (optioneel)", fr: "Téléphone (optionnel)", en: "Phone (optional)" },
  notes: { nl: "Iets dat wij moeten weten", fr: "Quelque chose à savoir", en: "Anything we should know" },
  notesPlaceholderDefault: { nl: "Stofvoorkeuren, stijlnotities…", fr: "Préférences tissu, notes de style…", en: "Fabric preferences, style notes…" },
  notesPlaceholderWedding: { nl: "Trouwdatum, locatie, gewenste stijl…", fr: "Date du mariage, lieu, style souhaité…", en: "Wedding date, venue, desired style…" },
  notesPlaceholderTeam: { nl: "Bedrijfsnaam, aantal personen, gelegenheid…", fr: "Nom de l'entreprise, nombre de personnes, occasion…", en: "Company name, number of people, occasion…" },
  street: { nl: "Straat + nummer", fr: "Rue + numéro", en: "Street + number" },
  zip: { nl: "Postcode", fr: "Code postal", en: "Postcode" },
  city: { nl: "Gemeente", fr: "Commune", en: "City" },
  floor: { nl: "Verdieping / bel (optioneel)", fr: "Étage / sonnette (optionnel)", en: "Floor / bell (optional)" },
  newsletter: { nl: "Houd me op de hoogte van nieuwe collecties en stijltips uit het atelier", fr: "Tenez-moi au courant des nouvelles collections et conseils du studio", en: "Keep me posted on new collections and styling tips from the atelier" },
  reassurance: { nl: "Geen verkoopgesprek · Vrijblijvend · Privé atelier", fr: "Sans engagement · Atelier privé", en: "No sales pitch · No obligation · Private atelier" },
  weddingNote: { nl: "Boek bij voorkeur 4–6 maanden voor uw trouwdatum.", fr: "Réservez de préférence 4–6 mois avant votre mariage.", en: "Book ideally 4–6 months before your wedding date." },
  teamNote: { nl: "Voor groepen nemen we apart contact op met een offerte. Vul uw gegevens in op de volgende stap.", fr: "Pour les groupes, nous reprenons contact avec un devis.", en: "For groups we'll follow up with a custom quote." },
  thankTitle: { nl: "Tot dan.", fr: "À bientôt.", en: "Until then." },
  thankSubtitle: { nl: "Uw afspraak is ontvangen.", fr: "Votre rendez-vous est enregistré.", en: "Your appointment has been received." },
  addCalendar: { nl: "Voeg toe aan agenda →", fr: "Ajouter à l'agenda →", en: "Add to calendar →" },
  shareWa: { nl: "Deel via WhatsApp →", fr: "Partager via WhatsApp →", en: "Share via WhatsApp →" },
  confirmEmail: { nl: "U ontvangt een bevestigingsmail op", fr: "Vous recevrez une confirmation à", en: "You'll receive a confirmation email at" },
  followUp: { nl: "Alex neemt indien nodig contact op.", fr: "Alex vous contactera si nécessaire.", en: "Alex will follow up if needed." },
  threeWays: { nl: "Atelier · Thuis · Video", fr: "Atelier · Chez vous · Visio", en: "Atelier · At home · Video" },
  whatTypes: { nl: "Welk type afspraak past bij u?", fr: "Quel type de rendez-vous ?", en: "Which appointment suits you?" },
} as const;

const buildICS = (date: Date, time: string, occasionLabel: string, location: string, description = "Afspraak bij Alex Nass — bespoke tailoring.") => {
  const [h, m] = time.split(":").map(Number);
  const start = new Date(date);
  start.setHours(h, m, 0, 0);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const uid = `${Date.now()}@alexnass`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Alex Nass//Appointment//EN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:Alex Nass — ${occasionLabel}`,
    `LOCATION:${location}`,
    `DESCRIPTION:${description}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
};

const downloadICS = (ics: string) => {
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "alex-nass-afspraak.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const AppointmentDialog = ({ open, onOpenChange, type = "showroom", initialOccasion, initialNotes }: AppointmentDialogProps) => {
  const { language } = useLanguage();
  const lang = (language as "nl" | "fr" | "en") ?? "nl";
  const tr = <K extends keyof typeof L>(k: K) =>
    (L[k] as Record<string, string>)[lang] ?? (L[k] as Record<string, string>).nl;

  const [location, setLocation] = useState<Location>(typeToLocation(type));
  const [platform, setPlatform] = useState<PlatformId | "">("");
  const [step, setStep] = useState<StepId>(typeToLocation(type) === "virtual" ? "platform" : "datetime");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [occasion, setOccasion] = useState<OccasionId | "">(initialOccasion ?? "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState(initialNotes ?? "");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [floor, setFloor] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  useEffect(() => {
    if (open) {
      const loc = typeToLocation(type);
      setLocation(loc);
      setStep(loc === "virtual" ? "platform" : "datetime");
      if (initialOccasion) setOccasion(initialOccasion);
      if (initialNotes) setNotes(initialNotes);
    } else {
      const t = setTimeout(() => {
        setStep("datetime"); setDate(undefined); setTime(undefined);
        setOccasion(""); setName(""); setEmail(""); setPhone(""); setNotes("");
        setPlatform(""); setStreet(""); setZip(""); setCity(""); setFloor("");
        setNewsletter(false);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [open, type, initialOccasion, initialNotes]);

  // When user switches location mid-flow, reset step appropriately
  useEffect(() => {
    if (location === "virtual" && !platform && step !== "platform") {
      setStep("platform");
    } else if (location !== "virtual" && step === "platform") {
      setStep("datetime");
    }
  }, [location, platform, step]);

  const morning = timeSlots.filter((s) => parseInt(s) < 12);
  const afternoon = timeSlots.filter((s) => parseInt(s) >= 12);

  const needsAddress = location === "athome";
  const needsPlatform = location === "virtual";




  // For address flow we still need contact info — collect in same address step
  const flow: StepId[] = needsPlatform
    ? ["platform", "datetime", "occasion", "contact", "confirm"]
    : needsAddress
    ? ["datetime", "occasion", "address", "confirm"]
    : ["datetime", "occasion", "contact", "confirm"];

  const stepIndex = flow.indexOf(step);
  const visibleSteps = flow.slice(0, -1); // exclude confirm from progress

  const canPlatform = !!platform;
  const canDatetime = !!date && !!time;
  const canOccasion = !!occasion;
  const canContact = !!name && !!email;
  const canAddress = !!name && !!email && !!street && !!zip && !!city;

  const canAdvance = (s: StepId) =>
    s === "platform" ? canPlatform :
    s === "datetime" ? canDatetime :
    s === "occasion" ? canOccasion :
    s === "contact" ? canContact :
    s === "address" ? canAddress : false;

  const goNext = () => {
    const next = flow[stepIndex + 1];
    if (next) setStep(next);
  };
  const goBack = () => {
    const prev = flow[stepIndex - 1];
    if (prev) setStep(prev);
  };

  const selectedOccasion = occasions.find((o) => o.id === occasion);
  const selectedLocation = locationOptions.find((l) => l.id === location)!;
  const selectedPlatform = platformOptions.find((p) => p.id === platform);

  const notesPlaceholder = useMemo(() => {
    if (occasion === "wedding") return tr("notesPlaceholderWedding");
    if (occasion === "team") return tr("notesPlaceholderTeam");
    return tr("notesPlaceholderDefault");
  }, [occasion, lang]);

  const addressString = [street, [zip, city].filter(Boolean).join(" "), floor].filter(Boolean).join(", ");

  const summary = date && time
    ? `${format(date, "EEE d MMM")} · ${time} · ${selectedLocation.label}${selectedPlatform ? " (" + selectedPlatform.label + ")" : ""}${selectedOccasion ? " · " + selectedOccasion.title : ""}`
    : "";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirm");
  };

  const icsLocation = needsAddress && addressString ? addressString
    : needsPlatform && selectedPlatform ? `${selectedPlatform.label} (link via e-mail)`
    : selectedLocation.label;
  const icsDescription = needsPlatform && selectedPlatform
    ? `Videoconsultatie via ${selectedPlatform.label}. De link wordt per e-mail bezorgd.`
    : "Afspraak bij Alex Nass — bespoke tailoring.";

  const handleAddToCalendar = () => {
    if (!date || !time || !selectedOccasion) return;
    downloadICS(buildICS(date, time, selectedOccasion.title, icsLocation, icsDescription));
  };

  const handleWhatsApp = () => {
    if (!date || !time || !selectedOccasion) return;
    const where = needsAddress && addressString
      ? ` bij ons thuis (${addressString})`
      : needsPlatform && selectedPlatform
      ? ` via ${selectedPlatform.label}`
      : "";
    const msg = `Hallo Alex, ik heb een afspraak gepland op ${format(date, "EEE d MMM")} om ${time} voor ${selectedOccasion.title}${where}.`;
    window.open(`https://wa.me/32000000000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const stepBg =
    step === "platform" ? "bg-gold/5" :
    step === "datetime" ? "bg-cream/30" :
    step === "occasion" ? "bg-champagne/20" :
    step === "address" ? "bg-cream/20" :
    step === "contact" ? "bg-gold/5" : "bg-background";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-[calc(100vw-1rem)] sm:max-w-[760px] md:max-w-[920px] max-h-[95vh] md:max-h-[88vh] overflow-y-auto md:overflow-hidden bg-background p-0 gap-0 rounded-none border-0 shadow-2xl flex flex-col"
      >
        <DialogTitle className="sr-only">Appointment</DialogTitle>

        {/* Header band — compact on md+ */}
        <div className="relative bg-gradient-to-br from-espresso via-espresso to-espresso-light text-cream px-4 sm:px-6 md:px-10 pt-5 sm:pt-6 md:pt-6 pb-4 md:pb-5 overflow-hidden shrink-0">
          <svg className="absolute top-0 right-0 w-16 h-12 text-gold/40 pointer-events-none" viewBox="0 0 64 48" fill="none" aria-hidden="true">
            <path d="M 0 0 L 64 0 L 64 36 L 32 48 L 0 36 Z" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 20%, hsl(var(--gold)) 0%, transparent 50%)" }} />
          <div className="relative">
            <div className="flex items-center justify-between gap-2 sm:gap-4 mb-3 flex-wrap">
              <div className="flex items-center gap-2">
                <p className="text-[10px] tracking-[0.4em] uppercase text-gold font-body font-medium">
                  {tr("eyebrow")}
                </p>
                {/* Info popover — explains the 3 appointment types */}
                {step !== "confirm" && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="info-pulse relative inline-flex items-center justify-center w-5 h-5 rounded-full border border-gold/70 text-gold hover:text-cream hover:bg-gold/20 transition-colors"
                        aria-label={tr("whatTypes")}
                      >
                        <Info className="w-3 h-3" strokeWidth={1.75} />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent side="bottom" align="start" className="w-80 p-0 border-foreground/10 bg-background">
                      <div className="p-4 border-b border-foreground/10">
                        <p className="text-eyebrow">{tr("whatTypes")}</p>
                      </div>
                      <ul className="divide-y divide-foreground/10">
                        {locationOptions.map((opt) => {
                          const Icon = opt.icon;
                          return (
                            <li key={opt.id} className="p-4 flex gap-3">
                              <Icon className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                              <div>
                                <p className="font-heading text-sm text-foreground leading-tight">{opt.label}</p>
                                <p className="text-xs text-foreground/60 font-body leading-relaxed mt-1">{opt.blurb}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </PopoverContent>
                  </Popover>
                )}
              </div>

              {/* Location toggle on first interactive step; otherwise summary chip */}
              {(step === "platform" || step === "datetime") ? (
                <div className="hidden sm:flex items-center gap-1 bg-cream/10 rounded-full p-1">
                  {locationOptions.map((opt) => {
                    const Icon = opt.icon;
                    const active = location === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setLocation(opt.id)}
                        className={cn(
                          "inline-flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase font-body px-3 py-1.5 rounded-full transition-all",
                          active ? "bg-gold text-espresso" : "text-cream/70 hover:text-cream"
                        )}
                      >
                        <Icon className="w-3 h-3" strokeWidth={1.5} />
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <span className="inline-flex items-center gap-2 text-[9px] tracking-[0.25em] uppercase text-cream/70 font-body bg-cream/10 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {selectedLocation.label}{selectedPlatform ? ` · ${selectedPlatform.label}` : ""}
                </span>
              )}
            </div>

            {step !== "confirm" ? (
              <>
                <h2 className="font-heading text-2xl md:text-3xl font-light text-cream leading-[1.15] tracking-[-0.01em]">
                  {step === "platform" && tr("stepPlatform")}
                  {step === "datetime" && tr("step01")}
                  {step === "occasion" && tr("step02")}
                  {step === "address" && tr("stepAddress")}
                  {step === "contact" && tr("step03")}
                </h2>
                <p className="font-body text-xs md:text-sm text-cream/70 mt-2 italic max-w-md">
                  {step === "platform" && tr("stepPlatformSub")}
                  {step === "datetime" && tr("step01sub")}
                  {step === "occasion" && tr("step02sub")}
                  {step === "address" && tr("stepAddressSub")}
                  {step === "contact" && tr("step03sub")}
                </p>
              </>
            ) : (
              <>
                <h2 className="font-heading text-2xl md:text-3xl font-light text-cream leading-[1.15] tracking-[-0.01em]">
                  {tr("thankTitle")}
                </h2>
                <p className="font-body text-xs md:text-sm text-cream/70 mt-2 italic max-w-md">
                  {tr("thankSubtitle")}
                </p>
              </>
            )}

            {/* Mobile location toggle */}
            {(step === "platform" || step === "datetime") && (
              <div className="sm:hidden mt-4 flex flex-wrap gap-1.5 bg-cream/10 rounded-full p-1">
                {locationOptions.map((opt) => {
                  const Icon = opt.icon;
                  const active = location === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setLocation(opt.id)}
                      className={cn(
                        "flex-1 inline-flex items-center justify-center gap-1.5 text-[9px] tracking-[0.15em] uppercase font-body px-2 py-1.5 rounded-full transition-all",
                        active ? "bg-gold text-espresso" : "text-cream/70"
                      )}
                    >
                      <Icon className="w-3 h-3" strokeWidth={1.5} />
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Progress bar */}
            {step !== "confirm" && (
              <div className="mt-4 md:mt-5 flex items-center gap-2 md:gap-3">
                {visibleSteps.map((s, i) => {
                  const active = s === step;
                  const done = visibleSteps.indexOf(step) > i;
                  return (
                    <div key={s} className="flex items-center gap-2 md:gap-3 flex-1">
                      <div className={cn(
                        "w-6 h-6 md:w-7 md:h-7 rounded-full border flex items-center justify-center text-[10px] font-body tracking-wider transition-all duration-300",
                        done ? "bg-gold border-gold text-espresso" :
                        active ? "border-gold text-gold" :
                        "border-cream/25 text-cream/40"
                      )}>
                        {done ? "✓" : i + 1}
                      </div>
                      {i < visibleSteps.length - 1 && (
                        <div className={cn(
                          "h-px flex-1 transition-colors",
                          done ? "bg-gold" : "bg-cream/15"
                        )} />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <form onSubmit={submit} className={cn("transition-colors duration-500 flex-1 flex flex-col min-h-0", stepBg)}>
          <div className="flex-1 min-h-0 md:overflow-y-auto">
            {/* Step: PLATFORM (virtual only) */}
            {step === "platform" && (
              <div className="px-6 md:px-10 py-6 md:py-7 animate-fade-in">
                <div className="grid sm:grid-cols-3 gap-3 md:gap-4">
                  {platformOptions.map((p) => {
                    const active = platform === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPlatform(p.id)}
                        className={cn(
                          "group text-center p-6 border-2 rounded-sm transition-all duration-200 flex flex-col items-center gap-3",
                          active ? "border-gold bg-gold/10" : "border-foreground/10 bg-background/40 hover:border-foreground/30"
                        )}
                      >
                        <Video className={cn("w-7 h-7 transition-colors", active ? "text-gold" : "text-foreground/55 group-hover:text-foreground")} strokeWidth={1.25} />
                        <h3 className="font-heading text-base md:text-lg font-medium text-foreground">{p.label}</h3>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-5 text-xs text-foreground/55 font-body italic text-center">
                  {tr("stepPlatformSub")}
                </p>
              </div>
            )}

            {/* Step: DATETIME */}
            {step === "datetime" && (
              <div className="px-6 md:px-10 py-5 md:py-6 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <p className="text-eyebrow mb-3">Date</p>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      className="p-0 pointer-events-auto"
                    />
                  </div>
                  <div className="space-y-5">
                    {([
                      { label: tr("morning"), slots: morning },
                      { label: tr("afternoon"), slots: afternoon },
                    ]).map((block) => (
                      <div key={block.label}>
                        <p className="text-eyebrow mb-3">{block.label}</p>
                        <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                          {block.slots.map((s) => {
                            const unavailable = UNAVAILABLE_SLOTS.has(s);
                            const selected = time === s;
                            return (
                              <button
                                key={s}
                                type="button"
                                disabled={unavailable}
                                onClick={() => !unavailable && setTime(s)}
                                className={cn(
                                  "py-1.5 px-2 text-sm font-body tracking-wide transition-all text-left rounded-sm",
                                  selected && "bg-gold/20 text-foreground border border-gold/60",
                                  !selected && !unavailable && "text-foreground/65 hover:text-foreground hover:bg-foreground/5 border border-transparent",
                                  unavailable && "text-foreground/25 line-through cursor-not-allowed border border-transparent"
                                )}
                              >
                                {s}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step: OCCASION */}
            {step === "occasion" && (
              <div className="px-6 md:px-10 py-5 md:py-7 animate-fade-in">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {occasions.map((o) => {
                    const Icon = o.icon;
                    const active = occasion === o.id;
                    return (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => setOccasion(o.id)}
                        className={cn(
                          "group text-left p-4 border-2 rounded-sm transition-all duration-200",
                          active
                            ? "border-gold bg-gold/10"
                            : "border-foreground/10 bg-background/40 hover:border-foreground/30"
                        )}
                      >
                        <Icon
                          className={cn(
                            "w-6 h-6 mb-2 transition-colors",
                            active ? "text-gold" : "text-foreground/60 group-hover:text-foreground"
                          )}
                          strokeWidth={1.5}
                        />
                        <h3 className={cn(
                          "font-heading text-base font-medium leading-tight mb-1",
                          active ? "text-foreground" : "text-foreground/85"
                        )}>{o.title}</h3>
                        <p className="text-xs text-foreground/55 font-body leading-relaxed">{o.desc}</p>
                      </button>
                    );
                  })}
                </div>

                {occasion === "team" && (
                  <div className="mt-4 p-3 bg-gold/10 border-l-2 border-gold text-xs font-body text-foreground/75 leading-relaxed animate-fade-in">
                    {tr("teamNote")}
                  </div>
                )}
                {occasion === "wedding" && (
                  <div className="mt-4 p-3 bg-gold/10 border-l-2 border-gold text-xs font-body text-foreground/75 leading-relaxed animate-fade-in">
                    {tr("weddingNote")}
                  </div>
                )}
              </div>
            )}

            {/* Step: ADDRESS (at-home) — combines contact + address */}
            {step === "address" && (
              <div className="px-6 md:px-10 py-5 md:py-7 animate-fade-in space-y-5">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                  <div>
                    <label className="text-eyebrow block mb-2">{tr("name")}</label>
                    <input className="input-underline" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div>
                    <label className="text-eyebrow block mb-2">{tr("email")}</label>
                    <input type="email" className="input-underline" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div>
                    <label className="text-eyebrow block mb-2">{tr("phone")}</label>
                    <input type="tel" className="input-underline" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div className="md:col-span-2 pt-1">
                    <p className="text-eyebrow mb-3">{tr("stepAddress")}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-eyebrow block mb-2">{tr("street")}</label>
                    <input className="input-underline" value={street} onChange={(e) => setStreet(e.target.value)} required />
                  </div>
                  <div>
                    <label className="text-eyebrow block mb-2">{tr("zip")}</label>
                    <input className="input-underline" value={zip} onChange={(e) => setZip(e.target.value)} required />
                  </div>
                  <div>
                    <label className="text-eyebrow block mb-2">{tr("city")}</label>
                    <input className="input-underline" value={city} onChange={(e) => setCity(e.target.value)} required />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-eyebrow block mb-2">{tr("floor")}</label>
                    <input className="input-underline" value={floor} onChange={(e) => setFloor(e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {/* Step: CONTACT (atelier + virtual) */}
            {step === "contact" && (
              <div className="px-6 md:px-10 py-5 md:py-7 animate-fade-in space-y-5">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                  <div>
                    <label className="text-eyebrow block mb-2">{tr("name")}</label>
                    <input className="input-underline" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div>
                    <label className="text-eyebrow block mb-2">{tr("email")}</label>
                    <input type="email" className="input-underline" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div>
                    <label className="text-eyebrow block mb-2">{tr("phone")}</label>
                    <input type="tel" className="input-underline" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div>
                    <label className="text-eyebrow block mb-2">{tr("notes")}</label>
                    <input className="input-underline" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={notesPlaceholder} />
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-gold cursor-pointer"
                  />
                  <span className="text-xs md:text-sm text-foreground/70 font-body leading-relaxed group-hover:text-foreground transition-colors">
                    {tr("newsletter")}
                  </span>
                </label>
              </div>
            )}

            {/* Step: CONFIRM */}
            {step === "confirm" && (
              <div className="px-6 md:px-10 py-6 md:py-8 animate-fade-in">
                <div className="bg-background border border-foreground/10 p-5 md:p-7 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                    <div>
                      <p className="text-eyebrow mb-1">Datum & uur</p>
                      <p className="font-heading text-base text-foreground">
                        {date ? format(date, "EEEE d MMMM yyyy") : "—"}{time ? ` · ${time}` : ""}
                      </p>
                    </div>
                    <div>
                      <p className="text-eyebrow mb-1">{tr("locationLabel")}</p>
                      <p className="font-heading text-base text-foreground">
                        {selectedLocation.label}{selectedPlatform ? ` · ${selectedPlatform.label}` : ""}
                      </p>
                      {needsAddress && addressString && (
                        <p className="text-xs text-foreground/55 font-body mt-1">{addressString}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-eyebrow mb-1">Gelegenheid</p>
                      <p className="font-heading text-base text-foreground">{selectedOccasion?.title ?? "—"}</p>
                    </div>
                    <div>
                      <p className="text-eyebrow mb-1">Naam</p>
                      <p className="font-heading text-base text-foreground">{name || "—"}</p>
                      <p className="text-xs text-foreground/55 font-body mt-1 truncate">{email}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleAddToCalendar}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground text-foreground text-[11px] tracking-[0.25em] uppercase font-body hover:bg-foreground hover:text-background transition-colors"
                  >
                    <CalendarPlus className="w-4 h-4" strokeWidth={1.5} />
                    {tr("addCalendar")}
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white text-[11px] tracking-[0.25em] uppercase font-body hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    {tr("shareWa")}
                  </button>
                </div>

                <p className="text-xs text-foreground/55 font-body text-center mt-5 leading-relaxed">
                  {tr("confirmEmail")} <span className="text-foreground/75">{email || "—"}</span>. {tr("followUp")}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          {step !== "confirm" && (
            <div className="shrink-0 border-t border-foreground/10">
              <div className="px-6 md:px-10 py-4 md:py-5 flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  {summary ? (
                    <p className="font-heading italic text-xs md:text-sm text-foreground/65 truncate">{summary}</p>
                  ) : (
                    <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 font-body">
                      {tr("threeWays")}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-4 md:gap-6 shrink-0">
                  {stepIndex > 0 && (
                    <button
                      type="button"
                      onClick={goBack}
                      className="text-[10px] tracking-[0.3em] uppercase text-foreground/55 hover:text-foreground link-underline font-body"
                    >
                      ← {tr("back")}
                    </button>
                  )}
                  {stepIndex < flow.length - 2 && (
                    <button
                      type="button"
                      disabled={!canAdvance(step)}
                      onClick={goNext}
                      className="group relative px-6 py-2.5 text-[10px] tracking-[0.3em] uppercase font-body border border-foreground text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:pointer-events-none"
                    >
                      {tr("next")}
                    </button>
                  )}
                  {stepIndex === flow.length - 2 && (
                    <button
                      type="submit"
                      disabled={!canAdvance(step)}
                      className="px-6 py-2.5 text-[10px] tracking-[0.3em] uppercase font-body bg-foreground text-background border border-foreground hover:bg-espresso transition-colors duration-300 disabled:opacity-30 disabled:pointer-events-none"
                    >
                      {tr("confirm")}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
