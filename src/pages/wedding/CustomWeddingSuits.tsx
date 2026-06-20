import WeddingPage, { type WeddingContent } from "./WeddingPage";

const content: WeddingContent = {
  locale: "en",
  path: "/custom-wedding-suits",
  title: "Custom Wedding Suits Brussels & Leuven | Alex Nass",
  metaDescription:
    "Bespoke wedding suits crafted near Leuven, Belgium. For grooms and groomsmen across Brussels, Antwerp and Flanders. Premium fabrics, personal fittings — book today.",
  h1: "Custom Wedding Suits — Made in Belgium",
  introTagline: "Bespoke · Leuven & Brussels",
  intro:
    "You wear it once. You remember it forever. From our atelier near Leuven, we craft wedding suits cut entirely for you — fabric, fit and finish chosen with Alex over a few unhurried months. A suit that frees you to focus on the rest of the day.",
  ctaPrimary: "Book your appointment",
  ctaSecondary: "See pricing",
  trustItems: [
    { value: "1", label: "Private tailor" },
    { value: "~40", label: "Grooms per year" },
    { value: "60h+", label: "Work per suit" },
    { value: "3-4", label: "Fittings included" },
  ],
  processTitle: "From first appointment to wedding day",
  processIntro:
    "A bespoke wedding suit is built over several months. That time is what makes the cut truly perfect — and what frees you to focus on everything else.",
  processSteps: [
    { week: "Week 1", title: "Consultation & fabric", desc: "We discuss the venue, season, your style and your budget. You choose from hundreds of fabrics from Loro Piana, Vitale Barberis and Dormeuil." },
    { week: "Week 2", title: "Measurements", desc: "Over 30 precise measurements. We lock in every detail: lapels, buttons, lining, trouser break, cuffs." },
    { week: "Week 4-6", title: "First fitting", desc: "You try the suit in construction. We refine the cut based on how it actually sits on your body." },
    { week: "Week 8-10", title: "Delivery", desc: "Your suit is pressed, packed and ready for the most important day of your life." },
  ],
  pricingTitle: "How much does a custom wedding suit cost?",
  pricingIntro:
    "Transparent pricing, no surprises. Final investment depends on fabric and finishing. A detailed quote follows your first consultation.",
  pricingTiers: [
    {
      name: "Essential",
      price: "from €1,290",
      desc: "A refined entry into bespoke",
      features: ["Premium wool blend", "2 fittings", "Standard lining", "6-week delivery"],
    },
    {
      name: "Signature",
      price: "from €1,890",
      desc: "Our most popular choice for grooms",
      features: ["Super 120s wool or Italian cloth", "3 fittings", "Bemberg lining of choice", "Hand-finished details", "8-week delivery"],
      popular: true,
    },
    {
      name: "Bespoke",
      price: "from €2,890",
      desc: "The ultimate suit, fully hand-made",
      features: ["Loro Piana, Holland & Sherry or Dormeuil", "4+ fittings", "Fully hand-stitched", "Unique pattern drafted for you", "10-12 week delivery"],
    },
  ],
  fabricsTitle: "Fabrics for every season and venue",
  fabricsIntro:
    "Garden wedding in July? A light fresco wool or mohair blend. Winter ceremony in a church? A full wool or velvet. We advise based on season, venue and time of day — so you look impeccable and stay comfortable.",
  fabricHouses: ["Loro Piana", "Vitale Barberis Canonico", "Dormeuil", "Holland & Sherry", "Scabal", "Drago"],
  fittingsTitle: "How many fittings?",
  fittingsBody:
    "For a wedding suit we plan at least three fittings: structure, refinement, finish. The last fitting is roughly two weeks before the wedding. On request we travel to your home or office in Brussels, Leuven, Mechelen or anywhere within 35 km.",
  timingTitle: "When to book",
  timingBody:
    "We recommend a first consultation at least 4 months before the wedding. In peak season (May to September), 6 months is safer.",
  timingTimeline: [
    { months: "6 mo", what: "Ideal: room for special fabrics and groomsmen" },
    { months: "4 mo", what: "Comfortable for all three fittings" },
    { months: "3 mo", what: "Possible for Signature and Essential" },
    { months: "<8 wks", what: "Express option — subject to availability" },
  ],
  testimonialsTitle: "What grooms say",
  testimonials: [
    {
      quote: "Alex understood exactly what I wanted: timeless but personal. The fit on the day was extraordinary.",
      name: "James W.",
      context: "Wedding in Brussels · 2025",
    },
    {
      quote: "Two appointments in Leuven, then Alex came to our home for the final fitting. No fuss, just perfect.",
      name: "Marc & Sophie",
      context: "Destination wedding · Tuscany",
    },
    {
      quote: "My four groomsmen were dressed at the same atelier. Coherent without being uniform. Nobody clashed.",
      name: "David K.",
      context: "Wedding in Antwerp",
    },
  ],
  prepTitle: "Groom and groomsmen",
  prepBody:
    "We dress more than the groom. For your father, witnesses or the whole party we offer a coordinated approach: one fabric in different cuts, or a unifying lining and accessory choice. One appointment, one vision.",
  prepBullets: [
    "Complete outfit: suit, shirt, tie, pocket square",
    "Coordination between groom and groomsmen",
    "Guidance on shoes and accessories",
    "Delivered in garment bag, ready for the day",
    "Adjustments possible up to the wedding eve",
    "Discreet advice on silhouette and colour",
  ],
  areaTitle: "We work with grooms across Belgium",
  areaIntro:
    "Our atelier sits near Leuven. We welcome you here, and offer at-home fittings within a 35 km radius.",
  cities: ["Brussels", "Leuven", "Mechelen", "Aarschot", "Tienen", "Diest", "Hasselt", "Antwerp"],
  internalLinks: [
    { label: "Our suits for every occasion", href: "/#collection" },
    { label: "Tailored shirts", href: "/#shirts" },
    { label: "Our 4-step process", href: "/#process" },
    { label: "Read groom testimonials", href: "/#testimonials" },
    { label: "Full FAQ", href: "/#faq" },
    { label: "About Alex Nass", href: "/about" },
    { label: "Costume de mariage (FR)", href: "/costume-mariage-sur-mesure" },
  ],
  faqTitle: "Wedding suit FAQ",
  faqs: [
    {
      q: "How much does a custom wedding suit cost in Belgium?",
      a: "At Alex Nass, a custom wedding suit starts from €1,290 for the Essential line and reaches €2,890+ for fully bespoke with hand-stitching and exclusive cloth. Price depends on fabric, construction method and finishing. You receive a transparent quote after your first consultation.",
    },
    {
      q: "How long does a bespoke wedding suit take?",
      a: "Plan for 6 to 12 weeks from your first appointment. Essential is ready in 6 weeks, Signature in 8, and full bespoke in 10 to 12. We prefer to keep some margin for last-minute refinements.",
    },
    {
      q: "When should I book my first appointment?",
      a: "Ideally 4 to 6 months before the wedding. In peak season (May–September) we recommend 6 months, since both our calendar and the lead times for premium fabrics are longer. Express options are possible from 8 weeks — ask for availability.",
    },
    {
      q: "How many fittings are required?",
      a: "For a wedding suit we plan at least 3 fittings: structure, refinement and final. Bespoke includes 4 by default. Adjustments up to the wedding eve are included.",
    },
    {
      q: "What is the difference between made-to-measure and bespoke?",
      a: "Made-to-measure starts from a base pattern adapted to your measurements — faster and more accessible. Bespoke means a brand-new pattern drafted for your body, with multiple fittings and hand-work. Both deliver excellent fit; bespoke offers the highest level of personalisation.",
    },
    {
      q: "Which fabrics work best for a wedding?",
      a: "It depends on season and venue. Summer weddings: light fresco wool, mohair blends, linen-wool. Winter: wool-cashmere, velvet, or denser cloth from Dormeuil or Loro Piana. We advise you in person during the consultation.",
    },
    {
      q: "Do you offer fittings at my home?",
      a: "Yes. For clients within 35 km of Leuven (Brussels, Mechelen, Aarschot, Tienen, Diest, Hasselt, Antwerp) we offer home or office fittings. International grooms are welcome at the atelier.",
    },
    {
      q: "Can you also dress the groomsmen?",
      a: "Yes — and we recommend it. We work with the whole wedding party: one fabric in different cuts, or coordinated linings and accessories. Book one combined consultation so we align the vision from the start.",
    },
  ],
  finalTitle: "Ready for your first appointment?",
  finalBody:
    "A first consultation lasts about 60 minutes and is fully no-obligation. We discuss your wedding, your style and the possibilities — so you decide afterwards with full confidence.",
};

const CustomWeddingSuits = () => <WeddingPage content={content} />;
export default CustomWeddingSuits;
