'use client';
// Grille de la page Projets avec un filtre par domaine (pastilles).
// Les domaines viennent de DOMAINES et du champ `domaines` de chaque projet
// (src/data/projets.js). Seuls les domaines utilisés par au moins un projet
// sont proposés.
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projets, DOMAINES } from '../data/projets';

export default function ProjectGrid() {
  const [filtre, setFiltre] = useState('tout');
  const domaines = DOMAINES.filter((d) => projets.some((p) => p.domaines?.includes(d.id)));
  const visibles = filtre === 'tout' ? projets : projets.filter((p) => p.domaines?.includes(filtre));

  const choisir = (id) => {
    setFiltre(id);
    // Les cartes changent de place : ScrollTrigger recalcule ses positions
    // (apparition au scroll des cartes .reveal) quand la fenêtre « change de taille »
    requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
  };

  return (
    <div className="stack" style={{ '--flow': 'var(--space-l)' }}>
      <div className="gallery-filters project-filters" role="group" aria-label="Filtrer les projets par domaine">
        <button type="button" aria-pressed={filtre === 'tout'} onClick={() => choisir('tout')}>Tous</button>
        {domaines.map((d) => (
          <button key={d.id} type="button" aria-pressed={filtre === d.id} onClick={() => choisir(d.id)}>{d.label}</button>
        ))}
      </div>

      <p className="visually-hidden" aria-live="polite">{visibles.length} projet{visibles.length > 1 ? 's' : ''} affiché{visibles.length > 1 ? 's' : ''}</p>

      <ul className="grid grid--3 project-grid list-reset" role="list">
        {visibles.map((projet) => <ProjectCard key={projet.slug} projet={projet} index={projets.indexOf(projet)} />)}
      </ul>
    </div>
  );
}
