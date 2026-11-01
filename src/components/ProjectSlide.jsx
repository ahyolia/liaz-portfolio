// Carte d'un projet dans le carrousel « Mes meilleurs projets ! » de l'accueil.
// projet : un élément de src/data/projets.js
import { lienProjet } from '../data/projets';

export default function ProjectSlide({ projet }) {
  return (
    <li className="card">
      <div className="carousel__media">
        <img src={projet.image.src} alt="" width={projet.image.width} height={projet.image.height} loading="lazy" />
      </div>
      <div className="carousel__caption">
        <h3><a className="card__link" href={lienProjet(projet)}>{projet.titre}</a></h3>
        <p>{projet.roles}</p>
      </div>
    </li>
  );
}
