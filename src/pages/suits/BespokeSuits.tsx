import WeddingPage, { type WeddingContent } from "../wedding/WeddingPage";

const BASE = "https://bespoke-canvas-charm.lovable.app";

const content: WeddingContent = {
  locale: "en",
  path: "/bespoke-suits",
  title: "Bespoke Suits — Leuven & Brussels | Alex Nass",
  metaDescription:
    "Bespoke suits by tailor Alex Nass — atelier near Leuven, serving Brussels, Antwerp, Mechelen and Hasselt. Premium fabrics, perfect fit, by appointment.",
  h1: "Bespoke suits — by one tailor, for one client",
  introTagline: "Tailor · Leuven · Brussels · Antwerp",
  intro:
    "A bespoke suit isn't a garment, it's a signature. From our atelier near Leuven, Alex dresses you from fabric selection to the final stitch. No off-the-rack, no salespeople — one tailor who designs, cuts and sews your suit.",
  ctaPrimary: "Book an appointment",
  ctaSecondary: "See pricing",
  trustItems: [
    { value: "1", label: "Private tailor" },
    { value: "16+", label: "Years of experience" },
    { value: "60h+", label: "Of work per suit" },
    { value: "2-3", label: "Fittings" },
  ],
  processTitle: "From first consultation to finished suit",
  processIntro:
    "Having a bespoke suit made is measured in weeks, not hours. That time is what gives the suit its cut and the finish its precision.",
  processSteps: [
    { week: "Week 1", title: "Consultation & fabric", desc: "We discuss style, use and budget. You choose from hundreds of fabrics by Loro Piana, Vitale Barberis, Dormeuil and Scabal." },
    { week: "Week 2", title: "Measurements", desc: "More than 30 precise measurements. Lapels, buttons, lining, trouser break, cuffs — everything recorded." },
    { week: "Week 3-4", title: "First fitting", desc: "You try the suit in progress. We refine the cut to your posture and body." },
    { week: "Week 5-6", title: "Delivery", desc: "Pressed, packaged, ready. Or we deliver to your home or office." },
  ],
  pricingTitle: "What does a bespoke suit cost?",
  pricingIntro:
    "Transparent pricing. The final investment depends on fabric and finish level. A detailed quote follows your first consultation.",
  pricingTiers: [
    {
      name: "Essential",
      price: "from €890",
      desc: "A first bespoke suit",
      features: ["Premium wool blend", "2 fittings", "Standard lining", "Delivery in 4-6 weeks"],
    },
    {
      name: "Signature",
      price: "from €1,490",
      desc: "Our most chosen quality",
      features: ["Super 120s or Italian fabric", "3 fittings", "Bemberg lining of choice", "Hand-finished details", "Delivery in 6-8 weeks"],
      popular: true,
    },
    {
      name: "Bespoke",
      price: "from €2,290",
      desc: "Fully hand-made, individual pattern",
      features: ["Loro Piana, Holland & Sherry or Dormeuil", "4+ fittings", "Fully hand-stitched", "Individual pattern", "Delivery in 8-10 weeks"],
    },
  ],
  fabricsTitle: "Fabrics for office, evening and every occasion",
  fabricsIntro:
    "From boardroom to gala. We advise on weight, weave and colour based on how — and how often — you'll wear the suit.",
  fabricHouses: ["Loro Piana", "Vitale Barberis Canonico", "Dormeuil", "Holland & Sherry", "Scabal", "Drago"],
  fittingsTitle: "How many fittings?",
  fittingsBody:
    "For a bespoke suit we plan a minimum of two fittings. The first checks the basic shape, the second refines the cut. For full bespoke a third fitting is added. On request, we travel to your home or office in Brussels, Leuven, Antwerp or elsewhere in Flemish Brabant.",
  timingTitle: "When to book?",
  timingBody:
    "For Essential or Signature, allow 4 to 6 weeks before the date you want to wear the suit. For bespoke, 8 to 10 weeks.",
  timingTimeline: [
    { months: "10 wks", what: "Bespoke fully hand-finished" },
    { months: "8 wks", what: "Comfortable for Signature with 3 fittings" },
    { months: "6 wks", what: "Essential or Signature standard" },
    { months: "4 wks", what: "Express — subject to availability" },
  ],
  testimonialsTitle: "What clients say",
  testimonials: [
    {
      quote: "After years of off-the-rack, the difference is felt from day one.",
      name: "David M.",
      context: "Lawyer · Brussels",
    },
    {
      quote: "Two visits to Leuven, one fitting at the office in Antwerp. Efficient and effortless.",
      name: "Stijn V.",
      context: "Consultant · Antwerp",
    },
    {
      quote: "Alex listens first, advises after. No sales pitch — just craft.",
      name: "Karel D.",
      context: "Entrepreneur · Hasselt",
    },
  ],
  prepTitle: "For work, gala, and everything between",
  prepBody:
    "A daily business suit, a lighter summer suit, an evening suit for a gala — or all three together in a coherent wardrobe.",
  prepBullets: [
    "Complete outfit: suit, shirt, tie, pocket square",
    "Coherent wardrobe across multiple suits",
    "Guidance on shoes and accessories",
    "Delivered in protective garment bag",
    "Adjustments possible with weight changes",
    "Discreet advice on silhouette and colour",
  ],
  areaTitle: "We work across Flemish Brabant and beyond",
  areaIntro:
    "Our atelier is located near Leuven. We welcome you on site, but home or office fittings are also possible within a 35 km radius.",
  cities: ["Leuven", "Brussels", "Antwerp", "Mechelen", "Aarschot", "Tienen", "Diest", "Hasselt"],
  internalLinks: [
    { label: "Custom wedding suits", href: "/custom-wedding-suits" },
    { label: "Tailored shirts", href: "/#shirts" },
    { label: "Our process", href: "/#process" },
    { label: "Client testimonials", href: "/#testimonials" },
    { label: "Full FAQ", href: "/#faq" },
    { label: "About Alex Nass", href: "/about" },
  ],
  faqTitle: "Frequently asked questions",
  faqs: [
    { q: "What's the difference between bespoke and off-the-rack?", a: "Off-the-rack starts from a standard pattern, barely adjusted. Bespoke starts from your measurements — and full bespoke from a pattern drawn specifically for your body. The result fits, drapes and lasts differently." },
    { q: "How much does a bespoke suit cost in Belgium?", a: "At Alex Nass, suits start from €890 (Essential), €1,490 (Signature) and €2,290+ for fully bespoke." },
    { q: "How long does it take to make a bespoke suit?", a: "Allow 4 to 6 weeks for Essential and Signature, and 8 to 10 weeks for fully hand-finished bespoke." },
    { q: "Do you serve clients from Antwerp or Brussels?", a: "Yes. Our atelier is near Leuven, but we welcome clients from across Flemish Brabant, Antwerp, Limburg and Brussels. Home and office fittings within 35 km." },
    { q: "Can I have a suit made for one specific occasion?", a: "Of course. Many clients come for a specific event — a speech, a christening, a gala. We plan the timeline so the suit is ready well in advance." },
  ],
  finalTitle: "Ready for your first bespoke suit?",
  finalBody: "Book a no-commitment consultation at the Leuven atelier. One hour, one conversation — and you'll know what a real bespoke suit can do for you.",
  alternates: [
    { lang: "nl-BE", href: `${BASE}/maatpak-op-maat` },
    { lang: "fr-BE", href: `${BASE}/costume-sur-mesure` },
    { lang: "en", href: `${BASE}/bespoke-suits` },
  ],
  xDefault: `${BASE}/bespoke-suits`,
};

export default function BespokeSuits() {
  return <WeddingPage content={content} />;
}
