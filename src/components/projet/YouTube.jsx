'use client';
// Section vidéo hébergée ailleurs (YouTube par défaut, ou un autre lecteur
// comme celui de Behance) : affiche d'abord une image et un bouton lecture ;
// le lecteur ne se charge qu'au clic. La page reste légère et aucun cookie
// tiers n'est déposé avant le clic (YouTube passe par youtube-nocookie).
//
// Props : titre, intro (HTML simple), poster (image d'aperçu), legende (titre
// de la vidéo, lu par les lecteurs d'écran), et :
//   - YouTube : id (identifiant de la vidéo)
//   - autre lecteur : embed (URL du lecteur), lien (page de la vidéo),
//     plateforme (nom affiché, ex. « Behance »)
import { useState } from 'react';

export default function YouTube({ titre = 'Le film', intro, id, embed, lien, plateforme = 'YouTube', poster, legende }) {
  const [lance, setLance] = useState(false);
  const src = embed ?? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  const page = lien ?? `https://www.youtube.com/watch?v=${id}`;

  return (
    <section className="section" aria-labelledby="video">
      <div className="container stack" style={{ '--flow': 'var(--space-l)' }}>
        <h2 id="video" className="reveal">{titre}</h2>
        {intro && <p className="section-intro reveal" dangerouslySetInnerHTML={{ __html: intro }} />}
        <figure className="case-video case-video--youtube reveal">
          {lance ? (
            <iframe
              src={src}
              title={legende}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button type="button" className="youtube-facade" onClick={() => setLance(true)} aria-label={`Lire la vidéo : ${legende}`}>
              <img src={poster} alt="" width="1280" height="720" loading="lazy" />
              <span className="youtube-facade__play" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
              </span>
            </button>
          )}
        </figure>
        <p className="youtube-note">
          La vidéo est hébergée sur {plateforme}, qui se charge au clic.{' '}
          <a href={page}>Voir sur {plateforme} <span aria-hidden="true">↗</span></a>
        </p>
      </div>
    </section>
  );
}
