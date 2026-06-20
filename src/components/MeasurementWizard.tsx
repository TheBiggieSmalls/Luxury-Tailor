import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronLeft, ChevronRight, Check, Upload, X, Camera, Sun, User } from "lucide-react";
import bodyTriangle from "@/assets/body-triangle.png";
import bodyInverted from "@/assets/body-inverted.png";
import bodyRectangle from "@/assets/body-rectangle.png";
import bodyOval from "@/assets/body-oval.png";
import fitSlim from "@/assets/fit-slim.png";
import fitTailored from "@/assets/fit-tailored.png";
import fitRegular from "@/assets/fit-regular.png";
import fitLoose from "@/assets/fit-loose.png";

const jacketStyles = [
  { id: "sb1", label: "Single Breast — 1 Button", buttons: 1, double: false },
  { id: "sb2", label: "Single Breast — 2 Button", buttons: 2, double: false },
  { id: "db4n", label: "Double Breast — 4 Button", buttons: 4, double: true },
  { id: "db4w", label: "Double Breast — 4 Button Wide", buttons: 4, double: true },
];

const fitOptions = [
  { id: "slim", en: "Slim Fit", nl: "Slim Fit", fr: "Coupe Slim", img: fitSlim },
  { id: "tailored", en: "Tailored Fit", nl: "Tailored Fit", fr: "Coupe Ajustée", img: fitTailored },
  { id: "regular", en: "Regular", nl: "Regular", fr: "Classique", img: fitRegular },
  { id: "loose", en: "Loose", nl: "Loose", fr: "Ample", img: fitLoose },
];

const suitColors = [
  { id: "navy", label: "Navy", hex: "#1B2A4A" },
  { id: "charcoal", label: "Charcoal", hex: "#36454F" },
  { id: "black", label: "Black", hex: "#1A1A1A" },
  { id: "forest", label: "Forest Green", hex: "#2D4F2D" },
  { id: "camel", label: "Camel", hex: "#C19A6B" },
  { id: "burgundy", label: "Burgundy", hex: "#722F37" },
  { id: "stone", label: "Stone", hex: "#8A8070" },
  { id: "midnight", label: "Midnight", hex: "#191970" },
];

const bodyShapes = [
  { id: "triangle", label: "Triangle", img: bodyTriangle },
  { id: "inverted", label: "Inverted Triangle", img: bodyInverted },
  { id: "rectangle", label: "Rectangle", img: bodyRectangle },
  { id: "oval", label: "Oval", img: bodyOval },
];

const ageRanges = ["25-30", "30-35", "35-40", "40-45", "45-50", "50-55", "55-60", "60+"];

const JacketIllustration = ({ double, buttons }: { double: boolean; buttons: number }) => (
  <svg viewBox="0 0 120 160" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M30 40 L45 25 Q60 18 75 25 L90 40" />
    {double ? (
      <>
        <path d="M45 25 L50 60 L60 50 L55 30" />
        <path d="M75 25 L70 60 L60 50 L65 30" />
      </>
    ) : (
      <>
        <path d="M45 25 L48 55 L58 48" />
        <path d="M75 25 L72 55 L62 48" />
      </>
    )}
    <path d="M30 40 L28 130 Q40 140 60 140 Q80 140 92 130 L90 40" />
    <line x1="60" y1="50" x2="60" y2="140" strokeDasharray="2,3" opacity="0.3" />
    {double ? (
      Array.from({ length: Math.min(buttons, 2) }).map((_, i) => (
        <g key={`l${i}`}>
          <circle cx="50" cy={70 + i * 20} r="2.5" fill="currentColor" />
          <circle cx="70" cy={70 + i * 20} r="2.5" fill="currentColor" />
        </g>
      ))
    ) : (
      Array.from({ length: buttons }).map((_, i) => (
        <circle key={i} cx="60" cy={75 + i * 22} r="2.5" fill="currentColor" />
      ))
    )}
    <line x1="35" y1="95" x2="52" y2="95" />
    <line x1="68" y1="95" x2="85" y2="95" />
    <line x1="68" y1="60" x2="78" y2="60" />
  </svg>
);

const UploadSlot = ({ label, file, onFile, onClear }: { label: string; file: File | null; onFile: (f: File) => void; onClear: () => void }) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col items-center">
      <input ref={ref} type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])} />
      <button
        type="button"
        onClick={() => ref.current?.click()}
        className="w-full aspect-[3/4] border border-dashed border-border hover:border-foreground/40 flex flex-col items-center justify-center gap-3 transition-colors relative overflow-hidden bg-card"
      >
        {file ? (
          <>
            <img src={URL.createObjectURL(file)} alt={label} className="absolute inset-0 w-full h-full object-cover" />
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onClear(); }}
              className="absolute top-2 right-2 w-6 h-6 bg-foreground/80 text-background flex items-center justify-center rounded-full z-10"
            >
              <X className="w-3 h-3" />
            </button>
          </>
        ) : (
          <>
            <Upload className="w-5 h-5 text-muted-foreground" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body">{label}</span>
          </>
        )}
      </button>
    </div>
  );
};

interface MeasurementWizardProps {
  onBookVirtual?: () => void;
}

const MeasurementWizard = ({ onBookVirtual }: MeasurementWizardProps) => {
  const { language } = useLanguage();
  const [step, setStep] = useState(0);
  const [jacket, setJacket] = useState("");
  const [fit, setFit] = useState("");
  const [color, setColor] = useState("");
  const [height, setHeight] = useState(178);
  const [weight, setWeight] = useState(80);
  const [age, setAge] = useState("");
  const [bodyShape, setBodyShape] = useState("");
  const [photos, setPhotos] = useState<{ front: File | null; side: File | null; back: File | null }>({ front: null, side: null, back: null });

  const stepLabels = [
    { en: "Style", nl: "Stijl", fr: "Style" },
    { en: "Fit", nl: "Pasvorm", fr: "Coupe" },
    { en: "Color", nl: "Kleur", fr: "Couleur" },
    { en: "Profile", nl: "Profiel", fr: "Profil" },
  ];

  const canNext =
    (step === 0 && jacket) ||
    (step === 1 && fit) ||
    (step === 2 && color) ||
    step === 3;

  const t = (obj: Record<string, string>) => obj[language] || obj.en;

  const uploadInstructions = [
    { icon: Camera, text: t({ en: "Upload a clear front-facing photo", nl: "Upload een duidelijke foto van voren", fr: "Téléchargez une photo claire de face" }) },
    { icon: Sun, text: t({ en: "Use good, even lighting", nl: "Gebruik goed, gelijkmatig licht", fr: "Utilisez un bon éclairage uniforme" }) },
    { icon: User, text: t({ en: "Stand straight in a neutral pose", nl: "Sta rechtop in een neutrale houding", fr: "Tenez-vous droit dans une pose neutre" }) },
  ];

  return (
    <section id="wizard" className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div data-reveal className="mb-16 md:mb-20 max-w-xl">
          <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">
            {t({ en: "Interactive Experience", nl: "Interactieve Ervaring", fr: "Expérience Interactive" })}
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] tracking-[-0.02em]">
            {t({ en: "Design Your Suit", nl: "Ontwerp Uw Kostuum", fr: "Créez Votre Costume" })}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress */}
          <div className="flex items-center justify-between mb-14">
            {stepLabels.map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-body transition-all duration-500 ${
                  i <= step ? "bg-foreground text-background" : "border border-border text-muted-foreground"
                }`}>
                  {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
                </div>
                <span className={`text-[10px] tracking-[0.15em] uppercase font-body hidden sm:block transition-colors ${
                  i <= step ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {label[language]}
                </span>
                {i < 3 && <div className={`w-8 md:w-16 lg:w-24 h-px mx-2 transition-colors ${i < step ? "bg-foreground" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          {/* Step 0: Jacket Style */}
          {step === 0 && (
            <div data-reveal className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {jacketStyles.map((j) => (
                <button
                  key={j.id}
                  onClick={() => setJacket(j.id)}
                  className={`flex flex-col items-center p-6 md:p-8 border transition-all duration-300 ${
                    jacket === j.id ? "border-foreground bg-foreground/5" : "border-border hover:border-foreground/30"
                  }`}
                >
                  <div className={`w-20 h-28 md:w-24 md:h-32 mb-5 text-foreground/70 transition-colors ${jacket === j.id ? "text-foreground" : ""}`}>
                    <JacketIllustration double={j.double} buttons={j.buttons} />
                  </div>
                  <span className="text-[10px] tracking-[0.15em] uppercase font-body text-foreground text-center leading-relaxed">{j.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 1: Fit with images */}
          {step === 1 && (
            <div data-reveal className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {fitOptions.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFit(f.id)}
                  className={`flex flex-col items-center py-6 md:py-8 px-4 border text-center transition-all duration-300 ${
                    fit === f.id ? "border-foreground bg-foreground/5" : "border-border hover:border-foreground/30"
                  }`}
                >
                  <img src={f.img} alt={f[language]} loading="lazy" className="w-24 h-32 md:w-28 md:h-36 object-contain mb-4 opacity-80" />
                  <span className="font-heading text-base md:text-lg font-light text-foreground">{f[language]}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Color */}
          {step === 2 && (
            <div data-reveal>
              <p className="text-sm font-body text-muted-foreground mb-8">
                {t({ en: "Choose your fabric color", nl: "Kies uw stofkleur", fr: "Choisissez votre couleur de tissu" })}
              </p>
              <div className="grid grid-cols-4 gap-4">
                {suitColors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setColor(c.id)}
                    className={`flex flex-col items-center gap-3 p-5 border transition-all duration-300 ${
                      color === c.id ? "border-foreground bg-foreground/5" : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full transition-transform duration-300 ${color === c.id ? "scale-110 ring-2 ring-foreground ring-offset-2 ring-offset-background" : ""}`} style={{ backgroundColor: c.hex }} />
                    <span className="text-[10px] tracking-[0.15em] uppercase font-body text-foreground">{c.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Measurement Profile */}
          {step === 3 && (
            <div data-reveal className="space-y-10">
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-[11px] tracking-[0.3em] uppercase text-taupe font-body mb-5">
                  {t({ en: "Photo Guidelines", nl: "Foto Richtlijnen", fr: "Directives Photo" })}
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {uploadInstructions.map((inst, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <inst.icon className="w-4 h-4 text-gold-muted shrink-0" strokeWidth={1.5} />
                      <span className="text-xs font-body text-muted-foreground leading-relaxed">{inst.text}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 max-w-lg">
                  <UploadSlot label={t({ en: "Front", nl: "Voorkant", fr: "Face" })} file={photos.front} onFile={(f) => setPhotos(p => ({ ...p, front: f }))} onClear={() => setPhotos(p => ({ ...p, front: null }))} />
                  <UploadSlot label={t({ en: "Side", nl: "Zijkant", fr: "Profil" })} file={photos.side} onFile={(f) => setPhotos(p => ({ ...p, side: f }))} onClear={() => setPhotos(p => ({ ...p, side: null }))} />
                  <UploadSlot label={t({ en: "Back", nl: "Achterkant", fr: "Dos" })} file={photos.back} onFile={(f) => setPhotos(p => ({ ...p, back: f }))} onClear={() => setPhotos(p => ({ ...p, back: null }))} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-body text-foreground">{t({ en: "Height", nl: "Lengte", fr: "Taille" })}</span>
                    <span className="text-sm font-body text-foreground font-medium">{height} cm</span>
                  </div>
                  <input type="range" min={150} max={210} value={height} onChange={(e) => setHeight(+e.target.value)} className="w-full h-1 bg-border rounded-full appearance-none cursor-pointer accent-foreground [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:appearance-none" />
                  <div className="flex justify-between mt-1 text-[10px] text-muted-foreground font-body"><span>150 cm</span><span>210 cm</span></div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-body text-foreground">{t({ en: "Weight", nl: "Gewicht", fr: "Poids" })}</span>
                    <span className="text-sm font-body text-foreground font-medium">{weight} kg</span>
                  </div>
                  <input type="range" min={50} max={140} value={weight} onChange={(e) => setWeight(+e.target.value)} className="w-full h-1 bg-border rounded-full appearance-none cursor-pointer accent-foreground [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:appearance-none" />
                  <div className="flex justify-between mt-1 text-[10px] text-muted-foreground font-body"><span>50 kg</span><span>140 kg</span></div>
                </div>
              </div>

              <div>
                <p className="text-sm font-body text-foreground mb-3">{t({ en: "Age Range", nl: "Leeftijdsgroep", fr: "Tranche d'âge" })}</p>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {ageRanges.map((a) => (
                    <button key={a} onClick={() => setAge(a)} className={`py-3 text-xs font-body border transition-all duration-200 ${age === a ? "border-foreground bg-foreground/5 text-foreground" : "border-border text-muted-foreground hover:border-foreground/30"}`}>{a}</button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-body text-foreground mb-3">{t({ en: "Body Shape", nl: "Lichaamsvorm", fr: "Morphologie" })}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {bodyShapes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setBodyShape(s.id)}
                      className={`flex flex-col items-center py-4 px-4 border transition-all duration-200 ${
                        bodyShape === s.id ? "border-foreground bg-foreground/5 text-foreground" : "border-border text-muted-foreground hover:border-foreground/30"
                      }`}
                    >
                      <img src={s.img} alt={s.label} loading="lazy" className="w-16 h-24 object-contain mb-3 opacity-70" />
                      <span className="text-xs font-body tracking-[0.1em] uppercase">{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-14">
            <Button
              variant="subtle"
              size="lg"
              onClick={() => setStep(step - 1)}
              disabled={step === 0}
              className="gap-2 px-8 py-6 tracking-[0.1em] text-[10px] uppercase"
            >
              <ChevronLeft className="w-4 h-4" />
              {t({ en: "Back", nl: "Vorige", fr: "Précédent" })}
            </Button>
            {step < 3 ? (
              <Button
                variant="hero"
                size="lg"
                onClick={() => setStep(step + 1)}
                disabled={!canNext}
                className="gap-2 px-8 py-6 tracking-[0.1em] text-[10px] uppercase"
              >
                {t({ en: "Next", nl: "Volgende", fr: "Suivant" })}
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                variant="hero"
                size="lg"
                onClick={onBookVirtual}
                className="px-10 py-6 tracking-[0.15em] text-[10px] uppercase"
              >
                {t({ en: "Book Virtual Appointment", nl: "Boek Virtuele Afspraak", fr: "Réserver RDV Virtuel" })}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasurementWizard;
