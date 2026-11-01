// Fiche projet LiAZ Gallery. Contenu tiré du README du dépôt
// https://github.com/ahyolia/LiAZ-Gallery
// Visuels : à déposer dans public/images/projets/liaz-gallery/ (voir les « Ajoute ici »).
import ProjectLayout from '../../../components/projet/ProjectLayout';
import CaseHero from '../../../components/projet/CaseHero';
import Contexte from '../../../components/projet/Contexte';
import Questions from '../../../components/projet/Questions';
import Demarche from '../../../components/projet/Demarche';
import Apport from '../../../components/projet/Apport';
import Galerie from '../../../components/projet/Galerie';
import Liens from '../../../components/projet/Liens';

const github = 'https://github.com/ahyolia/LiAZ-Gallery';
const release = 'https://github.com/ahyolia/LiAZ-Gallery/releases';
const todo = '<span class="todo">À VÉRIFIER</span>';
const placeholder = { src: '/images/placeholder.svg', width: 1200, height: 750 };

export const metadata = {
  title: 'LiAZ Gallery, galerie VR à commande vocale — Camélia Amin Handoyo',
  description:
    "Étude de cas : LiAZ Gallery, galerie d'images en réalité virtuelle pilotée à la voix, développée avec Unity 6, OpenXR et l'API Serper.",
};

export default function Page() {
  return (
    <ProjectLayout slug="liaz-gallery">
      <CaseHero
        eyebrow="Étude de cas · réalité virtuelle"
        titre="LiAZ Gallery, une galerie VR qu'on pilote à la voix"
        accroche="On dit ce qu'on cherche, et les images trouvées sur le web s'accrochent aux murs."
        couleur="#D7F2F3"
        liens={[
          { href: release, label: 'Télécharger la version Windows' },
          { href: github, label: 'Code sur GitHub' },
        ]}
      >
        {/* À REMPLACER : une capture de la galerie, ex. /images/projets/liaz-gallery/galerie.png */}
        <img src={placeholder.src} alt="Capture de la galerie LiAZ (à remplacer)" width={placeholder.width} height={placeholder.height} data-depth="0.4" style={{ width: '85%', borderRadius: '1rem' }} />
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
          { label: 'Cadre', valeur: 'Cours Dispositifs interactifs, BUT MMI 3' },
          { label: 'Année', valeur: '2026' },
          { label: 'Équipe', valeur: 'Projet solo' },
          { label: 'Mon rôle', valeur: 'Conception et développement' },
          { label: 'Outils', valeur: 'Unity 6 (URP), C#, XR Interaction Toolkit, OpenXR, API Serper' },
        ]}
        statut="V1 publiée"
      >
        <p>Pour le cours <em>Dispositifs interactifs</em>, j'ai conçu et développé seule une galerie d'images en réalité virtuelle. <span className="todo">Ajouter la consigne du cours et la durée</span></p>
        <p>Le principe : on dit « recherche », on énonce ce qu'on veut voir, puis « terminé ». Les images trouvées sur le web sont aussitôt accrochées aux murs comme des tableaux, et on visite la galerie en pilotant un drone.</p>
        <p>Mon objectif : une interaction <span className="hl">entièrement à la voix</span>, qui marche aussi bien avec un casque VR qu'au clavier et à la souris.</p>
      </Contexte>

      <Questions
        questions={[
          {
            question: 'Comment lancer une recherche sans clavier, casque sur la tête ?',
            reponse: "Par la voix, en deux temps : un mot-clé (« recherche ») déclenche l'écoute, puis la dictée enregistre la requête jusqu'au mot « terminé ». Ça évite que la moindre phrase dite à voix haute lance une recherche.",
          },
          {
            question: "Quelle source pour les images ?",
            reponse: "J'ai choisi l'API Serper (résultats Google Images) plutôt que Google Custom Search, dont les quotas gratuits étaient trop limités pour tester librement.",
          },
          {
            question: "Comment publier le code sans exposer la clé d'API ?",
            reponse: "La clé est rangée dans un fichier de configuration ignoré par Git. Le dépôt ne contient qu'un modèle à dupliquer, avec un texte à remplacer par sa propre clé.",
          },
        ]}
      />

      <Demarche
        etapes={[
          {
            titre: 'La recherche vocale',
            texte: "Un premier module écoute le mot-clé de déclenchement, puis passe en mode dictée jusqu'au mot d'arrêt, avec la reconnaissance vocale de Windows.",
            attendu: "capture de la recherche vocale ou du schéma d'architecture",
          },
          {
            titre: "L'appel à l'API d'images",
            texte: "La requête dictée est envoyée à l'API Serper, et la réponse JSON est convertie en résultats exploitables : image, titre, source et lien.",
            attendu: "capture du code ou d'une réponse de l'API",
          },
          {
            titre: 'La galerie dynamique',
            texte: "Chaque résultat devient un tableau accroché à un emplacement du mur, avec sa miniature téléchargée. Un clic ouvre un panneau de détails avec un bouton vers la source.",
            attendu: 'capture de la galerie remplie',
          },
          {
            titre: 'Le drone et la VR',
            texte: "On se déplace en vol libre avec un drone qui s'incline dans les virages et s'arrête contre les murs. Le projet tourne avec un casque OpenXR (mains animées) ou au clavier et à la souris, avec une aide toujours visible.",
            attendu: 'capture du drone ou de la vue en casque',
          },
        ]}
      />

      <Apport
        casquettes={[
          {
            titre: 'Dev Unity et VR',
            texte: "Toute la logique du projet, de la voix jusqu'à l'affichage.",
            competences: ['C#', 'Unity 6 · URP', 'XR Interaction Toolkit', 'OpenXR', 'Reconnaissance vocale', 'API REST (Serper)', 'Input System'],
          },
          {
            titre: 'Interaction et UX',
            texte: 'Une visite pensée pour le casque comme pour le clavier.',
            competences: ['Commande vocale en deux temps', 'Panneau de détails', 'Aide toujours visible', 'Déplacement en drone'],
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
          { cat: 'galerie', legende: 'Galerie remplie après une recherche', images: [{ ...placeholder, alt: 'Galerie après une recherche (à remplacer)' }] },
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
