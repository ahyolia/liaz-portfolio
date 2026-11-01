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

if (!prefersReducedMotion) {
  initSmoothScroll();
  initReveal();
}
