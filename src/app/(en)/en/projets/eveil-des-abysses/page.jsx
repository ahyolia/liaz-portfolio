// "Awakening of the Abyss" case study, English version (/en/projets/eveil-des-abysses/).
// Same structure as src/app/(fr)/projets/eveil-des-abysses/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';
import Video from '../../../../../components/projet/Video';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/eveil-des-abysses';
const github = 'https://github.com/ahyolia/Eveil-des-Abysses';
const dossier = `${img}/dossier-de-conception.pdf`;
const page = { width: 1100, height: 1556 };

export const metadata = {
  title: 'Awakening of the Abyss, an aquarium that follows your hand — Camélia Amin Handoyo',
  description:
    'Éveil des Abysses (Awakening of the Abyss), an immersive, interactive installation made with TouchDesigner for Pacific Spirit, where hand gestures guide a school of fish.',
  alternates: { languages: { fr: '/projets/eveil-des-abysses/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="eveil-des-abysses" lang={lang}>
      <CaseHero
        slug="eveil-des-abysses"
        lang={lang}
        eyebrow="Interactive installation"
        titre="Awakening of the Abyss, an ocean that responds to your hand"
        accroche="Raise your hand in front of the camera, and a whole school of virtual fish starts swimming in the direction of your gesture."
        couleur="#D5ECF5"
        liens={[
          { href: dossier, label: 'Read the design document (in French)' },
          { href: github, label: 'Code on GitHub' },
        ]}
      >
        <img src={`${img}/demo-touchdesigner.webp`} alt="The TouchDesigner network of Éveil des Abysses: the webcam image, the optical flow and the aquarium where the fish swim" width="1440" height="810" data-depth="0.4" style={{ width: '92%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>Pacific Spirit</span>
        <img className="floaty floaty--card" src={`${img}/affiche.webp`} alt="" width={page.width} height={page.height} data-depth="1.6" style={{ '--x': '78%', '--y': '14%', '--r': '8deg', '--size': '7rem', '--delay': '-3s', border: '4px solid var(--ink)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '70%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>One gesture, one school</span>
      </CaseHero>

      <Contexte
        lang={lang}
        fiche={[
          { label: 'Setting', valeur: 'R410 Digital creation, BUT MMI 2, Pacific Spirit event' },
          { label: 'Duration', valeur: 'July → October 2025' },
          { label: 'Team', valeur: 'With Océane Hermant-Melas and Geneviève Mekenese' },
          { label: 'My role', valeur: 'Concept, design document and interactive setup, as a trio' },
          { label: 'Tools', valeur: 'TouchDesigner, Unity (scenery), webcam, optical flow' },
        ]}
        statut="Shown at Pacific Spirit"
      >
        <p>Éveil des Abysses (Awakening of the Abyss) is an <b>immersive, interactive installation</b> designed by three of us for the <b>Pacific Spirit</b> event, as part of the R410 <em>Digital creation</em> module in my second year of BUT MMI, at the University of New Caledonia.</p>
        <p>It all starts from one fact: <b>more than 95% of the oceans remain unexplored</b>. Faced with the unknown, we imagine. Our installation invites visitors to <span className="hl">become part of the artwork</span> rather than just watching it.</p>
        <p>In a room bathed in blue, <b>a webcam tracks hand movements</b>. In TouchDesigner, these gestures orchestrate, in real time, the movement of a <b>school of virtual fish</b>, in a fluid, organic environment.</p>
      </Contexte>

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'Concept',
            texte: "We first wrote the design document, with the context, the problem statement and the narrative of the piece, then a creative watch (teamLab's Sketch Aquarium, the game Tchia, Kanak culture) and an art direction inspired by the New Caledonian lagoon.",
            images: [
              { src: `${img}/dossier-couverture.webp`, alt: 'Cover of the Éveil des Abysses design document, with a sea turtle and corals', ...page },
              { src: `${img}/dossier-narratif.webp`, alt: "Concept page of the document: the installation's narrative", ...page },
              { src: `${img}/dossier-couleurs.webp`, alt: 'Aesthetic choices page of the document: the colour palette inspired by the New Caledonian lagoon', ...page },
            ],
            liens: [{ href: dossier, label: 'Read the design document (PDF, in French)' }],
          },
          {
            titre: 'The visitor journey',
            texte: "We planned the visitor's journey, from the welcome in the half-light to the introduction video and then the moment of interaction, and drew the room plan, with the screen, tables, lights and scenery.",
            images: [
              { src: `${img}/dossier-parcours.webp`, alt: "User journey page of the document: the visitor's path, step by step", ...page },
              { src: `${img}/dossier-schema.webp`, alt: 'Installation diagram page of the document: room plan, tables and projection', ...page },
            ],
          },
          {
            titre: 'The fish and the scenery',
            texte: 'For the setup, we made and illustrated the fish, the turtle and the creatures of the school, then the seabed scenery (rocks, seaweed, corals), assembled as a scene in Unity.',
            video: { src: `${img}/decor-unity.webm`, poster: `${img}/decor-unity-poster.webp`, alt: 'The Éveil des Abysses seabed scenery in Unity: rocks, seaweed and corals under blue light', width: 464, height: 832 },
          },
          {
            titre: 'Reacting to the camera',
            texte: "In TouchDesigner, we connected the nodes together. The webcam films the visitor, the image is turned black and white, an optical flow measures the direction of the hand, and these smoothed values guide the school of fish.",
            images: [
              { src: `${img}/touchdesigner-nodes.webp`, alt: 'TouchDesigner nodes being assembled, in front of the scenery and a yellow fish', width: 1280, height: 779 },
              { src: `${img}/demo-touchdesigner.webp`, alt: 'The finished TouchDesigner network: webcam, monochrome, optical flow and analysis, in front of the aquarium', width: 1440, height: 810 },
            ],
          },
          {
            titre: 'Preparing the event',
            texte: 'Finally, we set up the installation on site for Pacific Spirit (screen, camera, balloons and scenery), with the last adjustments made on the computer before the visitors arrived.',
            images: [
              { src: `${img}/preparation-installation.webp`, alt: 'Setting up on site: the aquarium on screen, while the decorative balloons are put up', width: 1200, height: 1600 },
              { src: `${img}/preparation-equipe.webp`, alt: 'Last adjustments on the computer, sitting on the floor next to the installation', width: 828, height: 1104 },
            ],
          },
        ]}
      />

      <Video
        lang={lang}
        intro="The hand moves in front of the webcam, and the fish follow the gesture in the aquarium."
        src={`${img}/demo.webm`}
        poster={`${img}/demo-poster.webp`}
        width={1280}
        height={720}
        legende="Recording of the Éveil des Abysses demo in TouchDesigner. Hand movements filmed by the webcam move the school of fish"
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'Interaction design',
            texte: "A setup where the visitor's gesture becomes the artwork's tool.",
            competences: ['TouchDesigner', 'Optical flow', 'Real-time interaction', 'Interactive interface design'],
          },
          {
            titre: 'Experience design',
            texte: 'An installation designed end to end, from the story to the room.',
            competences: ['Design document', 'Art direction', 'Scenography', 'Teamwork'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="Awakening of the Abyss in pictures"
        intro="The installation at Pacific Spirit, the poster, the setup in TouchDesigner and a few pages of the design document."
        filtres={[
          { id: 'evenement', label: 'Event' },
          { id: 'dispositif', label: 'Setup' },
          { id: 'conception', label: 'Design' },
        ]}
        items={[
          { cat: 'evenement', legende: 'A visitor facing the aquarium', images: [{ src: `${img}/evenement-visiteur.webp`, alt: 'A visitor in front of the screen, the school of fish follows her gesture', width: 1600, height: 1066 }] },
          { cat: 'evenement', legende: 'The hand on screen, live', images: [{ src: `${img}/evenement-ecran.webp`, alt: 'Close-up of the screen: the black and white webcam image among the fish', width: 828, height: 1104 }] },
          { cat: 'evenement', legende: 'The team in front of the installation', images: [{ src: `${img}/equipe.webp`, alt: 'Océane, Camélia and Geneviève in front of the aquarium screen, at Pacific Spirit', width: 1200, height: 1600 }] },
          { cat: 'evenement', variante: 'page', legende: 'The installation poster', images: [{ src: `${img}/affiche.webp`, alt: 'Éveil des Abysses poster: presentation text, digital aquarium and team portraits', ...page }] },
          { cat: 'dispositif', legende: 'The TouchDesigner network', images: [{ src: `${img}/demo-touchdesigner.webp`, alt: 'The TouchDesigner network in front of the aquarium', width: 1440, height: 810 }] },
          { cat: 'dispositif', legende: 'Nodes being assembled', images: [{ src: `${img}/touchdesigner-nodes.webp`, alt: 'TouchDesigner nodes being assembled', width: 1280, height: 779 }] },
          { cat: 'dispositif', legende: 'The aquarium', images: [{ src: `${img}/aquarium.webp`, alt: 'The digital aquarium and its fish', width: 1168, height: 352 }] },
          { cat: 'conception', variante: 'page', legende: 'Document: creative watch', images: [{ src: `${img}/dossier-veille.webp`, alt: "Creative watch page of the document: teamLab's Sketch Aquarium", ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Document: visual mood', images: [{ src: `${img}/dossier-ambiance.webp`, alt: 'Visual mood page of the document: a board of jellyfish and glowing seabeds', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Document: fish shapes', images: [{ src: `${img}/dossier-formes.webp`, alt: 'Aesthetic choices page of the document: simplified fish silhouettes', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Document: style guide', images: [{ src: `${img}/dossier-charte.webp`, alt: 'Style guide page of the document: logo, colours and typefaces', ...page }] },
        ]}
      />

      <Liens
        lang={lang}
        liens={[
          { href: github, label: 'GitHub' },
          { href: dossier, label: 'Design document (PDF, in French)' },
          { href: 'https://www.linkedin.com/in/camelia-amin-handoyo/', label: 'LinkedIn' },
        ]}
      />
    </ProjectLayout>
  );
}
