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

// Version anglaise (page /en/a-propos/) : mêmes images et liens, textes traduits
const imagesEn = {
  '/images/pro/lagoon/accueil/accueil-mag.webp': "lagoon.nc home page, Lagoon Mag section with its article carousel",
  '/images/pro/lagoon/accueil/accueil-avis-business.webp': "lagoon.nc home page, customer reviews section and Lagoon Business promotion",
  '/images/pro/lagoon/offres/offres-speciales.webp': "lagoon.nc Offers page, special offers carousel",
  '/images/pro/lagoon/offres/bento.webp': "lagoon.nc Offers page, bento grid with 3 good reasons to choose Lagoon, the quiz and the advisor",
  '/images/pro/lagoon/offres/forfaits.webp': "lagoon.nc Offers page, internet plan picker with the cart",
  '/images/pro/lagoon/offres/promo-espace-client.webp': "lagoon.nc Offers page, customer area promotion and Mag articles",
  '/images/pro/lagoon/offres/formulaire-rappel.webp': "Schedule a call form, to be called back by a Lagoon advisor",
  '/images/pro/lagoon_business/solutions-entreprises.webp': "Lagoon Business Business solutions page, “100% by professionals' side”, with the contact form",
  '/images/pro/lagoon_business/business-200.webp': "Lagoon Business Business 200 page, “Business 100 becomes Business 200”",
  '/images/pro/lagoon_business/espace-client/rappel-commercial.webp': "Lagoon Business customer area home, with the Contact your sales rep button at the bottom right",
  '/images/pro/lagoon_business/espace-client/filtrage-pro.webp': "Lagoon Business customer area Pro filtering page, with allowed or blocked website categories",
};

const textesEn = [
  {
    type: 'Work-study', duree: '1 year', titre: 'Front-end developer and UI/UX work-study student', entreprise: 'OFFRATEL Lagoon, digital team', resume: 'Front-end integration and mockups!',
    missions: [
      { titre: 'Redesign of lagoon.nc pages', texte: 'Front-end integration of the redesigned Home and Offers pages. I also designed the mockup of the callback form.', liens: ['lagoon.nc', 'Figma mockup'] },
      { titre: 'New Lagoon Business pages', texte: 'Front-end integration of the new Business solutions page, then mockup and integration of the Business 200 page.', liens: ['Business 200 page', 'Business 200 mockup'] },
      { titre: 'Lagoon Business customer area', texte: 'Mockups of a sales callback button and of the Pro filtering page.', liens: ['Sales callback mockup', 'Pro filtering mockup'] },
      { titre: 'Tenjity', texte: 'Front-end development of the accessibility module, then mockup and integration of the tenjity.com article page.', liens: ['Tenjity case study'] },
    ],
  },
  {
    type: 'Internship', duree: '2 months', titre: 'Web development intern', entreprise: 'OFFRATEL Lagoon, digital team',
    missions: [
      { titre: 'The Lagoon Big Wheel', texte: 'UX/UI redesign and front-end integration of the game for the Foire du Pacifique.', liens: ['Case study'] },
      { titre: 'Customer area', texte: 'UX/UI optimisation and front-end integration of the customer area, still in production.', liens: ['Case study'] },
    ],
  },
  {
    type: 'Internship', duree: '1 month', titre: 'Communication intern', entreprise: 'New Caledonia Health and Social Agency (ASSNC)',
    missions: [
      { titre: 'New Year 2025 campaign', texte: 'Designed the campaign visuals.' },
      { titre: 'Social media', texte: 'Optimised the social media communication strategy.' },
      { titre: 'Teamwork', texte: 'Planned and carried out communication projects.' },
    ],
  },
];

export const experiencesEn = experiences.map((xp, i) => {
  const en = textesEn[i];
  return {
    ...xp,
    type: en.type,
    duree: en.duree,
    titre: en.titre,
    entreprise: en.entreprise,
    resume: en.resume,
    missions: xp.missions.map((m, j) => ({
      ...m,
      titre: en.missions[j].titre,
      texte: en.missions[j].texte,
      liens: m.liens?.map((l, k) => ({
        titre: en.missions[j].liens?.[k] ?? l.titre,
        href: l.href.startsWith('/projets/') ? `/en${l.href}` : l.href,
      })),
      images: m.images?.map((im) => ({ ...im, alt: imagesEn[im.src] ?? im.alt })),
    })),
  };
});
