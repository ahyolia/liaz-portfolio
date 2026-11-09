// Accueil, version anglaise (/en/). Même structure que src/app/(fr)/page.jsx.
import ProjectSlide from '../../../components/ProjectSlide';
import HeroDesk from '../../../components/HeroDesk';
import { projetsALaUne } from '../../../data/projets.js';
import ContactBand from '../../../components/ContactBand';

const aLaUne = projetsALaUne.length > 2 ? [projetsALaUne.at(-1), ...projetsALaUne.slice(0, -1)] : projetsALaUne;

export const metadata = {
  title: 'Camélia Amin Handoyo — Portfolio',
  description: 'Portfolio of Camélia Amin Handoyo, a BUT MMI student working across web development, graphic design and UX design.',
  alternates: { languages: { fr: '/' } },
};

export default function Page() {
  return (
    <main id="contenu">
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <p className="hero__word reveal">Portfolio</p>

          <HeroDesk lang="en">
            <div className="hero__skills receipt-wrap">
              <div className="receipt stack">
                <p className="receipt__title">On the menu</p>
                <ul className="list-reset stack" style={{ '--flow': 'var(--space-2xs)' }}>
                  <li className="receipt__row"><span>Web dev</span><span>×1</span></li>
                  <li className="receipt__row"><span>UI/UX design</span><span>×1</span></li>
                  <li className="receipt__row"><span>Graphic design</span><span>×1</span></li>
                  <li className="receipt__row"><span>Motion design</span><span>×1</span></li>
                  <li className="receipt__row"><span>Video</span><span>×1</span></li>
                  <li className="receipt__row"><span>Interactive 3D</span><span>×1</span></li>
                </ul>
                <p className="receipt__row receipt__total"><span>Total</span><span>6 in 1</span></p>
                <span className="barcode" aria-hidden="true"></span>
              </div>
            </div>
          </HeroDesk>

          <h1 className="hero__name reveal">Camélia<br />Amin Handoyo</h1>
        </div>
      </section>

      {/* About preview */}
      <section className="band band--aqua torn-top torn-bottom about-preview" aria-labelledby="titre-about">
        <div className="container about-preview__inner">
          <figure className="polaroid reveal">
            <span className="tape" aria-hidden="true"></span>
            <img src="/images/perso/photo-camelia.jpg" alt="Camélia, smiling, making a heart with her hands next to a giant rose" width="1100" height="1320" />
          </figure>

          <div className="stack reveal" style={{ '--flow': 'var(--space-m)' }}>
            <div>
              <h2 id="titre-about" className="about-preview__title">Camélia?</h2>
              <p className="about-preview__subtitle">Web developer &amp; designer</p>
            </div>
            <p>
              I'm a third-year <strong>BUT MMI</strong> student (a French bachelor's degree in multimedia and the web), specialising in <strong>web development</strong>.
              Based in <strong>New Caledonia</strong>, I move between code, interface design and visual creation.
              What I love is designing experiences that are both <strong>beautiful and useful</strong>, from the first sketch all the way to launch.
              A big fan of manga and dramas, I feed my curiosity with pop culture
              and I love <strong>taking apart the interfaces</strong> I come across to learn from them.
            </p>
            <p>
              After my degree, I plan to continue my studies in <strong>human-computer interaction</strong> or <strong>experience design</strong>,
              while staying open to <strong>job opportunities</strong>.
            </p>
            <p className="cluster">
              <a className="btn" href="/cv/CV.pdf" download hrefLang="fr">Download my CV (in French)</a>
              <a className="btn btn--ghost" href="/en/a-propos/#outils">My tools and software</a>
            </p>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="showcase" aria-labelledby="titre-projets">
        <div className="container">
          <h2 id="titre-projets" className="showcase__title reveal">My best projects!</h2>
        </div>

        <div data-carousel-root>
          <ul className="carousel" data-carousel data-carousel-start={aLaUne.length > 2 ? 1 : 0} tabIndex="0" aria-labelledby="titre-projets">
            {aLaUne.map((projet) => <ProjectSlide key={projet.slug} projet={projet} lang="en" />)}
          </ul>

          <div className="carousel-nav">
            <button type="button" className="carousel-btn carousel-btn--prev" data-carousel-prev aria-label="Previous project">
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg>
            </button>
            <button type="button" className="carousel-btn" data-carousel-next aria-label="Next project">
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg>
            </button>
          </div>
        </div>

        <p className="showcase__cta">
          <a className="btn btn--ghost" href="/en/projets/">See all my work</a>
        </p>
      </section>

      <ContactBand lang="en" />
    </main>
  );
}
