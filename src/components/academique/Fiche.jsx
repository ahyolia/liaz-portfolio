// Gabarit des fiches de réflexion du volet académique (src/app/academique/journal/*).
// Une fiche s'écrit avec ces briques, dans cet ordre :
//
//   <Fiche titre intro meta={[{ label, valeur }]} sections={[{ id, titre }]}>
//     <Section id numero titre note>   feuille de cahier numérotée, note manuscrite
//       <AcVises ac={[{ code, intitule, detail? }]} ce={[{ code, intitule }]} />
//       <Preuves liens={[{ href, titre, detail }]} />
//       <Bloc titre ac={['AC34.01']} technique={…}>texte</Bloc>   sous-partie de la démonstration
//       <JeNous nous={…} je={[{ titre, points: [] }]} />
//       <Pivots lignes={[{ obstacle, solution, apprentissage }]} />
//     </Section>
//   </Fiche>
//
import { competences } from '../../data/competences';

// Les styles sont dans src/styles/base.css (section « Fiches de réflexion »).

export function Fiche({ titre, intro, meta, sections, children }) {
  return (
    <main id="contenu">

      <article>
        <header className="section">
          <div className="container stack gridpaper academic-head" style={{ '--flow': 'var(--space-l)' }}>
            <nav aria-label="Volet académique">
              <ul className="academic-nav">
                <li><a href="/academique/">Compétences et AC</a></li>
                <li><a href="/academique/journal/" aria-current="true">Journal des fiches</a></li>
              </ul>
            </nav>
            <p className="academic-stamp">Réservé à l'équipe pédagogique</p>

            <div className="fiche-head">
              <div className="stack" style={{ '--flow': 'var(--space-s)' }}>
                <p className="eyebrow">Fiche de réflexion</p>
                <h1>{titre}</h1>
                <p className="lead">{intro}</p>
              </div>

              <div className="receipt-wrap fiche-head__ticket">
                <div className="receipt stack">
                  <dl className="stack">
                    {meta.map((m, i) => (
                      <div key={m.label} className={i === meta.length - 1 ? 'receipt__row receipt__total' : 'receipt__row'}>
                        <dt>{m.label}</dt><dd>{m.valeur}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            {/* Sommaire : intercalaires numérotés */}
            <nav aria-labelledby="titre-sommaire">
              <h2 id="titre-sommaire" className="visually-hidden">Sommaire de la fiche</h2>
              <ol className="fiche-sommaire list-reset" role="list">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}><span className="fiche-sommaire__num">{String(i + 1).padStart(2, '0')}</span> {s.titre} <span className="fiche-sommaire__fleche" aria-hidden="true">↓</span></a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </header>

        <div className="container stack" style={{ '--flow': 'var(--space-xl)' }}>
          {children}
        </div>
      </article>
    </main>
  );
}

/** Une partie de la fiche : feuille de cahier avec numéro, titre et note manuscrite */
export function Section({ id, numero, titre, note, children }) {
  return (
    <section className="notebook fiche-section reveal" aria-labelledby={id}>
      <header className="fiche-section__head">
        <span className="fiche-section__num" aria-hidden="true">{String(numero).padStart(2, '0')}</span>
        <div>
          <h2 id={id}>{titre}</h2>
          {note && <p className="annotation fiche-section__note">{note}</p>}
        </div>
      </header>
      {children}
    </section>
  );
}

/** Liste des AC (et des composantes essentielles) visés par la fiche */
export function AcVises({ ac, ce = [] }) {
  return (
    <>
      <ul className="list-reset fiche-ac" role="list">
        {ac.map((a) => (
          <li key={a.code}>
            <p className="fiche-ac__titre"><span className="fiche-ac__code">{a.code}</span> {a.intitule}</p>
            {a.detail && <p className="fiche-ac__detail">{a.detail}</p>}
          </li>
        ))}
      </ul>
      {ce.length > 0 && (
        <>
          <h3 className="fiche-soustitre">Composantes essentielles</h3>
          <ul className="list-reset fiche-ac" role="list">
            {ce.map((c) => (
              <li key={c.code}><p className="fiche-ac__titre"><span className="fiche-ac__code">{c.code}</span> {c.intitule}</p></li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

/** Liens de preuve : titre en lien, puis ce qu'on y trouve */
export function Preuves({ liens }) {
  return (
    <ul className="list-reset fiche-preuves" role="list">
      {liens.map((l) => (
        <li key={l.href}>
          <a href={l.href}>{l.titre} <span aria-hidden="true">↗</span></a>
          <span className="fiche-preuves__detail">{l.detail}</span>
        </li>
      ))}
    </ul>
  );
}

// Intitulés des composantes essentielles citées dans les fiches (les AC viennent
// du référentiel, src/data/competences.js)
const CE = {
  'CE4.01': "Respecter les standards et l'accessibilité",
  'CE4.03': 'Produire un code fonctionnel, structuré et sécurisé',
  'CE4.04': 'Utiliser les outils de développement collaboratif',
  'CE4.05': 'Sécuriser les systèmes et protéger les données',
  'CE5.02': 'Collaborer avec les parties prenantes du projet',
};
const AC = Object.fromEntries(
  competences.flatMap((c) => c.niveaux.flatMap((n) => n.ac.map((a) => [a.code, a.intitule]))),
);

/** Sous-partie de la démonstration : un titre et un texte simple ; dans la marge de
    droite, ce que le bloc prouve (code + intitulé) ; en option le détail technique */
export function Bloc({ titre, ac = [], technique, children }) {
  return (
    <div className="fiche-bloc">
      <h3>{titre}</h3>
      <div className="fiche-bloc__texte">{children}</div>
      {technique && <p className="fiche-bloc__tech"><span>En détail</span> {technique}</p>}
      {ac.length > 0 && (
        <aside className="fiche-bloc__preuve" aria-label="Ce que ce bloc prouve">
          <p className="fiche-bloc__preuve-titre">ce que ça prouve</p>
          <ul className="list-reset" role="list">
            {ac.map((c) => (
              <li key={c}><span className="fiche-bloc__code">{c}</span> {AC[c] ?? CE[c] ?? ''}</li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}

/** « Je vs Nous » : deux fiches côte à côte, l'équipe puis mon apport */
export function JeNous({ nous, je }) {
  return (
    <div className="fiche-jenous">
      <div className="fiche-carte fiche-carte--nous">
        <span className="tape" aria-hidden="true"></span>
        <h3>Nous</h3>
        {nous}
      </div>
      <div className="fiche-carte fiche-carte--je">
        <span className="tape" aria-hidden="true"></span>
        <h3>Je</h3>
        {je.map((g) => (
          <div key={g.titre}>
            {g.titre && <p className="fiche-carte__groupe">{g.titre}</p>}
            <ul>{g.points.map((p) => <li key={typeof p === 'string' ? p : p.key}>{p}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Tableau obstacle → solution → ce que j'en retiens */
export function Pivots({ lignes }) {
  return (
    <ol className="list-reset fiche-pivots" role="list">
      {lignes.map((p) => (
        <li key={p.obstacle}>
          <p className="fiche-pivots__obstacle">{p.obstacle}</p>
          <p><span className="fiche-pivots__label">Ce que j'ai fait</span> {p.solution}</p>
          <p><span className="fiche-pivots__label">Ce que j'en retiens</span> {p.apprentissage}</p>
        </li>
      ))}
    </ol>
  );
}
