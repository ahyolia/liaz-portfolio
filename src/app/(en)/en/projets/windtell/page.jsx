// Windtell case study, English version (/en/projets/windtell/).
// Same structure as src/app/(fr)/projets/windtell/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/windtell';
const appli = 'https://windtell.vercel.app';
const github = 'https://github.com/ahyolia/Windtell';
const dossier = `${img}/dossier-de-conception.pdf`;
const figma = 'https://www.figma.com/design/KqdvvgNCyPlddSRsF03LfP/SAE-302?node-id=0-1';
const planche = { width: 1440, height: 810 };
const page = { width: 1100, height: 1556 };
const photo = { width: 1400, height: 1050 };
const photoPortrait = { width: 1050, height: 1400 };
const ecran = { width: 1136, height: 640 };

export const metadata = {
  title: 'Windtell, a board game between physical board and digital cards — Camélia Amin Handoyo',
  description:
    'Windtell, a board game created for the BUT MMI 2 game fair, with a rotating board made at the FabLab, New Caledonian riddles and digital cards.',
  alternates: { languages: { fr: '/projets/windtell/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="windtell" lang={lang}>
      <CaseHero
        slug="windtell"
        lang={lang}
        eyebrow="Board game"
        titre="Windtell, a floating island where the wind decides"
        accroche="A board game with four rotating levels, New Caledonian animal pawns, and riddle cards drawn on your phone."
        couleur="#E6E4F5"
        liens={[
          { href: appli, label: 'Draw a card in the app' },
          { href: dossier, label: 'Read the design document (in French)' },
        ]}
      >
        <img src={`${img}/partie-test.webp`} alt="A game of Windtell: the blue board with clouds, the pawns, the die and the cards" {...photo} data-depth="0.4" style={{ width: '92%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>Game fair 2025</span>
        <img className="floaty floaty--card" src={`${img}/jeu-final.webp`} alt="" width="640" height="1136" data-depth="1.6" style={{ '--x': '80%', '--y': '14%', '--r': '8deg', '--size': '6rem', '--delay': '-3s', border: '4px solid var(--ink)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '58%', '--y': '86%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>May the wind turn in your favour!</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[
          { nom: 'Illustrator', icone: '/images/tools/illustrator.svg' },
          { nom: 'Photoshop', icone: '/images/tools/photoshop.svg' },
          { nom: 'InDesign', icone: '/images/tools/indesign.svg' },
          { nom: 'React', icone: '/images/tools/react.svg' },
          { nom: 'Figma', icone: '/images/tools/figma.svg' },
        ]}
        fiche={[
          { label: 'Setting', valeur: 'SAÉ 302 Producing content for multimedia communication, BUT MMI 2, board game fair' },
          { label: 'Duration', valeur: 'March → April 2025' },
          { label: 'Team', valeur: 'Elitz, with Magalie Chen and Geneviève Mekenese' },
          { label: 'My role', valeur: 'Concept, fabrication, branding and communication, as a trio' },
          { label: 'Tools', valeur: 'Adobe suite, 3D modelling and printing, laser cutting, React Native (Expo)' },
        ]}
        statut="Shown at the game fair"
      >
        <p>Windtell is the <b>board game</b> the three of us created for the <b>SAÉ 302</b> project, <em>Producing content for multimedia communication</em>, in my second year of BUT MMI, and presented at the programme's <b>board game fair</b> on April 4, 2025.</p>
        <p>We had to <b>design and build a complete game</b>, with <span className="hl">a technological innovation</span> and <b>elements of New Caledonia</b>, then handle its communication.</p>
        <p>Six souls are carried by the spirits to a <b>floating island</b> above New Caledonian waters. On a <b>board with four rotating levels</b>, through riddles, events and duels, the first to reach the centre wins. Cards can also be drawn on a <b>web app</b>.</p>
      </Contexte>

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'Research',
            texte: 'We started with research, gathered on a Figma board. It included Fall Guys for the survival principle, game designers spotted on Behance for the characters, Genshin Impact for a softer but well-outlined palette, and colours to avoid, too “old fantasy game”. Our goal was to introduce New Caledonia in an accessible, fun way.',
            image: { src: `${img}/veille-inspirations.webp`, alt: 'Research board: Fall Guys and Genshin Impact inspirations, game designers, palettes and wooden board ideas', ...planche },
            liens: [{ href: figma, label: 'See the research in Figma' }],
          },
          {
            titre: 'The concept and the story',
            texte: 'In brainstorming, we came up with a survival game on a moving board, inspired by Fall Guys, The Hunger Games and New Caledonian myths, then we wrote its story.',
            images: [
              { src: `${img}/croquis-plateau.webp`, alt: 'Coloured pencil sketch of the circular board and its levels', ...photoPortrait },
              { src: `${img}/croquis-composants.webp`, alt: 'Annotated sketch of the die and the game components', ...photoPortrait },
              { src: `${img}/dossier-narratif.webp`, alt: 'Narrative design page of the document: synopsis and story elements', ...page },
            ],
            liens: [{ href: dossier, label: 'Read the design document (PDF, in French)' }],
          },
          {
            titre: 'Rules and riddles',
            texte: 'We wrote the rules and the three card decks. There are riddles (charades, puzzles, multiple-choice questions on New Caledonian culture, wildlife and legends), events that change the board, and Master cards to challenge players close to winning.',
            images: [
              { src: `${img}/dossier-mecaniques.webp`, alt: 'Game mechanics page of the document: goal, cards and rules page', ...page },
              { src: `${img}/dossier-enigmes.webp`, alt: 'Riddle writing page of the document: process and types of riddles', ...page },
            ],
          },
          {
            titre: 'The board and the die',
            texte: 'We explored several boards (islets, free choice of direction) before settling on a board with four rotating levels, with a portal to move up a level, and a symbol die that moves you forward or triggers an event.',
            image: { src: `${img}/veille-plateau.webp`, alt: 'Research board: board ideas, die system, board and die prototype', ...planche },
          },
          {
            titre: 'The cardboard prototype',
            texte: 'Before building it, we tested the board in cardboard, made of four stacked rotating discs, assembled like a puzzle so it could be carried easily.',
            images: [
              { src: `${img}/prototype-dessin.webp`, alt: 'Tracing the board discs on a sheet of cardboard', ...photoPortrait },
              { src: `${img}/prototype-carton.webp`, alt: 'The cardboard prototype: four stacked circular levels, with two pawns', ...photo },
            ],
          },
          {
            titre: 'The board at the FabLab',
            texte: 'At the FabLab, the wooden discs were laser cut, sanded, then painted midnight blue, with the clouds the pawns move along.',
            images: [
              { src: `${img}/fablab-laser.webp`, alt: "The FabLab's laser cutter engraving a wooden board", ...photo },
              { src: `${img}/poncage.webp`, alt: 'Sanding a wooden disc of the board', width: 1400, height: 788 },
              { src: `${img}/disques-peints.webp`, alt: 'The board discs painted blue, with their white clouds', ...ecran },
            ],
          },
          {
            titre: 'Pawns and dice',
            texte: 'The pawns represent animals of New Caledonia, some of them endemic. We modelled them in 3D along with the dice, then printed and painted them.',
            images: [
              { src: `${img}/modelisation-pions.webp`, alt: '3D modelling of the pawns: fish, turtle, ray and other New Caledonian animals', ...photo },
              { src: `${img}/modelisation-3d.webp`, alt: '3D modelling of a pawn on a computer', ...ecran },
            ],
          },
          {
            titre: 'The cards',
            texte: 'The cards were drawn in Illustrator, then laid out for printing, with a cloud back for each deck and the text of the riddles, events and Master cards.',
            images: [
              { src: `${img}/cartes-illustrator.webp`, alt: 'Drawing the cloud cards in Illustrator', ...ecran },
              { src: `${img}/cartes-mise-en-page.webp`, alt: 'Card print sheet', ...ecran },
            ],
          },
          {
            titre: 'The digital cards',
            texte: 'Our technological innovation is a React Native web app where you draw a random card from the chosen deck, with a button to reveal the answer to riddles. Once the decks are empty, you reshuffle them.',
            image: { src: `${img}/appli-cartes.webp`, alt: 'The Windtell app: the logo, the tagline and the three card decks to draw from', width: 1440, height: 900 },
            liens: [{ href: appli, label: 'Open the app' }],
          },
          {
            titre: 'Branding and communication',
            texte: 'We created the game\'s identity, with a celestial palette, a logo shaped like a mischievous wind spirit, a cloud with changing expressions, and the tagline “May the wind turn in your favour!”. It appears on the cards, the app and our printed T-shirts.',
            images: [
              { src: `${img}/brandboard.webp`, alt: 'Windtell brandboard: the three clouds (original, events, riddles), the palette, the Codan and Tw Cen MT typefaces and the logo', width: 674, height: 880 },
              { src: `${img}/carte-evenement.webp`, alt: 'Mockup of an Event card', width: 292, height: 407 },
              { src: `${img}/carte-enigme.webp`, alt: 'Mockup of a Riddle card', width: 292, height: 407 },
            ],
          },
          {
            titre: 'The game fair',
            texte: 'On April 4, 2025, we had visitors play at the fair. By watching them, we changed one “riddle” face of the die to “move forward one cloud”, because too many riddles slowed the game down.',
            images: [
              { src: `${img}/forum-table.webp`, alt: 'Players around the Windtell board at the game fair', ...photoPortrait },
              { src: `${img}/forum-partie.webp`, alt: 'A game in progress at the fair, with the team in Windtell T-shirts', ...photoPortrait },
            ],
          },
        ]}
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'Game design',
            texte: 'A complete game, from the concept to adjustments made in front of players.',
            competences: ['Concept and story', 'Rules and mechanics', 'Riddle writing', 'Playtesting'],
          },
          {
            titre: 'Fabrication',
            texte: 'A handmade board, pawns and dice, from cardboard to painted wood.',
            competences: ['Prototyping', 'Laser cutting', '3D modelling and printing', 'Painting'],
          },
          {
            titre: 'Graphic design and dev',
            texte: 'An identity that connects the physical game to the app.',
            competences: ['Branding', 'Illustrator, Photoshop, InDesign', 'Card printing', 'React Native'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="Windtell in pictures"
        intro="The finished game, how it was made, a few pages of the design document and the game fair."
        filtres={[
          { id: 'jeu', label: 'The game' },
          { id: 'fabrication', label: 'Fabrication' },
          { id: 'veille', label: 'Research' },
          { id: 'conception', label: 'Design' },
          { id: 'forum', label: 'Fair' },
        ]}
        items={[
          { cat: 'jeu', legende: 'The complete game', images: [{ src: `${img}/jeu-final.webp`, alt: 'The finished board, the animal pawns, the dice and the cards', width: 640, height: 1136 }] },
          { cat: 'jeu', legende: 'A test game', images: [{ src: `${img}/partie-test.webp`, alt: 'A test game around the board', ...photo }] },
          { cat: 'jeu', legende: 'The card app', images: [{ src: `${img}/appli-cartes.webp`, alt: 'The Windtell app and its three card decks', width: 1440, height: 900 }] },
          { cat: 'fabrication', legende: 'The cardboard prototype', images: [{ src: `${img}/prototype-carton.webp`, alt: 'The cardboard board prototype', ...photo }] },
          { cat: 'fabrication', legende: 'A laser-cut disc', images: [{ src: `${img}/disque-bois.webp`, alt: 'A laser-cut wooden disc, with its clouds', ...ecran }] },
          { cat: 'fabrication', legende: 'The painted discs', images: [{ src: `${img}/disques-peints.webp`, alt: 'The board discs painted blue', ...ecran }] },
          { cat: 'fabrication', legende: 'The 3D pawns', images: [{ src: `${img}/modelisation-pions.webp`, alt: '3D modelling of the animal pawns', ...photo }] },
          { cat: 'veille', legende: 'Inspirations', images: [{ src: `${img}/veille-inspirations.webp`, alt: 'Inspirations board', ...planche }] },
          { cat: 'veille', legende: 'Board research', images: [{ src: `${img}/veille-plateau.webp`, alt: 'Board and die research board', ...planche }] },
          { cat: 'veille', legende: 'Final board and palette', images: [{ src: `${img}/veille-plateau-final.webp`, alt: 'Board showing the final game board, the palette, the FabLab plans, the dice and the pawns', ...planche }] },
          { cat: 'veille', legende: 'Modelling and logos', images: [{ src: `${img}/veille-fabrication-logo.webp`, alt: 'Board showing the Tinkercad modelling, 3D printing, logo moodboard and typefaces', ...planche }] },
          { cat: 'veille', legende: 'Brandboard', images: [{ src: `${img}/brandboard.webp`, alt: 'Windtell brandboard', width: 674, height: 880 }] },
          { cat: 'veille', legende: 'Event and Riddle cards', images: [
            { src: `${img}/carte-evenement.webp`, alt: 'Mockup of an Event card', width: 292, height: 407 },
            { src: `${img}/carte-enigme.webp`, alt: 'Mockup of a Riddle card', width: 292, height: 407 },
          ] },
          { cat: 'veille', legende: 'How a game unfolds', images: [{ src: `${img}/veille-parcours-joueur.webp`, alt: 'How a game unfolds: placement, rolling the die, moving towards the portal, reaching the centre', ...planche }] },
          { cat: 'conception', variante: 'page', legende: 'Document: cover', images: [{ src: `${img}/dossier-couverture.webp`, alt: 'Cover of the Windtell design document', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Document: board and components', images: [{ src: `${img}/dossier-plateau.webp`, alt: 'Board and components design page of the document', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Document: 3D printing', images: [{ src: `${img}/dossier-impression-3d.webp`, alt: '3D modelling and printing of the dice and pawns page of the document', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Document: painting', images: [{ src: `${img}/dossier-peinture.webp`, alt: 'Cutting, sanding and painting page of the document', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Document: app', images: [{ src: `${img}/dossier-appli.webp`, alt: 'Technology integration page of the document: the digital card app', ...page }] },
          { cat: 'forum', legende: 'The board at the fair', images: [{ src: `${img}/forum-plateau.webp`, alt: 'The board, the cards and a phone running the app, on the fair table', ...photoPortrait }] },
          { cat: 'forum', legende: 'Players around the board', images: [{ src: `${img}/forum-table.webp`, alt: 'Players around the Windtell board at the game fair', ...photoPortrait }] },
          { cat: 'forum', legende: 'A game at the fair', images: [{ src: `${img}/forum-partie.webp`, alt: 'A game in progress at the fair, with the team in Windtell T-shirts', ...photoPortrait }] },
        ]}
      />

      <Liens
        lang={lang}
        liens={[
          { href: appli, label: 'Card app' },
          { href: github, label: 'GitHub' },
          { href: dossier, label: 'Design document (PDF, in French)' },
          { href: figma, label: 'Research in Figma' },
        ]}
      />
    </ProjectLayout>
  );
}
