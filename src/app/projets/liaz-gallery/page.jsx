// Fiche projet LiAZ Gallery. Contenu tiré du README du dépôt
// https://github.com/ahyolia/LiAZ-Gallery et de la fiche de réflexion du projet
// Visuels : à déposer dans public/images/projets/liaz-gallery/ (voir les « Ajoute ici »).
import ProjectLayout from '../../../components/projet/ProjectLayout';
import CaseHero from '../../../components/projet/CaseHero';
import Contexte from '../../../components/projet/Contexte';
import Demarche from '../../../components/projet/Demarche';
import Apport from '../../../components/projet/Apport';
import Galerie from '../../../components/projet/Galerie';
import Liens from '../../../components/projet/Liens';

const github = 'https://github.com/ahyolia/LiAZ-Gallery';
const release = 'https://github.com/ahyolia/LiAZ-Gallery/releases';
const todo = '<span class="todo">À VÉRIFIER</span>';
const placeholder = { src: '/images/placeholder.svg', width: 1200, height: 750 };

export const metadata = {
  title: 'LiAZ Gallery, galerie 3D à commande vocale — Camélia Amin Handoyo',
  description:
    "LiAZ Gallery, galerie d'images en 3D pilotée à la voix, développée avec Unity 6, C# et l'API Serper.",
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
          { href: release, label: 'Télécharger la version Windows' },
          { href: github, label: 'Code sur GitHub' },
        ]}
      >
        <img src="/images/projets/liaz-gallery/gallerie.webp" alt="La galerie LiAZ : salle d'exposition avec des tableaux aux murs et des canapés, consignes de recherche vocale et de déplacement affichées à l'écran" width="1534" height="862" data-depth="0.4" style={{ width: '90%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.5)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '0%', '--y': '4%', '--r': '-8deg', '--size': 'auto' }}>« recherche… »</span>
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '70%', '--y': '82%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>« terminé ! »</span>
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
          { label: 'Outils', valeur: 'Unity 6 (URP), C#, UnityWebRequest, reconnaissance vocale Windows, API Serper, OpenXR' },
        ]}
        statut="Version PC publiée"
      >
        <p>Pour le cours <em>XR et Interactions</em> de Gilles Énée, j'ai <b>conçu et développé seule</b> une <b>galerie d'art en 3D sous Unity</b>, capable d'afficher en direct les <b>résultats d'une recherche Google Images</b>.</p>
        <p>On dit « recherche », on énonce ce qu'on veut voir, puis « terminé ». Les images trouvées sur le web sont aussitôt <b>accrochées aux murs comme des tableaux</b>, et on visite la galerie <b>en pilotant un drone</b>.</p>
        <p>Je voulais une recherche <span className="hl">entièrement à la voix</span> et une visite fluide. Le projet intègre OpenXR pour les casques, mais face à des incompatibilités matérielles pendant les tests, j'ai choisi de livrer une <b>version PC stable</b>, au clavier et à la souris.</p>
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
            titre: 'Créer la salle',
            texte: "J'ai monté la salle d'exposition (murs, sol, plafond et fenêtres) à la bonne échelle pour s'y déplacer.",
            attendu: 'capture de la salle vide',
          },
          {
            titre: 'Faire voler le drone',
            texte: "Le drone vole librement sur les trois axes et tourne sur lui-même, tandis que la souris oriente le regard. Il glisse le long des murs sans jamais les traverser, grâce aux collisions gérées avec les 141 éléments de la scène, et sans gravité pour rester fluide.",
            attendu: 'capture du drone en vol',
          },
          {
            titre: 'Placer les tableaux',
            texte: "J'ai réparti les emplacements de tableaux sur les murs. Chacun est un plan dont l'image est remplacée par un résultat de la recherche, et un clic ouvre ses détails et le lien vers la source. Si une image ne se télécharge pas (lien cassé, réseau), une image de secours prend sa place.",
            attendu: 'capture des tableaux remplis après une recherche',
          },
          {
            titre: "La voix et l'API Serper",
            texte: "Un mot-clé déclenche l'écoute, la dictée capte la recherche, un second mot-clé la valide. La requête part vers l'API Serper (préférée à Google Custom Search pour ses quotas), et les images se téléchargent en arrière-plan sans figer l'affichage. La clé d'API reste hors du dépôt public. J'ai aussi corrigé un bug qui bloquait le micro après une première recherche, en redémarrant la reconnaissance vocale avec de nouvelles tentatives automatiques.",
            attendu: "capture de la configuration de l'API ou d'une recherche",
          },
          {
            titre: 'Lumières, déco et consignes',
            texte: "Pour finir, j'ai ajouté l'éclairage, le mobilier et l'aide toujours visible à l'écran, demandée par le cahier des charges, qui explique comment se déplacer, lancer une recherche et ouvrir les détails d'un tableau.",
            image: { src: '/images/projets/liaz-gallery/gallerie.webp', alt: "La galerie LiAZ : salle d'exposition avec des tableaux aux murs et des canapés, consignes de recherche vocale et de déplacement affichées à l'écran", width: 1534, height: 862 },
          },
        ]}
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
            competences: ['C# · Unity 6', 'Commande vocale hybride', 'Correctif du micro', 'Drone et collisions', 'Clic par lancer de rayon', 'Image de secours', 'OpenXR'],
          },
        ]}
      />

      <Galerie
        titre="La galerie en images"
        intro={`Captures de la galerie, du drone et de l'interface. ${todo}`}
        filtres={[
          { id: 'galerie', label: 'Galerie' },
          { id: 'interface', label: 'Interface' },
        ]}
        items={[
          { cat: 'galerie', legende: 'La salle et ses tableaux', images: [{ src: '/images/projets/liaz-gallery/gallerie.webp', alt: "La galerie LiAZ : salle d'exposition avec des tableaux aux murs et des canapés, consignes de recherche vocale et de déplacement affichées à l'écran", width: 1534, height: 862 }] },
          { cat: 'galerie', legende: 'Le drone en vol', images: [{ ...placeholder, alt: 'Le drone dans la galerie (à remplacer)' }] },
          { cat: 'interface', legende: "Panneau de détails d'une image", images: [{ ...placeholder, alt: "Panneau de détails d'une image (à remplacer)" }] },
        ]}
      />

      <Liens
        liens={[
          { href: release, label: 'Télécharger (Windows)' },
          { href: github, label: 'GitHub' },
        ]}
      />
    </ProjectLayout>
  );
}
