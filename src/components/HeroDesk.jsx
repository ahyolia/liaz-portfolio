'use client';
// « Table de travail » du hero de l'accueil : des objets posés de travers
// (ticket, stickers d'outils, post-it) que l'on peut déplacer à la souris ou
// au doigt. Ils suivent aussi légèrement la souris (parallaxe, selon
// `profondeur`). Si un objet est un lien, un clic court l'ouvre et un glisser
// le déplace sans l'ouvrir.
//
// Pour ajouter un objet : une entrée dans OBJETS, avec sa position de départ
// (x, y en % de la table), son inclinaison r (degrés) et sa profondeur.
import { useEffect, useRef } from 'react';

const OUTILS = [
  { nom: 'Figma', icone: 'figma', x: 4, y: 10, r: -12, profondeur: 1.6 },
  { nom: 'Photoshop', icone: 'photoshop', x: 17, y: 52, r: 8, profondeur: 1.2 },
  { nom: 'Illustrator', icone: 'illustrator', x: 6, y: 74, r: -6, profondeur: 1.8 },
  { nom: 'React', icone: 'react', x: 26, y: 14, r: 10, profondeur: 1.3 },
  { nom: 'Laravel', icone: 'laravel', x: 33, y: 70, r: -9, profondeur: 1.7 },
  { nom: 'After Effects', icone: 'aftereffects', x: 44, y: 4, r: 6, profondeur: 1.2 },
  { nom: 'DaVinci Resolve', icone: 'davinciresolve', x: 49, y: 48, r: -5, profondeur: 1.5 },
  { nom: 'Unity', icone: 'unity', x: 60, y: 10, r: 14, profondeur: 1.7 },
  { nom: 'Git', icone: 'git', x: 47, y: 84, r: 7, profondeur: 1.4 },
];

const SEUIL_GLISSER = 6; // px : en dessous, c'est un clic

export default function HeroDesk({ children }) {
  const tableRef = useRef(null);

  useEffect(() => {
    const table = tableRef.current;
    const objets = [...table.querySelectorAll('[data-objet]')];
    const etat = new Map(objets.map((el) => [el, { dx: 0, dy: 0, px: 0, py: 0 }]));
    const animer = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let zMax = objets.length;

    const appliquer = (el) => {
      const s = etat.get(el);
      el.style.translate = `${s.dx + s.px}px ${s.dy + s.py}px`;
    };

    // Parallaxe : chaque objet suit un peu la souris, selon sa profondeur
    const survol = (e) => {
      if (!animer || e.pointerType !== 'mouse') return;
      const r = table.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width - 0.5;
      const my = (e.clientY - r.top) / r.height - 0.5;
      objets.forEach((el) => {
        const s = etat.get(el);
        if (s.glisse) return;
        const p = parseFloat(el.dataset.profondeur) || 1;
        s.px = mx * p * 16;
        s.py = my * p * 16;
        appliquer(el);
      });
    };
    const sortie = () => objets.forEach((el) => { const s = etat.get(el); s.px = 0; s.py = 0; appliquer(el); });

    // Glisser-déposer, borné à la table
    const debut = (e) => {
      const el = e.currentTarget;
      if (e.button !== undefined && e.button !== 0) return;
      const s = etat.get(el);
      s.depart = { x: e.clientX, y: e.clientY, dx: s.dx, dy: s.dy };
      s.glisse = false;
      el.setPointerCapture(e.pointerId);
      el.style.zIndex = ++zMax;
    };
    const deplacer = (e) => {
      const el = e.currentTarget;
      const s = etat.get(el);
      if (!s.depart) return;
      const vx = e.clientX - s.depart.x;
      const vy = e.clientY - s.depart.y;
      if (!s.glisse && Math.hypot(vx, vy) < SEUIL_GLISSER) return;
      if (!s.glisse) { s.glisse = true; el.classList.add('is-dragging'); }
      const t = table.getBoundingClientRect();
      const o = el.getBoundingClientRect();
      // Position actuelle sans le déplacement en cours, pour borner
      const baseX = o.left - (s.dx + s.px) + s.px;
      const baseY = o.top - (s.dy + s.py) + s.py;
      s.dx = Math.min(Math.max(s.depart.dx + vx, t.left - baseX - o.width * 0.3), t.right - baseX - o.width * 0.7);
      s.dy = Math.min(Math.max(s.depart.dy + vy, t.top - baseY - o.height * 0.3), t.bottom - baseY - o.height * 0.7);
      appliquer(el);
    };
    const fin = (e) => {
      const el = e.currentTarget;
      const s = etat.get(el);
      if (!s.depart) return;
      s.depart = null;
      el.classList.remove('is-dragging');
      // Après un vrai glisser, on bloque le clic qui suit (pas d'ouverture du lien)
      if (s.glisse) el.addEventListener('click', (c) => c.preventDefault(), { once: true, capture: true });
      setTimeout(() => { s.glisse = false; }, 0);
    };

    table.addEventListener('pointermove', survol);
    table.addEventListener('pointerleave', sortie);
    objets.forEach((el) => {
      el.addEventListener('pointerdown', debut);
      el.addEventListener('pointermove', deplacer);
      el.addEventListener('pointerup', fin);
      el.addEventListener('pointercancel', fin);
      el.addEventListener('dragstart', (d) => d.preventDefault());
    });
    return () => {
      table.removeEventListener('pointermove', survol);
      table.removeEventListener('pointerleave', sortie);
    };
  }, []);

  const place = (o, extra = {}) => ({ '--x': `${o.x}%`, '--y': `${o.y}%`, '--r': `${o.r}deg`, ...extra });

  return (
    <div className="desk reveal" ref={tableRef}>
      <p className="desk__astuce annotation" aria-hidden="true">psst… tout se déplace !</p>

      {/* Le ticket « Au menu » (passé par la page) */}
      <div className="desk__objet desk__ticket" data-objet="" data-profondeur="0.5" style={place({ x: 76, y: 10, r: 4 }, { zIndex: 5 })}>
        {children}
      </div>

      <div className="desk__objet desk__postit postit" data-objet="" data-profondeur="1.1" style={place({ x: 60, y: 62, r: -5 }, { zIndex: 6 })}>
        Bienvenue sur ma table de travail ✶
      </div>

      <div className="desk__objet desk__postit postit postit--aqua" data-objet="" data-profondeur="0.9" style={place({ x: 22, y: 26, r: 3 }, { zIndex: 7 })}>
        Mes projets sont un peu plus bas ↓
      </div>

      {OUTILS.map((o, i) => (
        <span key={o.nom} className="desk__objet desk__outil tool-sticker" data-objet="" data-profondeur={o.profondeur} style={place(o, { zIndex: 10 + i })}>
          <img src={`/images/tools/${o.icone}.svg`} alt={o.nom} width="48" height="48" draggable="false" />
        </span>
      ))}
    </div>
  );
}
