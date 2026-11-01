// Liste des projets : une seule source pour la page Projets (cartes),
// le carrousel de l'accueil et la navigation « Projet suivant » des fiches.
// L'ordre du tableau = l'ordre d'affichage. Ajouter un projet ici suffit
// pour qu'il apparaisse partout ; sa fiche détaillée se crée dans
// src/app/projets/<slug>/page.jsx (copier projet-exemple/page.jsx).
//
// Champs :
//   slug      identifiant, aussi le nom de la page (/projets/<slug>/)
//   titre     nom du projet
//   annee     année affichée sur la carte
//   cadre     contexte court (SAÉ, stage, perso…)
//   resume    une phrase pour la carte de la page Projets
//   roles     sous-titre du carrousel de l'accueil
//   tags      mots-clés de la carte
//   image     visuel de la carte et du carrousel
//   href      (optionnel) lien de la fiche si elle n'est pas /projets/<slug>/
//   aRemplacer (optionnel) affiche le marqueur « À REMPLACER »

export const projets = [
  {
    slug: 'aima',
    titre: 'Aïma',
    annee: '2026',
    cadre: "Projet universitaire en collaboration avec l'ADSB-NC",
    resume:
      'Une appli mobile créée pour l\'association des donneurs de sang de Nouvelle-Calédonie : des cartes à collectionner et des quiz pour donner envie de revenir donner.',
    roles: 'dev full-stack · ui/ux design',
    tags: ['React Native', 'Laravel', 'UI/UX', 'RGPD'],
    image: { src: '/images/projets/aima/screens_app/mockups%20aima.png', width: 1080, height: 721 },
  },
  {
    slug: 'projet-2',
    href: '/projets/projet-exemple/',
    titre: 'Projet 2',
    annee: '2025',
    cadre: 'Stage',
    resume: 'Une phrase qui résume le problème résolu et le résultat obtenu.',
    roles: 'ux design · dev web',
    tags: ['Figma', 'Design system'],
    image: { src: '/images/placeholder.svg', width: 1200, height: 750 },
    aRemplacer: true,
  },
  {
    slug: 'projet-3',
    href: '/projets/projet-exemple/',
    titre: 'Projet 3',
    annee: '2025',
    cadre: 'Perso',
    resume: 'Une phrase qui résume le problème résolu et le résultat obtenu.',
    roles: 'ux design',
    tags: ['WordPress', 'SEO'],
    image: { src: '/images/placeholder.svg', width: 1200, height: 750 },
    aRemplacer: true,
  },
  {
    slug: 'projet-4',
    href: '/projets/projet-exemple/',
    titre: 'Projet 4',
    annee: '2024',
    cadre: 'Projet tutoré',
    resume: 'Une phrase qui résume le problème résolu et le résultat obtenu.',
    roles: 'graphisme',
    tags: ['Vidéo', 'Motion'],
    image: { src: '/images/placeholder.svg', width: 1200, height: 750 },
    aRemplacer: true,
  },
];

/** Lien de la fiche d'un projet */
export const lienProjet = (projet) => projet.href ?? `/projets/${projet.slug}/`;

/** Projet qui suit celui-ci dans la liste (on reboucle sur le premier) */
export const projetSuivant = (slug) => {
  const i = projets.findIndex((p) => p.slug === slug);
  return projets[(i + 1) % projets.length];
};
