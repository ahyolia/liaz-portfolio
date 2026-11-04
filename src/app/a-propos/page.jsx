import Frise from '../../components/Frise';
import { experiences } from '../../data/experiences';
import Formations from '../../components/Formations';
import { formations } from '../../data/formations';

export const metadata = {
  title: "À propos — Camélia Amin Handoyo",
  description: "Présentation, parcours, CV et contact de Camélia Amin Handoyo, étudiante en BUT MMI en Nouvelle-Calédonie.",
};

export default function Page() {
  return (
    <main id="contenu">
      {/* Titre + présentation (cahier) + photos */}
      <section className="section" aria-labelledby="titre-page">
        <div className="container stack" style={{ "--flow": "var(--space-l)" }}>
          <div className="stack" style={{ "--flow": "var(--space-m)" }}>
            <p className="eyebrow">Qui suis-je ?</p>
            <h1 id="titre-page">À propos</h1>
          </div>

          <div className="about-intro">
            <div className="notebook stack reveal">
              <h2 id="presentation">En quelques lignes</h2>
              <p>
                Je suis Camélia, une étudiante en 3<sup>e</sup> année de BUT MMI,
                parcours <span className="hl">Développement web et dispositifs interactifs</span>, en Nouvelle-Calédonie.
                J'ai choisi la MMI parce que j'aime autant comprendre comment les choses fonctionnent que soigner leur apparence,
                et le web est l'endroit où les deux se rencontrent.
              </p>
              <p>
                En dehors des cours, je lis beaucoup (surtout des mangas et des manhwas), j'enchaîne les dramas et les animes,
                et je suis toujours partante pour une bonne dose de culture pop. J'ai aussi la petite manie
                de tester toutes les interfaces que je croise, pour comprendre ce qui les rend agréables (ou frustrantes !).
              </p>
              <p>
                Aujourd'hui, j'aimerais poursuivre mes études en interaction humain-machine ou en design d'expérience,
                tout en restant ouverte aux opportunités professionnelles.
              </p>
              <p className="annotation">J'adore tester les interfaces des jeux vidéo… beaucoup moins y jouer, je perds tout le temps 😅</p>
            </div>

            <div className="about-intro__photos">
              <figure className="polaroid reveal">
                <span className="tape" aria-hidden="true"></span>
                <img src="/images/perso/camelia-fleurs-sourire.jpg" alt="Camélia souriante devant une grille couverte de bougainvilliers" width="750" height="900" />
              </figure>
              <figure className="polaroid reveal">
                <span className="tape" aria-hidden="true"></span>
                <img src="/images/perso/camelia-fleurs-boude.jpg" alt="Camélia qui boude, la joue dans la main, devant les mêmes bougainvilliers" width="750" height="900" />
              </figure>
            </div>
          </div>

          {/* Formation, dans le même bloc que la présentation : feuille quadrillée
               (components/Formations.jsx, src/data/formations.js) */}
          <div className="stack about-formation" style={{ "--flow": "var(--space-m)" }}>
            <h2 id="titre-formations" className="reveal">Ma formation</h2>
            <Formations formations={formations} />
          </div>
        </div>
      </section>

      {/* Expériences pros : frise de cartes (components/Frise.jsx, src/data/experiences.js) */}
      <section className="section section--suite" aria-labelledby="titre-experiences">
        <div className="container xp-section stack" style={{ "--flow": "var(--space-xl)" }}>
          <h2 id="titre-experiences" className="reveal">Mes expériences pros</h2>
          <Frise etapes={experiences} />
        </div>
      </section>

      {/* Outils & logiciels : deux tickets entourés de leurs logos en stickers.
           Pour ajouter un outil : une ligne dans le ticket + un sticker (logo dans public/images/tools/). */}
      <section id="outils" className="band band--aqua torn-top torn-bottom" aria-labelledby="titre-outils">
        <div className="container">
          <h2 id="titre-outils" className="skills__title">Mes outils &amp; logiciels</h2>
          <div className="skills">
            <div className="skills__stage">
              <div className="skills__receipt receipt-wrap">
                <div className="receipt skills-receipt">
                  <p className="receipt__row skills-receipt__meta"><span>reçu</span><span>n° 2026-01</span></p>
                  <h3 className="skills-receipt__title">Design &amp; audiovisuel :</h3>
                  <hr />
                  <h4 className="skills-receipt__group">Design</h4>
                  <ul className="list-reset">
                    <li className="receipt__row"><span>Figma</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Photoshop</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Illustrator</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>InDesign</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>Canva</span><span aria-hidden="true">✓</span></li>
                  </ul>
                  <h4 className="skills-receipt__group">Vidéo &amp; motion</h4>
                  <ul className="list-reset">
                    <li className="receipt__row"><span>Premiere Pro</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>After Effects</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>DaVinci Resolve</span><span aria-hidden="true">✓</span></li>
                  </ul>
                  <p className="receipt__row receipt__total"><span>Total</span><span>8 outils</span></p>
                  <span className="barcode skills-receipt__barcode" aria-hidden="true"></span>
                  <p className="skills-receipt__thanks">merci !</p>
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
                  <p className="receipt__row skills-receipt__meta"><span>reçu</span><span>n° 2026-02</span></p>
                  <h3 className="skills-receipt__title">Développement :</h3>
                  <hr />
                  <h4 className="skills-receipt__group">Front</h4>
                  <ul className="list-reset">
                    <li className="receipt__row"><span>HTML</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>CSS</span><span aria-hidden="true">✓</span></li>
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
                  <h4 className="skills-receipt__group">Jeu vidéo</h4>
                  <ul className="list-reset">
                    <li className="receipt__row"><span>Unity</span><span aria-hidden="true">✓</span></li>
                  </ul>
                  <h4 className="skills-receipt__group">Outils</h4>
                  <ul className="list-reset">
                    <li className="receipt__row"><span>Git</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>VS Code</span><span aria-hidden="true">✓</span></li>
                    <li className="receipt__row"><span>WordPress</span><span aria-hidden="true">✓</span></li>
                  </ul>
                  <p className="receipt__row receipt__total"><span>Total</span><span>18 outils</span></p>
                  <span className="barcode skills-receipt__barcode" aria-hidden="true"></span>
                  <p className="skills-receipt__thanks">merci !</p>
                </div>
              </div>

              {/* Stickers décoratifs : les noms sont déjà dans le ticket */}
              <ul className="skills__stickers" aria-hidden="true">
                <li className="tool-sticker" data-side="left" style={{ "--x": "0rem", "--y": "0%", "--r": "-11deg" }}><img src="/images/tools/html5.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "0rem", "--y": "4%", "--r": "7deg" }}><img src="/images/tools/css3.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "1rem", "--y": "11%", "--r": "10deg" }}><img src="/images/tools/javascript.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "1rem", "--y": "15%", "--r": "-5deg" }}><img src="/images/tools/react.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "0rem", "--y": "22%", "--r": "5deg" }}><img src="/images/tools/vuejs.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "0rem", "--y": "26%", "--r": "-8deg" }}><img src="/images/tools/angular.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "1rem", "--y": "33%", "--r": "-12deg" }}><img src="/images/tools/php.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "1rem", "--y": "37%", "--r": "6deg" }}><img src="/images/tools/laravel.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "0rem", "--y": "92%", "--r": "-8deg" }}><img src="/images/tools/symfony.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "0rem", "--y": "44%", "--r": "7deg" }}><img src="/images/tools/springboot.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "0rem", "--y": "48%", "--r": "-10deg" }}><img src="/images/tools/nodejs.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "1rem", "--y": "55%", "--r": "12deg" }}><img src="/images/tools/mysql.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "1rem", "--y": "59%", "--r": "-7deg" }}><img src="/images/tools/postgresql.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "0rem", "--y": "66%", "--r": "-9deg" }}><img src="/images/tools/docker.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "0rem", "--y": "70%", "--r": "8deg" }}><img src="/images/tools/unity.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "1rem", "--y": "77%", "--r": "-6deg" }}><img src="/images/tools/git.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="right" style={{ "--x": "1rem", "--y": "81%", "--r": "10deg" }}><img src="/images/tools/vscode.svg" alt="" width="48" height="48" loading="lazy" /></li>
                <li className="tool-sticker" data-side="left" style={{ "--x": "0rem", "--y": "88%", "--r": "-11deg" }}><img src="/images/tools/wordpress.svg" alt="" width="48" height="48" loading="lazy" /></li>
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
            <h2 id="contact" className="contact-zone__titre">On en parle&nbsp;?</h2>
            <p className="contact-zone__intro">Une opportunité, une question, un projet&nbsp;? Écris-moi, je réponds avec plaisir.</p>
            <a className="contact-zone__mail" href="mailto:camhdyo@gmail.com">
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#mail"></use></svg>
              camhdyo@gmail.com
            </a>
            <ul className="contact-zone__reseaux list-reset" aria-label="Mes réseaux">
              <li><a href="https://www.linkedin.com/in/camelia-amin-handoyo/"><svg className="icon" aria-hidden="true"><use href="/icons.svg#linkedin"></use></svg>LinkedIn</a></li>
              <li><a href="https://github.com/ahyolia"><svg className="icon" aria-hidden="true"><use href="/icons.svg#github"></use></svg>GitHub</a></li>
              <li><a href="https://www.behance.net/camhdyo"><svg className="icon" aria-hidden="true"><use href="/icons.svg#behance"></use></svg>Behance</a></li>
              <li><a href="https://www.instagram.com/caamhy/"><svg className="icon" aria-hidden="true"><use href="/icons.svg#instagram"></use></svg>Instagram</a></li>
            </ul>
          </div>

          <div className="contact-zone__cv receipt-wrap reveal">
            <div className="receipt stack">
              <h3 className="receipt__title">Mon CV</h3>
              <hr />
              <p>Le détail de mon parcours, de mes expériences et de mes compétences, sur une page.</p>
              {/* Déposer le fichier dans public/cv/CV.pdf */}
              <p><a className="btn" href="/cv/CV.pdf" download>Télécharger mon CV (PDF)</a></p>
              <p><span className="todo">CV.pdf À AJOUTER</span></p>
              <span className="barcode" aria-hidden="true"></span>
            </div>
            <span className="stamp contact-zone__stamp" aria-hidden="true">CV à jour</span>
          </div>
        </div>
      </section>
    </main>
  );
}
