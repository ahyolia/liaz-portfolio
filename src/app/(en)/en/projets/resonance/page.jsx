// "RESONANCE In Motion" case study, English version (/en/projets/resonance/).
// Same structure as src/app/(fr)/projets/resonance/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import YouTube from '../../../../../components/projet/YouTube';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/resonance';
const behance = 'https://www.behance.net/gallery/252305951/RESONANCE-In-Motion';
const lecteur = 'https://www-ccv.adobe.io/v1/player/ccv/FbW8zuoJyUD/embed?api_key=behance1&bgcolor=%23191919&autoplay=true';

export const metadata = {
  title: 'RESONANCE in Motion, an animated moodboard — Camélia Amin Handoyo',
  description:
    'RESONANCE in Motion, an animated moodboard in motion design (After Effects) that conveys my creative world.',
  alternates: { languages: { fr: '/projets/resonance/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="resonance" lang={lang}>
      <CaseHero
        slug="resonance"
        lang={lang}
        eyebrow="Motion design"
        titre="RESONANCE in Motion, a moodboard that moves"
        accroche="How do you define yourself when your identity is a mosaic in motion?"
        couleur="#DCDDFB"
        liens={[
          { href: behance, label: 'See it on Behance' },
        ]}
      >
        <img src={`${img}/colours-of-my-soul.webp`} alt="Frame from the film: “The colours of my soul?” above colourful stars on a midnight blue background" width="1240" height="702" data-depth="0.4" style={{ width: '92%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.5)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '0%', '--y': '4%', '--r': '-8deg', '--size': 'auto' }}>1080p · 25 fps</span>
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '74%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>✶ ⋆ ˚</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[{ nom: 'After Effects', icone: '/images/tools/aftereffects.svg' }]}
        fiche={[
          { label: 'Setting', valeur: 'University project, BUT MMI 3' },
          { label: 'Team', valeur: 'Solo project' },
          { label: 'My role', valeur: 'Concept and animation' },
          { label: 'Format', valeur: '1080p, 25 fps, 20 s minimum' },
          { label: 'Music', valeur: '“wash my sins away”, Berlioz' },
        ]}
        statut="Published on Behance"
      >
        <p>The brief was to create an <b>“animated moodboard”</b> or a <b>personal showreel</b> of at least 20 seconds, representing <b>my creative world</b>, my artistic sensibility and my visual identity.</p>
        <p>Rather than a static portrait, I chose to convey <b>my inner world</b> through <span className="hl">fluid movement</span>, contrasting geometries and deep spaces, like an introspection on a self that refuses to fit in boxes.</p>
        <p>On the technical side, I worked on <b>kinetic typography</b>, <b>timing synced to the music</b> and <b>vector composition</b>.</p>
      </Contexte>

      <YouTube
        lang={lang}
        titre="The film"
        intro="Played with the Behance player."
        embed={lecteur}
        lien={behance}
        plateforme="Behance"
        poster={`${img}/colours-of-my-soul.webp`}
        legende="RESONANCE In Motion, an animated moodboard by Camélia Amin Handoyo"
      />

      <Liens lang={lang} liens={[{ href: behance, label: 'The project on Behance' }]} />
    </ProjectLayout>
  );
}
