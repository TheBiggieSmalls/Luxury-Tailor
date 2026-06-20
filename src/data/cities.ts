export type CitySlug =
  | "leuven"
  | "brussel"
  | "antwerpen"
  | "mechelen"
  | "hasselt"
  | "aarschot"
  | "tienen"
  | "diest";

export interface CityData {
  slug: CitySlug;
  name: string;
  travel: string;
  intro: string;
  profile: string;
  venues: string;
  postalCode: string;
}

export const cities: CityData[] = [
  {
    slug: "leuven",
    name: "Leuven",
    postalCode: "3000",
    travel: "Ons atelier ligt in Leuven zelf — wandelafstand vanaf het station.",
    intro:
      "Leuven is onze thuisbasis. De stad waar Alex zijn eerste eigen patroon tekende en waar het atelier vandaag de dag elke week bruidegoms, advocaten, professoren en ondernemers ontvangt.",
    profile:
      "Leuvense klanten zijn vaak professionals die meerdere pakken bouwen rond één coherente garderobe — een dagelijks businesspak, een lichter zomerpak, een avondpak voor specifieke gelegenheden.",
    venues:
      "We werkten voor bruidegoms in de Abdij van Park, kasteel Arenberg, Faculty Club en talloze stadhuiszalen in heel Vlaams-Brabant.",
  },
  {
    slug: "brussel",
    name: "Brussel",
    postalCode: "1000",
    travel: "30 minuten vanaf onze atelier in Leuven. Voor passessies komen we ook bij u thuis of op kantoor in Brussel.",
    intro:
      "Brussel is internationaal, formeel én relaxed. Een maatpak voor een Brusselse klant is bijna nooit één pak — het is het begin van een garderobe.",
    profile:
      "Onze Brusselse klanten werken bij Europese instellingen, advocatenkantoren, in finance of consulting. Ze willen een pak dat in de boardroom én op een ambassade-receptie werkt.",
    venues:
      "Trouwpakken voor ceremonies in Le Châtelain, Steigenberger, Hotel Métropole en privéresidenties in Ukkel en Watermaal-Bosvoorde.",
  },
  {
    slug: "antwerpen",
    name: "Antwerpen",
    postalCode: "2000",
    travel: "45 minuten vanaf Leuven. Voor Antwerpse klanten komen we vaak voor één paspas naar uw kantoor of thuis.",
    intro:
      "Antwerpen heeft mode in zijn DNA. Antwerpse klanten weten wat ze willen — en vragen vaak naar een snit die nét iets meer doet dan een klassiek pak.",
    profile:
      "Mode-bewust, vaak werkzaam in design, retail of de diamant- en haveneconomie. Houden van een gedurfde stoffenkeuze of een asymmetrisch detail.",
    venues:
      "Ceremonies aan de Schelde, in 't Zuid, in Park Den Brandt of in privéfeesten op kasteeldomeinen rondom de stad.",
  },
  {
    slug: "mechelen",
    name: "Mechelen",
    postalCode: "2800",
    travel: "30 minuten vanaf Leuven. Mechelse klanten komen meestal naar het atelier; voor passessies aan huis is Mechelen vlot bereikbaar.",
    intro:
      "Mechelen is een rustige bourgeois-stad met een bloeiende ondernemerscultuur. We zien er klanten die het verschil tussen een Italiaanse en een Engelse snit kennen — en er bewust voor kiezen.",
    profile:
      "Ondernemers, advocaten en professionals die een persoonlijke kleermaker verkiezen boven een grote naam.",
    venues:
      "Trouwpakken voor de Sint-Romboutskathedraal, Hof van Busleyden, Lamot en domeinen in Bonheiden en Sint-Katelijne-Waver.",
  },
  {
    slug: "hasselt",
    name: "Hasselt",
    postalCode: "3500",
    travel: "Iets meer dan een uur vanaf Leuven. Hasseltse klanten plannen meestal twee bezoeken in het atelier in plaats van een fitting aan huis.",
    intro:
      "Hasselt en Limburg in het algemeen zijn warm en persoonlijk. Klanten kiezen Alex Nass omdat ze direct met de kleermaker willen werken, niet met een verkoopteam.",
    profile:
      "Familie-ondernemers, vaak in bouw, productie of agro-business. Klassieke smaak, met aandacht voor lichte zomerse stoffen.",
    venues:
      "Bruiloften in domein Bovy, kasteel Vilain XIIII en in talrijke landgoederen rond Hasselt en Genk.",
  },
  {
    slug: "aarschot",
    name: "Aarschot",
    postalCode: "3200",
    travel: "20 minuten vanaf Leuven. Aarschot ligt vlak bij ons atelier — passessies aan huis zijn altijd mogelijk.",
    intro:
      "Aarschot ligt in onze directe regio. Veel klanten uit Aarschot vinden de weg naar Leuven via mond-aan-mond — en blijven jarenlang.",
    profile:
      "Ondernemers en professionals uit het Hageland. Houden van degelijk vakmanschap, geen poespas.",
    venues:
      "Trouwpakken voor ceremonies in de Onze-Lieve-Vrouwkerk, kasteel van Aarschot en domeinen langs de Demer.",
  },
  {
    slug: "tienen",
    name: "Tienen",
    postalCode: "3300",
    travel: "20 minuten vanaf Leuven. Tienen is vlot bereikbaar — passessies aan huis of op kantoor zijn standaard.",
    intro:
      "Tienen en het Hageland leveren ons al jaren trouwe klanten. We werken er voor families waarvan we vaak twee of drie generaties aankleden.",
    profile:
      "Lokale ondernemers, vrije beroepen en advocaten met een voorkeur voor een klassieke, tijdloze snit.",
    venues:
      "Bruiloften in stadhuiszalen, kerken in het Hageland en feesten op landelijke domeinen rond Hoegaarden en Zoutleeuw.",
  },
  {
    slug: "diest",
    name: "Diest",
    postalCode: "3290",
    travel: "30 minuten vanaf Leuven. We rijden geregeld naar Diest voor passessies aan huis.",
    intro:
      "Diest combineert historisch karakter met een actieve ondernemersgemeenschap. Onze Diestse klanten waarderen een kleermaker die hen persoonlijk kent.",
    profile:
      "Ondernemers, professionals en bruidegoms die hun trouwpak laten maken — vaak in combinatie met een coherente outfit voor de getuigen.",
    venues:
      "Trouwpakken voor de begijnhofkerk, Sint-Sulpitiuskerk en domeinen in en rond het Diests-Tessenderlo gebied.",
  },
];

export const citiesBySlug: Record<CitySlug, CityData> = Object.fromEntries(
  cities.map((c) => [c.slug, c])
) as Record<CitySlug, CityData>;
