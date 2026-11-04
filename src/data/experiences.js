// Expériences pros de la page À propos, du plus récent au plus ancien (cartes sous une frise).
//
// annee    : affichée en grand sur la frise ; duree : à côté du type (Alternance · 1 an)
// logo     : logo de l'entreprise, en tête du poste
// resume   : (facultatif) une phrase sous l'intitulé du poste
// missions : une ligne par mission { titre, texte, liens?, images? }
//   liens  : fiches projet ou sites, en pastilles
//   images : captures ; celles de tout le poste forment une rangée de vignettes (clic pour agrandir)

const logoLagoon = { src: '/images/pro/logo_entreprises/logo-lagoon.svg', width: 542, height: 199 };

export const experiences = [
  {
    type: 'Alternance',
    annee: '2026',
    duree: '1 an',
    titre: 'Alternante développeuse front et UI/UX',
    entreprise: 'OFFRATEL Lagoon, pôle numérique',
    lieu: 'BUT MMI 3',
    logo: logoLagoon,
    resume: 'Intégration front et maquettage !',
    missions: [
      {
        titre: 'Refonte des pages de lagoon.nc',
        texte: "Intégration front de la refonte des pages Accueil et Offres. J'ai aussi fait la maquette du formulaire de rappel.",
        liens: [
          { titre: 'lagoon.nc', href: 'https://www.lagoon.nc' },
          { titre: 'Maquette Figma', href: 'https://www.figma.com/design/ik5EnJmS1K2DBvGKT04VSJ/Lagoon---maquettes?node-id=0-1&t=Zl32VVgQEeR4wWuy-1' },
        ],
        images: [
          { src: '/images/pro/lagoon/accueil/accueil-mag.webp', alt: "Page d'accueil de lagoon.nc, section Lagoon Mag avec son carrousel d'articles", width: 1534, height: 770 },
          { src: '/images/pro/lagoon/accueil/accueil-avis-business.webp', alt: "Page d'accueil de lagoon.nc, sections Ensemble pour l'avis et promo Lagoon Business", width: 1534, height: 769 },
          { src: '/images/pro/lagoon/offres/offres-speciales.webp', alt: "Page Offres de lagoon.nc, carrousel des offres spéciales", width: 1534, height: 769 },
          { src: '/images/pro/lagoon/offres/bento.webp', alt: "Page Offres de lagoon.nc, bento des 3 bonnes raisons de choisir Lagoon, du quiz et du conseiller", width: 1534, height: 769 },
          { src: '/images/pro/lagoon/offres/forfaits.webp', alt: "Page Offres de lagoon.nc, choix du forfait internet avec le panier", width: 1534, height: 770 },
          { src: '/images/pro/lagoon/offres/promo-espace-client.webp', alt: "Page Offres de lagoon.nc, promo de l'espace client et articles du Mag", width: 1534, height: 770 },
          { src: '/images/pro/lagoon/offres/formulaire-rappel.webp', alt: "Formulaire Planifier un appel, pour être rappelé par un conseiller Lagoon", width: 1534, height: 769 },
        ],
      },
      {
        titre: 'Nouvelles pages de Lagoon Business',
        texte: "Intégration front de la nouvelle page Solutions entreprises, puis maquette et intégration de la page Business 200.",
        liens: [
          { titre: 'Page Business 200', href: 'https://lagoonbusiness.nc/offre-business-200' },
          { titre: 'Maquette Business 200', href: 'https://www.figma.com/design/jaGt1tQTGMKh9Onhf9iMkD/Lagoon-Business---Offre-200?node-id=0-1&t=U01zUICT7VEwUNNJ-1' },
        ],
        images: [
          { src: '/images/pro/lagoon_business/solutions-entreprises.webp', alt: "Page Solutions entreprises de Lagoon Business, « 100 % aux côtés des pros », avec le formulaire de contact", width: 1534, height: 768 },
          { src: '/images/pro/lagoon_business/business-200.webp', alt: "Page Business 200 de Lagoon Business, « Business 100 devient Business 200 »", width: 1534, height: 769 },
        ],
      },
      {
        titre: 'Espace client Lagoon Business',
        texte: "Maquettes d'un bouton de rappel commercial et de la page Filtrage pro.",
        liens: [
          { titre: 'Maquette rappel commercial', href: 'https://www.figma.com/design/ditByHNFmJGXbUoVGEb2qi/Lagoon---Espace-client?node-id=520-2134&t=AeSFxdu1BaTjd494-1' },
          { titre: 'Maquette filtrage pro', href: 'https://www.figma.com/design/ditByHNFmJGXbUoVGEb2qi/Lagoon---Espace-client?node-id=631-2544&t=AeSFxdu1BaTjd494-1' },
        ],
        images: [
          { src: '/images/pro/lagoon_business/espace-client/rappel-commercial.webp', alt: "Accueil de l'espace client Lagoon Business, avec le bouton Contactez votre commercial en bas à droite", width: 1534, height: 753 },
          { src: '/images/pro/lagoon_business/espace-client/filtrage-pro.webp', alt: "Page Filtrage pro de l'espace client Lagoon Business, avec les catégories de sites autorisées ou bloquées", width: 1534, height: 749 },
        ],
      },
      {
        titre: 'Tenjity',
        texte: "Développement front du module d'accessibilité, puis maquette et intégration de la page article de tenjity.com.",
        liens: [{ titre: 'Fiche Tenjity', href: '/projets/tenjity' }],
      },
    ],
  },
  {
    type: 'Stage',
    annee: '2025',
    duree: '2 mois',
    titre: 'Stagiaire en développement web',
    entreprise: 'OFFRATEL Lagoon, pôle numérique',
    lieu: 'BUT MMI 2',
    logo: logoLagoon,
    missions: [
      {
        titre: 'La Grande Roue Lagoon',
        texte: 'Refonte UX/UI et intégration front du jeu pour la Foire du Pacifique.',
        liens: [{ titre: 'Fiche projet', href: '/projets/luckywheel-lagoon' }],
      },
      {
        titre: 'Espace client',
        texte: "Optimisation UX/UI et intégration front de l'espace client, toujours en production.",
        liens: [{ titre: 'Fiche projet', href: '/projets/refonte-espaceclient-lagoon' }],
      },
    ],
  },
  {
    type: 'Stage',
    annee: '2024',
    duree: '1 mois',
    titre: 'Stagiaire en communication',
    entreprise: 'Agence Sanitaire et Sociale de Nouvelle-Calédonie (ASSNC)',
    lieu: 'BUT MMI 1',
    logo: { src: '/images/pro/logo_entreprises/logo-assnc.webp', width: 280, height: 99 },
    missions: [
      { titre: 'Campagne Nouvel An 2025', texte: 'Création des visuels de la campagne.' },
      { titre: 'Réseaux sociaux', texte: 'Optimisation des stratégies de communication sur les réseaux sociaux.' },
      { titre: 'Travail en équipe', texte: 'Planification et réalisation de projets de communication.' },
    ],
  },
];
