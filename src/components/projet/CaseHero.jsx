// En-tête animé d'une fiche projet (animations : initCaseHero dans src/main.js).
// children = contenu de la scène à droite : captures (.phone-duo / .phone)
// et éléments flottants (.floaty avec --x, --y, --r, --size, --delay ; data-depth = parallaxe).
// titre accepte du JSX, ex. <>Aïma, l'appli qui <span className="mark">fidélise</span></>
//
// Props : eyebrow, titre, accroche (HTML simple), liens [{ href, label }] (le 1er est mis
// en avant), couleur (forme derrière les visuels)

export default function CaseHero({ eyebrow, titre, accroche, liens = [], couleur = 'var(--cream)', children }) {
  return (
    <header className="section">
      <div className="container case-hero" data-case-hero="">
        <div className="stack" style={{ '--flow': 'var(--space-m)' }}>
          <a className="back-btn" href="/projets/">
            <span className="back-btn__icon" aria-hidden="true"><svg className="icon"><use href="/icons.svg#arrow"></use></svg></span>
            Tous les projets
          </a>
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

        <div className="case-stage" style={{ '--stage-color': couleur }} data-stage="">
          {children}
        </div>
      </div>
    </header>
  );
}
