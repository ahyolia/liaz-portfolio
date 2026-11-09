// Section « La démarche » : les étapes dans un carrousel, chacune avec un visuel.
// Un clic sur un visuel l'ouvre en grand (data-lightbox).
//
// Props : titre, etapes [{ titre, texte, image? | images?, attendu?, liens? }]
//   image   : { src, alt, width, height, portrait? } (cadre 2:1, l'image y tient en entier)
//   images  : plusieurs images côte à côte dans le même cadre (ex. écrans mobiles)
//   video   : { src, poster, alt, width, height } courte vidéo muette à la place de l'image
//   attendu : texte du cadre en pointillés tant que l'image manque
//   texte   : accepte du HTML simple
import { t } from '../../i18n';

const numero = (i) => String(i + 1).padStart(2, '0');

// Tout en paysage → grille ; tout en portrait → éventail ; mélange → mosaïque
function dispositionImages(images) {
  const paysages = images.filter((im) => im.width > im.height).length;
  if (paysages === images.length) return 'grille';
  if (paysages === 0) return 'multi';
  return 'mosaique';
}

export default function Demarche({ titre, etapes, lang = 'fr' }) {
  const ui = t(lang);
  return (
    <section className="section" aria-labelledby="demarche">
      <div className="container stack" style={{ '--flow': 'var(--space-l)' }}>
        <h2 id="demarche" className="reveal">{titre ?? ui.demarche}</h2>
        <div className="process-carousel reveal" data-carousel-root="" data-lightbox="">
          <ol className="carousel" data-carousel="" data-carousel-start="0" tabIndex={0} aria-label={ui.etapes}>
            {etapes.map((etape, i) => (
              <li key={etape.titre} className="process-step">
                {etape.images ? (
                  // Plusieurs images côte à côte (ex. écrans mobiles), dans le même cadre
                  // Portraits (pages, téléphones) en éventail ; paysages en grille, côte à côte ;
                  // formats mélangés (photos de tournage) en mosaïque, la 1re en grand
                  <div className={`process-step__visual process-step__visual--${dispositionImages(etape.images)}`}>
                    {etape.images.map((im) => (
                      <img key={im.src} src={im.src} alt={im.alt} width={im.width} height={im.height} loading="lazy" />
                    ))}
                  </div>
                ) : etape.video ? (
                  // Courte vidéo muette (ex. capture d'écran filmée), lancée au clic
                  <video
                    className="process-step__visual process-step__visual--video"
                    src={etape.video.src}
                    poster={etape.video.poster}
                    width={etape.video.width}
                    height={etape.video.height}
                    aria-label={etape.video.alt}
                    controls
                    muted
                    loop
                    playsInline
                    preload="none"
                  />
                ) : etape.image ? (
                  <img
                    className={etape.image.portrait ? 'process-step__visual process-step__visual--card' : 'process-step__visual'}
                    src={etape.image.src}
                    alt={etape.image.alt}
                    width={etape.image.width}
                    height={etape.image.height}
                    loading="lazy"
                  />
                ) : (
                  <div className="process-step__visual slot"><span>{ui.ajouteIci} : {etape.attendu ?? ui.unVisuel}</span></div>
                )}
                <p className="process-step__num annotation">{numero(i)}</p>
                <h3>{etape.titre}</h3>
                <p dangerouslySetInnerHTML={{ __html: etape.texte }} />
                {etape.liens && (
                  <p className="process-step__links">
                    {etape.liens.map((lien) => (
                      <a key={lien.href} href={lien.href}>{lien.label} <span aria-hidden="true">↗</span></a>
                    ))}
                  </p>
                )}
              </li>
            ))}
          </ol>
          <div className="carousel-nav">
            <button type="button" className="carousel-btn carousel-btn--prev" data-carousel-prev="" aria-label={ui.etapePrec}>
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg>
            </button>
            <button type="button" className="carousel-btn" data-carousel-next="" aria-label={ui.etapeSuiv}>
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
