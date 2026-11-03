// Référentiel du BUT MMI, parcours Développement web et dispositifs interactifs
// (annexe 19, 2022) : les 5 compétences, leurs niveaux et leurs apprentissages
// critiques (AC). Sert au tableau du volet académique (/academique/).
//
// Pour chaque AC :
//   code, intitule  repris du référentiel officiel
//   projets         slugs des projets (src/data/projets.js) qui en apportent la preuve
//   fiches          (optionnel) fiches de réflexion du journal : [{ titre, href }]

export const PARCOURS = 'Développement web et dispositifs interactifs';

// Niveaux affichés dans le tableau (3 = compétences de 3e année). Un niveau
// d'une autre année s'affiche aussi dès qu'un de ses AC est relié à une fiche
// de réflexion. Mettre [1, 2, 3] pour montrer toute la progression du BUT.
export const NIVEAUX_AFFICHES = [3];

export const competences = [
  {
    nom: 'Comprendre',
    intitule: "Comprendre les écosystèmes, les besoins des utilisateurs et les dispositifs de communication numérique",
    niveaux: [
      {
        niveau: 1,
        titre: 'Niveau 1 · Comprendre les éléments de communication et les attentes utilisateurs',
        ac: [
          { code: 'AC11.01', intitule: "Présenter une organisation, ses activités et son environnement (économique, sociologique, culturel, juridique, technologique, communicationnel et médiatique)", projets: ['aima', 'tenjity'] },
          { code: 'AC11.02', intitule: "Évaluer un site web, un produit multimédia ou un dispositif interactif existant en s'appuyant sur des guides de bonnes pratiques", projets: ['refonte-espaceclient-lagoon', 'luckywheel-lagoon'] },
          { code: 'AC11.03', intitule: 'Produire des analyses statistiques descriptives et les interpréter pour évaluer un contexte socio-économique', projets: [] },
          { code: 'AC11.04', intitule: 'Analyser des formes médiatiques et leur sémiotique', projets: ['etincelle-caledonienne'] },
          { code: 'AC11.05', intitule: 'Identifier les cibles (critères socio-économiques, démographiques, géographiques, culturels…)', projets: ['aima', 'windtell'] },
          { code: 'AC11.06', intitule: 'Réaliser des entretiens utilisateurs pour construire des personae et des récits utilisateurs (user stories)', projets: ['liminis'] },
        ],
      },
      {
        niveau: 2,
        titre: "Niveau 2 · Comprendre la stratégie de communication et l'expérience utilisateur",
        ac: [
          { code: 'AC21.01', intitule: "Analyser la stratégie de communication ou marketing d'un acteur, d'une organisation au regard d'un secteur ou d'un marché (stratégie, mission, valeurs…)", projets: ['aima'] },
          { code: 'AC21.02', intitule: 'Auditer un site web, une marque ou un service, en termes de trafic et de référencement', projets: [] },
          { code: 'AC21.03', intitule: 'Traiter des données avec des outils statistiques pour faciliter leur analyse et leur exploitation', projets: [] },
          { code: 'AC21.04', intitule: "Identifier et décrire les parcours client à partir d'enquêtes de terrain", projets: ['tenjity', 'liminis'] },
          { code: 'AC21.05', intitule: "Cartographier les expériences utilisateur : points de contact, points de friction et de satisfaction, carte d'empathie", projets: ['liminis'] },
        ],
      },
    ],
  },
  {
    nom: 'Concevoir',
    intitule: 'Concevoir ou co-concevoir une réponse stratégique pertinente à une problématique complexe',
    niveaux: [
      {
        niveau: 1,
        titre: 'Niveau 1 · Concevoir une réponse stratégique',
        ac: [
          { code: 'AC12.01', intitule: "Concevoir un produit ou un service en terme d'usage et de fonctionnalité", projets: ['windtell', 'pocket-stars', 'eveil-des-abysses'] },
          { code: 'AC12.02', intitule: "Construire la proposition de valeur d'un produit ou d'un service", projets: ['aima'] },
          { code: 'AC12.03', intitule: 'Proposer une recommandation marketing (cibles, objectifs, points de contact)', projets: [] },
          { code: 'AC12.04', intitule: 'Proposer une stratégie de communication', projets: ['windtell', 'etincelle-caledonienne'] },
        ],
      },
      {
        niveau: 2,
        titre: 'Niveau 2 · Co-concevoir une réponse stratégique',
        ac: [
          { code: 'AC22.01', intitule: 'Co-concevoir un produit ou un service (proposition de valeur, fonctionnalités…)', projets: ['aima', 'liminis', 'eveil-des-abysses'] },
          { code: 'AC22.02', intitule: 'Produire une recommandation ergonomique à partir des tests utilisateurs (sur système fonctionnel, prototype ou maquette interactive)', projets: ['tenjity', 'windtell'] },
          { code: 'AC22.03', intitule: "Co-construire une recommandation stratégique (en structurant un plan d'action)", projets: [] },
          { code: 'AC22.04', intitule: "Optimiser le référencement d'un site web, d'un produit ou d'un service", projets: [] },
          { code: 'AC22.05', intitule: 'Mettre en place une présence sur les réseaux sociaux', projets: [] },
        ],
      },
    ],
  },
  {
    nom: 'Exprimer',
    intitule: 'Exprimer un message avec les médias numériques pour informer et communiquer',
    niveaux: [
      {
        niveau: 1,
        titre: 'Niveau 1 · Exprimer un message par des productions simples',
        ac: [
          { code: 'AC13.01', intitule: 'Écrire pour les médias numériques', projets: ['accroche-video'] },
          { code: 'AC13.02', intitule: "Produire des pistes graphiques et des planches d'inspiration", projets: ['liminis', 'eveil-des-abysses', 'pocket-stars'] },
          { code: 'AC13.03', intitule: 'Créer, composer et retoucher des visuels', projets: ['sticker-pack', 'windtell'] },
          { code: 'AC13.04', intitule: 'Tourner et monter une vidéo (scénario, captation image et son…)', projets: ['accroche-video', 'etincelle-caledonienne'] },
          { code: 'AC13.05', intitule: 'Designer une interface web (wireframes, UI)', projets: ['refonte-espaceclient-lagoon', 'liminis', 'tenjity'] },
          { code: 'AC13.06', intitule: 'Optimiser les médias en fonction de leurs usages et supports de diffusion', projets: ['etincelle-caledonienne'] },
        ],
      },
      {
        niveau: 2,
        titre: 'Niveau 2 · Exprimer une identité visuelle et éditoriale transmédia',
        ac: [
          { code: 'AC23.01', intitule: 'Produire un écrit journalistique sourcé et documenté', projets: ['etincelle-caledonienne'] },
          { code: 'AC23.02', intitule: 'Définir une iconographie (illustrations, photographies, vidéos)', projets: ['luckywheel-lagoon', 'liminis'] },
          { code: 'AC23.03', intitule: 'Créer et décliner une identité visuelle (charte graphique)', projets: ['liminis', 'windtell'] },
          { code: 'AC23.04', intitule: 'Imaginer, écrire et scénariser en vue d’une communication multimédia ou transmédia', projets: ['eveil-des-abysses', 'accroche-video'], fiches: [{ titre: 'Webdoc NC la 1ère', href: '/academique/journal/webdoc-nc1ere/' }] },
          { code: 'AC23.05', intitule: 'Réaliser, composer et produire pour une communication plurimédia', projets: ['windtell', 'etincelle-caledonienne'], fiches: [{ titre: 'Webdoc NC la 1ère', href: '/academique/journal/webdoc-nc1ere/' }] },
          { code: 'AC23.06', intitule: 'Élaborer et produire des animations, des designs sonores, des effets spéciaux, de la visualisation de données ou de la 3D', projets: ['resonance', 'pocket-stars', 'luckywheel-lagoon'] },
        ],
      },
    ],
  },
  {
    nom: 'Développer',
    intitule: 'Développer pour le web et les médias numériques',
    niveaux: [
      {
        niveau: 1,
        titre: 'Niveau 1 · Développer un site web simple et le mettre en ligne',
        ac: [
          { code: 'AC14.01', intitule: 'Exploiter de manière autonome un environnement de développement efficace et productif', projets: ['pocket-stars', 'aima'] },
          { code: 'AC14.02', intitule: 'Produire des pages Web fluides incluant un balisage sémantique efficace et des interactions simples', projets: ['tenjity', 'luckywheel-lagoon'] },
          { code: 'AC14.03', intitule: 'Générer des pages Web à partir de données structurées', projets: ['pocket-stars', 'windtell'] },
          { code: 'AC14.04', intitule: "Mettre en ligne une application Web en utilisant une solution d'hébergement standard", projets: ['pocket-stars', 'windtell'] },
          { code: 'AC14.05', intitule: "Modéliser les données d'une application Web", projets: ['aima'] },
          { code: 'AC14.06', intitule: 'Déployer et personnaliser une application Web en utilisant un CMS ou un framework MVC', projets: ['aima'] },
        ],
      },
      {
        niveau: 2,
        titre: 'Niveau 2 · Développer une application Web interactive',
        ac: [
          { code: 'AC24.01', intitule: 'Produire des pages et applications Web responsives', projets: ['pocket-stars', 'aima', 'refonte-espaceclient-lagoon'] },
          { code: 'AC24.02', intitule: 'Mettre en place ou développer un back office', projets: ['aima'] },
          { code: 'AC24.03', intitule: 'Intégrer, produire ou développer des interactions riches ou des dispositifs interactifs', projets: ['eveil-des-abysses', 'liaz-gallery', 'luckywheel-lagoon'] },
          { code: 'AC24.04', intitule: "Modéliser les traitements d'une application Web", projets: ['aima'] },
          { code: 'AC24.05', intitule: 'Optimiser une application web en termes de référencement et de temps de chargement', projets: [] },
          { code: 'AC24.06', intitule: "Configurer une solution d'hébergement adaptée aux besoins", projets: [] },
        ],
      },
      {
        niveau: 3,
        titre: 'Niveau 3 · Développer un écosystème numérique complexe',
        ac: [
          { code: 'AC34.01', intitule: "Développer à l'aide d'un framework de développement côté client", projets: ['aima', 'tenjity', 'luckywheel-lagoon'], fiches: [{ titre: 'Pocket Stars', href: '/academique/journal/pocket-stars/' }, { titre: 'LiAZ Gallery', href: '/academique/journal/liaz-gallery/' }, { titre: 'Aïma (SAÉ 501)', href: '/academique/journal/aima-sae501/' }] },
          { code: 'AC34.02', intitule: "Développer à l'aide d'un framework de développement côté serveur", projets: ['aima'], fiches: [{ titre: 'Aïma (SAÉ 501)', href: '/academique/journal/aima-sae501/' }] },
          { code: 'AC34.03', intitule: 'Développer des dispositifs interactifs sophistiqués', projets: ['pocket-stars', 'liaz-gallery', 'tenjity'], fiches: [{ titre: 'Pocket Stars', href: '/academique/journal/pocket-stars/' }, { titre: 'LiAZ Gallery', href: '/academique/journal/liaz-gallery/' }, { titre: 'Aïma (SAÉ 501)', href: '/academique/journal/aima-sae501/' }] },
          { code: 'AC34.04', intitule: 'Concevoir et développer des composants logiciels, plugins ou extensions', projets: ['tenjity'], fiches: [{ titre: 'Pocket Stars', href: '/academique/journal/pocket-stars/' }, { titre: 'Aïma (SAÉ 501)', href: '/academique/journal/aima-sae501/' }] },
          { code: 'AC34.05', intitule: "Maîtriser l'hébergement et le déploiement d'applications", projets: ['aima', 'refonte-espaceclient-lagoon'], fiches: [{ titre: 'Pocket Stars', href: '/academique/journal/pocket-stars/' }, { titre: 'Aïma (SAÉ 501)', href: '/academique/journal/aima-sae501/' }] },
        ],
      },
    ],
  },
  {
    nom: 'Entreprendre',
    intitule: 'Entreprendre dans le secteur du numérique',
    niveaux: [
      {
        niveau: 1,
        titre: 'Niveau 1 · Entreprendre un projet numérique',
        ac: [
          { code: 'AC15.01', intitule: 'Gérer un projet avec une méthode classique', projets: ['windtell', 'pocket-stars'] },
          { code: 'AC15.02', intitule: 'Budgéter un projet et suivre sa rentabilité', projets: [] },
          { code: 'AC15.03', intitule: "Découvrir les écosystèmes d'innovation numérique (fab labs, living labs, tiers-lieux, incubateurs…)", projets: ['windtell'] },
          { code: 'AC15.04', intitule: 'Analyser un produit ou un service innovant en identifiant les propositions de valeurs et en évaluant les solutions proposées', projets: [] },
          { code: 'AC15.05', intitule: 'Construire une présence en ligne professionnelle (personal branding)', projets: ['accroche-video'] },
          { code: 'AC15.06', intitule: 'Interagir au sein des organisations', projets: ['refonte-espaceclient-lagoon', 'luckywheel-lagoon'] },
          { code: 'AC15.07', intitule: 'Produire un message écrit ou oral professionnel', projets: ['etincelle-caledonienne'] },
        ],
      },
      {
        niveau: 2,
        titre: "Niveau 2 · Entreprendre un projet au sein d'un écosystème numérique",
        ac: [
          { code: 'AC25.01', intitule: "Gérer un projet avec une méthode d'amélioration continue (par exemple une méthode agile)", projets: ['aima', 'etincelle-caledonienne'] },
          { code: 'AC25.02', intitule: "Cartographier un écosystème (identification des acteurs, synthèse des propositions de valeur)", projets: [] },
          { code: 'AC25.03', intitule: "Initier la constitution d'un réseau professionnel", projets: [] },
          { code: 'AC25.04', intitule: 'Collaborer au sein des organisations', projets: ['eveil-des-abysses', 'liminis', 'windtell'] },
          { code: 'AC25.05', intitule: 'Maîtriser les codes des productions écrites et orales professionnelles', projets: ['etincelle-caledonienne'] },
          { code: 'AC25.06', intitule: 'Prendre en compte les contraintes juridiques', projets: ['aima'] },
        ],
      },
      {
        niveau: 3,
        titre: 'Niveau 3 · Entreprendre dans le numérique',
        ac: [
          { code: 'AC35.01', intitule: 'Piloter un produit, un service ou une équipe', projets: ['etincelle-caledonienne', 'aima'], fiches: [{ titre: 'Webdoc NC la 1ère', href: '/academique/journal/webdoc-nc1ere/' }, { titre: 'Aïma (SAÉ 501)', href: '/academique/journal/aima-sae501/' }] },
          { code: 'AC35.02', intitule: 'Maîtriser la qualité en projet Web ou multimédia', projets: ['aima'], fiches: [{ titre: 'Pocket Stars', href: '/academique/journal/pocket-stars/' }, { titre: 'LiAZ Gallery', href: '/academique/journal/liaz-gallery/' }, { titre: 'Webdoc NC la 1ère', href: '/academique/journal/webdoc-nc1ere/' }, { titre: 'Aïma (SAÉ 501)', href: '/academique/journal/aima-sae501/' }] },
          { code: 'AC35.03', intitule: "Concevoir un projet d'entreprise innovante en définissant le nom, l'identité, la forme juridique et le ton de la marque", projets: [] },
          { code: 'AC35.04', intitule: 'Défendre un projet de manière convaincante', projets: ['etincelle-caledonienne'], fiches: [{ titre: 'Webdoc NC la 1ère', href: '/academique/journal/webdoc-nc1ere/' }] },
        ],
      },
    ],
  },
];
