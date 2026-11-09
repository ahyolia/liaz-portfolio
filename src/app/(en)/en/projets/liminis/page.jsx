// Liminis case study, English version (/en/projets/liminis/).
// Same structure as src/app/(fr)/projets/liminis/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/liminis';
const appli = 'https://liminis.netlify.app';
const github = 'https://github.com/KitsuneE24/liminis';
const figmaDiagrammes = 'https://www.figma.com/board/ZmMsYttZlPAZsWgvuNcXFq/MicroMondes---Diagrammes?node-id=0-1';
const figmaMaquettes = 'https://www.figma.com/design/Fni3dO2DNlYRubWnlyaUAh/MicroMondes---Maquette?node-id=0-1';
const dossier = `${img}/dossier-de-conception.pdf`;
const page = { width: 1100, height: 1556 };

export const metadata = {
  title: 'Liminis, a quest for life on campus — Camélia Amin Handoyo',
  description:
    "Liminis, an augmented reality web app that reveals the microscopic world of the Micro-Worlds murals on the UNC campus.",
  alternates: { languages: { fr: '/projets/liminis/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="liminis" lang={lang}>
      <CaseHero
        slug="liminis"
        lang={lang}
        eyebrow="Augmented reality web app"
        titre="Liminis, the closer you zoom, the more the mural reveals"
        accroche="Scan the campus murals with your phone, collect the fragments of life hidden inside, and a little familiar wakes up."
        couleur="#FBF0DE"
        liens={[
          { href: appli, label: 'Open the app' },
          { href: dossier, label: 'Read the design document (in French)' },
        ]}
      >
        <img src={`${img}/familiers.webp`} alt="The three Liminis familiars: a red ball, a yellow one and a blue one with glasses, all with wings" width="1556" height="567" data-depth="0.4" style={{ width: '92%' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '4%', '--r': '-8deg', '--size': 'auto' }}>Micro-Worlds</span>
        <img className="floaty floaty--card" src={`${img}/ecran-scan.webp`} alt="" width={page.width} height={page.height} data-depth="1.6" style={{ '--x': '80%', '--y': '40%', '--r': '8deg', '--size': '6.5rem', '--delay': '-3s', border: '4px solid var(--ink)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '10%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>No account, no install</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[
          { nom: 'Figma', icone: '/images/tools/figma.svg' },
          { nom: 'Photoshop', icone: '/images/tools/photoshop.svg' },
          { nom: 'Affinity', icone: '/images/tools/affinity.png' },
          { nom: 'Canva', icone: '/images/tools/canva.svg' },
          { nom: 'Vue.js', icone: '/images/tools/vuejs.svg' },
          { nom: 'Git', icone: '/images/tools/git.svg' },
        ]}
        fiche={[
          { label: 'Setting', valeur: 'BUT MMI 3, Micro-Worlds project, UNC campus' },
          { label: 'Year', valeur: '2026' },
          { label: 'Team', valeur: 'With Magalie Chen (dev) and Geneviève Mekenese (UI/UX)' },
          { label: 'My role', valeur: 'UI/UX design and branding' },
          { label: 'Tools', valeur: 'Figma, Photoshop, Affinity, Canva; Vue, Leaflet, MindAR, offline PWA, Netlify' },
        ]}
        statut="Prototype online"
      >
        <p>On the University of New Caledonia campus, <b>three murals by the artist Kuby Kolor</b> (the sea turtle, the hibiscus and the lorikeet) hide a second layer of meaning: an <b>invisible, microscopic, cellular world</b>.</p>
        <p>With Magalie and Geneviève, we came up with Liminis, a <b>web app</b> that turns the visit into a <span className="hl">quest for life</span>. You follow the map to the murals, scan them in <b>augmented reality</b> to reveal their hidden fragments, and fill in a <b>logbook</b>.</p>
        <p>Once all the stamps are collected, <b>a familiar is unlocked</b>, put together from everything you discovered. In the team, I handled the <b>branding</b> (visual identity, logo, style guide, icons and familiars) and the <b>app's UI/UX</b>, from its user journey to its screens.</p>
      </Contexte>

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'The concept and the experience',
            texte: 'We started by setting out the context and the problem. How could we reveal, for each mural, an invisible universe through art, augmented reality and sound? Then came the pitch, the UX intent, the narrative thread and the key interactions.',
            images: [
              { src: `${img}/dossier-couverture.webp`, alt: 'Cover of the Micro-Worlds design document, with the three familiars', ...page },
              { src: `${img}/dossier-concept.webp`, alt: 'Experience concept page of the document: pitch, UX intent, narrative thread', ...page },
              { src: `${img}/dossier-dispositif.webp`, alt: 'Interactive experience page of the document: intended use and key interactions', ...page },
            ],
            liens: [{ href: dossier, label: 'Read the design document (PDF, in French)' }],
          },
          {
            titre: 'The journey and the diagrams',
            texte: "In a Figma board, we built the user journey map around a persona, Teva, with her actions, emotions and pain points at each step, then the app's sitemap and user flows, from the start at the stand to the step in front of the mural.",
            image: { src: `${img}/diagrammes-figma.webp`, alt: "The Figma diagram board: user journey map of the persona Teva, the app's sitemap and the journey's user flows", width: 1534, height: 833 },
            liens: [{ href: figmaDiagrammes, label: 'See the diagrams in Figma' }],
          },
          {
            titre: 'The mockups',
            texte: 'The screens were first designed as wireframes in Figma, on a mobile grid. They include the journey map, the logbook, the fragments and the familiar unlock, with navigation reduced to three tabs.',
            image: { src: `${img}/maquettes-figma.webp`, alt: 'The Figma mockup file: wireframes of the journey map, the logbook, the fragments and the unlocked familiar', width: 1534, height: 832 },
            liens: [{ href: figmaMaquettes, label: 'See the mockups in Figma' }],
          },
          {
            titre: 'The visual identity',
            texte: 'My main role was to create a soft, playful identity on a cream background, with a palette drawn from the murals (midnight blue, purple, orange, turquoise, yellow), the rounded Darumadrop One typeface, and Karla for body text.',
            images: [
              { src: `${img}/dossier-moodboard.webp`, alt: 'Moodboard page of the document', ...page },
              { src: `${img}/brandboard.webp`, alt: 'Liminis brandboard: logos, colour palette and typefaces', width: 961, height: 1554 },
            ],
          },
          {
            titre: 'The familiars',
            texte: 'I drew the three familiars, little winged furballs that act as mascots and as the final reward. One of them, with glasses, became the app icon.',
            images: [
              { src: `${img}/familier-rouge.webp`, alt: 'The red familiar, eyes closed, with wings', width: 420, height: 498 },
              { src: `${img}/familier-jaune.webp`, alt: 'The yellow familiar, smiling, with wings', width: 550, height: 471 },
              { src: `${img}/familier-bleu.webp`, alt: 'The blue familiar with glasses, with wings', width: 438, height: 468 },
            ],
          },
          {
            titre: 'The app',
            texte: 'Magalie developed the app in Vue, installable and usable offline. The Leaflet map leads to the murals, the augmented reality scanner reveals the fragments, and the logbook keeps track of progress.',
            images: [
              { src: `${img}/ecran-parcours.webp`, alt: 'The Journey screen: the campus map and the three murals', ...page },
              { src: `${img}/ecran-scan.webp`, alt: 'Scanning the sea turtle mural with a phone', ...page },
              { src: `${img}/ecran-fragments.webp`, alt: 'The logbook: the Sea turtle entry and its fragments to find', ...page },
            ],
            liens: [{ href: appli, label: 'Open the app' }],
          },
          {
            titre: 'Communication',
            texte: 'Finally, we made the printed materials: a presentation sheet with the synopsis and the team, and a poster with the QR code to start the journey on campus.',
            images: [
              { src: `${img}/fiche-synopsis.webp`, alt: "Liminis presentation sheet: synopsis, team roles and the app's link", ...page },
              { src: `${img}/affiche-qr.webp`, alt: 'Liminis poster with the journey QR code and the familiars', ...page },
            ],
          },
        ]}
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'Branding',
            texte: 'An identity that connects the murals, the app and the printed materials.',
            competences: ['Visual identity', 'Style guide', 'Familiar illustrations', 'App icon', 'Communication materials', 'Photoshop, Affinity, Canva'],
          },
          {
            titre: 'UI/UX design',
            texte: 'An app designed for use on site, from the journey to the screens.',
            competences: ['User journey map and user flows', 'Sitemap', 'Figma wireframes', 'Augmented reality journey', 'Science outreach'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="Liminis in pictures"
        intro="The identity, the familiars, the app screens, the communication materials and a few pages of the design document."
        filtres={[
          { id: 'identite', label: 'Identity' },
          { id: 'appli', label: 'App' },
          { id: 'com', label: 'Communication' },
          { id: 'conception', label: 'Design' },
        ]}
        items={[
          { cat: 'identite', variante: 'logo', legende: 'The three familiars', images: [{ src: `${img}/familiers.webp`, alt: 'The three Liminis familiars', width: 1556, height: 567, fond: '#FBF0DE' }] },
          { cat: 'identite', variante: 'icon', legende: 'The app icon', images: [{ src: `${img}/icone.webp`, alt: 'Liminis app icon: the blue familiar with glasses', width: 513, height: 513, fond: '#FBF0DE' }] },
          { cat: 'identite', variante: 'page', legende: 'The brandboard', images: [{ src: `${img}/brandboard.webp`, alt: 'Liminis brandboard: logos, palette and typefaces', width: 961, height: 1554 }] },
          { cat: 'appli', variante: 'page', legende: 'The journey map', images: [{ src: `${img}/ecran-parcours.webp`, alt: "The app's Journey screen", ...page }] },
          { cat: 'appli', variante: 'page', legende: 'Scanning the turtle', images: [{ src: `${img}/ecran-scan.webp`, alt: 'Scanning the sea turtle mural', ...page }] },
          { cat: 'appli', variante: 'page', legende: 'The logbook', images: [{ src: `${img}/ecran-fragments.webp`, alt: 'The logbook and its fragments', ...page }] },
          { cat: 'com', variante: 'page', legende: 'Presentation sheet', images: [{ src: `${img}/fiche-synopsis.webp`, alt: 'Liminis presentation sheet', ...page }] },
          { cat: 'com', variante: 'page', legende: 'Poster with QR code', images: [{ src: `${img}/affiche-qr.webp`, alt: 'Liminis poster with the journey QR code', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Document: technologies', images: [{ src: `${img}/dossier-technologies.webp`, alt: 'Technologies page of the document: Vue, Leaflet, MindAR, PWA', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Document: moodboard', images: [{ src: `${img}/dossier-moodboard.webp`, alt: 'Moodboard page of the document', ...page }] },
          { cat: 'conception', legende: 'The diagrams in Figma', images: [{ src: `${img}/diagrammes-figma.webp`, alt: 'The Figma board: user journey map, sitemap and user flows', width: 1534, height: 833 }] },
          { cat: 'conception', legende: 'The mockups in Figma', images: [{ src: `${img}/maquettes-figma.webp`, alt: 'The Figma mockup file: screen wireframes', width: 1534, height: 832 }] },
        ]}
      />

      <Liens
        lang={lang}
        liens={[
          { href: appli, label: 'Live app' },
          { href: github, label: 'GitHub' },
          { href: figmaMaquettes, label: 'Figma mockups' },
          { href: figmaDiagrammes, label: 'Figma diagrams' },
          { href: dossier, label: 'Design document (PDF, in French)' },
        ]}
      />
    </ProjectLayout>
  );
}
