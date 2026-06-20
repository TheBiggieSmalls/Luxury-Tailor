import WeddingPage, { type WeddingContent } from "./WeddingPage";

const content: WeddingContent = {
  locale: "fr",
  path: "/costume-mariage-sur-mesure",
  title: "Costume de mariage sur mesure | Alex Nass",
  metaDescription:
    "Costume de mariage sur mesure près de Bruxelles et Louvain. Tissus d'exception (Loro Piana, Dormeuil), coupe parfaite, conseils personnalisés. Prenez rendez-vous.",
  h1: "Costume de mariage sur mesure",
  introTagline: "Sur mesure · Bruxelles & Louvain",
  intro:
    "Le jour de votre mariage mérite un costume conçu pour vous seul. Dans notre atelier près de Louvain, Alex vous accompagne du choix du tissu jusqu'à la dernière retouche. Une coupe taillée sur votre corps, des étoffes d'exception, et le calme de savoir que tout est préparé pour le grand jour.",
  ctaPrimary: "Prendre rendez-vous",
  ctaSecondary: "Voir les tarifs",
  trustItems: [
    { value: "1", label: "Tailleur privé" },
    { value: "~40", label: "Mariés par an" },
    { value: "60h+", label: "Travail par costume" },
    { value: "3-4", label: "Essayages inclus" },
  ],
  processTitle: "Du premier rendez-vous au jour J",
  processIntro:
    "Un costume de mariage sur mesure se construit sur plusieurs mois. C'est ce temps qui permet d'atteindre la coupe parfaite — et qui vous libère pour vous concentrer sur le reste.",
  processSteps: [
    { week: "Semaine 1", title: "Consultation & choix du tissu", desc: "Nous discutons du lieu, de la saison, du style et du budget. Vous choisissez parmi des centaines de tissus Loro Piana, Vitale Barberis et Dormeuil." },
    { week: "Semaine 2", title: "Prise de mesures", desc: "Plus de 30 mesures précises. Nous fixons chaque détail : revers, boutons, doublure, longueur du pantalon, poignets." },
    { week: "Semaine 4-6", title: "Premier essayage", desc: "Vous essayez le costume en construction. Nous affinons la coupe à partir de la façon dont il tombe réellement sur vous." },
    { week: "Semaine 8-10", title: "Livraison", desc: "Votre costume est repassé, conditionné et prêt pour le plus beau jour de votre vie." },
  ],
  pricingTitle: "Combien coûte un costume de mariage sur mesure ?",
  pricingIntro:
    "Tarifs transparents, sans surprise. L'investissement final dépend de votre choix de tissu et du niveau de finition. Un devis détaillé vous est remis après la première consultation.",
  pricingTiers: [
    {
      name: "Essential",
      price: "dès 1 290 €",
      desc: "Une introduction raffinée au sur-mesure",
      features: ["Mélange de laine premium", "2 essayages", "Doublure standard", "Livraison en 6 semaines"],
    },
    {
      name: "Signature",
      price: "dès 1 890 €",
      desc: "Notre choix le plus populaire pour les mariés",
      features: ["Laine Super 120s ou tissu italien", "3 essayages", "Doublure Bemberg au choix", "Détails à la main", "Livraison en 8 semaines"],
      popular: true,
    },
    {
      name: "Sur Mesure",
      price: "dès 2 890 €",
      desc: "Le costume ultime, entièrement à la main",
      features: ["Loro Piana, Holland & Sherry ou Dormeuil", "4+ essayages", "Entièrement cousu main", "Patron unique sur mesure", "Livraison en 10-12 semaines"],
    },
  ],
  fabricsTitle: "Des tissus pour chaque saison et chaque lieu",
  fabricsIntro:
    "Mariage estival dans un jardin ? Un fresco léger ou un mélange mohair. Cérémonie hivernale en église ? Une laine pleine ou un velours. Nous vous conseillons selon la saison, le lieu et l'horaire — pour que vous soyez impeccable et confortable.",
  fabricHouses: ["Loro Piana", "Vitale Barberis Canonico", "Dormeuil", "Holland & Sherry", "Scabal", "Drago"],
  fittingsTitle: "Combien d'essayages ?",
  fittingsBody:
    "Pour un costume de mariage, nous prévoyons au minimum trois essayages : structure, ajustement, finition. Le dernier essayage a lieu environ deux semaines avant le mariage. Sur demande, nous nous déplaçons à votre domicile ou bureau à Bruxelles, Louvain, Malines ou ailleurs en Brabant flamand.",
  timingTitle: "Quand réserver ?",
  timingBody:
    "Nous recommandons une première consultation au moins 4 mois avant le mariage. En haute saison (mai à septembre), 6 mois sont préférables.",
  timingTimeline: [
    { months: "6 mois", what: "Idéal : marge pour tissus spéciaux et témoins" },
    { months: "4 mois", what: "Confortable pour les trois essayages" },
    { months: "3 mois", what: "Possible pour Signature et Essential" },
    { months: "<8 sem.", what: "Option express — sous réserve de disponibilité" },
  ],
  testimonialsTitle: "Ce que disent les mariés",
  testimonials: [
    {
      quote: "Alex a compris exactement ce que je cherchais : intemporel mais personnel. La coupe le jour J était irréprochable.",
      name: "Antoine R.",
      context: "Mariage à Bruxelles · septembre 2025",
    },
    {
      quote: "Deux rendez-vous à Louvain, puis Alex est venu chez nous pour la finition. Aucune explication superflue — simplement parfait.",
      name: "Julien & Camille",
      context: "Mariage à Mechelen",
    },
    {
      quote: "Mes témoins ont été habillés au même atelier. Une vraie cohérence, sans uniformité. Personne n'a juré.",
      name: "François M.",
      context: "Mariage à Hasselt",
    },
  ],
  prepTitle: "Le marié et ses témoins",
  prepBody:
    "Nous habillons aussi votre père, vos témoins ou tout le cortège. Un même tissu décliné en plusieurs coupes, ou une cohérence dans les doublures et les accessoires. Un seul rendez-vous, une seule vision.",
  prepBullets: [
    "Tenue complète : costume, chemise, cravate, pochette",
    "Coordination entre marié et témoins",
    "Conseils pour les chaussures et accessoires",
    "Livraison sous housse, prête pour le jour J",
    "Retouches possibles jusqu'à la veille",
    "Conseils discrets sur silhouette et couleur",
  ],
  areaTitle: "Nous habillons les mariés dans tout le Brabant",
  areaIntro:
    "Notre atelier se situe à proximité de Louvain. Nous vous y recevons avec plaisir, et proposons aussi des essayages à domicile dans un rayon de 35 km.",
  cities: ["Bruxelles", "Louvain", "Malines", "Aarschot", "Tirlemont", "Diest", "Hasselt", "Anvers"],
  internalLinks: [
    { label: "Nos costumes pour toutes les occasions", href: "/#collection" },
    { label: "Chemises sur mesure", href: "/#shirts" },
    { label: "Notre processus en 4 étapes", href: "/#process" },
    { label: "Témoignages clients", href: "/#testimonials" },
    { label: "FAQ complète", href: "/#faq" },
    { label: "À propos d'Alex Nass", href: "/about" },
  ],
  faqTitle: "Questions fréquentes sur les costumes de mariage",
  faqs: [
    {
      q: "Combien coûte un costume de mariage sur mesure en Belgique ?",
      a: "Chez Alex Nass, un costume de mariage sur mesure démarre à 1 290 € pour la ligne Essential et peut atteindre 2 890 € et plus pour un costume entièrement bespoke avec étoffes d'exception. Le prix dépend du tissu, de la méthode de construction et des finitions. Un devis transparent vous est remis après la première consultation.",
    },
    {
      q: "Combien de temps faut-il pour fabriquer un costume de mariage sur mesure ?",
      a: "Comptez 6 à 12 semaines à partir du premier rendez-vous. La ligne Essential est livrée en 6 semaines, Signature en 8, et un bespoke complet en 10 à 12 semaines. Nous prévoyons toujours une marge pour d'éventuelles retouches.",
    },
    {
      q: "Quand dois-je prendre mon premier rendez-vous ?",
      a: "Idéalement 4 à 6 mois avant le mariage. En haute saison (mai-septembre), 6 mois sont recommandés, car notre agenda et les délais des tissus premium s'allongent. Une option express est possible à partir de 8 semaines — sur demande.",
    },
    {
      q: "Combien d'essayages sont nécessaires ?",
      a: "Pour un costume de mariage, nous prévoyons au moins 3 essayages : structure, ajustement et finition. Pour la ligne bespoke, 4 essayages sont inclus. Les retouches jusqu'au jour J sont comprises.",
    },
    {
      q: "Quelle est la différence entre made-to-measure et bespoke ?",
      a: "Le made-to-measure part d'un patron de base que nous adaptons à vos mesures — plus rapide et plus accessible. Le bespoke implique la création d'un patron unique tracé sur votre corps, avec plusieurs essayages et un travail à la main. Les deux offrent une coupe excellente ; le bespoke offre la personnalisation maximale.",
    },
    {
      q: "Quels tissus conviennent le mieux pour un mariage ?",
      a: "Cela dépend de la saison et du lieu. Pour un mariage estival : laine fresco légère, mélange mohair ou lin-laine. Pour l'hiver : laine-cachemire, velours ou laine dense de Dormeuil ou Loro Piana. Nous vous conseillons en personne lors de la consultation.",
    },
    {
      q: "Vous déplacez-vous à domicile pour les essayages ?",
      a: "Oui. Pour les clients dans un rayon de 35 km autour de Louvain (Bruxelles, Malines, Aarschot, Tirlemont, Diest, Hasselt, Anvers), nous proposons des essayages à domicile ou au bureau. Les mariés internationaux sont accueillis à l'atelier.",
    },
    {
      q: "Pouvez-vous habiller aussi les témoins ?",
      a: "Oui, et nous le recommandons. Nous travaillons volontiers avec tout le cortège : même tissu en coupes différentes, ou cohérence des doublures et accessoires. Réservez une consultation commune pour aligner la vision dès le départ.",
    },
  ],
  finalTitle: "Prêt pour votre première consultation ?",
  finalBody:
    "Une première consultation dure environ 60 minutes et reste sans engagement. Nous discutons de votre mariage, de votre style et des possibilités — pour que vous décidiez ensuite en pleine confiance.",
};

const CostumeMariageSurMesure = () => <WeddingPage content={content} />;
export default CostumeMariageSurMesure;
