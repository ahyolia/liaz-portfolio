import ProjectSlide from '../components/ProjectSlide';
import HeroDesk from '../components/HeroDesk';
import { projetsALaUne } from '../data/projets.js';

// Seuls les projets marqués aLaUne (src/data/projets.js) sont affichés.
// Le carrousel démarre centré sur la 2e carte : on y place le 1er projet
// à la une, avec le dernier à sa gauche.
const aLaUne = projetsALaUne.length > 2 ? [projetsALaUne.at(-1), ...projetsALaUne.slice(0, -1)] : projetsALaUne;

export const metadata = {
  title: "Camélia Amin Handoyo — Portfolio",
  description: "Portfolio de Camélia Amin Handoyo, étudiante en BUT MMI : développement web, graphisme et UX design.",
};

export default function Page() {
  return (
    <main id="contenu">
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <p className="hero__word reveal">Portfolio</p>

          {/* Table de travail : objets déplaçables (voir src/components/HeroDesk.jsx) */}
          <HeroDesk>
            <div className="hero__skills receipt-wrap">
              <div className="receipt stack">
                <p className="receipt__title">Au menu</p>
                <ul className="list-reset stack" style={{ "--flow": "var(--space-2xs)" }}>
                  <li className="receipt__row"><span>Dev web</span><span>×1</span></li>
                  <li className="receipt__row"><span>Graphisme</span><span>×1</span></li>
                  <li className="receipt__row"><span>UX design</span><span>×1</span></li>
                </ul>
                <p className="receipt__row receipt__total"><span>Total</span><span>3 en 1</span></p>
                <span className="barcode" aria-hidden="true"></span>
              </div>
            </div>
          </HeroDesk>

          <h1 className="hero__name reveal">Camélia<br />Amin Handoyo</h1>
        </div>
      </section>

      {/* Aperçu « à propos » */}
      <section className="band band--aqua torn-top torn-bottom about-preview" aria-labelledby="titre-about">
        <div className="container about-preview__inner">
          <figure className="polaroid reveal">
            <span className="tape" aria-hidden="true"></span>
            {/* À REMPLACER : ta photo dans public/images/ */}
            <img src="/images/photo-placeholder.svg" alt="Portrait de Camélia (à remplacer)" width="600" height="720" />
          </figure>

          <div className="stack reveal" style={{ "--flow": "var(--space-m)" }}>
            <div>
              <h2 id="titre-about" className="about-preview__title">Camélia ?</h2>
              <p className="about-preview__subtitle">Une étudiante en BUT MMI</p>
            </div>
            <p>
              Ma présentation, mes convictions, ce qui me motive et mes objectifs.
              <span className="todo">À REMPLACER</span>
            </p>
            <p className="cluster">
              <a className="btn" href="/cv/CV.pdf" download>Télécharger mon CV</a>
              <a className="btn btn--ghost" href="/a-propos/#outils">Mes outils et logiciels</a>
            </p>
          </div>

        </div>
      </section>

      {/* Projets à la une */}
      <section className="showcase" aria-labelledby="titre-projets">
        <div className="container">
          <h2 id="titre-projets" className="showcase__title reveal">Mes meilleurs projets !</h2>
        </div>

        <div data-carousel-root>
          {/* Une carte par projet : la liste est dans src/data/projets.js */}
          <ul className="carousel" data-carousel data-carousel-start={aLaUne.length > 2 ? 1 : 0} tabIndex="0" aria-labelledby="titre-projets">
            {aLaUne.map((projet) => <ProjectSlide key={projet.slug} projet={projet} />)}
          </ul>

          <div className="carousel-nav">
            <button type="button" className="carousel-btn carousel-btn--prev" data-carousel-prev aria-label="Projet précédent">
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg>
            </button>
            <button type="button" className="carousel-btn" data-carousel-next aria-label="Projet suivant">
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg>
            </button>
          </div>
        </div>

        <p className="showcase__cta">
          <a className="btn btn--ghost" href="/projets/">Voir toutes mes réalisations</a>
        </p>
      </section>

      {/* Contact */}
      <section className="band band--yellow torn-top contact-band" aria-labelledby="titre-contact">
        <div className="container contact-band__inner">
          <h2 id="titre-contact" className="contact-band__title">Intéressé(e) ?<br />Contactez-moi ^^</h2>
          <ul className="contact-links">
            <li>
              <a href="https://www.linkedin.com/in/camelia-amin-handoyo/">
                LinkedIn
                <svg className="icon" aria-hidden="true"><use href="/icons.svg#linkedin"></use></svg>
              </a>
            </li>
            <li>
              <a href="mailto:camhdyo@gmail.com">
                E-mail
                <svg className="icon" aria-hidden="true"><use href="/icons.svg#mail"></use></svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/caamhy/">
                Instagram
                <svg className="icon" aria-hidden="true"><use href="/icons.svg#instagram"></use></svg>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
