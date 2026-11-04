// Fiche de réflexion : web-documentaire « L'amour d'une éducatrice », concours
// Les Étincelles Calédoniennes (NC la 1ère). Texte de Camélia.
import { Fiche, Section, AcVises, Preuves, Bloc, JeNous } from '../../../../components/academique/Fiche';

const img = '/images/projets/etincelle-caledonienne';

export const metadata = {
  title: 'Web-documentaire NC la 1ère — Journal — Camélia Amin Handoyo',
  robots: { index: false, follow: false },
};

const sections = [
  { id: 'ac-vises', titre: 'AC visés' },
  { id: 'preuves', titre: 'Preuves' },
  { id: 'demonstration', titre: 'Démonstration' },
  { id: 'dimension-pro', titre: 'Dimension pro' },
  { id: 'je-vs-nous', titre: 'Je vs Nous' },
];

export default function Page() {
  return (
    <Fiche
      titre="Web-documentaire « L'amour d'une éducatrice »"
      intro="Pour le concours Les Étincelles Calédoniennes de NC la 1ère, nous avons réalisé en binôme le portrait de Mirella, surveillante au lycée Apollinaire Anova de Païta. Le film a été diffusé et a reçu le prix Coup de cœur du jury."
      meta={[
        { label: 'Mise à jour', valeur: <time dateTime="2026-11-03">03/11/2026</time> },
        { label: 'Projet', valeur: <a href="/projets/etincelle-caledonienne/">L'amour d'une éducatrice</a> },
        { label: 'Cadre', valeur: 'Concours NC la 1ère' },
        { label: 'Équipe', valeur: 'Binôme avec Geneviève Mekenese' },
        { label: 'Résultat', valeur: 'Prix Coup de cœur du jury' },
        { label: 'AC visés', valeur: '5' },
      ]}
      sections={sections}
    >
      <Section id="ac-vises" numero={1} titre="AC visés" note="ce que ce projet me permet de valider">
        <AcVises
          ac={[
            { code: 'AC35.01', intitule: 'Piloter un produit, un service ou une équipe' },
            { code: 'AC35.02', intitule: 'Maîtriser la qualité en projet Web ou multimédia' },
            { code: 'AC35.04', intitule: 'Défendre un projet de manière convaincante' },
            { code: 'AC23.04', intitule: 'Imaginer, écrire et scénariser en vue d’une communication multimédia ou transmédia', detail: 'Compétence Exprimer, niveau 2' },
            { code: 'AC23.05', intitule: 'Réaliser, composer et produire pour une communication plurimédia', detail: 'Compétence Exprimer, niveau 2' },
          ]}
          ce={[{ code: 'CE5.02', intitule: 'Entreprendre en favorisant la collaboration entre les parties prenantes du projet' }]}
        />
      </Section>

      <Section id="preuves" numero={2} titre="Preuves">
        <Preuves
          liens={[
            { href: 'https://www.youtube.com/watch?v=5UiRV0SfMOc', titre: 'Le film', detail: 'sur YouTube' },
            { href: 'https://canva.link/bpfn28kndyaba0m', titre: 'Oral de cadrage éditorial', detail: 'la présentation sur Canva' },
            { href: 'https://app.clickup.com/90161549369/v/dc/2kz0r41t-396/2kz0r41t-136', titre: 'Dossier de préparation', detail: 'sur ClickUp' },
            { href: `${img}/kit-com.pdf`, titre: 'Kit de communication (PDF)', detail: "l'affiche et les visuels livrés avec le film" },
            { href: '/projets/etincelle-caledonienne/', titre: 'Fiche du projet', detail: 'dans mon portfolio' },
          ]}
        />
      </Section>

      <Section id="demonstration" numero={3} titre="Démonstration" note="comment je m'y suis prise, et pourquoi">
        <Bloc titre="Tenir le calendrier malgré l'alternance" ac={['AC35.01']} technique="ClickUp avec un tableau Kanban ; jalons en semaines 17 (oral), 21 (dossier) et 22 (tournage).">
          <p>
            Le film devait durer 4 à 6 minutes, et notre calendrier était coupé par les périodes en entreprise. J'ai
            construit le planning autour de quelques dates clés, avec l'oral de validation, le rendu du dossier, puis le
            tournage. Grâce à ça, nous avons pu réserver le lycée et caler les interviews à temps.
          </p>
        </Bloc>

        <Bloc titre="Viser un rendu digne d'un diffuseur" ac={['AC35.02', 'AC23.04', 'AC23.05']} technique="Deux caméras en lumière naturelle, perche pour les ambiances, micros-cravates pour les interviews, feuille de service.">
          <p>
            Le film devait pouvoir passer sur NC la 1ère, avec une image Full HD, un son clair et des couleurs soignées. Nous avons donc
            tout préparé dans un dossier avant de tourner, et listé ce qui pouvait mal tourner, comme l'autorisation de filmer
            des élèves mineurs, le bruit de la cour, l'organisation des journées de tournage.
          </p>
        </Bloc>

        <Bloc titre="Convaincre le jury" ac={['AC35.04', 'CE5.02']}>
          <p>
            À l'oral de mi-parcours, devant nos enseignants et un représentant de NC la 1ère, nous ne présentions pas une
            vidéo d'école mais un vrai regard, qui montre les travailleurs de l'ombre à travers le portrait de Mirella. Nous
            avons défendu nos choix, sans voix off qui explique tout, avec une caméra à l'épaule pour être au plus près
            d'elle, et nous avons convaincu le jury.
          </p>
        </Bloc>

        <Bloc titre="Préparer le tournage et capter le son" ac={['AC35.02', 'AC23.05']} technique="Découpage technique et feuille de service ; micros-cravates et perche.">
          <p>
            Ma binôme filmait et montait, et moi, je préparais et je tenais le son. Avant le tournage, j'ai écrit le
            découpage et choisi le matériel pour couvrir le bruit de la cour. Sur place, j'ai enregistré le son et mené
            les interviews de Mirella et de ses proches, pour recueillir des témoignages sincères.
          </p>
        </Bloc>
      </Section>

      <Section id="dimension-pro" numero={4} titre="Dimension pro" note="ce que ce projet montre de moi en entreprise">
        <ul>
          <li><strong>Je sais répondre à une vraie commande</strong> : cahier des charges, normes de diffusion vidéo, droit à l'image.</li>
          <li><strong>J'ai une double compétence</strong> : issue du parcours Développement web, je pilote aussi un projet (planning, risques, feuilles de service) et je produis du contenu multimédia.</li>
          <li><strong>Je travaille avec toutes les parties prenantes</strong> : de la direction du lycée jusqu'à la soutenance devant un diffuseur.</li>
        </ul>
      </Section>

      <Section id="je-vs-nous" numero={5} titre="Je vs Nous" note="ma part dans le projet">
        <JeNous
          nous={<p>Avec Geneviève Mekenese, nous avons partagé la vision du film et son intention émotionnelle. Nous avons tourné ensemble au lycée et chez Mirella, et fait ensemble les choix du montage final.</p>}
          je={[
            { titre: 'Gestion de projet', points: ['ClickUp et macro-planning', 'Droit à l’image des élèves mineurs', 'Feuilles de service'] },
            { titre: 'Sur le terrain', points: ['Prise de son aux micros-cravates et à la perche', 'Préparation et conduite des interviews'] },
            { titre: 'Cadrage de la production', points: ['Découpage technique', 'Cartographie des risques', 'Co-préparation de l’oral devant NC la 1ère'] },
          ]}
        />
      </Section>
    </Fiche>
  );
}
