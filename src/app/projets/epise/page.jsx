// Fiche projet EPISE, l'épicerie solidaire de l'UNC (BUT MMI 2, 2025).
// Semestre 3 : site PHP MVC en équipe de quatre (cahier des charges, wireframes).
// Semestre 4 : reprise en solo, front Angular branché sur une API REST du back PHP,
// design patterns. Contenu tiré du cahier des charges et de l'analyse des deux dépôts ;
// captures faites en lançant le projet en local (WAMP + ng serve).
import ProjectLayout from '../../../components/projet/ProjectLayout';
import CaseHero from '../../../components/projet/CaseHero';
import Contexte from '../../../components/projet/Contexte';
import Demarche from '../../../components/projet/Demarche';
import Apport from '../../../components/projet/Apport';
import Galerie from '../../../components/projet/Galerie';
import Liens from '../../../components/projet/Liens';

const img = '/images/projets/epise';
const front = 'https://github.com/ahyolia/SAE401-frontend';
const back = 'https://github.com/ahyolia/SAE401-backend';
const wireframe = 'https://www.figma.com/design/bFg259ozNI0dZ3oA8TBsoi/wireframe-zoning-epise?node-id=0-1';
const prototype = 'https://www.figma.com/proto/bFg259ozNI0dZ3oA8TBsoi/wireframe-zoning-epise?node-id=4135-69&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1';
const diagrammes = 'https://www.figma.com/board/zt2ONMAPKnsaYbVJAbqwj6/SAE-301---diagrames?node-id=0-1';
const cdc = `${img}/cahier-des-charges.pdf`;
const page = { width: 1100, height: 1557 };
const ecran = { width: 1440, height: 900 };

export const metadata = {
  title: "EPISE, la plateforme de l'épicerie solidaire de l'UNC — Camélia Amin Handoyo",
  description:
    "EPISE, plateforme web de l'épicerie solidaire de l'UNC. Un site PHP MVC conçu à quatre, puis repris en solo avec un front Angular, une API REST et des design patterns (Singleton, Factory).",
};

export default function Page() {
  return (
    <ProjectLayout slug="epise">
      <CaseHero
        slug="epise"
        eyebrow="Site e-commerce solidaire"
        titre="EPISE, réserver ses courses à l'épicerie solidaire de l'UNC"
        accroche="Une plateforme où les étudiants réservent leurs paniers, où les donateurs proposent leurs dons, et où l'équipe de l'épicerie gère tout depuis un back-office."
        couleur="#D5F0EE"
        liens={[
          { href: front, label: 'Code du front (Angular)' },
          { href: back, label: 'Code du back (PHP)' },
        ]}
      >
        <img src={`${img}/site-accueil.webp`} alt="L'accueil du site EPISE : « L'épicerie solidaire de l'UNC », avec les accès Devenir adhérent, Faire un don, Devenir bénévole et Où nous trouver" {...ecran} data-depth="0.4" style={{ width: '92%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>2 paniers / semaine</span>
        <img className="floaty floaty--card" src={`${img}/bo-produits.webp`} alt="" {...ecran} data-depth="1.6" style={{ '--x': '70%', '--y': '68%', '--r': '6deg', '--size': '10rem', '--delay': '-3s', border: '4px solid var(--ink)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '6%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>Angular + API PHP</span>
      </CaseHero>

      <Contexte
        outils={[
          { nom: 'Angular', icone: '/images/tools/angular.svg' },
          { nom: 'PHP', icone: '/images/tools/php.svg' },
          { nom: 'MySQL', icone: '/images/tools/mysql.svg' },
          { nom: 'Figma', icone: '/images/tools/figma.svg' },
          { nom: 'Git', icone: '/images/tools/git.svg' },
          { nom: 'Jira', icone: '/images/tools/jira.svg' },
          { nom: 'Notion', icone: '/images/tools/notion.svg' },
        ]}
        fiche={[
          { label: 'Cadre', valeur: 'SAÉ 301 puis SAÉ 401, BUT MMI 2' },
          { label: 'Année', valeur: '2025' },
          { label: 'Semestre 3', valeur: 'En équipe avec Magalie Chen, Matéo Labiau et Hugo Galy' },
          { label: 'Semestre 4', valeur: 'En solo, parcours Développement web et dispositifs interactifs' },
          { label: 'Mon rôle', valeur: 'Front office et UI/UX, puis développement complet' },
          { label: 'Outils', valeur: 'Angular 20, PHP MVC, MySQL, Figma, Notion, Jira' },
        ]}
        statut="Projet d'études, non hébergé"
      >
        <p>EPISE est <b>l'épicerie solidaire de l'Université de la Nouvelle-Calédonie</b>. Portée par la Mission Vie Étudiante, elle aide les <b>étudiants en situation de précarité</b> à accéder à l'alimentation, aux produits d'hygiène et aux fournitures, grâce aux dons d'entreprises, de particuliers et au travail de bénévoles.</p>
        <p>Au 3<sup>e</sup> semestre, nous avons conçu à quatre sa <b>plateforme web</b>, en <b>PHP MVC</b>. Elle met en relation <span className="hl">trois profils</span>, les <b>étudiants adhérents</b> qui réservent leurs paniers, les <b>donateurs</b> qui proposent des dons, et l'<b>équipe</b> de l'épicerie qui gère les stocks depuis un back-office.</p>
        <p>Au 4<sup>e</sup> semestre, dans le parcours Développement web et dispositifs interactifs, <b>j'ai repris le projet seule</b>. J'ai créé un nouveau front office en <b>Angular</b>, branché sur une <b>API REST</b> ajoutée au back PHP, et renforcé l'architecture avec des <b>design patterns</b>.</p>
      </Contexte>

      <Demarche
        etapes={[
          {
            titre: 'Le cahier des charges (S3, à quatre)',
            texte: "Nous avons commencé par le cahier des charges, avec le contexte, les objectifs, un benchmark de sites solidaires et les personas adhérent, donateur et gestionnaire. Il fallait aussi traduire les règles de l'épicerie dans le site, comme l'adhésion de 200 F par an, 2 paniers par semaine, 5 articles alimentaires maximum et 1 article par produit.",
            images: [
              { src: `${img}/cdc-couverture.webp`, alt: "Couverture du cahier des charges d'EPISE, par l'équipe Ninjago", ...page },
              { src: `${img}/cdc-personas.webp`, alt: 'Page Cibles et personas du cahier des charges', ...page },
              { src: `${img}/cdc-backlog.webp`, alt: 'Page Backlog produit : profils et règles de l’épicerie', ...page },
            ],
            liens: [{ href: cdc, label: 'Lire le cahier des charges (PDF)' }],
          },
          {
            titre: 'Les wireframes et le brandboard (S3)',
            texte: "Organisés en Scrum, avec un backlog sur Jira et un espace Notion que j'ai mis en place, nous avons défini le parcours. Matéo a dessiné les wireframes et le prototype sur Figma. De mon côté, j'ai fait l'arborescence, puis le brandboard avec Hugo, autour d'une palette de bleus et de verts reprise du logo.",
            images: [
              { src: `${img}/wf-accueil.webp`, alt: "Wireframe de la page d'accueil", width: 546, height: 943 },
              { src: `${img}/wf-magasin.webp`, alt: 'Wireframe de la page Magasin', width: 648, height: 943 },
              { src: `${img}/brandboard.webp`, alt: 'Brandboard : palette de couleurs, boutons et sections', ...page },
            ],
            liens: [
              { href: prototype, label: 'Voir le prototype Figma' },
              { href: diagrammes, label: 'Voir les diagrammes Figma' },
            ],
          },
          {
            titre: 'Le site PHP MVC (S3)',
            texte: "Le site est construit sur un petit framework MVC en PHP, dont j'ai mis en place l'architecture, avec un routeur, des contrôleurs et des modèles par ressource, et des vues. J'ai développé le front office (catégories, panier, tunnel de réservation, inscription et profil adhérent), et Magalie a développé le back-office sécurisé, avec la validation des dons.",
            image: { src: `${img}/bo-dons.webp`, alt: 'Back-office : liste des dons à valider ou refuser', ...ecran },
          },
          {
            titre: 'Une API REST et des design patterns (S4, en solo)',
            texte: "J'ai transformé le back en API. Un contrôleur <code>Api</code> répartit les requêtes GET, POST, PUT et DELETE vers chaque ressource, des en-têtes CORS ouvrent l'accès au front Angular, et la session passe par un jeton dans un cookie HttpOnly. J'ai aussi ajouté deux design patterns, un <strong>Singleton</strong> pour la connexion à la base et une <strong>Factory</strong> qui crée les modèles à partir d'une interface commune, chacun avec son script de test, ainsi qu'un test de configuration HTTPS.",
            image: { src: `${img}/bo-articles.webp`, alt: 'Back-office : gestion des articles d’actualité', ...ecran },
            liens: [{ href: back, label: 'Voir le code du back' }],
          },
          {
            titre: 'Le front office en Angular (S4, en solo)',
            texte: "J'ai refait tout le front office en Angular 20, avec une vingtaine de pages en composants autonomes, une couche de services par ressource et un intercepteur qui joint le jeton aux requêtes. Le magasin filtre par catégorie et applique les règles de l'épicerie, tandis que le panier compte les produits réservés sur 5. S'y ajoutent l'espace compte, l'adhésion, le mot de passe oublié, le bandeau de cookies et les pages légales.",
            image: { src: `${img}/site-magasin.webp`, alt: 'Le magasin : recherche, catégories et produits avec leur stock et le bouton Ajouter au panier', ...ecran },
            liens: [{ href: front, label: 'Voir le code du front' }],
          },
        ]}
      />

      <Apport
        casquettes={[
          {
            titre: 'Développement full-stack',
            texte: 'Un back PHP en API et un front Angular, repris seule de bout en bout.',
            competences: ['Angular 20', 'API REST en PHP', 'Architecture MVC', 'Singleton et Factory', 'Authentification par jeton', 'MySQL'],
          },
          {
            titre: 'UI/UX et gestion de projet',
            texte: 'Un site pensé pour trois profils, d’abord en équipe de quatre.',
            competences: ['Arborescence', 'Brandboard', 'User stories', 'Scrum, Notion et Jira'],
          },
        ]}
      />

      <Galerie
        titre="EPISE en images"
        intro="Le site et le back-office lancés en local, les wireframes et quelques pages du cahier des charges."
        filtres={[
          { id: 'site', label: 'Site' },
          { id: 'backoffice', label: 'Back-office' },
          { id: 'conception', label: 'Conception' },
        ]}
        items={[
          { cat: 'site', legende: 'Accueil', images: [{ src: `${img}/site-accueil.webp`, alt: "L'accueil du site EPISE", ...ecran }] },
          { cat: 'site', legende: 'Magasin', images: [{ src: `${img}/site-magasin.webp`, alt: 'Le magasin et ses produits', ...ecran }] },
          { cat: 'site', legende: 'Magasin, sans adhésion', images: [{ src: `${img}/site-magasin-visiteur.webp`, alt: "Le magasin pour un visiteur : message « Réservé aux adhérents » et lien vers l'adhésion", ...ecran }] },
          { cat: 'site', legende: 'Panier', images: [{ src: `${img}/site-panier.webp`, alt: 'Le panier', ...ecran }] },
          { cat: 'site', legende: 'Mon compte', images: [{ src: `${img}/site-compte.webp`, alt: "L'espace compte : historique des commandes et des dons", ...ecran }] },
          { cat: 'site', legende: 'À propos', images: [{ src: `${img}/site-apropos.webp`, alt: "La page À propos : présentation et histoire de l'EPISE", ...ecran }] },
          { cat: 'site', legende: 'Inscription', images: [{ src: `${img}/site-inscription.webp`, alt: "La page d'inscription : choix entre étudiant et particulier", ...ecran }] },
          { cat: 'backoffice', legende: 'Produits', images: [{ src: `${img}/bo-produits.webp`, alt: 'Back-office : gestion des produits', ...ecran }] },
          { cat: 'backoffice', legende: 'Dons à valider', images: [{ src: `${img}/bo-dons.webp`, alt: 'Back-office : dons à valider', ...ecran }] },
          { cat: 'backoffice', legende: 'Catégories', images: [{ src: `${img}/bo-categories.webp`, alt: 'Back-office : gestion des catégories', ...ecran }] },
          { cat: 'backoffice', legende: 'Réservations', images: [{ src: `${img}/bo-reservations.webp`, alt: 'Back-office : réservations à valider et validées', ...ecran }] },
          { cat: 'backoffice', legende: 'Articles', images: [{ src: `${img}/bo-articles.webp`, alt: 'Back-office : gestion des articles', ...ecran }] },
          { cat: 'conception', legende: 'Wireframe : panier', images: [{ src: `${img}/wf-panier.webp`, alt: 'Wireframe de la page Mon panier', width: 612, height: 1045 }] },
          { cat: 'conception', legende: 'Wireframes : connexion et inscription', images: [{ src: `${img}/wf-connexion.webp`, alt: 'Wireframes de connexion et d’inscription', width: 594, height: 1172 }] },
          { cat: 'conception', variante: 'page', legende: 'Cahier des charges : benchmark', images: [{ src: `${img}/cdc-benchmark.webp`, alt: 'Page Benchmark et veille', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Cahier des charges : RGPD', images: [{ src: `${img}/cdc-rgpd.webp`, alt: 'Page Aspects juridiques', ...page }] },
        ]}
      />

      <Liens
        liens={[
          { href: front, label: 'Code du front (Angular)' },
          { href: back, label: 'Code du back (PHP MVC)' },
          { href: prototype, label: 'Prototype Figma' },
          { href: wireframe, label: 'Wireframes Figma' },
          { href: diagrammes, label: 'Diagrammes Figma' },
          { href: cdc, label: 'Cahier des charges (PDF)' },
        ]}
      />
    </ProjectLayout>
  );
}
