// Section « La démarche » : les étapes dans un carrousel, chacune avec un visuel.
// Un clic sur un visuel l'ouvre en grand (data-lightbox).
//
// Props : titre, etapes [{ titre, texte, image?, attendu?, liens? }]
//   image   : { src, alt, width, height, portrait? } (cadre 2:1, l'image y tient en entier)
//   attendu : texte du cadre en pointillés tant que l'image manque
//   texte   : accepte du HTML simple

const numero = (i) => String(i + 1).padStart(2, '0');

export default function Demarche({ titre = 'La démarche', etapes }) {
  return (
    <section className="section" aria-labelledby="demarche">
      <div className="container stack" style={{ '--flow': 'var(--space-l)' }}>
        <h2 id="demarche" className="reveal">{titre}</h2>
        <div className="process-carousel reveal" data-carousel-root="" data-lightbox="">
          <ol className="carousel" data-carousel="" data-carousel-start="0" tabIndex={0} aria-label="Étapes de la démarche">
            {etapes.map((etape, i) => (
              <li key={etape.titre} className="process-step">
                {etape.image ? (
                  <img
                    className={etape.image.portrait ? 'process-step__visual process-step__visual--card' : 'process-step__visual'}
                    src={etape.image.src}
                    alt={etape.image.alt}
                    width={etape.image.width}
                    height={etape.image.height}
                    loading="lazy"
                  />
                ) : (
                  <div className="process-step__visual slot"><span>Ajoute ici : {etape.attendu ?? 'un visuel'}</span></div>
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
            <button type="button" className="carousel-btn carousel-btn--prev" data-carousel-prev="" aria-label="Étape précédente">
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg>
            </button>
            <button type="button" className="carousel-btn" data-carousel-next="" aria-label="Étape suivante">
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#arrow"></use></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
