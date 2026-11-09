// LIAZ' Sticker pack case study, English version (/en/projets/sticker-pack/).
// Same structure as src/app/(fr)/projets/sticker-pack/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/sticker-pack';
const behance = 'https://www.behance.net/gallery/237023483/Sticker-pack-Design-(bday-ver)';
const affiche = { width: 1080, height: 1350 };
const photoCouronne = { width: 1133, height: 1600 };
const photoChapeau = { width: 1079, height: 1600 };

export const metadata = {
  title: "LIAZ' Sticker pack, birthday edition — Camélia Amin Handoyo",
  description:
    "LIAZ' Sticker pack (Bday ver.), a personal project made in Photoshop for my 20th birthday: a collage sticker pack built from childhood photos and things that represent me.",
  alternates: { languages: { fr: '/projets/sticker-pack/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="sticker-pack" lang={lang}>
      <CaseHero
        slug="sticker-pack"
        lang={lang}
        eyebrow="Personal project · graphic design"
        titre="LIAZ' Sticker pack, my 20th birthday in stickers"
        accroche="To celebrate turning 20 with a touch of nostalgia, I came up with a “birthday edition” sticker pack featuring everything that represents me."
        couleur="#FCEFC7"
        liens={[{ href: behance, label: 'See it on Behance' }]}
      >
        <img src={`${img}/affiche.webp`} alt="The LIAZ' Sticker pack poster: the pack in its plastic sleeve and the sticker sheet on a cream background" {...affiche} data-depth="0.4" style={{ width: '62%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '2%', '--y': '8%', '--r': '-8deg', '--size': 'auto' }}>16.10</span>
        <img className="floaty floaty--card" src={`${img}/photo-chapeau.webp`} alt="" {...photoChapeau} data-depth="1.6" style={{ '--x': '78%', '--y': '12%', '--r': '8deg', '--size': '6rem', '--delay': '-3s', border: '4px solid var(--paper)', borderRadius: '0.25rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '68%', '--y': '84%', '--r': '6deg', '--size': 'auto', '--delay': '-2s' }}>Bday edition!</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[{ nom: 'Photoshop', icone: '/images/tools/photoshop.svg' }]}
        fiche={[
          { label: 'Setting', valeur: 'Personal project, for my 20th birthday' },
          { label: 'Date', valeur: 'October 2025' },
          { label: 'Team', valeur: 'Solo project' },
          { label: 'My role', valeur: 'Art direction, collage and layout' },
          { label: 'Tools', valeur: 'Photoshop' },
        ]}
        statut="Published on Behance"
      >
        <p>To celebrate <b>turning 20</b> with a bit of nostalgia and lightness, I created a <b>“birthday edition” sticker pack</b> featuring everything that represents me.</p>
        <p>The idea came from a YouTube video by edgykatrina, who made <b>one illustration a day</b> for a week, inspired by her own Pinterest. What struck me was that <span className="hl">she didn't think twice</span> before diving in. I wanted to try the same thing.</p>
        <p>I had also wanted to try the style of <b>collage birthday posters</b> since the year before. It was a chance to make something <b>just for fun</b>.</p>
      </Contexte>

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'The childhood photos',
            texte: 'I started from two photos of me as a little girl at a party, with the flower crown, the hat and the tablecloth covered in flowers.',
            images: [
              { src: `${img}/photo-couronne.webp`, alt: 'Scanned childhood photo: a little girl with a flower crown, standing on a party table', ...photoCouronne },
              { src: `${img}/photo-chapeau.webp`, alt: 'Scanned childhood photo: a little girl in a party hat, laughing, standing on the table', ...photoChapeau },
            ],
          },
          {
            titre: 'The stickers',
            texte: 'In Photoshop, I cut out the photos as white-bordered stickers, then added other elements that represent me, like two flowers, a rooster, my LIAZ signature and a photo stamp marked 16. In total, the pack contains 6 stickers and 1 stamp, in various sizes.',
            image: { src: `${img}/stickers.webp`, alt: 'The sticker sheet: two cut-out photos, a red flower, a purple rooster, a photo stamp, the LIAZ signature and an orange flower', width: 455, height: 720, portrait: true },
          },
          {
            titre: 'The pack and the poster',
            texte: "I composed the pack like a real bag of stickers, with the stickers layered under crumpled plastic, and a “Liaz' sticker pack, Bday edition!” label dated 16/10. The final poster presents it next to the sheet, with its details.",
            images: [
              { src: `${img}/pack.webp`, alt: "The sticker pack in its plastic sleeve, with its Liaz' sticker pack, Bday edition label, dated 16/10", width: 510, height: 805 },
              { src: `${img}/affiche.webp`, alt: "The final LIAZ' Sticker pack poster", ...affiche },
            ],
            liens: [{ href: behance, label: 'See the project on Behance' }],
          },
        ]}
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'Graphic design',
            texte: 'A personal project just for fun, taken from start to finish without overthinking it.',
            competences: ['Photoshop', 'Cut-outs', 'Collage', 'Layout', 'Packaging'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="The sticker pack in pictures"
        intro="The final poster, the pack, the sticker sheet and the original photos."
        filtres={[
          { id: 'rendu', label: 'Final work' },
          { id: 'photos', label: 'Original photos' },
        ]}
        items={[
          { cat: 'rendu', legende: 'The poster', images: [{ src: `${img}/affiche.webp`, alt: "The LIAZ' Sticker pack poster", ...affiche }] },
          { cat: 'rendu', legende: 'The pack', images: [{ src: `${img}/pack.webp`, alt: 'The sticker pack in its plastic sleeve', width: 510, height: 805 }] },
          { cat: 'rendu', legende: 'The sticker sheet', images: [{ src: `${img}/stickers.webp`, alt: 'The sticker sheet and the stamp', width: 455, height: 720 }] },
          { cat: 'photos', legende: 'The flower crown', images: [{ src: `${img}/photo-couronne.webp`, alt: 'Childhood photo with a flower crown', ...photoCouronne }] },
          { cat: 'photos', legende: 'The party hat', images: [{ src: `${img}/photo-chapeau.webp`, alt: 'Childhood photo with a party hat', ...photoChapeau }] },
        ]}
      />

      <Liens lang={lang} liens={[{ href: behance, label: 'The project on Behance' }]} />
    </ProjectLayout>
  );
}
