// Fiche de réflexion : Pocket Stars (Exploration interactive 3D de données).
// Texte de Camélia, vérifié avec le dépôt https://github.com/ahyolia/PocketStars
import { Fiche, Section, AcVises, Preuves, Bloc, JeNous, Pivots } from '../../../../components/academique/Fiche';

const depot = 'https://github.com/ahyolia/PocketStars';
const code = (chemin) => `${depot}/blob/main/${chemin}`;

export const metadata = {
  title: 'Pocket Stars (exploration 3D de données) — Journal — Camélia Amin Handoyo',
  robots: { index: false, follow: false },
};

const sections = [
  { id: 'ac-vises', titre: 'AC visés' },
  { id: 'preuves', titre: 'Preuves' },
  { id: 'demonstration', titre: 'Démonstration' },
  { id: 'ia', titre: 'Piloter une IA' },
  { id: 'dimension-pro', titre: 'Dimension pro' },
  { id: 'je-vs-nous', titre: 'Je vs Nous' },
  { id: 'difficultes', titre: 'Difficultés et pivots' },
];

export default function Page() {
  return (
    <Fiche
      titre="Pocket Stars : un ciel d'étoiles qui cachent des cartes"
      intro="Dans le cours d'Exploration interactive 3D de données de François Gillet, j'ai créé une balade en 3D sur une île volante : chaque étoile du ciel cache une carte Pokémon, tirée d'une API publique, qui descend et se révèle quand on clique dessus."
      meta={[
        { label: 'Rendu', valeur: <time dateTime="2026-10-23">23/10/2026</time> },
        { label: 'Projet', valeur: <a href="/projets/pocket-stars/">Pocket Stars</a> },
        { label: 'Cadre', valeur: 'Exploration interactive 3D de données, BUT MMI 3' },
        { label: 'Durée', valeur: '6 semaines, du 09/09 au 23/10' },
        { label: 'Équipe', valeur: 'Projet solo, avec un assistant IA' },
        { label: 'AC visés', valeur: '5' },
      ]}
      sections={sections}
    >
      <Section id="ac-vises" numero={1} titre="AC visés" note="ce que ce projet me permet de valider">
        <AcVises
          ac={[
            { code: 'AC34.01', intitule: "Développer à l'aide d'un framework de développement côté client", detail: 'React 19, Vite, hooks, architecture en composants' },
            { code: 'AC34.03', intitule: 'Développer des dispositifs interactifs sophistiqués', detail: 'Scène 3D temps réel, contrôles clavier, souris et tactiles, shader holographique, son généré' },
            { code: 'AC34.04', intitule: 'Concevoir et développer des composants logiciels, plugins ou extensions', detail: 'Composants 3D réutilisables, hooks isolés, service d’API avec secours local' },
            { code: 'AC34.05', intitule: "Maîtriser l'hébergement et le déploiement d'applications", detail: 'Site statique sur Netlify, déployé automatiquement depuis GitHub' },
            { code: 'AC35.02', intitule: 'Maîtriser la qualité en projet Web ou multimédia', detail: 'Accessibilité, gestion des erreurs réseau, tactile, mode hors ligne, relecture du code généré par IA' },
          ]}
          ce={[
            { code: 'CE4.01', intitule: 'Respecter les standards web, le responsive et l’accessibilité' },
            { code: 'CE4.03', intitule: 'Produire un code JavaScript sobre, commenté et réutilisable' },
            { code: 'CE4.04', intitule: 'Utiliser rigoureusement Git et GitHub' },
          ]}
        />
      </Section>

      <Section id="preuves" numero={2} titre="Preuves">
        <Preuves
          liens={[
            { href: 'https://pocketstarss.netlify.app', titre: "L'application en ligne", detail: 'à essayer sur ordinateur ou sur téléphone' },
            { href: depot, titre: 'Dépôt GitHub', detail: 'le code complet et l’historique des commits' },
            { href: `${depot}/blob/main/docs/Pocket%20Stars%20-%20Dossier%20de%20pr%C3%A9paration.pdf`, titre: 'Dossier de préparation (PDF)', detail: 'wireframes, arborescence, schéma de données, planning' },
            { href: '/projets/pocket-stars/', titre: 'Fiche du projet', detail: 'vidéo, captures et démarche dans mon portfolio' },
          ]}
        />
      </Section>

      <Section id="demonstration" numero={3} titre="Démonstration" note="comment je m'y suis prise, et pourquoi">
        <Bloc
          titre="Une scène 3D fluide dans une appli React"
          ac={['AC34.01', 'AC34.03']}
          technique={<>React Three Fiber et drei ; animations dans <code>useFrame</code> avec des refs ; shader GLSL dans <a href={code('src/components/holoMaterial.js')}>holoMaterial.js</a> ; deux canevas, <a href={code('src/components/IslandScene.jsx')}>IslandScene.jsx</a> et <a href={code('src/components/CardReveal.jsx')}>CardReveal.jsx</a>.</>}
        >
          <p>
            Pour que la 3D reste fluide, les mouvements continus (la caméra, les étoiles qui tournent) sont animés hors du
            rendu de React. Quand on ouvre une carte, elle s'affiche dans une deuxième scène par-dessus l'île : on peut la
            faire tourner, et les cartes rares brillent d'un reflet holographique qui change avec l'angle de vue.
          </p>
        </Bloc>

        <Bloc
          titre="Se déplacer au clavier, à la souris et au doigt"
          ac={['AC34.03', 'CE4.01']}
          technique={<>Touches lues par leur position (<code>KeyboardEvent.code</code>) ; joystick dans <a href={code('src/components/TouchJoystick.jsx')}>TouchJoystick.jsx</a> ; regard dans <a href={code('src/components/CameraController.jsx')}>CameraController.jsx</a>.</>}
        >
          <p>
            Sur ordinateur, on marche avec ZQSD ou WASD : le jeu lit la position des touches, donc les deux claviers
            fonctionnent. Le regard suit la souris sans la capturer, pour qu'on puisse toujours cliquer sur l'interface.
            Sur téléphone, un joystick apparaît pour marcher, et on glisse le doigt pour regarder autour de soi.
          </p>
        </Bloc>

        <Bloc
          titre="Des données qui arrivent toujours"
          ac={['AC34.04', 'AC35.02']}
          technique={<>Service <a href={code('src/services/tcgdexApi.js')}>tcgdexApi.js</a> ; secours local dans <code>public/data/cards.json</code>, généré par <a href={code('scripts/fetch-fallback-data.mjs')}>fetch-fallback-data.mjs</a> ; Error Boundary autour des images.</>}
        >
          <p>
            Au démarrage, l'appli récupère une liste légère de 250 cartes et en place 50 au hasard dans le ciel. Le détail
            d'une carte n'est chargé qu'au moment où on l'ouvre. Si le service ne répond pas, l'appli bascule sur une copie
            locale des 250 cartes ; et si une image est bloquée par le navigateur, une carte de remplacement s'affiche à sa
            place.
          </p>
        </Bloc>

        <Bloc
          titre="Une musique écrite en code"
          ac={['AC34.03']}
          technique={<>Web Audio API dans <a href={code('src/audio/synth.js')}>synth.js</a>.</>}
        >
          <p>
            Aucun fichier son n'est utilisé : les trois musiques, les bruits de pas, les clics et la voix de Mimikyu, le
            compagnon, sont tous générés par le navigateur.
          </p>
        </Bloc>

        <Bloc
          titre="Accessible et en ligne"
          ac={['AC34.05', 'CE4.01']}
          technique={<>Préférence <code>prefers-reduced-motion</code> ; build Vite déployé par Netlify à chaque push ; <code>manifest.webmanifest</code>.</>}
        >
          <p>
            Si l'utilisateur a demandé moins d'animations, le ciel arrête de tourner et les étoiles filantes disparaissent,
            pour éviter le mal des transports. Les boutons ont des libellés pour les lecteurs d'écran et un contour visible
            au clavier. Le site se met à jour en ligne à chaque envoi sur GitHub, et s'ouvre en plein écran une fois ajouté
            à l'écran d'accueil du téléphone.
          </p>
        </Bloc>
      </Section>

      <Section id="ia" numero={4} titre="Piloter une IA" note="ce que j'ai appris en travaillant avec Claude Code">
        <p>
          J'ai écrit le code avec l'assistant IA Claude Code. Mon rôle a été celui d'une directrice technique : choisir
          l'architecture (React, React Three Fiber, l'API TCGdex), définir l'expérience (Mimikyu, les contrôles, le style
          cartoon) et orienter chaque étape.
        </p>
        <p>
          Surtout, j'ai tout vérifié. J'ai testé chaque proposition sur ordinateur et sur téléphone, repéré les erreurs de
          l'IA, comme des écrans noirs annoncés à tort ou une rotation de carte qui ne marchait pas, et demandé des
          corrections précises. L'IA écrit vite, mais c'est moi qui décide et qui valide.
        </p>
      </Section>

      <Section id="dimension-pro" numero={5} titre="Dimension pro" note="ce que ce projet montre de moi en entreprise">
        <ul>
          <li><strong>J'anticipe les risques techniques</strong> : en voyant que l'API choisie allait devenir payante, j'ai changé de service avant d'en dépendre.</li>
          <li><strong>Je sais piloter un outil d'IA</strong> sans perdre la maîtrise du produit, du design et de la qualité.</li>
          <li><strong>Je documente mon code</strong> : presque chaque fichier commence par un en-tête en français qui explique son rôle.</li>
        </ul>
      </Section>

      <Section id="je-vs-nous" numero={6} titre="Je vs Nous" note="ma part dans le projet">
        <JeNous
          nous={
            <>
              <p><strong>Le cours</strong> : le sujet, les délais, les critères et les livrables, fixés par François Gillet.</p>
              <p><strong>L'assistant IA</strong> : l'écriture et la refonte du code, sous mes directives.</p>
            </>
          }
          je={[
            { titre: 'Conception', points: ['Dossier de préparation complet', 'Wireframes, arborescence, données, planning'] },
            { titre: 'Décisions', points: ['Changements d’API', 'Fonctions retirées pour tenir les délais', 'Mimikyu comme compagnon'] },
            { titre: 'Direction artistique et UX', points: ['Style cartoon en CSS, sans framework', 'Typographie', 'Contrôles clavier, souris et tactiles'] },
            { titre: 'Qualité', points: ['Tests sur de vrais appareils', 'Bugs repérés et corrigés', 'Accessibilité', 'Mise en ligne finale'] },
          ]}
        />
      </Section>

      <Section id="difficultes" numero={7} titre="Difficultés et pivots" note="ce qui a coincé, et ce que j'en ai tiré">
        <Pivots
          lignes={[
            { obstacle: 'Deux API abandonnées en route', solution: 'Card Captor Sakura, trop peu structurée, puis l’API Pokémon TCG, devenue payante : j’ai migré vers TCGdex le 16/09, avant de coder ce qui en dépendait, et isolé tout l’accès aux données dans un seul fichier.', apprentissage: 'Vérifier la durée de vie et le modèle économique d’une API avant de s’y lier.' },
            { obstacle: 'Certaines images refusées par le navigateur', solution: 'Une carte de remplacement dessinée à la volée quand l’image ne charge pas.', apprentissage: 'Une interface doit tenir même quand un service extérieur échoue en partie.' },
            { obstacle: 'Un fichier JavaScript lourd (1,2 Mo)', solution: 'Problème repéré, dû à Three.js ; le découpage du code en morceaux est prévu pour la V2.', apprentissage: 'Les bibliothèques 3D pèsent lourd : il faut le prévoir dès le départ.' },
            { obstacle: 'Des écarts avec le dossier de préparation', solution: 'Le ciel qui change de couleur et les filtres par date ont été retirés, pour privilégier la fluidité et Mimikyu.', apprentissage: 'Savoir renoncer à l’optionnel pour livrer un produit stable à temps.' },
            { obstacle: 'Pas de tests automatisés', solution: 'Un choix assumé sur six semaines, compensé par des tests manuels sur plusieurs appareils.', apprentissage: 'Connaître les limites de ses tests et assumer ses arbitrages.' },
          ]}
        />
      </Section>
    </Fiche>
  );
}
