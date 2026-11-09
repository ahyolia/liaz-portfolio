// Gabarit d'une fiche projet : feuille blanche (.case-sheet) + navigation
// « Projet suivant » en bas, calculée depuis src/data/projets.js.
// Les sections (CaseHero, Contexte, Questions, Demarche, Apport, Galerie, Liens)
// se placent dans children, dans l'ordre voulu.
import { lienProjet, projetSuivant, projetLocal } from '../../data/projets';
import { t, chemin } from '../../i18n';

export default function ProjectLayout({ slug, lang = 'fr', children }) {
  const ui = t(lang);
  const suivant = projetLocal(projetSuivant(slug), lang);

  return (
    <main id="contenu">
      <article className="case-sheet">
        {children}

        <nav className="container project-nav" aria-label={ui.autresProjets}>
          <a className="project-nav__link" href={chemin(lang, '/projets/')}><span aria-hidden="true">←</span> {ui.tousLesProjets}</a>
          {suivant && suivant.slug !== slug && (
            <a className="project-nav__link project-nav__link--next" href={lienProjet(suivant, lang)}>
              <span className="project-nav__label">{ui.projetSuivant}</span> {suivant.titre} <span aria-hidden="true">→</span>
            </a>
          )}
        </nav>
      </article>
    </main>
  );
}
