// Pied de page, commun à toutes les pages (inclus par src/app/layout.jsx).

export default function Footer() {
  return (
    <footer className="site-footer torn-top">
      <div className="container site-footer__inner">
        {/* À REMPLACER : ton logo (SVG) */}
        <a className="site-logo" href="/">Camélia Amin Handoyo</a>

        <nav className="footer-nav" aria-label="Pied de page">
          <ul>
            <li><a href="/">Accueil <span aria-hidden="true">↗</span></a></li>
            <li><a href="/projets/">Mes projets <span aria-hidden="true">↗</span></a></li>
            <li><a href="/a-propos/">À propos <span aria-hidden="true">↗</span></a></li>
          </ul>
        </nav>

        <div className="site-footer__contact">
          <ul className="social-links">
            <li><a href="https://www.instagram.com/caamhy/"><svg className="icon" aria-hidden="true"><use href="/icons.svg#instagram"></use></svg><span className="visually-hidden">Instagram</span></a></li>
            <li><a href="https://www.linkedin.com/in/camelia-amin-handoyo/"><svg className="icon" aria-hidden="true"><use href="/icons.svg#linkedin"></use></svg><span className="visually-hidden">LinkedIn</span></a></li>
            <li><a href="https://www.behance.net/camhdyo"><svg className="icon" aria-hidden="true"><use href="/icons.svg#behance"></use></svg><span className="visually-hidden">Behance</span></a></li>
            <li><a href="https://github.com/ahyolia"><svg className="icon" aria-hidden="true"><use href="/icons.svg#github"></use></svg><span className="visually-hidden">GitHub</span></a></li>
          </ul>
          <a href="/cv/CV.pdf" download>Mon CV <span aria-hidden="true">↗</span></a>
          <a href="mailto:camhdyo@gmail.com">camhdyo@gmail.com</a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <ul>
          <li><a href="/mentions-legales/">Mentions légales</a></li>
          <li><a href="/mentions-legales/#confidentialite">Politique de confidentialité</a></li>
        </ul>
        <span className="barcode" aria-hidden="true"></span>
        <p>Portfolio de Camélia © 2026</p>
      </div>
    </footer>
  );
}
