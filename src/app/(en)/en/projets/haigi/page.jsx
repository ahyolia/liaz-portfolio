// Haigi case study, English version (/en/projets/haigi/).
// Same structure as src/app/(fr)/projets/haigi/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/haigi';
const behance = 'https://www.behance.net/gallery/208247875/Haigi-Brand-Identity';
const planche = { width: 1400, height: 767 };

export const metadata = {
  title: 'Haigi, a brand identity — Camélia Amin Handoyo',
  description:
    'Haigi, the visual identity of a fictional brand of capsules that turn a liquid into an object. Moodboards, logo, typefaces, posters and business cards, in Illustrator. A BUT MMI 1 project made as a duo.',
  alternates: { languages: { fr: '/projets/haigi/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="haigi" lang={lang}>
      <CaseHero
        slug="haigi"
        lang={lang}
        eyebrow="Brand identity"
        titre="Haigi, a brand between fun and mystic"
        accroche="A capsule whose liquid turns into the object you need. For this first brand identity, we went from moodboard all the way to printed media."
        couleur="#F6D3E4"
        liens={[{ href: behance, label: 'See it on Behance' }]}
      >
        <img src={`${img}/couverture.webp`} alt="Cover of the Haigi identity: “Brand identity”, the Haigi logo in white on a green and pink gradient" {...planche} data-depth="0.4" style={{ width: '92%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>Fun & Mystic</span>
        <img className="floaty floaty--card" src={`${img}/cartes-visite.webp`} alt="" width="1400" height="1145" data-depth="1.6" style={{ '--x': '74%', '--y': '64%', '--r': '7deg', '--size': '9rem', '--delay': '-3s', border: '4px solid var(--paper)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '6%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>Fictional brand</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[{ nom: 'Illustrator', icone: '/images/tools/illustrator.svg' }]}
        fiche={[
          { label: 'Setting', valeur: 'First brand design project, BUT MMI 1' },
          { label: 'Year', valeur: '2024' },
          { label: 'Team', valeur: 'Duo with Geneviève Mekenese' },
          { label: 'My role', valeur: 'Concept, moodboard, logo and applications' },
          { label: 'Tools', valeur: 'Illustrator' },
        ]}
        statut="Published on Behance"
      >
        <p>Haigi is a <b>fictional brand</b>, created for our <b>first brand design project</b> in BUT MMI, as a duo with Geneviève Mekenese.</p>
        <p>The idea is <b>a capsule that contains a unique liquid</b>. Once broken, it solidifies into <b>the object you need</b>. You can even mix several liquids to <span className="hl">combine functions</span>, like a lamp-mug.</p>
        <p>So the identity had to be both <b>playful and a little magical</b>, able to carry a promise of <b>personalisation</b>: “Customise the design of every object so it reflects your style!”</p>
      </Contexte>

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'The concept',
            texte: 'We first wrote the concept and tone of the brand, around a revolutionary capsule that turns a simple liquid into everything you need, and a tagline focused on personalisation.',
            image: { src: `${img}/concept.webp`, alt: 'Presentation board of the Haigi concept and its capsules', ...planche },
          },
          {
            titre: 'Two moodboards, Fun and Mystic',
            texte: 'We each made our own moodboard: “Fun” for Geneviève, with colourful, pop objects, and “Mystic” for me, darker and more mysterious. The identity was born from mixing the two.',
            image: { src: `${img}/moodboards.webp`, alt: 'The two moodboards: Fun, by Geneviève, and Mystic, by Camélia', ...planche },
          },
          {
            titre: 'The logo',
            texte: "The logo reflects this dual personality: fluid, organic lettering, like a liquid taking shape, with a star dotting the i. It comes in light and dark versions and on the brand's green and pink gradient, with a monogram.",
            image: { src: `${img}/logos.webp`, alt: 'Variations of the Haigi logo and its monogram, light, dark and on the gradient', ...planche },
          },
          {
            titre: 'Typefaces',
            texte: 'Soopafresh for punchy headings, Gyahegi for the mystic touch, Edwardian Script for elegance and Avenir for body text.',
            image: { src: `${img}/typos-titres.webp`, alt: 'The Soopafresh and Gyahegi typefaces, with their glyphs', ...planche },
          },
          {
            titre: 'Applications',
            texte: 'Finally, we applied the identity to a “Back to school” poster campaign and business cards.',
            image: { src: `${img}/affiches-kiosque.webp`, alt: 'The Haigi “Back to school” posters on a kiosk, in green and pink', width: 1400, height: 919 },
            liens: [{ href: behance, label: 'See the project on Behance' }],
          },
        ]}
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'Visual identity',
            texte: 'A brand built as a duo, from idea to printed media.',
            competences: ['Brand concept', 'Moodboard', 'Logo design', 'Typeface choices', 'Media applications', 'Illustrator'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="Haigi in pictures"
        intro="The brand identity boards and its applications."
        filtres={[
          { id: 'identite', label: 'Identity' },
          { id: 'supports', label: 'Applications' },
        ]}
        items={[
          { cat: 'identite', legende: 'Cover', images: [{ src: `${img}/couverture.webp`, alt: 'Cover of the Haigi identity', ...planche }] },
          { cat: 'identite', legende: 'The logo', images: [{ src: `${img}/logos.webp`, alt: 'Logo variations', ...planche }] },
          { cat: 'identite', legende: 'The moodboards', images: [{ src: `${img}/moodboards.webp`, alt: 'The Fun and Mystic moodboards', ...planche }] },
          { cat: 'identite', legende: 'Heading typefaces', images: [{ src: `${img}/typos-titres.webp`, alt: 'Soopafresh and Gyahegi typefaces', ...planche }] },
          { cat: 'identite', legende: 'Body typefaces', images: [{ src: `${img}/typos-textes.webp`, alt: 'Edwardian Script and Avenir typefaces', ...planche }] },
          { cat: 'identite', legende: 'The tagline', images: [{ src: `${img}/slogan.webp`, alt: '“Customise the design of every object so it reflects your style!” (in French)', ...planche }] },
          { cat: 'supports', legende: 'Posters', images: [{ src: `${img}/affiches-kiosque.webp`, alt: 'The posters on a kiosk', width: 1400, height: 919 }] },
          { cat: 'supports', legende: 'Business cards', images: [{ src: `${img}/cartes-visite.webp`, alt: 'Haigi business cards, front and back', width: 1400, height: 1145 }] },
          { cat: 'supports', legende: 'Thank you', images: [{ src: `${img}/merci.webp`, alt: 'Closing board “Thank you very much”', ...planche }] },
        ]}
      />

      <Liens lang={lang} liens={[{ href: behance, label: 'The project on Behance' }]} />
    </ProjectLayout>
  );
}
