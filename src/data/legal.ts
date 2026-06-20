// GDPR-compliant boilerplate legal copy for Alex Nass — Belgian/EU jurisdiction.
// Placeholders ([Address], [VAT], [Phone]) to be confirmed with the business owner.

export type LegalDocId = "privacy" | "terms" | "cookies";
export type LegalLang = "en" | "nl" | "fr";

export interface LegalDoc {
  title: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}

const COMPANY = "Alex Nass";
const ADDRESS = "[Atelier address], Leuven, Belgium";
const VAT = "[BE VAT number]";
const EMAIL = "info@alexnass.be";
const UPDATED = "May 2026";

export const legalDocs: Record<LegalLang, Record<LegalDocId, LegalDoc>> = {
  en: {
    privacy: {
      title: "Privacy Policy",
      updated: `Last updated: ${UPDATED}`,
      sections: [
        {
          heading: "1. Data controller",
          body: [
            `${COMPANY}, established at ${ADDRESS}, registered under VAT ${VAT}, is the controller responsible for processing your personal data on this website.`,
            `For any question relating to your personal data, contact us at ${EMAIL}.`,
          ],
        },
        {
          heading: "2. Data we collect",
          body: [
            "Contact and booking data: name, email address, phone number, preferred appointment type, and any message you send us.",
            "Newsletter data: email address and preferred language, only if you subscribe.",
            "Technical data: IP address, browser type, device, and pages visited, collected through cookies and similar technologies (see Cookie Policy).",
          ],
        },
        {
          heading: "3. Purpose & legal basis",
          body: [
            "We process your data to (a) respond to your enquiries and arrange appointments — based on pre-contractual measures and our legitimate interest, (b) deliver the bespoke tailoring service you request — based on contract performance, (c) send our newsletter — based on your consent, (d) improve our website and security — based on our legitimate interest.",
          ],
        },
        {
          heading: "4. Retention",
          body: [
            "Booking and customer data is kept for the duration of our commercial relationship and for 10 years thereafter to comply with Belgian accounting law. Newsletter data is kept until you unsubscribe. Technical/cookie data is kept for a maximum of 13 months.",
          ],
        },
        {
          heading: "5. Recipients",
          body: [
            "Your data is processed by us and by carefully selected service providers acting on our instructions: hosting (Lovable Cloud / Supabase), email service, payment processor where applicable. We do not sell your data. Any transfer outside the EEA is covered by Standard Contractual Clauses.",
          ],
        },
        {
          heading: "6. Your rights (GDPR)",
          body: [
            "You have the right to access, rectify, erase, restrict or object to the processing of your personal data, and the right to data portability and to withdraw consent at any time. To exercise these rights, email us at " + EMAIL + ".",
            "You also have the right to lodge a complaint with the Belgian Data Protection Authority (Gegevensbeschermingsautoriteit / Autorité de protection des données — www.dataprotectionauthority.be).",
          ],
        },
        {
          heading: "7. Security",
          body: [
            "We apply appropriate technical and organisational measures to protect your data against unauthorised access, loss or alteration.",
          ],
        },
        {
          heading: "8. Changes",
          body: [
            "This policy may be updated from time to time. The latest version is always available on this page.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms & Conditions",
      updated: `Last updated: ${UPDATED}`,
      sections: [
        {
          heading: "1. General",
          body: [
            `These terms govern every offer, order and contract between ${COMPANY} (${ADDRESS}, VAT ${VAT}) and the client. By placing an order or booking an appointment, the client accepts these terms in full.`,
          ],
        },
        {
          heading: "2. Bespoke service",
          body: [
            "Each garment is made to the client's individual measurements and specifications. The client is responsible for the accuracy of choices made during fittings (fabric, lining, style details).",
          ],
        },
        {
          heading: "3. Pricing & payment",
          body: [
            "Prices are stated in EUR including VAT. A 50% deposit is due at order confirmation; the balance is payable upon delivery, unless otherwise agreed in writing.",
          ],
        },
        {
          heading: "4. Production & delivery",
          body: [
            "Indicative production time is 6 to 10 weeks from confirmed measurements. Delays caused by the client (e.g. missed fittings) extend this time accordingly.",
          ],
        },
        {
          heading: "5. Right of withdrawal",
          body: [
            "In accordance with Article VI.53 of the Belgian Code of Economic Law, the legal right of withdrawal does not apply to goods made to the consumer's specifications or clearly personalised. Bespoke garments are non-refundable once production has started.",
          ],
        },
        {
          heading: "6. Warranty",
          body: [
            "We guarantee the conformity of our garments for two years from delivery for consumer purchases, in line with Belgian consumer law. Normal wear, misuse and incorrect care are excluded.",
          ],
        },
        {
          heading: "7. Liability",
          body: [
            "Our liability is limited to the value of the order. We are not liable for indirect or consequential damages.",
          ],
        },
        {
          heading: "8. Governing law",
          body: [
            "These terms are governed by Belgian law. Any dispute shall be brought before the courts of Leuven, Belgium. Consumers may also use the European ODR platform: ec.europa.eu/consumers/odr.",
          ],
        },
      ],
    },
    cookies: {
      title: "Cookie Policy",
      updated: `Last updated: ${UPDATED}`,
      sections: [
        {
          heading: "1. What are cookies?",
          body: [
            "Cookies are small text files placed on your device when you visit a website. They allow the website to remember your actions and preferences over a period of time.",
          ],
        },
        {
          heading: "2. Cookies we use",
          body: [
            "Strictly necessary cookies — required for core site functionality (language preference, session). These do not require consent.",
            "Functional cookies — remember your choices (e.g. cookie consent state).",
            "Analytics cookies — only loaded with your consent, to understand how the site is used in aggregate.",
          ],
        },
        {
          heading: "3. Managing cookies",
          body: [
            "You can accept or refuse non-essential cookies via the banner shown on your first visit. You can change your choice at any time by clearing your browser storage for this site, or by adjusting your browser settings to block or delete cookies.",
          ],
        },
        {
          heading: "4. Third parties",
          body: [
            "If we add analytics or social-media features in the future, the corresponding providers may set their own cookies. Their privacy policies apply in addition to ours.",
          ],
        },
        {
          heading: "5. Contact",
          body: [`Questions about this Cookie Policy can be sent to ${EMAIL}.`],
        },
      ],
    },
  },
  nl: {
    privacy: {
      title: "Privacybeleid",
      updated: `Laatst bijgewerkt: ${UPDATED}`,
      sections: [
        {
          heading: "1. Verwerkingsverantwoordelijke",
          body: [
            `${COMPANY}, gevestigd te ${ADDRESS}, ingeschreven onder BTW ${VAT}, is verantwoordelijk voor de verwerking van uw persoonsgegevens via deze website.`,
            `Voor elke vraag in verband met uw persoonsgegevens kunt u ons bereiken via ${EMAIL}.`,
          ],
        },
        {
          heading: "2. Welke gegevens verzamelen wij",
          body: [
            "Contact- en afspraakgegevens: naam, e-mailadres, telefoonnummer, gewenst type afspraak en uw bericht.",
            "Nieuwsbriefgegevens: e-mailadres en taalvoorkeur, enkel indien u zich inschrijft.",
            "Technische gegevens: IP-adres, browser, toestel en bezochte pagina's, via cookies en vergelijkbare technologieën (zie Cookiebeleid).",
          ],
        },
        {
          heading: "3. Doel & rechtsgrond",
          body: [
            "Wij verwerken uw gegevens om (a) te antwoorden op uw vragen en afspraken te maken — op basis van precontractuele maatregelen en ons gerechtvaardigd belang, (b) het maatwerk te leveren dat u bestelt — op basis van contractuitvoering, (c) onze nieuwsbrief te versturen — op basis van uw toestemming, (d) onze website en de veiligheid ervan te verbeteren — op basis van ons gerechtvaardigd belang.",
          ],
        },
        {
          heading: "4. Bewaartermijn",
          body: [
            "Klant- en afspraakgegevens worden bewaard voor de duur van onze commerciële relatie en gedurende 10 jaar daarna conform de Belgische boekhoudwetgeving. Nieuwsbriefgegevens worden bewaard tot u zich uitschrijft. Technische/cookiegegevens worden maximaal 13 maanden bewaard.",
          ],
        },
        {
          heading: "5. Ontvangers",
          body: [
            "Uw gegevens worden verwerkt door ons en door zorgvuldig geselecteerde dienstverleners die in onze opdracht handelen: hosting (Lovable Cloud / Supabase), e-maildienst, betalingsverwerker indien van toepassing. Wij verkopen uw gegevens niet. Elke overdracht buiten de EER gebeurt onder de Standaardcontractbepalingen.",
          ],
        },
        {
          heading: "6. Uw rechten (AVG)",
          body: [
            "U hebt recht op inzage, rectificatie, wissing, beperking of bezwaar tegen de verwerking van uw persoonsgegevens, recht op overdraagbaarheid en het recht uw toestemming op elk moment in te trekken. Mail ons hiervoor op " + EMAIL + ".",
            "U kunt ook een klacht indienen bij de Gegevensbeschermingsautoriteit (www.gegevensbeschermingsautoriteit.be).",
          ],
        },
        {
          heading: "7. Beveiliging",
          body: [
            "Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen ongeoorloofde toegang, verlies of wijziging.",
          ],
        },
        {
          heading: "8. Wijzigingen",
          body: [
            "Dit beleid kan af en toe worden bijgewerkt. De meest recente versie staat altijd op deze pagina.",
          ],
        },
      ],
    },
    terms: {
      title: "Algemene Voorwaarden",
      updated: `Laatst bijgewerkt: ${UPDATED}`,
      sections: [
        {
          heading: "1. Algemeen",
          body: [
            `Deze voorwaarden gelden voor elke offerte, bestelling en overeenkomst tussen ${COMPANY} (${ADDRESS}, BTW ${VAT}) en de klant. Door een bestelling of afspraak te maken aanvaardt de klant deze voorwaarden integraal.`,
          ],
        },
        {
          heading: "2. Maatwerk",
          body: [
            "Elk kledingstuk wordt op de individuele maten en specificaties van de klant gemaakt. De klant is verantwoordelijk voor de juistheid van de keuzes die tijdens de pasbeurten worden gemaakt (stof, voering, stijl).",
          ],
        },
        {
          heading: "3. Prijzen & betaling",
          body: [
            "Prijzen zijn in EUR inclusief BTW. Een voorschot van 50% is verschuldigd bij bevestiging van de bestelling; het saldo bij levering, tenzij schriftelijk anders overeengekomen.",
          ],
        },
        {
          heading: "4. Productie & levering",
          body: [
            "De indicatieve productietijd bedraagt 6 tot 10 weken vanaf bevestigde maten. Vertragingen veroorzaakt door de klant (bv. gemiste pasbeurten) verlengen deze termijn evenredig.",
          ],
        },
        {
          heading: "5. Herroepingsrecht",
          body: [
            "Conform artikel VI.53 van het Wetboek van Economisch Recht is het wettelijke herroepingsrecht niet van toepassing op goederen die volgens de specificaties van de consument zijn vervaardigd of duidelijk gepersonaliseerd zijn. Maatwerkkleding kan niet worden teruggenomen zodra de productie is gestart.",
          ],
        },
        {
          heading: "6. Garantie",
          body: [
            "Wij garanderen de overeenstemming van onze kleding gedurende twee jaar vanaf de levering voor consumentenaankopen, conform het Belgisch consumentenrecht. Normale slijtage, verkeerd gebruik en onjuist onderhoud zijn uitgesloten.",
          ],
        },
        {
          heading: "7. Aansprakelijkheid",
          body: [
            "Onze aansprakelijkheid is beperkt tot de waarde van de bestelling. Wij zijn niet aansprakelijk voor indirecte of gevolgschade.",
          ],
        },
        {
          heading: "8. Toepasselijk recht",
          body: [
            "Op deze voorwaarden is het Belgisch recht van toepassing. Elk geschil wordt voorgelegd aan de rechtbanken van Leuven. Consumenten kunnen ook gebruikmaken van het Europees ODR-platform: ec.europa.eu/consumers/odr.",
          ],
        },
      ],
    },
    cookies: {
      title: "Cookiebeleid",
      updated: `Laatst bijgewerkt: ${UPDATED}`,
      sections: [
        {
          heading: "1. Wat zijn cookies?",
          body: [
            "Cookies zijn kleine tekstbestanden die op uw toestel worden geplaatst wanneer u een website bezoekt. Ze laten de website toe uw acties en voorkeuren te onthouden gedurende een bepaalde periode.",
          ],
        },
        {
          heading: "2. Cookies die wij gebruiken",
          body: [
            "Strikt noodzakelijke cookies — vereist voor de basiswerking van de site (taalvoorkeur, sessie). Geen toestemming vereist.",
            "Functionele cookies — onthouden uw keuzes (bv. uw cookietoestemming).",
            "Analytische cookies — enkel met uw toestemming, om te begrijpen hoe de site geaggregeerd wordt gebruikt.",
          ],
        },
        {
          heading: "3. Cookies beheren",
          body: [
            "U kunt niet-essentiële cookies aanvaarden of weigeren via de banner bij uw eerste bezoek. U kunt uw keuze op elk moment wijzigen door de browseropslag voor deze site te wissen, of door uw browserinstellingen aan te passen.",
          ],
        },
        {
          heading: "4. Derde partijen",
          body: [
            "Indien wij in de toekomst analytics of social-media-functies toevoegen, kunnen de betrokken aanbieders eigen cookies plaatsen. Hun privacybeleid is dan eveneens van toepassing.",
          ],
        },
        {
          heading: "5. Contact",
          body: [`Vragen over dit Cookiebeleid kunnen verzonden worden naar ${EMAIL}.`],
        },
      ],
    },
  },
  fr: {
    privacy: {
      title: "Politique de Confidentialité",
      updated: `Dernière mise à jour : ${UPDATED}`,
      sections: [
        {
          heading: "1. Responsable du traitement",
          body: [
            `${COMPANY}, établi à ${ADDRESS}, enregistré sous le numéro de TVA ${VAT}, est responsable du traitement de vos données personnelles via ce site.`,
            `Pour toute question relative à vos données personnelles, contactez-nous à ${EMAIL}.`,
          ],
        },
        {
          heading: "2. Données collectées",
          body: [
            "Données de contact et de rendez-vous : nom, adresse e-mail, numéro de téléphone, type de rendez-vous souhaité et tout message envoyé.",
            "Données newsletter : adresse e-mail et langue préférée, uniquement si vous vous inscrivez.",
            "Données techniques : adresse IP, navigateur, appareil et pages visitées, collectées via cookies et technologies similaires (voir Politique Cookies).",
          ],
        },
        {
          heading: "3. Finalité & base légale",
          body: [
            "Nous traitons vos données pour (a) répondre à vos demandes et organiser les rendez-vous — sur base de mesures précontractuelles et de notre intérêt légitime, (b) fournir le service sur mesure commandé — sur base de l'exécution du contrat, (c) envoyer notre newsletter — sur base de votre consentement, (d) améliorer notre site et sa sécurité — sur base de notre intérêt légitime.",
          ],
        },
        {
          heading: "4. Conservation",
          body: [
            "Les données clients et de rendez-vous sont conservées pendant la durée de notre relation commerciale et 10 ans après, conformément à la législation comptable belge. Les données newsletter sont conservées jusqu'à votre désinscription. Les données techniques/cookies sont conservées 13 mois maximum.",
          ],
        },
        {
          heading: "5. Destinataires",
          body: [
            "Vos données sont traitées par nous et par des prestataires soigneusement sélectionnés agissant sur nos instructions : hébergement (Lovable Cloud / Supabase), service e-mail, prestataire de paiement le cas échéant. Nous ne vendons pas vos données. Tout transfert hors EEE est encadré par des Clauses Contractuelles Types.",
          ],
        },
        {
          heading: "6. Vos droits (RGPD)",
          body: [
            "Vous avez le droit d'accès, de rectification, d'effacement, de limitation ou d'opposition au traitement de vos données, le droit à la portabilité et le droit de retirer votre consentement à tout moment. Pour exercer ces droits, écrivez-nous à " + EMAIL + ".",
            "Vous pouvez également déposer plainte auprès de l'Autorité de protection des données (www.autoriteprotectiondonnees.be).",
          ],
        },
        {
          heading: "7. Sécurité",
          body: [
            "Nous prenons les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou altération.",
          ],
        },
        {
          heading: "8. Modifications",
          body: [
            "Cette politique peut être mise à jour ponctuellement. La version la plus récente est toujours disponible sur cette page.",
          ],
        },
      ],
    },
    terms: {
      title: "Conditions Générales",
      updated: `Dernière mise à jour : ${UPDATED}`,
      sections: [
        {
          heading: "1. Général",
          body: [
            `Les présentes conditions régissent toute offre, commande et contrat entre ${COMPANY} (${ADDRESS}, TVA ${VAT}) et le client. En passant commande ou en prenant rendez-vous, le client accepte intégralement ces conditions.`,
          ],
        },
        {
          heading: "2. Service sur mesure",
          body: [
            "Chaque vêtement est confectionné selon les mensurations et spécifications individuelles du client. Le client est responsable de l'exactitude des choix faits lors des essayages (tissu, doublure, détails de style).",
          ],
        },
        {
          heading: "3. Prix & paiement",
          body: [
            "Les prix sont indiqués en EUR TVAC. Un acompte de 50 % est dû à la confirmation de la commande ; le solde à la livraison, sauf accord écrit contraire.",
          ],
        },
        {
          heading: "4. Production & livraison",
          body: [
            "Le délai de production indicatif est de 6 à 10 semaines à compter des mensurations confirmées. Tout retard imputable au client (essayages manqués, etc.) prolonge ce délai d'autant.",
          ],
        },
        {
          heading: "5. Droit de rétractation",
          body: [
            "Conformément à l'article VI.53 du Code de droit économique belge, le droit légal de rétractation ne s'applique pas aux biens confectionnés selon les spécifications du consommateur ou nettement personnalisés. Les vêtements sur mesure ne peuvent être repris une fois la production lancée.",
          ],
        },
        {
          heading: "6. Garantie",
          body: [
            "Nous garantissons la conformité de nos vêtements pendant deux ans à compter de la livraison pour les achats consommateurs, conformément au droit belge. L'usure normale, le mauvais usage et l'entretien incorrect sont exclus.",
          ],
        },
        {
          heading: "7. Responsabilité",
          body: [
            "Notre responsabilité est limitée à la valeur de la commande. Nous ne sommes pas responsables des dommages indirects ou consécutifs.",
          ],
        },
        {
          heading: "8. Droit applicable",
          body: [
            "Les présentes conditions sont régies par le droit belge. Tout litige sera porté devant les tribunaux de Louvain. Les consommateurs peuvent également utiliser la plateforme européenne ODR : ec.europa.eu/consumers/odr.",
          ],
        },
      ],
    },
    cookies: {
      title: "Politique Cookies",
      updated: `Dernière mise à jour : ${UPDATED}`,
      sections: [
        {
          heading: "1. Que sont les cookies ?",
          body: [
            "Les cookies sont de petits fichiers texte placés sur votre appareil lorsque vous visitez un site. Ils permettent au site de mémoriser vos actions et préférences pendant un certain temps.",
          ],
        },
        {
          heading: "2. Cookies utilisés",
          body: [
            "Cookies strictement nécessaires — requis pour le fonctionnement du site (préférence de langue, session). Aucun consentement requis.",
            "Cookies fonctionnels — mémorisent vos choix (par ex. votre consentement aux cookies).",
            "Cookies analytiques — chargés uniquement avec votre consentement, pour comprendre l'usage agrégé du site.",
          ],
        },
        {
          heading: "3. Gérer les cookies",
          body: [
            "Vous pouvez accepter ou refuser les cookies non essentiels via la bannière affichée à votre première visite. Vous pouvez modifier votre choix à tout moment en effaçant le stockage de votre navigateur pour ce site, ou en ajustant les paramètres de votre navigateur.",
          ],
        },
        {
          heading: "4. Tiers",
          body: [
            "Si nous ajoutons à l'avenir des fonctions d'analytics ou de réseaux sociaux, les fournisseurs concernés pourront déposer leurs propres cookies. Leur politique de confidentialité s'applique alors également.",
          ],
        },
        {
          heading: "5. Contact",
          body: [`Toute question concernant cette politique peut être envoyée à ${EMAIL}.`],
        },
      ],
    },
  },
};

export const legalRouteByLang: Record<LegalLang, string> = {
  en: "/legal",
  nl: "/juridisch",
  fr: "/mentions-legales",
};

export const legalNavLabel: Record<LegalLang, string> = {
  en: "Legal",
  nl: "Juridisch",
  fr: "Mentions légales",
};

export const legalTabLabels: Record<LegalLang, Record<LegalDocId, string>> = {
  en: { privacy: "Privacy", terms: "Terms", cookies: "Cookies" },
  nl: { privacy: "Privacy", terms: "Voorwaarden", cookies: "Cookies" },
  fr: { privacy: "Confidentialité", terms: "Conditions", cookies: "Cookies" },
};
