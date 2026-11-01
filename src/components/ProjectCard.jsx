// Carte d'un projet sur la page Projets (papier quadrillé + scotch).
// projet : un élément de src/data/projets.js ; index : position, pour varier le scotch.
import { lienProjet } from '../data/projets';

const SCOTCHS = ['tape', 'tape tape--tr', 'tape tape--tl'];

export default function ProjectCard({ projet, index = 0 }) {
  return (
    <li className="card gridpaper stack reveal">
      <span className={SCOTCHS[index % SCOTCHS.length]} aria-hidden="true"></span>
      <div className="card__media">
        <img src={projet.image.src} alt="" width={projet.image.width} height={projet.image.height} loading="lazy" />
      </div>
      <p className="annotation">{projet.annee} · {projet.cadre}</p>
      <h2><a className="card__link" href={lienProjet(projet)}>{projet.titre}</a></h2>
      <p>{projet.resume} {projet.aRemplacer && <span className="todo">À REMPLACER</span>}</p>
      <ul className="tags">{projet.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
    </li>
  );
}
