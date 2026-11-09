// Fiche de réflexion : LiAZ Gallery, galerie 3D interactive (cours XR et Interactions).
// Texte de Camélia, vérifié avec le dépôt (scripts C# de projet_unity/Assets/Scripts).
import { Fiche, Section, AcVises, Preuves, Bloc, JeNous, Pivots } from '../../../../../components/academique/Fiche';

const depot = 'https://github.com/ahyolia/LiAZ-Gallery';
const script = (nom) => `${depot}/blob/HEAD/projet_unity/Assets/Scripts/${nom}`;
const release = 'https://github.com/ahyolia/LiAZ-Gallery/releases/tag/v1.1';

export const metadata = {
  title: 'LiAZ Gallery (XR et Interactions) — Journal — Camélia Amin Handoyo',
  robots: { index: false, follow: false },
};

const sections = [
  { id: 'ac-vises', titre: 'AC visés' },
  { id: 'preuves', titre: 'Preuves' },
  { id: 'demonstration', titre: 'Démonstration' },
  { id: 'dimension-pro', titre: 'Dimension pro' },
  { id: 'je-vs-nous', titre: 'Je vs Nous' },
  { id: 'difficultes', titre: 'Difficultés et pivots' },
];

export default function Page() {
  return (
    <Fiche
      titre="LiAZ Gallery, une galerie 3D pilotée à la voix"
      intro="Dans le cours « XR et Interactions » de Gilles Énée, j'ai conçu une galerie d'art 3D sous Unity. On la parcourt en pilotant un drone, on dit ce qu'on cherche, et les images trouvées sur Google s'accrochent aussitôt aux murs. La version 1.1 rend la recherche vocale vraiment libre grâce à Whisper, qui transcrit la voix directement sur l'ordinateur."
      meta={[
        { label: 'Mise à jour', valeur: <time dateTime="2026-11-09">09/11/2026</time> },
        { label: 'Projet', valeur: <a href="/projets/liaz-gallery/">LiAZ Gallery</a> },
        { label: 'Cadre', valeur: 'XR et Interactions, BUT MMI 3' },
        { label: 'Équipe', valeur: 'Projet solo' },
        { label: 'Version', valeur: '1.1' },
        { label: 'AC visés', valeur: '3' },
      ]}
      sections={sections}
    >
      <Section id="ac-vises" numero={1} titre="AC visés" note="ce que ce projet me permet de valider">
        <AcVises
          ac={[
            { code: 'AC34.01', intitule: "Développer à l'aide d'un framework de développement côté client", detail: 'Unity et C#, UnityWebRequest, parsing JSON' },
            { code: 'AC34.03', intitule: 'Développer des dispositifs interactifs sophistiqués', detail: 'Navigation en drone 3D, recherche vocale, interactions par raycast, API web' },
            { code: 'AC35.02', intitule: 'Maîtriser la qualité en projet Web ou multimédia', detail: 'Erreurs réseau, débogage système, sécurité de la clé API, tests PC et XR' },
          ]}
          ce={[{ code: 'CE4.03', intitule: "Produire un code fonctionnel, structuré et sécurisé" }]}
        />
      </Section>

      <Section id="preuves" numero={2} titre="Preuves">
        <Preuves
          liens={[
            { href: depot, titre: 'Dépôt GitHub', detail: 'le code C# complet et le projet Unity' },
            { href: release, titre: 'Release v1.1 (Windows)', detail: 'la build PC prête à lancer, avec ses notes de version' },
            { href: '/projets/liaz-gallery/', titre: 'Fiche du projet', detail: 'captures, démarche et vidéo de démonstration dans mon portfolio' },
          ]}
        />
      </Section>

      <Section id="demonstration" numero={3} titre="Démonstration" note="comment je m'y suis prise, et pourquoi">
        <Bloc
          titre="Relier la galerie au web, sans exposer ma clé"
          ac={['AC34.01', 'CE4.03']}
          technique={<>API Serper interrogée par <a href={script('SearchManager.cs')}>SearchManager.cs</a>, images téléchargées par <a href={script('GalleryBuilder.cs')}>GalleryBuilder.cs</a>, clé exclue du dépôt par le <code>.gitignore</code>.</>}
        >
          <p>
            Quand on lance une recherche, la galerie interroge Google Images, puis télécharge les images en arrière-plan, et
            elles apparaissent sur les murs sans que la scène se fige. La clé qui donne accès au service reste sur mon
            ordinateur et n'est jamais publiée sur GitHub.
          </p>
        </Bloc>

        <Bloc
          titre="Piloter un drone et cliquer sur les œuvres"
          ac={['AC34.03']}
          technique={<>Déplacements et collisions dans <a href={script('DroneController.cs')}>DroneController.cs</a>, clic sur les œuvres par lancer de rayon dans <a href={script('MouseClickInteractor.cs')}>MouseClickInteractor.cs</a>.</>}
        >
          <p>
            On visite la galerie aux commandes d'un drone, librement dans les trois dimensions, sans jamais traverser les
            murs. En cliquant sur une œuvre, on ouvre sa fiche, avec son titre et le site d'où elle vient.
          </p>
        </Bloc>

        <Bloc
          titre="Chercher à la voix, et réparer le micro"
          ac={['AC34.03', 'AC35.02']}
          technique={<>Mot-clé puis dictée dans <a href={script('VoiceSearchInput.cs')}>VoiceSearchInput.cs</a> ; correction par <code>PhraseRecognitionSystem.Shutdown()</code> et nouvelles tentatives.</>}
        >
          <p>
            Pour chercher à la voix, on prononce un mot qui lance l'écoute, on dicte sa recherche, puis un autre mot la
            valide. Dans la version finale, le micro restait bloqué après la première recherche. J'ai compris que le
            problème venait de Windows, pas de mon code, et je l'ai réglé en redémarrant la reconnaissance vocale à
            chaque recherche.
          </p>
        </Bloc>

        <Bloc
          titre="v1.1 : une recherche vraiment libre avec Whisper"
          ac={['AC34.03', 'AC35.02']}
          technique={<>Mot déclencheur par <code>KeywordRecognizer</code>, enregistrement du micro jusqu'à une pause puis transcription locale par <a href="https://github.com/Macoron/whisper.unity">whisper.unity</a> 1.4.0 (modèle <code>ggml-base</code>) dans <a href={script('VoiceSearchInput.cs')}>VoiceSearchInput.cs</a> ; secours par <code>GrammarRecognizer</code> ; modèle exclu du dépôt.</>}
        >
          <p>
            Après la v1.0, un problème restait : sur mon poste, la dictée de Windows démarrait puis s'arrêtait sans
            jamais rendre un mot, donc tout ce qu'on disait après « recherche » se perdait. Plutôt que de dépendre de
            ce service, j'ai intégré Whisper, un modèle de transcription qui tourne sur l'ordinateur, en français et
            hors ligne. On dit « recherche », sa phrase, puis on fait une pause, et l'on peut chercher n'importe quoi,
            même un nom propre comme « Marius von Hagen ». J'ai gardé un mode de secours par liste de mots, documenté
            l'installation du modèle dans le README et publié le tout dans une release v1.1.
          </p>
        </Bloc>

        <Bloc
          titre="Une galerie qui ne casse pas"
          ac={['AC35.02']}
          technique={<>Image de secours <code>SetFallback</code> dans GalleryBuilder.cs ; OpenXR ; aide à l'écran dans <a href={script('HelpOverlay.cs')}>HelpOverlay.cs</a>.</>}
        >
          <p>
            Si une image ne se télécharge pas, une image de secours prend sa place, si bien que la galerie n'affiche jamais de cadre
            vide. Le projet devait aussi fonctionner avec un casque de réalité virtuelle, mais il y était instable. J'ai
            choisi de livrer une version PC fiable, avec une aide à l'écran.
          </p>
        </Bloc>
      </Section>

      <Section id="dimension-pro" numero={4} titre="Dimension pro" note="ce que ce projet montre de moi en entreprise">
        <ul>
          <li><strong>Je relie le web et la 3D temps réel</strong> : une API REST qui alimente une scène Unity, avec des requêtes asynchrones.</li>
          <li><strong>Je sais chercher la cause d'un bug</strong>, même quand elle se trouve dans le système et pas dans mon code.</li>
          <li><strong>J'écris un code propre et sûr</strong> : clé API protégée, scripts séparés par rôle.</li>
          <li><strong>Je fais vivre un projet après sa livraison</strong> : j'ai corrigé un vrai défaut d'usage et publié une v1.1 avec ses notes de version.</li>
        </ul>
      </Section>

      <Section id="je-vs-nous" numero={5} titre="Je vs Nous" note="ma part dans le projet">
        <JeNous
          nous={<p>Le cadre, les consignes d'ergonomie 3D et les bases d'Unity (XR, reconnaissance vocale) ont été posés dans le TP de Gilles Énée.</p>}
          je={[
            { titre: 'Web et API', points: ["Configuration de l'API Serper", 'Requêtes asynchrones et parsing JSON en C#', 'Protection de la clé API'] },
            { titre: 'Programmation', points: ['Recherche vocale en deux temps', 'Correction du bug du micro et tentatives automatiques', 'Intégration de Whisper en local (v1.1)'] },
            { titre: 'Interactions', points: ['Contrôleur du drone', 'Œuvres cliquables par raycast', 'Image de secours et aide à l’écran'] },
          ]}
        />
      </Section>

      <Section id="difficultes" numero={6} titre="Difficultés et pivots" note="ce qui a coincé, et ce que j'en ai tiré">
        <Pivots
          lignes={[
            { obstacle: 'Le micro ne se libérait plus sous Windows', solution: 'J’ai réinitialisé la reconnaissance vocale et ajouté des tentatives automatiques.', apprentissage: 'Un bug peut venir du système, pas seulement de mon code, et il faut savoir aller le chercher.' },
            { obstacle: 'La dictée Windows ne rendait aucun mot après « recherche »', solution: 'J’ai remplacé la dictée par Whisper, qui transcrit la voix en local, et publié une v1.1.', apprentissage: 'Quand un service extérieur bloque, je peux le remplacer par une brique que je maîtrise, puis livrer une nouvelle version propre.' },
            { obstacle: 'Des images du web ne se chargeaient pas', solution: 'J’ai ajouté une image de secours automatique.', apprentissage: 'Une interface doit rester correcte quand un service extérieur échoue.' },
            { obstacle: 'Le build était instable sur un vrai casque VR', solution: 'J’ai stabilisé la version PC, au clavier et à la souris.', apprentissage: 'Mieux vaut livrer un produit stable que tout miser sur un matériel capricieux.' },
          ]}
        />
      </Section>
    </Fiche>
  );
}
