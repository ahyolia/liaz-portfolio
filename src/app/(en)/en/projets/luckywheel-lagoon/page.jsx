// "The Lagoon Big Wheel" case study, English version (/en/projets/luckywheel-lagoon/).
// Same structure as src/app/(fr)/projets/luckywheel-lagoon/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/luckywheel-lagoon';
const figma = 'https://www.figma.com/design/vb7YuVog7lIFdx1NNIS32A/Lagoon---Lucky-wheel?node-id=0-1';
const ecran = { width: 1364, height: 922 };

export const metadata = {
  title: 'The Lagoon Big Wheel, a game for the Foire du Pacifique — Camélia Amin Handoyo',
  description:
    "Redesign of Lagoon's wheel of fortune for the Foire du Pacifique, from Figma mockups to a Nuxt build with sound and animations, during my internship at OFFRATEL Lagoon.",
  alternates: { languages: { fr: '/projets/luckywheel-lagoon/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="luckywheel-lagoon" lang={lang}>
      <CaseHero
        slug="luckywheel-lagoon"
        lang={lang}
        eyebrow="Interactive game · internship"
        titre="The Lagoon Big Wheel, more modern and more fun"
        accroche="For Lagoon's stand at the Foire du Pacifique trade fair, I redesigned the wheel of fortune in Figma, then built it in Nuxt, with sound and animations."
        couleur="#FFE2C7"
        liens={[{ href: figma, label: 'See the Figma mockups' }]}
      >
        <img src={`${img}/roue.webp`} alt="The new Lagoon wheel: blue background with bubbles and clownfish, an orange wheel with the prizes and a Play button in the centre" {...ecran} data-depth="0.4" style={{ width: '92%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>Foire du Pacifique</span>
        <img className="floaty floaty--card" src={`${img}/ecran-victoire.webp`} alt="" {...ecran} data-depth="1.6" style={{ '--x': '70%', '--y': '66%', '--r': '6deg', '--size': '10rem', '--delay': '-3s', border: '4px solid var(--paper)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '6%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>119 players</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[
          { nom: 'Figma', icone: '/images/tools/figma.svg' },
          { nom: 'Vue.js', icone: '/images/tools/vuejs.svg' },
        ]}
        fiche={[
          { label: 'Setting', valeur: '2-month internship (BUT MMI 2), OFFRATEL Lagoon digital team' },
          { label: 'Duration', valeur: 'September → November 2025' },
          { label: 'My role', valeur: 'UI design and front-end integration' },
          { label: 'Tools', valeur: 'Figma, Nuxt (Vue.js)' },
          { label: 'Players', valeur: '119' },
          { label: 'Leads', valeur: '35' },
        ]}
        statut="Foire du Pacifique 2025"
      >
        <p>At the <b>Foire du Pacifique</b> trade fair, <b>Lagoon's stand</b> invites visitors to try their luck on a wheel to win a pen, a pareo, a hat, a beach ball, a stress-relief fish… or a month of subscription.</p>
        <p>This was my second mission during my second-year BUT MMI internship at <b>OFFRATEL Lagoon</b>. I was given the <b>redesign of the wheel</b>, with the goal of <span className="hl">making it more modern and more fun</span>.</p>
        <p>I designed the new wheel and its screens in <b>Figma</b>, then built it in <b>Nuxt</b>, adding <b>sound</b> and <b>animated elements</b> to the interface.</p>
        <p>At the 2025 Foire du Pacifique, the wheel drew <strong>119 players</strong> to the stand and collected <strong>35 leads</strong> for Lagoon.</p>
      </Contexte>

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'The old wheel',
            texte: 'The original wheel did the job, but it was very basic, with blue and white segments with emojis, a grey background and a small “Play” button under the wheel.',
            image: { src: `${img}/ancienne-roue.webp`, alt: 'The old Lagoon wheel: blue and white segments with emojis, on a grey background, and a Play button underneath', width: 751, height: 529 },
          },
          {
            titre: 'The new wheel in Figma',
            texte: "I redrew the wheel in Lagoon's world, with a blue background full of bubbles and clownfish, an orange-rimmed wheel, an icon and a name for each prize, and the “Play” button in the centre of the wheel. The Lagoon and Foire du Pacifique logos sign off the screen.",
            image: { src: `${img}/roue.webp`, alt: 'The new wheel: illustrated prizes, orange rim and Play button in the centre', ...ecran },
            liens: [{ href: figma, label: 'See the Figma mockups' }],
          },
          {
            titre: 'The game flow',
            texte: 'I added a welcome screen, “The Lagoon Big Wheel”, with a “Let\'s play” button, and a result screen announcing the prize won, with a button to play again.',
            images: [
              { src: `${img}/ecran-accueil.webp`, alt: 'The welcome screen: “Lagoon presents The Lagoon Big Wheel” and a Let\'s play button', ...ecran },
              { src: `${img}/ecran-victoire.webp`, alt: 'The win screen: “Well done!! You won a stress-relief fish”, surrounded by clownfish, and a Play again button', ...ecran },
            ],
          },
          {
            titre: 'Building it in Nuxt',
            texte: 'I then built the wheel in Nuxt. To make it more lively, I added sound and animated elements. The result at the 2025 Foire du Pacifique: 119 players and 35 leads.',
            image: { src: `${img}/roue.webp`, alt: 'The new Lagoon wheel, ready to spin', ...ecran },
          },
        ]}
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'UI design',
            texte: "A more modern, more fun stand game, in Lagoon's world.",
            competences: ['Figma mockups', 'Prize icons', 'Game flow'],
          },
          {
            titre: 'Front-end dev',
            texte: 'A built, animated wheel, ready for the fair.',
            competences: ['Nuxt (Vue.js)', 'Animations', 'Sound'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="The wheel in pictures"
        intro="The wheel before / after (hover to compare) and the screens of the game flow. The interface is in French."
        filtres={[
          { id: 'avant-apres', label: 'Before / after' },
          { id: 'ecrans', label: 'Screens' },
        ]}
        items={[
          {
            cat: 'avant-apres',
            legende: 'The wheel · after / before',
            images: [
              { src: `${img}/roue.webp`, alt: 'The new Lagoon wheel', ...ecran },
              { src: `${img}/ancienne-roue.webp`, alt: 'The old Lagoon wheel', width: 751, height: 529 },
            ],
          },
          { cat: 'ecrans', legende: 'The welcome screen', images: [{ src: `${img}/ecran-accueil.webp`, alt: 'The welcome screen of the Lagoon Big Wheel', ...ecran }] },
          { cat: 'ecrans', legende: 'The wheel', images: [{ src: `${img}/roue.webp`, alt: 'The new wheel and its prizes', ...ecran }] },
          { cat: 'ecrans', legende: 'The win screen', images: [{ src: `${img}/ecran-victoire.webp`, alt: 'The win screen with the prize won', ...ecran }] },
        ]}
      />

      <Liens lang={lang} liens={[{ href: figma, label: 'Figma mockups' }]} />
    </ProjectLayout>
  );
}
