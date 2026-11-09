// Fiche projet Éveil des Abysses. Contenu tiré du dossier de conception
// (R410, BUT MMI 2), de l'affiche et de l'enregistrement de la démo TouchDesigner.
import ProjectLayout from '../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../components/projet/CaseHero';
import Contexte from '../../../../components/projet/Contexte';
import Demarche from '../../../../components/projet/Demarche';
import Apport from '../../../../components/projet/Apport';
import Galerie from '../../../../components/projet/Galerie';
import Video from '../../../../components/projet/Video';
import Liens from '../../../../components/projet/Liens';

const img = '/images/projets/eveil-des-abysses';
const github = 'https://github.com/ahyolia/Eveil-des-Abysses';
const dossier = `${img}/dossier-de-conception.pdf`;
const page = { width: 1100, height: 1556 };

export const metadata = {
  title: 'Éveil des Abysses, un aquarium qui suit la main — Camélia Amin Handoyo',
  description:
    'Éveil des Abysses, installation immersive et interactive créée avec TouchDesigner pour Pacific Spirit, où les gestes de la main guident un banc de poissons.',
};

export default function Page() {
  return (
    <ProjectLayout slug="eveil-des-abysses">
      <CaseHero
        slug="eveil-des-abysses"
        eyebrow="Installation interactive"
        titre="Éveil des Abysses, un océan qui répond à la main"
        accroche="On lève la main devant la caméra, et tout un banc de poissons virtuels se met à nager dans la direction du geste."
        couleur="#D5ECF5"
        liens={[
          { href: dossier, label: 'Lire le dossier de conception' },
          { href: github, label: 'Code sur GitHub' },
        ]}
      >
        <img src={`${img}/demo-touchdesigner.webp`} alt="Le réseau TouchDesigner d'Éveil des Abysses : l'image de la webcam, le flux optique et l'aquarium où nagent les poissons" width="1440" height="810" data-depth="0.4" style={{ width: '92%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>Pacific Spirit</span>
        <img className="floaty floaty--card" src={`${img}/affiche.webp`} alt="" width={page.width} height={page.height} data-depth="1.6" style={{ '--x': '78%', '--y': '14%', '--r': '8deg', '--size': '7rem', '--delay': '-3s', border: '4px solid var(--ink)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '70%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>Un geste, un banc</span>
      </CaseHero>

      <Contexte
        fiche={[
          { label: 'Cadre', valeur: 'R410 Création numérique, BUT MMI 2, événement Pacific Spirit' },
          { label: 'Durée', valeur: 'juillet → octobre 2025' },
          { label: 'Équipe', valeur: 'Avec Océane Hermant-Melas et Geneviève Mekenese' },
          { label: 'Mon rôle', valeur: 'Conception, dossier et dispositif interactif, en trio' },
          { label: 'Outils', valeur: 'TouchDesigner, Unity (décor), webcam, flux optique' },
        ]}
        statut="Présenté à Pacific Spirit"
      >
        <p>Éveil des Abysses est une <b>installation immersive et interactive</b> conçue à trois pour l'événement <b>Pacific Spirit</b>, dans le cadre de la ressource R410 <em>Création numérique</em> de ma 2<sup>e</sup> année de BUT MMI, à l'Université de la Nouvelle-Calédonie.</p>
        <p>Tout part d'un constat, <b>plus de 95 % des océans restent inexplorés</b>. Face à cet inconnu, on imagine. Notre installation invite le visiteur à <span className="hl">devenir acteur de l'œuvre</span> plutôt que simple spectateur.</p>
        <p>Dans une salle plongée dans le bleu, <b>une webcam suit les mouvements de la main</b>. Dans TouchDesigner, ces gestes orchestrent en temps réel le déplacement d'un <b>banc de poissons virtuels</b>, dans un environnement fluide et organique.</p>
      </Contexte>

      <Demarche
        etapes={[
          {
            titre: 'La conception',
            texte: "Nous avons d'abord écrit le dossier de conception, avec le contexte, la problématique et le narratif de l'œuvre, puis une veille (Sketch Aquarium de teamLab, le jeu Tchia, la culture kanak) et une direction artistique inspirée du lagon calédonien.",
            images: [
              { src: `${img}/dossier-couverture.webp`, alt: "Couverture du dossier de conception d'Éveil des Abysses, avec une tortue marine et des coraux", ...page },
              { src: `${img}/dossier-narratif.webp`, alt: "Page Concept de l'œuvre du dossier : le narratif de l'installation", ...page },
              { src: `${img}/dossier-couleurs.webp`, alt: 'Page Choix esthétiques du dossier : la palette de couleurs inspirée du lagon calédonien', ...page },
            ],
            liens: [{ href: dossier, label: 'Lire le dossier de conception (PDF)' }],
          },
          {
            titre: 'Le parcours utilisateur',
            texte: "Nous avons préparé le parcours du visiteur, de l'accueil dans la pénombre à la vidéo d'introduction puis au moment d'interaction, et dessiné le plan de la salle, avec l'écran, les tables, les lumières et le décor.",
            images: [
              { src: `${img}/dossier-parcours.webp`, alt: 'Page Parcours utilisateur du dossier : le parcours du visiteur, étape par étape', ...page },
              { src: `${img}/dossier-schema.webp`, alt: "Page Schéma de l'installation du dossier : plan de la salle, tables et projection", ...page },
            ],
          },
          {
            titre: 'Les poissons et le décor',
            texte: "Pour le dispositif, nous avons réalisé et illustré les poissons, la tortue et les créatures du banc, puis le décor du fond marin (rochers, algues, coraux), monté en scène dans Unity.",
            video: { src: `${img}/decor-unity.webm`, poster: `${img}/decor-unity-poster.webp`, alt: "Le décor du fond marin d'Éveil des Abysses dans Unity : rochers, algues et coraux sous une lumière bleue", width: 464, height: 832 },
          },
          {
            titre: 'La réaction à la caméra',
            texte: "Dans TouchDesigner, nous avons relié les nodes entre eux. La webcam filme le visiteur, l'image passe en noir et blanc, un flux optique mesure la direction de la main, et ces valeurs lissées guident le banc de poissons.",
            images: [
              { src: `${img}/touchdesigner-nodes.webp`, alt: 'Les nodes TouchDesigner en cours de montage, devant le décor et un poisson jaune', width: 1280, height: 779 },
              { src: `${img}/demo-touchdesigner.webp`, alt: "Le réseau TouchDesigner terminé : webcam, monochrome, flux optique et analyse, devant l'aquarium", width: 1440, height: 810 },
            ],
          },
          {
            titre: "La préparation de l'événement",
            texte: "Enfin, nous avons installé le dispositif sur place pour Pacific Spirit (écran, caméra, ballons et décor), avec les derniers réglages faits sur l'ordinateur avant l'arrivée des visiteurs.",
            images: [
              { src: `${img}/preparation-installation.webp`, alt: "Installation sur place : l'aquarium affiché sur l'écran, pendant la pose des ballons du décor", width: 1200, height: 1600 },
              { src: `${img}/preparation-equipe.webp`, alt: "Derniers réglages sur l'ordinateur, assises au sol à côté de l'installation", width: 828, height: 1104 },
            ],
          },
        ]}
      />

      <Video
        intro="La main bouge devant la webcam, et les poissons suivent le geste dans l'aquarium."
        src={`${img}/demo.webm`}
        poster={`${img}/demo-poster.webp`}
        width={1280}
        height={720}
        legende="Enregistrement de la démo d'Éveil des Abysses dans TouchDesigner. Les mouvements de la main filmés par la webcam déplacent le banc de poissons"
      />

      <Apport
        casquettes={[
          {
            titre: 'Design interactif',
            texte: "Un dispositif où le geste du visiteur devient l'outil de l'œuvre.",
            competences: ['TouchDesigner', 'Flux optique', 'Interaction en temps réel', 'Conception d’interfaces interactives'],
          },
          {
            titre: "Design d'expérience",
            texte: 'Une installation pensée de bout en bout, du récit à la salle.',
            competences: ['Dossier de conception', 'Direction artistique', 'Scénographie', 'Travail en équipe'],
          },
        ]}
      />

      <Galerie
        titre="Éveil des Abysses en images"
        intro="L'installation à Pacific Spirit, l'affiche, le dispositif dans TouchDesigner et quelques pages du dossier de conception."
        filtres={[
          { id: 'evenement', label: 'Événement' },
          { id: 'dispositif', label: 'Dispositif' },
          { id: 'conception', label: 'Conception' },
        ]}
        items={[
          { cat: 'evenement', legende: "Une visiteuse face à l'aquarium", images: [{ src: `${img}/evenement-visiteur.webp`, alt: "Une visiteuse devant l'écran, le banc de poissons suit son geste", width: 1600, height: 1066 }] },
          { cat: 'evenement', legende: "La main à l'écran, en direct", images: [{ src: `${img}/evenement-ecran.webp`, alt: "Gros plan sur l'écran : l'image de la webcam en noir et blanc au milieu des poissons", width: 828, height: 1104 }] },
          { cat: 'evenement', legende: "L'équipe devant l'installation", images: [{ src: `${img}/equipe.webp`, alt: "Océane, Camélia et Geneviève devant l'écran de l'aquarium, à Pacific Spirit", width: 1200, height: 1600 }] },
          { cat: 'evenement', variante: 'page', legende: "L'affiche de l'installation", images: [{ src: `${img}/affiche.webp`, alt: "Affiche d'Éveil des Abysses : texte de présentation, aquarium numérique et portraits de l'équipe", ...page }] },
          { cat: 'dispositif', legende: 'Le réseau TouchDesigner', images: [{ src: `${img}/demo-touchdesigner.webp`, alt: "Le réseau TouchDesigner devant l'aquarium", width: 1440, height: 810 }] },
          { cat: 'dispositif', legende: 'Les nodes en cours de montage', images: [{ src: `${img}/touchdesigner-nodes.webp`, alt: 'Les nodes TouchDesigner en cours de montage', width: 1280, height: 779 }] },
          { cat: 'dispositif', legende: "L'aquarium", images: [{ src: `${img}/aquarium.webp`, alt: "L'aquarium numérique et ses poissons", width: 1168, height: 352 }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : veille', images: [{ src: `${img}/dossier-veille.webp`, alt: 'Page Veille du dossier : Sketch Aquarium de teamLab', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : ambiance visuelle', images: [{ src: `${img}/dossier-ambiance.webp`, alt: 'Page Ambiance visuelle du dossier : planche de méduses et de fonds marins lumineux', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : formes des poissons', images: [{ src: `${img}/dossier-formes.webp`, alt: 'Page Choix esthétiques du dossier : silhouettes de poissons épurées', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Dossier : charte graphique', images: [{ src: `${img}/dossier-charte.webp`, alt: 'Page Charte graphique du dossier : logo, couleurs et typographies', ...page }] },
        ]}
      />

      <Liens
        liens={[
          { href: github, label: 'GitHub' },
          { href: dossier, label: 'Dossier de conception (PDF)' },
          { href: 'https://www.linkedin.com/in/camelia-amin-handoyo/', label: 'LinkedIn' },
        ]}
      />
    </ProjectLayout>
  );
}
