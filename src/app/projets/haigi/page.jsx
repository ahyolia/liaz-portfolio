// Fiche projet Haigi, identité de marque fictive (BUT MMI 1, 2024), réalisée avec
// Geneviève Mekenese. Contenu et visuels tirés de la page Behance du projet.
import ProjectLayout from '../../../components/projet/ProjectLayout';
import CaseHero from '../../../components/projet/CaseHero';
import Contexte from '../../../components/projet/Contexte';
import Demarche from '../../../components/projet/Demarche';
import Apport from '../../../components/projet/Apport';
import Galerie from '../../../components/projet/Galerie';
import Liens from '../../../components/projet/Liens';

const img = '/images/projets/haigi';
const behance = 'https://www.behance.net/gallery/208247875/Haigi-Brand-Identity';
const planche = { width: 1400, height: 767 };

export const metadata = {
  title: 'Haigi, une identité de marque — Camélia Amin Handoyo',
  description:
    "Haigi, identité visuelle d'une marque fictive de capsules qui transforment un liquide en objet. Moodboards, logo, typographies, affiches et cartes de visite, sur Illustrator. Projet de BUT MMI 1 en binôme.",
};

export default function Page() {
  return (
    <ProjectLayout slug="haigi">
      <CaseHero
        slug="haigi"
        eyebrow="Identité de marque"
        titre="Haigi, une marque entre fun et mystique"
        accroche="Une capsule dont le liquide se change en l'objet dont on a besoin. Pour cette première identité de marque, nous sommes allées du moodboard jusqu'aux supports imprimés."
        couleur="#F6D3E4"
        liens={[{ href: behance, label: 'Voir sur Behance' }]}
      >
        <img src={`${img}/couverture.webp`} alt="Couverture de l'identité Haigi : « Brand identity », le logo Haigi en blanc sur un dégradé vert et rose" {...planche} data-depth="0.4" style={{ width: '92%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>Fun & Mystic</span>
        <img className="floaty floaty--card" src={`${img}/cartes-visite.webp`} alt="" width="1400" height="1145" data-depth="1.6" style={{ '--x': '74%', '--y': '64%', '--r': '7deg', '--size': '9rem', '--delay': '-3s', border: '4px solid var(--paper)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '6%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>Marque fictive</span>
      </CaseHero>

      <Contexte
        outils={[{ nom: 'Illustrator', icone: '/images/tools/illustrator.svg' }]}
        fiche={[
          { label: 'Cadre', valeur: 'Premier projet de design de marque, BUT MMI 1' },
          { label: 'Année', valeur: '2024' },
          { label: 'Équipe', valeur: 'Binôme avec Geneviève Mekenese' },
          { label: 'Mon rôle', valeur: 'Concept, moodboard, logo et supports' },
          { label: 'Outils', valeur: 'Illustrator' },
        ]}
        statut="Publié sur Behance"
      >
        <p>Haigi est une <b>marque fictive</b>, créée pour notre <b>premier projet de design de marque</b> en BUT MMI, en binôme avec Geneviève Mekenese.</p>
        <p>L'idée est <b>une capsule qui contient un liquide unique</b>. Une fois brisée, elle se solidifie en <b>l'objet dont on a besoin</b>. On peut même mélanger plusieurs liquides pour <span className="hl">combiner les fonctions</span>, comme une lampe-tasse.</p>
        <p>Il fallait donc une identité à la fois <b>ludique et un peu magique</b>, capable de porter une promesse de <b>personnalisation</b>, « Personnalisez le design de chaque objet pour qu'il reflète votre style ! »</p>
      </Contexte>

      <Demarche
        etapes={[
          {
            titre: 'Le concept',
            texte: "Nous avons d'abord écrit le concept et le ton de la marque, autour d'une capsule révolutionnaire qui transforme un simple liquide en tous vos besoins, et un slogan centré sur la personnalisation.",
            image: { src: `${img}/concept.webp`, alt: 'Planche de présentation du concept Haigi et de ses capsules', ...planche },
          },
          {
            titre: 'Deux moodboards, Fun et Mystic',
            texte: "Chacune a fait son moodboard, « Fun » pour Geneviève, avec des objets colorés et pop, et « Mystic » pour moi, plus sombre et mystérieux. L'identité est née du mélange des deux.",
            image: { src: `${img}/moodboards.webp`, alt: 'Les deux moodboards : Fun, par Geneviève, et Mystic, par Camélia', ...planche },
          },
          {
            titre: 'Le logo',
            texte: "Le logo reprend cette double personnalité : une écriture fluide et organique, comme un liquide qui prend forme, avec une étoile en guise de point sur le i. Il se décline en version claire, foncée et sur le dégradé vert et rose de la marque, avec un monogramme.",
            image: { src: `${img}/logos.webp`, alt: 'Les déclinaisons du logo Haigi et de son monogramme, en clair, en foncé et sur dégradé', ...planche },
          },
          {
            titre: 'Les typographies',
            texte: "Soopafresh pour les titres percutants, Gyahegi pour la touche mystique, Edwardian Script pour l'élégance et Avenir pour la lecture des textes.",
            image: { src: `${img}/typos-titres.webp`, alt: 'Les typographies Soopafresh et Gyahegi, avec leurs glyphes', ...planche },
          },
          {
            titre: 'Les supports',
            texte: "Pour finir, nous avons appliqué l'identité à des supports, une campagne d'affichage « Back to school » et des cartes de visite.",
            image: { src: `${img}/affiches-kiosque.webp`, alt: 'Les affiches Haigi « Back to school » sur un kiosque, en vert et en rose', width: 1400, height: 919 },
            liens: [{ href: behance, label: 'Voir le projet sur Behance' }],
          },
        ]}
      />

      <Apport
        casquettes={[
          {
            titre: 'Identité visuelle',
            texte: 'Une marque construite à deux, de l’idée aux supports imprimés.',
            competences: ['Concept de marque', 'Moodboard', 'Création de logo', 'Choix typographiques', 'Déclinaisons de supports', 'Illustrator'],
          },
        ]}
      />

      <Galerie
        titre="Haigi en images"
        intro="Les planches de l'identité de marque et ses supports."
        filtres={[
          { id: 'identite', label: 'Identité' },
          { id: 'supports', label: 'Supports' },
        ]}
        items={[
          { cat: 'identite', legende: 'Couverture', images: [{ src: `${img}/couverture.webp`, alt: "Couverture de l'identité Haigi", ...planche }] },
          { cat: 'identite', legende: 'Le logo', images: [{ src: `${img}/logos.webp`, alt: 'Les déclinaisons du logo', ...planche }] },
          { cat: 'identite', legende: 'Les moodboards', images: [{ src: `${img}/moodboards.webp`, alt: 'Les moodboards Fun et Mystic', ...planche }] },
          { cat: 'identite', legende: 'Typographies des titres', images: [{ src: `${img}/typos-titres.webp`, alt: 'Typographies Soopafresh et Gyahegi', ...planche }] },
          { cat: 'identite', legende: 'Typographies des textes', images: [{ src: `${img}/typos-textes.webp`, alt: 'Typographies Edwardian Script et Avenir', ...planche }] },
          { cat: 'identite', legende: 'Le slogan', images: [{ src: `${img}/slogan.webp`, alt: '« Personnalisez le design de chaque objet pour qu’il reflète votre style ! »', ...planche }] },
          { cat: 'supports', legende: 'Affiches', images: [{ src: `${img}/affiches-kiosque.webp`, alt: 'Les affiches sur un kiosque', width: 1400, height: 919 }] },
          { cat: 'supports', legende: 'Cartes de visite', images: [{ src: `${img}/cartes-visite.webp`, alt: 'Les cartes de visite Haigi, recto et verso', width: 1400, height: 1145 }] },
          { cat: 'supports', legende: 'Merci', images: [{ src: `${img}/merci.webp`, alt: 'Planche de fin « Thank you very much »', ...planche }] },
        ]}
      />

      <Liens liens={[{ href: behance, label: 'Le projet sur Behance' }]} />
    </ProjectLayout>
  );
}
