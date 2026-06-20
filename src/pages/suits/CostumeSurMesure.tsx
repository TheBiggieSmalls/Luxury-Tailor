import WeddingPage, { type WeddingContent } from "../wedding/WeddingPage";

const BASE = "https://bespoke-canvas-charm.lovable.app";

const content: WeddingContent = {
  locale: "fr",
  path: "/costume-sur-mesure",
  title: "Costume sur mesure à Bruxelles & Louvain | Alex Nass",
  metaDescription:
    "Costume sur mesure par le tailleur Alex Nass — atelier près de Louvain, au service de Bruxelles, Anvers et Malines. Tissus d'exception, coupe parfaite, sur rendez-vous.",
  h1: "Costume sur mesure — par un tailleur, pour vous seul",
  introTagline: "Tailleur · Bruxelles · Louvain · Anvers",
  intro:
    "Un costume sur mesure n'est pas un vêtement, c'est une signature. Dans notre atelier près de Louvain, Alex vous habille du choix du tissu jusqu'à la dernière retouche. Pas de prêt-à-porter, pas de vendeurs : un seul tailleur, qui dessine, coupe et coud votre costume.",
  ctaPrimary: "Prendre rendez-vous",
  ctaSecondary: "Voir les tarifs",
  trustItems: [
    { value: "1", label: "Tailleur privé" },
    { value: "16+", label: "Années d'expérience" },
    { value: "60h+", label: "De travail" },
    { value: "2-3", label: "Essayages" },
  ],
  processTitle: "Du premier rendez-vous au costume terminé",
  processIntro:
    "Faire faire un costume sur mesure se compte en semaines, pas en heures. C'est ce temps qui donne sa coupe au costume et sa précision à la finition.",
  processSteps: [
    { week: "Semaine 1", title: "Consultation & choix du tissu", desc: "Nous discutons de votre style, de l'usage et du budget. Vous choisissez parmi des centaines de tissus Loro Piana, Vitale Barberis, Dormeuil et Scabal." },
    { week: "Semaine 2", title: "Prise de mesures", desc: "Plus de 30 mesures précises. Revers, boutons, doublure, longueur du pantalon, poignets — tout est consigné." },
    { week: "Semaine 3-4", title: "Premier essayage", desc: "Vous essayez le costume en construction. Nous affinons la coupe à votre posture et à votre corps." },
    { week: "Semaine 5-6", title: "Livraison", desc: "Repassé, conditionné, prêt. Ou nous vous le livrons à domicile ou au bureau." },
  ],
  pricingTitle: "Combien coûte un costume sur mesure ?",
  pricingIntro:
    "Tarifs transparents. L'investissement final dépend du tissu et du niveau de finition. Un devis détaillé vous est remis après la première consultation.",
  pricingTiers: [
    {
      name: "Essential",
      price: "dès 890 €",
      desc: "Un premier costume sur mesure",
      features: ["Mélange de laine premium", "2 essayages", "Doublure standard", "Livraison en 4-6 semaines"],
    },
    {
      name: "Signature",
      price: "dès 1 490 €",
      desc: "Notre qualité la plus choisie",
      features: ["Super 120s ou tissu italien", "3 essayages", "Doublure Bemberg au choix", "Détails main", "Livraison en 6-8 semaines"],
      popular: true,
    },
    {
      name: "Bespoke",
      price: "dès 2 290 €",
      desc: "Entièrement à la main, patron unique",
      features: ["Loro Piana, Holland & Sherry ou Dormeuil", "4+ essayages", "Entièrement cousu main", "Patron unique", "Livraison en 8-10 semaines"],
    },
  ],
  fabricsTitle: "Tissus pour le bureau, le soir et toutes les occasions",
  fabricsIntro:
    "De la salle de réunion au gala. Nous vous conseillons sur le poids, le tissage et la couleur en fonction de l'usage et de la fréquence de port.",
  fabricHouses: ["Loro Piana", "Vitale Barberis Canonico", "Dormeuil", "Holland & Sherry", "Scabal", "Drago"],
  fittingsTitle: "Combien d'essayages ?",
  fittingsBody:
    "Pour un costume sur mesure, nous prévoyons au minimum deux essayages. Le premier vérifie la forme de base, le second affine la coupe. Pour le bespoke, un troisième essayage s'ajoute. Sur demande, nous nous déplaçons à domicile ou au bureau à Bruxelles, Louvain, Anvers ou ailleurs en Brabant flamand.",
  timingTitle: "Quand réserver ?",
  timingBody:
    "Pour un Essential ou Signature, prévoyez 4 à 6 semaines avant la date où vous souhaitez porter le costume. Pour le bespoke, 8 à 10 semaines.",
  timingTimeline: [
    { months: "10 sem", what: "Bespoke entièrement cousu main" },
    { months: "8 sem", what: "Confortable pour Signature avec 3 essayages" },
    { months: "6 sem", what: "Essential ou Signature standard" },
    { months: "4 sem", what: "Option express — selon disponibilité" },
  ],
  testimonialsTitle: "Ce que disent nos clients",
  testimonials: [
    {
      quote: "Après des années de prêt-à-porter, la différence se sent dès le premier jour.",
      name: "David M.",
      context: "Avocat · Bruxelles",
    },
    {
      quote: "Deux rendez-vous à Louvain, un essayage au bureau à Anvers. Efficace et sans tracas.",
      name: "Stijn V.",
      context: "Consultant · Anvers",
    },
    {
      quote: "Alex écoute d'abord, conseille ensuite. Pas de discours commercial — du métier.",
      name: "Karel D.",
      context: "Entrepreneur · Hasselt",
    },
  ],
  prepTitle: "Pour le bureau, le gala, et tout ce qui se trouve entre",
  prepBody:
    "Un costume business quotidien, un costume d'été plus léger, une tenue de soirée pour un gala — ou les trois ensemble dans une garde-robe cohérente.",
  prepBullets: [
    "Tenue complète : costume, chemise, cravate, pochette",
    "Garde-robe cohérente sur plusieurs costumes",
    "Conseils chaussures et accessoires",
    "Livraison en housse de protection",
    "Retouches possibles en cas de changement de poids",
    "Conseils discrets sur silhouette et couleur",
  ],
  areaTitle: "Nous travaillons à Bruxelles, en Brabant flamand et au-delà",
  areaIntro:
    "Notre atelier est situé près de Louvain. Nous vous accueillons volontiers sur place, mais les essayages à domicile ou au bureau sont possibles dans un rayon de 35 km.",
  cities: ["Louvain", "Bruxelles", "Anvers", "Malines", "Aarschot", "Tirlemont", "Diest", "Hasselt"],
  internalLinks: [
    { label: "Costume de mariage sur mesure", href: "/costume-mariage-sur-mesure" },
    { label: "Chemises sur mesure", href: "/#shirts" },
    { label: "Notre processus en 4 étapes", href: "/#process" },
    { label: "Témoignages clients", href: "/#testimonials" },
    { label: "FAQ complète", href: "/#faq" },
    { label: "À propos d'Alex Nass", href: "/about" },
  ],
  faqTitle: "Questions fréquentes sur le costume sur mesure",
  faqs: [
    { q: "Quelle est la différence entre sur mesure et prêt-à-porter ?", a: "Le prêt-à-porter part d'un patron standard à peine ajusté. Le sur mesure part de vos mesures — et le bespoke d'un patron dessiné spécialement pour votre corps. Le résultat tombe différemment et dure beaucoup plus longtemps." },
    { q: "Combien coûte un costume sur mesure en Belgique ?", a: "Chez Alex Nass, un costume sur mesure démarre à 890 € (Essential), 1 490 € (Signature) et 2 290 €+ pour le bespoke entièrement cousu main." },
    { q: "Combien de temps pour faire un costume sur mesure ?", a: "Comptez 4 à 6 semaines pour Essential et Signature, et 8 à 10 semaines pour un costume bespoke avec finitions main." },
    { q: "Travaillez-vous pour les clients d'Anvers ou de Bruxelles ?", a: "Oui. Notre atelier est près de Louvain, mais nous recevons des clients de tout le Brabant flamand, d'Anvers, du Limbourg et de Bruxelles. Essayages à domicile ou au bureau dans un rayon de 35 km." },
    { q: "Puis-je faire faire un costume pour une occasion précise ?", a: "Bien sûr. De nombreux clients viennent pour un événement particulier — un discours, un baptême, un gala. Nous planifions tout pour que le costume soit prêt largement à temps." },
  ],
  finalTitle: "Prêt pour votre premier costume sur mesure ?",
  finalBody: "Réservez une consultation sans engagement à l'atelier de Louvain. Une heure, un échange — et vous saurez ce qu'un vrai costume sur mesure peut faire pour vous.",
  alternates: [
    { lang: "nl-BE", href: `${BASE}/maatpak-op-maat` },
    { lang: "fr-BE", href: `${BASE}/costume-sur-mesure` },
    { lang: "en", href: `${BASE}/bespoke-suits` },
  ],
  xDefault: `${BASE}/bespoke-suits`,
};

export default function CostumeSurMesure() {
  return <WeddingPage content={content} />;
}
