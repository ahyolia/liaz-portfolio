export const metadata = {
  title: "Journal des fiches de réflexion — Camélia Amin Handoyo",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main id="contenu">
      <p className="academic-banner">Espace réservé à l'équipe pédagogique — BUT MMI</p>

      <section className="section" aria-labelledby="titre-page">
        <div className="container stack" style={{ "--flow": "var(--space-l)" }}>
          <nav aria-label="Volet académique">
            <ul className="academic-nav">
              <li><a href="/academique/">Compétences et AC</a></li>
              <li><a href="/academique/journal/" aria-current="page">Journal des fiches</a></li>
            </ul>
          </nav>

          <header className="stack">
            <p className="eyebrow">Volet académique</p>
            <h1 id="titre-page">Journal des fiches de réflexion</h1>
            <p className="lead">Une fiche par projet ou situation d'apprentissage. <span className="todo">À REMPLACER</span></p>
          </header>

          {/* Une carte = une fiche. Dupliquer un <li> pour en ajouter (et déclarer la page dans vite.config.js). */}
          <ul className="grid list-reset" role="list">
            <li className="card postit postit--cream stack reveal">
              <span className="tape" aria-hidden="true"></span>
              <p><time dateTime="2026-10-15">15 octobre 2026</time></p>
              <h2><a className="card__link" href="/academique/journal/fiche-exemple/">Fiche exemple</a></h2>
              <ul className="tags"><li>AC34.01</li><li>AC34.02</li><li>AC35.01</li></ul>
              <p><span className="todo">À REMPLACER</span></p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
