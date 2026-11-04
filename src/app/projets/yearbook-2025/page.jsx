// Fiche projet : le Yearbook 2025 de l'IUT de Nouvelle-Calédonie, « Case Files ».
// Visuels : planches de la proposition (concept) et pages du yearbook pour le
// flipbook, avec les photos et les noms des étudiants et du personnel floutés.
import ProjectLayout from '../../../components/projet/ProjectLayout';
import CaseHero from '../../../components/projet/CaseHero';
import Contexte from '../../../components/projet/Contexte';
import Demarche from '../../../components/projet/Demarche';
import Flipbook from '../../../components/projet/Flipbook';
import Apport from '../../../components/projet/Apport';
import Galerie from '../../../components/projet/Galerie';

const img = '/images/projets/yearbook25';
const livre = `${img}/flipbook`;
const planche = { width: 1100, height: 619 };
const page = { width: 1000, height: 1415 };

// Pages du flipbook (sélection du yearbook de 52 pages)
const pages = [
  { n: '01', alt: 'Couverture : « Yearbook Case Files 2025 », plan du campus, tampon Top secret et logos UNC et IUT' },
  { n: '02', alt: 'Page de garde' },
  { n: '03', alt: 'Remerciements, signés Camélia Amin-Handoyo et Geneviève Mekenese' },
  { n: '07', alt: "Équipe pédagogique : dossier avec deux photos de groupe (floutées)" },
  { n: '09', alt: "Dossier de l'unité MMI 1 : identifiant, rang, fin de mission et photos de classe (floutées)" },
  { n: '10', alt: 'Fiche du responsable pédagogique de MMI 1, avec son message (photo et nom floutés)' },
  { n: '11', alt: 'Agents de MMI 1 : grille de portraits numérotés avec noms de code (floutés)' },
  { n: '12', alt: 'Agents de MMI 1, suite (portraits et noms floutés)' },
  { n: '22', alt: 'Fiche de la cheffe de département GEA, avec son message (photo et nom floutés)' },
  { n: '23', alt: "Dossier de l'unité GEA 1 et ses photos de classe (floutées)" },
  { n: '25', alt: 'Agents de GEA 1 : grille de portraits (floutés)' },
  { n: '44', alt: 'Nos temps forts : tableau de liège avec emplacements de photos épinglées' },
  { n: '51', alt: 'Guess who ? Photos d’enfance des enseignants à deviner (floutées)' },
  { n: '52', alt: 'Quatrième de couverture' },
].map((p) => ({ src: `${livre}/page-${p.n}.webp`, alt: p.alt }));

export const metadata = {
  title: 'Yearbook 2025 de l’IUT, « Case Files » — Camélia Amin Handoyo',
  description:
    "Le Yearbook 2025 de l'IUT de Nouvelle-Calédonie, sur le thème des agents secrets. Ma proposition, élue par la classe, a été mise en page avec Geneviève Mekenese sur InDesign, Illustrator et Photoshop.",
};

export default function Page() {
  return (
    <ProjectLayout slug="yearbook-2025">
      <CaseHero
        slug="yearbook-2025"
        eyebrow="Édition · mise en page"
        titre="Yearbook 2025 : l'IUT devient une agence secrète"
        accroche="Ma proposition a été la plus votée par la classe. Avec Geneviève Mekenese, nous avons mis en page le yearbook de tout l'IUT, où chaque promo a son dossier classifié et chaque étudiant son nom de code."
        couleur="#E2E0B8"
        liens={[{ href: '#flipbook', label: 'Feuilleter le yearbook' }]}
      >
        <img src={`${livre}/page-01.webp`} alt="Couverture du yearbook : « Yearbook Case Files 2025 »" {...page} data-depth="0.4" style={{ width: '46%', borderRadius: '0.25rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>Top secret</span>
        <img className="floaty floaty--card" src={`${livre}/page-09.webp`} alt="" {...page} data-depth="1.6" style={{ '--x': '76%', '--y': '22%', '--r': '7deg', '--size': '7rem', '--delay': '-3s', border: '4px solid var(--paper)', borderRadius: '0.25rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '4%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>Élu par la classe</span>
      </CaseHero>

      <Contexte
        outils={[
          { nom: 'InDesign', icone: '/images/tools/indesign.svg' },
          { nom: 'Illustrator', icone: '/images/tools/illustrator.svg' },
          { nom: 'Photoshop', icone: '/images/tools/photoshop.svg' },
        ]}
        fiche={[
          { label: 'Cadre', valeur: "Yearbook 2025 de l'IUT de Nouvelle-Calédonie" },
          { label: 'Année', valeur: '2025' },
          { label: 'Équipe', valeur: 'Avec Geneviève Mekenese' },
          { label: 'Mon rôle', valeur: 'Concept, design du book, tampons et mise en page' },
          { label: 'Outils', valeur: 'InDesign, Illustrator, Photoshop' },
          { label: 'Format', valeur: '52 pages A4' },
        ]}
        statut="Distribué aux étudiants et aux diplômés"
      >
        <p>Pour le <b>yearbook 2025 de l'IUT</b>, toute la classe a proposé un design. <span className="hl">Ma proposition a été la plus votée</span>, et j'ai mis en page le livre avec Geneviève Mekenese.</p>
        <p>Dans ce concept, <b>l'IUT devient une organisation secrète</b>. Les promos deviennent des unités, les spécialités des divisions, et chaque étudiant un agent avec son <b>nom de code</b>. Chaque unité a son <b>dossier classifié</b>, avec son identifiant, son rang et sa date de fin de mission.</p>
        <p>Le yearbook réunit <b>toutes les formations de l'IUT</b> (MMI, GEA, LP CAN et LP MIAW). Il a aussi été remis aux <b>diplômés de la promo 2023-2025</b>, qui ont reçu leur diplôme en 2026.</p>
      </Contexte>

      <Demarche
        etapes={[
          {
            titre: 'La proposition',
            texte: "J'ai monté une proposition « Rapports de missions – Agents secrets », inspirée du braille, des dossiers d'enquête et des fiches d'agents. C'est un univers de documents confidentiels, de tampons et de pastilles en relief.",
            image: { src: `${img}/concept-inspirations.webp`, alt: 'Planche Inspirations : braille, dossiers classifiés et fiches d’agents secrets', ...planche },
          },
          {
            titre: 'Le concept et la structure',
            texte: "J'ai défini les règles du livre. Chaque unité (classe) choisit son nom et reçoit un identifiant et un rang (SR, SSR, SSS), chaque division (spécialité) a son nom et son identifiant, et chaque agent choisit son nom de code. Chaque unité a son dossier, ses lettres de rapport et ses fiches de responsables.",
            image: { src: `${img}/concept-specificites.webp`, alt: 'Planche Spécificités : unités, divisions, rangs et noms de code', ...planche },
          },
          {
            titre: 'Le design du book et les tampons',
            texte: "J'ai dessiné le design du livre sur Illustrator (dossiers, fiches, papier kraft, punaises, braille) et réalisé sur Photoshop les tampons de chaque niveau de promo.",
            image: { src: `${img}/concept-affichage.webp`, alt: 'Planche Affichage : lettres de rapport, dossiers d’unité, fiches des responsables et fiches d’information', ...planche },
          },
          {
            titre: 'La collecte et la mise en page',
            texte: "Avec Geneviève, nous avons récolté les noms de code de tous les étudiants de l'IUT et les mots de chaque enseignant, puis tout mis en page sur InDesign, sur 52 pages. Nous avons envoyé chaque version au service communication de l'IUT pour relecture, jusqu'à la version finale.",
            image: { src: `${livre}/page-11.webp`, alt: 'Page des agents de MMI 1 : portraits et noms de code (floutés)', ...page, portrait: true },
          },
          {
            titre: 'Le livre imprimé',
            texte: "Le yearbook a été imprimé et distribué aux étudiants de l'IUT, ainsi qu'aux diplômés de la promo 2023-2025. Mission accomplie !",
            images: [
              { src: `${img}/livre-imprime.webp`, alt: 'Selfie de Camélia et Geneviève, qui tirent la langue en tenant deux exemplaires imprimés du Yearbook 2025', width: 1202, height: 1600 },
              { src: `${img}/livre-imprime-2.webp`, alt: 'Selfie de Camélia, souriante, et Geneviève avec deux exemplaires imprimés du Yearbook 2025', width: 1202, height: 1600 },
            ],
          },
        ]}
      />

      <Flipbook
        titre="Feuilleter le yearbook"
        intro="Une sélection de pages, à tourner à la souris, au doigt ou avec les flèches du clavier. Les photos et les noms des étudiants et du personnel sont floutés."
        pages={pages}
        largeur={page.width}
        hauteur={page.height}
        legende="Yearbook 2025 de l'IUT de Nouvelle-Calédonie, sélection de pages"
      />

      <Apport
        casquettes={[
          {
            titre: 'Direction artistique',
            texte: 'Un concept fort, choisi par la classe, décliné sur tout un livre.',
            competences: ['Concept éditorial', 'Design de livre', 'Tampons et textures', 'Illustrator', 'Photoshop'],
          },
          {
            titre: 'Édition et coordination',
            texte: "Un livre de 52 pages mené jusqu'à l'impression, avec tout l'IUT.",
            competences: ['Mise en page InDesign', 'Collecte des contenus', 'Relectures avec le service com', 'Travail en binôme'],
          },
        ]}
      />

      <Galerie
        titre="Le yearbook en images"
        intro="Le livre imprimé et les planches de ma proposition, présentée à la classe avant le vote."
        filtres={[
          { id: 'livre', label: 'Le livre' },
          { id: 'proposition', label: 'Proposition' },
        ]}
        items={[
          { cat: 'livre', legende: 'Le yearbook imprimé', images: [{ src: `${img}/livre-imprime.webp`, alt: 'Camélia et Geneviève avec deux exemplaires imprimés du Yearbook 2025', width: 1202, height: 1600 }] },
          { cat: 'livre', legende: 'Mission accomplie', images: [{ src: `${img}/livre-imprime-2.webp`, alt: 'Camélia, souriante, et Geneviève avec deux exemplaires imprimés du Yearbook 2025', width: 1202, height: 1600 }] },
          { cat: 'proposition', legende: 'Inspirations', images: [{ src: `${img}/concept-inspirations.webp`, alt: 'Planche Inspirations', ...planche }] },
          { cat: 'proposition', legende: 'Concept', images: [{ src: `${img}/concept-idee.webp`, alt: 'Planche Concept : l’IUT est une organisation secrète', ...planche }] },
          { cat: 'proposition', legende: 'Affichage', images: [{ src: `${img}/concept-affichage.webp`, alt: 'Planche Affichage', ...planche }] },
          { cat: 'proposition', legende: 'Spécificités', images: [{ src: `${img}/concept-specificites.webp`, alt: 'Planche Spécificités', ...planche }] },
        ]}
      />
    </ProjectLayout>
  );
}
