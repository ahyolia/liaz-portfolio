// Pocket Stars case study, English version (/en/projets/pocket-stars/).
// Same structure as src/app/(fr)/projets/pocket-stars/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';
import Video from '../../../../../components/projet/Video';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/pocket-stars';
const demo = 'https://pocketstarss.netlify.app';
const github = 'https://github.com/ahyolia/PocketStars';
const dossier = 'https://github.com/ahyolia/PocketStars/blob/main/docs/Pocket%20Stars%20-%20Dossier%20de%20pr%C3%A9paration.pdf';
const capture = { width: 1440, height: 900 };

export const metadata = {
  title: 'Pocket Stars, Pokémon cards in 3D — Camélia Amin Handoyo',
  description:
    'Pocket Stars, a 3D exploration of Pokémon cards under a starry sky, built with React, Three.js and the TCGdex API.',
  alternates: { languages: { fr: '/projets/pocket-stars/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="pocket-stars" lang={lang}>
      <CaseHero
        slug="pocket-stars"
        lang={lang}
        eyebrow="3D web experience"
        titre="Pocket Stars, a sky where every star hides a card"
        accroche="Wander across a floating island, click on a star, and a Pokémon card drifts down to reveal itself in 3D."
        couleur="#E3DDFB"
        liens={[
          { href: demo, label: 'Play the demo' },
          { href: github, label: 'Code on GitHub' },
        ]}
      >
        <img src={`${img}/carte-alakazam.webp`} alt="Reveal of a holographic Alakazam card, with the reaction of the companion Mimikyu" width={capture.width} height={capture.height} data-depth="0.4" style={{ width: '92%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>1 star = 1 card</span>
        <img className="floaty floaty--card" src={`${img}/pocketstars-mobile.webp`} alt="" width="302" height="654" data-depth="1.6" style={{ '--x': '78%', '--y': '18%', '--r': '8deg', '--size': '6.5rem', '--delay': '-3s', border: '4px solid var(--ink)', borderRadius: '1rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '72%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>Shuffle!</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[
          { nom: 'React', icone: '/images/tools/react.svg' },
          { nom: 'JavaScript', icone: '/images/tools/javascript.svg' },
          { nom: 'CSS', icone: '/images/tools/css3.svg' },
          { nom: 'Git', icone: '/images/tools/git.svg' },
        ]}
        fiche={[
          { label: 'Setting', valeur: 'Front-end development course, BUT MMI 3' },
          { label: 'Duration', valeur: 'September → October 2026' },
          { label: 'Team', valeur: 'Solo project' },
          { label: 'My role', valeur: 'Concept, design and development' },
          { label: 'Tools', valeur: 'React, Vite, Three.js (React Three Fiber), TCGdex API, Web Audio' },
        ]}
        statut="Live"
      >
        <p>Pocket Stars was born in the <b>Front-end Development course</b> of my third year of BUT MMI. The brief was to use a <b>public API</b> and build a <b>3D scene</b> to showcase it.</p>
        <p>You walk in first person across a <b>floating island</b>, under a night sky. <b>Every star hides a card</b>. One click brings it down, and the card <b>flips over in 3D</b>, with comments from Mimikyu, your companion.</p>
        <p>I chose <b>Pokémon cards</b> and the <b>TCGdex API</b>. I wanted discovering a card to be <span className="hl">a little moment of surprise</span>, <b>on desktop as well as on mobile</b>.</p>
      </Contexte>

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'Design document and schedule',
            texte: 'I started with a preparation document. It brings together the choice of API and technologies, the moodboard, the sitemap, the mockups, the data schema and a schedule that anticipates risks and includes safety margins.',
            images: [
              { src: `${img}/dossier-couverture.webp`, alt: 'Cover of the Pocket Stars preparation document', width: 1100, height: 1556 },
              { src: `${img}/dossier-maquettes.webp`, alt: 'Mockups page of the document: pencil sketches and interface mockups', width: 1100, height: 1556 },
              { src: `${img}/dossier-planning.webp`, alt: 'Schedule page of the document: Gantt chart and project risks', width: 1100, height: 1556 },
            ],
            liens: [{ href: dossier, label: 'Read the preparation document (PDF, in French)' }],
          },
          {
            titre: 'The 3D star asset',
            texte: 'For the star, I chose a royalty-free 3D model, “Star” by J-Toastie, found on Poly Pizza. The same model is used for every star, so none of them gives away the card it hides.',
            image: { src: `${img}/etoile.webp`, alt: 'The “Star” 3D model by J-Toastie on Poly Pizza, a yellow star with rounded points', width: 1534, height: 768 },
          },
          {
            titre: 'The scene and the stars',
            texte: 'I built the floating island under a night sky, with the starfield and shooting stars, then placed 50 card-stars drawn from 250 cards from the TCGdex API.',
            image: { src: `${img}/ciel.webp`, alt: 'The floating island under a night sky full of stars, with the search bar, the sound controls and Mimikyu', width: 1534, height: 744 },
          },
          {
            titre: 'Interactions',
            texte: 'First-person movement (ZQSD or WASD, mouse look without clicking), then clicking on a star. The card then comes down face down, flips over and can be handled. Rare cards have a holographic shine.',
            image: { src: `${img}/carte-alakazam.webp`, alt: 'Reveal of a rare Alakazam card, with its holographic shine', ...capture },
          },
          {
            titre: 'Features',
            texte: 'Search by name across the whole database, the Shuffle button, Mimikyu commenting on each card, music generated in code, and a fallback card front when an image is refused by the server.',
            image: { src: `${img}/carte-chenipan.webp`, alt: 'Reveal of the Caterpie card, with comments from Mimikyu', ...capture },
          },
          {
            titre: 'Mobile',
            texte: 'Finally, I adapted the experience for phones and tablets, with a responsive layout, a virtual joystick to walk, a finger swipe to look around and full screen on first touch.',
            images: [
              { src: `${img}/pocketstars-mobile.webp`, alt: 'Pocket Stars on a phone: starry sky, search and sound buttons, virtual joystick and Mimikyu', width: 302, height: 654 },
              { src: `${img}/pocketstars-mobile2.webp`, alt: "Pocket Stars on a phone: reveal of Arcanine, a rare holo card shown with its fallback front, and Mimikyu's reaction", width: 298, height: 654 },
            ],
          },
        ]}
      />

      <Video
        lang={lang}
        intro="A click on a star, the card coming down and flipping over, then more cards to hear the music and see Mimikyu react."
        src={`${img}/demo-revelation-son.webm`}
        poster={`${img}/demo-revelation-poster.webp`}
        width={1280}
        height={620}
        legende="Recording of the Pocket Stars demo, walking across the island, clicking on stars and revealing Pokémon cards in 3D"
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: '3D front-end dev',
            texte: 'A 3D scene written in React, from the sky to the shine on the cards.',
            competences: ['React', 'Three.js · React Three Fiber', 'Holographic shader', 'TCGdex API', 'Web Audio API', 'Responsive and touch'],
          },
          {
            titre: 'Game and UX design',
            texte: 'An exploration that is easy to pick up, with a touch of surprise.',
            competences: ['First-person movement', 'Mimikyu companion', '“Cartoon” interface', 'Reduced motion respected'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="Pocket Stars in pictures"
        intro="A few screenshots of the live demo, with the island, its sky and revealed cards."
        filtres={[
          { id: 'exploration', label: 'Exploration' },
          { id: 'cartes', label: 'Cards' },
          { id: 'mobile', label: 'Mobile' },
          { id: 'conception', label: 'Design' },
        ]}
        items={[
          { cat: 'exploration', legende: 'The island and its starry sky', images: [{ src: `${img}/ciel.webp`, alt: 'The floating island under a night sky full of stars', width: 1534, height: 744 }] },
          { cat: 'cartes', legende: 'Alakazam, a rare holographic card', images: [{ src: `${img}/carte-alakazam.webp`, alt: 'Reveal of a rare, holographic Alakazam card', ...capture }] },
          { cat: 'cartes', legende: 'Caterpie, a common card', images: [{ src: `${img}/carte-chenipan.webp`, alt: 'Reveal of the common Caterpie card', ...capture }] },
          { cat: 'cartes', legende: 'Fallback card front', images: [{ src: `${img}/carte-remplacement.webp`, alt: 'Fallback card front “Image unavailable”', ...capture }] },
          { cat: 'mobile', legende: 'On a phone, with the joystick', images: [{ src: `${img}/pocketstars-mobile.webp`, alt: 'Pocket Stars on a phone: starry sky, search and sound buttons, virtual joystick and Mimikyu', width: 302, height: 654 }] },
          { cat: 'mobile', legende: 'Reveal on a phone', images: [{ src: `${img}/pocketstars-mobile2.webp`, alt: "Pocket Stars on a phone: reveal of Arcanine, a rare holo card shown with its fallback front, and Mimikyu's reaction", width: 298, height: 654 }] },
          { cat: 'conception', variante: 'page', legende: 'Document: moodboard', images: [{ src: `${img}/dossier-moodboard.webp`, alt: 'Moodboard page of the document: holographic cards, stars and visual mood', width: 1100, height: 1556 }] },
          { cat: 'conception', variante: 'page', legende: 'Document: mockups', images: [{ src: `${img}/dossier-maquettes.webp`, alt: 'Mockups page of the document: pencil sketches and interface mockups', width: 1100, height: 1556 }] },
          { cat: 'conception', variante: 'page', legende: 'Document: schedule', images: [{ src: `${img}/dossier-planning.webp`, alt: 'Schedule page of the document: Gantt chart and project risks', width: 1100, height: 1556 }] },
        ]}
      />

      <Liens
        lang={lang}
        liens={[
          { href: demo, label: 'Live demo' },
          { href: github, label: 'GitHub' },
          { href: dossier, label: 'Preparation document (PDF, in French)' },
        ]}
      />
    </ProjectLayout>
  );
}
