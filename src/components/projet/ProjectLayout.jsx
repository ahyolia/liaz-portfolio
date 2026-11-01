// Gabarit d'une fiche projet : feuille blanche (.case-sheet) + navigation
// « Projet suivant » en bas, calculée depuis src/data/projets.js.
// Les sections (CaseHero, Contexte, Questions, Demarche, Apport, Galerie, Liens)
// se placent dans children, dans l'ordre voulu.
import { lienProjet, projetSuivant } from '../../data/projets';

export default function ProjectLayout({ slug, children }) {
  const suivant = projetSuivant(slug);

  return (
    <main id="contenu">
      <article className="case-sheet">
        {children}

        <nav className="container project-nav" aria-label="Autres projets">
          <a className="project-nav__link" href="/projets/"><span aria-hidden="true">←</span> Tous les projets</a>
          {suivant && suivant.slug !== slug && (
            <a className="project-nav__link project-nav__link--next" href={lienProjet(suivant)}>
              <span className="project-nav__label">Projet suivant</span> {suivant.titre} <span aria-hidden="true">→</span>
            </a>
          )}
        </nav>
      </article>
    </main>
  );
}
