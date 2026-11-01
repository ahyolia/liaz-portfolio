// Fiche projet LIAZ' Sticker pack (Bday ver.), projet perso. Contenu tiré de la page
// Behance du projet ; visuels : l'affiche finale, des recadrages de l'affiche
// (le pack, la planche de stickers) et les deux photos d'enfance d'origine.
import ProjectLayout from '../../../components/projet/ProjectLayout';
import CaseHero from '../../../components/projet/CaseHero';
import Contexte from '../../../components/projet/Contexte';
import Demarche from '../../../components/projet/Demarche';
import Apport from '../../../components/projet/Apport';
import Galerie from '../../../components/projet/Galerie';
import Liens from '../../../components/projet/Liens';

const img = '/images/projets/sticker-pack';
const behance = 'https://www.behance.net/gallery/237023483/Sticker-pack-Design-(bday-ver)';
const affiche = { width: 1080, height: 1350 };
const photoCouronne = { width: 1133, height: 1600 };
const photoChapeau = { width: 1079, height: 1600 };

export const metadata = {
  title: "LIAZ' Sticker pack, édition anniversaire — Camélia Amin Handoyo",
  description:
    "LIAZ' Sticker pack (Bday ver.), projet perso réalisé sur Photoshop pour mes 20 ans : un pack de stickers en collage, à partir de photos d'enfance et de ce qui me représente.",
};

export default function Page() {
  return (
    <ProjectLayout slug="sticker-pack">
      <CaseHero
        slug="sticker-pack"
        eyebrow="Projet perso · design graphique"
        titre="LIAZ' Sticker pack, mes 20 ans en autocollants"
        accroche="Pour fêter mes 20 ans avec un peu de nostalgie, j'ai imaginé un pack de stickers « édition anniversaire » avec tout ce qui me représente."
        couleur="#FCEFC7"
        liens={[{ href: behance, label: 'Voir sur Behance' }]}
      >
        <img src={`${img}/affiche.webp`} alt="L'affiche du LIAZ' Sticker pack : le pack sous plastique et la planche de stickers sur fond crème" {...affiche} data-depth="0.4" style={{ width: '62%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '2%', '--y': '8%', '--r': '-8deg', '--size': 'auto' }}>16.10</span>
        <img className="floaty floaty--card" src={`${img}/photo-chapeau.webp`} alt="" {...photoChapeau} data-depth="1.6" style={{ '--x': '78%', '--y': '12%', '--r': '8deg', '--size': '6rem', '--delay': '-3s', border: '4px solid var(--paper)', borderRadius: '0.25rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '68%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>Bday edition !</span>
      </CaseHero>

      <Contexte
        outils={[{ nom: 'Photoshop', icone: '/images/tools/photoshop.svg' }]}
        fiche={[
          { label: 'Cadre', valeur: 'Projet perso, pour mes 20 ans' },
          { label: 'Date', valeur: 'octobre 2025' },
          { label: 'Équipe', valeur: 'Projet solo' },
          { label: 'Mon rôle', valeur: 'Direction artistique, collage et mise en page' },
          { label: 'Outils', valeur: 'Photoshop' },
        ]}
        statut="Publié sur Behance"
      >
        <p>Pour fêter mes 20 ans avec un peu de nostalgie et de légèreté, j'ai créé un pack de stickers « édition anniversaire » avec tout ce qui me représente.</p>
        <p>L'idée m'est venue d'une vidéo YouTube d'edgykatrina, qui créait une illustration par jour pendant une semaine en s'inspirant de son propre Pinterest. Ce qui m'a marquée : <span className="hl">elle ne réfléchissait pas deux fois</span> avant de se lancer. J'ai voulu essayer la même chose.</p>
        <p>Je voulais aussi tester depuis l'année dernière le style des affiches d'anniversaire en collage. C'était l'occasion de créer quelque chose juste pour le plaisir.</p>
      </Contexte>

      <Demarche
        etapes={[
          {
            titre: 'Les photos d’enfance',
            texte: "Je suis partie de deux photos de moi petite, pendant une fête : la couronne de fleurs, le chapeau, la nappe couverte de fleurs.",
            images: [
              { src: `${img}/photo-couronne.webp`, alt: "Photo d'enfance scannée : petite fille avec une couronne de fleurs, debout sur une table de fête", ...photoCouronne },
              { src: `${img}/photo-chapeau.webp`, alt: "Photo d'enfance scannée : petite fille avec un chapeau de fête, qui rit, debout sur la table", ...photoChapeau },
            ],
          },
          {
            titre: 'Les stickers',
            texte: "Sur Photoshop, j'ai détouré les photos en stickers à bord blanc, puis ajouté d'autres éléments qui me représentent : deux fleurs, un coq, ma signature LIAZ et un timbre photo marqué 16. Au total : 6 stickers et 1 timbre, de tailles variées.",
            image: { src: `${img}/stickers.webp`, alt: "La planche de stickers : deux photos détourées, une fleur rouge, un coq violet, un timbre photo, la signature LIAZ et une fleur orange", width: 455, height: 720, portrait: true },
          },
          {
            titre: 'Le pack et l’affiche',
            texte: "J'ai composé le pack comme un vrai sachet de stickers : les autocollants superposés sous un plastique froissé, et une étiquette « Liaz' sticker pack, Bday edition ! » avec la date du 16/10. L'affiche finale le présente à côté de la planche, avec ses détails.",
            images: [
              { src: `${img}/pack.webp`, alt: "Le pack de stickers sous plastique, avec son étiquette Liaz' sticker pack, Bday edition, datée du 16/10", width: 510, height: 805 },
              { src: `${img}/affiche.webp`, alt: "L'affiche finale du LIAZ' Sticker pack", ...affiche },
            ],
            liens: [{ href: behance, label: 'Voir le projet sur Behance' }],
          },
        ]}
      />

      <Apport
        casquettes={[
          {
            titre: 'Design graphique',
            texte: 'Un projet perso pour le plaisir, mené du début à la fin sans trop réfléchir.',
            competences: ['Photoshop', 'Détourage', 'Collage', 'Mise en page', 'Packaging'],
          },
        ]}
      />

      <Galerie
        titre="Le sticker pack en images"
        intro="L'affiche finale, le pack, la planche de stickers et les photos d'origine."
        filtres={[
          { id: 'rendu', label: 'Rendu' },
          { id: 'photos', label: "Photos d'origine" },
        ]}
        items={[
          { cat: 'rendu', legende: "L'affiche", images: [{ src: `${img}/affiche.webp`, alt: "L'affiche du LIAZ' Sticker pack", ...affiche }] },
          { cat: 'rendu', legende: 'Le pack', images: [{ src: `${img}/pack.webp`, alt: 'Le pack de stickers sous plastique', width: 510, height: 805 }] },
          { cat: 'rendu', legende: 'La planche de stickers', images: [{ src: `${img}/stickers.webp`, alt: 'La planche de stickers et le timbre', width: 455, height: 720 }] },
          { cat: 'photos', legende: 'La couronne de fleurs', images: [{ src: `${img}/photo-couronne.webp`, alt: "Photo d'enfance avec une couronne de fleurs", ...photoCouronne }] },
          { cat: 'photos', legende: 'Le chapeau de fête', images: [{ src: `${img}/photo-chapeau.webp`, alt: "Photo d'enfance avec un chapeau de fête", ...photoChapeau }] },
        ]}
      />

      <Liens liens={[{ href: behance, label: 'Le projet sur Behance' }]} />
    </ProjectLayout>
  );
}
