'use client';
// « Table de travail » du hero de l'accueil : des objets posés de travers
// (ticket, stickers perso, post-it) que l'on peut déplacer à la souris ou
// au doigt. Ils suivent aussi légèrement la souris (parallaxe, selon
// `profondeur`). Si un objet est un lien, un clic court l'ouvre et un glisser
// le déplace sans l'ouvrir.
//
// Pour ajouter un sticker : une entrée dans STICKERS, avec sa position de départ
// (x, y en % de la table), son inclinaison r (degrés) et sa profondeur.
import { useEffect, useRef } from 'react';
import { jouer } from '../sons.js';

// Stickers de mon pack « 20 ans » (public/images/perso/stickers/), découpés
// de la planche du projet Sticker pack. w = largeur sur grand écran.
const STICKERS = [
  { nom: 'Moi petite, avec une couronne de fleurs', image: 'mini-moi-couronne', x: 3, y: 4, r: -6, w: 4.5, profondeur: 1.6 },
  { nom: 'Un coq violet', image: 'coq', x: 12, y: 56, r: 8, w: 7, profondeur: 1.2 },
  { nom: 'Un motif de batik rouge', image: 'batik', x: 37, y: 64, r: -10, w: 5, profondeur: 1.8 },
  { nom: 'Un timbre avec ma photo et mon chat', image: 'timbre', x: 40, y: 2, r: 6, w: 7, profondeur: 1.3 },
  { nom: 'Une fleur orange', image: 'fleur', x: 51, y: 32, r: 12, w: 6, profondeur: 1.5 },
  { nom: 'Ma signature LIAZ', image: 'signature-liaz', x: 61, y: 6, r: -5, w: 8, profondeur: 1.7 },
  { nom: 'Moi petite, avec un chapeau de fête', image: 'mini-moi-chapeau', x: 13, y: 0, r: 5, w: 4.5, profondeur: 1.4 },
];

const SEUIL_GLISSER = 6; // px : en dessous, c'est un clic

export default function HeroDesk({ children }) {
  const tableRef = useRef(null);

  useEffect(() => {
    const table = tableRef.current;
    // Zone où l'on peut poser les objets : toute la section hero (titre compris)
    const zone = table.closest('.hero') || table;
    const objets = [...table.querySelectorAll('[data-objet]')];
    const etat = new Map(objets.map((el) => [el, { dx: 0, dy: 0, px: 0, py: 0 }]));
    const animer = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Au-dessus de tous les z-index de départ (stickers : 10 + i)
    let zMax = 100;
    // Un seul signal pour retirer tous les écouteurs au démontage (sinon, en
    // dev, React monte l'effet deux fois et chaque objet a deux gestionnaires
    // qui se contredisent : l'objet saute ou disparaît pendant le glisser)
    const ctrl = new AbortController();
    const { signal } = ctrl;

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

    // Glisser-déposer, borné à la section hero
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
      if (!s.glisse) { s.glisse = true; el.classList.add('is-dragging'); jouer('pop'); }
      const t = zone.getBoundingClientRect();
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
      if (s.glisse) {
        jouer('pose');
        el.addEventListener('click', (c) => c.preventDefault(), { once: true, capture: true });
      }
      setTimeout(() => { s.glisse = false; }, 0);
    };

    table.addEventListener('pointermove', survol, { signal });
    table.addEventListener('pointerleave', sortie, { signal });
    objets.forEach((el) => {
      el.addEventListener('pointerdown', debut, { signal });
      el.addEventListener('pointermove', deplacer, { signal });
      el.addEventListener('pointerup', fin, { signal });
      el.addEventListener('pointercancel', fin, { signal });
      el.addEventListener('dragstart', (d) => d.preventDefault(), { signal });
    });
    return () => ctrl.abort();
  }, []);

  const place = (o, extra = {}) => ({ '--x': `${o.x}%`, '--y': `${o.y}%`, '--r': `${o.r}deg`, ...extra });

  return (
    <div className="desk reveal" ref={tableRef}>
      <p className="desk__astuce annotation" aria-hidden="true">psst… tout se déplace !</p>

      {/* Le ticket « Au menu » (passé par la page) */}
      <div className="desk__objet desk__ticket" data-objet="" data-profondeur="0.5" style={place({ x: 76, y: 10, r: 4 }, { zIndex: 8 })}>
        {children}
      </div>

      <div className="desk__objet desk__postit postit" data-objet="" data-profondeur="1.1" style={place({ x: 60, y: 62, r: -5 }, { zIndex: 6 })}>
        Bienvenue sur ma table de travail ✶
      </div>

      <div className="desk__objet desk__postit postit postit--aqua" data-objet="" data-profondeur="0.9" style={place({ x: 22, y: 26, r: 3 }, { zIndex: 7 })}>
        Mes projets sont un peu plus bas ↓
      </div>

      {STICKERS.map((o, i) => (
        <span key={o.image} className="desk__objet desk__sticker" data-objet="" data-profondeur={o.profondeur} style={place(o, { zIndex: 10 + i, '--w': `${o.w}rem` })}>
          <img src={`/images/perso/stickers/${o.image}.png`} alt={o.nom} draggable="false" />
        </span>
      ))}
    </div>
  );
}
