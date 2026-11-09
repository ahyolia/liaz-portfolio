// Lagoon customer area case study, English version (/en/projets/refonte-espaceclient-lagoon/).
// Same structure as src/app/(fr)/projets/refonte-espaceclient-lagoon/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/refonte-espaceclient-lagoon';
const figma = 'https://www.figma.com/design/ditByHNFmJGXbUoVGEb2qi/Lagoon---Espace-client?node-id=0-1';
const ecran = { width: 1280, height: 832 };

export const metadata = {
  title: 'Redesign of the Lagoon customer area — Camélia Amin Handoyo',
  description:
    'UI/UX redesign of the customer area of Lagoon, a New Caledonian internet provider, during my internship at OFFRATEL Lagoon, from Figma mockups to front-end integration, still in production.',
  alternates: { languages: { fr: '/projets/refonte-espaceclient-lagoon/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="refonte-espaceclient-lagoon" lang={lang}>
      <CaseHero
        slug="refonte-espaceclient-lagoon"
        lang={lang}
        eyebrow="UI/UX redesign · internship"
        titre="A clearer, smoother Lagoon customer area"
        accroche="During my internship at OFFRATEL Lagoon, I redesigned the customer area in Figma, then built the new design myself. It is still in production."
        couleur="#DCE9F7"
        liens={[{ href: figma, label: 'See the Figma mockups' }]}
      >
        <img src={`${img}/mockup-accueil.webp`} alt="The new home page of the Lagoon customer area shown on a laptop resting on a sofa" width="1200" height="903" data-depth="0.4" style={{ width: '88%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>In production</span>
        <img className="floaty floaty--card" src={`${img}/mockup-abonnements.webp`} alt="" width="1620" height="1080" data-depth="1.6" style={{ '--x': '70%', '--y': '66%', '--r': '6deg', '--size': '10rem', '--delay': '-3s', border: '4px solid var(--paper)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '6%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>Internship 2025</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[{ nom: 'Figma', icone: '/images/tools/figma.svg' }]}
        fiche={[
          { label: 'Setting', valeur: '2-month internship, OFFRATEL Lagoon digital team' },
          { label: 'Duration', valeur: 'September → November 2025' },
          { label: 'My role', valeur: 'UI/UX design, front-end dev and graphic design' },
          { label: 'Tools', valeur: 'Figma, front-end integration' },
        ]}
        statut="In production"
      >
        <p>Lagoon is an <b>internet service provider</b> in New Caledonia. Its customers manage their subscriptions, usage and bills from an <b>online customer area</b>.</p>
        <p>During my two-month internship in the <b>OFFRATEL Lagoon digital team</b>, my mission was to propose a <b>UI/UX redesign</b> to <span className="hl">modernise the interface and make the journey smoother</span>.</p>
        <p>I designed the <b>mockups</b> in <b>Figma</b>, then built the new design myself. According to my supervisor, it is <b>still in production</b> today, and customers really like it.</p>
      </Contexte>

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'The existing site',
            texte: 'I started from the existing customer area, with a very long, ungrouped side navigation, and a home page of flat cards that gave few cues for going further.',
            image: { src: `${img}/avant-accueil.webp`, alt: 'The old home page of the Lagoon customer area: a long list of links on the left and three grey cards', width: 1281, height: 576 },
          },
          {
            titre: 'The mockups in Figma',
            texte: 'In Figma, I made several versions of the pages, from V1 to V5, starting with the navigation. Menus are grouped into submenus, with a collapsed icon version and an orange variant for Lagoon Business.',
            image: { src: `${img}/maquettes-figma-navigation.webp`, alt: 'The redesign Figma file: side navigation variants, open, collapsed, and the orange Lagoon Business version', width: 1534, height: 834 },
            liens: [{ href: figma, label: 'See the Figma mockups' }],
          },
          {
            titre: 'Navigation and subscriptions',
            texte: 'The navigation collapses into icons to leave more room for content. On the subscriptions page, suspended subscriptions move to the top, and each card gives direct access to usage and billing, with search and a filter.',
            images: [
              { src: `${img}/abonnements-sidebar-ouverte.webp`, alt: 'The My subscriptions page with the navigation open and its submenus', ...ecran },
              { src: `${img}/abonnements-sidebar-reduite.webp`, alt: 'The same page with the navigation collapsed into icons: three cards per row', ...ecran },
            ],
          },
          {
            titre: 'Integration',
            texte: 'Once the mockups were approved, I built the design directly into the customer area, with a home page that greets the customer, clearer cards for subscriptions, balance and requests, and shortcuts to other services.',
            image: { src: `${img}/apres-accueil.webp`, alt: 'The new integrated home page: Subscriptions, Balance due and Requests cards, and Conso+, Referral, Maintenance and Help shortcuts', ...ecran },
          },
        ]}
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'UI/UX design',
            texte: 'A shorter journey for the most common tasks.',
            competences: ['Audit of the existing site', 'Figma mockups', 'Iterations V1 → V5', 'Collapsible navigation'],
          },
          {
            titre: 'Front-end dev',
            texte: 'The design built by me, all the way to production.',
            competences: ['Mockup integration', 'Reusable components', 'Production release'],
          },
          {
            titre: 'Graphic design',
            texte: 'An interface true to the Lagoon brand.',
            competences: ['Icons', 'Cards and visual hierarchy', 'Lagoon Business variant'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="The redesign in pictures"
        intro="The home page before / after (hover to compare), the subscriptions page and the Figma mockups."
        filtres={[
          { id: 'avant-apres', label: 'Before / after' },
          { id: 'ecrans', label: 'Screens' },
          { id: 'maquettes', label: 'Mockups' },
        ]}
        items={[
          {
            cat: 'avant-apres',
            legende: 'Home page · after / before',
            images: [
              { src: `${img}/apres-accueil.webp`, alt: 'The new home page of the customer area', ...ecran },
              { src: `${img}/avant-accueil.webp`, alt: 'The old home page of the customer area', width: 1281, height: 576 },
            ],
          },
          { cat: 'ecrans', legende: 'The home page on a laptop', images: [{ src: `${img}/mockup-accueil.webp`, alt: 'The new home page of the customer area on a laptop', width: 1200, height: 903 }] },
          { cat: 'ecrans', legende: 'Subscriptions on a laptop', images: [{ src: `${img}/mockup-abonnements.webp`, alt: 'The subscriptions page on a laptop, resting on a table', width: 1620, height: 1080 }] },
          { cat: 'ecrans', legende: 'Subscriptions, navigation open', images: [{ src: `${img}/abonnements-sidebar-ouverte.webp`, alt: 'The My subscriptions page with the navigation open', ...ecran }] },
          { cat: 'ecrans', legende: 'Subscriptions, navigation collapsed', images: [{ src: `${img}/abonnements-sidebar-reduite.webp`, alt: 'The My subscriptions page with the navigation collapsed', ...ecran }] },
          { cat: 'maquettes', legende: 'Navigation variants', images: [{ src: `${img}/maquettes-figma-navigation.webp`, alt: 'The side navigation variants in Figma', width: 1534, height: 834 }] },
        ]}
      />

      <Liens lang={lang} liens={[{ href: figma, label: 'Figma mockups' }]} />
    </ProjectLayout>
  );
}
