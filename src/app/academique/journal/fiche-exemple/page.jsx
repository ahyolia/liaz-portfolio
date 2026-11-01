export const metadata = {
  title: "Fiche exemple — Journal — Camélia Amin Handoyo",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main id="contenu">
      <p className="academic-banner">Espace réservé à l'équipe pédagogique — BUT MMI</p>

      <article>
        {/* En-tête de la fiche */}
        <header className="section">
          <div className="container stack" style={{ "--flow": "var(--space-m)" }}>
            <nav aria-label="Volet académique">
              <ul className="academic-nav">
                <li><a href="/academique/">Compétences et AC</a></li>
                <li><a href="/academique/journal/">← Journal des fiches</a></li>
              </ul>
            </nav>
            <p className="eyebrow">Fiche de réflexion</p>
            <h1>Fiche exemple <span className="todo">À REMPLACER</span></h1>

            <div className="receipt-wrap receipt-wrap--narrow">
              <div className="receipt stack">
                <dl className="stack">
                  <div className="receipt__row"><dt>Date</dt><dd><time dateTime="2026-10-15">15/10/2026</time></dd></div>
                  <div className="receipt__row"><dt>Projet</dt><dd><a href="/projets/projet-exemple/">Projet exemple</a></dd></div>
                  <div className="receipt__row"><dt>Cadre</dt><dd>SAÉ 5.01</dd></div>
                  <div className="receipt__row receipt__total"><dt>AC visés</dt><dd>3</dd></div>
                </dl>
                <p><span className="todo">À REMPLACER</span></p>
              </div>
            </div>

            {/* Sommaire */}
            <nav aria-labelledby="titre-sommaire">
              <h2 id="titre-sommaire" className="visually-hidden">Sommaire de la fiche</h2>
              <ol>
                <li><a href="#ac-vises">AC visés</a></li>
                <li><a href="#preuves">Preuve de compétence</a></li>
                <li><a href="#demonstration">Démonstration</a></li>
                <li><a href="#dimension-pro">Dimension pro</a></li>
                <li><a href="#je-vs-nous">Synthèse « Je vs Nous »</a></li>
                <li><a href="#difficultes">Difficultés, pivots et axes d'amélioration</a></li>
              </ol>
            </nav>
          </div>
        </header>

        <div className="container stack" style={{ "--flow": "var(--space-xl)" }}>
          {/* 1. AC visés */}
          <section className="notebook reveal" aria-labelledby="ac-vises">
            <h2 id="ac-vises">1. AC visés</h2>
            <p className="annotation">Codes précis du référentiel, avec leur intitulé.</p>
            <ul>
              <li><strong>AC34.01</strong> — Intitulé de l'AC <span className="todo">À REMPLACER</span></li>
              <li><strong>AC34.02</strong> — Intitulé de l'AC <span className="todo">À REMPLACER</span></li>
              <li><strong>AC35.01</strong> — Intitulé de l'AC <span className="todo">À REMPLACER</span></li>
            </ul>
          </section>

          {/* 2. Preuve de compétence */}
          <section className="notebook reveal" aria-labelledby="preuves">
            <h2 id="preuves">2. Preuve de compétence</h2>
            <p className="annotation">Des liens vérifiables : dépôt, site en ligne, maquette, document…</p>
            <ul>
              <li><a href="https://github.com/">Dépôt GitHub</a> <span className="todo">À REMPLACER</span></li>
              <li><a href="https://example.com">Site en ligne</a> <span className="todo">À REMPLACER</span></li>
              <li><a href="https://www.figma.com/">Maquette Figma</a> <span className="todo">À REMPLACER</span></li>
            </ul>
          </section>

          {/* 3. Démonstration */}
          <section className="notebook reveal" aria-labelledby="demonstration">
            <h2 id="demonstration">3. Démonstration</h2>
            <p className="annotation">Pourquoi mes choix répondent à chaque AC. Un paragraphe par AC.</p>
            <h3>AC34.01</h3>
            <p>J'ai choisi… parce que… ce qui montre que… <span className="todo">À REMPLACER</span></p>
            <h3>AC34.02</h3>
            <p>J'ai choisi… parce que… ce qui montre que… <span className="todo">À REMPLACER</span></p>
            <h3>AC35.01</h3>
            <p>J'ai choisi… parce que… ce qui montre que… <span className="todo">À REMPLACER</span></p>
          </section>

          {/* 4. Dimension pro */}
          <section className="notebook reveal" aria-labelledby="dimension-pro">
            <h2 id="dimension-pro">4. Dimension pro</h2>
            <p className="annotation">En quoi ce travail prouve que je suis opérationnelle en entreprise.</p>
            <p>Méthodes, outils, contraintes réelles (délais, client, qualité, déploiement)… <span className="todo">À REMPLACER</span></p>
          </section>

          {/* 5. Synthèse « Je vs Nous » */}
          <section className="notebook reveal" aria-labelledby="je-vs-nous">
            <h2 id="je-vs-nous">5. Synthèse « Je vs Nous »</h2>
            <p className="annotation">Distinguer clairement le travail d'équipe de mon apport personnel.</p>
            <h3>Nous — l'équipe</h3>
            <p>Ce que le groupe a réalisé ensemble, la répartition des rôles. <span className="todo">À REMPLACER</span></p>
            <h3>Je — mon apport</h3>
            <p>Ce que j'ai fait moi-même, mes décisions, mes livrables. <span className="todo">À REMPLACER</span></p>
          </section>

          {/* Réflexion critique */}
          <section className="notebook reveal" aria-labelledby="difficultes">
            <h2 id="difficultes">Difficultés, pivots et axes d'amélioration</h2>
            <p className="annotation">Regard critique : ce qui a coincé, ce que j'ai changé, ce que je ferais mieux.</p>
            <h3>Difficultés rencontrées</h3>
            <p><span className="todo">À REMPLACER</span></p>
            <h3>Pivots</h3>
            <p>Changements de cap et leur justification. <span className="todo">À REMPLACER</span></p>
            <h3>Axes d'amélioration</h3>
            <p><span className="todo">À REMPLACER</span></p>
          </section>
        </div>
      </article>
    </main>
  );
}
