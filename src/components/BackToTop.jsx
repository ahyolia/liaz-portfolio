// Bouton « Revenir en haut », sur toutes les pages (voir components/Squelette.jsx).
// Caché au départ ; src/main.js (initBackToTop) l'affiche après un peu de défilement
// et remonte en douceur (avec Lenis quand il est actif).
import { t } from '../i18n';

export default function BackToTop({ lang = 'fr' }) {
  return (
    <button type="button" className="back-to-top" data-back-to-top="" aria-label={t(lang).hautDePage} hidden>
      <svg className="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg>
    </button>
  );
}
