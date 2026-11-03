// Bouton « Revenir en haut », sur toutes les pages (voir src/app/layout.jsx).
// Caché au départ ; src/main.js (initBackToTop) l'affiche après un peu de défilement
// et remonte en douceur (avec Lenis quand il est actif).
export default function BackToTop() {
  return (
    <button type="button" className="back-to-top" data-back-to-top="" aria-label="Revenir en haut de la page" hidden>
      <svg className="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg>
    </button>
  );
}
