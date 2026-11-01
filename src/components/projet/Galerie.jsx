// Section « rendu final » : mosaïque filtrable (pastilles), agrandissement au clic.
//
// Props : titre, intro (HTML simple), filtres [{ id, label }],
// items [{ cat, legende, variante?, images }]
//   images  : 1 image = image seule ; 2 images = paire (recto/verso), la 2e au survol
//   image   : { src, alt, width, height, fond? } (fond = couleur du panneau derrière)
//   variante: 'logo' ou 'icon' pour poser l'image sur un panneau avec marge ;
//             'page' pour une page de PDF (vignette réduite au haut de la page)
//   cat     : doit correspondre à l'id d'un filtre

function Image({ img }) {
  return (
    <img
      src={img.src}
      alt={img.alt}
      width={img.width}
      height={img.height}
      loading="lazy"
      style={img.fond ? { '--swap-bg': img.fond } : undefined}
    />
  );
}

export default function Galerie({ titre, intro, filtres, items }) {
  return (
    <section className="section" aria-labelledby="galerie">
      <div className="container stack" style={{ '--flow': 'var(--space-l)' }}>
        <h2 id="galerie" className="reveal">{titre}</h2>
        {intro && <p className="section-intro reveal" dangerouslySetInnerHTML={{ __html: intro }} />}
        <div className="gallery-panel reveal" data-gallery="" data-lightbox="">
          <div className="gallery-filters" role="group" aria-label="Filtrer la galerie">
            <button type="button" aria-pressed="true" data-filter="all">Tout</button>
            {filtres.map((f) => (
              <button key={f.id} type="button" aria-pressed="false" data-filter={f.id}>{f.label}</button>
            ))}
          </div>
          <div className="gallery">
            {items.map((item) => (
              <figure
                key={item.legende}
                className={item.variante ? `gallery__item gallery__item--${item.variante}` : 'gallery__item'}
                data-cat={item.cat}
              >
                {item.images.length > 1 ? (
                  <button className="swap" type="button" data-swap="">
                    {item.images.map((img) => <Image key={img.src} img={img} />)}
                  </button>
                ) : (
                  <Image img={item.images[0]} />
                )}
                <figcaption>{item.legende}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
