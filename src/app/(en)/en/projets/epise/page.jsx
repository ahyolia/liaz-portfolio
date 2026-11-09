// EPISE case study, English version (/en/projets/epise/).
// Same structure as src/app/(fr)/projets/epise/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/epise';
const front = 'https://github.com/ahyolia/SAE401-frontend';
const back = 'https://github.com/ahyolia/SAE401-backend';
const wireframe = 'https://www.figma.com/design/bFg259ozNI0dZ3oA8TBsoi/wireframe-zoning-epise?node-id=0-1';
const prototype = 'https://www.figma.com/proto/bFg259ozNI0dZ3oA8TBsoi/wireframe-zoning-epise?node-id=4135-69&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1';
const diagrammes = 'https://www.figma.com/board/zt2ONMAPKnsaYbVJAbqwj6/SAE-301---diagrames?node-id=0-1';
const cdc = `${img}/cahier-des-charges.pdf`;
const page = { width: 1100, height: 1557 };
const ecran = { width: 1440, height: 900 };

export const metadata = {
  title: "EPISE, the UNC student food bank's platform — Camélia Amin Handoyo",
  description:
    "EPISE, the web platform of the UNC student food bank. A PHP MVC site designed by four of us, then taken over on my own with an Angular front end, a REST API and design patterns (Singleton, Factory).",
  alternates: { languages: { fr: '/projets/epise/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="epise" lang={lang}>
      <CaseHero
        slug="epise"
        lang={lang}
        eyebrow="Solidarity e-commerce site"
        titre="EPISE, booking groceries at the UNC student food bank"
        accroche="A platform where students book their baskets, donors offer their donations, and the food bank team manages everything from a back office."
        couleur="#D5F0EE"
        liens={[
          { href: front, label: 'Front-end code (Angular)' },
          { href: back, label: 'Back-end code (PHP)' },
        ]}
      >
        <img src={`${img}/site-accueil.webp`} alt="The EPISE home page: “The UNC student food bank”, with links to Become a member, Make a donation, Become a volunteer and Where to find us" {...ecran} data-depth="0.4" style={{ width: '92%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>2 baskets / week</span>
        <img className="floaty floaty--card" src={`${img}/bo-produits.webp`} alt="" {...ecran} data-depth="1.6" style={{ '--x': '70%', '--y': '68%', '--r': '6deg', '--size': '10rem', '--delay': '-3s', border: '4px solid var(--ink)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '6%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>Angular + PHP API</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[
          { nom: 'Angular', icone: '/images/tools/angular.svg' },
          { nom: 'PHP', icone: '/images/tools/php.svg' },
          { nom: 'MySQL', icone: '/images/tools/mysql.svg' },
          { nom: 'Figma', icone: '/images/tools/figma.svg' },
          { nom: 'Git', icone: '/images/tools/git.svg' },
          { nom: 'Jira', icone: '/images/tools/jira.svg' },
          { nom: 'Notion', icone: '/images/tools/notion.svg' },
        ]}
        fiche={[
          { label: 'Setting', valeur: 'SAÉ 301 then SAÉ 401 projects, BUT MMI 2' },
          { label: 'Year', valeur: '2025' },
          { label: 'Semester 3', valeur: 'Team with Magalie Chen, Matéo Labiau and Hugo Galy' },
          { label: 'Semester 4', valeur: 'Solo, Web development and interactive devices track' },
          { label: 'My role', valeur: 'Front office and UI/UX, then full development' },
          { label: 'Tools', valeur: 'Angular 20, PHP MVC, MySQL, Figma, Notion, Jira' },
        ]}
        statut="Student project, not hosted"
      >
        <p>EPISE is <b>the student food bank of the University of New Caledonia</b>. Run by the Student Life office, it helps <b>students in financial hardship</b> access food, hygiene products and supplies, thanks to donations from companies and individuals and the work of volunteers.</p>
        <p>In semester 3, four of us designed its <b>web platform</b> in <b>PHP MVC</b>. It brings together <span className="hl">three profiles</span>: <b>student members</b> who book their baskets, <b>donors</b> who offer donations, and the food bank <b>team</b>, who manages stock from a back office.</p>
        <p>In semester 4, on the Web development and interactive devices track, <b>I took the project over on my own</b>. I built a new front office in <b>Angular</b>, connected to a <b>REST API</b> added to the PHP back end, and strengthened the architecture with <b>design patterns</b>.</p>
      </Contexte>

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'The specifications (S3, as a team of four)',
            texte: "We started with the specifications, covering the context, goals, a benchmark of solidarity websites and the member, donor and manager personas. We also had to translate the food bank's rules into the site, such as the 200 XPF yearly membership, 2 baskets per week, 5 food items maximum and 1 item per product.",
            images: [
              { src: `${img}/cdc-couverture.webp`, alt: 'Cover of the EPISE specifications, by team Ninjago', ...page },
              { src: `${img}/cdc-personas.webp`, alt: 'Targets and personas page of the specifications', ...page },
              { src: `${img}/cdc-backlog.webp`, alt: 'Product backlog page: profiles and food bank rules', ...page },
            ],
            liens: [{ href: cdc, label: 'Read the specifications (PDF, in French)' }],
          },
          {
            titre: 'Wireframes and brandboard (S3)',
            texte: 'Working in Scrum, with a backlog in Jira and a Notion space that I set up, we defined the user journey. Matéo drew the wireframes and the prototype in Figma. On my side, I made the sitemap, then the brandboard with Hugo, around a palette of blues and greens taken from the logo.',
            images: [
              { src: `${img}/wf-accueil.webp`, alt: 'Home page wireframe', width: 546, height: 943 },
              { src: `${img}/wf-magasin.webp`, alt: 'Shop page wireframe', width: 648, height: 943 },
              { src: `${img}/brandboard.webp`, alt: 'Brandboard: colour palette, buttons and sections', ...page },
            ],
            liens: [
              { href: prototype, label: 'See the Figma prototype' },
              { href: diagrammes, label: 'See the Figma diagrams' },
            ],
          },
          {
            titre: 'The PHP MVC site (S3)',
            texte: 'The site is built on a small PHP MVC framework whose architecture I set up, with a router, controllers and models for each resource, and views. I developed the front office (categories, cart, booking flow, member sign-up and profile), and Magalie developed the secure back office, including donation approval.',
            image: { src: `${img}/bo-dons.webp`, alt: 'Back office: list of donations to approve or reject', ...ecran },
          },
          {
            titre: 'A REST API and design patterns (S4, solo)',
            texte: 'I turned the back end into an API. An <code>Api</code> controller routes GET, POST, PUT and DELETE requests to each resource, CORS headers open access to the Angular front end, and the session uses a token in an HttpOnly cookie. I also added two design patterns, a <strong>Singleton</strong> for the database connection and a <strong>Factory</strong> that creates models from a shared interface, each with its own test script, as well as an HTTPS configuration test.',
            image: { src: `${img}/bo-articles.webp`, alt: 'Back office: managing news articles', ...ecran },
            liens: [{ href: back, label: 'See the back-end code' }],
          },
          {
            titre: 'The Angular front office (S4, solo)',
            texte: "I rebuilt the whole front office in Angular 20, with around twenty pages as standalone components, a service layer for each resource and an interceptor that attaches the token to requests. The shop filters by category and applies the food bank's rules, while the cart counts booked products out of 5. On top of that come the account area, membership, forgotten password, cookie banner and legal pages.",
            image: { src: `${img}/site-magasin.webp`, alt: 'The shop: search, categories and products with their stock and the Add to cart button', ...ecran },
            liens: [{ href: front, label: 'See the front-end code' }],
          },
        ]}
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'Full-stack development',
            texte: 'A PHP back end turned into an API and an Angular front end, taken over end to end on my own.',
            competences: ['Angular 20', 'PHP REST API', 'MVC architecture', 'Singleton and Factory', 'Token authentication', 'MySQL'],
          },
          {
            titre: 'UI/UX and project management',
            texte: 'A site designed for three profiles, first as a team of four.',
            competences: ['Sitemap', 'Brandboard', 'User stories', 'Scrum, Notion and Jira'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="EPISE in pictures"
        intro="The site and back office running locally, the wireframes and a few pages of the specifications. The interface is in French."
        filtres={[
          { id: 'site', label: 'Website' },
          { id: 'backoffice', label: 'Back office' },
          { id: 'conception', label: 'Design' },
        ]}
        items={[
          { cat: 'site', legende: 'Home', images: [{ src: `${img}/site-accueil.webp`, alt: 'The EPISE home page', ...ecran }] },
          { cat: 'site', legende: 'Shop', images: [{ src: `${img}/site-magasin.webp`, alt: 'The shop and its products', ...ecran }] },
          { cat: 'site', legende: 'Shop, without membership', images: [{ src: `${img}/site-magasin-visiteur.webp`, alt: 'The shop for a visitor: a “Members only” message and a link to membership', ...ecran }] },
          { cat: 'site', legende: 'Cart', images: [{ src: `${img}/site-panier.webp`, alt: 'The cart', ...ecran }] },
          { cat: 'site', legende: 'My account', images: [{ src: `${img}/site-compte.webp`, alt: 'The account area: order and donation history', ...ecran }] },
          { cat: 'site', legende: 'About', images: [{ src: `${img}/site-apropos.webp`, alt: 'The About page: introduction and history of EPISE', ...ecran }] },
          { cat: 'site', legende: 'Sign-up', images: [{ src: `${img}/site-inscription.webp`, alt: 'The sign-up page: choice between student and individual', ...ecran }] },
          { cat: 'backoffice', legende: 'Products', images: [{ src: `${img}/bo-produits.webp`, alt: 'Back office: managing products', ...ecran }] },
          { cat: 'backoffice', legende: 'Donations to approve', images: [{ src: `${img}/bo-dons.webp`, alt: 'Back office: donations to approve', ...ecran }] },
          { cat: 'backoffice', legende: 'Categories', images: [{ src: `${img}/bo-categories.webp`, alt: 'Back office: managing categories', ...ecran }] },
          { cat: 'backoffice', legende: 'Bookings', images: [{ src: `${img}/bo-reservations.webp`, alt: 'Back office: bookings to approve and approved', ...ecran }] },
          { cat: 'backoffice', legende: 'Articles', images: [{ src: `${img}/bo-articles.webp`, alt: 'Back office: managing articles', ...ecran }] },
          { cat: 'conception', legende: 'Wireframe: cart', images: [{ src: `${img}/wf-panier.webp`, alt: 'My cart page wireframe', width: 612, height: 1045 }] },
          { cat: 'conception', legende: 'Wireframes: log-in and sign-up', images: [{ src: `${img}/wf-connexion.webp`, alt: 'Log-in and sign-up wireframes', width: 594, height: 1172 }] },
          { cat: 'conception', variante: 'page', legende: 'Specifications: benchmark', images: [{ src: `${img}/cdc-benchmark.webp`, alt: 'Benchmark and watch page', ...page }] },
          { cat: 'conception', variante: 'page', legende: 'Specifications: GDPR', images: [{ src: `${img}/cdc-rgpd.webp`, alt: 'Legal aspects page', ...page }] },
        ]}
      />

      <Liens
        lang={lang}
        liens={[
          { href: front, label: 'Front-end code (Angular)' },
          { href: back, label: 'Back-end code (PHP MVC)' },
          { href: prototype, label: 'Figma prototype' },
          { href: wireframe, label: 'Figma wireframes' },
          { href: diagrammes, label: 'Figma diagrams' },
          { href: cdc, label: 'Specifications (PDF, in French)' },
        ]}
      />
    </ProjectLayout>
  );
}
