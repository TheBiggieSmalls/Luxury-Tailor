import WeddingPage, { type WeddingContent } from "../wedding/WeddingPage";

const BASE = "https://bespoke-canvas-charm.lovable.app";

const content: WeddingContent = {
  locale: "nl",
  path: "/maatpak-op-maat",
  title: "Maatpak op maat in Leuven, Brussel & Antwerpen | Alex Nass",
  metaDescription:
    "Maatpak op maat door kleermaker Alex Nass. Atelier nabij Leuven — we werken voor klanten in Brussel, Antwerpen, Mechelen en Hasselt. Premium stoffen, perfecte pasvorm.",
  h1: "Maatpak op maat — door één kleermaker, voor één klant",
  introTagline: "Kleermaker · Leuven · Brussel · Antwerpen",
  intro:
    "Een maatpak draag je niet voor één moment, maar voor honderden. Voor de meeting, het diner, het feest van een vriend. In ons atelier nabij Leuven maakt Alex je pak volledig op maat: stof, snit, voering, knopen — alles. Geen confectie, geen winkelpersoneel, geen compromissen. Eén kleermaker die je pak ook effectief naait.",
  ctaPrimary: "Plan je afspraak",
  ctaSecondary: "Bekijk de prijzen",
  trustItems: [
    { value: "1", label: "Privé kleermaker" },
    { value: "16+", label: "Jaar ervaring" },
    { value: "60u+", label: "Werk per pak" },
    { value: "2-3", label: "Passessies" },
  ],
  processTitle: "Van eerste consultatie tot afgewerkt pak",
  processIntro:
    "Een maatpak laten maken is geen proces van uren, maar van weken. Zo geven we de stof én jouw pasvorm de tijd om écht te zitten.",
  processSteps: [
    { week: "Week 1", title: "Consultatie & stofkeuze", desc: "We bespreken je stijl, gebruik en budget. Daarna kies je uit honderden stoffen van Loro Piana, Vitale Barberis, Dormeuil en Scabal." },
    { week: "Week 2", title: "Opmeten", desc: "Meer dan 30 metingen. We leggen revers, knopen, voering, broeklijn en manchetten vast — alles op papier." },
    { week: "Week 3-4", title: "Eerste paspas", desc: "Je past het pak in opbouw. We verfijnen de pasvorm op basis van jouw houding en lichaam." },
    { week: "Week 5-6", title: "Levering", desc: "Geperst, ingepakt en klaar. Of we komen het bij je thuis of op kantoor afgeven." },
  ],
  pricingTitle: "Wat kost een maatpak op maat?",
  pricingIntro:
    "Transparante prijzen. De uiteindelijke investering hangt af van je stofkeuze en het niveau van afwerking. Een gedetailleerde offerte volgt na je eerste consultatie.",
  pricingTiers: [
    {
      name: "Essential",
      price: "vanaf €890",
      desc: "Een eerste pak op maat",
      features: ["Premium wolmix", "2 passessies", "Standaard voering", "Levering in 4-6 weken"],
    },
    {
      name: "Signature",
      price: "vanaf €1.490",
      desc: "Onze meest gekozen kwaliteit",
      features: ["Super 120s wol of Italiaanse stof", "3 passessies", "Bemberg voering naar keuze", "Handgemaakte details", "Levering in 6-8 weken"],
      popular: true,
    },
    {
      name: "Bespoke",
      price: "vanaf €2.290",
      desc: "Volledig handgemaakt, eigen patroon",
      features: ["Loro Piana, Holland & Sherry of Dormeuil", "4+ passessies", "Volledig handgenaaid", "Eigen patroon op maat", "Levering in 8-10 weken"],
    },
  ],
  fabricsTitle: "Stoffen voor business, casual en elke gelegenheid",
  fabricsIntro:
    "Voor de boardroom of de borrel. We adviseren je over gewicht, weave en kleur op basis van hoe — en hoe vaak — je het pak gaat dragen. Een dagelijks werkpak vraagt om een andere stof dan een occasioneel feestpak.",
  fabricHouses: ["Loro Piana", "Vitale Barberis Canonico", "Dormeuil", "Holland & Sherry", "Scabal", "Drago"],
  fittingsTitle: "Hoeveel passessies?",
  fittingsBody:
    "Voor een maatpak plannen we minimaal twee passessies in. Bij de eerste passessie controleren we de basisvorm, de tweede verfijnt de pasvorm. Voor bespoke komt er een derde fitting bij. Op verzoek komen we ook bij je thuis of op kantoor in Leuven, Brussel, Antwerpen of elders in Vlaams-Brabant.",
  timingTitle: "Wanneer reserveren?",
  timingBody:
    "Voor een Essential of Signature volstaat 4 tot 6 weken vóór je het pak nodig hebt. Voor bespoke voorzie je liefst 8 tot 10 weken.",
  timingTimeline: [
    { months: "10 wkn", what: "Bespoke met volledige handafwerking" },
    { months: "8 wkn", what: "Comfortabel voor Signature met 3 fittings" },
    { months: "6 wkn", what: "Essential of Signature standaard" },
    { months: "4 wkn", what: "Spoedoptie — vraag naar beschikbaarheid" },
  ],
  testimonialsTitle: "Wat klanten zeggen",
  testimonials: [
    {
      quote: "Ik droeg jaren confectie. Het verschil met een echt maatpak voel je vanaf de eerste dag.",
      name: "David M.",
      context: "Advocaat · Brussel",
    },
    {
      quote: "Twee afspraken in Leuven, één paspas op kantoor in Antwerpen. Efficiënt en zonder gedoe.",
      name: "Stijn V.",
      context: "Consultant · Antwerpen",
    },
    {
      quote: "Alex luistert eerst, adviseert dan. Geen verkooppraat — gewoon vakmanschap.",
      name: "Karel D.",
      context: "Ondernemer · Hasselt",
    },
  ],
  prepTitle: "Voor werk, gala en alles ertussen",
  prepBody:
    "Een dagelijks businesspak, een lichter zomerpak, een avondpak voor een gala — of de drie samen in een coherente garderobe. We bouwen je pakken op met aandacht voor het geheel.",
  prepBullets: [
    "Volledige outfit: pak, hemd, das, pochet",
    "Coherente garderobe over meerdere pakken",
    "Begeleiding bij keuze van schoenen en accessoires",
    "Levering in beschermhoes",
    "Aanpassingen mogelijk bij gewichtsverandering",
    "Discreet advies over silhouet en kleur",
  ],
  areaTitle: "We werken in heel Vlaams-Brabant en daarbuiten",
  areaIntro:
    "Ons atelier ligt centraal nabij Leuven. We ontvangen je graag bij ons, maar passessies aan huis of op kantoor zijn ook mogelijk in een straal van 35 km.",
  cities: ["Leuven", "Brussel", "Antwerpen", "Mechelen", "Aarschot", "Tienen", "Diest", "Hasselt"],
  internalLinks: [
    { label: "Trouwpak op maat", href: "/trouwpak-op-maat" },
    { label: "Hemden op maat", href: "/#shirts" },
    { label: "Ons proces in 4 stappen", href: "/#process" },
    { label: "Lees ervaringen van klanten", href: "/#testimonials" },
    { label: "Volledige FAQ", href: "/#faq" },
    { label: "Over Alex Nass", href: "/about" },
  ],
  faqTitle: "Veelgestelde vragen over maatpakken",
  faqs: [
    { q: "Wat is het verschil tussen een maatpak en confectie?", a: "Een confectiepak komt uit een standaardpatroon dat enkel licht aangepast wordt. Een maatpak vertrekt van jouw metingen — en bij bespoke zelfs van een patroon dat speciaal voor jouw lichaam getekend wordt. Het resultaat zit anders, valt anders en gaat veel langer mee." },
    { q: "Hoeveel kost een maatpak in België?", a: "Bij Alex Nass start een maatpak vanaf €890 (Essential), €1.490 (Signature) en €2.290+ voor volledig bespoke. De prijs hangt af van de stof, de constructie en het aantal afwerkingsdetails." },
    { q: "Hoe lang duurt het maken van een maatpak?", a: "Reken op 4 tot 6 weken voor Essential en Signature, en 8 tot 10 weken voor een bespoke pak met handafwerking." },
    { q: "Werken jullie ook voor klanten uit Antwerpen of Hasselt?", a: "Ja. Ons atelier ligt nabij Leuven, maar we ontvangen klanten uit heel Vlaams-Brabant, Antwerpen, Limburg en Brussel. Voor passessies aan huis of op kantoor binnen 35 km komen we naar u." },
    { q: "Kan ik een maatpak laten maken voor één specifieke gelegenheid?", a: "Zeker. Veel klanten komen voor een specifiek event — een speech, een doopsel, een gala. We plannen het traject zodat het pak ruim op tijd klaar is." },
  ],
  finalTitle: "Klaar voor je eerste maatpak?",
  finalBody: "Boek een vrijblijvende consultatie in het atelier in Leuven. Eén uur, één gesprek — en je weet wat een echt maatpak voor jou kan doen.",
  alternates: [
    { lang: "nl-BE", href: `${BASE}/maatpak-op-maat` },
    { lang: "fr-BE", href: `${BASE}/costume-sur-mesure` },
    { lang: "en", href: `${BASE}/bespoke-suits` },
  ],
  xDefault: `${BASE}/bespoke-suits`,
};

export default function MaatpakOpMaat() {
  return <WeddingPage content={content} />;
}
