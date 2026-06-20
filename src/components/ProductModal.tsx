import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { X, ChevronLeft, ChevronRight, Check, Upload, Info } from "lucide-react";
import bodyTriangle from "@/assets/body-triangle.png";
import bodyInverted from "@/assets/body-inverted.png";
import bodyRectangle from "@/assets/body-rectangle.png";
import bodyOval from "@/assets/body-oval.png";
import fitSlim from "@/assets/fit-slim.png";
import fitTailored from "@/assets/fit-tailored.png";
import fitRegular from "@/assets/fit-regular.png";
import fitLoose from "@/assets/fit-loose.png";

const colors = [
  { id: "navy", label: "Navy", hex: "#1B2A4A" },
  { id: "charcoal", label: "Charcoal", hex: "#36454F" },
  { id: "black", label: "Black", hex: "#1A1A1A" },
  { id: "sage", label: "Sage", hex: "#87A96B" },
  { id: "camel", label: "Camel", hex: "#C19A6B" },
  { id: "burgundy", label: "Burgundy", hex: "#722F37" },
];

const coatColors = [
  { id: "charcoal", label: "Charcoal", hex: "#36454F" },
  { id: "camel", label: "Camel", hex: "#C19A6B" },
  { id: "navy", label: "Navy", hex: "#1B2A4A" },
];

const poloSizes = ["S", "M", "L", "XL", "2XL"];
const coatSizes = ["S", "M", "L", "XL", "2XL"];

const poloSizeChart: Record<string, { chest: string; length: string; shoulder: string }> = {
  S: { chest: "92-96", length: "70", shoulder: "43" },
  M: { chest: "96-100", length: "72", shoulder: "45" },
  L: { chest: "100-106", length: "74", shoulder: "47" },
  XL: { chest: "106-112", length: "76", shoulder: "49" },
  "2XL": { chest: "112-118", length: "78", shoulder: "51" },
};

const coatSizeChart: Record<string, { chest: string; length: string; shoulder: string }> = {
  S: { chest: "94-98", length: "88", shoulder: "44" },
  M: { chest: "98-102", length: "90", shoulder: "46" },
  L: { chest: "102-108", length: "92", shoulder: "48" },
  XL: { chest: "108-114", length: "94", shoulder: "50" },
  "2XL": { chest: "114-120", length: "96", shoulder: "52" },
};

const jacketStyles = [
  { id: "sb1", label: "Single Breast — 1 Button", buttons: 1, double: false },
  { id: "sb2", label: "Single Breast — 2 Button", buttons: 2, double: false },
  { id: "db4n", label: "Double Breast — 4 Button", buttons: 4, double: true },
  { id: "db4w", label: "Double Breast — Wide", buttons: 4, double: true },
];

const fitOptions = [
  { id: "slim", en: "Slim Fit", nl: "Slim Fit", fr: "Coupe Slim", img: fitSlim },
  { id: "tailored", en: "Tailored Fit", nl: "Tailored Fit", fr: "Coupe Ajustée", img: fitTailored },
  { id: "regular", en: "Regular", nl: "Regular", fr: "Classique", img: fitRegular },
  { id: "loose", en: "Loose", nl: "Loose", fr: "Ample", img: fitLoose },
];

const bodyShapes = [
  { id: "triangle", label: "Triangle", img: bodyTriangle },
  { id: "inverted", label: "Inverted Triangle", img: bodyInverted },
  { id: "rectangle", label: "Rectangle", img: bodyRectangle },
  { id: "oval", label: "Oval", img: bodyOval },
];

const ageRanges = ["25-30", "30-35", "35-40", "40-45", "45-50", "50-55", "55-60", "60+"];

type ProductType = "shirts" | "polos" | "bowties" | "suits" | "coats";

function detectProductType(title: string): ProductType {
  const t = title.toLowerCase();
  if (t.includes("shirt") || t.includes("hemd") || t.includes("chemise")) return "shirts";
  if (t.includes("polo")) return "polos";
  if (t.includes("bowtie") || t.includes("vlinder") || t.includes("nœud") || t.includes("noeud")) return "bowties";
  if (t.includes("coat") || t.includes("overjas") || t.includes("pardessus") || t.includes("overcoat")) return "coats";
  return "suits";
}

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

// Shared size-based product modal (polos + coats)
const SizedProductModal = ({
  product, onOpenChange, language, sizes, sizeChart, colorOptions, details, buyLabel,
}: {
  product: { img: string; title: string; price: string };
  onOpenChange: (v: boolean) => void;
  language: string;
  sizes: string[];
  sizeChart: Record<string, { chest: string; length: string; shoulder: string }>;
  colorOptions: typeof colors;
  details: string[];
  buyLabel: string;
}) => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]?.id || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [showSizeChart, setShowSizeChart] = useState(false);
  const tl = (obj: Record<string, string>) => obj[language] || obj.en;

  return (
    <div className="grid md:grid-cols-2 h-full">
      <div className="bg-card h-full flex items-center justify-center p-8">
        <img src={product.img} alt={product.title} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="p-8 md:p-12 overflow-y-auto flex flex-col">
        <div className="mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-2">{product.title}</h2>
          <p className="font-heading text-2xl text-foreground/60">{product.price}</p>
        </div>
        {/* Color */}
        <div className="mb-8">
          <p className="text-[11px] tracking-[0.3em] uppercase text-taupe font-body mb-4">{tl({ en: "Color", nl: "Kleur", fr: "Couleur" })}</p>
          <div className="flex gap-3">
            {colorOptions.map((c) => (
              <button key={c.id} onClick={() => setSelectedColor(c.id)} className={`w-10 h-10 rounded-full transition-all duration-300 ${selectedColor === c.id ? "ring-2 ring-foreground ring-offset-2 ring-offset-background scale-110" : "hover:scale-105"}`} style={{ backgroundColor: c.hex }} title={c.label} />
            ))}
          </div>
        </div>
        {/* Size */}
        <div className="mb-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-taupe font-body mb-4">{tl({ en: "Size", nl: "Maat", fr: "Taille" })}</p>
          <div className="flex gap-2">
            {sizes.map((s) => (
              <button key={s} onClick={() => setSelectedSize(s)} className={`w-14 h-14 border text-sm font-body transition-all duration-200 ${selectedSize === s ? "border-foreground bg-foreground/5 text-foreground" : "border-border text-muted-foreground hover:border-foreground/30"}`}>
                {s}
              </button>
            ))}
          </div>
        </div>
        {/* Size Chart toggle */}
        <button onClick={() => setShowSizeChart(!showSizeChart)} className="text-[10px] tracking-[0.2em] uppercase text-gold font-body font-medium mb-4 hover:text-foreground transition-colors text-left">
          {showSizeChart ? "▾" : "▸"} {tl({ en: "Size Chart (cm)", nl: "Maattabel (cm)", fr: "Guide des Tailles (cm)" })}
        </button>
        {showSizeChart && (
          <div className="mb-8 border border-border overflow-hidden">
            <table className="w-full text-xs font-body">
              <thead>
                <tr className="bg-card">
                  <th className="p-3 text-left text-[10px] tracking-[0.2em] uppercase text-taupe">{tl({ en: "Size", nl: "Maat", fr: "Taille" })}</th>
                  <th className="p-3 text-left text-[10px] tracking-[0.2em] uppercase text-taupe">{tl({ en: "Chest", nl: "Borst", fr: "Poitrine" })}</th>
                  <th className="p-3 text-left text-[10px] tracking-[0.2em] uppercase text-taupe">{tl({ en: "Length", nl: "Lengte", fr: "Longueur" })}</th>
                  <th className="p-3 text-left text-[10px] tracking-[0.2em] uppercase text-taupe">{tl({ en: "Shoulder", nl: "Schouder", fr: "Épaule" })}</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((s) => (
                  <tr key={s} className={`border-t border-border ${selectedSize === s ? "bg-foreground/5" : ""}`}>
                    <td className="p-3 font-medium text-foreground">{s}</td>
                    <td className="p-3 text-muted-foreground">{sizeChart[s]?.chest}</td>
                    <td className="p-3 text-muted-foreground">{sizeChart[s]?.length}</td>
                    <td className="p-3 text-muted-foreground">{sizeChart[s]?.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* Details */}
        <div className="mb-8 space-y-3">
          <p className="text-[11px] tracking-[0.3em] uppercase text-taupe font-body mb-3">{tl({ en: "Details", nl: "Details", fr: "Détails" })}</p>
          {details.map((d) => (
            <div key={d} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-gold" />
              <span className="text-sm font-body text-foreground">{d}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto space-y-3 pt-4 border-t border-border">
          <Button variant="hero" size="lg" className="w-full py-6" onClick={() => onOpenChange(false)}>
            {buyLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

interface ProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: { img: string; title: string; price: string } | null;
}

const ProductModal = ({ open, onOpenChange, product }: ProductModalProps) => {
  const { language } = useLanguage();
  const { openBooking } = useBooking();
  const [selectedColor, setSelectedColor] = useState("navy");
  // Quiz state for suits/shirts
  const [quizStep, setQuizStep] = useState(0);
  const [jacket, setJacket] = useState("");
  const [fit, setFit] = useState("");
  const [height, setHeight] = useState(178);
  const [weight, setWeight] = useState(80);
  const [age, setAge] = useState("");
  const [bodyShape, setBodyShape] = useState("");

  if (!product) return null;

  const type = detectProductType(product.title);
  const tl = (obj: Record<string, string>) => obj[language] || obj.en;
  const buyLabel = tl({ en: "Add to Cart", nl: "In Winkelwagen", fr: "Ajouter au Panier" });

  // Bowties
  if (type === "bowties") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 overflow-hidden border-none">
          <button onClick={() => onOpenChange(false)} className="absolute right-4 top-4 z-50 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
          <div className="grid md:grid-cols-2 h-full">
            <div className="bg-card h-full flex items-center justify-center p-8">
              <img src={product.img} alt={product.title} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="p-8 md:p-12 overflow-y-auto flex flex-col">
              <div className="mb-8">
                <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-2">{product.title}</h2>
                <p className="font-heading text-2xl text-foreground/60">{product.price}</p>
              </div>
              <div className="mb-8">
                <p className="text-[11px] tracking-[0.3em] uppercase text-taupe font-body mb-4">{tl({ en: "Color", nl: "Kleur", fr: "Couleur" })}</p>
                <div className="flex gap-3">
                  {colors.slice(0, 4).map((c) => (
                    <button key={c.id} onClick={() => setSelectedColor(c.id)} className={`w-10 h-10 rounded-full transition-all duration-300 ${selectedColor === c.id ? "ring-2 ring-foreground ring-offset-2 ring-offset-background scale-110" : "hover:scale-105"}`} style={{ backgroundColor: c.hex }} title={c.label} />
                  ))}
                </div>
              </div>
              <div className="mb-8 p-5 border border-border bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-taupe" />
                  <p className="text-sm font-body text-foreground">{tl({ en: "One Size Fits All", nl: "Eén Maat Past Allen", fr: "Taille Unique" })}</p>
                </div>
                <p className="text-xs text-muted-foreground font-body">{tl({ en: "Our bowties are crafted with an adjustable strap to fit all neck sizes.", nl: "Onze vlinderdassen zijn gemaakt met een verstelbare band.", fr: "Nos nœuds papillon sont conçus avec une sangle ajustable." })}</p>
              </div>
              <div className="mb-8 space-y-3">
                <p className="text-[11px] tracking-[0.3em] uppercase text-taupe font-body mb-3">{tl({ en: "Details", nl: "Details", fr: "Détails" })}</p>
                {[
                  tl({ en: "100% Silk", nl: "100% Zijde", fr: "100% Soie" }),
                  tl({ en: "Hand-tied construction", nl: "Handgebonden constructie", fr: "Construction nouée à la main" }),
                  tl({ en: "Adjustable neckband", nl: "Verstelbare nekband", fr: "Tour de cou ajustable" }),
                  tl({ en: "Gift box included", nl: "Geschenkdoos inbegrepen", fr: "Coffret cadeau inclus" }),
                ].map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold" />
                    <span className="text-sm font-body text-foreground">{d}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto space-y-3 pt-4 border-t border-border">
                <Button variant="hero" size="lg" className="w-full py-6" onClick={() => onOpenChange(false)}>
                  {buyLabel}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Polos
  if (type === "polos") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 overflow-hidden border-none">
          <button onClick={() => onOpenChange(false)} className="absolute right-4 top-4 z-50 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
          <SizedProductModal
            product={product}
            onOpenChange={onOpenChange}
            language={language}
            sizes={poloSizes}
            sizeChart={poloSizeChart}
            colorOptions={colors}
            details={[
              tl({ en: "Premium piqué cotton", nl: "Premium piqué katoen", fr: "Coton piqué premium" }),
              tl({ en: "Mother-of-pearl buttons", nl: "Parelmoeren knopen", fr: "Boutons en nacre" }),
              tl({ en: "Reinforced collar", nl: "Versterkte kraag", fr: "Col renforcé" }),
            ]}
            buyLabel={buyLabel}
          />
        </DialogContent>
      </Dialog>
    );
  }

  // Coats (same structure as polos)
  if (type === "coats") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 overflow-hidden border-none">
          <button onClick={() => onOpenChange(false)} className="absolute right-4 top-4 z-50 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
          <SizedProductModal
            product={product}
            onOpenChange={onOpenChange}
            language={language}
            sizes={coatSizes}
            sizeChart={coatSizeChart}
            colorOptions={coatColors}
            details={[
              tl({ en: "Premium Italian wool", nl: "Premium Italiaanse wol", fr: "Laine italienne premium" }),
              tl({ en: "Full canvas construction", nl: "Volledige canvas constructie", fr: "Construction toile entière" }),
              tl({ en: "Hand-stitched buttonholes", nl: "Handgestikte knoopsgaten", fr: "Boutonnières cousues main" }),
              tl({ en: "Interior silk lining", nl: "Zijden binnenvoering", fr: "Doublure en soie" }),
            ]}
            buyLabel={buyLabel}
          />
        </DialogContent>
      </Dialog>
    );
  }

  // Suits and Shirts: full quiz inside modal
  const quizSteps = type === "suits"
    ? [
        { label: tl({ en: "Style", nl: "Stijl", fr: "Style" }) },
        { label: tl({ en: "Fit", nl: "Pasvorm", fr: "Coupe" }) },
        { label: tl({ en: "Color", nl: "Kleur", fr: "Couleur" }) },
        { label: tl({ en: "Profile", nl: "Profiel", fr: "Profil" }) },
      ]
    : [
        { label: tl({ en: "Fit", nl: "Pasvorm", fr: "Coupe" }) },
        { label: tl({ en: "Color", nl: "Kleur", fr: "Couleur" }) },
        { label: tl({ en: "Profile", nl: "Profiel", fr: "Profil" }) },
      ];

  const totalSteps = quizSteps.length;

  const canNext = type === "suits"
    ? (quizStep === 0 && jacket) || (quizStep === 1 && fit) || (quizStep === 2 && selectedColor) || quizStep === 3
    : (quizStep === 0 && fit) || (quizStep === 1 && selectedColor) || quizStep === 2;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 overflow-hidden border-none">
        <button onClick={() => onOpenChange(false)} className="absolute right-4 top-4 z-50 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-card h-full flex items-center justify-center p-8">
            <img src={product.img} alt={product.title} className="max-h-full max-w-full object-contain" />
          </div>
          <div className="p-8 md:p-12 overflow-y-auto flex flex-col">
            <div className="mb-6">
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-2">{product.title}</h2>
              <p className="font-heading text-2xl text-foreground/60">{product.price}</p>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-1 mb-8">
              {quizSteps.map((s, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-body transition-all ${i <= quizStep ? "bg-foreground text-background" : "border border-border text-muted-foreground"}`}>
                    {i < quizStep ? <Check className="w-3 h-3" /> : i + 1}
                  </div>
                  <span className="text-[9px] tracking-[0.1em] uppercase font-body hidden sm:block text-muted-foreground">{s.label}</span>
                  {i < totalSteps - 1 && <div className={`w-6 h-px mx-1 ${i < quizStep ? "bg-foreground" : "bg-border"}`} />}
                </div>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* Suit step 0: Jacket Style */}
              {type === "suits" && quizStep === 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {jacketStyles.map((j) => (
                    <button key={j.id} onClick={() => setJacket(j.id)} className={`flex flex-col items-center p-4 border transition-all duration-300 ${jacket === j.id ? "border-foreground bg-foreground/5" : "border-border hover:border-foreground/30"}`}>
                      <div className="w-16 h-20 mb-3 text-foreground/70"><JacketIllustration double={j.double} buttons={j.buttons} /></div>
                      <span className="text-[9px] tracking-[0.1em] uppercase font-body text-foreground text-center">{j.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Fit step */}
              {((type === "suits" && quizStep === 1) || (type === "shirts" && quizStep === 0)) && (
                <div className="grid grid-cols-2 gap-3">
                  {fitOptions.map((f) => (
                    <button key={f.id} onClick={() => setFit(f.id)} className={`flex flex-col items-center p-4 border transition-all duration-300 ${fit === f.id ? "border-foreground bg-foreground/5" : "border-border hover:border-foreground/30"}`}>
                      <img src={f.img} alt={f[language]} loading="lazy" className="w-20 h-28 object-contain mb-3 opacity-80" />
                      <span className="text-[10px] tracking-[0.1em] uppercase font-body text-foreground">{f[language]}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Color step */}
              {((type === "suits" && quizStep === 2) || (type === "shirts" && quizStep === 1)) && (
                <div className="grid grid-cols-3 gap-3">
                  {colors.map((c) => (
                    <button key={c.id} onClick={() => setSelectedColor(c.id)} className={`flex flex-col items-center gap-2 p-4 border transition-all duration-300 ${selectedColor === c.id ? "border-foreground bg-foreground/5" : "border-border hover:border-foreground/30"}`}>
                      <div className={`w-10 h-10 rounded-full transition-transform ${selectedColor === c.id ? "scale-110 ring-2 ring-foreground ring-offset-2 ring-offset-background" : ""}`} style={{ backgroundColor: c.hex }} />
                      <span className="text-[9px] tracking-[0.1em] uppercase font-body text-foreground">{c.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Profile step */}
              {((type === "suits" && quizStep === 3) || (type === "shirts" && quizStep === 2)) && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-body text-foreground">{tl({ en: "Height", nl: "Lengte", fr: "Taille" })}</span>
                        <span className="text-xs font-body text-foreground font-medium">{height} cm</span>
                      </div>
                      <input type="range" min={150} max={210} value={height} onChange={(e) => setHeight(+e.target.value)} className="w-full h-1 bg-border rounded-full appearance-none cursor-pointer accent-foreground [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:appearance-none" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-body text-foreground">{tl({ en: "Weight", nl: "Gewicht", fr: "Poids" })}</span>
                        <span className="text-xs font-body text-foreground font-medium">{weight} kg</span>
                      </div>
                      <input type="range" min={50} max={140} value={weight} onChange={(e) => setWeight(+e.target.value)} className="w-full h-1 bg-border rounded-full appearance-none cursor-pointer accent-foreground [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:appearance-none" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-body text-foreground mb-2">{tl({ en: "Age Range", nl: "Leeftijd", fr: "Âge" })}</p>
                    <div className="grid grid-cols-4 gap-1.5">
                      {ageRanges.map((a) => (
                        <button key={a} onClick={() => setAge(a)} className={`py-2 text-[10px] font-body border transition-all ${age === a ? "border-foreground bg-foreground/5 text-foreground" : "border-border text-muted-foreground hover:border-foreground/30"}`}>{a}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-body text-foreground mb-2">{tl({ en: "Body Shape", nl: "Lichaamsvorm", fr: "Morphologie" })}</p>
                    <div className="grid grid-cols-4 gap-2">
                      {bodyShapes.map((s) => (
                        <button key={s.id} onClick={() => setBodyShape(s.id)} className={`flex flex-col items-center p-3 border transition-all duration-200 ${bodyShape === s.id ? "border-foreground bg-foreground/5" : "border-border hover:border-foreground/30"}`}>
                          <img src={s.img} alt={s.label} className="w-14 h-18 object-contain mb-2 opacity-70" loading="lazy" />
                          <span className="text-[9px] tracking-[0.1em] uppercase font-body text-foreground">{s.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6 pt-4 border-t border-border">
              <Button variant="subtle" size="sm" onClick={() => setQuizStep(quizStep - 1)} disabled={quizStep === 0} className="gap-1 text-[10px] uppercase tracking-[0.1em]">
                <ChevronLeft className="w-3.5 h-3.5" /> {tl({ en: "Back", nl: "Vorige", fr: "Précédent" })}
              </Button>
              {quizStep < totalSteps - 1 ? (
                <Button variant="hero" size="sm" onClick={() => setQuizStep(quizStep + 1)} disabled={!canNext} className="gap-1 text-[10px] uppercase tracking-[0.1em]">
                  {tl({ en: "Next", nl: "Volgende", fr: "Suivant" })} <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              ) : (
                <Button variant="hero" size="sm" onClick={() => { onOpenChange(false); openBooking(); }} className="text-[10px] uppercase tracking-[0.1em]">
                  {tl({ en: "Book MTM Appointment", nl: "Boek Maatafspraak", fr: "Réserver Rendez-vous" })}
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
