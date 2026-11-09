'use client';
// En-tête du site, commun à toutes les pages (inclus par components/Squelette.jsx).
// Composant client : il lit l'URL courante pour marquer le lien actif (aria-current)
// et pour proposer la même page dans l'autre langue (bouton FR / EN).
import { usePathname } from 'next/navigation';
import { t, chemin, autreLangue } from '../i18n';

export default function Header({ lang = 'fr' }) {
  const ui = t(lang);
  const chemin_ = usePathname() ?? '/';
  const accueil = chemin(lang, '/');
  const liens = [
    { href: chemin(lang, '/projets/'), label: ui.projets },
    { href: chemin(lang, '/a-propos/'), label: ui.aPropos },
  ];
  // Actif si on est dans la section (ex. /projets/aima/ active « Projets »)
  const actif = (href) => (chemin_.startsWith(href.replace(/\/$/, '')) ? 'page' : undefined);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-logo" href={accueil} aria-current={chemin_ === accueil || chemin_ === accueil.replace(/\/$/, '') ? 'page' : undefined}>
          liazfolio<svg className="site-logo__mark" aria-hidden="true"><use href="/icons.svg#asterisk"></use></svg>
        </a>
        <nav aria-label={ui.navPrincipale}>
          <ul className="site-nav">
            {liens.map((lien) => (
              <li key={lien.href}><a href={lien.href} aria-current={actif(lien.href)}>{lien.label}</a></li>
            ))}
            <li><a className="site-nav__cta" href={`${chemin(lang, '/a-propos/')}#contact`}>{ui.contact}</a></li>
            <li>
              {/* Même page dans l'autre langue */}
              <a className="site-langue" href={autreLangue(chemin_)} hrefLang={ui.langue.hreflang} lang={ui.langue.hreflang} aria-label={ui.langue.label} title={ui.langue.label}>
                {ui.langue.code}
              </a>
            </li>
            <li>
              {/* Sound design : activé / coupé par src/main.js (initSons) */}
              <button type="button" className="site-son" data-son="" aria-pressed="false" aria-label={ui.son} title={ui.activerSon}>
                <svg className="site-son__on" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" /><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                <svg className="site-son__off" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" /><path d="M16.5 9.5l5 5M21.5 9.5l-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
