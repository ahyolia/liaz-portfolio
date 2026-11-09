// Yearbook 2025 case study, English version (/en/projets/yearbook-2025/).
// Same structure as src/app/(fr)/projets/yearbook-2025/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Demarche from '../../../../../components/projet/Demarche';
import Flipbook from '../../../../../components/projet/Flipbook';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';

const lang = 'en';
const img = '/images/projets/yearbook25';
const livre = `${img}/flipbook`;
const planche = { width: 1100, height: 619 };
const page = { width: 1000, height: 1415 };

// Flipbook pages (a selection from the 52-page yearbook)
const pages = [
  { n: '01', alt: 'Cover: “Yearbook Case Files 2025”, campus map, Top secret stamp and UNC and IUT logos' },
  { n: '02', alt: 'Flyleaf' },
  { n: '03', alt: 'Acknowledgements, signed Camélia Amin-Handoyo and Geneviève Mekenese' },
  { n: '07', alt: 'Teaching staff: a file with two group photos (blurred)' },
  { n: '09', alt: 'MMI 1 unit file: ID, rank, end of mission and class photos (blurred)' },
  { n: '10', alt: 'Profile of the MMI 1 programme leader, with their message (photo and name blurred)' },
  { n: '11', alt: 'MMI 1 agents: grid of numbered portraits with code names (blurred)' },
  { n: '12', alt: 'MMI 1 agents, continued (portraits and names blurred)' },
  { n: '22', alt: 'Profile of the head of the GEA department, with her message (photo and name blurred)' },
  { n: '23', alt: 'GEA 1 unit file and its class photos (blurred)' },
  { n: '25', alt: 'GEA 1 agents: grid of portraits (blurred)' },
  { n: '44', alt: 'Our highlights: a corkboard with slots for pinned photos' },
  { n: '51', alt: 'Guess who? Childhood photos of the teachers to guess (blurred)' },
  { n: '52', alt: 'Back cover' },
].map((p) => ({ src: `${livre}/page-${p.n}.webp`, alt: p.alt }));

export const metadata = {
  title: 'IUT Yearbook 2025, “Case Files” — Camélia Amin Handoyo',
  description:
    "The 2025 Yearbook of the IUT of New Caledonia, on a secret agent theme. My proposal, voted for by the class, was laid out with Geneviève Mekenese in InDesign, Illustrator and Photoshop.",
  alternates: { languages: { fr: '/projets/yearbook-2025/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="yearbook-2025" lang={lang}>
      <CaseHero
        slug="yearbook-2025"
        lang={lang}
        eyebrow="Editorial design · layout"
        titre="Yearbook 2025: the IUT becomes a secret agency"
        accroche="My proposal got the most votes from the class. With Geneviève Mekenese, we laid out the yearbook of the whole IUT, where every year group has its classified file and every student their code name."
        couleur="#E2E0B8"
        liens={[{ href: '#flipbook', label: 'Flip through the yearbook' }]}
      >
        <img src={`${livre}/page-01.webp`} alt="Yearbook cover: “Yearbook Case Files 2025”" {...page} data-depth="0.4" style={{ width: '46%', borderRadius: '0.25rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>Top secret</span>
        <img className="floaty floaty--card" src={`${livre}/page-09.webp`} alt="" {...page} data-depth="1.6" style={{ '--x': '76%', '--y': '22%', '--r': '7deg', '--size': '7rem', '--delay': '-3s', border: '4px solid var(--paper)', borderRadius: '0.25rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '4%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>Voted by the class</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[
          { nom: 'InDesign', icone: '/images/tools/indesign.svg' },
          { nom: 'Illustrator', icone: '/images/tools/illustrator.svg' },
          { nom: 'Photoshop', icone: '/images/tools/photoshop.svg' },
        ]}
        fiche={[
          { label: 'Setting', valeur: 'IUT of New Caledonia Yearbook 2025' },
          { label: 'Year', valeur: '2025' },
          { label: 'Team', valeur: 'With Geneviève Mekenese' },
          { label: 'My role', valeur: 'Concept, book design, stamps and layout' },
          { label: 'Tools', valeur: 'InDesign, Illustrator, Photoshop' },
          { label: 'Format', valeur: '52 A4 pages' },
        ]}
        statut="Handed out to students and graduates"
      >
        <p>For the <b>IUT's 2025 yearbook</b>, the whole class submitted a design. <span className="hl">My proposal got the most votes</span>, and I laid out the book with Geneviève Mekenese.</p>
        <p>In this concept, <b>the IUT becomes a secret organisation</b>. Year groups become units, specialisms become divisions, and every student becomes an agent with their own <b>code name</b>. Each unit has its <b>classified file</b>, with its ID, rank and end-of-mission date.</p>
        <p>The yearbook brings together <b>all of the IUT's programmes</b> (MMI, GEA, LP CAN and LP MIAW). It was also given to the <b>graduates of the 2023-2025 class</b>, who received their diploma in 2026.</p>
      </Contexte>

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'The proposal',
            texte: 'I put together a “Mission reports – Secret agents” proposal, inspired by braille, case files and agent profiles. It is a world of confidential documents, stamps and embossed dots.',
            image: { src: `${img}/concept-inspirations.webp`, alt: 'Inspirations board: braille, classified files and secret agent profiles', ...planche },
          },
          {
            titre: 'The concept and the structure',
            texte: 'I defined the rules of the book. Each unit (class) chooses its name and receives an ID and a rank (SR, SSR, SSS), each division (specialism) has its name and ID, and each agent chooses their code name. Each unit has its file, its report letters and its staff profiles.',
            image: { src: `${img}/concept-specificites.webp`, alt: 'Specifics board: units, divisions, ranks and code names', ...planche },
          },
          {
            titre: 'The book design and the stamps',
            texte: 'I designed the book in Illustrator (files, profiles, kraft paper, pins, braille) and made the stamps for each year group in Photoshop.',
            image: { src: `${img}/concept-affichage.webp`, alt: 'Display board: report letters, unit files, staff profiles and information sheets', ...planche },
          },
          {
            titre: 'Collecting content and laying out',
            texte: "With Geneviève, we gathered the code names of every student at the IUT and a message from each teacher, then laid everything out in InDesign, over 52 pages. We sent each version to the IUT's communication department for proofreading, up to the final version.",
            image: { src: `${livre}/page-11.webp`, alt: 'MMI 1 agents page: portraits and code names (blurred)', ...page, portrait: true },
          },
          {
            titre: 'The printed book',
            texte: 'The yearbook was printed and handed out to IUT students, as well as to the graduates of the 2023-2025 class. Mission accomplished!',
            images: [
              { src: `${img}/livre-imprime.webp`, alt: 'Selfie of Camélia and Geneviève sticking their tongues out, holding two printed copies of the Yearbook 2025', width: 1202, height: 1600 },
              { src: `${img}/livre-imprime-2.webp`, alt: 'Selfie of Camélia, smiling, and Geneviève with two printed copies of the Yearbook 2025', width: 1202, height: 1600 },
            ],
          },
        ]}
      />

      <Flipbook
        lang={lang}
        titre="Flip through the yearbook"
        intro="A selection of pages to turn with the mouse, a finger or the keyboard arrows. Photos and names of students and staff are blurred."
        pages={pages}
        largeur={page.width}
        hauteur={page.height}
        legende="IUT of New Caledonia Yearbook 2025, selected pages"
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'Art direction',
            texte: 'A strong concept, chosen by the class, carried through a whole book.',
            competences: ['Editorial concept', 'Book design', 'Stamps and textures', 'Illustrator', 'Photoshop'],
          },
          {
            titre: 'Editing and coordination',
            texte: 'A 52-page book taken all the way to print, with the whole IUT.',
            competences: ['InDesign layout', 'Content collection', 'Proofreading with the comms department', 'Working as a duo'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="The yearbook in pictures"
        intro="The printed book and the boards of my proposal, presented to the class before the vote."
        filtres={[
          { id: 'livre', label: 'The book' },
          { id: 'proposition', label: 'Proposal' },
        ]}
        items={[
          { cat: 'livre', legende: 'The printed yearbook', images: [{ src: `${img}/livre-imprime.webp`, alt: 'Camélia and Geneviève with two printed copies of the Yearbook 2025', width: 1202, height: 1600 }] },
          { cat: 'livre', legende: 'Mission accomplished', images: [{ src: `${img}/livre-imprime-2.webp`, alt: 'Camélia, smiling, and Geneviève with two printed copies of the Yearbook 2025', width: 1202, height: 1600 }] },
          { cat: 'proposition', legende: 'Inspirations', images: [{ src: `${img}/concept-inspirations.webp`, alt: 'Inspirations board', ...planche }] },
          { cat: 'proposition', legende: 'Concept', images: [{ src: `${img}/concept-idee.webp`, alt: 'Concept board: the IUT is a secret organisation', ...planche }] },
          { cat: 'proposition', legende: 'Display', images: [{ src: `${img}/concept-affichage.webp`, alt: 'Display board', ...planche }] },
          { cat: 'proposition', legende: 'Specifics', images: [{ src: `${img}/concept-specificites.webp`, alt: 'Specifics board', ...planche }] },
        ]}
      />
    </ProjectLayout>
  );
}
