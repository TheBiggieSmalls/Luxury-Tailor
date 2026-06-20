import WeddingPage, { type WeddingContent } from "./WeddingPage";

const content: WeddingContent = {
  locale: "nl",
  path: "/trouwpak-op-maat",
  title: "Trouwpak op maat in Leuven & Brussel | Alex Nass",
  metaDescription:
    "Op maat gemaakt trouwpak nabij Leuven. Premium stoffen, perfecte pasvorm en persoonlijke begeleiding van eerste consultatie tot trouwdag. Boek je afspraak.",
  h1: "Trouwpak op maat — bespoke voor jouw trouwdag",
  introTagline: "Maatwerk · Leuven & Vlaams-Brabant",
  intro:
    "Een trouwpak draag je maar één keer, maar je herinnert het je een leven lang. In ons atelier nabij Leuven maken we je trouwpak volledig op maat: vanaf de eerste consultatie kies je samen met Alex de stof, de pasvorm en elk detail. Geen confectie, geen compromissen — gewoon een pak dat zit alsof het altijd al van jou was.",
  ctaPrimary: "Plan je afspraak",
  ctaSecondary: "Bekijk de prijzen",
  trustItems: [
    { value: "1", label: "Privé kleermaker" },
    { value: "~40", label: "Bruidegoms per jaar" },
    { value: "60u+", label: "Werk per pak" },
    { value: "3-4", label: "Passessies inbegrepen" },
  ],
  processTitle: "Van eerste afspraak tot trouwdag",
  processIntro:
    "Een trouwpak op maat is een traject van enkele maanden. Zo geven we je outfit de tijd om écht perfect te worden — en jou de rust om je op de rest van de dag te focussen.",
  processSteps: [
    { week: "Week 1", title: "Consultatie & stofkeuze", desc: "We bespreken je trouwlocatie, het seizoen, je stijl en je budget. Daarna kies je uit honderden stoffen van Loro Piana, Vitale Barberis en Dormeuil." },
    { week: "Week 2", title: "Opmeten", desc: "Meer dan 30 precieze metingen. We leggen elk detail vast: revers, knopen, voering, broeklengte, manchetten." },
    { week: "Week 4-6", title: "Eerste paspas", desc: "Je past het pak in opbouw. We verfijnen de pasvorm op basis van hoe het écht zit op jouw lichaam." },
    { week: "Week 8-10", title: "Levering", desc: "Je trouwpak wordt geperst, ingepakt en klaargemaakt voor de mooiste dag van je leven." },
  ],
  pricingTitle: "Wat kost een trouwpak op maat?",
  pricingIntro:
    "Transparante prijzen, geen verrassingen. De uiteindelijke investering hangt af van je stofkeuze en het niveau van afwerking. Een gedetailleerde offerte volgt na je eerste consultatie.",
  pricingTiers: [
    {
      name: "Essential",
      price: "vanaf €1.290",
      desc: "Een verfijnde introductie tot maatwerk",
      features: ["Premium wolmix", "2 passessies", "Standaard voering", "Levering in 6 weken"],
    },
    {
      name: "Signature",
      price: "vanaf €1.890",
      desc: "Onze populairste keuze voor bruidegoms",
      features: ["Super 120s wol of Italiaanse stof", "3 passessies", "Bemberg voering naar keuze", "Handgemaakte details", "Levering in 8 weken"],
      popular: true,
    },
    {
      name: "Bespoke",
      price: "vanaf €2.890",
      desc: "Het ultieme trouwpak, volledig met de hand",
      features: ["Loro Piana, Holland & Sherry of Dormeuil", "4+ passessies", "Volledig handgenaaid", "Eigen patroon op maat", "Levering in 10-12 weken"],
    },
  ],
  fabricsTitle: "Stoffen voor elk seizoen en elke locatie",
  fabricsIntro:
    "Trouw je in juli in een tuin? Dan kies je een lichte fresco of een mohair-mix. Een winterceremonie in een kerk vraagt om een volle wol of een fluweel. We adviseren je op basis van het seizoen, de locatie en het tijdstip — zodat je er stralend uitziet én comfortabel blijft.",
  fabricHouses: ["Loro Piana", "Vitale Barberis Canonico", "Dormeuil", "Holland & Sherry", "Scabal", "Drago"],
  fittingsTitle: "Hoeveel passessies?",
  fittingsBody:
    "Voor een trouwpak op maat plannen we minimaal drie passessies in. Bij de eerste passessie controleren we de basisvorm, de tweede verfijnt de pasvorm op je lichaam, en de derde — meestal twee weken voor de trouwdag — is voor de laatste afwerking. Op verzoek komen we ook bij je thuis of op kantoor in Leuven, Brussel, Mechelen of elders in Vlaams-Brabant.",
  timingTitle: "Wanneer reserveren?",
  timingBody:
    "Wij adviseren u minstens 4 maanden vóór uw trouwdag een eerste consultatie te plannen. Tijdens het topseizoen — mei tot september — boekt u beter al 6 maanden op voorhand.",
  timingTimeline: [
    { months: "6 mnd", what: "Ideale start: ruimte voor stoffen op bestelling en getuigen", status: "ideal" },
    { months: "4 mnd", what: "Comfortabel: alle drie passessies kunnen ingepland worden", status: "ideal" },
    { months: "3 mnd", what: "Mogelijk voor Signature en Essential, mits beschikbare stof", status: "possible" },
    { months: "2 wkn", what: "Spoedoptie — uitsluitend op aanvraag en bevestiging", status: "urgent" },
  ],
  timingNote: "Topseizoen (mei–sept): boek minstens 6 maanden op voorhand.",
  testimonialsTitle: "Wat bruidegoms zeggen",
  testimonials: [
    {
      quote: "Alex begreep precies wat ik wou: tijdloos maar persoonlijk. De pasvorm op de dag zelf was indrukwekkend.",
      name: "Thomas D.",
      context: "Trouwde in Heverlee · juni 2025",
    },
    {
      quote: "Ik ging tweemaal langs in Leuven en daarna kwam Alex bij ons thuis voor de laatste paspas. Niets te uitleggen — gewoon perfect.",
      name: "Pieter & Lien",
      context: "Trouwfeest in Mechelen",
    },
    {
      quote: "Mijn vier getuigen kregen ook hun pak bij Alex. Coherent, elk in zijn eigen stijl. Niemand viel uit de toon.",
      name: "Maxime V.",
      context: "Bruiloft in Hasselt",
    },
  ],
  prepTitle: "Bruidegom én getuigen",
  prepBody:
    "We kleden niet alleen jou. Voor je vader, je getuigen of je hele bruiloftsgezelschap bieden we een gecoördineerde aanpak: dezelfde basisstof in verschillende cuts, of een eenheid in voering en accessoires. Eén afspraak, één visie.",
  prepBullets: [
    "Volledige outfit: pak, hemd, das, pochet",
    "Coördinatie tussen bruidegom en getuigen",
    "Begeleiding bij keuze van schoenen en accessoires",
    "Levering in beschermhoes, klaar voor de dag",
    "Aanpassingen mogelijk tot vlak voor de trouwdag",
    "Discreet advies over silhouet en kleur",
  ],
  areaTitle: "We werken voor bruidegoms in heel Vlaams-Brabant",
  areaIntro:
    "Ons atelier ligt centraal nabij Leuven. We ontvangen je graag bij ons, maar passessies aan huis zijn ook mogelijk in een straal van 35 km.",
  cities: ["Leuven", "Brussel", "Mechelen", "Aarschot", "Tienen", "Diest", "Hasselt", "Antwerpen"],
  internalLinks: [
    { label: "Onze maatpakken voor elke gelegenheid", href: "/#collection" },
    { label: "Hemden op maat", href: "/#shirts" },
    { label: "Ons proces in 4 stappen", href: "/#process" },
    { label: "Lees ervaringen van klanten", href: "/#testimonials" },
    { label: "Volledige FAQ", href: "/#faq" },
    { label: "Over Alex Nass", href: "/about" },
  ],
  faqTitle: "Veelgestelde vragen over trouwpakken",
  faqs: [
    {
      q: "Hoeveel kost een trouwpak op maat in België?",
      a: "Een trouwpak op maat bij Alex Nass start vanaf €1.290 voor onze Essential-lijn en gaat tot €2.890+ voor een volledig bespoke pak met handwerk en exclusieve stoffen. De prijs wordt bepaald door je stofkeuze, de constructiemethode en het aantal afwerkingsdetails. Na je eerste consultatie krijg je een transparante offerte.",
    },
    {
      q: "Hoe lang duurt het maken van een trouwpak op maat?",
      a: "Reken op 6 tot 12 weken vanaf je eerste afspraak. Essential-pakken zijn klaar in 6 weken, Signature in 8 weken, volledig bespoke in 10 tot 12 weken. We plannen liefst nog wat marge in voor onverwachte aanpassingen.",
    },
    {
      q: "Wanneer moet ik mijn eerste afspraak boeken?",
      a: "Idealiter 4 tot 6 maanden voor je trouwdag. In topseizoen (mei-september) raden we 6 maanden aan, omdat zowel onze agenda als de levertijden van premium stoffen dan langer zijn. Spoedopties zijn mogelijk vanaf 8 weken — vraag naar beschikbaarheid.",
    },
    {
      q: "Hoeveel passessies zijn er nodig?",
      a: "Voor een trouwpak plannen we minstens 3 passessies: basis, verfijning en finale. Voor onze bespoke-lijn voorzien we standaard 4 passessies. Aanpassingen tot vlak voor de trouwdag zijn inbegrepen.",
    },
    {
      q: "Wat is het verschil tussen made-to-measure en bespoke?",
      a: "Made-to-measure vertrekt van een bestaand basispatroon dat we aanpassen aan jouw maten — sneller en betaalbaarder. Bespoke betekent dat we een volledig nieuw patroon op maat van jouw lichaam tekenen, met meerdere passessies en handwerk. Beide leveren een uitstekende pasvorm; bespoke geeft de allerhoogste graad van personalisatie.",
    },
    {
      q: "Welke stoffen werken het best voor een bruiloft?",
      a: "Dat hangt af van je seizoen en locatie. Voor zomerbruiloften: lichte fresco-wol, mohair-mix of linnen-wol. Voor winter: wol-cashmere, fluweel of een dichtere wol van Dormeuil of Loro Piana. We adviseren je persoonlijk tijdens je consultatie.",
    },
    {
      q: "Komen jullie ook aan huis voor passessies?",
      a: "Ja, voor klanten in een straal van 35 km rond Leuven (Brussel, Mechelen, Aarschot, Tienen, Diest, Hasselt, Antwerpen) bieden we passessies aan huis of op kantoor. Internationale bruidegoms zijn welkom in ons atelier.",
    },
    {
      q: "Kunnen jullie ook de getuigen kleden?",
      a: "Ja, en dat raden we zelfs aan. We werken graag met de hele bruiloftsgroep: dezelfde stof in verschillende coupes, of gecoördineerde voeringen en accessoires. Boek één gezamenlijke consultatie zodat we de visie meteen op elkaar afstemmen.",
    },
  ],
  finalTitle: "Klaar voor je eerste afspraak?",
  finalBody:
    "Een eerste consultatie duurt ongeveer 60 minuten en is volledig vrijblijvend. We bespreken je trouwdag, je stijl en de mogelijkheden — zodat je daarna met vertrouwen je beslissing maakt.",
};

const TrouwpakOpMaat = () => <WeddingPage content={content} />;
export default TrouwpakOpMaat;
