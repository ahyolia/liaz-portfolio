// Section « Le contexte » : texte (children) + stickers des outils, et la fiche
// d'identité façon ticket de caisse à droite.
//
// Props : titre, outils [{ nom, icone }] (icônes de public/images/tools/),
// fiche [{ label, valeur }] (lignes du ticket), statut (dernière ligne, en gras)

// Inclinaisons variées pour l'effet autocollant
const ANGLES = [-10, 8, -6, 11, -12, 9, 7, -8];

export default function Contexte({ titre = 'Le contexte', outils = [], fiche, statut, children }) {
  return (
    <section className="section" aria-labelledby="contexte">
      <div className="container case-context">
        <div className="stack reveal">
          <h2 id="contexte">{titre}</h2>
          {children}
          {outils.length > 0 && (
            <ul className="case-tools list-reset" role="list" aria-label="Technologies utilisées">
              {outils.map((outil, i) => (
                <li key={outil.nom} className="tool-sticker" style={{ '--r': `${ANGLES[i % ANGLES.length]}deg` }}>
                  <img src={outil.icone} alt={outil.nom} width="48" height="48" loading="lazy" />
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="case-ticket">
          <div className="receipt-wrap receipt-wrap--narrow">
            <div className="receipt stack">
              <dl className="stack">
                {fiche.map((ligne) => (
                  <div key={ligne.label} className="receipt__row"><dt>{ligne.label}</dt><dd>{ligne.valeur}</dd></div>
                ))}
                {statut && <div className="receipt__row receipt__total"><dt>Statut</dt><dd>{statut}</dd></div>}
              </dl>
              <span className="barcode" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
