// Section « Mon apport » : une fiche papier par casquette (la 1re quadrillée,
// la 2e rose), compétences en stickers colorés, tampon optionnel entre les deux.
//
// Props : titre, casquettes [{ titre, texte, competences }],
// tampon { texte, label } (texte en HTML, ex. "~180<br />commits" ; label = version lue)

const PAPIERS = ['contrib__card gridpaper', 'contrib__card contrib__card--pink'];
const SCOTCHS = ['tape tape--tl', 'tape tape--tr'];

export default function Apport({ titre = 'Mon apport', casquettes, tampon }) {
  return (
    <section className="section" aria-labelledby="role">
      <div className="container stack" style={{ '--flow': 'var(--space-xl)' }}>
        <h2 id="role" className="reveal">{titre}</h2>
        <div className="contrib">
          {casquettes.map((c, i) => (
            <article key={c.titre} className={`${PAPIERS[i % 2]} reveal`}>
              <span className={SCOTCHS[i % 2]} aria-hidden="true"></span>
              <p className="contrib__kicker annotation">casquette n°{i + 1}</p>
              <h3>{c.titre}</h3>
              <p>{c.texte}</p>
              <ul className="chips list-reset" role="list">
                {c.competences.map((comp, j) => <li key={j}>{comp}</li>)}
              </ul>
            </article>
          ))}
          {tampon && <p className="contrib__stamp stamp" aria-label={tampon.label} dangerouslySetInnerHTML={{ __html: tampon.texte }} />}
        </div>
      </div>
    </section>
  );
}
