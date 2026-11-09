// Aïma case study, English version (/en/projets/aima/).
// Same structure as src/app/(fr)/projets/aima/page.jsx.
import ProjectLayout from '../../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../../components/projet/CaseHero';
import Contexte from '../../../../../components/projet/Contexte';
import Questions from '../../../../../components/projet/Questions';
import Demarche from '../../../../../components/projet/Demarche';
import Apport from '../../../../../components/projet/Apport';
import Galerie from '../../../../../components/projet/Galerie';
import Liens from '../../../../../components/projet/Liens';

const lang = 'en';
const img = '/images/projets/aima';
const figma = {
  designSystem: 'https://www.figma.com/design/Yjc8sSNqHNsmWr33Cmg9qt/SAE-501---BloodShare---DesignSystem?node-id=0-1',
  arborescence: 'https://www.figma.com/board/2abX7caT6PqLIyTfEjXGdZ/SAE-501---Blood-Share-arborescence?node-id=0-1',
};
const demo = 'https://aima-nc.netlify.app';
const github = 'https://github.com/ahyolia/bloodshare';

export const metadata = {
  title: 'Aïma, the blood donation app — Camélia Amin Handoyo',
  description: 'Aïma, a gamified app that keeps blood donors coming back, made for the ADSB-NC (React Native, Laravel, Filament).',
  alternates: { languages: { fr: '/projets/aima/' } },
};

export default function Page() {
  return (
    <ProjectLayout slug="aima" lang={lang}>
      <CaseHero
        slug="aima"
        lang={lang}
        eyebrow="Mobile app"
        titre="Aïma, the app that keeps blood donors coming back"
        accroche="Every donation unlocks a keepsake card to collect. Between donations, quizzes and challenges keep donors connected to the association."
        couleur="#FFE4E0"
        liens={[
          { href: demo, label: 'Try the web demo' },
          { href: github, label: 'Code on GitHub' },
        ]}
      >
        <div className="phone-duo" data-depth="0.4">
          <div className="phone"><img src={`${img}/screens_app/aima_screen.webp`} alt="Aïma home screen: critical stock alert, blood reserves by group and news" width="302" height="650" /></div>
          <div className="phone"><img src={`${img}/screens_app/aima_screen2.webp`} alt="Aïma profile: avatar, Curious level, number of donations, points and badges" width="300" height="654" /></div>
        </div>
        <img className="floaty floaty--card" src={`${img}/cards/mois-01.webp`} alt="" width="900" height="1273" data-depth="1.4" style={{ '--x': '0%', '--y': '6%', '--r': '-14deg', '--size': '5.5rem' }} />
        <img className="floaty floaty--icon" src={`${img}/branding/aima-icone-aubergine@2x.png`} alt="" width="240" height="240" data-depth="1.2" style={{ '--x': '80%', '--y': '2%', '--r': '8deg', '--size': '4.5rem', '--delay': '-4s' }} />
        <img className="floaty floaty--label" src={`${img}/branding/aima-logo-couleur@2x.png`} alt="" width="1520" height="476" data-depth="1.8" style={{ '--x': '-2%', '--y': '70%', '--r': '-6deg', '--size': '9rem', '--delay': '-2s' }} />
        <span className="floaty sticker" data-depth="2" style={{ '--x': '68%', '--y': '84%', '--r': '-8deg', '--size': 'auto', '--delay': '-1s' }}>New Caledonia</span>
      </CaseHero>

      <Contexte
        lang={lang}
        outils={[
          { nom: 'React Native', icone: '/images/tools/react.svg' },
          { nom: 'Laravel', icone: '/images/tools/laravel.svg' },
          { nom: 'PHP', icone: '/images/tools/php.svg' },
          { nom: 'PostgreSQL', icone: '/images/tools/postgresql.svg' },
          { nom: 'Docker', icone: '/images/tools/docker.svg' },
          { nom: 'Dokploy', icone: '/images/tools/dokploy-noir.svg' },
          { nom: 'Git', icone: '/images/tools/git.svg' },
        ]}
        fiche={[
          { label: 'Client / setting', valeur: 'ADSB-NC, BUT MMI 3 project' },
          { label: 'Duration', valeur: 'February → October 2026' },
          { label: 'Team', valeur: '2 devs, 2 comms' },
          { label: 'My role', valeur: 'Full-stack dev and UI/UX redesign' },
          { label: 'Tools', valeur: 'ClickUp, Figma, React Native (Expo), Laravel 12, Filament, PostgreSQL, Docker, Dokploy' },
        ]}
        statut="V1 under review"
      >
        <p>During our third year of BUT MMI, we worked with the <b>ADSB-NC</b>, the <b>New Caledonia Blood Donors Association</b>. In our team of four, Geneviève Mekenese and I handled <b>development</b>, while Emmy Vergé and Hugo Galy took care of the <b>communication strategy</b>.</p>
        <p>Together, we came up with <b>Aïma</b>, a <b>mobile app</b> that can also be installed from the browser (PWA). It is connected to a <b>Laravel API</b> and a <b>back office</b>, so the association can manage its content on its own. Our UX strategy teammates wrote the content, handled the legal framework and illustrated the cards, and my dev partner and I <b>designed how the app works</b> before building it.</p>
        <p>We wanted to make people want to give blood <b>for the first time</b>, then <b>come back</b>. Instead of points, donors are rewarded with <span className="hl">keepsake cards to collect</span>, and we take care of their <b>health data</b>.</p>
      </Contexte>

      <Questions
        lang={lang}
        questions={[
          {
            question: 'How do you reward a donation without turning it into a purchase?',
            reponse: "The association didn't want a donation to earn points, like a loyalty card. So we separated the two. Points come from quizzes, referrals and challenges, while a donation unlocks the keepsake card of the month.",
          },
          {
            question: 'How do you avoid a “gambling” feel?',
            reponse: 'We ruled out booster packs and rare cards. Each reward matches a specific action, such as a donation, a quiz or a challenge. Nothing is left to chance.',
          },
          {
            question: 'How do you protect health data?',
            reponse: "Knowing that someone gives blood is already health data. We removed the blood group from sign-up, and donations are validated with an anonymous QR code. The eligibility questionnaire (15 questions) runs entirely on the phone, so no answer is ever sent over the network.",
          },
          {
            question: 'How do you reset a password without an email server?',
            reponse: "Setting up automatic emails didn't fit our timeline, so I designed a safe alternative. The association generates a temporary password from the back office, and the app then makes the person choose a new one at their next login. The flow is covered by automated tests.",
          },
        ]}
      />

      <Demarche
        lang={lang}
        etapes={[
          {
            titre: 'Specifications and project management',
            texte: "We started by writing the specifications and modelling the gamification. All project management happened in ClickUp, with tickets written as user stories. When the schedule slipped, we refocused the backlog on a solid V1 and pushed the rest to V2. On the first Tuesday of every month, we presented our progress to the association.",
            image: { src: `${img}/demarche/cdc.webp`, alt: "The project's ClickUp space: Aïma's technical specifications and the documentation, user story and ticket folders", width: 1534, height: 746 },
          },
          {
            titre: 'Wireframes and mockups',
            texte: "We built the app's sitemap, then the wireframes and mockups, with a shared design system in Figma.",
            image: { src: `${img}/demarche/maquettes.webp`, alt: "The project's Figma file: wireframes of the Home, Donation, Quiz and Cards screens, with the sitemap of each section", width: 1534, height: 824 },
            liens: [
              { href: figma.arborescence, label: 'Sitemap' },
              { href: figma.designSystem, label: 'Design system and mockups' },
            ],
          },
          {
            titre: 'Back office and API',
            texte: "I wrote the API contract, then developed the Laravel 12 API (30 secured routes), keeping the business rules (referrals, levels, badges, challenges) in dedicated services. The Filament back office lets the association manage everything on its own. After comparing hosting options, I deployed the back office on a VPS with Dokploy, then on a Raspberry Pi for the IUT's project fair.",
            image: { src: `${img}/demarche/backoffice.webp`, alt: "Aïma back office dashboard: users, donations this month, new sign-ups and the challenge of the month, with the Administration, Operations, Communication and Gamification menus", width: 1534, height: 742 },
          },
          {
            titre: 'UI/UX integration and launch',
            texte: "We integrated the content and illustrations, and I reworked the UI/UX of several screens. I hooked up the QR code scanner, push notifications and the eligibility questionnaire, then turned the app into a PWA, installable without going through the stores and hosted on Netlify. For quality, every feature went through a reviewed pull request and automated tests (Jest, PHPUnit).",
            image: { src: `${img}/demarche/integration_front.webp`, alt: "Aïma's integrated Quiz screen, tested in iPhone format in the browser's developer tools", width: 1534, height: 744 },
            liens: [{ href: demo, label: 'See the app online' }],
          },
        ]}
      />

      <Apport
        lang={lang}
        casquettes={[
          {
            titre: 'Scoping and management',
            texte: 'Organising the work and making the right trade-offs.',
            competences: ['API contract', 'ClickUp backlog', 'V1 / V2 split', 'Hosting study', 'Temporary password'],
          },
          {
            titre: 'Full-stack dev',
            texte: 'From the database all the way to launch.',
            competences: ['Laravel 12 API', 'Business services', 'Filament back office', 'QR code scanning', 'Push notifications', '100% on-device eligibility', 'PWA (Expo)', 'PHPUnit and Jest tests', 'Docker + Dokploy'],
          },
          {
            titre: 'UI/UX redesign',
            texte: 'Clearer screens and an app that speaks like its users.',
            competences: ['Profile, Donation, Quiz, Cards screens', 'Authentication components', 'Animated card reveal', 'Aïma identity in the back office', 'Friendly, informal tone'],
          },
        ]}
      />

      <Galerie
        lang={lang}
        titre="The app and its printed media"
        intro="Here are the app's screens, its visual identity and the printed materials handed out to donors at the IUT of New Caledonia's tutored project fair."
        filtres={[
          { id: 'appli', label: 'App' },
          { id: 'com', label: 'Comms' },
          { id: 'identite', label: 'Identity' },
          { id: 'terrain', label: 'In the field' },
        ]}
        items={[
          {
            cat: 'appli',
            legende: 'The app on a phone',
            images: [{ src: `${img}/screens_app/mockups-aima.webp`, alt: 'Aïma open on the home screen, on a phone leaning against a laptop', width: 1080, height: 721 }],
          },
          {
            cat: 'terrain',
            legende: "Awareness day at the UNC Agora, during student mental health and well-being month",
            images: [{ src: `${img}/terrain/stand-adsb.webp`, alt: "Camélia, smiling, holds a blood bag at the ADSB-NC stand, during an awareness day at the University of New Caledonia's Agora", width: 900, height: 1125 }],
          },
          {
            cat: 'identite',
            variante: 'logo',
            legende: 'Logo · colour / inverted',
            images: [
              { src: `${img}/branding/aima-logo-couleur@2x.png`, alt: 'Aïma logo in colour', width: 1520, height: 476 },
              { src: `${img}/branding/aima-logo-inverse@2x.png`, alt: 'Inverted Aïma logo, on an aubergine background', width: 1520, height: 476, fond: '#3F2430' },
            ],
          },
          {
            cat: 'com',
            legende: 'Business card · front / back',
            images: [
              { src: `${img}/com/businesscard_recto.webp`, alt: 'Aïma business card, illustrated front', width: 1080, height: 756 },
              { src: `${img}/com/businesscard_verso.webp`, alt: 'Aïma business card, back with the contact details of the Blood Donation Centre and the ADSB-NC', width: 1080, height: 756 },
            ],
          },
          {
            cat: 'com',
            legende: 'Account access card · front / back',
            images: [
              { src: `${img}/com/accountcard_recto.webp`, alt: 'Account access card, illustrated front', width: 1080, height: 717 },
              { src: `${img}/com/accountcard_verso.webp`, alt: "Account access card, back with the donor's QR code and username", width: 1080, height: 720 },
            ],
          },
          {
            cat: 'identite',
            variante: 'icon',
            legende: 'App icon · aubergine / cream',
            images: [
              { src: `${img}/branding/aima-icone-aubergine@2x.png`, alt: 'Aïma app icon, aubergine version', width: 240, height: 240 },
              { src: `${img}/branding/aima-icone-creme.png`, alt: 'Aïma app icon, cream version', width: 1024, height: 1024, fond: '#3F2430' },
            ],
          },
        ]}
      />

      <Liens
        lang={lang}
        liens={[
          { href: demo, label: 'Web demo' },
          { href: github, label: 'GitHub' },
          { href: figma.designSystem, label: 'Figma design system' },
          { href: figma.arborescence, label: 'Figma sitemap' },
        ]}
      />
    </ProjectLayout>
  );
}
