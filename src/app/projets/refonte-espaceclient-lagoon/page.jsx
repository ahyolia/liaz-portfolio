// Fiche projet : refonte UI/UX de l'espace client Lagoon (stage, pôle numérique
// d'OFFRATEL Lagoon, sept. → nov. 2025). Visuels : captures avant / après,
// pages abonnements (navigation ouverte et réduite) et maquettes Figma.
import ProjectLayout from '../../../components/projet/ProjectLayout';
import CaseHero from '../../../components/projet/CaseHero';
import Contexte from '../../../components/projet/Contexte';
import Demarche from '../../../components/projet/Demarche';
import Apport from '../../../components/projet/Apport';
import Galerie from '../../../components/projet/Galerie';
import Liens from '../../../components/projet/Liens';

const img = '/images/projets/refonte-espaceclient-lagoon';
const figma = 'https://www.figma.com/design/ditByHNFmJGXbUoVGEb2qi/Lagoon---Espace-client?node-id=0-1';
const ecran = { width: 1280, height: 832 };

export const metadata = {
  title: "Refonte de l'espace client Lagoon — Camélia Amin Handoyo",
  description:
    "Refonte UI/UX de l'espace client de Lagoon, fournisseur d'accès à internet calédonien, pendant mon stage chez OFFRATEL Lagoon, des maquettes Figma à l'intégration front, toujours en production.",
};

export default function Page() {
  return (
    <ProjectLayout slug="refonte-espaceclient-lagoon">
      <CaseHero
        slug="refonte-espaceclient-lagoon"
        eyebrow="Refonte UI/UX · stage"
        titre="Un espace client Lagoon plus clair et plus fluide"
        accroche="Pendant mon stage chez OFFRATEL Lagoon, j'ai repensé l'espace client sur Figma puis intégré moi-même le nouveau design. Il est toujours en production."
        couleur="#DCE9F7"
        liens={[{ href: figma, label: 'Voir les maquettes Figma' }]}
      >
        <img src={`${img}/mockup-accueil.webp`} alt="Le nouvel accueil de l'espace client Lagoon affiché sur un ordinateur portable posé sur un canapé" width="1200" height="903" data-depth="0.4" style={{ width: '88%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>En production</span>
        <img className="floaty floaty--card" src={`${img}/mockup-abonnements.webp`} alt="" width="1620" height="1080" data-depth="1.6" style={{ '--x': '70%', '--y': '66%', '--r': '6deg', '--size': '10rem', '--delay': '-3s', border: '4px solid var(--paper)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '6%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>Stage 2025</span>
      </CaseHero>

      <Contexte
        outils={[{ nom: 'Figma', icone: '/images/tools/figma.svg' }]}
        fiche={[
          { label: 'Cadre', valeur: 'Stage de 2 mois, pôle numérique d’OFFRATEL Lagoon' },
          { label: 'Durée', valeur: 'septembre → novembre 2025' },
          { label: 'Mon rôle', valeur: 'UI/UX design, dev front et graphisme' },
          { label: 'Outils', valeur: 'Figma, intégration front' },
        ]}
        statut="En production"
      >
        <p>Lagoon est un <b>fournisseur d'accès à internet</b> en Nouvelle-Calédonie. Ses clients gèrent leurs abonnements, leur consommation et leurs factures depuis un <b>espace client en ligne</b>.</p>
        <p>Pendant mon stage de deux mois au <b>pôle numérique d'OFFRATEL Lagoon</b>, ma mission était d'en proposer une <b>refonte UI/UX</b> pour <span className="hl">moderniser l'interface et rendre le parcours plus fluide</span>.</p>
        <p>J'ai conçu les <b>maquettes</b> sur <b>Figma</b>, puis intégré directement le nouveau design. D'après mon tuteur, il est <b>toujours en production</b> aujourd'hui, et les clients l'apprécient beaucoup.</p>
      </Contexte>

      <Demarche
        etapes={[
          {
            titre: "L'existant",
            texte: "Je suis partie de l'espace client en place, avec une navigation latérale très longue sans regroupement, et un accueil aux cartes plates qui donnait peu de repères pour aller plus loin.",
            image: { src: `${img}/avant-accueil.webp`, alt: "L'ancien accueil de l'espace client Lagoon : longue liste de liens à gauche et trois cartes grises", width: 1281, height: 576 },
          },
          {
            titre: 'Les maquettes sur Figma',
            texte: "Sur Figma, j'ai fait plusieurs versions des pages, de la V1 à la V5, en commençant par la navigation. Les menus sont regroupés en sous-menus, avec une version réduite en icônes et une déclinaison orange pour Lagoon Business.",
            image: { src: `${img}/maquettes-figma-navigation.webp`, alt: 'Le fichier Figma de la refonte : variantes de la navigation latérale, ouverte, réduite, et version Lagoon Business orange', width: 1534, height: 834 },
            liens: [{ href: figma, label: 'Voir les maquettes Figma' }],
          },
          {
            titre: 'La navigation et les abonnements',
            texte: "La navigation se replie en icônes pour laisser plus de place au contenu. Sur la page des abonnements, les abonnements suspendus remontent en tête, et chaque carte donne un accès direct à la consommation et à la facture, avec une recherche et un filtre.",
            images: [
              { src: `${img}/abonnements-sidebar-ouverte.webp`, alt: 'La page Mes abonnements avec la navigation ouverte et ses sous-menus', ...ecran },
              { src: `${img}/abonnements-sidebar-reduite.webp`, alt: 'La même page avec la navigation réduite en icônes : trois cartes par ligne', ...ecran },
            ],
          },
          {
            titre: "L'intégration",
            texte: "Après validation des maquettes, j'ai intégré le design directement dans l'espace client, avec un accueil qui salue le client, des cartes plus lisibles pour les abonnements, le solde et les demandes, et des raccourcis vers les autres services.",
            image: { src: `${img}/apres-accueil.webp`, alt: "Le nouvel accueil intégré : cartes Abonnements, Solde restant dû et Demandes, et raccourcis Conso+, Parrainage, Maintenances et Aide", ...ecran },
          },
        ]}
      />

      <Apport
        casquettes={[
          {
            titre: 'UI/UX design',
            texte: "Un parcours plus court pour les tâches les plus courantes.",
            competences: ['Audit de l’existant', 'Maquettes Figma', 'Itérations V1 → V5', 'Navigation repliable'],
          },
          {
            titre: 'Dev front',
            texte: 'Le design intégré par moi-même, jusqu’en production.',
            competences: ['Intégration des maquettes', 'Composants réutilisables', 'Mise en production'],
          },
          {
            titre: 'Graphisme',
            texte: 'Une interface fidèle à la marque Lagoon.',
            competences: ['Icônes', 'Cartes et hiérarchie visuelle', 'Déclinaison Lagoon Business'],
          },
        ]}
      />

      <Galerie
        titre="La refonte en images"
        intro="L'accueil avant / après (survolez pour comparer), la page des abonnements et les maquettes Figma."
        filtres={[
          { id: 'avant-apres', label: 'Avant / après' },
          { id: 'ecrans', label: 'Écrans' },
          { id: 'maquettes', label: 'Maquettes' },
        ]}
        items={[
          {
            cat: 'avant-apres',
            legende: "L'accueil · après / avant",
            images: [
              { src: `${img}/apres-accueil.webp`, alt: "Le nouvel accueil de l'espace client", ...ecran },
              { src: `${img}/avant-accueil.webp`, alt: "L'ancien accueil de l'espace client", width: 1281, height: 576 },
            ],
          },
          { cat: 'ecrans', legende: "L'accueil sur ordinateur", images: [{ src: `${img}/mockup-accueil.webp`, alt: "Le nouvel accueil de l'espace client sur un ordinateur portable", width: 1200, height: 903 }] },
          { cat: 'ecrans', legende: 'Les abonnements sur ordinateur', images: [{ src: `${img}/mockup-abonnements.webp`, alt: "La page des abonnements sur un ordinateur portable, posé sur une table", width: 1620, height: 1080 }] },
          { cat: 'ecrans', legende: 'Abonnements, navigation ouverte', images: [{ src: `${img}/abonnements-sidebar-ouverte.webp`, alt: 'La page Mes abonnements avec la navigation ouverte', ...ecran }] },
          { cat: 'ecrans', legende: 'Abonnements, navigation réduite', images: [{ src: `${img}/abonnements-sidebar-reduite.webp`, alt: 'La page Mes abonnements avec la navigation réduite', ...ecran }] },
          { cat: 'maquettes', legende: 'Variantes de la navigation', images: [{ src: `${img}/maquettes-figma-navigation.webp`, alt: 'Les variantes de la navigation latérale sur Figma', width: 1534, height: 834 }] },
        ]}
      />

      <Liens liens={[{ href: figma, label: 'Maquettes Figma' }]} />
    </ProjectLayout>
  );
}
