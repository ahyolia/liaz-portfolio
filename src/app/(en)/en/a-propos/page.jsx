// À propos, version anglaise (/en/a-propos/). Même structure que src/app/(fr)/a-propos/page.jsx.
import Frise from '../../../../components/Frise';
import { experiencesEn } from '../../../../data/experiences';
import Formations from '../../../../components/Formations';
import { formationsEn } from '../../../../data/formations';

export const metadata = {
  title: "About — Camélia Amin Handoyo",
  description: "Introduction, background, CV and contact details of Camélia Amin Handoyo, a BUT MMI student in New Caledonia.",
  alternates: { languages: { fr: "/a-propos/" } },
};

export default function Page() {
  return (
    <main id="contenu">
      {/* Titre + présentation (cahier) + photos */}
      <section className="section" aria-labelledby="titre-page">
        <div className="container stack" style={{ "--flow": "var(--space-l)" }}>
          <div className="stack" style={{ "--flow": "var(--space-m)" }}>
            <p className="eyebrow">Who am I?</p>
            <h1 id="titre-page">About</h1>
          </div>

          <div className="about-intro">
            <div className="notebook stack reveal">
              <h2 id="presentation">In a few lines</h2>
              <p>
                I'm Camélia, a third-year BUT MMI student (a French bachelor's degree in multimedia and the web)
                on the <span className="hl">Web development and interactive devices</span> track, in New Caledonia.
                I chose MMI because I love understanding how things work just as much as making them look good,
                and the web is where the two meet.
              </p>
              <p>
                Outside of class, I read a lot (mostly manga and manhwa), binge dramas and anime,
                and I'm always up for a good dose of pop culture. I also have a little habit
                of testing every interface I come across, to understand what makes it pleasant (or frustrating!).
              </p>
              <p>
                Next, I'd like to continue my studies in human-computer interaction or experience design,
                while staying open to job opportunities.
              </p>
              <p className="annotation">I love testing video game interfaces… playing them, not so much, I lose all the time 😅</p>
            </div>

            <div className="about-intro__photos">
              <figure className="polaroid reveal">
                <span className="tape" aria-hidden="true"></span>
                <img src="/images/perso/camelia-fleurs-sourire.jpg" alt="Camélia smiling in front of a fence covered in bougainvillea" width="750" height="900" />
              </figure>
              <figure className="polaroid reveal">
                <span className="tape" aria-hidden="true"></span>
                <img src="/images/perso/camelia-fleurs-boude.jpg" alt="Camélia pouting, cheek in her hand, in front of the same bougainvillea" width="750" height="900" />
              </figure>
            </div>
          </div>

          {/* Formation, dans le même bloc que la présentation : feuille quadrillée
               (components/Formations.jsx, src/data/formations.js) */}
          <div className="stack about-formation" style={{ "--flow": "var(--space-m)" }}>
            <h2 id="titre-formations" className="reveal">My education</h2>
            <Formations formations={formationsEn} lang="en" />
          </div>
        </div>
      </section>

      {/* Expériences pros : frise de cartes (components/Frise.jsx, src/data/experiences.js) */}
      <section className="section section--suite" aria-labelledby="titre-experiences">
        <div className="container xp-section stack" style={{ "--flow": "var(--space-xl)" }}>
          <h2 id="titre-experiences" className="reveal">My work experience</h2>
          <Frise etapes={experiencesEn} lang="en" />
        </div>
      </section>

      {/* Outils & logiciels : deux tickets entourés de leurs logos en stickers.
           Pour ajouter un outil : une ligne dans le ticket + un sticker (logo dans public/images/tools/). */}
      <section id="outils" className="band band--aqua torn-top torn-bottom" aria-labelledby="titre-outils">
        <div className="container">
          <h2 id="titre-outils" className="skills__title">My tools &amp; software</h2>
          <div className="skills">
            <div className="skills__stage">
              <div className="skills__receipt receipt-wrap">
                <div className="receipt skills-receipt">
                  <p className="receipt__row skills-receipt__meta"><span>receipt</span><span>n° 2026-01</span></p>
                  <h3 className="skills-receipt__title">Design &amp; audiovisual:</h3>
                  <hr />
                  <h4 className="skills-receipt__group">Design</h4>
                  <ul className="list-reset">
                    <li className="receipt__row"><span>Figma</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Photoshop</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Illustrator</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>InDesign</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Canva</span><span aria-hidden="true">✓</span></li>
                  </ul>
                  <h4 className="skills-receipt__group">Video &amp; motion</h4>
                  <ul className="list-reset">
                    <li className="receipt__row"><span>Premiere Pro</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>After Effects</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>DaVinci Resolve</span><span aria-hidden="true">✓</span></li>
                  </ul>
                  <p className="receipt__row receipt__total"><span>Total</span><span>8 tools</span></p>
                  <span className="barcode skills-receipt__barcode" aria-hidden="true"></span>
                  <p className="skills-receipt__thanks">thank you!</p>
                </div>
              </div>

              {/* Stickers décoratifs : les noms sont déjà dans le ticket */}
              <ul className="skills__stickers" aria-hidden="true">
                <li className="tool-sticker" data-side="left" style={{ "--x": "0rem", "--y": "0%", "--r": "-10deg" }}><img src="/images/tools/figma.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "0rem", "--y": "4%", "--r": "8deg" }}><img src="/images/tools/photoshop.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "1rem", "--y": "29%", "--r": "6deg" }}><img src="/images/tools/illustrator.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "1rem", "--y": "33%", "--r": "-9deg" }}><img src="/images/tools/indesign.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "0rem", "--y": "59%", "--r": "-6deg" }}><img src="/images/tools/canva.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "0rem", "--y": "63%", "--r": "11deg" }}><img src="/images/tools/premierepro.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "1rem", "--y": "88%", "--r": "9deg" }}><img src="/images/tools/aftereffects.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "1rem", "--y": "92%", "--r": "-12deg" }}><img src="/images/tools/davinciresolve.svg" alt="" width="48" height="48" loading="lazy" /></li>
              </ul>
            </div>
            <div className="skills__stage">
              <div className="skills__receipt receipt-wrap">
                <div className="receipt skills-receipt">
                  <p className="receipt__row skills-receipt__meta"><span>receipt</span><span>n° 2026-02</span></p>
                  <h3 className="skills-receipt__title">Development:</h3>
                  <hr />
                  <h4 className="skills-receipt__group">Front</h4>
                  <ul className="list-reset">
                    <li className="receipt__row"><span>HTML</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>CSS</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Tailwind CSS</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>JavaScript</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>React</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Vue.js</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Angular</span><span aria-hidden="true">✓</span></li>
                  </ul>
                  <h4 className="skills-receipt__group">Back</h4>
                  <ul className="list-reset">
                    <li className="receipt__row"><span>PHP</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Laravel</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Symfony</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Spring Boot</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Node.js</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>MySQL</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>PostgreSQL</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Docker</span><span aria-hidden="true">✓</span></li>
                  </ul>
                  <h4 className="skills-receipt__group">Video games</h4>
                  <ul className="list-reset">
                    <li className="receipt__row"><span>Unity</span><span aria-hidden="true">✓</span></li>
                  </ul>
                  <h4 className="skills-receipt__group">Tools</h4>
                  <ul className="list-reset">
                    <li className="receipt__row"><span>Git</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>VS Code</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>WordPress</span><span aria-hidden="true">✓</span></li>
                  </ul>
                  <p className="receipt__row receipt__total"><span>Total</span><span>19 tools</span></p>
                  <span className="barcode skills-receipt__barcode" aria-hidden="true"></span>
                  <p className="skills-receipt__thanks">thank you!</p>
                </div>
              </div>

              {/* Stickers décoratifs : les noms sont déjà dans le ticket */}
              <ul className="skills__stickers" aria-hidden="true">
                <li className="tool-sticker" data-side="left" style={{ "--x": "0rem", "--y": "0%", "--r": "-11deg" }}><img src="/images/tools/html5.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "0rem", "--y": "5%", "--r": "7deg" }}><img src="/images/tools/css3.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "1rem", "--y": "10%", "--r": "-6deg" }}><img src="/images/tools/tailwind.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "1rem", "--y": "15%", "--r": "10deg" }}><img src="/images/tools/javascript.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "0rem", "--y": "20%", "--r": "-5deg" }}><img src="/images/tools/react.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "0rem", "--y": "26%", "--r": "5deg" }}><img src="/images/tools/vuejs.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "1rem", "--y": "31%", "--r": "-8deg" }}><img src="/images/tools/angular.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "1rem", "--y": "36%", "--r": "-12deg" }}><img src="/images/tools/php.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "0rem", "--y": "41%", "--r": "6deg" }}><img src="/images/tools/laravel.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "0rem", "--y": "46%", "--r": "-8deg" }}><img src="/images/tools/symfony.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "1rem", "--y": "51%", "--r": "7deg" }}><img src="/images/tools/springboot.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "1rem", "--y": "56%", "--r": "-10deg" }}><img src="/images/tools/nodejs.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "0rem", "--y": "61%", "--r": "12deg" }}><img src="/images/tools/mysql.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "0rem", "--y": "66%", "--r": "-7deg" }}><img src="/images/tools/postgresql.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "1rem", "--y": "72%", "--r": "-9deg" }}><img src="/images/tools/docker.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "1rem", "--y": "77%", "--r": "8deg" }}><img src="/images/tools/unity.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "0rem", "--y": "82%", "--r": "-6deg" }}><img src="/images/tools/git.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "0rem", "--y": "87%", "--r": "10deg" }}><img src="/images/tools/vscode.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "1rem", "--y": "92%", "--r": "-11deg" }}><img src="/images/tools/wordpress.svg" alt="" width="48" height="48" loading="lazy" /></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + CV : grand appel à écrire, e-mail en gros, réseaux en stickers,
           et le ticket du CV avec son tampon posé sur le coin */}
      <section className="section contact-zone" aria-labelledby="contact">
        <div className="container contact-zone__inner">
          <div className="contact-zone__texte stack reveal" style={{ "--flow": "var(--space-m)" }}>
            <p className="eyebrow">Contact</p>
            <h2 id="contact" className="contact-zone__titre">Shall we talk?</h2>
            <p className="contact-zone__intro">An opportunity, a question, a project? Write to me, I'll be happy to reply.</p>
            <a className="contact-zone__mail" href="mailto:camhdyo@gmail.com">
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#mail"></use></svg>
              camhdyo@gmail.com
            </a>
            <ul className="contact-zone__reseaux list-reset" aria-label="My social networks">
              <li><a href="https://www.linkedin.com/in/camelia-amin-handoyo/"><svg className="icon" aria-hidden="true"><use href="/icons.svg#linkedin"></use></svg>LinkedIn</a></li>
              <li><a href="https://github.com/ahyolia"><svg className="icon" aria-hidden="true"><use href="/icons.svg#github"></use></svg>GitHub</a></li>
              <li><a href="https://www.behance.net/camhdyo"><svg className="icon" aria-hidden="true"><use href="/icons.svg#behance"></use></svg>Behance</a></li>
              <li><a href="https://www.instagram.com/caamhy/"><svg className="icon" aria-hidden="true"><use href="/icons.svg#instagram"></use></svg>Instagram</a></li>
            </ul>
          </div>

          <div className="contact-zone__cv receipt-wrap reveal">
            <div className="receipt stack">
              <h3 className="receipt__title">My CV</h3>
              <hr />
              <p>My background, experience and skills in detail, on a single page (in French).</p>
              {/* Déposer le fichier dans public/cv/CV.pdf */}
              <p><a className="btn" href="/cv/CV.pdf" download hrefLang="fr">Download my CV (PDF)</a></p>
              <span className="barcode" aria-hidden="true"></span>
            </div>
            <span className="stamp contact-zone__stamp" aria-hidden="true">Up-to-date CV</span>
          </div>
        </div>
      </section>
    </main>
  );
}
