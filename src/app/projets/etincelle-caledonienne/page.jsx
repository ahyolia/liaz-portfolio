// Fiche projet « L'amour d'une éducatrice », web-documentaire réalisé pour le
// concours « Les Étincelles Calédoniennes » de NC la 1ère. Contenu tiré de la
// fiche de réflexion du projet ; vidéo publiée sur la chaîne YouTube de NC la 1ère.
import ProjectLayout from '../../../components/projet/ProjectLayout';
import CaseHero from '../../../components/projet/CaseHero';
import Contexte from '../../../components/projet/Contexte';
import Questions from '../../../components/projet/Questions';
import YouTube from '../../../components/projet/YouTube';
import Demarche from '../../../components/projet/Demarche';
import Apport from '../../../components/projet/Apport';
import Galerie from '../../../components/projet/Galerie';
import Liens from '../../../components/projet/Liens';

const img = '/images/projets/etincelle-caledonienne';
const videoId = '5UiRV0SfMOc';
const youtube = `https://www.youtube.com/watch?v=${videoId}`;
const oral = 'https://canva.link/bpfn28kndyaba0m';
const kit = `${img}/kit-com.pdf`;
const affiche = { width: 1600, height: 900 };

export const metadata = {
  title: "L'amour d'une éducatrice, web-documentaire — Camélia Amin Handoyo",
  description:
    "« L'amour d'une éducatrice », web-documentaire réalisé en binôme pour le concours Les Étincelles Calédoniennes de NC la 1ère.",
};

export default function Page() {
  return (
    <ProjectLayout slug="etincelle-caledonienne">
      <CaseHero
        slug="etincelle-caledonienne"
        eyebrow="Web-documentaire"
        titre="L'amour d'une éducatrice, le portrait d'une surveillante de lycée"
        accroche="Un web-documentaire de quelques minutes pour mettre en lumière celles et ceux qui travaillent dans l'ombre."
        couleur="#E4F2D7"
        liens={[
          { href: youtube, label: 'Voir le film' },
          { href: oral, label: "L'oral de cadrage" },
        ]}
      >
        <img src={`${img}/visuel-brut.webp`} alt="Affiche du film « L'amour d'une éducatrice » : Mirella et une proche s'enlacent dans la végétation" width="1600" height="900" data-depth="0.4" style={{ width: '92%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.5)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '0%', '--y': '4%', '--r': '-8deg', '--size': 'auto' }}>Diffusé sur NC la 1ère</span>
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '70%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>Moteur, ça tourne !</span>
      </CaseHero>

      <Contexte
        outils={[
          { nom: 'Canva', icone: '/images/tools/canva.svg' },
          { nom: 'Premiere Pro', icone: '/images/tools/premierepro.svg' },
        ]}
        fiche={[
          { label: 'Cadre', valeur: 'Concours Les Étincelles Calédoniennes, NC la 1ère' },
          { label: 'Année', valeur: '2026' },
          { label: 'Équipe', valeur: 'Binôme avec Geneviève Mekenese' },
          { label: 'Mon rôle', valeur: 'Gestion de projet, prise de son, interviews' },
          { label: 'Outils', valeur: 'ClickUp, Canva, micros-cravates, perche' },
        ]}
        statut="Diffusé"
      >
        <p>Pour le concours <em>Les Étincelles Calédoniennes</em>, en partenariat avec NC la 1ère, nous devions réaliser un web-documentaire de 4 à 6 minutes, avec un calendrier serré et entrecoupé de périodes d'alternance. Je l'ai réalisé en binôme avec Geneviève Mekenese.</p>
        <p>Notre sujet : Mirella Avae, surveillante au lycée Apollinaire Anova de Païta. On sous-estime souvent les éducateurs ; pour elle, ce métier est le prolongement naturel de son rôle de maman. Un portrait intime pour mettre en lumière <span className="hl">les travailleurs de l'ombre</span>, et leur rendre hommage.</p>
        <p>Plus qu'un métier, on voulait montrer l'humain avant la fonction. Notre souhait : qu'à la fin du film, chacun repense à la personne qui l'a éclairé dans un moment difficile. Et le défi : livrer un film diffusable par un média professionnel (Full HD, son clair, image étalonnée).</p>
      </Contexte>

      <Questions
        titre="Nos choix de réalisation"
        questions={[
          {
            question: "Comment éviter l'effet « vidéo d'école » ?",
            reponse: "Pas de voix off qui explique : ce sont les voix des interviews qui racontent. On voulait faire parler les images plus que les mots, les regards, les sourires, les gestes du quotidien. C'est cette vision qu'on a défendue à l'oral de mi-parcours, devant l'équipe pédagogique et un représentant de NC la 1ère.",
          },
          {
            question: 'Comment montrer la femme derrière la fonction ?',
            reponse: "Le film suit deux temps : Mirella au lycée, avec ses collègues et les élèves, puis chez elle, avec sa famille, ses animaux et ses plantes. Pour dire qu'il n'y a pas deux Mirella, mais une seule, solaire partout où elle passe.",
          },
          {
            question: 'Quelle image pour cette chaleur ?',
            reponse: "Deux registres qui se répondent : des plans larges et fixes pour laisser respirer, et des plans rapprochés en caméra portée pour la proximité et les rires. Le tout en lumière naturelle, avec un étalonnage vers des tons chauds.",
          },
          {
            question: 'Comment filmer dans un lycée ?',
            reponse: "Il fallait l'accord de la direction du lycée Anova et le droit à l'image des élèves mineurs. On s'en est occupé en amont, avant même de fixer la date du tournage.",
          },
          {
            question: 'Comment avoir un son propre dans une cour de récréation ?',
            reponse: "Des micros-cravates pour les interviews, et une perche pour capter les ambiances (la sonnerie, la cour, les rires, le vent dans les feuilles) qui forment l'essentiel de la bande-son, avec quelques musiques libres de droits.",
          },
        ]}
      />

      <YouTube
        intro="Mirella traverse depuis longtemps les couloirs du lycée Anova. À première vue, rien de spectaculaire. Mais ses sourires, ses gestes, une main posée sur l'épaule… Chez elle, c'est la même femme : présente et lumineuse. Une fiche de poste ne raconte pas qui elle est."
        id={videoId}
        poster={`${img}/visuel-habillage.webp`}
        legende="L'amour d'une éducatrice, de Geneviève Mekenese et Camélia Amin Handoyo"
      />

      <Demarche
        etapes={[
          {
            titre: 'Organisation et planning',
            texte: "On a organisé le projet dans ClickUp, avec un tableau Kanban. J'ai construit le planning général et ses jalons : oral de validation en semaine 17, dossier en semaine 21, tournage en semaine 22. Ça nous a laissé le temps de trouver les lieux et de caler les disponibilités des intervenants.",
            attendu: 'capture du tableau ClickUp ou du planning',
          },
          {
            titre: 'Le dossier de préparation',
            texte: "Notre socle qualité : note d'intention, angle éditorial, synopsis, note de réalisation, puis le découpage plan par plan en trois séquences (le lycée, la maison et l'interview de Mirella, l'interview d'une proche). Chaque journée avait sa feuille de service : horaires, décors, matériel et scènes à tourner. Sans oublier les contraintes à anticiper : droit à l'image des élèves, autorisation du lycée, ne pas déranger le travail de Mirella.",
            attendu: 'une page du dossier de préparation',
          },
          {
            titre: "L'oral de mi-parcours",
            texte: "On a présenté notre concept devant l'équipe pédagogique et un représentant de NC la 1ère : la vision éditoriale, les choix de réalisation et l'habillage graphique. Le jury a validé la faisabilité et le potentiel du film.",
            attendu: "une diapositive de l'oral",
            liens: [{ href: oral, label: "Voir l'oral sur Canva" }],
          },
          {
            titre: 'Le tournage',
            texte: "Trois journées fin mai et début juin : au lycée Anova, puis chez Mirella, dans son jardin et la forêt. Je m'occupais du son, aux micros-cravates et à la perche, et je menais les interviews : préparer les questions et les poser à Mirella et à ses proches pour guider le fil du récit.",
            attendu: 'une photo du tournage',
          },
          {
            titre: 'Le montage',
            texte: "Geneviève a assuré le cadrage et le montage final ; on a fait ensemble les arbitrages pour garder les moments les plus forts. Le film a ensuite été diffusé par NC la 1ère.",
            image: { src: `${img}/miniature.webp`, alt: "Image du film : Mirella tresse des feuilles de cocotier, assise dans l'herbe face aux montagnes", ...affiche },
          },
        ]}
      />

      <Apport
        casquettes={[
          {
            titre: 'Gestion de projet',
            texte: 'Tenir les délais et sécuriser le tournage.',
            competences: ['ClickUp et Kanban', 'Planning et jalons', "Droit à l'image", 'Feuilles de service', 'Liste des risques'],
          },
          {
            titre: 'Son et interviews',
            texte: 'Capter une matière sonore et des témoignages exploitables.',
            competences: ['Micros-cravates', 'Prise de son à la perche', 'Préparation des questions', "Conduite d'entretien"],
          },
          {
            titre: 'Cadrage et soutenance',
            texte: 'Préparer le film et le défendre devant le diffuseur.',
            competences: ['Note d’intention', 'Découpage technique', 'Note de réalisation', 'Dossier de présentation', 'Oral devant NC la 1ère'],
          },
        ]}
      />

      <Galerie
        titre="Le kit de communication"
        intro="Les visuels livrés avec le film pour sa diffusion : l'affiche, avec et sans l'habillage du concours, et une image tirée du film."
        filtres={[
          { id: 'affiche', label: 'Affiche' },
          { id: 'film', label: 'Images du film' },
        ]}
        items={[
          {
            cat: 'affiche',
            legende: 'Affiche · avec / sans habillage',
            images: [
              { src: `${img}/visuel-habillage.webp`, alt: "Affiche du film avec le logo du concours Les Étincelles Calédoniennes", ...affiche },
              { src: `${img}/visuel-brut.webp`, alt: "Affiche du film sans habillage", ...affiche },
            ],
          },
          { cat: 'film', legende: 'Mirella tresse le cocotier', images: [{ src: `${img}/miniature.webp`, alt: "Image du film : Mirella tresse des feuilles de cocotier, assise dans l'herbe face aux montagnes", ...affiche }] },
        ]}
      />

      <Liens
        liens={[
          { href: youtube, label: 'Le film sur YouTube' },
          { href: oral, label: "L'oral de cadrage (Canva)" },
          { href: kit, label: 'Le kit de com (PDF)' },
        ]}
      />
    </ProjectLayout>
  );
}
