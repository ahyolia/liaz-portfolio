// "Video pitch" case study, English version (/en/projets/accroche-video/).
// Same structure as src/app/(fr)/projets/accroche-video/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Questions from '../../../../../components/projet/Questions';
import YouTube from '../../../../../components/projet/YouTube';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';

const lang = 'en';
const img = '/images/projets/cv-video';
const plan = { width: 1600, height: 900 };
const dossier = 'https://docs.google.com/document/d/1lDpBRgB1o5dEIid0T1EbdoPAUWVk-DbG7Uu09WHcnLk/edit?usp=sharing';

export const metadata = {
  title: 'Video pitch, introducing myself in one minute — Camélia Amin Handoyo',
  description:
    'A self-introduction video under one minute long, written, directed and edited on my own for the BUT MMI career project course.',
  alternates: { languages: { fr: '/projets/accroche-video/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="accroche-video" lang={lang}>
      <CaseHero
        slug="accroche-video"
        lang={lang}
        eyebrow="Video"
        titre="Video pitch, introducing myself in under a minute"
        accroche="One minute to show where I build, where I step back, and where my ambitions are calling me."
        couleur="#FCE7C8"
      >
        <img src={`${img}/miniature-bougies.webp`} alt="Shot from the film: a hand lights the candles on a birthday cake" width="1600" height="900" data-depth="0.4" style={{ width: '92%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.5)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '0%', '--y': '4%', '--r': '-8deg', '--size': 'auto' }}>under 60 s</span>
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '72%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>Make a wish!</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[{ nom: 'DaVinci Resolve', icone: '/images/tools/davinciresolve.svg' }]}
        fiche={[
          { label: 'Setting', valeur: 'Career project course, BUT MMI 3' },
          { label: 'Duration', valeur: 'October 5 → 26, 2026' },
          { label: 'Team', valeur: 'Solo project' },
          { label: 'My role', valeur: 'Writing, directing, editing, framing' },
          { label: 'Format', valeur: '16:9, under 60 s, voice-over and music' },
        ]}
        statut="Delivered"
      >
        <p>For the Personal and Professional Project course, we had to make a <b>CV-style pitch video</b>: <b>under one minute</b> to make people want to know more about us.</p>
        <p>Rather than listing what I can do, I chose to show <b>what makes me who I am, in fragments</b>. Trained in development, what drives me is <span className="hl">the human behind the screen</span>, and that is what is leading me towards <b>UX design</b>. And as a fiction reader, I learned very early on to <b>imagine worlds</b> that don't exist yet.</p>
        <p><b>I wrote, directed and edited the video on my own</b>, and Geneviève Mekenese and Magalie Chen helped me with the framing.</p>
      </Contexte>

      <Questions
        lang={lang}
        titre="My writing choices"
        questions={[
          {
            question: "How do you introduce yourself in one minute when a person can't be summed up?",
            reponse: 'In three parts. First my bedroom, where I build (my books, my colours, my whiteboard covered in projects). Then the beach, where I breathe and step back. Finally my birthday, which fell that month, where I look ahead to these “ambitions calling me from afar”.',
          },
          {
            question: 'What common thread?',
            reponse: 'Time. The voice-over speaks of “words slipping through my hands”, and on screen, sand slips through my fingers. They express what I can\'t hold on to, like this minute that isn\'t enough to tell everything. The candles mark one year ending and another beginning.',
          },
          {
            question: 'How do you end without saying everything?',
            reponse: 'The voice-over is a short rhyming poem, an inner thought. The last line has no rhyme, cut off by my breath blowing out the candles. A wish is not said out loud, you keep it to yourself.',
          },
        ]}
      />

      <YouTube
        lang={lang}
        titre="The video"
        intro="An intimate, contemplative tone, with the camera close to the body, close-ups, natural light, soft music and close sounds (pages, sand, the sea, breathing). The voice-over is in French."
        id="FDmvYcf1NJI"
        poster={`${img}/miniature-bougies.webp`}
        legende="Camélia Amin Handoyo's video pitch, from my bedroom to the beach, then to my birthday"
      />

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'The preparation document',
            texte: 'From October 5 to 9, I wrote the statement of intent, the voice-over poem, then the shot-by-shot breakdown of the three sequences, with reference images for framing and the project schedule.',
            image: { src: `${img}/dossier-prepa.webp`, alt: 'First page of the preparation document in Google Docs: the team, the format (under 60 seconds, 16:9, voice-over and music) and the schedule, with the Presentation, Statement of intent and Breakdown tabs', width: 1534, height: 769 },
            liens: [{ href: dossier, label: 'Read the preparation document (in French)' }],
          },
          {
            titre: 'The shoot: 3 days, 3 locations',
            texte: 'The beach on October 10, my bedroom on the 11th, and the living room for the birthday on the 16th. The same glass links the bedroom and the beach. Geneviève Mekenese and Magalie Chen helped me frame the shots when I had to be on camera.',
            images: [
              { src: `${img}/chambre-bureau.webp`, alt: 'Shot from the film: I code at my desk in the evening', ...plan },
              { src: `${img}/plage.webp`, alt: 'Shot from the film: sitting on the beach, I look at the horizon', ...plan },
              { src: `${img}/bougies.webp`, alt: 'Shot from the film: a hand lights the candles on the birthday cake', ...plan },
            ],
          },
          {
            titre: 'Editing and colour grading',
            texte: 'Editing from October 12 to 18, then a first screening on the 19th to adjust the pacing. The colour grading keeps the natural light and warm tones, for an intimate atmosphere from one place to the next.',
            images: [
              { src: `${img}/chambre-tableau.webp`, alt: 'Shot from the film: my whiteboard covered in ongoing projects, in warm light', ...plan },
              { src: `${img}/voeu.webp`, alt: 'Shot from the film: I blow out my candles, lit by the flames', ...plan },
            ],
          },
          {
            titre: 'Sound design',
            texte: 'Soft music, my voice-over reading the poem, and close sounds like pages, sand, the sea and breathing. The last line is cut off by the breath on the candles, before the black screen. Final delivery on October 26.',
            image: { src: `${img}/plage-sable.webp`, alt: 'Shot from the film: sand slips through my fingers', ...plan },
          },
        ]}
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'Writing',
            texte: 'Telling who I am without making a list.',
            competences: ['Statement of intent', 'Voice-over poem', 'Three-part structure', 'Shot breakdown'],
          },
          {
            titre: 'Directing and editing',
            texte: 'From shoot to delivery, in three weeks.',
            competences: ['Directing camera operators', 'Continuity between sequences', 'Close-ups and natural light', 'Editing and pacing', 'Subtitles'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="A few shots"
        intro="The film's three locations: the bedroom, the beach and the living room."
        filtres={[
          { id: 'chambre', label: 'Bedroom' },
          { id: 'plage', label: 'Beach' },
          { id: 'anniversaire', label: 'Birthday' },
        ]}
        items={[
          { cat: 'chambre', legende: 'At my desk', images: [{ src: `${img}/chambre-bureau.webp`, alt: 'I code at my desk in the evening', ...plan }] },
          { cat: 'chambre', legende: 'The project board', images: [{ src: `${img}/chambre-tableau.webp`, alt: 'My whiteboard covered in ongoing projects', ...plan }] },
          { cat: 'plage', legende: 'Facing the horizon', images: [{ src: `${img}/plage.webp`, alt: 'Sitting on the beach, I look at the horizon', ...plan }] },
          { cat: 'plage', legende: 'Slipping sand', images: [{ src: `${img}/plage-sable.webp`, alt: 'Sand slips through my fingers', ...plan }] },
          { cat: 'anniversaire', legende: 'The candles', images: [{ src: `${img}/bougies.webp`, alt: 'A hand lights the candles on the cake', ...plan }] },
          { cat: 'anniversaire', legende: 'The wish', images: [{ src: `${img}/voeu.webp`, alt: 'I blow out my candles', ...plan }] },
        ]}
      />
    </ProjectLayout>
  );
}
