// Personal branding case study, English version (/en/projets/personal-branding/).
// Same structure as src/app/(fr)/projets/personal-branding/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/personal-branding';
const behance = 'https://www.behance.net/gallery/221224075/(2024)-Personal-Branding';
const planche = { width: 1400, height: 840 };

export const metadata = {
  title: 'Personal branding, my monogram as a seal — Camélia Amin Handoyo',
  description:
    'My 2024 personal identity: a C and A monogram inspired by East and Southeast Asian seals, its palette, and its applications on business cards and packaging, in Illustrator and Photoshop.',
  alternates: { languages: { fr: '/projets/personal-branding/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="personal-branding" lang={lang}>
      <CaseHero
        slug="personal-branding"
        lang={lang}
        eyebrow="Personal identity"
        titre="My personal branding, a monogram like a seal"
        accroche="My initials, C and A, brought together in a monogram inspired by Asian seals, the stamps used as signatures."
        couleur="#F3E3D6"
        liens={[{ href: behance, label: 'See it on Behance' }]}
      >
        <img src={`${img}/couverture.webp`} alt="The C and A monogram, in outline and solid plum versions, on a cream background" {...planche} data-depth="0.4" style={{ width: '92%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>C + A</span>
        <img className="floaty floaty--card" src={`${img}/canette.webp`} alt="" width="1400" height="1738" data-depth="1.6" style={{ '--x': '82%', '--y': '34%', '--r': '7deg', '--size': '6rem', '--delay': '-3s', border: '4px solid var(--paper)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '6%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>印鑑 inkan</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[
          { nom: 'Illustrator', icone: '/images/tools/illustrator.svg' },
          { nom: 'Photoshop', icone: '/images/tools/photoshop.svg' },
        ]}
        fiche={[
          { label: 'Setting', valeur: 'Personal branding, BUT MMI' },
          { label: 'Year', valeur: '2024' },
          { label: 'Team', valeur: 'Solo project' },
          { label: 'My role', valeur: 'Logo, palette and applications' },
          { label: 'Tools', valeur: 'Illustrator (logo), Photoshop (mockups)' },
        ]}
        statut="Published on Behance"
      >
        <p>In 2024, I created <b>my personal identity</b>, with <b>a logo that represents me</b>, its colour palette and its applications across different media.</p>
        <p>I drew inspiration from <span className="hl">traditional East and Southeast Asian seals</span>. In Japan, these stamps, called <em>inkan</em> (印鑑) or <em>hanko</em> (判子), <b>are used as signatures</b> to authenticate official documents. They are graphic identities in their own right.</p>
        <p><b>My monogram</b> follows the same principle, with my initials drawn with the elegance of <b>calligraphy</b>, set in a frame <b>like a seal</b>.</p>
      </Contexte>

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'Inspirations',
            texte: 'I started from East and Southeast Asian seals (inkan, hanko) and calligraphy: compact graphic signatures set in a frame.',
            image: { src: `${img}/inspirations.webp`, alt: 'Inspirations board: Japanese seals and calligraphic letters', ...planche },
          },
          {
            titre: 'The monogram',
            texte: 'The logo combines a C for Camélia and an A for Amin Handoyo in a single calligraphic stroke, set inside a rectangle like a seal.',
            image: { src: `${img}/logo-details.webp`, alt: 'Details board: the C for Camélia and the A for Amin Handoyo in the monogram', width: 1400, height: 841 },
          },
          {
            titre: 'Palette and variations',
            texte: 'The monogram comes in four colours (plum, red, anise green and orange) on a cream background, in outline or solid versions, and as a diamond.',
            image: { src: `${img}/logo-couleurs.webp`, alt: 'Logo board: the monogram in four colours', ...planche },
          },
          {
            titre: 'Applications',
            texte: 'Finally, I applied the identity to business cards and two imaginary packaging designs, a “Liaz care” cream and a “Jeruknya” can, shown in Photoshop mockups.',
            image: { src: `${img}/cartes-visite.webp`, alt: 'My business cards, front and back, with the monogram and floral patterns', width: 1400, height: 1145 },
            liens: [{ href: behance, label: 'See the project on Behance' }],
          },
        ]}
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'Visual identity',
            texte: 'An identity that feels like me, from inspiration to applications.',
            competences: ['Logo design', 'Monogram', 'Colour palette', 'Packaging', 'Business cards', 'Mockups', 'Illustrator', 'Photoshop'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="My personal branding in pictures"
        intro="The boards of my identity and its applications."
        filtres={[
          { id: 'identite', label: 'Identity' },
          { id: 'supports', label: 'Applications' },
        ]}
        items={[
          { cat: 'identite', legende: 'The monogram', images: [{ src: `${img}/couverture.webp`, alt: 'The monogram in outline and solid versions', ...planche }] },
          { cat: 'identite', legende: 'Inspirations', images: [{ src: `${img}/inspirations.webp`, alt: 'Inspirations board', ...planche }] },
          { cat: 'identite', legende: 'Colours', images: [{ src: `${img}/logo-couleurs.webp`, alt: 'Colour variations of the monogram', ...planche }] },
          { cat: 'identite', legende: 'Details', images: [{ src: `${img}/logo-details.webp`, alt: 'Details of the monogram', width: 1400, height: 841 }] },
          { cat: 'supports', legende: 'Business cards', images: [{ src: `${img}/cartes-visite.webp`, alt: 'My business cards', width: 1400, height: 1145 }] },
          { cat: 'supports', legende: '“Liaz care” cream', images: [{ src: `${img}/packaging-creme.webp`, alt: 'Liaz care cream packaging', width: 1400, height: 1050 }] },
          { cat: 'supports', legende: '“Jeruknya” can', images: [{ src: `${img}/canette.webp`, alt: 'Jeruknya can with the monogram', width: 1400, height: 1738 }] },
        ]}
      />

      <Liens lang={lang} liens={[{ href: behance, label: 'The project on Behance' }]} />
    </ProjectLayout>
  );
}
