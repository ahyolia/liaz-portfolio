// Section vidéo de démonstration : un enregistrement d'écran avec son,
// avec les commandes du lecteur. La vidéo ne se charge qu'au clic (preload="none"),
// l'image d'aperçu (poster) s'affiche en attendant.
//
// Props : titre, intro (HTML simple), src (WebM ou MP4), poster, width, height,
// legende (texte lu par les lecteurs d'écran)
import { t } from '../../i18n';

export default function Video({ titre, intro, src, poster, width, height, legende, lang = 'fr' }) {
  return (
    <section className="section" aria-labelledby="video">
      <div className="container stack" style={{ '--flow': 'var(--space-l)' }}>
        <h2 id="video" className="reveal">{titre ?? t(lang).video}</h2>
        {intro && <p className="section-intro reveal" dangerouslySetInnerHTML={{ __html: intro }} />}
        <figure className="case-video reveal">
          <video
            controls
            playsInline
            preload="none"
            poster={poster}
            width={width}
            height={height}
            aria-label={legende}
          >
            <source src={src} type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
          </video>
        </figure>
      </div>
    </section>
  );
}
