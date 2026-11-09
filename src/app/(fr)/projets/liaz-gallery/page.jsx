// Fiche projet LiAZ Gallery. Contenu tiré du README du dépôt
// https://github.com/ahyolia/LiAZ-Gallery et de la fiche de réflexion du projet
// Version 1.1 (novembre 2026) : recherche vocale libre transcrite en local par Whisper.
import ProjectLayout from '../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../components/projet/CaseHero';
import Contexte from '../../../../components/projet/Contexte';
import Demarche from '../../../../components/projet/Demarche';
import Apport from '../../../../components/projet/Apport';
import Video from '../../../../components/projet/Video';
import Galerie from '../../../../components/projet/Galerie';
import Liens from '../../../../components/projet/Liens';

const github = 'https://github.com/ahyolia/LiAZ-Gallery';
const release = 'https://github.com/ahyolia/LiAZ-Gallery/releases/tag/v1.1';
const img = '/images/projets/liaz-gallery';

export const metadata = {
  title: 'LiAZ Gallery, galerie 3D à commande vocale — Camélia Amin Handoyo',
  description:
    "LiAZ Gallery, galerie d'images en 3D pilotée à la voix, développée avec Unity 6, C#, l'API Serper et Whisper en local.",
};

export default function Page() {
  return (
    <ProjectLayout slug="liaz-gallery">
      <CaseHero
        slug="liaz-gallery"
        eyebrow="3D interactive"
        titre="LiAZ Gallery, une galerie 3D qu'on pilote à la voix"
        accroche="On dit ce qu'on cherche, et les images trouvées sur le web s'accrochent aux murs."
        couleur="#D7F2F3"
        liens={[
          { href: release, label: 'Télécharger la v1.1 (Windows)' },
          { href: github, label: 'Code sur GitHub' },
        ]}
      >
        <img src="/images/projets/liaz-gallery/gallerie.webp" alt="La galerie LiAZ : salle d'exposition avec des tableaux aux murs et des canapés, consignes de recherche vocale et de déplacement affichées à l'écran" width="1534" height="862" data-depth="0.4" style={{ width: '90%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.5)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '0%', '--y': '4%', '--r': '-8deg', '--size': 'auto' }}>« recherche… »</span>
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '70%', '--y': '82%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>« … et pause »</span>
        <img className="floaty floaty--icon" src="/images/tools/unity.svg" alt="" width="48" height="48" data-depth="1.2" style={{ '--x': '84%', '--y': '0%', '--r': '10deg', '--size': '3.5rem', '--delay': '-4s', background: 'var(--paper)', padding: '0.6rem' }} />
      </CaseHero>

      <Contexte
        outils={[
          { nom: 'Unity', icone: '/images/tools/unity.svg' },
          { nom: 'C#', icone: '/images/tools/csharp.svg' },
          { nom: 'Visual Studio Code', icone: '/images/tools/vscode.svg' },
          { nom: 'Git', icone: '/images/tools/git.svg' },
        ]}
        fiche={[
          { label: 'Cadre', valeur: 'Cours XR et Interactions, BUT MMI 3' },
          { label: 'Année', valeur: '2026' },
          { label: 'Équipe', valeur: 'Projet solo' },
          { label: 'Mon rôle', valeur: 'Conception et développement' },
          { label: 'Outils', valeur: 'Unity 6 (URP), C#, UnityWebRequest, API Serper, reconnaissance vocale Windows, Whisper (whisper.unity), OpenXR' },
        ]}
        statut="Version 1.1 publiée"
      >
        <p>Pour le cours <em>XR et Interactions</em> de Gilles Énée, j'ai <b>conçu et développé seule</b> une <b>galerie d'art en 3D sous Unity</b>, capable d'afficher en direct les <b>résultats d'une recherche Google Images</b>.</p>
        <p>On dit « recherche », on énonce ce qu'on veut voir, puis on marque une pause. Les images trouvées sur le web sont aussitôt <b>accrochées aux murs comme des tableaux</b>, et on visite la galerie <b>en pilotant un drone</b>.</p>
        <p>Je voulais une recherche <span className="hl">entièrement à la voix</span> et une visite fluide. Le projet intègre OpenXR pour les casques, mais face à des incompatibilités matérielles pendant les tests, j'ai choisi de livrer une <b>version PC stable</b>, au clavier et à la souris.</p>
        <p>Avec la <b>version 1.1</b>, la recherche devient vraiment libre : la phrase dictée est <b>transcrite sur l'ordinateur par Whisper</b>, en français et <b>hors ligne</b>.</p>
      </Contexte>

      <Demarche
        etapes={[
          {
            titre: 'Trouver les assets',
            texte: "J'ai commencé par réunir les modèles 3D sur l'<b>Unity Asset Store</b>. On y trouve les plantes (Casual Plants Lite Pack), les cadres des tableaux (Customizable Frames Gallery, Picture frames with photos), le décor intérieur (Interior House Assets), le drone de science-fiction (Sci-Fi Drone) et des mains animées pour la VR.",
            image: { src: '/images/projets/liaz-gallery/assets-unity.webp', alt: "La page My Assets de l'Unity Asset Store, avec Casual Plants Lite Pack, Customizable Frames Gallery, Interior House Assets, Picture frames with photos et Sci-Fi-Drone", width: 1270, height: 812 },
            liens: [{ href: 'https://assetstore.unity.com', label: "Voir l'Unity Asset Store" }],
          },
          {
            titre: 'Créer la salle et le drone',
            texte: "J'ai monté la salle d'exposition (murs, sol, plafond et fenêtres) à la bonne échelle pour s'y déplacer. La scène s'organise en quelques blocs : la salle, le drone, les tableaux, la déco et l'interface. On la visite aux commandes d'un drone qui vole librement dans les trois dimensions, guidé par la souris, sans jamais traverser les murs.",
            image: { src: `${img}/unity-editeur.webp`, alt: "Le projet dans l'éditeur Unity 6 : la salle vue de l'extérieur dans la scène, la hiérarchie (GalleryRoom, DroneRig, GalleryManager, Tableaux, deco, Canvas) et la vue de jeu avec les canapés et les tableaux", width: 1917, height: 1078 },
          },
          {
            titre: 'Placer les tableaux',
            texte: "J'ai réparti les emplacements de tableaux sur les murs. Chacun est un plan dont l'image est remplacée par un résultat de la recherche, et un clic ouvre ses détails et le lien vers la source. Si une image ne se télécharge pas (lien cassé, réseau), une image de secours prend sa place.",
            image: { src: `${img}/panneau-details.webp`, alt: "Le panneau de détails ouvert devant un tableau : titre de l'image, site source et lien complet", width: 1600, height: 900 },
          },
          {
            titre: "La voix et l'API Serper",
            texte: "Dans la v1.0, un mot-clé déclenchait l'écoute, la dictée Windows captait la recherche et un second mot-clé la validait. La requête part vers l'API Serper (préférée à Google Custom Search pour ses quotas), et les images se téléchargent en arrière-plan sans figer l'affichage. La clé d'API reste hors du dépôt public. J'ai aussi corrigé un bug qui bloquait le micro après une première recherche, en redémarrant la reconnaissance vocale avec de nouvelles tentatives automatiques.",
            image: { src: `${img}/ecoute.webp`, alt: "La galerie après le mot « recherche » : le message « Je vous écoute… dites votre recherche, puis faites une pause » s'affiche en haut à gauche", width: 1600, height: 900 },
          },
          {
            titre: 'v1.1 : passer à Whisper',
            texte: "Sur mon poste, la dictée Windows démarrait puis s'annulait sans jamais rendre un mot : tout ce qui suivait « recherche » se perdait. Dans la v1.1, après le mot déclencheur, le micro enregistre jusqu'à une pause, puis <b>Whisper</b> (whisper.unity, modèle <i>base</i>) transcrit la phrase <b>en local</b>, en français et hors ligne. On peut donc chercher n'importe quoi, même un nom propre. Un mode de secours par liste de mots reste disponible, et le modèle de 148 Mo reste hors du dépôt.",
            image: { src: `${img}/galerie-remplie.webp`, alt: "La galerie remplie après la recherche vocale « Marius von Hagen » : la phrase transcrite s'affiche en haut et les illustrations trouvées sont accrochées aux murs", width: 1600, height: 900 },
            liens: [{ href: release, label: 'Voir la release v1.1' }],
          },
          {
            titre: 'Lumières, déco et consignes',
            texte: "Pour finir, j'ai ajouté l'éclairage, le mobilier et l'aide toujours visible à l'écran, demandée par le cahier des charges, qui explique comment se déplacer, lancer une recherche et ouvrir les détails d'un tableau.",
            image: { src: '/images/projets/liaz-gallery/gallerie.webp', alt: "La galerie LiAZ : salle d'exposition avec des tableaux aux murs et des canapés, consignes de recherche vocale et de déplacement affichées à l'écran", width: 1534, height: 862 },
          },
        ]}
      />

      <Video
        intro="On dit « recherche », puis « Marius von Hagen » : la phrase est transcrite en local par Whisper, les images trouvées s'accrochent aux murs, et un clic sur un tableau ouvre sa source."
        src={`${img}/demo.webm`}
        poster={`${img}/demo-poster.webp`}
        width={1280}
        height={720}
        legende="Démonstration de LiAZ Gallery v1.1 : recherche vocale, galerie remplie d'illustrations, vol du drone et panneau de détails d'un tableau"
      />

      <Apport
        casquettes={[
          {
            titre: 'Web et API',
            texte: 'Alimenter une scène 3D avec des données du web.',
            competences: ['API REST Serper', 'Requêtes asynchrones', 'Lecture du JSON', 'Textures téléchargées en direct', 'Clé API protégée'],
          },
          {
            titre: 'Programmation Unity',
            texte: "Toute la logique du projet, de la voix jusqu'à l'affichage.",
            competences: ['C# · Unity 6', 'Commande vocale hybride', 'Whisper en local', 'Correctif du micro', 'Drone et collisions', 'Clic par lancer de rayon', 'Image de secours', 'OpenXR'],
          },
        ]}
      />

      <Galerie
        titre="La galerie en images"
        intro="Captures de la galerie, de l'interface et du projet dans Unity."
        filtres={[
          { id: 'galerie', label: 'Galerie' },
          { id: 'interface', label: 'Interface' },
        ]}
        items={[
          { cat: 'galerie', legende: 'La salle et ses tableaux', images: [{ src: '/images/projets/liaz-gallery/gallerie.webp', alt: "La galerie LiAZ : salle d'exposition avec des tableaux aux murs et des canapés, consignes de recherche vocale et de déplacement affichées à l'écran", width: 1534, height: 862 }] },
          { cat: 'galerie', legende: 'Les murs remplis après une recherche vocale', images: [{ src: `${img}/galerie-remplie.webp`, alt: "La galerie remplie après la recherche vocale « Marius von Hagen » : les illustrations trouvées sont accrochées aux murs", width: 1600, height: 900 }] },
          { cat: 'interface', legende: "L'écoute après le mot « recherche »", images: [{ src: `${img}/ecoute.webp`, alt: "Le message « Je vous écoute… dites votre recherche, puis faites une pause » affiché en haut à gauche de la galerie", width: 1600, height: 900 }] },
          { cat: 'interface', legende: "Panneau de détails d'une image", images: [{ src: `${img}/panneau-details.webp`, alt: "Le panneau de détails ouvert devant un tableau : titre de l'image, site source et lien complet", width: 1600, height: 900 }] },
          { cat: 'interface', legende: "Le projet dans l'éditeur Unity", images: [{ src: `${img}/unity-editeur.webp`, alt: "Le projet dans l'éditeur Unity 6 : la scène, la hiérarchie et la vue de jeu", width: 1917, height: 1078 }] },
        ]}
      />

      <Liens
        liens={[
          { href: release, label: 'Télécharger la v1.1 (Windows)' },
          { href: github, label: 'GitHub' },
        ]}
      />
    </ProjectLayout>
  );
}
