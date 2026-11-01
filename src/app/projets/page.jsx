import ProjectCard from '../../components/ProjectCard';
import { projets } from '../../data/projets.js';

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
            <p className="lead">Une sélection de projets réalisés en formation, en stage ou en perso. <span className="todo">À REMPLACER</span></p>
          </header>

          {/* Une carte par projet : la liste est dans src/data/projets.js */}
          <ul className="grid list-reset" role="list">
            {projets.map((projet, i) => <ProjectCard key={projet.slug} projet={projet} index={i} />)}
          </ul>
        </div>
      </section>
    </main>
  );
}
