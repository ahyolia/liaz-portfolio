// Modèle de fiche de réflexion : dupliquer ce dossier pour en créer une nouvelle,
// puis l'ajouter au journal (src/app/academique/journal/page.jsx) et relier ses AC
// dans src/data/competences.js (champ `fiches`). Briques : src/components/academique/Fiche.jsx
import { Fiche, Section, AcVises, Preuves, Bloc, JeNous, Pivots } from '../../../../components/academique/Fiche';

export const metadata = {
  title: 'Fiche exemple — Journal — Camélia Amin Handoyo',
  robots: { index: false, follow: false },
};

const sections = [
  { id: 'ac-vises', titre: 'AC visés' },
  { id: 'preuves', titre: 'Preuves' },
  { id: 'demonstration', titre: 'Démonstration' },
  { id: 'dimension-pro', titre: 'Dimension pro' },
  { id: 'je-vs-nous', titre: 'Je vs Nous' },
  { id: 'difficultes', titre: 'Difficultés et pivots' },
];

export default function Page() {
  return (
    <Fiche
      titre="Titre de la fiche"
      intro="Deux ou trois phrases : le projet, le cadre, et ce que la fiche démontre."
      meta={[
        { label: 'Mise à jour', valeur: <time dateTime="2026-01-01">01/01/2026</time> },
        { label: 'Projet', valeur: <a href="/projets/projet-exemple/">Projet exemple</a> },
        { label: 'Cadre', valeur: 'SAÉ, BUT MMI 3' },
        { label: 'Équipe', valeur: 'Projet solo' },
        { label: 'AC visés', valeur: '2' },
      ]}
      sections={sections}
    >
      <Section id="ac-vises" numero={1} titre="AC visés" note="ce que ce projet me permet de valider">
        <AcVises ac={[{ code: 'AC34.01', intitule: 'Intitulé officiel de l’AC', detail: 'Ce que j’ai utilisé' }]} />
      </Section>

      <Section id="preuves" numero={2} titre="Preuves">
        <Preuves liens={[{ href: 'https://github.com/ahyolia', titre: 'Dépôt GitHub', detail: 'ce qu’on y trouve' }]} />
      </Section>

      <Section id="demonstration" numero={3} titre="Démonstration" note="comment je m'y suis prise, et pourquoi">
        <Bloc titre="Une sous-partie, formulée comme une action" ac={['AC34.01']}>
          <ul>
            <li><strong>Ce que j'ai fait</strong> : …</li>
            <li><strong>Pourquoi</strong> : …</li>
          </ul>
        </Bloc>
      </Section>

      <Section id="dimension-pro" numero={4} titre="Dimension pro" note="ce que ce projet montre de moi en entreprise">
        <ul><li><strong>Je sais…</strong> : …</li></ul>
      </Section>

      <Section id="je-vs-nous" numero={5} titre="Je vs Nous" note="ma part dans le projet">
        <JeNous nous={<p>Ce que l'équipe a fait ensemble.</p>} je={[{ titre: 'Mon apport', points: ['…'] }]} />
      </Section>

      <Section id="difficultes" numero={6} titre="Difficultés et pivots" note="ce qui a coincé, et ce que j'en ai tiré">
        <Pivots lignes={[{ obstacle: 'Un obstacle', solution: 'Ce que j’ai fait.', apprentissage: 'Ce que j’en retiens.' }]} />
      </Section>
    </Fiche>
  );
}
