// LiAZ Gallery case study, English version (/en/projets/liaz-gallery/).
// Same structure as src/app/(fr)/projets/liaz-gallery/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Video from '../../../../../components/projet/Video';
import Galerie from '../../../../../components/projet/Galerie';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const github = 'https://github.com/ahyolia/LiAZ-Gallery';
const release = 'https://github.com/ahyolia/LiAZ-Gallery/releases/tag/v1.1';
const img = '/images/projets/liaz-gallery';
const galerie = { src: `${img}/gallerie.webp`, alt: 'The LiAZ gallery: an exhibition room with paintings on the walls and sofas, with voice search and movement instructions on screen', width: 1534, height: 862 };

export const metadata = {
  title: 'LiAZ Gallery, a voice-controlled 3D gallery — Camélia Amin Handoyo',
  description:
    'LiAZ Gallery, a 3D image gallery controlled by voice, built with Unity 6, C#, the Serper API and on-device Whisper.',
  alternates: { languages: { fr: '/projets/liaz-gallery/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="liaz-gallery" lang={lang}>
      <CaseHero
        slug="liaz-gallery"
        lang={lang}
        eyebrow="Interactive 3D"
        titre="LiAZ Gallery, a 3D gallery you control with your voice"
        accroche="Say what you are looking for, and the images found on the web are hung on the walls."
        couleur="#D7F2F3"
        liens={[
          { href: release, label: 'Download v1.1 (Windows)' },
          { href: github, label: 'Code on GitHub' },
        ]}
      >
        <img src={galerie.src} alt={galerie.alt} width={galerie.width} height={galerie.height} data-depth="0.4" style={{ width: '90%', borderRadius: '1rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.5)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '0%', '--y': '4%', '--r': '-8deg', '--size': 'auto' }} lang="fr">« recherche… »</span>
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '70%', '--y': '82%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>“… and pause”</span>
        <img className="floaty floaty--icon" src="/images/tools/unity.svg" alt="" width="48" height="48" data-depth="1.2" style={{ '--x': '84%', '--y': '0%', '--r': '10deg', '--size': '3.5rem', '--delay': '-4s', background: 'var(--paper)', padding: '0.6rem' }} />
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[
          { nom: 'Unity', icone: '/images/tools/unity.svg' },
          { nom: 'C#', icone: '/images/tools/csharp.svg' },
          { nom: 'Visual Studio Code', icone: '/images/tools/vscode.svg' },
          { nom: 'Git', icone: '/images/tools/git.svg' },
        ]}
        fiche={[
          { label: 'Setting', valeur: 'XR and Interactions course, BUT MMI 3' },
          { label: 'Year', valeur: '2026' },
          { label: 'Team', valeur: 'Solo project' },
          { label: 'My role', valeur: 'Design and development' },
          { label: 'Tools', valeur: 'Unity 6 (URP), C#, UnityWebRequest, Serper API, Windows speech recognition, Whisper (whisper.unity), OpenXR' },
        ]}
        statut="Version 1.1 released"
      >
        <p>For Gilles Énée's <em>XR and Interactions</em> course, I <b>designed and developed on my own</b> a <b>3D art gallery in Unity</b> that displays the <b>results of a Google Images search</b> live.</p>
        <p>Say “recherche” (search), say what you want to see, then pause. The images found on the web are instantly <b>hung on the walls like paintings</b>, and you explore the gallery <b>by flying a drone</b>.</p>
        <p>I wanted search to be <span className="hl">entirely voice-driven</span> and the visit to feel smooth. The project includes OpenXR for headsets, but after running into hardware incompatibilities during testing, I chose to ship a <b>stable PC version</b>, with keyboard and mouse.</p>
        <p>With <b>version 1.1</b>, search becomes truly open: the spoken phrase is <b>transcribed on the computer by Whisper</b>, in French and <b>offline</b>.</p>
      </Contexte>

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'Finding the assets',
            texte: 'I started by gathering 3D models from the <b>Unity Asset Store</b>: plants (Casual Plants Lite Pack), picture frames (Customizable Frames Gallery, Picture frames with photos), interior decor (Interior House Assets), the sci-fi drone (Sci-Fi Drone) and animated hands for VR.',
            image: { src: `${img}/assets-unity.webp`, alt: 'The My Assets page of the Unity Asset Store, with Casual Plants Lite Pack, Customizable Frames Gallery, Interior House Assets, Picture frames with photos and Sci-Fi-Drone', width: 1270, height: 812 },
            liens: [{ href: 'https://assetstore.unity.com', label: 'See the Unity Asset Store' }],
          },
          {
            titre: 'Building the room and the drone',
            texte: "I built the exhibition room (walls, floor, ceiling and windows) at the right scale to move around in it. The scene is organised into a few blocks: the room, the drone, the paintings, the decor and the interface. You explore it by piloting a drone that flies freely in three dimensions, guided by the mouse, without ever going through the walls.",
            image: { src: `${img}/unity-editeur.webp`, alt: 'The project in the Unity 6 editor: the room seen from outside in the scene, the hierarchy (GalleryRoom, DroneRig, GalleryManager, Tableaux, deco, Canvas) and the game view with the sofas and paintings', width: 1917, height: 1078 },
          },
          {
            titre: 'Placing the paintings',
            texte: 'I spread the painting slots across the walls. Each one is a plane whose image is replaced by a search result, and a click opens its details and the link to the source. If an image fails to download (broken link, network), a fallback image takes its place.',
            image: { src: `${img}/panneau-details.webp`, alt: "The details panel open in front of a painting: the image's title, source site and full link", width: 1600, height: 900 },
          },
          {
            titre: 'Voice and the Serper API',
            texte: "In v1.0, a keyword triggered listening, Windows dictation captured the query and a second keyword confirmed it. The request goes to the Serper API (chosen over Google Custom Search for its quotas), and images download in the background without freezing the display. The API key stays out of the public repository. I also fixed a bug that blocked the microphone after a first search, by restarting speech recognition with automatic retries.",
            image: { src: `${img}/ecoute.webp`, alt: 'The gallery after the word “recherche”: the message “I\'m listening… say your search, then pause” appears at the top left', width: 1600, height: 900 },
          },
          {
            titre: 'v1.1: switching to Whisper',
            texte: "On my computer, Windows dictation would start then cancel itself without ever returning a word: everything said after “recherche” was lost. In v1.1, after the trigger word, the microphone records until a pause, then <b>Whisper</b> (whisper.unity, <i>base</i> model) transcribes the phrase <b>on device</b>, in French and offline. You can now search for anything, even a proper name. A fallback word-list mode is still available, and the 148 MB model is kept out of the repository.",
            image: { src: `${img}/galerie-remplie.webp`, alt: 'The gallery filled after the voice search “Marius von Hagen”: the transcribed phrase appears at the top and the illustrations found are hung on the walls', width: 1600, height: 900 },
            liens: [{ href: release, label: 'See the v1.1 release' }],
          },
          {
            titre: 'Lights, decor and instructions',
            texte: 'Finally, I added the lighting, the furniture and the always-visible on-screen help required by the brief, which explains how to move, start a search and open a painting\'s details.',
            image: galerie,
          },
        ]}
      />

      <Video
        lang={lang}
        intro="Say “recherche”, then “Marius von Hagen”: the phrase is transcribed on device by Whisper, the images found are hung on the walls, and clicking on a painting opens its source."
        src={`${img}/demo.webm`}
        poster={`${img}/demo-poster.webp`}
        width={1280}
        height={720}
        legende="LiAZ Gallery v1.1 demo: voice search, gallery filled with illustrations, drone flight and a painting's details panel"
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'Web and API',
            texte: 'Feeding a 3D scene with data from the web.',
            competences: ['Serper REST API', 'Asynchronous requests', 'JSON parsing', 'Textures downloaded live', 'Protected API key'],
          },
          {
            titre: 'Unity programming',
            texte: 'All the project logic, from voice to display.',
            competences: ['C# · Unity 6', 'Hybrid voice control', 'On-device Whisper', 'Microphone fix', 'Drone and collisions', 'Raycast clicking', 'Fallback image', 'OpenXR'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="The gallery in pictures"
        intro="Screenshots of the gallery, the interface and the project in Unity."
        filtres={[
          { id: 'galerie', label: 'Gallery' },
          { id: 'interface', label: 'Interface' },
        ]}
        items={[
          { cat: 'galerie', legende: 'The room and its paintings', images: [galerie] },
          { cat: 'galerie', legende: 'The walls filled after a voice search', images: [{ src: `${img}/galerie-remplie.webp`, alt: 'The gallery filled after the voice search “Marius von Hagen”: the illustrations found are hung on the walls', width: 1600, height: 900 }] },
          { cat: 'interface', legende: 'Listening after the word “recherche”', images: [{ src: `${img}/ecoute.webp`, alt: 'The message “I\'m listening… say your search, then pause” at the top left of the gallery', width: 1600, height: 900 }] },
          { cat: 'interface', legende: "An image's details panel", images: [{ src: `${img}/panneau-details.webp`, alt: "The details panel open in front of a painting: the image's title, source site and full link", width: 1600, height: 900 }] },
          { cat: 'interface', legende: 'The project in the Unity editor', images: [{ src: `${img}/unity-editeur.webp`, alt: 'The project in the Unity 6 editor: the scene, the hierarchy and the game view', width: 1917, height: 1078 }] },
        ]}
      />

      <Liens
        lang={lang}
        liens={[
          { href: release, label: 'Download v1.1 (Windows)' },
          { href: github, label: 'GitHub' },
        ]}
      />
    </ProjectLayout>
  );
}
