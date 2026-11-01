// Fiche projet « RESONANCE In Motion » : moodboard animé en motion design.
// Contenu tiré de la page Behance du projet ; la vidéo est lue avec le lecteur
// de Behance (chargé au clic).
import ProjectLayout from '../../../components/projet/ProjectLayout';
import CaseHero from '../../../components/projet/CaseHero';
import Contexte from '../../../components/projet/Contexte';
import YouTube from '../../../components/projet/YouTube';
import Liens from '../../../components/projet/Liens';

const img = '/images/projets/resonance';
const behance = 'https://www.behance.net/gallery/252305951/RESONANCE-In-Motion';
const lecteur = 'https://www-ccv.adobe.io/v1/player/ccv/FbW8zuoJyUD/embed?api_key=behance1&bgcolor=%23191919&autoplay=true';

export const metadata = {
  title: 'RESONANCE In Motion, moodboard animé — Camélia Amin Handoyo',
  description:
    'Étude de cas : RESONANCE In Motion, un moodboard animé en motion design (After Effects) qui traduit mon univers créatif.',
};

export default function Page() {
  return (
    <ProjectLayout slug="resonance">
      <CaseHero
        eyebrow="Étude de cas · motion design"
        titre="RESONANCE In Motion, un moodboard qui bouge"
        accroche="Comment se définir quand son identité est une mosaïque en mouvement ?"
        couleur="#DCDDFB"
        liens={[
          { href: behance, label: 'Voir sur Behance' },
        ]}
      >
        <img src={`${img}/colours-of-my-soul.webp`} alt="Image du film : « The colours of my soul ? » au-dessus d'étoiles colorées sur fond bleu nuit" width="1240" height="702" data-depth="0.4" style={{ width: '92%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.5)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '0%', '--y': '4%', '--r': '-8deg', '--size': 'auto' }}>1080p · 25 i/s</span>
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '74%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>✶ ⋆ ˚</span>
      </CaseHero>

      <Contexte
        outils={[{ nom: 'After Effects', icone: '/images/tools/aftereffects.svg' }]}
        fiche={[
          { label: 'Cadre', valeur: 'Projet universitaire, BUT MMI 3' },
          { label: 'Équipe', valeur: 'Projet individuel' },
          { label: 'Mon rôle', valeur: 'Concept et animation' },
          { label: 'Format', valeur: '1080p, 25 images/s, 20 s minimum' },
          { label: 'Musique', valeur: '« wash my sins away », Berlioz' },
        ]}
        statut="Publié sur Behance"
      >
        <p>La consigne : réaliser un « moodboard animé » ou un showreel personnel d'au moins 20 secondes, qui représente mon univers créatif, ma sensibilité artistique et mon identité visuelle.</p>
        <p>Plutôt qu'un portrait figé, j'ai choisi de traduire mon monde intérieur par des <span className="hl">mouvements fluides</span>, des géométries qui contrastent et des espaces profonds : une introspection sur un moi qui échappe aux cases.</p>
        <p>Côté technique : typographie animée, rythme calé sur la musique et composition vectorielle.</p>
      </Contexte>

      <YouTube
        titre="Le film"
        intro="Lecture avec le lecteur de Behance."
        embed={lecteur}
        lien={behance}
        plateforme="Behance"
        poster={`${img}/colours-of-my-soul.webp`}
        legende="RESONANCE In Motion, moodboard animé de Camélia Amin Handoyo"
      />

      <Liens liens={[{ href: behance, label: 'Le projet sur Behance' }]} />
    </ProjectLayout>
  );
}
