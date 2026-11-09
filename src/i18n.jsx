// Traduction du site : le français est à la racine (/projets/…), l'anglais
// sous /en/ (/en/projets/…). Seule la partie publique est traduite : la partie
// Académique (journal, fiches réflexives) reste en français.
//
// Les pages anglaises sont dans src/app/(en)/en/ ; elles passent lang="en"
// aux composants, qui piochent leurs textes d'interface dans UI ci-dessous.

export const LANGUES = ['fr', 'en'];

/** Préfixe une adresse interne selon la langue : chemin('en', '/projets/') → '/en/projets/' */
export const chemin = (lang, href) => {
  if (lang !== 'en' || !href.startsWith('/') || href.startsWith('/en/')) return href;
  // Fichiers (CV, images…) et partie Académique : pas de version anglaise
  if (href.startsWith('/academique') || /\.[a-z0-9]+$/i.test(href.split(/[?#]/)[0])) return href;
  return `/en${href}`;
};

/** Langue d'une adresse : '/en/…' → 'en', sinon 'fr' */
export const langDe = (pathname = '/') => (pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr');

/** Adresse de la même page dans l'autre langue (la partie Académique renvoie à l'accueil anglais) */
export const autreLangue = (pathname = '/') => {
  if (langDe(pathname) === 'en') return pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  if (pathname.startsWith('/academique')) return '/en/';
  return `/en${pathname === '/' ? '/' : pathname}`;
};

export const UI = {
  fr: {
    evitement: 'Aller au contenu',
    navPrincipale: 'Navigation principale',
    projets: 'Projets',
    aPropos: 'À propos',
    contact: 'Contact',
    son: 'Son du site',
    activerSon: 'Activer le son',
    couperSon: 'Couper le son',
    langue: { code: 'EN', label: 'English version', hreflang: 'en' },
    footerAccroche: <>Une idée en tête ?<br />Écrivons la suite ensemble.</>,
    piedDePage: 'Pied de page',
    accueil: 'Accueil',
    mesProjets: 'Mes projets',
    monCv: 'Mon CV',
    mentions: 'Mentions légales',
    confidentialite: 'Politique de confidentialité',
    copyright: 'Portfolio de Camélia © 2026',
    hautDePage: 'Revenir en haut de la page',
    contactBand: <>Intéressé(e) ?<br />Contactez-moi ^^</>,
    email: 'E-mail',
    // Fiches projet
    autresProjets: 'Autres projets',
    tousLesProjets: 'Tous les projets',
    projetSuivant: 'Projet suivant',
    filAriane: "Fil d'Ariane",
    fiche: 'fiche n°',
    contexte: 'Le contexte',
    technos: 'Technologies utilisées',
    statut: 'Statut',
    demarche: 'La démarche',
    etapes: 'Étapes de la démarche',
    etapePrec: 'Étape précédente',
    etapeSuiv: 'Étape suivante',
    ajouteIci: 'Ajoute ici',
    unVisuel: 'un visuel',
    apport: 'Mon apport',
    casquette: 'casquette n°',
    liens: 'Les liens',
    questions: "Les questions qu'on s'est posées",
    filtrerGalerie: 'Filtrer la galerie',
    tout: 'Tout',
    video: 'La démo en vidéo',
    film: 'Le film',
    lireVideo: 'Lire la vidéo',
    videoHebergee: (p) => `La vidéo est hébergée sur ${p}, qui se charge au clic.`,
    voirSur: (p) => `Voir sur ${p}`,
    feuilleter: 'Feuilleter le livre',
    livre: 'livre',
    page: 'page',
    pagePrec: 'Page précédente',
    pageSuiv: 'Page suivante',
    // Page Projets
    filtrerProjets: 'Filtrer les projets par domaine',
    tous: 'Tous',
    projetsAffiches: (n) => `${n} projet${n > 1 ? 's' : ''} affiché${n > 1 ? 's' : ''}`,
    // À propos
    captures: (n) => `Captures (${n}), à agrandir`,
    enCours: 'En cours',
    // Accueil
    astuce: 'psst… tout se déplace !',
    postitBienvenue: 'Bienvenue sur ma table de travail ✶',
    postitProjets: 'Mes projets sont un peu plus bas ↓',
  },
  en: {
    evitement: 'Skip to content',
    navPrincipale: 'Main navigation',
    projets: 'Projects',
    aPropos: 'About',
    contact: 'Contact',
    son: 'Site sound',
    activerSon: 'Turn sound on',
    couperSon: 'Turn sound off',
    langue: { code: 'FR', label: 'Version française', hreflang: 'fr' },
    footerAccroche: <>Got an idea in mind?<br />Let’s write what comes next.</>,
    piedDePage: 'Footer',
    accueil: 'Home',
    mesProjets: 'My projects',
    monCv: 'My CV (in French)',
    mentions: 'Legal notice',
    confidentialite: 'Privacy policy',
    copyright: 'Camélia’s portfolio © 2026',
    hautDePage: 'Back to top',
    contactBand: <>Interested?<br />Get in touch ^^</>,
    email: 'Email',
    autresProjets: 'Other projects',
    tousLesProjets: 'All projects',
    projetSuivant: 'Next project',
    filAriane: 'Breadcrumb',
    fiche: 'file no.',
    contexte: 'The context',
    technos: 'Technologies used',
    statut: 'Status',
    demarche: 'The process',
    etapes: 'Process steps',
    etapePrec: 'Previous step',
    etapeSuiv: 'Next step',
    ajouteIci: 'Add here',
    unVisuel: 'a visual',
    apport: 'My contribution',
    casquette: 'hat no.',
    liens: 'Links',
    questions: 'The questions we asked ourselves',
    filtrerGalerie: 'Filter the gallery',
    tout: 'All',
    video: 'Video demo',
    film: 'The film',
    lireVideo: 'Play the video',
    videoHebergee: (p) => `The video is hosted on ${p} and only loads when you click.`,
    voirSur: (p) => `Watch on ${p}`,
    feuilleter: 'Flip through the book',
    livre: 'book',
    page: 'page',
    pagePrec: 'Previous page',
    pageSuiv: 'Next page',
    filtrerProjets: 'Filter projects by field',
    tous: 'All',
    projetsAffiches: (n) => `${n} project${n > 1 ? 's' : ''} shown`,
    captures: (n) => `Screenshots (${n}), click to enlarge`,
    enCours: 'In progress',
    astuce: 'psst… everything moves!',
    postitBienvenue: 'Welcome to my desk ✶',
    postitProjets: 'My projects are a little further down ↓',
  },
};

/** Textes d'interface d'une langue */
export const t = (lang = 'fr') => UI[lang] ?? UI.fr;
