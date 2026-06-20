import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language, TranslationKey } from "@/i18n/translations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AppointmentDialog from "@/components/AppointmentDialog";
import ClaimOfferDialog from "@/components/ClaimOfferDialog";
import { useBooking } from "@/contexts/BookingContext";
import { Menu, X } from "lucide-react";

import heroImg from "@/assets/editorial-hero.jpg";
import feature1 from "@/assets/editorial-feature-1.jpg";
import feature2 from "@/assets/editorial-feature-2.jpg";
import fab1 from "@/assets/editorial-fabric-1.jpg";
import fab2 from "@/assets/editorial-fabric-2.jpg";
import fab3 from "@/assets/editorial-fabric-3.jpg";
import fab4 from "@/assets/editorial-fabric-4.jpg";
import fab5 from "@/assets/editorial-fabric-5.jpg";
import fab6 from "@/assets/editorial-fabric-6.jpg";

import catWedding from "@/assets/cat-wedding.jpg";
import catBusiness from "@/assets/cat-business.jpg";
import catTuxedo from "@/assets/cat-tuxedo.jpg";
import catCasual from "@/assets/cat-casual.jpg";

import shopShirts from "@/assets/shop-shirts.jpg";
import shopPolos from "@/assets/shop-polos.jpg";
import shopBowties from "@/assets/shop-bowties.jpg";
import shopCoats from "@/assets/shop-coats.jpg";

import shirtDetail1 from "@/assets/shirt-detail-1.jpg";
import shirtDetail2 from "@/assets/shirt-detail-2.jpg";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

import logoDormeuil from "@/assets/logo-dormeuil.png";
import logoHollandSherry from "@/assets/logo-holland-sherry.png";
import logoLoroPiana from "@/assets/logo-loro-piana.png";
import logoScabal from "@/assets/logo-scabal.png";
import logoVbc from "@/assets/logo-vbc.png";
import logoZegna from "@/assets/logo-zegna.png";

import visitBg from "@/assets/visit-bg.jpg";

const fabricImages = [fab1, fab2, fab3, fab4, fab5, fab6, fab1, fab2, fab3, fab4, fab5, fab6];

const collectionItems: { img: string; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { img: catBusiness, titleKey: "collection.business", descKey: "collection.business.desc" },
  { img: catWedding, titleKey: "collection.wedding", descKey: "collection.wedding.desc" },
  { img: catTuxedo, titleKey: "collection.tuxedo", descKey: "collection.tuxedo.desc" },
  { img: catCasual, titleKey: "collection.casual", descKey: "collection.casual.desc" },
];

const shopItems: {
  img: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  price: string;
}[] = [
  { img: shopShirts, titleKey: "shop.shirts", descKey: "shop.shirts.desc", price: "€150" },
  { img: shopPolos, titleKey: "shop.polos", descKey: "shop.polos.desc", price: "€120" },
  { img: shopCoats, titleKey: "shop.coats", descKey: "shop.coats.desc", price: "€890" },
  { img: shopBowties, titleKey: "shop.bowties", descKey: "shop.bowties.desc", price: "€85" },
];

const processSteps: {
  num: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}[] = [
  { num: "01", titleKey: "process.consultation", descKey: "process.consultation.desc" },
  { num: "02", titleKey: "process.measurements", descKey: "process.measurements.desc" },
  { num: "03", titleKey: "process.fitting", descKey: "process.fitting.desc" },
  { num: "04", titleKey: "process.delivery", descKey: "process.delivery.desc" },
];

const testimonials: {
  quoteKey: TranslationKey;
  roleKey: TranslationKey;
  img: string;
}[] = [
  { quoteKey: "testimonials.1.quote", roleKey: "testimonials.1.role", img: testimonial1 },
  { quoteKey: "testimonials.2.quote", roleKey: "testimonials.2.role", img: testimonial2 },
  { quoteKey: "testimonials.3.quote", roleKey: "testimonials.3.role", img: testimonial3 },
];

const faqKeys: { q: TranslationKey; a: TranslationKey }[] = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
];

const partnerLogos = [logoDormeuil, logoHollandSherry, logoLoroPiana, logoScabal, logoVbc, logoZegna];

// Pricing data (mirrors src/components/Pricing.tsx)
const priceCategories: { id: string; en: string; nl: string; fr: string }[] = [
  { id: "suits", en: "Suits", nl: "Kostuums", fr: "Costumes" },
  { id: "shirts", en: "Shirts", nl: "Hemden", fr: "Chemises" },
  { id: "accessories", en: "Accessories", nl: "Accessoires", fr: "Accessoires" },
];

const tiers: Record<string, { name: TranslationKey; price: string; descKey: TranslationKey; features: TranslationKey[]; featured?: boolean }[]> = {
  suits: [
    { name: "pricing.essential", price: "€890", descKey: "pricing.essential.desc", features: ["pricing.essential.f1","pricing.essential.f2","pricing.essential.f3","pricing.essential.f4"] },
    { name: "pricing.signature", price: "€1,490", descKey: "pricing.signature.desc", features: ["pricing.signature.f1","pricing.signature.f2","pricing.signature.f3","pricing.signature.f4","pricing.signature.f5"], featured: true },
    { name: "pricing.premium", price: "€2,290", descKey: "pricing.premium.desc", features: ["pricing.premium.f1","pricing.premium.f2","pricing.premium.f3","pricing.premium.f4","pricing.premium.f5"] },
    { name: "pricing.bespoke", price: "€3,490", descKey: "pricing.bespoke.desc", features: ["pricing.bespoke.f1","pricing.bespoke.f2","pricing.bespoke.f3","pricing.bespoke.f4","pricing.bespoke.f5"] },
  ],
  shirts: [
    { name: "pricing.essential", price: "€150", descKey: "pricing.essential.desc", features: ["pricing.essential.f1","pricing.essential.f2","pricing.essential.f3"] },
    { name: "pricing.signature", price: "€220", descKey: "pricing.signature.desc", features: ["pricing.signature.f1","pricing.signature.f2","pricing.signature.f3","pricing.signature.f4"], featured: true },
    { name: "pricing.premium", price: "€350", descKey: "pricing.premium.desc", features: ["pricing.premium.f1","pricing.premium.f2","pricing.premium.f3","pricing.premium.f4"] },
  ],
  accessories: [
    { name: "pricing.essential", price: "€45", descKey: "pricing.essential.desc", features: ["pricing.essential.f1","pricing.essential.f2"] },
    { name: "pricing.signature", price: "€85", descKey: "pricing.signature.desc", features: ["pricing.signature.f1","pricing.signature.f2","pricing.signature.f3"], featured: true },
    { name: "pricing.premium", price: "€150", descKey: "pricing.premium.desc", features: ["pricing.premium.f1","pricing.premium.f2","pricing.premium.f3"] },
  ],
};

const filterItems: { id: string; label: Record<Language, string>; basePrice: number }[] = [
  { id: "suit", label: { en: "Bespoke Suit", nl: "Maatpak", fr: "Costume" }, basePrice: 1490 },
  { id: "shirt", label: { en: "Custom Shirt", nl: "Hemd op Maat", fr: "Chemise" }, basePrice: 220 },
  { id: "accessories", label: { en: "Accessories", nl: "Accessoires", fr: "Accessoires" }, basePrice: 85 },
];

const ateliers: { city: string; address: string; hours: string }[] = [
  { city: "Brussels", address: "Rue de Namur 48 — 1000", hours: "Tue – Sat / 10 – 18" },
  { city: "Antwerp", address: "By appointment", hours: "Trunk shows monthly" },
  { city: "Paris", address: "By appointment", hours: "Trunk shows quarterly" },
];

const Editorial = () => {
  const { t, language, setLanguage } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [claimOpen, setClaimOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const [activeCat, setActiveCat] = useState<string>("suits");
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["suit"]);

  const aboutRef = useRef<HTMLElement | null>(null);
  const collectionRef = useRef<HTMLElement | null>(null);
  const processRef = useRef<HTMLElement | null>(null);
  const pricingRef = useRef<HTMLElement | null>(null);
  const faqRef = useRef<HTMLElement | null>(null);
  const connectRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.title = "Alex Nass — Bespoke Tailoring · Brussels";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Alex Nass — bespoke tailoring from the heart of Brussels. By measure, by hand. By appointment only.");
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const toggleFilter = (id: string) =>
    setSelectedFilters((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const totalPrice = selectedFilters.reduce((sum, id) => {
    const item = filterItems.find((f) => f.id === id);
    return sum + (item?.basePrice ?? 0);
  }, 0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const langs: Language[] = ["en", "nl", "fr"];

  const buildLabel: Record<Language, string> = {
    en: "Build Your Package",
    nl: "Stel uw pakket samen",
    fr: "Composez votre ensemble",
  };
  const totalLabel: Record<Language, string> = {
    en: "Estimated Total",
    nl: "Geschatte totaal",
    fr: "Total estimé",
  };
  const claimMore: Record<Language, string> = {
    en: "Claim Offer →",
    nl: "Claim Aanbod →",
    fr: "Profiter de l'Offre →",
  };
  const virtualLabel: Record<Language, string> = {
    en: "Virtual Meeting",
    nl: "Virtuele Afspraak",
    fr: "Rendez-vous Virtuel",
  };

  return (
    <>
      <Helmet>
        <title>Editorial — Bespoke tailoring, on the page | Alex Nass</title>
        <meta name="description" content="An editorial view of the Alex Nass atelier: cloth, craft and the quiet details of a bespoke suit from Leuven." />
        <link rel="canonical" href="https://bespoke-canvas-charm.lovable.app/editorial" />
        <meta property="og:title" content="Editorial — Bespoke tailoring, on the page | Alex Nass" />
        <meta property="og:description" content="An editorial view of the Alex Nass atelier: cloth, craft and the quiet details of a bespoke suit from Leuven." />
        <meta property="og:url" content="https://bespoke-canvas-charm.lovable.app/editorial" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-white text-black font-mono selection:bg-black selection:text-white">
        {/* CREASE LINES — fixed quadrant overlay */}
        <div className="pointer-events-none fixed inset-0 z-30">
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black/10" />
          <div className="absolute left-0 right-0 top-1/2 h-px bg-black/10" />
        </div>

        {/* TOP NAV */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-sm border-b border-black/10">
          <div className="grid grid-cols-12 items-center px-6 md:px-10 h-16">
            <div className="col-span-3 md:col-span-3 text-[10px] tracking-[0.4em] uppercase">
              <span className="hidden md:inline">EST. MMXII · BRUSSELS</span>
              <span className="md:hidden">MAISON DAEL</span>
            </div>

            <nav className="hidden md:flex col-span-6 justify-center items-center gap-5 text-[10px] tracking-[0.4em] uppercase">
              <button onClick={() => scrollTo(collectionRef)} className="hover:opacity-50 transition-opacity">{t("nav.collection")}</button>
              <span className="w-6 h-px bg-black" />
              <button onClick={() => scrollTo(processRef)} className="hover:opacity-50 transition-opacity">{t("nav.process")}</button>
              <span className="w-6 h-px bg-black" />
              <button onClick={() => scrollTo(pricingRef)} className="hover:opacity-50 transition-opacity">{t("nav.pricing")}</button>
              <span className="w-6 h-px bg-black" />
              <button onClick={() => scrollTo(faqRef)} className="hover:opacity-50 transition-opacity">{t("nav.faq")}</button>
            </nav>

            <div className="col-span-9 md:col-span-3 flex justify-end items-center gap-4">
              {/* Language switcher */}
              <div className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase">
                {langs.map((l, i) => (
                  <span key={l} className="flex items-center gap-2">
                    <button
                      onClick={() => setLanguage(l)}
                      className={`transition-opacity ${language === l ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                    >
                      {l.toUpperCase()}
                    </button>
                    {i < langs.length - 1 && <span className="w-2 h-px bg-black/30" />}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setBookingOpen(true)}
                className="hidden md:inline-block text-[10px] tracking-[0.4em] uppercase border border-black px-5 py-2.5 hover:bg-black hover:text-white transition-colors"
              >
                {t("nav.book")}
              </button>

              <button
                className="md:hidden text-black p-1"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" strokeWidth={1.2} />
              </button>
            </div>
          </div>
        </header>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[55] bg-white animate-in fade-in duration-200">
            <div className="flex items-center justify-between px-6 h-16 border-b border-black/10">
              <span className="text-[10px] tracking-[0.4em] uppercase">MAISON DAEL</span>
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Close" className="p-1">
                <X className="w-5 h-5" strokeWidth={1.2} />
              </button>
            </div>
            <div className="px-8 py-12 flex flex-col gap-8">
              {[
                { ref: collectionRef, key: "nav.collection" as TranslationKey },
                { ref: processRef, key: "nav.process" as TranslationKey },
                { ref: pricingRef, key: "nav.pricing" as TranslationKey },
                { ref: faqRef, key: "nav.faq" as TranslationKey },
                { ref: connectRef, key: "footer.contact" as TranslationKey },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => { scrollTo(item.ref); setMobileMenuOpen(false); }}
                  className="text-left font-sans font-black uppercase text-3xl tracking-tight"
                >
                  {t(item.key)}
                </button>
              ))}
              <div className="pt-8 border-t border-black/10 flex gap-4 text-[10px] tracking-[0.4em] uppercase">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLanguage(l)}
                    className={language === l ? "underline underline-offset-4" : "opacity-40"}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
              <button
                onClick={() => { setBookingOpen(true); setMobileMenuOpen(false); }}
                className="mt-4 text-[10px] tracking-[0.4em] uppercase border border-black px-5 py-3 hover:bg-black hover:text-white transition-colors w-full"
              >
                {t("nav.book")}
              </button>
            </div>
          </div>
        )}

        {/* HERO */}
        <section className="relative h-screen w-full overflow-hidden pt-16">
          <img
            src={heroImg}
            alt={t("hero.img_alt")}
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Vertical city labels */}
          <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-10 text-white text-[10px] tracking-[0.6em] uppercase">
            <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Brussels</span>
            <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Antwerp</span>
            <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Paris</span>
          </div>

          {/* Centered logo */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-white">
            <p className="text-[10px] tracking-[0.6em] uppercase mb-8 opacity-70">{t("hero.tag")}</p>
            <h1 className="font-sans font-black text-[clamp(2.8rem,10vw,10rem)] leading-none tracking-[0.12em] text-center uppercase">
              Maison<br />
              <span className="block tracking-[0.28em] text-[clamp(1.5rem,5vw,5rem)] mt-2 font-light">Dael</span>
            </h1>
            <div className="mt-12 w-px h-16 bg-white/40" />
            <p className="mt-6 text-[10px] tracking-[0.5em] uppercase opacity-70 text-center max-w-md">{t("hero.h1.1")} {t("hero.h1.accent")} {t("hero.h1.2")}</p>

            <div className="mt-12 flex gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="text-[10px] tracking-[0.4em] uppercase border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
              >
                {t("hero.cta")}
              </button>
              <button
                onClick={() => scrollTo(collectionRef)}
                className="hidden md:inline-block text-[10px] tracking-[0.4em] uppercase px-6 py-3 hover:opacity-60 transition-opacity"
              >
                {t("hero.explore")} →
              </button>
            </div>
          </div>

          {/* Frame ticks */}
          <div className="absolute top-20 left-6 right-6 md:left-10 md:right-10 flex justify-between text-white text-[9px] tracking-[0.4em] uppercase opacity-60">
            <span>N 50°50'</span>
            <span>E 04°21'</span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 flex justify-between text-white text-[9px] tracking-[0.4em] uppercase opacity-60">
            <span>Scroll —</span>
            <span>01 / 09</span>
          </div>
        </section>

        {/* MANIFESTO */}
        <section ref={aboutRef} className="relative py-32 md:py-48 px-6 md:px-10 border-t border-black/10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3 text-[10px] tracking-[0.4em] uppercase">
              <p className="mb-2">— 001</p>
              <p className="text-black/60">A Manifesto</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-sans font-black uppercase tracking-[0.05em] leading-[0.9] text-[clamp(3rem,11vw,11rem)]">
                Bespoke<br />Tailoring
              </h2>
              <p className="mt-12 max-w-md text-sm leading-relaxed text-black/70 tracking-wide italic">
                "{t("hero.quote")}"
              </p>
              <p className="mt-4 text-[10px] tracking-[0.4em] uppercase text-black/50">— Alex Nass, Brussels</p>
            </div>
          </div>
        </section>

        {/* COLLECTION */}
        <section ref={collectionRef} id="collection" className="relative px-6 md:px-10 py-32 md:py-48 border-t border-black/10">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-3 text-[10px] tracking-[0.4em] uppercase">
              <p className="mb-2">— 002</p>
              <p className="text-black/60">{t("collection.tag")}</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-sans font-black uppercase tracking-[0.05em] leading-[0.9] text-[clamp(2rem,7vw,7rem)]">
                {t("collection.title")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
            {collectionItems.map((cat, i) => (
              <article key={i} className="bg-white group cursor-pointer relative overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={cat.img}
                    alt={t(cat.titleKey)}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute top-4 left-4 text-white text-[10px] tracking-[0.4em] uppercase mix-blend-difference">
                  — 00{i + 1}
                </div>
                <div className="p-6 md:p-8 flex items-baseline justify-between border-t border-black/10">
                  <div>
                    <h3 className="font-sans font-black uppercase text-2xl md:text-3xl tracking-tight">
                      {t(cat.titleKey)}
                    </h3>
                    <p className="mt-2 text-xs text-black/60 tracking-wide">{t(cat.descKey)}</p>
                  </div>
                  <span className="text-[10px] tracking-[0.4em] uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                    View →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TAILORED SHIRTS — overlapping image + text */}
        <section className="relative px-6 md:px-10 py-24 md:py-40 border-t border-black/10">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-7 relative">
              <div className="border-[12px] md:border-[20px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
                <img src={shirtDetail1} alt={t("shirts.tag")} className="w-full h-auto block grayscale" loading="lazy" />
              </div>
              <p className="mt-4 text-[10px] tracking-[0.4em] uppercase text-black/60">Fig. 02 — {t("shirts.tag")}</p>

              <div className="hidden md:block absolute -bottom-16 -right-8 w-48 border-[12px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
                <img src={shirtDetail2} alt="Detail" className="w-full h-auto block grayscale" loading="lazy" />
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 md:-ml-32 md:mt-32 relative md:z-10">
              <div className="bg-white p-6 md:p-10 border border-black/10">
                <p className="text-[10px] tracking-[0.4em] uppercase mb-6">— Chapter II / {t("shirts.tag")}</p>
                <h3 className="font-sans font-black uppercase text-3xl md:text-5xl leading-[0.95] tracking-tight mb-6">
                  {t("shirts.title")}
                </h3>
                <ul className="space-y-3 text-sm text-black/70 mb-8">
                  {(["shirts.point1","shirts.point2","shirts.point3","shirts.point4"] as TranslationKey[]).map((key) => (
                    <li key={key} className="flex gap-3 items-baseline">
                      <span className="text-[10px] tracking-[0.4em] text-black/40 shrink-0">—</span>
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline justify-between border-t border-black/10 pt-6">
                  <span className="font-sans font-black text-3xl">€150</span>
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="text-[10px] tracking-[0.4em] uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity"
                  >
                    {t("shirts.cta")} →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SHOP */}
        <section className="relative px-6 md:px-10 py-32 md:py-48 border-t border-black/10">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-3 text-[10px] tracking-[0.4em] uppercase">
              <p className="mb-2">— 003</p>
              <p className="text-black/60">{t("shop.tag")}</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-sans font-black uppercase tracking-[0.05em] leading-[0.9] text-[clamp(2rem,7vw,7rem)]">
                {t("shop.title")}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {shopItems.map((item, i) => (
              <article key={i} className="bg-white group cursor-pointer flex flex-col">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.img}
                    alt={t(item.titleKey)}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col gap-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-sans font-black uppercase text-sm md:text-base tracking-tight">
                      {t(item.titleKey)}
                    </h3>
                    <span className="text-[10px] tracking-[0.3em] uppercase">{item.price}</span>
                  </div>
                  <p className="text-[11px] text-black/60 leading-relaxed line-clamp-2">{t(item.descKey)}</p>
                  <button className="mt-3 text-[10px] tracking-[0.4em] uppercase text-left border-b border-black pb-1 hover:opacity-50 transition-opacity self-start">
                    {t("shop.cta")}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* MATERIALS / HOVER REVEAL */}
        <section className="relative px-6 md:px-10 py-32 md:py-48 border-t border-black/10">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-3 text-[10px] tracking-[0.4em] uppercase">
              <p className="mb-2">— 004</p>
              <p className="text-black/60">{t("partners.tag")}</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className="text-[10px] tracking-[0.4em] uppercase text-black/60 mb-2">Hover to reveal</p>
              <h2 className="font-sans font-black uppercase tracking-[0.05em] leading-[0.9] text-[clamp(2rem,6vw,6rem)]">
                Two Hundred<br />Bolts. One Cut.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 min-h-[60vh]">
            <ul className="col-span-12 md:col-span-7 divide-y divide-black/10 border-y border-black/10">
              {[
                { label: "WORSTED WOOL", img: fab1 },
                { label: "PINSTRIPE", img: fab2 },
                { label: "MOTHER OF PEARL", img: fab3 },
                { label: "TWEED", img: fab4 },
                { label: "CONSTRUCTION", img: fab5 },
                { label: "SILVER BUTTON", img: fab6 },
              ].map((item, i) => (
                <li
                  key={item.label}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group cursor-pointer py-6 md:py-8 flex items-baseline justify-between"
                >
                  <span
                    className={`font-sans font-black uppercase text-3xl md:text-6xl tracking-tight transition-all duration-500 ${
                      hovered === i ? "translate-x-4 italic" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-black/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
            <div className="hidden md:block col-span-5 sticky top-24 h-[60vh]">
              <div className="relative w-full h-full overflow-hidden border-[16px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
                {[fab1, fab2, fab3, fab4, fab5, fab6].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hovered === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                {hovered === null && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                    <p className="text-[10px] tracking-[0.4em] uppercase text-black/40">— Awaiting selection</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Partner logos strip */}
          <div className="mt-24 pt-16 border-t border-black/10">
            <p className="text-[10px] tracking-[0.4em] uppercase text-black/60 mb-10 text-center">{t("partners.tag")}</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {partnerLogos.map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt=""
                  className="w-full h-12 object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section ref={processRef} id="process" className="relative px-6 md:px-10 py-32 md:py-48 border-t border-black/10 bg-black text-white">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-3 text-[10px] tracking-[0.4em] uppercase">
              <p className="mb-2 opacity-60">— 005</p>
              <p className="opacity-60">{t("process.tag")}</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-sans font-black uppercase tracking-[0.05em] leading-[0.9] text-[clamp(2rem,7vw,7rem)]">
                {t("process.title")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {processSteps.map((step) => (
              <div key={step.num} className="bg-black p-8 md:p-10 group">
                <p className="font-sans font-black text-6xl md:text-7xl opacity-30 group-hover:opacity-100 transition-opacity">
                  {step.num}
                </p>
                <h3 className="mt-6 font-sans font-black uppercase text-xl md:text-2xl tracking-tight">
                  {t(step.titleKey)}
                </h3>
                <p className="mt-4 text-xs text-white/60 leading-relaxed">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="relative px-6 md:px-10 py-32 md:py-48 border-t border-black/10">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-3 text-[10px] tracking-[0.4em] uppercase">
              <p className="mb-2">— 006</p>
              <p className="text-black/60">{t("testimonials.tag")}</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-sans font-black uppercase tracking-[0.05em] leading-[0.9] text-[clamp(2rem,7vw,7rem)]">
                {t("testimonials.title")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {testimonials.map((tm, i) => (
              <article key={i} className="bg-white p-8 md:p-10 flex flex-col">
                <p className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-6">— Client {String(i + 1).padStart(2, "0")}</p>
                <div className="aspect-[4/5] mb-6 overflow-hidden border border-black/10">
                  <img src={tm.img} alt="" loading="lazy" className="w-full h-full object-cover grayscale" />
                </div>
                <p className="text-sm leading-relaxed text-black/70 italic flex-1">"{t(tm.quoteKey)}"</p>
                <p className="mt-6 text-[10px] tracking-[0.4em] uppercase text-black/50">{t(tm.roleKey)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section ref={pricingRef} id="pricing" className="relative px-6 md:px-10 py-32 md:py-48 border-t border-black/10">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-3 text-[10px] tracking-[0.4em] uppercase">
              <p className="mb-2">— 007</p>
              <p className="text-black/60">{t("pricing.tag")}</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-sans font-black uppercase tracking-[0.05em] leading-[0.9] text-[clamp(2rem,7vw,7rem)]">
                {t("pricing.title")}
              </h2>
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex border-y border-black/10 mb-10">
            {priceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`flex-1 py-5 text-[10px] tracking-[0.4em] uppercase border-r border-black/10 last:border-r-0 transition-colors ${
                  activeCat === cat.id ? "bg-black text-white" : "hover:bg-black/5"
                }`}
              >
                {cat[language]}
              </button>
            ))}
          </div>

          {/* Build your package */}
          <div className="grid grid-cols-12 gap-6 mb-12 border border-black/10 p-6 md:p-8">
            <div className="col-span-12 md:col-span-4">
              <p className="text-[10px] tracking-[0.4em] uppercase text-black/60 mb-3">— Composer</p>
              <p className="font-sans font-black uppercase text-2xl md:text-3xl tracking-tight">
                {buildLabel[language]}
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 flex flex-col gap-5">
              <div className="flex flex-wrap gap-2">
                {filterItems.map((item) => {
                  const active = selectedFilters.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleFilter(item.id)}
                      className={`text-[10px] tracking-[0.3em] uppercase border px-4 py-2.5 transition-colors ${
                        active ? "bg-black text-white border-black" : "border-black/30 hover:border-black"
                      }`}
                    >
                      {item.label[language]} <span className="opacity-60 ml-2">€{item.basePrice}</span>
                    </button>
                  );
                })}
              </div>
              <div className="flex items-baseline justify-between border-t border-black/10 pt-5">
                <span className="text-[10px] tracking-[0.4em] uppercase text-black/60">{totalLabel[language]}</span>
                <span className="font-sans font-black text-4xl md:text-5xl">€{totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Tier cards — horizontal scroll */}
          <div className="overflow-x-auto -mx-6 md:-mx-10 px-6 md:px-10 pb-2">
            <div className="flex gap-px bg-black/10 border border-black/10 min-w-fit">
              {tiers[activeCat].map((tier) => (
                <div
                  key={tier.name}
                  className={`bg-white p-8 md:p-10 min-w-[280px] md:min-w-[320px] flex flex-col ${
                    tier.featured ? "outline outline-2 outline-black -outline-offset-2" : ""
                  }`}
                >
                  {tier.featured && (
                    <p className="text-[10px] tracking-[0.4em] uppercase mb-6">— {t("pricing.popular")}</p>
                  )}
                  <h3 className="font-sans font-black uppercase text-2xl tracking-tight">{t(tier.name)}</h3>
                  <p className="mt-3 text-xs text-black/60 leading-relaxed">{t(tier.descKey)}</p>
                  <p className="mt-8 font-sans font-black text-5xl">{tier.price}</p>
                  <ul className="mt-8 space-y-3 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-black/70 items-baseline">
                        <span className="text-[10px] tracking-[0.4em] text-black/40 shrink-0">—</span>
                        <span>{t(f)}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setBookingOpen(true)}
                    className={`mt-10 text-[10px] tracking-[0.4em] uppercase border px-5 py-3 transition-colors ${
                      tier.featured
                        ? "bg-black text-white border-black hover:bg-white hover:text-black"
                        : "border-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {t("pricing.cta")} →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Custom request */}
          <div className="mt-16 grid grid-cols-12 gap-6 border-t border-black/10 pt-16">
            <div className="col-span-12 md:col-span-6 md:col-start-4 text-center">
              <h3 className="font-sans font-black uppercase text-2xl md:text-3xl tracking-tight">
                {t("pricing.custom.title")}
              </h3>
              <p className="mt-4 text-sm text-black/60 leading-relaxed">{t("pricing.custom.desc")}</p>
              <button
                onClick={() => setBookingOpen(true)}
                className="mt-8 text-[10px] tracking-[0.4em] uppercase border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
              >
                {t("pricing.custom.cta")} →
              </button>
            </div>
          </div>
        </section>

        {/* PROMOTION — bleeding image */}
        <section className="relative py-32 md:py-48 border-t border-black/10 overflow-hidden">
          <div className="grid grid-cols-12 gap-6 px-6 md:px-10">
            <div className="col-span-12 md:col-span-5">
              <p className="text-[10px] tracking-[0.4em] uppercase mb-6">— 008 / {t("promo.tag")}</p>
              <h3 className="font-sans font-black uppercase text-4xl md:text-7xl leading-[0.9] tracking-tight mb-8">
                {t("promo.title")}
              </h3>
              <p className="text-sm leading-relaxed text-black/70 max-w-sm">{t("promo.desc")}</p>
              <p className="mt-6 text-[10px] tracking-[0.4em] uppercase text-black/50">{t("promo.trust")}</p>
              <button
                onClick={() => setClaimOpen(true)}
                className="mt-12 text-[10px] tracking-[0.4em] uppercase border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
              >
                {claimMore[language]}
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] hidden md:block">
            <div className="border-l-[20px] border-y-[20px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
              <img src={feature2} alt="Atelier" className="w-full h-auto block grayscale" loading="lazy" />
            </div>
          </div>
          <div className="md:hidden mt-10 px-6">
            <img src={feature2} alt="" className="w-full h-auto block border-[12px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] grayscale" loading="lazy" />
          </div>
        </section>

        {/* FABRIC LIBRARY GRID */}
        <section className="relative px-6 md:px-10 py-32 md:py-48 border-t border-black/10">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-3 text-[10px] tracking-[0.4em] uppercase">
              <p className="mb-2">— 009</p>
              <p className="text-black/60">The Cloth Library</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-sans font-black uppercase tracking-[0.05em] leading-[0.9] text-[clamp(2rem,6vw,6rem)]">
                Two Hundred<br />Bolts. One Cut.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-px bg-black/10 border border-black/10">
            {fabricImages.map((src, i) => (
              <div key={i} className="aspect-square bg-white overflow-hidden group cursor-pointer">
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </section>

        {/* VISIT / ATELIER — bleeding image second variant */}
        <section className="relative py-32 md:py-48 border-t border-black/10 overflow-hidden">
          <div className="grid grid-cols-12 gap-6 px-6 md:px-10">
            <div className="col-span-12 md:col-span-5">
              <p className="text-[10px] tracking-[0.4em] uppercase mb-6">— 010 / {t("visit.tag")}</p>
              <h3 className="font-sans font-black uppercase text-4xl md:text-7xl leading-[0.9] tracking-tight mb-8">
                {t("visit.title")}
              </h3>
              <p className="text-sm leading-relaxed text-black/70 max-w-sm">{t("visit.desc")}</p>
              <ul className="mt-12 space-y-3 text-[10px] tracking-[0.4em] uppercase">
                {ateliers.map((a) => (
                  <li key={a.city} className="grid grid-cols-12 gap-2 border-b border-black/10 pb-3">
                    <span className="col-span-3">{a.city}</span>
                    <span className="col-span-6 text-black/60 normal-case tracking-normal">{a.address}</span>
                    <span className="col-span-3 text-black/60 text-right normal-case tracking-normal">{a.hours}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="text-[10px] tracking-[0.4em] uppercase border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
                >
                  {t("visit.cta")} →
                </button>
                <button
                  onClick={() => setBookingOpen(true)}
                  className="text-[10px] tracking-[0.4em] uppercase border border-black/30 px-6 py-3 hover:border-black transition-colors"
                >
                  {virtualLabel[language]} →
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50%] hidden md:block opacity-0">
            {/* spacer */}
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] hidden md:block">
            <div className="border-l-[20px] border-y-[20px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
              <img src={visitBg} alt="Atelier" className="w-full h-auto block grayscale" loading="lazy" />
            </div>
          </div>
          <div className="md:hidden mt-10 px-6">
            <img src={visitBg} alt="" className="w-full h-auto block border-[12px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] grayscale" loading="lazy" />
          </div>
        </section>

        {/* FAQ */}
        <section ref={faqRef} id="faq" className="relative px-6 md:px-10 py-32 md:py-48 border-t border-black/10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4 md:sticky md:top-24 md:self-start">
              <p className="text-[10px] tracking-[0.4em] uppercase mb-2">— 011</p>
              <p className="text-[10px] tracking-[0.4em] uppercase text-black/60 mb-8">{t("faq.tag")}</p>
              <h2 className="font-sans font-black uppercase tracking-[0.05em] leading-[0.9] text-[clamp(2rem,5vw,5rem)]">
                {t("faq.title")}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <Accordion type="single" collapsible className="w-full">
                {faqKeys.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`f-${i}`}
                    className="border-t border-black/10 last:border-b"
                  >
                    <AccordionTrigger className="font-sans font-black uppercase text-lg md:text-2xl tracking-tight py-6 hover:no-underline text-left">
                      <span className="flex items-baseline gap-4">
                        <span className="text-[10px] tracking-[0.4em] text-black/40 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                        {t(f.q)}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-black/70 leading-relaxed pb-6 pl-10">
                      {t(f.a)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CONNECT / FOOTER */}
        <footer ref={connectRef} id="connect" className="relative bg-black text-white px-6 md:px-10 py-24 md:py-32 border-t border-black/10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <p className="text-[10px] tracking-[0.4em] uppercase mb-8 opacity-60">— Connect / {t("cta.tag")}</p>
              <h3 className="font-sans font-black uppercase text-4xl md:text-7xl leading-[0.9] tracking-tight">
                {t("cta.title")}
              </h3>
              <p className="mt-8 max-w-md text-sm leading-relaxed opacity-60">{t("cta.desc")}</p>
              <div className="mt-12 flex flex-wrap gap-3">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="text-[10px] tracking-[0.4em] uppercase border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
                >
                  {t("cta.button")} →
                </button>
                <button
                  onClick={() => setWaitlistOpen(true)}
                  className="text-[10px] tracking-[0.4em] uppercase border border-white/30 px-6 py-3 hover:border-white transition-colors"
                >
                  Join Waitlist →
                </button>
              </div>
              <p className="mt-6 text-[10px] tracking-[0.4em] uppercase opacity-50">{t("cta.urgency")}</p>
            </div>

            <div className="col-span-6 md:col-span-2 mt-16 md:mt-0">
              <p className="text-[10px] tracking-[0.4em] uppercase mb-6 opacity-60">{t("footer.services")}</p>
              <ul className="space-y-3 text-sm">
                <li><a href="#collection" className="hover:opacity-60">{t("footer.wedding_suits")}</a></li>
                <li><a href="#collection" className="hover:opacity-60">{t("footer.business_suits")}</a></li>
                <li><a href="#collection" className="hover:opacity-60">{t("footer.tuxedos")}</a></li>
                <li><a href="#collection" className="hover:opacity-60">{t("footer.smart_casual")}</a></li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-2 mt-16 md:mt-0">
              <p className="text-[10px] tracking-[0.4em] uppercase mb-6 opacity-60">{t("footer.information")}</p>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => scrollTo(processRef)} className="hover:opacity-60">{t("footer.our_process")}</button></li>
                <li><button onClick={() => scrollTo(pricingRef)} className="hover:opacity-60">{t("footer.pricing")}</button></li>
                <li><button onClick={() => scrollTo(faqRef)} className="hover:opacity-60">{t("footer.faq")}</button></li>
                <li><a href="/" className="hover:opacity-60">← Classic Site</a></li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-2 mt-16 md:mt-0">
              <p className="text-[10px] tracking-[0.4em] uppercase mb-6 opacity-60">{t("newsletter.tag")}</p>
              {subscribed ? (
                <p className="text-sm">{t("newsletter.thanks")}</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("newsletter.placeholder")}
                    className="bg-transparent border-b border-white/30 py-2 text-sm focus:outline-none focus:border-white placeholder:text-white/30"
                  />
                  <button
                    type="submit"
                    className="text-[10px] tracking-[0.4em] uppercase text-left hover:opacity-60 transition-opacity self-start"
                  >
                    {t("newsletter.cta")} →
                  </button>
                </form>
              )}
              <p className="mt-4 text-[10px] opacity-30">{t("newsletter.privacy")}</p>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-white/10 grid grid-cols-12 gap-4 text-[10px] tracking-[0.4em] uppercase opacity-50">
            <span className="col-span-12 md:col-span-4">© MMXXV Alex Nass</span>
            <span className="col-span-6 md:col-span-4 text-center">Rue de Namur 48 · 1000 Brussels</span>
            <span className="col-span-6 md:col-span-4 md:text-right">info@maisondael.be</span>
          </div>
        </footer>

        {/* WAITLIST OVERLAY */}
        {waitlistOpen && (
          <div className="fixed inset-0 z-[60] bg-white animate-in fade-in duration-300">
            <button
              onClick={() => { setWaitlistOpen(false); setWaitlistSubmitted(false); setWaitlistEmail(""); }}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-[10px] tracking-[0.4em] uppercase border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
            >
              Close ×
            </button>
            <div className="h-full flex flex-col items-center justify-center px-6 max-w-2xl mx-auto text-center">
              <p className="text-[10px] tracking-[0.4em] uppercase mb-8">— Volume I</p>
              <h3 className="font-sans font-black uppercase text-4xl md:text-7xl leading-[0.9] tracking-tight mb-10">
                The Waitlist
              </h3>
              {waitlistSubmitted ? (
                <p className="text-sm text-black/60">— Thank you. You will be notified.</p>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); if (waitlistEmail) setWaitlistSubmitted(true); }}
                  className="w-full max-w-md flex flex-col gap-6"
                >
                  <input
                    type="email"
                    required
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="border-b border-black bg-transparent text-center py-3 text-sm tracking-wider focus:outline-none placeholder:text-black/30"
                  />
                  <button
                    type="submit"
                    className="text-[10px] tracking-[0.4em] uppercase border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
                  >
                    Submit →
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* DIALOGS */}
        <AppointmentDialog open={bookingOpen} onOpenChange={setBookingOpen} />
        <ClaimOfferDialog open={claimOpen} onOpenChange={setClaimOpen} />
      </div>
    </>
  );
};

export default Editorial;
