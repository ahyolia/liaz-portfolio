// Fiche projet : mon identité personnelle (personal branding 2024), sur Illustrator.
// Contenu et visuels tirés de la page Behance du projet.
import ProjectLayout from '../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../components/projet/CaseHero';
import Contexte from '../../../../components/projet/Contexte';
import Demarche from '../../../../components/projet/Demarche';
import Apport from '../../../../components/projet/Apport';
import Galerie from '../../../../components/projet/Galerie';
import Liens from '../../../../components/projet/Liens';

const img = '/images/projets/personal-branding';
const behance = 'https://www.behance.net/gallery/221224075/(2024)-Personal-Branding';
const planche = { width: 1400, height: 840 };

export const metadata = {
  title: 'Personal branding, mon monogramme en sceau — Camélia Amin Handoyo',
  description:
    "Mon identité personnelle de 2024 : un monogramme C et A inspiré des sceaux d'Asie de l'Est et du Sud-Est, sa palette, et ses déclinaisons sur cartes de visite et packagings, sur Illustrator et Photoshop.",
};

export default function Page() {
  return (
    <ProjectLayout slug="personal-branding">
      <CaseHero
        slug="personal-branding"
        eyebrow="Identité personnelle"
        titre="Mon personal branding, un monogramme comme un sceau"
        accroche="Mes initiales, C et A, réunies dans un monogramme inspiré des sceaux d'Asie, ces tampons qui servent de signature."
        couleur="#F3E3D6"
        liens={[{ href: behance, label: 'Voir sur Behance' }]}
      >
        <img src={`${img}/couverture.webp`} alt="Le monogramme C et A, en version filaire et en version pleine prune, sur fond crème" {...planche} data-depth="0.4" style={{ width: '92%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>C + A</span>
        <img className="floaty floaty--card" src={`${img}/canette.webp`} alt="" width="1400" height="1738" data-depth="1.6" style={{ '--x': '82%', '--y': '34%', '--r': '7deg', '--size': '6rem', '--delay': '-3s', border: '4px solid var(--paper)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '6%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>印鑑 inkan</span>
      </CaseHero>

      <Contexte
        outils={[
          { nom: 'Illustrator', icone: '/images/tools/illustrator.svg' },
          { nom: 'Photoshop', icone: '/images/tools/photoshop.svg' },
        ]}
        fiche={[
          { label: 'Cadre', valeur: 'Personal branding, BUT MMI' },
          { label: 'Année', valeur: '2024' },
          { label: 'Équipe', valeur: 'Projet solo' },
          { label: 'Mon rôle', valeur: 'Logo, palette et déclinaisons' },
          { label: 'Outils', valeur: 'Illustrator (logo), Photoshop (mockups)' },
        ]}
        statut="Publié sur Behance"
      >
        <p>En 2024, j'ai créé <b>mon identité personnelle</b>, avec <b>un logo qui me représente</b>, sa palette de couleurs et ses déclinaisons sur des supports.</p>
        <p>Je me suis inspirée des <span className="hl">sceaux traditionnels d'Asie de l'Est et du Sud-Est</span>. Au Japon, ces tampons appelés <em>inkan</em> (印鑑) ou <em>hanko</em> (判子) <b>servent de signature</b> pour authentifier les actes officiels. Ce sont déjà des identités graphiques en soi.</p>
        <p><b>Mon monogramme</b> reprend ce principe, avec mes initiales tracées avec l'élégance d'une <b>écriture calligraphique</b>, et posées dans un cadre <b>comme un cachet</b>.</p>
      </Contexte>

      <Demarche
        etapes={[
          {
            titre: 'Les inspirations',
            texte: "Je suis partie des sceaux d'Asie de l'Est et du Sud-Est (inkan, hanko) et de la calligraphie, des signatures graphiques compactes posées dans un cadre.",
            image: { src: `${img}/inspirations.webp`, alt: 'Planche Inspirations : sceaux japonais et lettres calligraphiées', ...planche },
          },
          {
            titre: 'Le monogramme',
            texte: "Le logo assemble un C pour Camélia et un A pour Amin Handoyo dans un seul tracé calligraphique, inscrit dans un rectangle comme un sceau.",
            image: { src: `${img}/logo-details.webp`, alt: 'Planche Details : le C pour Camélia et le A pour Amin Handoyo dans le monogramme', width: 1400, height: 841 },
          },
          {
            titre: 'La palette et les déclinaisons',
            texte: "Le monogramme se décline en quatre couleurs (prune, rouge, vert anis et orange) sur un fond crème, en version filaire ou pleine, et en losange.",
            image: { src: `${img}/logo-couleurs.webp`, alt: 'Planche Logo : déclinaisons du monogramme en quatre couleurs', ...planche },
          },
          {
            titre: 'Les supports',
            texte: "Pour finir, j'ai appliqué l'identité à des cartes de visite et à deux packagings imaginaires, une crème « Liaz care » et une canette « Jeruknya », mis en situation dans des mockups sur Photoshop.",
            image: { src: `${img}/cartes-visite.webp`, alt: 'Mes cartes de visite, recto et verso, avec le monogramme et des motifs floraux', width: 1400, height: 1145 },
            liens: [{ href: behance, label: 'Voir le projet sur Behance' }],
          },
        ]}
      />

      <Apport
        casquettes={[
          {
            titre: 'Identité visuelle',
            texte: 'Une identité qui me ressemble, de l’inspiration aux supports.',
            competences: ['Création de logo', 'Monogramme', 'Palette de couleurs', 'Packaging', 'Cartes de visite', 'Mockups', 'Illustrator', 'Photoshop'],
          },
        ]}
      />

      <Galerie
        titre="Mon personal branding en images"
        intro="Les planches de mon identité et ses supports."
        filtres={[
          { id: 'identite', label: 'Identité' },
          { id: 'supports', label: 'Supports' },
        ]}
        items={[
          { cat: 'identite', legende: 'Le monogramme', images: [{ src: `${img}/couverture.webp`, alt: 'Le monogramme en version filaire et pleine', ...planche }] },
          { cat: 'identite', legende: 'Inspirations', images: [{ src: `${img}/inspirations.webp`, alt: 'Planche Inspirations', ...planche }] },
          { cat: 'identite', legende: 'Couleurs', images: [{ src: `${img}/logo-couleurs.webp`, alt: 'Déclinaisons de couleurs du monogramme', ...planche }] },
          { cat: 'identite', legende: 'Détails', images: [{ src: `${img}/logo-details.webp`, alt: 'Détails du monogramme', width: 1400, height: 841 }] },
          { cat: 'supports', legende: 'Cartes de visite', images: [{ src: `${img}/cartes-visite.webp`, alt: 'Mes cartes de visite', width: 1400, height: 1145 }] },
          { cat: 'supports', legende: 'Crème « Liaz care »', images: [{ src: `${img}/packaging-creme.webp`, alt: 'Packaging de crème Liaz care', width: 1400, height: 1050 }] },
          { cat: 'supports', legende: 'Canette « Jeruknya »', images: [{ src: `${img}/canette.webp`, alt: 'Canette Jeruknya avec le monogramme', width: 1400, height: 1738 }] },
        ]}
      />

      <Liens liens={[{ href: behance, label: 'Le projet sur Behance' }]} />
    </ProjectLayout>
  );
}
