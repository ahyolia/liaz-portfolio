// Fiche projet Aïma. Chaque section est un composant de src/components/projet/ :
// cette page ne contient que le contenu.
import ProjectLayout from '../../../components/projet/ProjectLayout';
import CaseHero from '../../../components/projet/CaseHero';
import Contexte from '../../../components/projet/Contexte';
import Questions from '../../../components/projet/Questions';
import Demarche from '../../../components/projet/Demarche';
import Apport from '../../../components/projet/Apport';
import Galerie from '../../../components/projet/Galerie';
import Liens from '../../../components/projet/Liens';

const img = '/images/projets/aima';
const figma = {
  designSystem: 'https://www.figma.com/design/Yjc8sSNqHNsmWr33Cmg9qt/SAE-501---BloodShare---DesignSystem?node-id=0-1',
  arborescence: 'https://www.figma.com/board/2abX7caT6PqLIyTfEjXGdZ/SAE-501---Blood-Share-arborescence?node-id=0-1',
};
const demo = 'https://aima-nc.netlify.app';
const github = 'https://github.com/ahyolia/bloodshare';

export const metadata = {
  title: "Aïma, l'appli du don du sang — Camélia Amin Handoyo",
  description: "Étude de cas : Aïma, application gamifiée de fidélisation des donneurs de sang pour l'ADSB-NC (React Native, Laravel, Filament).",
};

export default function Page() {
  return (
    <ProjectLayout slug="aima">
      <CaseHero
        eyebrow="Étude de cas · appli mobile"
        titre="Aïma, l'appli qui fidélise les donneurs de sang"
        accroche="Une appli qui donne envie de donner son sang, et d'y retourner."
        couleur="#FFE4E0"
        liens={[
          { href: demo, label: 'Tester la démo web' },
          { href: github, label: 'Code sur GitHub' },
        ]}
      >
        <div className="phone-duo" data-depth="0.4">
          <div className="phone"><img src={`${img}/screens_app/aima_screen.webp`} alt="Accueil d'Aïma : alerte de stock critique, réserves de sang par groupe et actualités" width="302" height="650" /></div>
          <div className="phone"><img src={`${img}/screens_app/aima_screen2.webp`} alt="Profil d'Aïma : avatar, niveau Curieux, nombre de dons, points et badges" width="300" height="654" /></div>
        </div>
        <img className="floaty floaty--card" src={`${img}/cards/mois-01.webp`} alt="" width="900" height="1273" data-depth="1.4" style={{ "--x": "0%", "--y": "6%", "--r": "-14deg", "--size": "5.5rem" }} />
        <img className="floaty floaty--icon" src={`${img}/branding/aima-icone-aubergine@2x.png`} alt="" width="240" height="240" data-depth="1.2" style={{ "--x": "80%", "--y": "2%", "--r": "8deg", "--size": "4.5rem", "--delay": "-4s" }} />
        <img className="floaty floaty--label" src={`${img}/branding/aima-logo-couleur@2x.png`} alt="" width="1520" height="476" data-depth="1.8" style={{ "--x": "-2%", "--y": "70%", "--r": "-6deg", "--size": "9rem", "--delay": "-2s" }} />
        <span className="floaty sticker" data-depth="2" style={{ "--x": "68%", "--y": "84%", "--r": "-8deg", "--size": "auto", "--delay": "-1s" }}>Nouvelle-Calédonie</span>
      </CaseHero>

      <Contexte
        outils={[
          { nom: 'React Native', icone: '/images/tools/react.svg' },
          { nom: 'Laravel', icone: '/images/tools/laravel.svg' },
          { nom: 'PHP', icone: '/images/tools/php.svg' },
          { nom: 'PostgreSQL', icone: '/images/tools/postgresql.svg' },
          { nom: 'Docker', icone: '/images/tools/docker.svg' },
          { nom: 'Dokploy', icone: '/images/tools/dokploy-noir.svg' },
          { nom: 'Git', icone: '/images/tools/git.svg' },
        ]}
        fiche={[
          { label: 'Client / cadre', valeur: 'ADSB-NC, SAÉ BUT MMI 3' },
          { label: 'Durée', valeur: 'février → octobre 2026' },
          { label: 'Équipe', valeur: '2 dev, 2 com' },
          { label: 'Mon rôle', valeur: 'Dev full-stack et refonte UI/UX' },
          { label: 'Outils', valeur: 'ClickUp, Figma, React Native (Expo), Laravel, Filament, PostgreSQL, Docker, Dokploy' },
        ]}
        statut="V1 en relecture"
      >
        <p>Pendant notre troisième année de BUT MMI, on a travaillé avec l'ADSB-NC, l'association des donneurs de sang de Nouvelle-Calédonie. On était quatre : Geneviève Mekenese et moi au développement, Emmy Vergé et Hugo Galy à la stratégie de communication.</p>
        <p>Ensemble, on a imaginé Aïma : une appli mobile (iOS, Android et web), avec son API et un backoffice pour que l'association puisse gérer ses contenus en autonomie.</p>
        <p>Notre objectif : donner envie de faire un premier don, puis de revenir. Plutôt que des points, on récompense les donneurs avec <span className="hl">des cartes à collectionner</span>, et on prend soin de leurs données de santé.</p>
      </Contexte>

      <Questions
        questions={[
          {
            question: 'Comment récompenser un don sans en faire un achat ?',
            reponse: "L'association ne voulait pas qu'un don rapporte des points, comme une carte de fidélité. On a séparé les deux : les points viennent des quiz, du parrainage et des défis, et un don débloque la carte-souvenir du mois.",
          },
          {
            question: "Comment éviter l'effet « jeu d'argent » ?",
            reponse: "On a écarté les boosters et les cartes rares. Chaque récompense s'obtient par une action précise : on sait toujours pourquoi on l'a eue.",
          },
          {
            question: 'Comment protéger des données de santé ?',
            reponse: "Savoir qu'une personne donne son sang, c'est déjà une donnée de santé. Le don est validé par un QR code anonyme, le questionnaire d'éligibilité ne garde aucune réponse, et on a rédigé une analyse d'impact RGPD.",
          },
        ]}
      />

      <Demarche
        etapes={[
          {
            titre: 'Cahier des charges et gestion de projet',
            texte: 'On a commencé par rédiger le cahier des charges et les documents de gamification. Toute la gestion de projet se passait dans ClickUp, avec un système de tickets écrits en user stories.',
            image: { src: `${img}/demarche/cdc.webp`, alt: "Espace ClickUp du projet : le cahier des charges technique d'Aïma et les dossiers de documentation, de user stories et de tickets", width: 1534, height: 746 },
          },
          {
            titre: 'Wireframes et maquettes',
            texte: "On a construit l'arborescence de l'appli, puis les wireframes et les maquettes, avec un design system commun sur Figma.",
            image: { src: `${img}/demarche/maquettes.webp`, alt: "Fichier Figma du projet : wireframes des écrans Accueil, Don, Quiz et Cartes, avec l'arborescence de chaque partie", width: 1534, height: 824 },
            liens: [
              { href: figma.arborescence, label: 'Arborescence' },
              { href: figma.designSystem, label: 'Design system et maquettes' },
            ],
          },
          {
            titre: 'Backoffice et API',
            texte: "On a développé l'API Laravel et le backoffice Filament, pour que l'association gère elle-même ses contenus, ses événements et ses défis. J'ai d'abord déployé le backoffice sur Dokploy, puis je l'ai hébergé sur un Raspberry Pi pour le forum de l'IUT.",
            image: { src: `${img}/demarche/backoffice.webp`, alt: 'Tableau de bord du backoffice Aïma : utilisateurs, dons du mois, nouveaux inscrits et défi du mois, avec les menus Administration, Opérations, Communication et Gamification', width: 1534, height: 742 },
          },
          {
            titre: 'Intégration UI/UX et mise en ligne',
            texte: 'On a fait la refonte UI/UX et intégré le contenu textuel et les illustrations. On a aussi rédigé les aspects juridiques (CGU, politique de confidentialité, mentions légales), puis hébergé le front sur Netlify.',
            image: { src: `${img}/demarche/integration_front.webp`, alt: "Écran Quiz d'Aïma intégré, testé au format iPhone dans les outils de développement du navigateur", width: 1534, height: 744 },
            liens: [{ href: demo, label: "Voir l'appli en ligne" }],
          },
        ]}
      />

      <Apport
        casquettes={[
          {
            titre: 'Dev full-stack',
            texte: "De la base de données jusqu'à la mise en ligne.",
            competences: ['API Laravel', 'Backoffice Filament', 'Gamification', 'Scan QR code', 'Notifications push', 'Sécurité & RGPD', 'Docker', 'Raspberry Pi + Netlify'],
          },
          {
            titre: 'Refonte UI/UX',
            texte: 'Des écrans plus clairs et une appli qui parle comme ses utilisateurs.',
            competences: ['Écrans Profil, Don, Quiz, Cartes', 'Révélation animée des cartes', 'Identité Aïma dans le backoffice', 'Ton tutoyé et bienveillant'],
          },
        ]}
      />

      <Galerie
        titre="L'appli et ses supports"
        intro="Le rendu final : les écrans de l'appli, son identité visuelle et les supports imprimés remis aux donneurs lors du Forum des projets tutorés de l'IUT de la Nouvelle-Calédonie."
        filtres={[
          { id: 'appli', label: 'Appli' },
          { id: 'com', label: 'Com' },
          { id: 'identite', label: 'Identité' },
        ]}
        items={[
          {
            cat: 'appli',
            legende: "L'appli sur téléphone",
            images: [{ src: `${img}/screens_app/mockups-aima.webp`, alt: "Aïma ouverte sur l'écran d'accueil, sur un téléphone posé contre un ordinateur portable", width: 1080, height: 721 }],
          },
          {
            cat: 'identite',
            variante: 'logo',
            legende: 'Logo · couleur / inversé',
            images: [
              { src: `${img}/branding/aima-logo-couleur@2x.png`, alt: 'Logo Aïma en couleur', width: 1520, height: 476 },
              { src: `${img}/branding/aima-logo-inverse@2x.png`, alt: 'Logo Aïma en version inversée, sur fond aubergine', width: 1520, height: 476, fond: '#3F2430' },
            ],
          },
          {
            cat: 'com',
            legende: 'Carte de visite · recto / verso',
            images: [
              { src: `${img}/com/businesscard_recto.webp`, alt: 'Carte de visite Aïma, recto illustré', width: 1080, height: 756 },
              { src: `${img}/com/businesscard_verso.webp`, alt: "Carte de visite Aïma, verso avec les contacts du Centre du don du sang et de l'ADSB-NC", width: 1080, height: 756 },
            ],
          },
          {
            cat: 'com',
            legende: "Carte d'accès au compte · recto / verso",
            images: [
              { src: `${img}/com/accountcard_recto.webp`, alt: "Carte d'accès au compte, recto illustré", width: 1080, height: 717 },
              { src: `${img}/com/accountcard_verso.webp`, alt: "Carte d'accès au compte, verso avec le QR code et l'identifiant du donneur", width: 1080, height: 720 },
            ],
          },
          {
            cat: 'identite',
            variante: 'icon',
            legende: "Icône d'appli · aubergine / crème",
            images: [
              { src: `${img}/branding/aima-icone-aubergine@2x.png`, alt: "Icône de l'appli Aïma, version aubergine", width: 240, height: 240 },
              { src: `${img}/branding/aima-icone-creme.png`, alt: "Icône de l'appli Aïma, version crème", width: 1024, height: 1024, fond: '#3F2430' },
            ],
          },
        ]}
      />

      <Liens
        liens={[
          { href: demo, label: 'Démo web' },
          { href: github, label: 'GitHub' },
          { href: figma.designSystem, label: 'Design system Figma' },
          { href: figma.arborescence, label: 'Arborescence Figma' },
        ]}
      />
    </ProjectLayout>
  );
}
