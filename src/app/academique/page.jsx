export const metadata = {
  title: "Volet académique — Compétences — Camélia Amin Handoyo",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main id="contenu">
      <p className="academic-banner">Espace réservé à l'équipe pédagogique — BUT MMI</p>

      <section className="section" aria-labelledby="titre-page">
        <div className="container stack" style={{ "--flow": "var(--space-m)" }}>
          <nav aria-label="Volet académique">
            <ul className="academic-nav">
              <li><a href="/academique/" aria-current="page">Compétences et AC</a></li>
              <li><a href="/academique/journal/">Journal des fiches</a></li>
            </ul>
          </nav>
          <p className="eyebrow">Volet académique</p>
          <h1 id="titre-page">Compétences et apprentissages critiques</h1>
          <p className="lead">
            Chaque AC renvoie aux fiches de réflexion qui en apportent la preuve.
            <span className="todo">À REMPLACER</span>
          </p>
          <p className="annotation">Parcours : à préciser. Adapter les compétences et les AC au référentiel de ton parcours.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-tableau">
        <div className="container">
          <div className="receipt-wrap">
            <div className="receipt stack">
              <h2 id="titre-tableau" className="receipt__title">Tableau des compétences</h2>

              <div className="table-scroll" role="region" aria-labelledby="titre-tableau" tabIndex="0">
                <table className="table">
                  <caption>Une ligne par AC — codes et intitulés à reprendre du référentiel officiel</caption>
                  <thead>
                    <tr>
                      <th scope="col">Code</th>
                      <th scope="col">Apprentissage critique</th>
                      <th scope="col">Fiches qui le prouvent</th>
                    </tr>
                  </thead>

                  {/* Un <tbody> par compétence. Dupliquer pour en ajouter. */}
                  <tbody>
                    <tr><th scope="rowgroup" colSpan="3">Développer</th></tr>
                    <tr>
                      <th scope="row">AC34.01</th>
                      <td>Intitulé de l'AC <span className="todo">À REMPLACER</span></td>
                      <td>
                        <ul className="list-reset">
                          <li><a href="/academique/journal/fiche-exemple/">Fiche exemple</a></li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">AC34.02</th>
                      <td>Intitulé de l'AC <span className="todo">À REMPLACER</span></td>
                      <td>
                        <ul className="list-reset">
                          <li><a href="/academique/journal/fiche-exemple/">Fiche exemple</a></li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">AC34.03</th>
                      <td>Intitulé de l'AC <span className="todo">À REMPLACER</span></td>
                      <td><em>Aucune fiche pour l'instant</em></td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr><th scope="rowgroup" colSpan="3">Entreprendre</th></tr>
                    <tr>
                      <th scope="row">AC35.01</th>
                      <td>Intitulé de l'AC <span className="todo">À REMPLACER</span></td>
                      <td>
                        <ul className="list-reset">
                          <li><a href="/academique/journal/fiche-exemple/">Fiche exemple</a></li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">AC35.02</th>
                      <td>Intitulé de l'AC <span className="todo">À REMPLACER</span></td>
                      <td><em>Aucune fiche pour l'instant</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <span className="barcode" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
