// Fiche projet Windtell. Contenu tiré du dossier de conception (SAÉ 302,
// BUT MMI 2), du README du dépôt https://github.com/ahyolia/Windtell
// et des photos de fabrication et du forum jeu.
import ProjectLayout from '../../../components/projet/ProjectLayout';
import CaseHero from '../../../components/projet/CaseHero';
import Contexte from '../../../components/projet/Contexte';
import Demarche from '../../../components/projet/Demarche';
import Apport from '../../../components/projet/Apport';
import Galerie from '../../../components/projet/Galerie';
import Liens from '../../../components/projet/Liens';

const img = '/images/projets/windtell';
const appli = 'https://windtell.vercel.app';
const github = 'https://github.com/ahyolia/Windtell';
const dossier = `${img}/dossier-de-conception.pdf`;
const page = { width: 1100, height: 1556 };
const photo = { width: 1400, height: 1050 };
const photoPortrait = { width: 1050, height: 1400 };
const ecran = { width: 1136, height: 640 };

export const metadata = {
  title: 'Windtell, un jeu de société entre plateau et cartes numériques — Camélia Amin Handoyo',
  description:
    'Windtell, jeu de société créé pour le forum jeu du BUT MMI 2, avec un plateau rotatif fabriqué au FabLab, des énigmes calédoniennes et des cartes numériques.',
};

export default function Page() {
  return (
    <ProjectLayout slug="windtell">
      <CaseHero
        slug="windtell"
        eyebrow="Jeu de société"
        titre="Windtell, une île flottante où le vent décide"
        accroche="Un jeu de plateau à quatre niveaux qui tournent, des pions d'animaux calédoniens, et des cartes d'énigmes à tirer sur le téléphone."
        couleur="#E6E4F5"
        liens={[
          { href: appli, label: "Tirer une carte dans l'appli" },
          { href: dossier, label: 'Lire le dossier de conception' },
        ]}
      >
        <img src={`${img}/partie-test.webp`} alt="Une partie de Windtell : le plateau bleu à nuages, les pions, le dé et les cartes" {...photo} data-depth="0.4" style={{ width: '92%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>Forum jeu 2025</span>
        <img className="floaty floaty--card" src={`${img}/jeu-final.webp`} alt="" width="640" height="1136" data-depth="1.6" style={{ '--x': '80%', '--y': '14%', '--r': '8deg', '--size': '6rem', '--delay': '-3s', border: '4px solid var(--ink)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '58%', '--y': '86%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>Puisse le vent tourner en votre faveur !</span>
      </CaseHero>

      <Contexte
        outils={[
          { nom: 'Illustrator', icone: '/images/tools/illustrator.svg' },
          { nom: 'Photoshop', icone: '/images/tools/photoshop.svg' },
          { nom: 'InDesign', icone: '/images/tools/indesign.svg' },
          { nom: 'React', icone: '/images/tools/react.svg' },
        ]}
        fiche={[
          { label: 'Cadre', valeur: 'SAÉ 302, BUT MMI 2, forum des jeux de société' },
          { label: 'Durée', valeur: 'mars → avril 2025' },
          { label: 'Équipe', valeur: 'Elitz, avec Magalie Chen et Geneviève Mekenese' },
          { label: 'Mon rôle', valeur: 'Conception, fabrication, branding et communication, en trio' },
          { label: 'Outils', valeur: 'Suite Adobe, modélisation et impression 3D, découpe laser, React Native (Expo)' },
        ]}
        statut="Présenté au forum jeu"
      >
        <p>Windtell est le jeu de société que nous avons créé à trois pour la SAÉ 302 de ma 2<sup>e</sup> année de BUT MMI, et présenté au forum des jeux de société de la formation, le 4 avril 2025.</p>
        <p>La commande : concevoir et fabriquer un jeu complet, avec <span className="hl">une innovation technologique</span> et des éléments de la Nouvelle-Calédonie, puis réaliser sa communication.</p>
        <p>Six âmes sont transportées par les esprits sur une île flottante au-dessus des eaux calédoniennes. Sur un plateau à quatre niveaux qui tournent, entre énigmes, événements et duels, le premier à atteindre le centre gagne. Les cartes se tirent aussi sur une appli web.</p>
      </Contexte>

      <Demarche
        etapes={[
          {
            titre: 'Le concept et le récit',
            texte: "Après une veille sur les jeux de société, nous avons trouvé le concept en brainstorming : un jeu de survie sur un plateau en mouvement, inspiré de Fall Guys, de Hunger Games et des mythes calédoniens, puis écrit son récit.",
            images: [
              { src: `${img}/croquis-plateau.webp`, alt: 'Croquis du plateau circulaire et de ses niveaux, au crayon de couleur', ...photoPortrait },
              { src: `${img}/croquis-composants.webp`, alt: 'Croquis annoté du dé et des composants du jeu', ...photoPortrait },
              { src: `${img}/dossier-narratif.webp`, alt: 'Page Conception narrative du dossier : synopsis et éléments du récit', ...page },
            ],
            liens: [{ href: dossier, label: 'Lire le dossier de conception (PDF)' }],
          },
          {
            titre: 'Les règles et les énigmes',
            texte: "Nous avons écrit les règles et les trois paquets de cartes : énigmes (charades, devinettes, QCM sur la culture, la faune et les légendes calédoniennes), événements qui changent le plateau, et cartes Master pour défier les joueurs proches de la victoire.",
            images: [
              { src: `${img}/dossier-mecaniques.webp`, alt: 'Page Mécanismes du jeu du dossier : objectif, cartes et page de règles', ...page },
              { src: `${img}/dossier-enigmes.webp`, alt: 'Page Rédaction des énigmes du dossier : processus et types d’énigmes', ...page },
            ],
          },
          {
            titre: 'Le prototype en carton',
            texte: "Avant de fabriquer, nous avons testé le plateau en carton : quatre disques superposés qui tournent, assemblés en puzzle pour être transportés facilement.",
            images: [
              { src: `${img}/prototype-dessin.webp`, alt: 'Tracé des disques du plateau sur une plaque de carton', ...photoPortrait },
              { src: `${img}/prototype-carton.webp`, alt: 'Le prototype en carton : quatre niveaux circulaires superposés, avec deux pions', ...photo },
            ],
          },
          {
            titre: 'Le plateau au FabLab',
            texte: "Au FabLab, les disques en bois ont été découpés au laser, poncés puis peints en bleu nuit, avec les nuages où avancent les pions.",
            images: [
              { src: `${img}/fablab-laser.webp`, alt: 'La découpeuse laser du FabLab en train de graver une plaque de bois', ...photo },
              { src: `${img}/poncage.webp`, alt: "Ponçage d'un disque en bois du plateau", width: 1400, height: 788 },
              { src: `${img}/disques-peints.webp`, alt: 'Les disques du plateau peints en bleu, avec leurs nuages blancs', ...ecran },
            ],
          },
          {
            titre: 'Les pions et les dés',
            texte: "Les pions représentent des animaux de Nouvelle-Calédonie, parfois endémiques. Nous les avons modélisés en 3D avec les dés, puis imprimés et peints.",
            images: [
              { src: `${img}/modelisation-pions.webp`, alt: 'Modélisation 3D des pions : poissons, tortue, raie et autres animaux calédoniens', ...photo },
              { src: `${img}/modelisation-3d.webp`, alt: "Modélisation 3D d'un pion sur ordinateur", ...ecran },
            ],
          },
          {
            titre: 'Les cartes',
            texte: "Les cartes ont été dessinées dans Illustrator puis mises en page pour l'impression : un dos à nuage pour chaque paquet, et le texte des énigmes, des événements et des cartes Master.",
            images: [
              { src: `${img}/cartes-illustrator.webp`, alt: 'Dessin des cartes à nuage dans Illustrator', ...ecran },
              { src: `${img}/cartes-mise-en-page.webp`, alt: "Planche d'impression des cartes", ...ecran },
            ],
          },
          {
            titre: 'Les cartes numériques',
            texte: "Notre innovation technologique : une appli web en React Native où l'on tire au hasard une carte du paquet choisi, avec un bouton pour révéler la réponse des énigmes. Une fois les paquets vides, on les remélange.",
            image: { src: `${img}/appli-cartes.webp`, alt: "L'appli Windtell : le logo, le slogan et les trois paquets de cartes à tirer", width: 1440, height: 900 },
            liens: [{ href: appli, label: "Ouvrir l'appli" }],
          },
          {
            titre: 'Le branding et la communication',
            texte: "Nous avons créé l'identité du jeu : une palette céleste, un logo en esprit du vent mesquin, un nuage aux expressions changeantes, et le slogan « Puisse le vent tourner en votre faveur ! ». Elle se retrouve sur les cartes, l'appli et nos t-shirts floqués.",
            images: [
              { src: `${img}/dossier-branding.webp`, alt: 'Page Branding du dossier : moodboard, logo et brandboard', ...page },
              { src: `${img}/dossier-cartes.webp`, alt: 'Page Fabrication du dossier : impression des cartes et flocage des t-shirts', ...page },
            ],
          },
          {
            titre: 'Le forum jeu',
            texte: "Le 4 avril 2025, nous avons fait jouer les visiteurs du forum. En les observant, nous avons changé une face « énigme » du dé en « avancer d'un nuage » : trop d'énigmes ralentissaient la partie.",
            images: [
              { src: `${img}/forum-table.webp`, alt: 'Des joueurs autour du plateau de Windtell au forum jeu', ...photoPortrait },
              { src: `${img}/forum-partie.webp`, alt: "Une partie en cours au forum, avec l'équipe en t-shirts Windtell", ...photoPortrait },
            ],
          },
        ]}
      />

      <Apport
        casquettes={[
          {
            titre: 'Game design',
            texte: 'Un jeu complet, du concept aux ajustements faits devant les joueurs.',
            competences: ['Concept et récit', 'Règles et mécaniques', 'Écriture d’énigmes', 'Tests avec les joueurs'],
          },
          {
            titre: 'Fabrication',
            texte: 'Un plateau, des pions et des dés faits main, du carton au bois peint.',
            competences: ['Prototypage', 'Découpe laser', 'Modélisation et impression 3D', 'Peinture'],
          },
          {
            titre: 'Design graphique et dev',
            texte: "Une identité qui relie le jeu physique à l'appli.",
            competences: ['Branding', 'Illustrator, Photoshop, InDesign', 'Impression des cartes', 'React Native'],
          },
        ]}
      />

      <Galerie
        titre="Windtell en images"
        intro="Le jeu terminé, sa fabrication, quelques pages du dossier de conception et le forum jeu."
        filtres={[
          { id: 'jeu', label: 'Le jeu' },
          { id: 'fabrication', label: 'Fabrication' },
          { id: 'conception', label: 'Conception' },
          { id: 'forum', label: 'Forum' },
        ]}
        items={[
          { cat: 'jeu', legende: 'Le jeu complet', images: [{ src: `${img}/jeu-final.webp`, alt: 'Le plateau terminé, les pions animaux, les dés et les cartes', width: 640, height: 1136 }] },
          { cat: 'jeu', legende: 'Une partie de test', images: [{ src: `${img}/partie-test.webp`, alt: 'Une partie de test autour du plateau', ...photo }] },
          { cat: 'jeu', legende: "L'appli des cartes", images: [{ src: `${img}/appli-cartes.webp`, alt: "L'appli Windtell et ses trois paquets de cartes", width: 1440, height: 900 }] },
          { cat: 'fabrication', legende: 'Le prototype en carton', images: [{ src: `${img}/prototype-carton.webp`, alt: 'Le prototype du plateau en carton', ...photo }] },
          { cat: 'fabrication', legende: 'Un disque découpé au laser', images: [{ src: `${img}/disque-bois.webp`, alt: 'Un disque en bois découpé au laser, avec ses nuages', ...ecran }] },
          { cat: 'fabrication', legende: 'Les disques peints', images: [{ src: `${img}/disques-peints.webp`, alt: 'Les disques du plateau peints en bleu', ...ecran }] },
          { cat: 'fabrication', legende: 'Les pions en 3D', images: [{ src: `${img}/modelisation-pions.webp`, alt: 'Modélisation 3D des pions animaux', ...photo }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : couverture', images: [{ src: `${img}/dossier-couverture.webp`, alt: 'Couverture du dossier de conception de Windtell', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : plateau et composants', images: [{ src: `${img}/dossier-plateau.webp`, alt: 'Page Design du plateau et des composants du dossier', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : impression 3D', images: [{ src: `${img}/dossier-impression-3d.webp`, alt: 'Page Modélisation et impression 3D des dés et pions du dossier', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : peinture', images: [{ src: `${img}/dossier-peinture.webp`, alt: 'Page Découpage, ponçage et peinture du dossier', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : appli', images: [{ src: `${img}/dossier-appli.webp`, alt: "Page Intégration technologique du dossier : l'appli des cartes numériques", ...page }] },
          { cat: 'forum', legende: 'Le plateau au forum', images: [{ src: `${img}/forum-plateau.webp`, alt: 'Le plateau, les cartes et un téléphone avec l’appli, sur la table du forum', ...photoPortrait }] },
          { cat: 'forum', legende: 'Des joueurs autour du plateau', images: [{ src: `${img}/forum-table.webp`, alt: 'Des joueurs autour du plateau de Windtell au forum jeu', ...photoPortrait }] },
          { cat: 'forum', legende: 'Une partie au forum', images: [{ src: `${img}/forum-partie.webp`, alt: "Une partie en cours au forum, avec l'équipe en t-shirts Windtell", ...photoPortrait }] },
        ]}
      />

      <Liens
        liens={[
          { href: appli, label: 'Appli des cartes' },
          { href: github, label: 'GitHub' },
          { href: dossier, label: 'Dossier de conception (PDF)' },
        ]}
      />
    </ProjectLayout>
  );
}
