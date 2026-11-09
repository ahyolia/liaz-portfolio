// Fiche projet « Accroche vidéo » : vidéo de présentation de type CV, en moins
// d'une minute (cours PPP, BUT MMI 3). Contenu tiré du dossier de préparation.
import ProjectLayout from '../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../components/projet/CaseHero';
import Contexte from '../../../../components/projet/Contexte';
import Questions from '../../../../components/projet/Questions';
import YouTube from '../../../../components/projet/YouTube';
import Demarche from '../../../../components/projet/Demarche';
import Apport from '../../../../components/projet/Apport';
import Galerie from '../../../../components/projet/Galerie';

const img = '/images/projets/cv-video';
const plan = { width: 1600, height: 900 };
const dossier = 'https://docs.google.com/document/d/1lDpBRgB1o5dEIid0T1EbdoPAUWVk-DbG7Uu09WHcnLk/edit?usp=sharing';

export const metadata = {
  title: 'Accroche vidéo, me présenter en une minute — Camélia Amin Handoyo',
  description:
    "Une vidéo de présentation de moins d'une minute, écrite, réalisée et montée seule pour le cours PPP du BUT MMI.",
};

export default function Page() {
  return (
    <ProjectLayout slug="accroche-video">
      <CaseHero
        slug="accroche-video"
        eyebrow="Vidéo"
        titre="Accroche vidéo, me présenter en moins d'une minute"
        accroche="Une minute pour montrer là où je construis, là où je prends du recul, et vers où m'appellent mes ambitions."
        couleur="#FCE7C8"
      >
        <img src={`${img}/miniature-bougies.webp`} alt="Plan du film : une main allume les bougies d'un gâteau d'anniversaire" width="1600" height="900" data-depth="0.4" style={{ width: '92%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.5)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '0%', '--y': '4%', '--r': '-8deg', '--size': 'auto' }}>moins de 60 s</span>
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '72%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>Fais un vœu !</span>
      </CaseHero>

      <Contexte
        outils={[{ nom: 'DaVinci Resolve', icone: '/images/tools/davinciresolve.svg' }]}
        fiche={[
          { label: 'Cadre', valeur: 'Cours PPP, BUT MMI 3' },
          { label: 'Durée', valeur: '5 → 26 octobre 2026' },
          { label: 'Équipe', valeur: 'Projet individuel' },
          { label: 'Mon rôle', valeur: 'Écriture, réalisation, montage, cadrage' },
          { label: 'Format', valeur: '16:9, moins de 60 s, voix off et musique' },
        ]}
        statut="Rendu"
      >
        <p>Pour le cours de Projet Personnel et Professionnel, il fallait réaliser une <b>vidéo d'accroche de type CV</b>, soit <b>moins d'une minute</b> pour donner envie d'en savoir plus sur soi.</p>
        <p>Plutôt que de lister ce que je sais faire, j'ai choisi de montrer <b>ce qui me compose, par fragments</b>. Formée au développement, ce qui m'anime, c'est <span className="hl">l'humain derrière l'écran</span>, et c'est ce qui m'oriente vers l'<b>UX design</b>. Et lectrice de fiction, j'ai appris très tôt à <b>imaginer des mondes</b> qui n'existent pas encore.</p>
        <p><b>J'ai écrit, réalisé et monté la vidéo seule</b>, et Geneviève Mekenese et Magalie Chen m'ont aidée au cadrage.</p>
      </Contexte>

      <Questions
        titre="Mes choix d'écriture"
        questions={[
          {
            question: 'Comment se présenter en une minute quand une personne ne se résume pas ?',
            reponse: "En trois temps. D'abord ma chambre, où je construis (mes livres, mes couleurs, mon tableau blanc couvert de projets). Puis la plage, où je respire et prends du recul. Enfin mon anniversaire, qui tombait ce mois-là, où je me projette vers ces « ambitions qui m'appellent au loin ».",
          },
          {
            question: 'Quel fil rouge ?',
            reponse: "Le temps. La voix off parle « de mots qui glissent entre mes mains », et à l'image, le sable glisse entre mes doigts. Ils disent ce que je ne peux pas retenir, comme cette minute qui ne suffit pas à tout raconter. Les bougies marquent une année qui se termine et une autre qui commence.",
          },
          {
            question: 'Comment finir sans tout dire ?',
            reponse: "La voix off est un court poème en rimes, une pensée intérieure. Le dernier vers reste sans rime, coupé par mon souffle sur les bougies. Un vœu ne se dit pas, il se garde pour soi.",
          },
        ]}
      />

      <YouTube
        titre="La vidéo"
        intro="Un ton intime et contemplatif, avec une caméra proche du corps, gros plans, lumière naturelle, musique douce et sons proches (les pages, le sable, la mer, le souffle)."
        id="FDmvYcf1NJI"
        poster={`${img}/miniature-bougies.webp`}
        legende="Accroche vidéo de Camélia Amin Handoyo, de ma chambre à la plage, puis à mon anniversaire"
      />

      <Demarche
        etapes={[
          {
            titre: 'Le dossier de préparation',
            texte: "Du 5 au 9 octobre, j'ai écrit la note d'intention, le poème de la voix off, puis le découpage plan par plan des trois séquences, avec des images de référence pour les cadrages et le calendrier du projet.",
            image: { src: `${img}/dossier-prepa.webp`, alt: "Première page du dossier de préparation sur Google Docs : l'équipe, le format (moins de 60 secondes, 16:9, voix off et musique) et le calendrier, avec les onglets Présentation, Note d'intention et Découpage", width: 1534, height: 769 },
            liens: [{ href: dossier, label: 'Lire le dossier de préparation' }],
          },
          {
            titre: 'Le tournage, 3 jours et 3 lieux',
            texte: "La plage le 10 octobre, ma chambre le 11, et le salon pour l'anniversaire le 16. Un même verre fait le raccord entre la chambre et la plage. Geneviève Mekenese et Magalie Chen m'ont aidée à cadrer quand je devais être à l'image.",
            images: [
              { src: `${img}/chambre-bureau.webp`, alt: 'Plan du film : je code à mon bureau, le soir', ...plan },
              { src: `${img}/plage.webp`, alt: "Plan du film : assise sur la plage, je regarde l'horizon", ...plan },
              { src: `${img}/bougies.webp`, alt: "Plan du film : une main allume les bougies du gâteau d'anniversaire", ...plan },
            ],
          },
          {
            titre: "Le montage et l'étalonnage",
            texte: "Montage du 12 au 18 octobre, puis un premier visionnage le 19 pour ajuster le rythme. L'étalonnage garde la lumière naturelle et des tons chauds, pour une ambiance intime d'un lieu à l'autre.",
            images: [
              { src: `${img}/chambre-tableau.webp`, alt: 'Plan du film : mon tableau blanc couvert de projets en cours, en lumière chaude', ...plan },
              { src: `${img}/voeu.webp`, alt: 'Plan du film : je souffle mes bougies, éclairée par les flammes', ...plan },
            ],
          },
          {
            titre: 'Le sound design',
            texte: "Une musique douce, ma voix off qui dit le poème, et des sons proches comme les pages, le sable, la mer et le souffle. Le dernier vers est coupé par le souffle sur les bougies, avant l'écran noir. Rendu final le 26 octobre.",
            image: { src: `${img}/plage-sable.webp`, alt: 'Plan du film : le sable glisse entre mes doigts', ...plan },
          },
        ]}
      />

      <Apport
        casquettes={[
          {
            titre: 'Écriture',
            texte: 'Raconter qui je suis sans faire une liste.',
            competences: ["Note d'intention", 'Poème en voix off', 'Structure en trois temps', 'Découpage technique'],
          },
          {
            titre: 'Réalisation et montage',
            texte: 'Du tournage au rendu, en trois semaines.',
            competences: ['Direction des cadreuses', 'Raccords entre séquences', 'Gros plans et lumière naturelle', 'Montage et rythme', 'Sous-titres'],
          },
        ]}
      />

      <Galerie
        titre="Quelques plans"
        intro="Les trois lieux du film, la chambre, la plage et le salon."
        filtres={[
          { id: 'chambre', label: 'Chambre' },
          { id: 'plage', label: 'Plage' },
          { id: 'anniversaire', label: 'Anniversaire' },
        ]}
        items={[
          { cat: 'chambre', legende: 'Au bureau', images: [{ src: `${img}/chambre-bureau.webp`, alt: 'Je code à mon bureau, le soir', ...plan }] },
          { cat: 'chambre', legende: 'Le tableau des projets', images: [{ src: `${img}/chambre-tableau.webp`, alt: 'Mon tableau blanc couvert de projets en cours', ...plan }] },
          { cat: 'plage', legende: "Face à l'horizon", images: [{ src: `${img}/plage.webp`, alt: "Assise sur la plage, je regarde l'horizon", ...plan }] },
          { cat: 'plage', legende: 'Le sable qui glisse', images: [{ src: `${img}/plage-sable.webp`, alt: 'Le sable glisse entre mes doigts', ...plan }] },
          { cat: 'anniversaire', legende: 'Les bougies', images: [{ src: `${img}/bougies.webp`, alt: "Une main allume les bougies du gâteau", ...plan }] },
          { cat: 'anniversaire', legende: 'Le vœu', images: [{ src: `${img}/voeu.webp`, alt: 'Je souffle mes bougies', ...plan }] },
        ]}
      />
    </ProjectLayout>
  );
}
