// Fiche de réflexion : Aïma - BloodShare (SAÉ 501), volet développement.
// Texte de Camélia, recoupé avec le dossier de rendu (tableau des participations)
// et le dépôt ; liens vers la branche main (V1 publiée).
import { Fiche, Section, AcVises, Preuves, Bloc, JeNous, Pivots } from '../../../../../components/academique/Fiche';

const depot = 'https://github.com/ahyolia/bloodshare';
const branche = `${depot}/tree/main`;
const fichier = (chemin) => `${depot}/blob/main/${chemin}`;

export const metadata = {
  title: 'Aïma - BloodShare (SAÉ 501) — Journal — Camélia Amin Handoyo',
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
      titre="Aïma - BloodShare, une application mobile et PWA gamifiée"
      intro="Avec l'ADSB-NC et le centre de don, nous avons créé une appli qui donne envie aux 18-35 ans de donner leur sang, sans jamais culpabiliser. Cette fiche détaille le volet technique, soit une appli React Native connectée à une API Laravel et à son back-office, présentée au forum du 29 octobre."
      meta={[
        { label: 'Mise à jour', valeur: <time dateTime="2026-11-02">02/11/2026</time> },
        { label: 'Projet', valeur: <a href="/projets/aima/">Aïma</a> },
        { label: 'Cadre', valeur: 'SAÉ 501, BUT MMI 3' },
        { label: 'Équipe dev', valeur: 'Binôme avec Geneviève Mekenese' },
        { label: 'AC visés', valeur: '7' },
      ]}
      sections={sections}
    >
      <Section id="ac-vises" numero={1} titre="AC visés" note="ce que ce projet me permet de valider">
        <AcVises
          ac={[
            { code: 'AC34.01', intitule: "Développer à l'aide d'un framework de développement côté client", detail: 'React Native, Expo Router, TypeScript, PWA' },
            { code: 'AC34.02', intitule: "Développer à l'aide d'un framework de développement côté serveur", detail: 'API REST Laravel 12, Sanctum, PostgreSQL, back-office Filament' },
            { code: 'AC34.03', intitule: 'Développer des dispositifs interactifs sophistiqués', detail: "QR code tournant, notifications, questionnaire d'éligibilité local, quiz" },
            { code: 'AC34.04', intitule: 'Concevoir et développer des composants logiciels, plugins ou extensions', detail: 'Services métier, mot de passe temporaire, rôles et permissions' },
            { code: 'AC34.05', intitule: "Maîtriser l'hébergement et le déploiement d'applications", detail: "Docker Compose, back-end sur le serveur de l'IUT, base Neon, plan de migration" },
            { code: 'AC35.01', intitule: 'Piloter un produit, un service ou une équipe', detail: 'Comptes rendus, user stories, arbitrages V1 / V2' },
            { code: 'AC35.02', intitule: 'Maîtriser la qualité en projet Web ou multimédia', detail: 'Pull requests relues, audit de cybersécurité, RGPD, tests PHPUnit et Jest' },
          ]}
          ce={[
            { code: 'CE4.01', intitule: "Respecter les standards et l'accessibilité (WCAG AA visée)" },
            { code: 'CE4.03', intitule: 'Produire un code sobre, structuré et réutilisable' },
            { code: 'CE4.04', intitule: 'Utiliser rigoureusement les outils de développement collaboratif' },
            { code: 'CE4.05', intitule: 'Sécuriser les systèmes et protéger les données personnelles' },
            { code: 'CE5.02', intitule: "Collaborer avec le pôle Stratégie et l'association" },
          ]}
        />
      </Section>

      <Section id="preuves" numero={2} titre="Preuves">
        <Preuves
          liens={[
            { href: 'https://aima-nc.netlify.app', titre: "L'appli en ligne (PWA)", detail: 'la démo présentée au forum du 29 octobre' },
            { href: branche, titre: 'Dépôt GitHub', detail: 'front, back, scripts et documentation' },
            { href: `${branche}/bloodshare-backend`, titre: 'Back-end Laravel', detail: 'API, services, 78 migrations, back-office, tests' },
            { href: `${branche}/bloodshare-mobile`, titre: 'Front mobile et PWA', detail: 'React Native et Expo Router' },
            { href: fichier('docs/contrat_API.md'), titre: "Contrat d'API", detail: "les routes de l'API REST" },
            { href: fichier('DEVOPS.md'), titre: 'DEVOPS.md', detail: 'déploiement de la démo et problèmes connus' },
            { href: 'https://www.figma.com/design/Yjc8sSNqHNsmWr33Cmg9qt', titre: 'Design system Figma', detail: 'palette, typographies, composants, maquettes' },
          ]}
        />
      </Section>

      <Section id="demonstration" numero={3} titre="Démonstration" note="comment je m'y suis prise, et pourquoi">
        <Bloc titre="Cadrer le produit et le livrer à temps" ac={['AC35.01', 'AC35.02']} technique="User stories sur ClickUp, une branche Git par user story, pull requests relues, commits normés.">
          <p>
            Nous sommes partis des échanges avec l'association pour écrire le cahier des charges et imaginer la
            gamification autour de cartes-souvenirs, de niveaux, de badges et de défis. Le temps manquait, alors nous avons
            choisi ce qui partait dans la première version pour le forum, et ce qui attendait la suivante. Chaque mois,
            nous faisions le point avec l'équipe Stratégie et l'association.
          </p>
        </Bloc>

        <Bloc titre="Une appli pour le téléphone et le navigateur" ac={['AC34.01', 'AC34.03']} technique="React Native avec Expo Router, diffusion en PWA ; questionnaire dans constants/eligibilite.ts.">
          <p>
            Une seule base de code nous a permis de viser Android, iOS et le web. Au forum, l'appli s'ouvrait en scannant
            un QR code, sans rien installer. Le questionnaire qui vérifie si l'on peut donner son sang fonctionne
            entièrement sur le téléphone, sans qu'aucune donnée médicale soit envoyée ni enregistrée.
          </p>
        </Bloc>

        <Bloc
          titre="Une API et un back-office solides"
          ac={['AC34.02', 'AC34.03', 'AC34.04']}
          technique={<>Laravel 12, PostgreSQL (78 migrations), Sanctum, Filament ; <a href={fichier('bloodshare-backend/app/Services/QrCentreTournant.php')}>QrCentreTournant</a>, <a href={fichier('bloodshare-backend/tests/Feature/ChangerMotDePasseTest.php')}>ChangerMotDePasseTest</a>.</>}
        >
          <p>
            J'ai construit le serveur qui fait tourner l'appli, et le back-office où l'association gère elle-même ses
            contenus (stocks de sang, quiz, cartes, défis et comptes). Pour valider un don, le centre affiche un QR code
            qui change toutes les 30 secondes, si bien qu'une photo partagée ne sert à rien. J'ai aussi prévu un mot de passe
            temporaire que l'administrateur peut donner, et que l'utilisateur doit changer en se reconnectant.
          </p>
          <p>
            Côté sécurité, nous avons fait un audit, limité les abus, et prévu la suppression des comptes inactifs depuis
            trois ans.
          </p>
        </Bloc>

        <Bloc titre="Héberger une démo, préparer la suite" ac={['AC34.05']} technique="Docker Compose ; démo sur le serveur de l'IUT avec une base Neon ; plan de migration dans le dossier de rendu.">
          <p>
            Pour respecter le RGPD, l'appli doit être hébergée en Europe ou en Nouvelle-Calédonie. Nous n'avons pas pu
            choisir un hébergeur définitif à temps, alors j'ai mis en ligne une démo provisoire sur le serveur de l'IUT,
            signalée comme telle, et écrit les étapes pour passer à l'hébergement final dans la version suivante.
          </p>
        </Bloc>
      </Section>

      <Section id="dimension-pro" numero={4} titre="Dimension pro" note="ce que ce projet montre de moi en entreprise">
        <ul>
          <li><strong>Je sais arbitrer</strong> : réduire le périmètre sous contrainte de temps et proposer des solutions adaptées (mot de passe temporaire, PWA, démo documentée).</li>
          <li><strong>Je travaille avec les métiers</strong> : stratégie, juridique, graphisme et l'association, autour d'un même produit.</li>
          <li><strong>J'ai les réflexes d'une équipe pro</strong> : frameworks récents, Docker, pull requests relues, tests automatisés et documentation de reprise.</li>
        </ul>
      </Section>

      <Section id="je-vs-nous" numero={5} titre="Je vs Nous" note="ma part dans le projet">
        <JeNous
          nous={
            <>
              <p>L'équipe Stratégie a écrit les contenus, cadré le juridique et illustré les cartes. Avec Geneviève Mekenese, nous avons conçu et développé l'appli.</p>
              <p>Geneviève a mis en place le ClickUp, codé les composants communs de l'appli et déployé la PWA sur Netlify.</p>
            </>
          }
          je={[
            { titre: 'Seule, sur le back-end et l’hébergement', points: ['API Laravel, base et seeders', 'Back-office, rôles et permissions', 'Services métier et QR code tournant', 'Mot de passe temporaire et ses tests', "Contrat d'API", "Hébergement du back-end sur le serveur de l'IUT"] },
            { titre: 'Avec Geneviève', points: ['User stories et comptes rendus', 'Design system et maquettes Figma', 'Écrans Quiz, Don, Cartes, Profil, Notifications', 'Veille hébergeurs et cybersécurité', 'Cahier des charges et bilan V1 / V2'] },
          ]}
        />
      </Section>

      <Section id="difficultes" numero={6} titre="Difficultés et pivots" note="ce qui a coincé, et ce que j'en ai tiré">
        <Pivots
          lignes={[
            { obstacle: 'Le planning a glissé', solution: 'Backlog recadré, MVP priorisé, le reste reporté en V2.', apprentissage: 'Un planning se réévalue à chaque étape, et il faut savoir réduire le périmètre.' },
            { obstacle: 'Stratégie et Dev n’avançaient pas au même rythme', solution: 'Échéances clarifiées et livrables attendus formalisés.', apprentissage: 'Le développement a besoin de contenus validés à des dates précises.' },
            { obstacle: 'Pas le temps de monter l’envoi d’e-mails', solution: 'Un mot de passe temporaire, changé de force à la connexion.', apprentissage: 'Simplifier sans rien céder sur la sécurité.' },
            { obstacle: 'Un QR code fixe pouvait être photographié et partagé', solution: 'Un QR code qui change toutes les 30 secondes, avec un QR de secours encadré.', apprentissage: 'Penser aux détournements dès la conception.' },
            { obstacle: 'Le don ne devait pas rapporter de points', solution: 'Le don donne une carte-souvenir, et les points viennent des quiz, défis et parrainages.', apprentissage: 'Un modèle de données souple permet de pivoter sans tout réécrire.' },
            { obstacle: 'Pas d’hébergeur conforme au RGPD à temps', solution: 'Une démo provisoire, signalée, et un plan de migration pour la V2.', apprentissage: 'Bien distinguer une démo d’une mise en production, et le documenter.' },
          ]}
        />
      </Section>
    </Fiche>
  );
}
