import ProjectGrid from '../../components/ProjectGrid';

export const metadata = {
  title: "Projets — Camélia Amin Handoyo",
  description: "Sélection de projets web et design de Camélia Amin Handoyo. À REMPLACER.",
};

export default function Page() {
  return (
    <main id="contenu">
      <section className="section" aria-labelledby="titre-page">
        <div className="container stack" style={{ "--flow": "var(--space-l)" }}>
          <header className="stack">
            <p className="eyebrow">Sélection</p>
            <h1 id="titre-page">Projets</h1>
            <p className="lead">Bienvenue ! Vous trouverez ici mes projets en développement, design et création visuelle, menés en formation, en concours ou en personnel. Bonne découverte !</p>
          </header>

          {/* Une carte par projet, filtrables par domaine : la liste est dans src/data/projets.js */}
          <ProjectGrid />
        </div>
      </section>
    </main>
  );
}
