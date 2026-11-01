// En-tête animé d'une fiche projet (animations : initCaseHero dans src/main.js).
// Tout l'en-tête est une seule fiche en papier quadrillé, scotchée sur la feuille,
// avec un onglet de classeur pour revenir à la liste (fil d'Ariane) :
// texte à gauche, scène des visuels à droite.
// children = contenu de la scène à droite : captures (.phone-duo / .phone)
// et éléments flottants (.floaty avec --x, --y, --r, --size, --delay ; data-depth = parallaxe).
// titre accepte du JSX, ex. <>Aïma, l'appli qui <span className="mark">fidélise</span></>
//
// Props : slug (titre de l'onglet, n° de fiche et année, lus dans src/data/projets.js), eyebrow, titre,
// accroche (HTML simple), liens [{ href, label }] (le 1er est mis en avant),
// couleur (forme derrière les visuels)
import { projets } from '../../data/projets';

export default function CaseHero({ slug, eyebrow, titre, accroche, liens = [], couleur = 'var(--cream)', children }) {
  const index = projets.findIndex((p) => p.slug === slug);
  const projet = projets[index];

  return (
    <header className="section">
      <div className="container case-hero-wrap" data-case-hero="">
        <div className="case-hero gridpaper" style={{ '--stage-color': couleur }}>
          <nav className="case-hero__tab" aria-label="Fil d'Ariane">
            <a href="/projets/">
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg>
              Projets
            </a>
            {projet && <><span aria-hidden="true">/</span><span className="case-hero__crumb" aria-current="page">{projet.titre}</span></>}
          </nav>
          <span className="tape tape--tr" aria-hidden="true"></span>
          {projet && (
            <p className="case-hero__num annotation" aria-hidden="true">
              fiche n° {String(index + 1).padStart(2, '0')} · {projet.annee}
            </p>
          )}

          <div className="stack" style={{ '--flow': 'var(--space-m)' }}>
            <p className="eyebrow">{eyebrow}</p>
            <h1 data-split="">{titre}</h1>
            {accroche && <p className="lead" dangerouslySetInnerHTML={{ __html: accroche }} />}

            {liens.length > 0 && (
              <div className="cluster">
                {liens.map((lien, i) => (
                  <a key={lien.href} className={i === 0 ? 'btn' : 'btn btn--ghost'} href={lien.href}>{lien.label}</a>
                ))}
              </div>
            )}
          </div>

          <div className="case-stage" data-stage="">
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}
