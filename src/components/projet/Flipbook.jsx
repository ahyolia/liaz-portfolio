'use client';
// Livre feuilletable (bibliothèque page-flip) : on tourne les pages à la souris,
// au doigt, au clavier ou avec les flèches. Chargé seulement dans le navigateur.
//
// Props : titre, intro (HTML simple), pages [{ src, alt }] (même format pour
// toutes, la 1re et la dernière servent de couvertures), largeur et hauteur
// d'une page en px (pour le ratio), legende (texte sous le livre)
import { useEffect, useRef, useState } from 'react';
import { jouer } from '../../sons.js';

export default function Flipbook({ titre = 'Feuilleter le livre', intro, pages, largeur, hauteur, legende }) {
  const livreRef = useRef(null);
  const flipRef = useRef(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    let annule = false;
    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    import('page-flip').then(({ PageFlip }) => {
      if (annule || !livreRef.current) return;
      const flip = new PageFlip(livreRef.current, {
        width: largeur,
        height: hauteur,
        size: 'stretch',
        minWidth: 200,
        maxWidth: largeur,
        minHeight: 280,
        maxHeight: hauteur,
        showCover: true,
        maxShadowOpacity: 0.4,
        flippingTime: reduit ? 1 : 800,
        mobileScrollSupport: true,
      });
      flip.loadFromHTML(livreRef.current.querySelectorAll('.flipbook__page'));
      flip.on('flip', (e) => setPage(e.data));
      // Son de page qui tourne, au début de chaque tour (flèches, clavier, glisser)
      flip.on('changeState', (e) => { if (e.data === 'flipping') jouer('page'); });
      flipRef.current = flip;
    });

    return () => {
      annule = true;
      flipRef.current?.destroy();
      flipRef.current = null;
    };
  }, [largeur, hauteur]);

  const precedent = () => flipRef.current?.flipPrev();
  const suivant = () => flipRef.current?.flipNext();
  const clavier = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); precedent(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); suivant(); }
  };

  return (
    <section className="section" aria-labelledby="flipbook">
      <div className="container stack" style={{ '--flow': 'var(--space-l)' }}>
        <h2 id="flipbook" className="reveal">{titre}</h2>
        {intro && <p className="section-intro reveal" dangerouslySetInnerHTML={{ __html: intro }} />}

        <div className="flipbook" role="group" aria-roledescription="livre" aria-label={legende} tabIndex={0} onKeyDown={clavier}>
          <div className="flipbook__livre" ref={livreRef}>
            {pages.map((p, i) => (
              <div key={p.src} className="flipbook__page" data-density={i === 0 || i === pages.length - 1 ? 'hard' : 'soft'}>
                <img src={p.src} alt={p.alt} width={largeur} height={hauteur} loading={i < 4 ? 'eager' : 'lazy'} draggable="false" />
              </div>
            ))}
          </div>

          <div className="flipbook__nav">
            <button type="button" className="carousel-btn carousel-btn--prev" onClick={precedent} data-son-muet="" aria-label="Page précédente" disabled={page === 0}>
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg>
            </button>
            <p className="flipbook__compteur annotation" aria-live="polite">page {page + 1} / {pages.length}</p>
            <button type="button" className="carousel-btn" onClick={suivant} data-son-muet="" aria-label="Page suivante" disabled={page >= pages.length - 1}>
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
