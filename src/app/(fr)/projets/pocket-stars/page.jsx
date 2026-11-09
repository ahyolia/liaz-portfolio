// Fiche projet Pocket Stars. Contenu tiré du README du dépôt
// https://github.com/ahyolia/PocketStars ; captures faites sur la démo en ligne.
import ProjectLayout from '../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../components/projet/CaseHero';
import Contexte from '../../../../components/projet/Contexte';
import Demarche from '../../../../components/projet/Demarche';
import Apport from '../../../../components/projet/Apport';
import Galerie from '../../../../components/projet/Galerie';
import Video from '../../../../components/projet/Video';
import Liens from '../../../../components/projet/Liens';

const img = '/images/projets/pocket-stars';
const demo = 'https://pocketstarss.netlify.app';
const github = 'https://github.com/ahyolia/PocketStars';
const dossier = 'https://github.com/ahyolia/PocketStars/blob/main/docs/Pocket%20Stars%20-%20Dossier%20de%20pr%C3%A9paration.pdf';
const capture = { width: 1440, height: 900 };

export const metadata = {
  title: 'Pocket Stars, cartes Pokémon en 3D — Camélia Amin Handoyo',
  description:
    'Pocket Stars, exploration 3D de cartes Pokémon sous un ciel étoilé, avec React, Three.js et l’API TCGdex.',
};

export default function Page() {
  return (
    <ProjectLayout slug="pocket-stars">
      <CaseHero
        slug="pocket-stars"
        eyebrow="Expérience web 3D"
        titre="Pocket Stars, un ciel où chaque étoile cache une carte"
        accroche="On se promène sur une île flottante, on clique sur une étoile, et une carte Pokémon descend se révéler en 3D."
        couleur="#E3DDFB"
        liens={[
          { href: demo, label: 'Jouer à la démo' },
          { href: github, label: 'Code sur GitHub' },
        ]}
      >
        <img src={`${img}/carte-alakazam.webp`} alt="Révélation d'une carte Alakazam holographique, avec la réaction du compagnon Mimikyu" width={capture.width} height={capture.height} data-depth="0.4" style={{ width: '92%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>1 étoile = 1 carte</span>
        <img className="floaty floaty--card" src={`${img}/pocketstars-mobile.webp`} alt="" width="302" height="654" data-depth="1.6" style={{ '--x': '78%', '--y': '18%', '--r': '8deg', '--size': '6.5rem', '--delay': '-3s', border: '4px solid var(--ink)', borderRadius: '1rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '72%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>Shuffle !</span>
      </CaseHero>

      <Contexte
        outils={[
          { nom: 'React', icone: '/images/tools/react.svg' },
          { nom: 'JavaScript', icone: '/images/tools/javascript.svg' },
          { nom: 'CSS', icone: '/images/tools/css3.svg' },
          { nom: 'Git', icone: '/images/tools/git.svg' },
        ]}
        fiche={[
          { label: 'Cadre', valeur: 'Cours de développement front, BUT MMI 3' },
          { label: 'Durée', valeur: 'septembre → octobre 2026' },
          { label: 'Équipe', valeur: 'Projet solo' },
          { label: 'Mon rôle', valeur: 'Conception, design et développement' },
          { label: 'Outils', valeur: 'React, Vite, Three.js (React Three Fiber), API TCGdex, Web Audio' },
        ]}
        statut="En ligne"
      >
        <p>Pocket Stars est né dans le <b>cours de Développement Front</b> de ma 3<sup>e</sup> année de BUT MMI. La consigne était d'utiliser une <b>API publique</b> et de construire une <b>scène 3D</b> pour l'illustrer.</p>
        <p>On marche à la première personne sur une <b>île flottante</b>, sous un ciel de nuit. <b>Chaque étoile cache une carte</b>. Un clic la fait descendre, et la carte <b>se retourne en 3D</b>, commentée par Mimikyu, le compagnon.</p>
        <p>J'ai choisi les <b>cartes Pokémon</b> et l'<b>API TCGdex</b>. Je voulais faire de la découverte d'une carte <span className="hl">un petit moment de surprise</span>, <b>sur ordinateur comme sur téléphone</b>.</p>
      </Contexte>

      <Demarche
        etapes={[
          {
            titre: 'Dossier de conception et planning',
            texte: "J'ai commencé par un dossier de préparation. Il réunit le choix de l'API et des technologies, le moodboard, l'arborescence, les maquettes, le schéma des données et un planning qui prévoit les risques et des marges de sécurité.",
            images: [
              { src: `${img}/dossier-couverture.webp`, alt: "Couverture du dossier de préparation de Pocket Stars", width: 1100, height: 1556 },
              { src: `${img}/dossier-maquettes.webp`, alt: "Page Maquettes du dossier : croquis au crayon et maquettes de l'interface", width: 1100, height: 1556 },
              { src: `${img}/dossier-planning.webp`, alt: "Page Planning du dossier : diagramme de Gantt et risques du projet", width: 1100, height: 1556 },
            ],
            liens: [{ href: dossier, label: 'Lire le dossier de préparation (PDF)' }],
          },
          {
            titre: "L'asset 3D de l'étoile",
            texte: "Pour l'étoile, j'ai choisi un modèle 3D libre de droits, « Star » de J-Toastie, trouvé sur Poly Pizza. Le même modèle sert pour toutes les étoiles, qui ne trahissent pas la carte qu'elles cachent.",
            image: { src: `${img}/etoile.webp`, alt: "Le modèle 3D « Star » de J-Toastie sur Poly Pizza, une étoile jaune aux branches arrondies", width: 1534, height: 768 },
          },
          {
            titre: 'La scène et les étoiles',
            texte: "J'ai construit l'île flottante sous un ciel de nuit, avec le champ d'étoiles et les étoiles filantes, puis placé 50 étoiles-cartes tirées parmi 250 cartes de l'API TCGdex.",
            image: { src: `${img}/ciel.webp`, alt: "L'île flottante sous un ciel de nuit rempli d'étoiles, avec la recherche, les commandes du son et Mimikyu", width: 1534, height: 744 },
          },
          {
            titre: 'Les interactions',
            texte: "Le déplacement à la première personne (ZQSD ou WASD, regard à la souris sans clic), puis le clic sur une étoile. La carte descend alors face cachée, se retourne et se manipule. Les cartes rares ont un reflet holographique.",
            image: { src: `${img}/carte-alakazam.webp`, alt: "Révélation d'une carte Alakazam rare, avec son reflet holographique", ...capture },
          },
          {
            titre: 'Les fonctionnalités',
            texte: "La recherche par nom dans toute la base, le bouton Shuffle, Mimikyu qui commente chaque carte, la musique générée en code, et un recto de remplacement quand une image est refusée par le serveur.",
            image: { src: `${img}/carte-chenipan.webp`, alt: 'Révélation de la carte Caterpie, commentée par Mimikyu', ...capture },
          },
          {
            titre: 'Le mobile',
            texte: "Pour finir, j'ai adapté l'expérience au téléphone et à la tablette, avec une mise en page responsive, un joystick virtuel pour marcher, un glissement du doigt pour regarder et le plein écran au premier toucher.",
            images: [
              { src: `${img}/pocketstars-mobile.webp`, alt: "Pocket Stars sur téléphone : ciel étoilé, boutons de recherche et de son, joystick virtuel et Mimikyu", width: 302, height: 654 },
              { src: `${img}/pocketstars-mobile2.webp`, alt: "Pocket Stars sur téléphone : révélation d'Arcanine, carte holo rare affichée avec son recto de remplacement, et la réaction de Mimikyu", width: 298, height: 654 },
            ],
          },
        ]}
      />

      <Video
        intro="Un clic sur une étoile, la carte qui descend et se retourne, puis d’autres cartes pour entendre la musique et voir réagir Mimikyu."
        src={`${img}/demo-revelation-son.webm`}
        poster={`${img}/demo-revelation-poster.webp`}
        width={1280}
        height={620}
        legende="Enregistrement de la démo de Pocket Stars, avec le déplacement sur l'île, clic sur des étoiles et révélation de cartes Pokémon en 3D"
      />

      <Apport
        casquettes={[
          {
            titre: 'Dev front 3D',
            texte: "Une scène 3D écrite en React, du ciel jusqu'au reflet des cartes.",
            competences: ['React', 'Three.js · React Three Fiber', 'Shader holographique', 'API TCGdex', 'Web Audio API', 'Responsive et tactile'],
          },
          {
            titre: 'Game et UX design',
            texte: 'Une exploration simple à prendre en main, avec une touche de surprise.',
            competences: ['Déplacement à la 1re personne', 'Compagnon Mimikyu', 'Interface « cartoon »', 'Mouvements réduits respectés'],
          },
        ]}
      />

      <Galerie
        titre="Pocket Stars en images"
        intro="Quelques captures de la démo en ligne, avec l'île, son ciel et des cartes révélées."
        filtres={[
          { id: 'exploration', label: 'Exploration' },
          { id: 'cartes', label: 'Cartes' },
          { id: 'mobile', label: 'Mobile' },
          { id: 'conception', label: 'Conception' },
        ]}
        items={[
          { cat: 'exploration', legende: "L'île et son ciel d'étoiles", images: [{ src: `${img}/ciel.webp`, alt: "L'île flottante sous un ciel de nuit rempli d'étoiles", width: 1534, height: 744 }] },
          { cat: 'cartes', legende: 'Alakazam, carte rare holographique', images: [{ src: `${img}/carte-alakazam.webp`, alt: "Révélation d'une carte Alakazam rare et holographique", ...capture }] },
          { cat: 'cartes', legende: 'Caterpie, carte commune', images: [{ src: `${img}/carte-chenipan.webp`, alt: 'Révélation de la carte Caterpie, commune', ...capture }] },
          { cat: 'cartes', legende: 'Recto de remplacement', images: [{ src: `${img}/carte-remplacement.webp`, alt: 'Recto de remplacement « Image indisponible »', ...capture }] },
          { cat: 'mobile', legende: 'Sur téléphone, avec le joystick', images: [{ src: `${img}/pocketstars-mobile.webp`, alt: "Pocket Stars sur téléphone : ciel étoilé, boutons de recherche et de son, joystick virtuel et Mimikyu", width: 302, height: 654 }] },
          { cat: 'mobile', legende: 'Révélation sur téléphone', images: [{ src: `${img}/pocketstars-mobile2.webp`, alt: "Pocket Stars sur téléphone : révélation d'Arcanine, carte holo rare affichée avec son recto de remplacement, et la réaction de Mimikyu", width: 298, height: 654 }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : moodboard', images: [{ src: `${img}/dossier-moodboard.webp`, alt: "Page Moodboard du dossier : cartes holographiques, étoiles et ambiance visuelle", width: 1100, height: 1556 }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : maquettes', images: [{ src: `${img}/dossier-maquettes.webp`, alt: "Page Maquettes du dossier : croquis au crayon et maquettes de l'interface", width: 1100, height: 1556 }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : planning', images: [{ src: `${img}/dossier-planning.webp`, alt: "Page Planning du dossier : diagramme de Gantt et risques du projet", width: 1100, height: 1556 }] },
        ]}
      />

      <Liens
        liens={[
          { href: demo, label: 'Démo en ligne' },
          { href: github, label: 'GitHub' },
          { href: dossier, label: 'Dossier de préparation (PDF)' },
        ]}
      />
    </ProjectLayout>
  );
}
