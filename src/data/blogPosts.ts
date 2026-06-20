import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import editorial1 from "@/assets/editorial-feature-1.jpg";
import editorial2 from "@/assets/editorial-feature-2.jpg";
import fabric5 from "@/assets/editorial-fabric-5.jpg";
import shirtDetail from "@/assets/shirt-detail-1.jpg";

import type { Language } from "@/i18n/translations";

export interface BlogPost {
  slug: string;
  image: string;
  date: string;
  category: string;
  readMinutes: number;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  body: Record<Language, string>;
}

const enLorem = (paragraphs: string[]) => paragraphs.join("\n\n");

export const blogPosts: BlogPost[] = [
  {
    slug: "the-art-of-first-impression",
    image: blog1,
    date: "March 2026",
    category: "Style",
    readMinutes: 6,
    title: {
      en: "The Art of the First Impression",
      nl: "De Kunst van de Eerste Indruk",
      fr: "L'Art de la Première Impression",
    },
    excerpt: {
      en: "How a well-cut suit shapes the silent conversation that happens before you say a word.",
      nl: "Hoe een goed gesneden pak de stille conversatie vormt die plaatsvindt voordat u een woord zegt.",
      fr: "Comment un costume bien coupé façonne la conversation silencieuse qui se produit avant le moindre mot.",
    },
    body: {
      en: enLorem([
        "There is a moment, before the handshake, before the first sentence, when a room decides who you are. It happens in seconds and it happens almost entirely in silence. The shoulders of your jacket, the way the trouser breaks on the shoe, the cleanness of a lapel — these details speak before you do.",
        "A bespoke suit is not a costume. It is the most precise tool a man can carry into that silent conversation. When the cloth fits the slope of your shoulders, when the sleeve sits where the wrist begins, the room reads composure. Not loudness. Composure.",
        "We work with grooms, executives and quiet artists. The brief is rarely about fashion. It is about presence: the desire to walk in and feel that nothing is fighting against you. No tugging at a collar. No straightening of a hem. The suit disappears, and what is left is the man.",
        "This is why we measure thirty times and try the cloth on the body twice before we ever finish a buttonhole. The first impression is built one stitch at a time, in an atelier in Leuven, weeks before anyone in the room ever sees it.",
        "If you are reading this and you have a moment ahead of you that matters — a wedding, a board, a portrait — start three months early. Give the cloth time to learn you. The first impression you will make is already being shaped, today, on a cutting table.",
      ]),
      nl: enLorem([
        "Er is een moment, vóór de handdruk, vóór de eerste zin, waarop een ruimte beslist wie u bent. Het gebeurt in seconden en bijna volledig in stilte. De schouders van uw jas, de manier waarop de pijp op de schoen valt, de zuiverheid van een revers — deze details spreken voor u.",
        "Een maatpak is geen kostuum. Het is het meest precieze instrument waarmee een man die stille conversatie binnenwandelt. Wanneer de stof de helling van uw schouders volgt, wanneer de mouw eindigt waar de pols begint, leest de ruimte rust. Geen lawaai. Rust.",
        "Wij werken met bruidegoms, bestuurders en stille kunstenaars. De vraag gaat zelden over mode. Ze gaat over aanwezigheid: de wens om binnen te komen en te voelen dat niets tegenwerkt. Geen kraag die wringt, geen broek die schuift. Het pak verdwijnt, en wat overblijft is de man.",
        "Daarom meten we dertig keer en passen we de stof tweemaal op het lichaam voor we een knoopsgat afwerken. De eerste indruk wordt steek per steek gebouwd, in een atelier nabij Leuven, weken voor iemand in de zaal hem ooit ziet.",
        "Als u dit leest en er ligt een belangrijk moment voor u — een trouwdag, een raad, een portret — begin dan drie maanden vooraf. Geef de stof tijd om u te leren kennen. De eerste indruk die u zult maken, wordt vandaag al gevormd, op een snijtafel.",
      ]),
      fr: enLorem([
        "Il existe un instant, avant la poignée de main, avant la première phrase, où une pièce décide qui vous êtes. Cela se joue en quelques secondes, presque entièrement en silence. Les épaules de votre veste, la façon dont le pantalon tombe sur la chaussure, la netteté d'un revers — ces détails parlent avant vous.",
        "Un costume sur mesure n'est pas un déguisement. C'est l'outil le plus précis qu'un homme puisse porter dans cette conversation silencieuse. Lorsque le tissu épouse la pente de vos épaules, lorsque la manche s'arrête où le poignet commence, la pièce lit du calme. Pas du bruit. Du calme.",
        "Nous travaillons avec des mariés, des dirigeants et des artistes discrets. La demande porte rarement sur la mode. Elle porte sur la présence : entrer quelque part et sentir que rien ne lutte contre vous. Aucun col qui tire, aucun ourlet qui glisse. Le costume disparaît, et il ne reste que l'homme.",
        "Voilà pourquoi nous prenons trente mesures et essayons le tissu sur le corps deux fois avant de finir une boutonnière. La première impression se bâtit point par point, dans un atelier près de Louvain, des semaines avant que quiconque dans la pièce ne la voie.",
        "Si vous lisez ces lignes et qu'un moment important vous attend — un mariage, un conseil, un portrait — commencez trois mois à l'avance. Laissez le tissu apprendre à vous connaître. La première impression que vous ferez se prépare déjà, aujourd'hui, sur une table de coupe.",
      ]),
    },
  },
  {
    slug: "understanding-premium-fabrics",
    image: blog2,
    date: "February 2026",
    category: "Fabrics",
    readMinutes: 8,
    title: {
      en: "Premium Fabrics: Super 120s, Mohair & Beyond",
      nl: "Premium Stoffen: Super 120s, Mohair en meer",
      fr: "Tissus Premium : Super 120s, Mohair et plus",
    },
    excerpt: {
      en: "A short field guide to the cloths that make a suit feel alive — what they do, where they come from, and when to choose each.",
      nl: "Een korte gids voor de stoffen die een pak tot leven brengen — wat ze doen, waar ze vandaan komen en wanneer u welke kiest.",
      fr: "Petit guide des étoffes qui donnent vie à un costume — ce qu'elles font, d'où elles viennent et quand les choisir.",
    },
    body: {
      en: enLorem([
        "Cloth is the part of a suit nobody talks about until they touch the wrong one. Then they understand. The grade of the wool, the twist of the yarn, the weight per metre — these are the bones of every garment we make.",
        "Super 120s, Super 150s and beyond refer to the fineness of the wool fibre. Higher numbers mean a softer hand and a more refined drape, but also less resilience. A Super 120s wool is the workhorse of a smart suit. It travels well, holds a press, and forgives a long day at the office.",
        "Mohair, blended at 20 to 40 percent, gives cloth a quiet sheen and a remarkable resistance to creases. It is the fabric of summer evenings, of long ceremonies in warm churches, of the man who needs to look the same at midnight as he did at noon.",
        "Linen and linen-wool blends are the answer for outdoor weddings in July. They breathe like nothing else, and they wrinkle on purpose — a wrinkle in fine linen is part of its charm, not a flaw.",
        "For the cooler months, flannels from Vitale Barberis Canonico or worsted-cashmere from Loro Piana give a softness that no synthetic can imitate. They feel like the lining of a coat from inside out.",
        "We do not believe in one fabric for every man. We believe in the right fabric for the right occasion. During your consultation we lay six to ten options on the table, drape them on your shoulder, hold them against your skin in daylight. The cloth chooses itself.",
      ]),
      nl: enLorem([
        "Stof is het deel van een pak waar niemand het over heeft totdat ze de verkeerde aanraken. Dan begrijpen ze het. De gradatie van de wol, de twist van het garen, het gewicht per meter — dit zijn de botten van elk kledingstuk dat wij maken.",
        "Super 120s, Super 150s en hoger verwijzen naar de fijnheid van de wolvezel. Hogere nummers betekenen een zachtere hand en een verfijndere val, maar ook minder veerkracht. Een Super 120s is het werkpaard van een net pak. Het reist goed, houdt zijn pers, en vergeeft een lange werkdag.",
        "Mohair, gemengd voor 20 tot 40 procent, geeft de stof een zachte glans en een opmerkelijke kreukbestendigheid. Het is de stof van zomeravonden, van lange ceremonies in warme kerken, van de man die om middernacht hetzelfde wil ogen als om de middag.",
        "Linnen en linnen-wolmengsels zijn het antwoord voor buitenbruiloften in juli. Ze ademen als geen ander, en ze kreuken met opzet — een kreuk in fijn linnen is deel van zijn charme, geen fout.",
        "Voor de koudere maanden geven flanellen van Vitale Barberis Canonico of kamgaren-cashmere van Loro Piana een zachtheid die geen synthetische stof kan imiteren. Het voelt als de voering van een jas, van binnen naar buiten.",
        "Wij geloven niet in één stof voor elke man. Wij geloven in de juiste stof voor de juiste gelegenheid. Tijdens uw consultatie leggen we zes tot tien opties op tafel, drapéren ze over uw schouder, houden ze tegen uw huid in daglicht. De stof kiest zichzelf.",
      ]),
      fr: enLorem([
        "Le tissu est la partie d'un costume dont personne ne parle, jusqu'à ce qu'on touche le mauvais. Alors on comprend. Le grade de la laine, la torsion du fil, le poids au mètre — ce sont les os de chaque vêtement que nous fabriquons.",
        "Super 120s, Super 150s et au-delà désignent la finesse de la fibre de laine. Plus le chiffre est haut, plus la main est douce et le tombé raffiné, mais moins le tissu est résistant. Un Super 120s est le cheval de trait du costume habillé. Il voyage bien, tient le pli et pardonne une longue journée de bureau.",
        "Le mohair, mélangé à 20-40 %, donne au tissu un éclat discret et une résistance remarquable aux plis. C'est le tissu des soirées d'été, des longues cérémonies dans des églises chaudes, de l'homme qui doit avoir la même allure à minuit qu'à midi.",
        "Le lin et les mélanges lin-laine sont la réponse pour les mariages en plein air en juillet. Ils respirent comme aucun autre, et ils se froissent volontairement — un pli dans un lin fin fait partie de son charme, ce n'est pas un défaut.",
        "Pour les mois plus froids, les flanelles de Vitale Barberis Canonico ou la laine peignée-cachemire de Loro Piana offrent une douceur qu'aucun synthétique ne sait imiter. Cela ressemble à la doublure d'un manteau, de l'intérieur vers l'extérieur.",
        "Nous ne croyons pas à un tissu pour tous les hommes. Nous croyons au bon tissu pour la bonne occasion. Lors de votre consultation, nous posons six à dix options sur la table, nous les drappons sur votre épaule, nous les tenons contre votre peau en plein jour. Le tissu se choisit lui-même.",
      ]),
    },
  },
  {
    slug: "grooms-guide-bespoke",
    image: blog3,
    date: "January 2026",
    category: "Weddings",
    readMinutes: 7,
    title: {
      en: "The Groom's Guide to a Bespoke Wedding Suit",
      nl: "De Gids van de Bruidegom voor een Trouwpak op Maat",
      fr: "Le Guide du Marié pour un Costume de Mariage sur Mesure",
    },
    excerpt: {
      en: "Six months out, four months out, two weeks out — what to think about, when, and what to leave to your tailor.",
      nl: "Zes maanden vooraf, vier maanden vooraf, twee weken vooraf — wat te bedenken, wanneer, en wat aan uw kleermaker over te laten.",
      fr: "Six mois avant, quatre mois avant, deux semaines avant — à quoi penser, quand, et ce qu'il faut laisser à votre tailleur.",
    },
    body: {
      en: enLorem([
        "A wedding suit is not bought. It is built. The single best decision a groom can make is to start early — not because of complexity, but because time is the secret ingredient of every great garment.",
        "Six months out, the conversation is about the day. Where, when, who. A garden in Tuscany asks for very different cloth than a winter chapel in Mechelen. We start with the day, and the day chooses the suit.",
        "Four months out, the cloth is on order, the pattern is drafted, and the first muslin is ready. This is when the suit stops being an idea and starts being yours. The first fitting is rarely flattering — basted seams, raw edges, no lining. That is the point. We need to see how the cloth lives on you.",
        "Two months out, the suit comes together. The shoulder is set. The lapel is rolled. Buttons are chosen. This is the fitting where most grooms exhale for the first time. Something they imagined is now hanging on a shoulder.",
        "Two weeks out, we do the final fitting. Almost nothing changes. We press, we steam, we put the suit in its bag. We see you on the morning of the wedding only if you ask. The work is done.",
        "On the day, you will not think about the suit. That is the brief. That is the entire brief. You will think about your partner, about the music, about the toast you forgot to write. The suit will simply work.",
        "If you take one piece of advice from this page, take this: book the consultation early, even if you are not yet ready to commit. The hour itself is free. What it gives you is clarity — and time, which is the only thing we cannot make in the atelier.",
      ]),
      nl: enLorem([
        "Een trouwpak wordt niet gekocht. Het wordt gebouwd. De beste beslissing die een bruidegom kan nemen, is vroeg beginnen — niet vanwege complexiteit, maar omdat tijd het geheime ingrediënt van elk groot kledingstuk is.",
        "Zes maanden vooraf gaat het gesprek over de dag. Waar, wanneer, wie. Een tuin in Toscane vraagt om totaal andere stof dan een winterkapel in Mechelen. We beginnen bij de dag, en de dag kiest het pak.",
        "Vier maanden vooraf is de stof besteld, het patroon getekend en de eerste mousseline klaar. Dat is het moment waarop het pak ophoudt een idee te zijn en van u wordt. De eerste paspas is zelden flatteus — losse naden, ruwe randen, geen voering. Dat is de bedoeling. We moeten zien hoe de stof op u leeft.",
        "Twee maanden vooraf komt het pak samen. De schouder zit. De revers rolt. Knopen zijn gekozen. Dit is de paspas waarop de meeste bruidegoms voor het eerst uitademen. Iets dat ze zich verbeeldden, hangt nu op een schouder.",
        "Twee weken vooraf doen we de laatste paspas. Bijna niets verandert. We persen, we stomen, we stoppen het pak in de hoes. We zien u op de ochtend van de bruiloft enkel als u het vraagt. Het werk is gedaan.",
        "Op de dag zelf zult u niet aan het pak denken. Dat is de opdracht. De hele opdracht. U zult denken aan uw partner, aan de muziek, aan de speech die u vergat te schrijven. Het pak werkt gewoon.",
        "Als u één advies van deze pagina meeneemt, neem dan dit: boek de consultatie vroeg, zelfs als u nog niet klaar bent om te beslissen. Het uur zelf is gratis. Wat het geeft is helderheid — en tijd, het enige dat we in het atelier niet kunnen maken.",
      ]),
      fr: enLorem([
        "Un costume de mariage ne s'achète pas. Il se construit. La meilleure décision qu'un marié puisse prendre est de commencer tôt — non par complexité, mais parce que le temps est l'ingrédient secret de tout grand vêtement.",
        "Six mois avant, la conversation porte sur le jour. Où, quand, qui. Un jardin en Toscane appelle un tissu très différent d'une chapelle d'hiver à Malines. On part du jour, et le jour choisit le costume.",
        "Quatre mois avant, le tissu est commandé, le patron tracé, la première toile prête. C'est le moment où le costume cesse d'être une idée pour devenir le vôtre. Le premier essayage est rarement flatteur — coutures bâtis, bords vifs, pas de doublure. C'est le but. Nous devons voir comment le tissu vit sur vous.",
        "Deux mois avant, le costume prend forme. L'épaule est posée. Le revers roule. Les boutons sont choisis. C'est l'essayage où la plupart des mariés respirent pour la première fois. Quelque chose qu'ils avaient imaginé est maintenant sur une épaule.",
        "Deux semaines avant, c'est l'essayage final. Presque rien ne change. On presse, on vapore, on met le costume dans sa housse. Nous ne vous revoyons le matin du mariage que si vous le souhaitez. Le travail est fait.",
        "Le jour J, vous ne penserez pas au costume. C'est le cahier des charges. Tout le cahier des charges. Vous penserez à votre partenaire, à la musique, au discours que vous avez oublié d'écrire. Le costume fonctionnera, simplement.",
        "Si vous ne devez retenir qu'un conseil de cette page, retenez celui-ci : réservez la consultation tôt, même si vous n'êtes pas encore prêt à vous engager. L'heure est offerte. Ce qu'elle vous donne, c'est de la clarté — et du temps, la seule chose que nous ne pouvons pas fabriquer à l'atelier.",
      ]),
    },
  },
  {
    slug: "seasonal-style-autumn",
    image: blog4,
    date: "December 2025",
    category: "Seasonal",
    readMinutes: 5,
    title: {
      en: "Autumn & Winter Style: Cloth for Cold Light",
      nl: "Herfst- & Winterstijl: Stof voor Koud Licht",
      fr: "Style d'Automne & d'Hiver : Tissus pour la Lumière Froide",
    },
    excerpt: {
      en: "Tobacco flannels, dark olive tweeds, espresso glen checks — how the cold months invite richer cloth and quieter colours.",
      nl: "Tabak flanellen, donkere olijftweeds, espresso glen checks — hoe de koude maanden vragen om rijkere stoffen en stillere kleuren.",
      fr: "Flanelles tabac, tweeds vert olive sombre, prince-de-galles espresso — comment les mois froids invitent des étoffes plus riches et des couleurs plus calmes.",
    },
    body: {
      en: enLorem([
        "Cold light asks for warm cloth. In Brussels, in Leuven, the autumn sun comes in low and amber, and it flatters depth. This is the season of flannel, of tweed, of cashmere blends that hold their shape against the wind.",
        "Our preferred autumn palette is built around tobacco, deep olive, espresso brown and a chalk-faded grey. Worn alone or together, they read as quiet wealth — never loud, always intentional.",
        "A tobacco flannel two-piece with a cream knit underneath is, to our eyes, the most elegant outfit a man can wear from October to February. It works at a winter wedding, at a long lunch, at a board meeting. It does not date.",
        "If you wear navy in summer, try midnight blue in winter. The shift is small. The effect is unmistakable in low light.",
        "We commission new autumn bunches every August. By September the table in the atelier is heavy with flannels and tweeds. Walk in, touch them, choose what speaks. The cold months will be kinder for it.",
      ]),
      nl: enLorem([
        "Koud licht vraagt om warme stof. In Brussel, in Leuven, valt het herfstlicht laag en amberkleurig binnen, en het flatteert diepte. Dit is het seizoen van flanel, van tweed, van cashmere-mengsels die hun vorm houden in de wind.",
        "Ons favoriete herfstpalet is opgebouwd rond tabak, diep olijf, espresso bruin en een krijtwit-vervaagd grijs. Apart of samen gedragen lezen ze als stille welvaart — nooit luid, altijd bewust.",
        "Een tabak flanellen tweedelig met een crème gebreide trui eronder is, in onze ogen, de meest elegante outfit die een man kan dragen van oktober tot februari. Het werkt op een winterbruiloft, een lange lunch, een vergadering. Het veroudert niet.",
        "Wie marineblauw draagt in de zomer, probeert middernachtblauw in de winter. De verschuiving is klein. Het effect is onmiskenbaar in laag licht.",
        "We bestellen elk augustus nieuwe herfstbundels. Tegen september ligt de tafel in het atelier vol met flanellen en tweeds. Kom binnen, raak ze aan, kies wat spreekt. De koude maanden zullen er milder voor zijn.",
      ]),
      fr: enLorem([
        "La lumière froide appelle un tissu chaud. À Bruxelles, à Louvain, le soleil d'automne entre bas et ambré, et il flatte la profondeur. C'est la saison de la flanelle, du tweed, des mélanges cachemire qui tiennent leur forme face au vent.",
        "Notre palette d'automne préférée s'articule autour du tabac, du vert olive profond, du brun espresso et d'un gris craie délavé. Portées seules ou ensemble, ces couleurs lisent une richesse discrète — jamais bruyante, toujours intentionnelle.",
        "Une flanelle tabac deux-pièces avec un tricot crème en dessous est, à nos yeux, la tenue la plus élégante qu'un homme puisse porter d'octobre à février. Elle fonctionne à un mariage d'hiver, à un long déjeuner, à un conseil. Elle ne se démode pas.",
        "Qui porte le bleu marine en été essaie le bleu nuit en hiver. Le glissement est minime. L'effet est sans appel sous une lumière basse.",
        "Nous commandons de nouveaux bunchs d'automne chaque mois d'août. En septembre, la table de l'atelier est lourde de flanelles et de tweeds. Entrez, touchez, choisissez ce qui parle. Les mois froids n'en seront que plus doux.",
      ]),
    },
  },
  {
    slug: "shoulder-construction-explained",
    image: editorial1,
    date: "November 2025",
    category: "Craft",
    readMinutes: 6,
    title: {
      en: "Shoulder Construction, Explained",
      nl: "Schouderconstructie, Uitgelegd",
      fr: "La Construction de l'Épaule, Expliquée",
    },
    excerpt: {
      en: "From Neapolitan spalla camicia to British roped shoulders — what the silhouette of your shoulder says about you.",
      nl: "Van Napolitaanse spalla camicia tot Britse opgerolde schouders — wat het silhouet van uw schouder over u zegt.",
      fr: "De la spalla camicia napolitaine à l'épaule roulée britannique — ce que la silhouette de votre épaule dit de vous.",
    },
    body: {
      en: enLorem([
        "The shoulder is the only part of a jacket that is impossible to fake. Everything else can be adjusted, but a shoulder sits the way it was built. It is the first thing the eye reads.",
        "The Neapolitan tradition — spalla camicia — gathers the sleeve into the shoulder like the cap of a shirt. It is soft, expressive, and slightly informal. It suits men who move quickly, gesture often, and want their jacket to feel like a second skin.",
        "The British tradition — the roped shoulder — extends the sleeve head with a small lift, giving the silhouette a clean, structured edge. It reads formal, decisive, executive. It is the shoulder of board rooms and ceremonies.",
        "Between these two extremes lives the unstructured Italian shoulder, the lightly padded Milanese, and a dozen quiet variations. There is no correct answer. There is only the answer that fits the man.",
        "When we draft your pattern, we choose your shoulder before we choose your lapel, before we choose your buttons, before we choose anything else. It is the foundation. Everything you wear on top of it is conversation.",
      ]),
      nl: enLorem([
        "De schouder is het enige deel van een jas dat onmogelijk te faken is. Al de rest kan aangepast worden, maar een schouder zit zoals hij gebouwd is. Het is het eerste wat het oog leest.",
        "De Napolitaanse traditie — spalla camicia — rimpelt de mouw in de schouder als de top van een hemd. Zacht, expressief, en licht informeel. Past bij mannen die snel bewegen, vaak gesticuleren, en hun jas willen voelen als een tweede huid.",
        "De Britse traditie — de opgerolde schouder — verlengt de mouwkop met een lichte lift, wat het silhouet een schone, gestructureerde rand geeft. Leest formeel, beslist, executief. De schouder van bestuurskamers en ceremonies.",
        "Tussen deze twee extremen leven de ongestructureerde Italiaanse schouder, de licht gepolsterde Milanese, en een dozijn stille variaties. Er is geen juist antwoord. Enkel het antwoord dat bij de man past.",
        "Wanneer we uw patroon tekenen, kiezen we uw schouder voor we uw revers kiezen, voor we uw knopen kiezen, voor we wat dan ook anders kiezen. Het is het fundament. Alles wat u erbovenop draagt, is conversatie.",
      ]),
      fr: enLorem([
        "L'épaule est la seule partie d'une veste impossible à truquer. Tout le reste s'ajuste, mais une épaule reste telle qu'elle a été construite. C'est ce que l'œil lit en premier.",
        "La tradition napolitaine — spalla camicia — fronce la manche dans l'épaule comme le haut d'une chemise. C'est doux, expressif, légèrement informel. Cela convient aux hommes qui bougent vite, gestent souvent, et veulent une veste comme une seconde peau.",
        "La tradition britannique — l'épaule roulée — prolonge la tête de manche d'un léger relèvement, donnant à la silhouette un bord net et structuré. Cela lit formel, décidé, exécutif. C'est l'épaule des salles de conseil et des cérémonies.",
        "Entre ces deux extrêmes vivent l'épaule italienne déstructurée, la milanaise légèrement rembourrée, et une douzaine de variations discrètes. Il n'y a pas de bonne réponse. Il y a seulement la réponse qui convient à l'homme.",
        "Quand nous traçons votre patron, nous choisissons votre épaule avant le revers, avant les boutons, avant tout le reste. C'est le fondement. Tout ce que vous portez par-dessus n'est que conversation.",
      ]),
    },
  },
  {
    slug: "tailored-shirt-difference",
    image: shirtDetail,
    date: "October 2025",
    category: "Shirts",
    readMinutes: 5,
    title: {
      en: "Why a Tailored Shirt Changes Everything",
      nl: "Waarom een Hemd op Maat Alles Verandert",
      fr: "Pourquoi une Chemise sur Mesure Change Tout",
    },
    excerpt: {
      en: "The collar that does not gape, the cuff that does not slide — small fixes that the eye reads as quality.",
      nl: "De kraag die niet openvalt, de manchet die niet wegglijdt — kleine verbeteringen die het oog leest als kwaliteit.",
      fr: "Le col qui ne bâille pas, la manchette qui ne glisse pas — petites corrections que l'œil lit comme de la qualité.",
    },
    body: {
      en: enLorem([
        "Most men own ten shirts and wear three. The other seven sit in the wardrobe because something — a collar, a cuff, a hem — does not behave. A tailored shirt fixes the seven.",
        "We measure the neck, of course, but also the slope of the shoulder, the curve of the chest, the length of the arm to the wrist bone. We ask whether you wear a watch, and on which wrist. We ask whether you tuck or untuck.",
        "The collar is the only part of a shirt the world sees with your jacket on. We draft three or four collar shapes — a cutaway for a wider face, a soft point for a narrower one, a club for a softer style. The right collar makes a tie sit naturally and an open neck look intentional.",
        "Cuffs deserve the same attention. A cuff that does not slip when you reach for a glass is the difference between looking dressed and looking handled.",
        "Begin with two shirts. A white twill and a blue end-on-end. They will be your most-worn items within a month. Add the third when you are ready.",
      ]),
      nl: enLorem([
        "De meeste mannen bezitten tien hemden en dragen er drie. De andere zeven hangen in de kast omdat iets — een kraag, een manchet, een zoom — niet wil meewerken. Een hemd op maat lost die zeven op.",
        "We meten de hals, uiteraard, maar ook de helling van de schouder, de welving van de borst, de lengte van de arm tot het polsbeen. We vragen of u een horloge draagt, en aan welke pols. We vragen of u in- of uitsteekt.",
        "De kraag is het enige deel van een hemd dat de wereld ziet met uw jas aan. We tekenen drie of vier kraagvormen — een cutaway voor een breder gezicht, een zachte punt voor een smaller, een club voor een zachtere stijl. De juiste kraag laat een das natuurlijk vallen en een open hals bewust ogen.",
        "Manchetten verdienen evenveel aandacht. Een manchet die niet wegglijdt als u naar een glas reikt, is het verschil tussen gekleed ogen en gehanteerd ogen.",
        "Begin met twee hemden. Een witte twill en een blauwe end-on-end. Ze worden binnen een maand uw meest gedragen kleding. Voeg het derde toe wanneer u er klaar voor bent.",
      ]),
      fr: enLorem([
        "La plupart des hommes possèdent dix chemises et en portent trois. Les sept autres restent dans l'armoire parce que quelque chose — un col, un poignet, un ourlet — ne se tient pas. Une chemise sur mesure répare les sept.",
        "Nous mesurons le cou, bien sûr, mais aussi la pente de l'épaule, la courbe du torse, la longueur du bras jusqu'à l'os du poignet. Nous demandons si vous portez une montre, et à quel poignet. Nous demandons si vous rentrez la chemise ou la laissez sortie.",
        "Le col est la seule partie d'une chemise que le monde voit avec votre veste fermée. Nous traçons trois ou quatre formes de col — un cutaway pour un visage plus large, un col à pointe douce pour un visage plus fin, un col club pour un style plus doux. Le bon col fait tomber une cravate naturellement et donne à un col ouvert l'air voulu.",
        "Les poignets méritent la même attention. Un poignet qui ne glisse pas lorsque vous tendez la main vers un verre, c'est la différence entre paraître habillé et paraître manipulé.",
        "Commencez par deux chemises. Une twill blanche et une end-on-end bleue. Elles deviendront vos pièces les plus portées en un mois. Ajoutez la troisième quand vous serez prêt.",
      ]),
    },
  },
  {
    slug: "what-to-expect-first-visit",
    image: editorial2,
    date: "September 2025",
    category: "Atelier",
    readMinutes: 4,
    title: {
      en: "What to Expect at Your First Atelier Visit",
      nl: "Wat te Verwachten bij Uw Eerste Atelierbezoek",
      fr: "À Quoi S'attendre Lors de Votre Première Visite à l'Atelier",
    },
    excerpt: {
      en: "Sixty unhurried minutes. No pressure to commit. Here is what we will do together.",
      nl: "Zestig rustige minuten. Geen druk om te beslissen. Dit is wat we samen doen.",
      fr: "Soixante minutes sans hâte. Aucune pression pour vous engager. Voici ce que nous ferons ensemble.",
    },
    body: {
      en: enLorem([
        "The first visit is a conversation, not a transaction. Allow yourself an hour. Wear what you usually wear, including the shoes. We will sit, we will talk, we will measure if you wish.",
        "We will ask three questions. What is the suit for. When do you need it. What did you love and hate about your last suit. The answers shape everything.",
        "We will then bring out cloth — usually six to ten options chosen for you. You will touch them, hold them against your skin, see how they catch the light. The right one will surface naturally.",
        "If you are ready, we will measure. Thirty measurements take twenty minutes. If you are not ready, we will not measure. The hour is yours.",
        "You leave with a written quote, no obligation, and a sense of what your suit could be. Most clients book within a week. Some take a month. Either is welcome.",
      ]),
      nl: enLorem([
        "Het eerste bezoek is een gesprek, geen transactie. Reserveer een uur. Draag wat u doorgaans draagt, inclusief de schoenen. We zullen zitten, praten, meten als u dat wenst.",
        "We zullen drie vragen stellen. Waar dient het pak voor. Wanneer hebt u het nodig. Wat vond u geweldig en verschrikkelijk aan uw vorige pak. De antwoorden vormen alles.",
        "We brengen daarna stof — meestal zes tot tien opties die voor u zijn gekozen. U raakt ze aan, houdt ze tegen de huid, ziet hoe ze het licht vangen. De juiste komt vanzelf bovendrijven.",
        "Als u klaar bent, meten we. Dertig metingen duren twintig minuten. Als u niet klaar bent, meten we niet. Het uur is van u.",
        "U vertrekt met een schriftelijke offerte, zonder verplichting, en een gevoel van wat uw pak zou kunnen zijn. De meeste klanten boeken binnen een week. Sommigen nemen een maand. Beide zijn welkom.",
      ]),
      fr: enLorem([
        "La première visite est une conversation, pas une transaction. Accordez-vous une heure. Portez ce que vous portez d'habitude, chaussures comprises. Nous nous assiérons, nous parlerons, nous mesurerons si vous le souhaitez.",
        "Nous poserons trois questions. À quoi sert le costume. Pour quand. Qu'avez-vous aimé et détesté dans votre dernier costume. Les réponses façonnent tout.",
        "Nous sortirons ensuite des tissus — généralement six à dix options choisies pour vous. Vous les toucherez, les tiendrez contre votre peau, verrez comment ils capturent la lumière. Le bon émergera naturellement.",
        "Si vous êtes prêt, nous prendrons les mesures. Trente mesures prennent vingt minutes. Si vous n'êtes pas prêt, nous ne mesurerons pas. L'heure vous appartient.",
        "Vous repartez avec un devis écrit, sans engagement, et une idée de ce que pourrait devenir votre costume. La plupart des clients réservent dans la semaine. Certains prennent un mois. Les deux sont bienvenus.",
      ]),
    },
  },
  {
    slug: "fabric-care-bespoke-suit",
    image: fabric5,
    date: "August 2025",
    category: "Care",
    readMinutes: 4,
    title: {
      en: "How to Care for a Bespoke Suit (and Make it Last 15 Years)",
      nl: "Hoe Zorg te Dragen voor een Maatpak (en Het 15 Jaar te Laten Meegaan)",
      fr: "Comment Entretenir un Costume sur Mesure (et le Faire Durer 15 Ans)",
    },
    excerpt: {
      en: "Air, brush, rest. Three habits that double the life of fine cloth.",
      nl: "Luchten, borstelen, rusten. Drie gewoonten die de levensduur van fijne stof verdubbelen.",
      fr: "Aérer, brosser, reposer. Trois habitudes qui doublent la vie d'un tissu fin.",
    },
    body: {
      en: enLorem([
        "A bespoke suit is built to be worn, not pampered. But three small habits will quietly double its life.",
        "Air. After every wear, hang the suit on a wide wooden hanger in open air for at least twelve hours. Wool wants to breathe. It releases moisture, smells and the day, and returns to its shape on its own.",
        "Brush. A soft horsehair brush, used downward in long strokes, removes dust before it embeds in the weave. Thirty seconds is enough. Do this once a week if the suit is in rotation.",
        "Rest. Never wear the same suit two days in a row. The fibres need 24 to 48 hours to recover their tension. A suit worn alternately with one other will outlive a suit worn daily by years.",
        "Dry-clean only when you must. Twice a year is plenty for most. Steam between cleans. Press creases with a damp cotton cloth between the iron and the wool — never iron wool directly.",
        "Done well, a wedding suit becomes the suit you wear to your child's wedding. That is not romance. That is craftsmanship.",
      ]),
      nl: enLorem([
        "Een maatpak is gebouwd om gedragen te worden, niet vertroeteld. Maar drie kleine gewoonten zullen stilletjes zijn levensduur verdubbelen.",
        "Luchten. Na elke draagbeurt het pak twaalf uur op een brede houten kapstok in open lucht hangen. Wol wil ademen. Het laat vocht, geuren en de dag los, en keert vanzelf terug naar zijn vorm.",
        "Borstelen. Een zachte paardenharen borstel, neerwaarts in lange halen gebruikt, verwijdert stof voor het in het weefsel inbedt. Dertig seconden is genoeg. Doe dit één keer per week als het pak in rotatie is.",
        "Rusten. Draag nooit hetzelfde pak twee dagen op rij. De vezels hebben 24 tot 48 uur nodig om hun spanning te herstellen. Een pak afwisselend gedragen met één ander, overleeft een dagelijks gedragen pak met jaren.",
        "Droogkuis alleen wanneer het moet. Tweemaal per jaar is voor de meesten voldoende. Stoom tussen de kuisbeurten. Pers vouwen met een vochtige katoenen doek tussen het strijkijzer en de wol — strijk wol nooit rechtstreeks.",
        "Goed gedaan wordt een trouwpak het pak dat u draagt op de bruiloft van uw kind. Dat is geen romantiek. Dat is vakmanschap.",
      ]),
      fr: enLorem([
        "Un costume sur mesure est fait pour être porté, pas pour être dorloté. Mais trois petites habitudes vont discrètement doubler sa vie.",
        "Aérer. Après chaque port, suspendre le costume sur un cintre en bois large à l'air libre pendant au moins douze heures. La laine a besoin de respirer. Elle libère humidité, odeurs et la journée, et reprend sa forme d'elle-même.",
        "Brosser. Une brosse douce en crin de cheval, utilisée vers le bas en longs gestes, enlève la poussière avant qu'elle ne s'incruste dans la trame. Trente secondes suffisent. Une fois par semaine si le costume est en rotation.",
        "Reposer. Ne portez jamais le même costume deux jours d'affilée. Les fibres ont besoin de 24 à 48 heures pour retrouver leur tension. Un costume porté en alternance avec un autre survivra de plusieurs années à un costume porté quotidiennement.",
        "Le pressing seulement si nécessaire. Deux fois par an suffit à la plupart. Vaporisez entre deux nettoyages. Repassez les plis avec un linge de coton humide entre le fer et la laine — ne repassez jamais la laine directement.",
        "Bien entretenu, un costume de mariage devient le costume que vous porterez au mariage de votre enfant. Ce n'est pas du romantisme. C'est du métier.",
      ]),
    },
  },
];
