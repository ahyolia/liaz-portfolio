// Section « Les liens » : site en ligne, GitHub, Figma, Behance…
// Props : titre, liens [{ href, label }] (le premier est mis en avant)

export default function Liens({ titre = 'Les liens', liens }) {
  return (
    <section className="section" aria-labelledby="liens">
      <div className="container stack reveal">
        <h2 id="liens">{titre}</h2>
        <ul className="case-links list-reset" role="list">
          {liens.map((lien, i) => (
            <li key={lien.href}>
              <a className={i === 0 ? 'btn' : 'btn btn--ghost'} href={lien.href}>{lien.label} <span aria-hidden="true">↗</span></a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
