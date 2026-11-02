// Fiche projet : refonte de la roue de la chance Lagoon pour la Foire du Pacifique,
// pendant mon stage de BUT MMI 2 chez OFFRATEL Lagoon (2025). Visuels : l'ancienne
// roue et les écrans de la nouvelle (maquettes Figma).
import ProjectLayout from '../../../components/projet/ProjectLayout';
import CaseHero from '../../../components/projet/CaseHero';
import Contexte from '../../../components/projet/Contexte';
import Demarche from '../../../components/projet/Demarche';
import Apport from '../../../components/projet/Apport';
import Galerie from '../../../components/projet/Galerie';
import Liens from '../../../components/projet/Liens';

const img = '/images/projets/luckywheel-lagoon';
const figma = 'https://www.figma.com/design/vb7YuVog7lIFdx1NNIS32A/Lagoon---Lucky-wheel?node-id=0-1';
const ecran = { width: 1364, height: 922 };

export const metadata = {
  title: 'La Grande Roue Lagoon, un jeu pour la Foire du Pacifique — Camélia Amin Handoyo',
  description:
    "Refonte de la roue de la chance de Lagoon pour la Foire du Pacifique : maquettes Figma, puis intégration en Nuxt avec du son et des animations, pendant mon stage chez OFFRATEL Lagoon.",
};

export default function Page() {
  return (
    <ProjectLayout slug="luckywheel-lagoon">
      <CaseHero
        slug="luckywheel-lagoon"
        eyebrow="Jeu interactif · stage"
        titre="La Grande Roue Lagoon, plus moderne et plus fun"
        accroche="Pour le stand Lagoon de la Foire du Pacifique, j'ai repensé la roue de la chance sur Figma, puis je l'ai intégrée en Nuxt, avec du son et des animations."
        couleur="#FFE2C7"
        liens={[{ href: figma, label: 'Voir les maquettes Figma' }]}
      >
        <img src={`${img}/roue.webp`} alt="La nouvelle roue Lagoon : fond bleu avec bulles et poissons-clowns, roue orange avec les lots et un bouton Jouer au centre" {...ecran} data-depth="0.4" style={{ width: '92%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>Foire du Pacifique</span>
        <img className="floaty floaty--card" src={`${img}/ecran-victoire.webp`} alt="" {...ecran} data-depth="1.6" style={{ '--x': '70%', '--y': '66%', '--r': '6deg', '--size': '10rem', '--delay': '-3s', border: '4px solid var(--paper)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '6%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>119 participants</span>
      </CaseHero>

      <Contexte
        outils={[
          { nom: 'Figma', icone: '/images/tools/figma.svg' },
          { nom: 'Vue.js', icone: '/images/tools/vuejs.svg' },
        ]}
        fiche={[
          { label: 'Cadre', valeur: 'Stage de 2 mois (BUT MMI 2), pôle numérique d’OFFRATEL Lagoon' },
          { label: 'Durée', valeur: 'septembre → novembre 2025' },
          { label: 'Mon rôle', valeur: 'UI design et intégration front' },
          { label: 'Outils', valeur: 'Figma, Nuxt (Vue.js)' },
          { label: 'Participants', valeur: '119' },
          { label: 'Prospects', valeur: '35' },
        ]}
        statut="Foire du Pacifique 2025"
      >
        <p>À la Foire du Pacifique, le stand Lagoon propose aux visiteurs de tenter leur chance sur une roue : stylo, paréo, chapeau, ballon de plage, poisson anti-stress… ou un mois d'abonnement.</p>
        <p>C'était ma deuxième mission pendant mon stage de 2<sup>e</sup> année de BUT MMI chez OFFRATEL Lagoon. On m'a confié la refonte de la roue. L'objectif : <span className="hl">la moderniser et la rendre plus fun</span>.</p>
        <p>J'ai dessiné la nouvelle roue et ses écrans sur Figma, puis je l'ai intégrée en Nuxt, en ajoutant du son et des éléments animés à l'interface.</p>
        <p>À la Foire du Pacifique 2025, la roue a attiré <strong>119 participants</strong> sur le stand et permis de recueillir <strong>35 prospects</strong> pour Lagoon.</p>
      </Contexte>

      <Demarche
        etapes={[
          {
            titre: "L'ancienne roue",
            texte: "La roue d'origine faisait le travail, mais restait très simple : des parts bleues et blanches avec des emojis, un fond gris et un petit bouton « Jouer » sous la roue.",
            image: { src: `${img}/ancienne-roue.webp`, alt: "L'ancienne roue Lagoon : parts bleues et blanches avec des emojis, sur fond gris, et un bouton Jouer en dessous", width: 751, height: 529 },
          },
          {
            titre: 'La nouvelle roue sur Figma',
            texte: "J'ai redessiné la roue dans l'univers de Lagoon : un fond bleu avec des bulles et des poissons-clowns, une roue cerclée d'orange, un picto et un nom pour chaque lot, et le bouton « Jouer » au centre de la roue. Les logos Lagoon et Foire du Pacifique signent l'écran.",
            image: { src: `${img}/roue.webp`, alt: 'La nouvelle roue : lots illustrés, cercle orange et bouton Jouer au centre', ...ecran },
            liens: [{ href: figma, label: 'Voir les maquettes Figma' }],
          },
          {
            titre: 'Le parcours de jeu',
            texte: "J'ai ajouté un écran d'accueil, « La Grande Roue Lagoon », avec un bouton « Je joue », et un écran de résultat qui annonce le lot gagné, avec un bouton pour rejouer.",
            images: [
              { src: `${img}/ecran-accueil.webp`, alt: "L'écran d'accueil : « Lagoon présente La Grande Roue Lagoon » et un bouton Je joue", ...ecran },
              { src: `${img}/ecran-victoire.webp`, alt: "L'écran de victoire : « Bravo !! Vous avez gagné un poisson anti-stress », entouré de poissons-clowns, et un bouton Rejouer", ...ecran },
            ],
          },
          {
            titre: "L'intégration en Nuxt",
            texte: "J'ai ensuite intégré la roue en Nuxt. Pour la rendre plus vivante, j'y ai ajouté du son et des éléments animés. Résultat à la Foire du Pacifique 2025 : 119 participants et 35 prospects.",
            image: { src: `${img}/roue.webp`, alt: 'La nouvelle roue Lagoon, prête à tourner', ...ecran },
          },
        ]}
      />

      <Apport
        casquettes={[
          {
            titre: 'UI design',
            texte: 'Un jeu de stand plus moderne et plus fun, dans l’univers de Lagoon.',
            competences: ['Maquettes Figma', 'Pictos des lots', 'Parcours de jeu'],
          },
          {
            titre: 'Dev front',
            texte: 'Une roue intégrée et animée, prête pour la foire.',
            competences: ['Nuxt (Vue.js)', 'Animations', 'Son'],
          },
        ]}
      />

      <Galerie
        titre="La roue en images"
        intro="La roue avant / après (survolez pour comparer) et les écrans du parcours de jeu."
        filtres={[
          { id: 'avant-apres', label: 'Avant / après' },
          { id: 'ecrans', label: 'Écrans' },
        ]}
        items={[
          {
            cat: 'avant-apres',
            legende: 'La roue · après / avant',
            images: [
              { src: `${img}/roue.webp`, alt: 'La nouvelle roue Lagoon', ...ecran },
              { src: `${img}/ancienne-roue.webp`, alt: "L'ancienne roue Lagoon", width: 751, height: 529 },
            ],
          },
          { cat: 'ecrans', legende: "L'écran d'accueil", images: [{ src: `${img}/ecran-accueil.webp`, alt: "L'écran d'accueil de la Grande Roue Lagoon", ...ecran }] },
          { cat: 'ecrans', legende: 'La roue', images: [{ src: `${img}/roue.webp`, alt: 'La nouvelle roue et ses lots', ...ecran }] },
          { cat: 'ecrans', legende: "L'écran de victoire", images: [{ src: `${img}/ecran-victoire.webp`, alt: "L'écran de victoire avec le lot gagné", ...ecran }] },
        ]}
      />

      <Liens liens={[{ href: figma, label: 'Maquettes Figma' }]} />
    </ProjectLayout>
  );
}
