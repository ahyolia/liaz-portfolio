// Pied de page, commun à toutes les pages (inclus par components/Squelette.jsx).
import { t, chemin } from '../i18n';

export default function Footer({ lang = 'fr' }) {
  const ui = t(lang);
  const lien = (href) => chemin(lang, href);

  return (
    <footer className="site-footer torn-top">
      <div className="container site-footer__inner">
        {/* Phrase d'appel au contact (différente du bandeau « Intéressé(e) ? » de l'accueil) */}
        <a className="site-logo site-footer__accroche" href="mailto:camhdyo@gmail.com">{ui.footerAccroche}</a>

        <nav className="footer-nav" aria-label={ui.piedDePage}>
          <ul>
            <li><a href={lien('/')}>{ui.accueil} <span aria-hidden="true">↗</span></a></li>
            <li><a href={lien('/projets/')}>{ui.mesProjets} <span aria-hidden="true">↗</span></a></li>
            <li><a href={lien('/a-propos/')}>{ui.aPropos} <span aria-hidden="true">↗</span></a></li>
          </ul>
        </nav>

        <div className="site-footer__contact">
          <ul className="social-links">
            <li><a href="https://www.instagram.com/caamhy/"><svg className="icon" aria-hidden="true"><use href="/icons.svg#instagram"></use></svg><span className="visually-hidden">Instagram</span></a></li>
            <li><a href="https://www.linkedin.com/in/camelia-amin-handoyo/"><svg className="icon" aria-hidden="true"><use href="/icons.svg#linkedin"></use></svg><span className="visually-hidden">LinkedIn</span></a></li>
            <li><a href="https://www.behance.net/camhdyo"><svg className="icon" aria-hidden="true"><use href="/icons.svg#behance"></use></svg><span className="visually-hidden">Behance</span></a></li>
            <li><a href="https://github.com/ahyolia"><svg className="icon" aria-hidden="true"><use href="/icons.svg#github"></use></svg><span className="visually-hidden">GitHub</span></a></li>
          </ul>
          <a href="/cv/CV.pdf" download hrefLang="fr">{ui.monCv} <span aria-hidden="true">↗</span></a>
          <a href="mailto:camhdyo@gmail.com">camhdyo@gmail.com</a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <ul>
          <li><a href={lien('/mentions-legales/')}>{ui.mentions}</a></li>
          <li><a href={`${lien('/mentions-legales/')}#confidentialite`}>{ui.confidentialite}</a></li>
        </ul>
        <span className="barcode" aria-hidden="true"></span>
        <p>{ui.copyright}</p>
      </div>
    </footer>
  );
}
