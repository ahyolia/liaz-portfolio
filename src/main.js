// Script partagé par toutes les pages.
// - Smooth scroll Lenis synchronisé avec GSAP ScrollTrigger
// - Apparition des éléments .reveal au scroll
// Si l'utilisateur préfère réduire les animations, rien n'est lancé
// et le site reste en scroll natif, contenu entièrement visible.

import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Instance Lenis (null si animations réduites) : mise en pause sous la visionneuse
let lenis = null;

function initSmoothScroll() {
  const lenis = new Lenis({ autoRaf: false });

  // Lenis prévient ScrollTrigger à chaque scroll…
  lenis.on('scroll', ScrollTrigger.update);

  // …et c'est le ticker GSAP qui fait avancer Lenis (une seule boucle d'animation)
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

function initReveal() {
  const elements = gsap.utils.toArray('.reveal');
  if (!elements.length) return;

  // Les éléments ne sont masqués qu'ici, par JS :
  // sans JavaScript, ils restent visibles.
  gsap.set(elements, { autoAlpha: 0, y: 32 });

  ScrollTrigger.batch(elements, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        overwrite: true,
      }),
  });
}

// Stickers d'outils et de compétences : apparition « pop » au scroll
function initStickers() {
  const stickers = gsap.utils.toArray('.tool-sticker, .chips > li');
  if (!stickers.length) return;

  gsap.set(stickers, { scale: 0 });

  ScrollTrigger.batch(stickers, {
    start: 'top 92%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        scale: 1,
        duration: 0.5,
        ease: 'back.out(2.2)',
        stagger: 0.05,
        overwrite: true,
      }),
  });
}

// ---- En-tête d'étude de cas ([data-case-hero]) ----------------------------
// Composants réutilisables d'une page projet (voir sections.css) :
// titre [data-split] + .mark, scène [data-stage] avec [data-depth], .floaty,
// compteurs [data-count] (data-from optionnel : valeur de départ).

// Découpe le texte d'un élément en mots <span class="split-word"><span>…
// en conservant les éléments enfants (ex. .mark), découpés eux aussi.
function splitWords(el) {
  const inners = [];
  const walk = (parent) => {
    [...parent.childNodes].forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) return walk(node);
      if (node.nodeType !== Node.TEXT_NODE) return;
      const frag = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) return frag.append(part);
        const word = document.createElement('span');
        const inner = document.createElement('span');
        word.className = 'split-word';
        inner.textContent = part;
        word.append(inner);
        frag.append(word);
        inners.push(inner);
      });
      node.replaceWith(frag);
    });
  };
  walk(el);
  return inners;
}

function initCaseHero() {
  const hero = document.querySelector('[data-case-hero]');
  if (!hero) return;

  const title = hero.querySelector('[data-split]');
  const words = title ? splitWords(title) : [];
  const stage = hero.querySelector('[data-stage]');
  const phones = stage ? stage.querySelectorAll('.phone') : [];
  const floaties = stage ? stage.querySelectorAll('.floaty') : [];

  // Entrée : texte mot à mot, captures qui glissent, flottants qui « pop »,
  // puis le surligneur se dessine
  // (chaque étape n'est ajoutée que si ses éléments existent dans la page)
  const marks = hero.querySelectorAll('.mark');
  const tl = gsap
    .timeline({ defaults: { ease: 'power3.out' } })
    .from(hero.querySelectorAll('.case-hero'), { autoAlpha: 0, y: 30, duration: 0.7 })
    .from(hero.querySelectorAll('.case-hero__tab, .eyebrow, .case-hero__num'), { autoAlpha: 0, y: 12, duration: 0.5, stagger: 0.08 }, '-=0.4')
    .from(words, { yPercent: 110, duration: 0.8, stagger: 0.045 }, '-=0.2')
    .from(hero.querySelectorAll('.lead, .cluster'), { autoAlpha: 0, y: 20, duration: 0.6, stagger: 0.1 }, '-=0.5');
  if (phones.length) tl.from(phones, { autoAlpha: 0, y: 140, rotation: (i) => (i ? 14 : -14), duration: 1.1, stagger: 0.15, ease: 'back.out(1.3)' }, 0.25);
  if (floaties.length) tl.from(floaties, { scale: 0, duration: 0.6, stagger: 0.08, ease: 'back.out(2.5)' }, '-=0.6');
  if (marks.length) tl.fromTo(marks, { backgroundSize: '0% 0.35em' }, { backgroundSize: '100% 0.35em', duration: 0.8, ease: 'power2.inOut' }, '-=0.4');

  // Parallaxe à la souris : chaque [data-depth] suit le pointeur plus ou moins fort
  if (stage && window.matchMedia('(pointer: fine)').matches) {
    const layers = [...stage.querySelectorAll('[data-depth]')].map((el) => ({
      depth: parseFloat(el.dataset.depth) || 1,
      x: gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power3' }),
      y: gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power3' }),
    }));
    const move = (dx, dy) => layers.forEach((l) => { l.x(dx * l.depth * 18); l.y(dy * l.depth * 18); });

    hero.addEventListener('pointermove', (e) => {
      const r = stage.getBoundingClientRect();
      move((e.clientX - r.left - r.width / 2) / r.width, (e.clientY - r.top - r.height / 2) / r.height);
    });
    hero.addEventListener('pointerleave', () => move(0, 0));
  }

  // Compteurs (en-tête ou section Résultats) : défilent jusqu'à leur valeur
  // à l'arrivée à l'écran
  document.querySelectorAll('[data-count]').forEach((el) => {
    const counter = { value: parseFloat(el.dataset.from ?? 0) };
    el.textContent = counter.value;
    gsap.to(counter, {
      value: parseFloat(el.dataset.count),
      duration: 1.4,
      ease: 'power2.out',
      snap: { value: 1 },
      onUpdate: () => { el.textContent = counter.value; },
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
    });
  });
}

// Carrousels : démarrage centré sur la 2e carte (les voisines dépassent
// des deux côtés ; data-carousel-start pour en choisir une autre)
// + flèches précédent / suivant. Toujours actif ; le
// défilement est instantané si l'utilisateur réduit les animations.
function initCarousels() {
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const items = carousel.children;
    const start = items[carousel.dataset.carouselStart ?? 1];
    if (start) {
      carousel.scrollLeft = start.offsetLeft - (carousel.clientWidth - start.offsetWidth) / 2;
    }

    const root = carousel.closest('[data-carousel-root]');
    const prev = root?.querySelector('[data-carousel-prev]');
    const next = root?.querySelector('[data-carousel-next]');
    if (!prev || !next || !items.length) return;

    const behavior = prefersReducedMotion ? 'auto' : 'smooth';
    const step = () => items[0].offsetWidth + parseFloat(getComputedStyle(carousel).columnGap || 0);

    prev.addEventListener('click', () => carousel.scrollBy({ left: -step(), behavior }));
    next.addEventListener('click', () => carousel.scrollBy({ left: step(), behavior }));

    // Flèches désactivées aux extrémités
    const update = () => {
      const max = carousel.scrollWidth - carousel.clientWidth - 1;
      prev.disabled = carousel.scrollLeft <= 1;
      next.disabled = carousel.scrollLeft >= max;
    };
    carousel.addEventListener('scroll', update, { passive: true });
    update();
  });
}

// Visionneuse (lightbox) : un clic sur une image d'un [data-lightbox]
// l'ouvre en grand dans un <dialog>, avec flèches (boutons ou clavier)
// pour passer aux autres images visibles du même groupe. Échap ferme.
// Les paires .swap sont déjà des boutons ; les autres images sont
// enveloppées ici dans un bouton (sans JS, elles restent de simples images).
function initLightbox() {
  const groups = document.querySelectorAll('[data-lightbox]');
  if (!groups.length) return;

  const dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.setAttribute('aria-label', 'Image agrandie');
  dialog.innerHTML = `
    <figure class="lightbox__figure"><img alt="" /><figcaption></figcaption></figure>
    <button type="button" class="lightbox__btn lightbox__close" aria-label="Fermer">×</button>
    <button type="button" class="lightbox__btn lightbox__prev" aria-label="Image précédente"><svg class="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg></button>
    <button type="button" class="lightbox__btn lightbox__next" aria-label="Image suivante"><svg class="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg></button>`;
  document.body.append(dialog);

  const img = dialog.querySelector('img');
  const caption = dialog.querySelector('figcaption');
  let list = [];
  let index = 0;

  const show = (i) => {
    index = (i + list.length) % list.length;
    img.src = list[index].currentSrc || list[index].src;
    img.alt = list[index].alt;
    caption.textContent = list[index].alt;
    dialog.classList.toggle('lightbox--single', list.length < 2);
  };

  const open = (group, target) => {
    list = [...group.querySelectorAll('img')].filter((el) => !el.closest('[hidden]'));
    show(Math.max(0, list.indexOf(target)));
    dialog.showModal();
    lenis?.stop();
  };

  dialog.addEventListener('close', () => lenis?.start());
  dialog.querySelector('.lightbox__close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.lightbox__prev').addEventListener('click', () => show(index - 1));
  dialog.querySelector('.lightbox__next').addEventListener('click', () => show(index + 1));
  // Clic sur le fond (hors image et boutons) : fermeture
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  groups.forEach((group) => {
    group.querySelectorAll('img').forEach((el) => {
      if (el.closest('button')) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'zoom';
      btn.setAttribute('aria-label', `Agrandir : ${el.alt}`);
      el.replaceWith(btn);
      btn.append(el);
    });

    group.addEventListener('click', (e) => {
      const trigger = e.target.closest('.zoom, [data-swap]');
      if (!trigger || !group.contains(trigger)) return;
      const imgs = trigger.querySelectorAll('img');
      // Paire : on ouvre la face affichée (le verso si la souris la survole)
      open(group, imgs.length > 1 && trigger.matches(':hover') ? imgs[1] : imgs[0]);
    });
  });
}

// Galerie filtrable : les pastilles [data-filter] masquent les items
// dont le data-cat ne correspond pas. Boutons et items sont relus à chaque
// clic (délégation) : les images ajoutées après coup sont filtrées aussi.
function initGalleryFilters() {
  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    gallery.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-filter]');
      if (!btn || !gallery.contains(btn)) return;
      const filter = btn.dataset.filter;
      gallery.querySelectorAll('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      gallery.querySelectorAll('[data-cat]').forEach((item) => {
        item.hidden = filter !== 'all' && item.dataset.cat !== filter;
      });
    });
  });
}

initCarousels();
initLightbox();
initGalleryFilters();

if (!prefersReducedMotion) {
  lenis = initSmoothScroll();
  initCaseHero();
  initReveal();
  initStickers();
}
