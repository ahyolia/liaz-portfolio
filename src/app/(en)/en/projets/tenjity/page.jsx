// Tenjity case study, English version (/en/projets/tenjity/).
// Same structure as src/app/(fr)/projets/tenjity/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/tenjity';
const site = 'https://tenjity.com';
const article = 'https://tenjity.com/actualites/avh-teste-tenjity-retour-numerique-inclusif';
const figma = 'https://www.figma.com/design/mdGpkGNMP8GSIUE4YrbTP1/Lagoon---Tenjity?node-id=24-2';
const maquette = { width: 1280, height: 1929 };
const panneau = { width: 900, height: 1362 };

export const metadata = {
  title: 'Tenjity, a web accessibility module — Camélia Amin Handoyo',
  description:
    'Tenjity, a New Caledonian web accessibility module. Contribution to its development (magnifier, dark mode…) after testing with the Valentin Haüy association, plus mockups and integration of the site’s article page, during my work-study at OFFRATEL Lagoon.',
  alternates: { languages: { fr: '/projets/tenjity/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="tenjity" lang={lang}>
      <CaseHero
        slug="tenjity"
        lang={lang}
        eyebrow="Web accessibility · work-study"
        titre="Tenjity, making the web more accessible in New Caledonia"
        accroche="During my work-study at OFFRATEL Lagoon, I contributed to the Tenjity accessibility module, after testing it with the Valentin Haüy association, and to the website that presents it."
        couleur="#FFF1B8"
        liens={[
          { href: site, label: 'Try Tenjity' },
          { href: article, label: 'Read the article on the tests' },
        ]}
      >
        <img src={`${img}/site-accueil.webp`} alt="The tenjity.com home page: “Want a more accessible website?”, with the module's settings (zooms, cursor, tints, dark mode)" width="1600" height="910" data-depth="0.4" style={{ width: '92%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>Tested with the AVH</span>
        <img className="floaty floaty--card" src={`${img}/module-curseur.webp`} alt="" width="1200" height="827" data-depth="1.6" style={{ '--x': '74%', '--y': '70%', '--r': '7deg', '--size': '9rem', '--delay': '-3s', border: '4px solid var(--ink)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '6%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>RGAA & WCAG</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[
          { nom: 'Figma', icone: '/images/tools/figma.svg' },
          { nom: 'Vue.js', icone: '/images/tools/vuejs.svg' },
        ]}
        fiche={[
          { label: 'Setting', valeur: 'BUT MMI 3 work-study, OFFRATEL Lagoon' },
          { label: 'Year', valeur: '2026' },
          { label: 'My role', valeur: 'Front-end dev and UI/UX' },
          { label: 'Tools', valeur: 'Figma, Nuxt (Vue.js)' },
        ]}
        statut="Live"
      >
        <p>Tenjity is a <b>web accessibility module</b> developed in New Caledonia and offered by Lagoon. Once installed on a website, it lets every visitor <b>adapt it to their needs</b>, with zooms and a magnifier, a dyslexia-friendly font, cursor options, a screen reader, dark mode, tints and contrast settings.</p>
        <p>During my <b>third-year BUT MMI work-study</b> at OFFRATEL Lagoon, I contributed to its development, especially <span className="hl">the magnifier and dark mode</span>, based on feedback from tests carried out with the <b>Valentin Haüy association</b> (a French association for blind and visually impaired people).</p>
        <p>I also worked on the <b><a href={site}>tenjity.com</a> website</b>, where I designed the <b>article page mockups</b> in Figma, then <b>built it</b>.</p>
      </Contexte>

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'Testing with the AVH',
            texte: 'Five members of the Valentin Haüy association tested the module with us. Their feedback gave us concrete directions, such as a better zoom, more visible cursors, adjustable contrast and text sizes, and a module that is easier to find on the page.',
            image: { src: `${img}/test-avh.webp`, alt: 'Testing session of the Tenjity module with members of the Valentin Haüy association', width: 1600, height: 1200 },
            liens: [{ href: article, label: 'Read the article on the tests' }],
          },
          {
            titre: "The module's features",
            texte: 'I then contributed to developing features of the module, including the magnifier, which enlarges the hovered area, and dark mode, for a less dazzling display.',
            images: [
              { src: `${img}/module-panneau.webp`, alt: 'The Tenjity module panel: zooms, magnifier, reading ruler, dyslexia, cursor, screen reader, on-screen keyboard, dark mode, tints', ...panneau },
              { src: `${img}/module-zooms.webp`, alt: "The module's zoom settings: page, module and text zoom", width: 1200, height: 1105 },
            ],
          },
          {
            titre: 'The website mockups',
            texte: 'For tenjity.com, I designed the news page and the article page in Figma, with the date and author, the title, tags, a large image, the text, a link to the source and navigation between articles.',
            images: [
              { src: `${img}/maquette-article.webp`, alt: 'Figma mockup of the Tenjity article page', ...maquette },
              { src: `${img}/maquette-actualites.webp`, alt: 'Figma mockup of the Tenjity news page', ...maquette },
            ],
            liens: [{ href: figma, label: 'See the Figma mockups' }],
          },
          {
            titre: 'Building the article page',
            texte: 'I then built the article page on the website. Today it features the article about the tests with the AVH, where I appear in the photo.',
            image: { src: `${img}/article-en-ligne.webp`, alt: 'The live article page on tenjity.com: “The AVH tests Tenjity for a more inclusive digital world”', width: 1440, height: 1000 },
            liens: [{ href: article, label: 'See the live page' }],
          },
        ]}
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'Accessibility',
            texte: 'A module built with the people who use it.',
            competences: ['User testing', 'Visual impairment', 'RGAA and WCAG', 'Magnifier', 'Dark mode'],
          },
          {
            titre: 'UI/UX and front-end dev',
            texte: 'A page designed in Figma, then built on the website.',
            competences: ['Figma mockups', 'Front-end integration', 'Nuxt (Vue.js)'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="Tenjity in pictures"
        intro="The module and its settings, the mockups and the live page, and the testing session with the AVH."
        filtres={[
          { id: 'module', label: 'The module' },
          { id: 'site', label: 'The website' },
          { id: 'terrain', label: 'In the field' },
        ]}
        items={[
          { cat: 'module', legende: 'The module panel', images: [{ src: `${img}/module-panneau.webp`, alt: 'The Tenjity module panel and its features', ...panneau }] },
          { cat: 'module', legende: 'Zooms', images: [{ src: `${img}/module-zooms.webp`, alt: 'Zoom settings', width: 1200, height: 1105 }] },
          { cat: 'module', legende: 'Cursor', images: [{ src: `${img}/module-curseur.webp`, alt: 'Cursor settings: size and colours', width: 1200, height: 827 }] },
          { cat: 'module', legende: 'Tints and brightness', images: [{ src: `${img}/module-teintes.webp`, alt: 'Greyscale and contrast settings', width: 1200, height: 890 }] },
          { cat: 'module', variante: 'logo', legende: 'Dark mode', images: [{ src: `${img}/module-mode-sombre.webp`, alt: "The module's dark mode button", width: 1496, height: 212, fond: '#1E2A33' }] },
          { cat: 'site', legende: 'The live article page', images: [{ src: `${img}/article-en-ligne-complet.webp`, alt: 'The full live article page on tenjity.com', width: 1440, height: 1990 }] },
          { cat: 'site', variante: 'page', legende: 'Mockup: article page', images: [{ src: `${img}/maquette-article.webp`, alt: 'Figma mockup of the article page', ...maquette }] },
          { cat: 'site', variante: 'page', legende: 'Mockup: news', images: [{ src: `${img}/maquette-actualites.webp`, alt: 'Figma mockup of the news page', ...maquette }] },
          { cat: 'terrain', legende: 'Testing with the AVH', images: [{ src: `${img}/test-avh.webp`, alt: 'Testing session with members of the Valentin Haüy association', width: 1600, height: 1200 }] },
        ]}
      />

      <Liens
        lang={lang}
        liens={[
          { href: site, label: 'tenjity.com' },
          { href: article, label: 'The article on the AVH tests (in French)' },
          { href: figma, label: 'Figma mockups' },
        ]}
      />
    </ProjectLayout>
  );
}
