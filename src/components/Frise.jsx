// Frise de cartes (page À propos) : une carte par étape, côte à côte sous une
// fine ligne d'encre, de la plus récente à la plus ancienne. Sert aux
// expériences pros (src/data/experiences.js).
//
// Chaque étape : { annee, type, duree?, titre, entreprise, lieu?, logo?, resume?, missions }
//   missions : [{ titre, texte, liens?, images? }]
//   les images de toutes les missions forment une rangée de vignettes (visionneuse)

export default function Frise({ etapes }) {
  return (
    <ol className="xp list-reset">
      {etapes.map((xp) => {
        const images = xp.missions.flatMap((m) => m.images ?? []);
        return (
          <li key={xp.titre} className="xp__item reveal">
            <p className="xp__repere">
              <span className="xp__annee">{xp.annee}</span>
              <span className="xp__type">{xp.duree ? `${xp.type} · ${xp.duree}` : xp.type}</span>
            </p>
            <article className="xp__carte">
              <span className="tape" aria-hidden="true"></span>
              <div className="xp__tete">
                {xp.logo && (
                  <span className="xp__logo">
                    <img src={xp.logo.src} alt="" width={xp.logo.width} height={xp.logo.height} loading="lazy" />
                  </span>
                )}
                <div>
                  <h3 className="xp__titre">{xp.titre}</h3>
                  <p className="xp__entreprise">{xp.entreprise}{xp.lieu && <span> · {xp.lieu}</span>}</p>
                </div>
              </div>
              {xp.resume && <p className="xp__resume annotation">{xp.resume}</p>}
              <ul className="xp__missions list-reset">
                {xp.missions.map((m) => (
                  <li key={m.titre} className="xp__mission">
                    <h4 className="xp__mission-titre">{m.titre}</h4>
                    <p className="xp__mission-texte">{m.texte}</p>
                    {m.liens?.length > 0 && (
                      <p className="xp__liens">
                        {m.liens.map((l) => <a key={l.href} href={l.href}>{l.titre} →</a>)}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              {images.length > 0 && (
                // Toutes les captures de l'étape : une rangée de vignettes,
                // un clic ouvre la visionneuse et permet de les faire défiler
                <div className="xp__vignettes" data-lightbox="" style={{ '--reste': `"+${Math.max(0, images.length - 4)}"` }} data-plus={images.length > 4 ? '' : undefined}>
                  {images.map((im) => <img key={im.src} src={im.src} alt={im.alt} width={im.width} height={im.height} loading="lazy" />)}
                </div>
              )}
            </article>
          </li>
        );
      })}
    </ol>
  );
}
