// Fiche projet Liminis (Micro-Mondes). Contenu tiré du dossier de conception,
// du dossier technique, des fiches de communication et du README du dépôt
// https://github.com/KitsuneE24/liminis
import ProjectLayout from '../../../components/projet/ProjectLayout';
import CaseHero from '../../../components/projet/CaseHero';
import Contexte from '../../../components/projet/Contexte';
import Demarche from '../../../components/projet/Demarche';
import Apport from '../../../components/projet/Apport';
import Galerie from '../../../components/projet/Galerie';
import Liens from '../../../components/projet/Liens';

const img = '/images/projets/liminis';
const appli = 'https://liminis.netlify.app';
const github = 'https://github.com/KitsuneE24/liminis';
const figmaDiagrammes = 'https://www.figma.com/board/ZmMsYttZlPAZsWgvuNcXFq/MicroMondes---Diagrammes?node-id=0-1';
const figmaMaquettes = 'https://www.figma.com/design/Fni3dO2DNlYRubWnlyaUAh/MicroMondes---Maquette?node-id=0-1';
const dossier = `${img}/dossier-de-conception.pdf`;
const page = { width: 1100, height: 1556 };

export const metadata = {
  title: 'Liminis, une quête du vivant sur le campus — Camélia Amin Handoyo',
  description:
    "Liminis, appli web en réalité augmentée qui révèle le monde microscopique des fresques Micro-Mondes du campus de l'UNC.",
};

export default function Page() {
  return (
    <ProjectLayout slug="liminis">
      <CaseHero
        slug="liminis"
        eyebrow="Appli web en réalité augmentée"
        titre="Liminis, plus on zoome, plus on découvre la fresque"
        accroche="On scanne les fresques du campus avec son téléphone, on récolte les fragments du vivant cachés dedans, et un petit familier se réveille."
        couleur="#FBF0DE"
        liens={[
          { href: appli, label: "Ouvrir l'appli" },
          { href: dossier, label: 'Lire le dossier de conception' },
        ]}
      >
        <img src={`${img}/familiers.webp`} alt="Les trois familiers de Liminis : une boule rouge, une jaune et une bleue à lunettes, avec des ailes" width="1556" height="567" data-depth="0.4" style={{ width: '92%' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '4%', '--r': '-8deg', '--size': 'auto' }}>Micro-Mondes</span>
        <img className="floaty floaty--card" src={`${img}/ecran-scan.webp`} alt="" width={page.width} height={page.height} data-depth="1.6" style={{ '--x': '80%', '--y': '40%', '--r': '8deg', '--size': '6.5rem', '--delay': '-3s', border: '4px solid var(--ink)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '10%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>Sans compte ni installation</span>
      </CaseHero>

      <Contexte
        outils={[
          { nom: 'Figma', icone: '/images/tools/figma.svg' },
          { nom: 'Photoshop', icone: '/images/tools/photoshop.svg' },
          { nom: 'Affinity', icone: '/images/tools/affinity.png' },
          { nom: 'Canva', icone: '/images/tools/canva.svg' },
          { nom: 'Vue.js', icone: '/images/tools/vuejs.svg' },
          { nom: 'Git', icone: '/images/tools/git.svg' },
        ]}
        fiche={[
          { label: 'Cadre', valeur: "BUT MMI 3, projet Micro-Mondes, campus de l'UNC" },
          { label: 'Année', valeur: '2026' },
          { label: 'Équipe', valeur: 'Avec Magalie Chen (dev) et Geneviève Mekenese (UI/UX)' },
          { label: 'Mon rôle', valeur: 'Direction artistique et design graphique' },
          { label: 'Outils', valeur: 'Figma, Photoshop, Affinity, Canva ; Vue, Leaflet, MindAR, PWA hors-ligne, Netlify' },
        ]}
        statut="Prototype en ligne"
      >
        <p>Sur le campus de l'Université de la Nouvelle-Calédonie, trois fresques de l'artiste Kuby Kolor (la tortue marine, l'hibiscus et le loriquet) cachent un second niveau de lecture : un monde invisible, microscopique, cellulaire.</p>
        <p>Avec Magalie et Geneviève, nous avons imaginé Liminis, une appli web qui transforme la visite en <span className="hl">quête du vivant</span>. On suit la carte jusqu'aux fresques, on les scanne en réalité augmentée pour révéler leurs fragments cachés, et on remplit un carnet de bord.</p>
        <p>Une fois tous les tampons réunis, un familier se débloque, assemblé à partir de tout ce qu'on a découvert. Dans l'équipe, je me suis occupée de la direction artistique : identité visuelle, logo, charte, icônes et illustrations.</p>
      </Contexte>

      <Demarche
        etapes={[
          {
            titre: 'Le concept et le dispositif',
            texte: "Nous avons d'abord posé le contexte et la problématique : comment révéler, pour chaque fresque, un univers invisible grâce à l'art, la réalité augmentée et le son ? Puis le pitch, l'intention UX, le fil narratif et les interactions clés.",
            images: [
              { src: `${img}/dossier-couverture.webp`, alt: 'Couverture du dossier de conception Micro-Mondes, avec les trois familiers', ...page },
              { src: `${img}/dossier-concept.webp`, alt: "Page Concept d'expérience du dossier : pitch, intention UX, fil narratif", ...page },
              { src: `${img}/dossier-dispositif.webp`, alt: 'Page Dispositif interactif du dossier : intention d’usage et interactions clés', ...page },
            ],
            liens: [{ href: dossier, label: 'Lire le dossier de conception (PDF)' }],
          },
          {
            titre: 'Le parcours et les diagrammes',
            texte: "Dans un board Figma, nous avons construit la user journey map autour d'un persona, Teva, avec ses actions, ses émotions et ses frictions à chaque étape, puis l'arborescence de l'appli et les user flows, du départ au stand jusqu'à l'étape devant la fresque.",
            image: { src: `${img}/diagrammes-figma.webp`, alt: "Le board Figma des diagrammes : user journey map du persona Teva, arborescence de l'appli et user flows du parcours", width: 1534, height: 833 },
            liens: [{ href: figmaDiagrammes, label: 'Voir les diagrammes sur Figma' }],
          },
          {
            titre: 'Les maquettes',
            texte: "Les écrans ont été pensés d'abord en wireframes dans Figma, sur une grille mobile : la carte du parcours, le carnet de bord, les fragments et le déblocage du familier, avec une navigation réduite à trois onglets.",
            image: { src: `${img}/maquettes-figma.webp`, alt: 'Le fichier Figma des maquettes : wireframes de la carte du parcours, du carnet de bord, des fragments et du familier débloqué', width: 1534, height: 832 },
            liens: [{ href: figmaMaquettes, label: 'Voir les maquettes sur Figma' }],
          },
          {
            titre: "L'identité visuelle",
            texte: "Mon rôle principal : une identité douce et ludique, sur un fond crème, avec une palette tirée des fresques (bleu nuit, violet, orange, turquoise, jaune), la police arrondie Darumadrop One et Karla pour le texte.",
            images: [
              { src: `${img}/dossier-moodboard.webp`, alt: 'Page Moodboard du dossier', ...page },
              { src: `${img}/brandboard.webp`, alt: 'Brandboard de Liminis : logos, palette de couleurs et polices', width: 961, height: 1554 },
            ],
          },
          {
            titre: 'Les familiers',
            texte: "J'ai dessiné les trois familiers, des petites boules de poils ailées qui servent de mascottes et de récompense finale. L'un d'eux, avec ses lunettes, devient l'icône de l'appli.",
            images: [
              { src: `${img}/familier-rouge.webp`, alt: 'Le familier rouge, les yeux fermés, avec des ailes', width: 420, height: 498 },
              { src: `${img}/familier-jaune.webp`, alt: 'Le familier jaune, souriant, avec des ailes', width: 550, height: 471 },
              { src: `${img}/familier-bleu.webp`, alt: 'Le familier bleu à lunettes, avec des ailes', width: 438, height: 468 },
            ],
          },
          {
            titre: "L'appli",
            texte: "Magalie a développé l'appli en Vue, installable et utilisable hors-ligne : la carte Leaflet mène aux fresques, le scanner en réalité augmentée révèle les fragments, et le carnet garde la progression.",
            images: [
              { src: `${img}/ecran-parcours.webp`, alt: "L'écran Parcours : la carte du campus et les trois fresques", ...page },
              { src: `${img}/ecran-scan.webp`, alt: 'Scan de la fresque de la tortue marine avec un téléphone', ...page },
              { src: `${img}/ecran-fragments.webp`, alt: 'Le carnet de bord : la fiche Tortue marine et ses fragments à trouver', ...page },
            ],
            liens: [{ href: appli, label: "Ouvrir l'appli" }],
          },
          {
            titre: 'La communication',
            texte: "Pour finir, nous avons réalisé les supports :une fiche de présentation avec le synopsis et l'équipe, et une affiche avec le QR code pour lancer le parcours sur le campus.",
            images: [
              { src: `${img}/fiche-synopsis.webp`, alt: "Fiche de présentation de Liminis : synopsis, rôles de l'équipe et lien de l'appli", ...page },
              { src: `${img}/affiche-qr.webp`, alt: 'Affiche de Liminis avec le QR code du parcours et les familiers', ...page },
            ],
          },
        ]}
      />

      <Apport
        casquettes={[
          {
            titre: 'Direction artistique',
            texte: "Une identité qui relie les fresques, l'appli et les supports.",
            competences: ['Identité visuelle', 'Charte graphique', 'Illustration des familiers', 'Icône d’appli', 'Supports de communication', 'Photoshop, Affinity, Canva'],
          },
          {
            titre: "Design d'expérience",
            texte: 'Un parcours pensé à trois, du concept au prototype en ligne.',
            competences: ['Concept et fil narratif', 'Parcours utilisateur', 'Réalité augmentée', 'Médiation scientifique'],
          },
        ]}
      />

      <Galerie
        titre="Liminis en images"
        intro="L'identité, les familiers, les écrans de l'appli, la communication et quelques pages du dossier."
        filtres={[
          { id: 'identite', label: 'Identité' },
          { id: 'appli', label: 'Appli' },
          { id: 'com', label: 'Communication' },
          { id: 'conception', label: 'Conception' },
        ]}
        items={[
          { cat: 'identite', variante: 'logo', legende: 'Les trois familiers', images: [{ src: `${img}/familiers.webp`, alt: 'Les trois familiers de Liminis', width: 1556, height: 567, fond: '#FBF0DE' }] },
          { cat: 'identite', variante: 'icon', legende: "L'icône de l'appli", images: [{ src: `${img}/icone.webp`, alt: "Icône de l'appli Liminis : le familier bleu à lunettes", width: 513, height: 513, fond: '#FBF0DE' }] },
          { cat: 'identite', variante: 'page', legende: 'Le brandboard', images: [{ src: `${img}/brandboard.webp`, alt: 'Brandboard de Liminis : logos, palette et polices', width: 961, height: 1554 }] },
          { cat: 'appli', variante: 'page', legende: 'La carte du parcours', images: [{ src: `${img}/ecran-parcours.webp`, alt: "L'écran Parcours de l'appli", ...page }] },
          { cat: 'appli', variante: 'page', legende: 'Le scan de la tortue', images: [{ src: `${img}/ecran-scan.webp`, alt: 'Scan de la fresque de la tortue marine', ...page }] },
          { cat: 'appli', variante: 'page', legende: 'Le carnet de bord', images: [{ src: `${img}/ecran-fragments.webp`, alt: 'Le carnet de bord et ses fragments', ...page }] },
          { cat: 'com', variante: 'page', legende: 'Fiche de présentation', images: [{ src: `${img}/fiche-synopsis.webp`, alt: 'Fiche de présentation de Liminis', ...page }] },
          { cat: 'com', variante: 'page', legende: 'Affiche avec QR code', images: [{ src: `${img}/affiche-qr.webp`, alt: 'Affiche de Liminis avec le QR code du parcours', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : technologies', images: [{ src: `${img}/dossier-technologies.webp`, alt: 'Page Technologies du dossier : Vue, Leaflet, MindAR, PWA', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : moodboard', images: [{ src: `${img}/dossier-moodboard.webp`, alt: 'Page Moodboard du dossier', ...page }] },
          { cat: 'conception', legende: 'Les diagrammes sur Figma', images: [{ src: `${img}/diagrammes-figma.webp`, alt: "Le board Figma : user journey map, arborescence et user flows", width: 1534, height: 833 }] },
          { cat: 'conception', legende: 'Les maquettes sur Figma', images: [{ src: `${img}/maquettes-figma.webp`, alt: 'Le fichier Figma des maquettes : wireframes des écrans', width: 1534, height: 832 }] },
        ]}
      />

      <Liens
        liens={[
          { href: appli, label: 'Appli en ligne' },
          { href: github, label: 'GitHub' },
          { href: figmaMaquettes, label: 'Maquettes Figma' },
          { href: figmaDiagrammes, label: 'Diagrammes Figma' },
          { href: dossier, label: 'Dossier de conception (PDF)' },
        ]}
      />
    </ProjectLayout>
  );
}
