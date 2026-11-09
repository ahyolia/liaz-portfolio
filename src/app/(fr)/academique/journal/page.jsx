export const metadata = {
  title: "Journal des fiches de réflexion — Camélia Amin Handoyo",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main id="contenu">

      <section className="section" aria-labelledby="titre-page">
        <div className="container stack gridpaper academic-head" style={{ "--flow": "var(--space-l)" }}>
          <nav aria-label="Volet académique">
            <ul className="academic-nav">
              <li><a href="/academique/">Compétences et AC</a></li>
              <li><a href="/academique/journal/" aria-current="page">Journal des fiches</a></li>
            </ul>
          </nav>
          <p className="academic-stamp">Réservé à l'équipe pédagogique</p>

          <header className="stack">
            <p className="eyebrow">Volet académique</p>
            <h1 id="titre-page">Journal des fiches de réflexion</h1>
            <p className="lead">Une fiche par projet ou situation d'apprentissage, avec les AC qu'elle prouve.</p>
          </header>

          {/* Une carte = une fiche. Dupliquer un <li> pour en ajouter, et lier la fiche aux AC dans src/data/competences.js. */}
          <ul className="grid list-reset" role="list">
            <li className="card postit postit--cream stack reveal">
              <span className="tape" aria-hidden="true"></span>
              <p><time dateTime="2026-11-03">3 novembre 2026</time></p>
              <h2><a className="card__link" href="/academique/journal/webdoc-nc1ere/">Web-documentaire NC la 1ère</a></h2>
              <p className="journal-label">AC prouvés</p>
              <ul className="tags journal-ac" aria-label="AC prouvés"><li>AC35.01</li><li>AC35.02</li><li>AC35.04</li><li>AC23.04</li><li>AC23.05</li></ul>
              <p className="journal-resume">Portrait de Mirella pour le concours Les Étincelles Calédoniennes. J'ai piloté le projet, cadré la technique, pris le son, mené les interviews et préparé la soutenance. Prix Coup de cœur du jury.</p>
            </li>
            <li className="card postit postit--cream stack reveal">
              <span className="tape" aria-hidden="true"></span>
              <p><time dateTime="2026-11-02">2 novembre 2026</time></p>
              <h2><a className="card__link" href="/academique/journal/aima-sae501/">Aïma - BloodShare (SAÉ 501)</a></h2>
              <p className="journal-label">AC prouvés</p>
              <ul className="tags journal-ac" aria-label="AC prouvés"><li>AC34.01</li><li>AC34.02</li><li>AC34.03</li><li>AC34.04</li><li>AC34.05</li><li>AC35.01</li><li>AC35.02</li></ul>
              <p className="journal-resume">Application mobile et PWA gamifiée pour l'ADSB-NC, avec une API Laravel 12, un back-office Filament, un QR code tournant, une attention à la sécurité et au RGPD, et un hébergement de démo.</p>
            </li>
            <li className="card postit postit--cream stack reveal">
              <span className="tape" aria-hidden="true"></span>
              <p><time dateTime="2026-10-23">23 octobre 2026</time></p>
              <h2><a className="card__link" href="/academique/journal/pocket-stars/">Pocket Stars (exploration 3D)</a></h2>
              <p className="journal-label">AC prouvés</p>
              <ul className="tags journal-ac" aria-label="AC prouvés"><li>AC34.01</li><li>AC34.03</li><li>AC34.04</li><li>AC34.05</li><li>AC35.02</li></ul>
              <p className="journal-resume">Balade 3D en React et Three.js sous un ciel de cartes Pokémon, avec l'API TCGdex et un secours hors ligne, des contrôles tactiles, un son généré et le pilotage d'un assistant IA.</p>
            </li>
            <li className="card postit postit--cream stack reveal">
              <span className="tape" aria-hidden="true"></span>
              <p><time dateTime="2026-10-09">9 octobre 2026</time></p>
              <h2><a className="card__link" href="/academique/journal/liaz-gallery/">LiAZ Gallery (XR et Interactions)</a></h2>
              <p className="journal-label">AC prouvés</p>
              <ul className="tags journal-ac" aria-label="AC prouvés"><li>AC34.01</li><li>AC34.03</li><li>AC35.02</li></ul>
              <p className="journal-resume">Galerie 3D sous Unity pilotée à la voix, avec l'API Serper, la navigation en drone, le raycast, une image de secours et, en v1.1, la transcription vocale locale par Whisper.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
