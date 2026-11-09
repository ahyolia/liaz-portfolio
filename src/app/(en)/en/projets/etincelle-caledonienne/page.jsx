// "An educator's love" case study, English version (/en/projets/etincelle-caledonienne/).
// Same structure as src/app/(fr)/projets/etincelle-caledonienne/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Questions from '../../../../../components/projet/Questions';
import YouTube from '../../../../../components/projet/YouTube';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/etincelle-caledonienne';
const videoId = '5UiRV0SfMOc';
const youtube = `https://www.youtube.com/watch?v=${videoId}`;
const oral = 'https://canva.link/bpfn28kndyaba0m';
const kit = `${img}/kit-com.pdf`;
const dossier = `${img}/dossier-preparation.pdf`;
const diapo = `${img}/oral-mi-parcours.pdf`;
const affiche = { width: 1600, height: 900 };
const paysage = { width: 1400, height: 788 };
const portrait = { width: 788, height: 1400 };

export const metadata = {
  title: "An educator's love, a web documentary — Camélia Amin Handoyo",
  description:
    "“L'amour d'une éducatrice” (An educator's love), a web documentary made as a duo for NC la 1ère's Les Étincelles Calédoniennes contest, winner of the jury's Coup de cœur prize.",
  alternates: { languages: { fr: '/projets/etincelle-caledonienne/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="etincelle-caledonienne" lang={lang}>
      <CaseHero
        slug="etincelle-caledonienne"
        lang={lang}
        eyebrow="Web documentary"
        titre="An educator's love, the portrait of a high school supervisor"
        accroche="A web documentary just a few minutes long, to shine a light on the people who work behind the scenes."
        couleur="#E4F2D7"
        liens={[
          { href: youtube, label: 'Watch the film' },
          { href: oral, label: 'The pitch presentation' },
        ]}
      >
        <img src={`${img}/visuel-brut.webp`} alt="Poster for the film “L'amour d'une éducatrice”: Mirella and a loved one embracing among the greenery" width="1600" height="900" data-depth="0.4" style={{ width: '92%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.5)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '0%', '--y': '4%', '--r': '-8deg', '--size': 'auto' }}>Aired on NC la 1ère</span>
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '70%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>Jury's favourite ♥</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[
          { nom: 'Canva', icone: '/images/tools/canva.svg' },
          { nom: 'DaVinci Resolve', icone: '/images/tools/davinciresolve.svg' },
        ]}
        fiche={[
          { label: 'Setting', valeur: 'Les Étincelles Calédoniennes contest, NC la 1ère' },
          { label: 'Year', valeur: '2026' },
          { label: 'Team', valeur: 'Duo with Geneviève Mekenese' },
          { label: 'My role', valeur: 'Project management, sound recording, interviews' },
          { label: 'Tools', valeur: 'ClickUp, Canva, lavalier mics, boom pole' },
        ]}
        statut="Jury's Coup de cœur prize"
      >
        <p>For the <b><em>Les Étincelles Calédoniennes</em></b> contest, in partnership with NC la 1ère (New Caledonia's public TV channel), we had to make a <b>4 to 6 minute web documentary</b>, on a tight schedule broken up by work-study periods. I made it as a duo with Geneviève Mekenese.</p>
        <p>Our film follows <b>Mirella Avae</b>, a supervisor at the Apollinaire Anova high school in Païta. Educators are often underestimated, yet for her, this job is a natural extension of her role as a mother. An intimate portrait to shine a light on <span className="hl">the people who work behind the scenes</span>, and pay tribute to them.</p>
        <p>More than a job, we wanted to show the person before the role. We hoped that by the end of the film, everyone would think back to the person who lit their way through a hard time. The challenge was also to deliver a film that <b>a professional broadcaster</b> could air (Full HD, clean sound, colour-graded image).</p>
        <p>The film was <b>broadcast by NC la 1ère</b> and won <span className="hl">the jury's Coup de cœur prize</span> in the contest.</p>
      </Contexte>

      <Questions
        lang={lang}
        titre="Our directing choices"
        questions={[
          {
            question: 'How do you avoid the “school video” feel?',
            reponse: 'No explanatory voice-over: the voices from the interviews tell the story. We wanted the images to speak more than words, through looks, smiles and everyday gestures. That is the vision we defended at the mid-project presentation, in front of the teaching team and a representative of NC la 1ère.',
          },
          {
            question: 'How do you show the woman behind the role?',
            reponse: 'The film follows two moments: Mirella at the high school, with her colleagues and the students, then at home, with her family, her animals and her plants. To show that there aren\'t two Mirellas, but just one, radiant wherever she goes.',
          },
          {
            question: 'What kind of image for that warmth?',
            reponse: 'Two styles answer each other: wide, static shots to let things breathe, and handheld close-ups for intimacy and laughter. All in natural light, with colour grading towards warm tones.',
          },
          {
            question: 'How do you film in a high school?',
            reponse: 'We needed the agreement of the Anova high school\'s management and image release forms for the underage students. We took care of this upstream, before even setting the shooting date.',
          },
          {
            question: 'How do you get clean sound in a schoolyard?',
            reponse: 'Lavalier mics for the interviews, and a boom pole to capture the ambient sounds (the bell, the schoolyard, laughter, wind in the leaves) that make up most of the soundtrack, along with some royalty-free music.',
          },
        ]}
      />

      <YouTube
        lang={lang}
        intro="Mirella has walked the halls of the Anova high school for a long time. At first glance, nothing spectacular. But her smiles, her gestures, a hand on a shoulder… At home, she is the same woman, present and radiant. A job description doesn't tell who she is. The film is in French."
        id={videoId}
        poster={`${img}/visuel-habillage.webp`}
        legende="L'amour d'une éducatrice, by Geneviève Mekenese and Camélia Amin Handoyo"
      />

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'Organisation and schedule',
            texte: 'We organised the project in ClickUp, with a Kanban board. I built the overall schedule and its milestones, with the validation presentation in week 17, the document in week 21 and the shoot in week 22. That gave us time to find locations and work around the participants\' availability.',
            image: { src: `${img}/planning-clickup.webp`, alt: "April 2026 calendar view in the webdoc's ClickUp space, with the tasks Statement of intent, Creative brief, Topic definition, Contest branding and Project validation presentation", width: 1534, height: 770 },
          },
          {
            titre: 'The preparation document',
            texte: "Our quality foundation brought together the statement of intent, the editorial angle, the synopsis, the directing notes, then the shot-by-shot breakdown in three sequences (the high school, Mirella's home and interview, the interview of a loved one). Each day had its call sheet with times, sets, equipment and scenes to shoot. We also had to plan for the students' image rights, get the high school's permission and avoid disrupting Mirella's work.",
            image: { src: `${img}/dossier-clickup.webp`, alt: 'The preparation document in ClickUp, with its Call sheets and Breakdown sub-pages, the introduction of the directors and of Mirella, then the statement of intent', width: 1534, height: 769 },
            liens: [{ href: dossier, label: 'Read the preparation document (PDF, in French)' }],
          },
          {
            titre: 'The mid-project presentation',
            texte: 'We presented our concept to the teaching team and a representative of NC la 1ère, with the editorial vision, the directing choices and the graphic branding. The jury approved the feasibility and potential of the film.',
            images: [
              { src: `${img}/oral-couverture.webp`, alt: "Cover of the presentation, “L'Étincelle Calédonienne, portraits of those who act”, on a photo of Mirella in front of a green wall", ...affiche },
              { src: `${img}/oral-intentions.webp`, alt: 'Directing intentions slide, with four boxes: image, light and colour, sound, narration and structure', ...affiche },
              { src: `${img}/oral-habillage.webp`, alt: 'Branding slide, with five versions of a spark-shaped mascot', ...affiche },
            ],
            liens: [
              { href: diapo, label: 'Read the presentation (PDF, in French)' },
              { href: oral, label: 'See the presentation on Canva' },
            ],
          },
          {
            titre: 'The shoot',
            texte: "The shoot lasted three days, in late May and early June, at the Anova high school then at Mirella's home, in her garden and in the forest. I handled the sound, with lavalier mics and the boom pole, and conducted the interviews. I prepared the questions and asked them to Mirella and her loved ones to guide the narrative.",
            images: [
              { src: `${img}/tournage-foret.webp`, alt: 'Shooting in the forest, with the boom pole and camera aimed at two women among the greenery', ...paysage },
              { src: `${img}/tournage-interview.webp`, alt: 'Wide shot of an interview on a tree-lined path, the camera on a tripod facing a seated woman', ...paysage },
              { src: `${img}/tournage-equipe.webp`, alt: 'The film crew gathered around the camera on its tripod, with a loved one of Mirella', ...portrait },
            ],
          },
          {
            titre: 'Editing',
            texte: 'Geneviève handled the camera work and the final edit, and we made the cuts together to keep the strongest moments. The film was then broadcast by NC la 1ère.',
            image: { src: `${img}/miniature.webp`, alt: 'Frame from the film: Mirella weaves coconut leaves, sitting in the grass facing the mountains', ...affiche },
          },
        ]}
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'Project management',
            texte: 'Meeting deadlines and securing the shoot.',
            competences: ['ClickUp and Kanban', 'Schedule and milestones', 'Image rights', 'Call sheets', 'Risk list'],
          },
          {
            titre: 'Sound and interviews',
            texte: 'Capturing usable sound and testimonies.',
            competences: ['Lavalier mics', 'Boom recording', 'Preparing questions', 'Conducting interviews'],
          },
          {
            titre: 'Framing and pitching',
            texte: 'Preparing the film and defending it in front of the broadcaster.',
            competences: ['Statement of intent', 'Shot breakdown', 'Directing notes', 'Presentation deck', 'Pitch in front of NC la 1ère'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="The film in pictures"
        intro="The visuals from the communication kit delivered with the film, behind-the-scenes photos, and the Étincelles Calédoniennes award ceremony."
        filtres={[
          { id: 'affiche', label: 'Poster' },
          { id: 'film', label: 'Film stills' },
          { id: 'tournage', label: 'Shoot' },
          { id: 'prix', label: 'Award ceremony' },
        ]}
        items={[
          {
            cat: 'affiche',
            legende: 'Poster · with / without branding',
            images: [
              { src: `${img}/visuel-habillage.webp`, alt: 'Film poster with the Les Étincelles Calédoniennes contest logo', ...affiche },
              { src: `${img}/visuel-brut.webp`, alt: 'Film poster without branding', ...affiche },
            ],
          },
          { cat: 'film', legende: 'Mirella weaving coconut leaves', images: [{ src: `${img}/miniature.webp`, alt: 'Frame from the film: Mirella weaves coconut leaves, sitting in the grass facing the mountains', ...affiche }] },
          { cat: 'tournage', legende: 'In the forest, with the boom and camera', images: [{ src: `${img}/tournage-foret.webp`, alt: 'Shooting in the forest, with the boom pole and camera aimed at two women among the greenery', ...paysage }] },
          { cat: 'tournage', legende: 'An interview by the path', images: [{ src: `${img}/tournage-interview.webp`, alt: 'Wide shot of an interview on a tree-lined path, the camera on a tripod facing a seated woman', ...paysage }] },
          { cat: 'tournage', legende: 'The crew around the camera', images: [{ src: `${img}/tournage-equipe.webp`, alt: 'The film crew gathered around the camera on its tripod, with a loved one of Mirella', ...portrait }] },
          { cat: 'tournage', legende: 'Between takes', images: [{ src: `${img}/tournage-chemin.webp`, alt: 'On the path, one films while the other holds the boom, a dog in the foreground', ...portrait }] },
          { cat: 'tournage', legende: 'As a duo, ready to shoot', images: [{ src: `${img}/tournage-binome.webp`, alt: 'Selfie of the two directors by the roadside, one holding the camera and its mic', width: 1600, height: 1202 }] },
          { cat: 'prix', legende: "The jury's Coup de cœur prize", images: [{ src: `${img}/prix-binome.webp`, alt: 'The two directors smiling, each holding an NC la 1ère bag, at the award ceremony', width: 1050, height: 1400 }] },
          { cat: 'prix', legende: 'With the other winners', images: [{ src: `${img}/prix-groupe.webp`, alt: 'Group photo of the contest winners at the award ceremony, with NC la 1ère bags', width: 1182, height: 886 }] },
        ]}
      />

      <Liens
        lang={lang}
        liens={[
          { href: youtube, label: 'The film on YouTube' },
          { href: dossier, label: 'The preparation document (PDF, in French)' },
          { href: oral, label: 'The pitch presentation (Canva)' },
          { href: kit, label: 'The communication kit (PDF)' },
        ]}
      />
    </ProjectLayout>
  );
}
