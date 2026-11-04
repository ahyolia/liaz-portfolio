'use client';
// En-tête du site, commun à toutes les pages (inclus par src/app/layout.jsx).
// Composant client : il lit l'URL courante pour marquer le lien actif (aria-current).
import { usePathname } from 'next/navigation';

const LIENS = [
  { href: '/projets/', label: 'Projets', section: '/projets' },
  { href: '/a-propos/', label: 'À propos', section: '/a-propos' },
];

export default function Header() {
  const chemin = usePathname() ?? '/';
  // Actif si on est dans la section (ex. /projets/aima/ active « Projets »)
  const actif = (section) => (chemin.startsWith(section) ? 'page' : undefined);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* À REMPLACER : ton logo (SVG) */}
        <a className="site-logo" href="/" aria-current={chemin === '/' ? 'page' : undefined}>
          liazfolio<svg className="site-logo__mark" aria-hidden="true"><use href="/icons.svg#asterisk"></use></svg>
        </a>
        <nav aria-label="Navigation principale">
          <ul className="site-nav">
            {LIENS.map((lien) => (
              <li key={lien.href}><a href={lien.href} aria-current={actif(lien.section)}>{lien.label}</a></li>
            ))}
            <li><a className="site-nav__cta" href="/a-propos/#contact">Contact</a></li>
            <li>
              {/* Sound design : activé / coupé par src/main.js (initSons) */}
              <button type="button" className="site-son" data-son="" aria-pressed="false" aria-label="Son du site" title="Activer le son">
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
