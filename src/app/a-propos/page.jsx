export const metadata = {
  title: "À propos — Camélia Amin Handoyo",
  description: "Présentation, parcours, CV et contact de Camélia Amin Handoyo. À REMPLACER.",
};

export default function Page() {
  return (
    <main id="contenu">
      <section className="section" aria-labelledby="titre-page">
        <div className="container stack" style={{ "--flow": "var(--space-m)" }}>
          <p className="eyebrow">Qui suis-je ?</p>
          <h1 id="titre-page">À propos</h1>
          <p className="lead">Étudiante en 3<sup>e</sup> année de BUT MMI, parcours <span className="hl">à préciser</span>. <span className="todo">À REMPLACER</span></p>
        </div>
      </section>

      {/* Présentation */}
      <section className="section" aria-labelledby="presentation">
        <div className="container">
          <div className="notebook stack reveal">
            <h2 id="presentation">En quelques lignes</h2>
            <p>Qui tu es, ce qui te motive, le type de poste ou d'alternance que tu cherches. <span className="todo">À REMPLACER</span></p>
            <p className="annotation">Petite note manuscrite sympa <span className="todo">À REMPLACER</span></p>
          </div>
        </div>
      </section>

      {/* Outils & logiciels : deux tickets entourés de leurs logos en stickers.
           Pour ajouter un outil : une ligne dans le ticket + un sticker (logo dans public/images/tools/). */}
      <section id="outils" className="band band--aqua torn-top torn-bottom" aria-labelledby="titre-outils">
        <div className="container">
          <h2 id="titre-outils" className="skills__title">Mes outils &amp; logiciels <span className="todo">Liste À ADAPTER</span></h2>
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
                  <p className="receipt__row receipt__total"><span>Total</span><span>17 outils</span></p>
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

      {/* CV + contact */}
      <section className="section" aria-labelledby="contact">
        <div className="container grid">
          <div className="stack reveal">
            <h2 id="contact">Contact</h2>
            <p>Une opportunité, une question ? Écris-moi.</p>
            {/* À REMPLACER : tes vrais liens */}
            <ul className="stack list-reset">
              <li><a href="mailto:camhdyo@gmail.com">camhdyo@gmail.com</a></li>
              <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
              <li><a href="https://github.com/">GitHub</a></li>
            </ul>
          </div>

          <div className="receipt-wrap reveal">
            <div className="receipt stack">
              <h3 className="receipt__title">Mon CV</h3>
              <hr />
              <p>Le détail de mon parcours, de mes expériences et de mes compétences.</p>
              {/* Déposer le fichier dans public/cv/CV.pdf */}
              <p><a className="btn" href="/cv/CV.pdf" download>Télécharger mon CV (PDF)</a></p>
              <span className="stamp">CV à jour</span>
              <p><span className="todo">CV.pdf À AJOUTER</span></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
