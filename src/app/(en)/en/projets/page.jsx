import ProjectGrid from '../../../../components/ProjectGrid';

export const metadata = {
  title: 'Projects — Camélia Amin Handoyo',
  description: 'A selection of web development, design and visual creation projects by Camélia Amin Handoyo.',
  alternates: { languages: { fr: '/projets/' } },
};

export default function Page() {
  return (
    <main id="contenu">
      <section className="section" aria-labelledby="titre-page">
        <div className="container stack" style={{ '--flow': 'var(--space-l)' }}>
          <header className="stack">
            <p className="eyebrow">Selection</p>
            <h1 id="titre-page">Projects</h1>
            <p className="lead">Welcome! Here you'll find my projects in development, design and visual creation, made during my studies, for contests or just for me. Enjoy!</p>
          </header>

          <ProjectGrid lang="en" />
        </div>
      </section>
    </main>
  );
}
