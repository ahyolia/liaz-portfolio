'use client';
// Charge src/main.js (Lenis, GSAP, carrousels, galerie, visionneuse…) une fois
// la page affichée. Les liens du site sont de simples <a> : chaque navigation
// recharge la page, donc le script s'exécute une fois par page.
import { useEffect } from 'react';

export default function Animations() {
  useEffect(() => {
    import('../main.js');
  }, []);
  return null;
}
