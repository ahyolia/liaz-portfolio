// Liste des projets : une seule source pour la page Projets (cartes),
// le carrousel de l'accueil et la navigation « Projet suivant » des fiches.
// L'ordre du tableau = l'ordre d'affichage. Ajouter un projet ici suffit
// pour qu'il apparaisse partout ; sa fiche détaillée se crée dans
// src/app/(fr)/projets/<slug>/page.jsx (copier projet-exemple/page.jsx),
// et sa version anglaise dans src/app/(en)/en/projets/<slug>/page.jsx.
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
//   domaines  ids de DOMAINES ci-dessous, pour le filtre de la page Projets
//   aLaUne    (optionnel) true = affiché dans « Mes meilleurs projets ! » (3 ou 4 max)
//   href      (optionnel) lien de la fiche si elle n'est pas /projets/<slug>/
//   aRemplacer (optionnel) affiche le marqueur « À REMPLACER »
//   en        version anglaise (titre?, cadre, resume, roles, tags), pour /en/

// Domaines proposés dans le filtre de la page Projets (dans cet ordre)
export const DOMAINES = [
  { id: 'dev', label: 'Développement', labelEn: 'Development' },
  { id: 'ux', label: 'UX / UI', labelEn: 'UX / UI' },
  { id: '3d', label: '3D & interactif', labelEn: '3D & interactive' },
  { id: 'video', label: 'Vidéo', labelEn: 'Video' },
  { id: 'motion', label: 'Motion design', labelEn: 'Motion design' },
  { id: 'graphisme', label: 'Design graphique', labelEn: 'Graphic design' },
];

export const projets = [
  {
    slug: 'aima',
    domaines: ['dev', 'ux'],
    aLaUne: true,
    titre: 'Aïma',
    annee: '2026',
    cadre: "BUT MMI 3 - Projet de fin d'études en collaboration avec l'ADSB-NC",
    resume:
      'Une appli mobile créée pour l\'association des donneurs de sang de Nouvelle-Calédonie, avec des cartes à collectionner et des quiz pour donner envie de revenir donner.',
    roles: 'dev full-stack · ui/ux design',
    tags: ['React Native', 'Laravel', 'UI/UX', 'RGPD'],
    en: { cadre: "BUT MMI 3 - Final-year project with the ADSB-NC", resume: "A mobile app made for New Caledonia's blood donor association, with collectible cards and quizzes that make people want to come back and give again.", roles: "full-stack dev · ui/ux design", tags: ["React Native", "Laravel", "UI/UX", "GDPR"] },
    image: { src: '/images/projets/aima/screens_app/mockups-aima.webp', width: 1080, height: 721 },
  },
  {
    slug: 'tenjity',
    domaines: ['dev', 'ux'],
    titre: 'Tenjity',
    annee: '2026',
    cadre: 'Alternance - OFFRATEL Lagoon',
    resume:
      "Un module d'accessibilité web calédonien. J'ai développé la loupe, le mode sombre et d'autres fonctionnalités après des tests avec l'association Valentin Haüy, ainsi que la page article du site.",
    roles: 'dev front · ui/ux · accessibilité',
    tags: ['Accessibilité', 'Tests utilisateurs', 'Figma', 'Nuxt'],
    en: { cadre: "Work-study - OFFRATEL Lagoon", resume: "A New Caledonian web accessibility module. I developed the magnifier, dark mode and other features after testing with the Valentin Haüy association, as well as the site's article page.", roles: "front-end dev · ui/ux · accessibility", tags: ["Accessibility", "User testing", "Figma", "Nuxt"] },
    image: { src: '/images/projets/tenjity/vignette-module.webp', width: 1200, height: 900 },
  },
  {
    slug: 'liminis',
    domaines: ['ux', '3d', 'graphisme'],
    titre: 'Liminis',
    annee: '2026',
    cadre: 'BUT MMI 3 - Projet Micro-Mondes',
    resume:
      "Une appli web en réalité augmentée qui révèle le monde microscopique caché dans les fresques du campus, et un familier à réveiller au bout du parcours.",
    roles: 'ui/ux design · branding',
    tags: ['UI/UX', 'Branding', 'Figma', 'Réalité augmentée'],
    en: { cadre: "BUT MMI 3 - Micro-Worlds project", resume: "An augmented reality web app that reveals the microscopic world hidden in the campus murals, with a familiar to awaken at the end of the trail.", roles: "ui/ux design · branding", tags: ["UI/UX", "Branding", "Figma", "Augmented reality"] },
    image: { src: '/images/projets/liminis/vignette.webp', width: 1600, height: 900 },
  },
  {
    slug: 'accroche-video',
    domaines: ['video'],
    titre: 'Accroche vidéo',
    annee: '2026',
    cadre: 'BUT MMI 3 - Cours PPP',
    resume:
      "Me présenter en moins d'une minute, par fragments, là où je construis, là où je respire, et là où je me projette.",
    roles: 'écriture · réalisation · montage',
    tags: ['Vidéo', 'Écriture', 'Montage', 'Voix off'],
    en: { titre: "Video pitch", cadre: "BUT MMI 3 - Career project course", resume: "Introducing myself in under a minute, in fragments: where I build, where I breathe, and where I see myself going.", roles: "writing · directing · editing", tags: ["Video", "Writing", "Editing", "Voice-over"] },
    image: { src: '/images/projets/cv-video/miniature-bougies.webp', width: 1600, height: 900 },
  },
  {
    slug: 'pocket-stars',
    domaines: ['dev', '3d'],
    titre: 'Pocket Stars',
    annee: '2026',
    cadre: 'BUT MMI 3 - Développement front',
    resume:
      'Une balade en 3D sur une île flottante, sous un ciel où chaque étoile cache une carte Pokémon. On clique, elle descend et se révèle.',
    roles: 'dev front 3d · game design',
    tags: ['React', 'Three.js', 'API TCGdex', 'Web Audio'],
    en: { cadre: "BUT MMI 3 - Front-end development", resume: "A 3D stroll across a floating island, under a sky where every star hides a Pokémon card. Click one, it drifts down and reveals itself.", roles: "3d front-end dev · game design", tags: ["React", "Three.js", "TCGdex API", "Web Audio"] },
    image: { src: '/images/projets/pocket-stars/carte-alakazam.webp', width: 1440, height: 900 },
  },
  {
    slug: 'resonance',
    domaines: ['video', 'motion'],
    titre: 'RESONANCE in Motion',
    annee: '2026',
    cadre: 'BUT MMI 3 - Motion design',
    resume:
      "Un moodboard animé pour dire qui je suis sans portrait figé : des formes qui bougent, des géométries qui se répondent et des espaces profonds.",
    roles: 'motion design · after effects',
    tags: ['Motion design', 'After Effects', 'Typographie animée'],
    en: { cadre: "BUT MMI 3 - Motion design", resume: "An animated moodboard that says who I am without a static portrait: moving shapes, geometries that answer each other and deep spaces.", roles: "motion design · after effects", tags: ["Motion design", "After Effects", "Kinetic typography"] },
    image: { src: '/images/projets/resonance/colours-of-my-soul.webp', width: 1240, height: 702 },
  },
  {
    slug: 'etincelle-caledonienne',
    domaines: ['video'],
    aLaUne: true,
    titre: "L'amour d'une éducatrice",
    annee: '2026',
    cadre: 'Concours webdoc NC la 1ère',
    resume:
      "Un web-documentaire sur Mirella, surveillante de lycée, réalisé en binôme pour le concours « Les Étincelles Calédoniennes » de NC la 1ère, qui a reçu le prix Coup de cœur du jury.",
    roles: 'web-documentaire · gestion de projet',
    tags: ['Vidéo', 'Prise de son', 'Interview', 'ClickUp'],
    en: { titre: "An educator's love", cadre: "NC la 1ère web documentary contest", resume: "A web documentary about Mirella, a high school supervisor, made as a duo for NC la 1ère's “Les Étincelles Calédoniennes” contest, which won the jury's Coup de cœur prize.", roles: "web documentary · project management", tags: ["Video", "Sound recording", "Interview", "ClickUp"] },
    image: { src: '/images/projets/etincelle-caledonienne/visuel-brut.webp', width: 1600, height: 900 },
  },
  {
    slug: 'liaz-gallery',
    domaines: ['3d', 'dev'],
    titre: 'LiAZ Gallery',
    annee: '2026',
    cadre: 'BUT MMI 3 - XR et Interactions',
    resume:
      "Une galerie d'images en 3D qu'on pilote à la voix. On dit ce qu'on cherche, et les images trouvées sur le web s'accrochent aux murs.",
    roles: 'dev unity · 3d interactive',
    tags: ['Unity 6', 'C#', 'Reconnaissance vocale', 'Whisper'],
    en: { cadre: "BUT MMI 3 - XR and Interactions", resume: "A 3D image gallery you control with your voice. Say what you are looking for, and the images found on the web are hung on the walls.", roles: "unity dev · interactive 3d", tags: ["Unity 6", "C#", "Speech recognition", "Whisper"] },
    image: { src: '/images/projets/liaz-gallery/gallerie.webp', width: 1534, height: 862 },
  },
  {
    slug: 'yearbook-2025',
    domaines: ['graphisme'],
    aLaUne: true,
    titre: 'Yearbook 2025',
    annee: '2025',
    cadre: "IUT de Nouvelle-Calédonie - Proposition élue",
    resume:
      "Le yearbook de tout l'IUT sur le thème des agents secrets. Ma proposition, élue par la classe, a été mise en page en binôme sur 52 pages.",
    roles: 'édition · direction artistique',
    tags: ['InDesign', 'Illustrator', 'Photoshop', 'Mise en page'],
    en: { cadre: "IUT of New Caledonia - Winning proposal", resume: "The yearbook of the whole IUT, on a secret agent theme. My proposal, voted for by the class, was laid out as a duo over 52 pages.", roles: "editorial design · art direction", tags: ["InDesign", "Illustrator", "Photoshop", "Layout"] },
    image: { src: '/images/projets/yearbook25/vignette.webp', width: 1200, height: 900 },
  },
  {
    slug: 'refonte-espaceclient-lagoon',
    domaines: ['ux', 'dev'],
    aLaUne: true,
    titre: 'Espace client Lagoon',
    annee: '2025',
    cadre: 'Stage - OFFRATEL Lagoon',
    resume:
      "La refonte UI/UX de l'espace client d'un fournisseur d'accès internet calédonien, des maquettes Figma à l'intégration. Elle est toujours en production.",
    roles: 'ui/ux design · dev front',
    tags: ['UI/UX', 'Figma', 'Intégration', 'Stage'],
    en: { titre: "Lagoon customer area", cadre: "Internship - OFFRATEL Lagoon", resume: "The UI/UX redesign of a New Caledonian internet provider's customer area, from Figma mockups to front-end integration. It is still in production.", roles: "ui/ux design · front-end dev", tags: ["UI/UX", "Figma", "Front-end integration", "Internship"] },
    image: { src: '/images/projets/refonte-espaceclient-lagoon/mockup-accueil.webp', width: 1200, height: 903 },
  },
  {
    slug: 'luckywheel-lagoon',
    domaines: ['dev', 'ux'],
    titre: 'La Grande Roue Lagoon',
    annee: '2025',
    cadre: 'Stage - OFFRATEL Lagoon',
    resume:
      "La refonte de la roue de la chance du stand Lagoon à la Foire du Pacifique 2025 : plus moderne, plus fun, avec du son et des animations. 119 participants, 35 prospects.",
    roles: 'ui design · dev front',
    tags: ['Figma', 'Nuxt', 'Animations', 'Stage'],
    en: { titre: "The Lagoon Big Wheel", cadre: "Internship - OFFRATEL Lagoon", resume: "The redesign of the wheel of fortune on Lagoon's stand at the 2025 Foire du Pacifique: more modern, more fun, with sound and animations. 119 players, 35 leads.", roles: "ui design · front-end dev", tags: ["Figma", "Nuxt", "Animations", "Internship"] },
    image: { src: '/images/projets/luckywheel-lagoon/roue.webp', width: 1364, height: 922 },
  },
  {
    slug: 'sticker-pack',
    domaines: ['graphisme'],
    titre: "LIAZ' Sticker pack",
    annee: '2025',
    cadre: 'Projet perso - Mes 20 ans',
    resume:
      "Un pack de stickers « édition anniversaire » pour mes 20 ans, en collage sur Photoshop à partir de photos d'enfance.",
    roles: 'design graphique · photoshop',
    tags: ['Photoshop', 'Collage', 'Stickers', 'Projet perso'],
    en: { cadre: "Personal project - My 20th birthday", resume: "A “birthday edition” sticker pack for my 20th birthday, collaged in Photoshop from childhood photos.", roles: "graphic design · photoshop", tags: ["Photoshop", "Collage", "Stickers", "Personal project"] },
    image: { src: '/images/projets/sticker-pack/vignette.webp', width: 1600, height: 900 },
  },
  {
    slug: 'eveil-des-abysses',
    domaines: ['3d', 'ux'],
    titre: 'Éveil des Abysses',
    annee: '2025',
    cadre: 'BUT MMI 2 - Pacific Spirit',
    resume:
      "Une installation immersive où les gestes de la main, filmés par une webcam, guident en temps réel un banc de poissons virtuels.",
    roles: 'design interactif · touchdesigner',
    tags: ['TouchDesigner', 'Flux optique', 'Installation', 'Scénographie'],
    en: { titre: "Awakening of the Abyss", cadre: "BUT MMI 2 - Pacific Spirit", resume: "An immersive installation where hand gestures, filmed by a webcam, guide a school of virtual fish in real time.", roles: "interaction design · touchdesigner", tags: ["TouchDesigner", "Optical flow", "Installation", "Scenography"] },
    image: { src: '/images/projets/eveil-des-abysses/evenement-visiteur.webp', width: 1600, height: 1066 },
  },
  {
    slug: 'epise',
    domaines: ['dev', 'ux'],
    titre: 'EPISE',
    annee: '2025',
    cadre: 'BUT MMI 2 - SAÉ 301 et 401',
    resume:
      "La plateforme de l'épicerie solidaire de l'UNC, conçue à quatre en PHP MVC, puis reprise seule avec un front Angular, une API REST et des design patterns.",
    roles: 'dev full-stack · ui/ux',
    tags: ['Angular', 'API REST PHP', 'Design patterns', 'MySQL'],
    en: { cadre: "BUT MMI 2 - SAÉ 301 and 401 projects", resume: "The platform of the UNC's student food bank, built by four of us in PHP MVC, then taken over on my own with an Angular front end, a REST API and design patterns.", roles: "full-stack dev · ui/ux", tags: ["Angular", "PHP REST API", "Design patterns", "MySQL"] },
    image: { src: '/images/projets/epise/site-accueil.webp', width: 1440, height: 900 },
  },
  {
    slug: 'windtell',
    domaines: ['3d', 'dev', 'graphisme'],
    titre: 'Windtell',
    annee: '2025',
    cadre: 'BUT MMI 2 - Forum des jeux de société',
    resume:
      "Un jeu de société sur une île flottante, avec un plateau à niveaux qui tournent fait au FabLab, des énigmes calédoniennes et des cartes à tirer sur une appli.",
    roles: 'game design · fabrication · branding',
    tags: ['Jeu de plateau', 'Impression 3D', 'Découpe laser', 'React Native'],
    en: { cadre: "BUT MMI 2 - Board game fair", resume: "A board game set on a floating island, with a board of rotating levels made at the FabLab, New Caledonian riddles and cards drawn from an app.", roles: "game design · fabrication · branding", tags: ["Board game", "3D printing", "Laser cutting", "React Native"] },
    image: { src: '/images/projets/windtell/partie-test.webp', width: 1400, height: 1050 },
  },
  {
    slug: 'personal-branding',
    domaines: ['graphisme'],
    titre: 'Personal branding',
    annee: '2024',
    cadre: 'BUT MMI - Identité personnelle',
    resume:
      "Mon identité personnelle, un monogramme C et A inspiré des sceaux d'Asie, sa palette et ses déclinaisons sur cartes de visite et packagings.",
    roles: 'identité visuelle · illustrator · photoshop',
    tags: ['Branding', 'Monogramme', 'Packaging', 'Photoshop'],
    en: { cadre: "BUT MMI - Personal identity", resume: "My personal identity: a C and A monogram inspired by Asian seals, its palette and its applications on business cards and packaging.", roles: "visual identity · illustrator · photoshop", tags: ["Branding", "Monogram", "Packaging", "Photoshop"] },
    image: { src: '/images/projets/personal-branding/couverture.webp', width: 1400, height: 840 },
  },
  {
    slug: 'haigi',
    domaines: ['graphisme'],
    titre: 'Haigi',
    annee: '2024',
    cadre: 'BUT MMI 1 - Design de marque',
    resume:
      "L'identité d'une marque fictive de capsules qui transforment un liquide en objet, des moodboards aux supports, en binôme.",
    roles: 'identité visuelle · illustrator',
    tags: ['Branding', 'Logo', 'Illustrator', 'Affiches'],
    en: { cadre: "BUT MMI 1 - Brand design", resume: "The identity of a fictional brand of capsules that turn a liquid into an object, from moodboards to printed media, made as a duo.", roles: "visual identity · illustrator", tags: ["Branding", "Logo", "Illustrator", "Posters"] },
    image: { src: '/images/projets/haigi/couverture.webp', width: 1400, height: 767 },
  },
];

/** Lien de la fiche d'un projet (sous /en/ pour l'anglais) */
export const lienProjet = (projet, lang = 'fr') => {
  const href = projet.href ?? `/projets/${projet.slug}/`;
  return lang === 'en' && href.startsWith('/projets/') ? `/en${href}` : href;
};

/** Projet dans la langue voulue : les champs de `en` remplacent les champs français */
export const projetLocal = (projet, lang = 'fr') => (projet && lang === 'en' && projet.en ? { ...projet, ...projet.en } : projet);

/** Projet qui suit celui-ci dans la liste (on reboucle sur le premier) */
export const projetSuivant = (slug) => {
  const i = projets.findIndex((p) => p.slug === slug);
  return projets[(i + 1) % projets.length];
};

/** Projets à la une sur l'accueil (« Mes meilleurs projets ! »), 4 au maximum */
export const projetsALaUne = projets.filter((p) => p.aLaUne).slice(0, 4);
