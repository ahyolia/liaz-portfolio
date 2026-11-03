import { competences, PARCOURS, NIVEAUX_AFFICHES } from '../../data/competences';
import { projets, lienProjet } from '../../data/projets';

// Niveaux choisis dans NIVEAUX_AFFICHES, plus ceux qu'une fiche de réflexion mobilise
const tableau = competences
  .map((c) => ({ ...c, niveaux: c.niveaux.filter((n) => NIVEAUX_AFFICHES.includes(n.niveau) || n.ac.some((a) => a.fiches?.length)) }))
  .filter((c) => c.niveaux.length > 0);

export const metadata = {
  title: "Volet académique — Compétences — Camélia Amin Handoyo",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main id="contenu">

      <section className="section" aria-labelledby="titre-page">
        <div className="container stack gridpaper academic-head" style={{ "--flow": "var(--space-m)" }}>
          <nav aria-label="Volet académique">
            <ul className="academic-nav">
              <li><a href="/academique/" aria-current="page">Compétences et AC</a></li>
              <li><a href="/academique/journal/">Journal des fiches</a></li>
            </ul>
          </nav>
          <p className="academic-stamp">Réservé à l'équipe pédagogique</p>
          <p className="eyebrow">Volet académique</p>
          <h1 id="titre-page">Compétences et apprentissages critiques</h1>
          <p className="academic-parcours">
            <span className="sticker">Parcours {PARCOURS}</span>
            <span className="sticker sticker--aqua">BUT MMI 3 · Alternance chez OFFRATEL Lagoon</span>
          </p>
          <p className="lead">
            Voici comment je valide les deux compétences de ma 3<sup>e</sup> année, <strong>Développer</strong> et <strong>Entreprendre</strong>, ainsi que les apprentissages de 2<sup>e</sup> année que mes fiches mobilisent.
            Pour chaque apprentissage critique, je renvoie d'abord à ma fiche de réflexion, puis aux projets de mon portfolio qui le prouvent,
            de mes SAÉ à mes missions en entreprise.
          </p>
        </div>
      </section>

      {/* Une feuille de cahier par compétence ; contenu dans src/data/competences.js */}
      {tableau.map((competence) => (
        <section key={competence.nom} className="section competence" aria-labelledby={`comp-${competence.nom}`}>
          <div className="container">
            <div className="notebook competence__sheet reveal">
              <span className="stamp stamp--ink competence__stamp" aria-hidden="true">BUT {Math.max(...competence.niveaux.map((n) => n.niveau))}</span>
              <h2 id={`comp-${competence.nom}`}>{competence.nom}</h2>
              <p className="annotation">{competence.intitule}</p>

              {competence.niveaux.map((niveau) => (
                <div key={niveau.titre} className="competence__niveau">
                  <h3>{niveau.titre}</h3>
                  <ol className="list-reset ac-entries" role="list">
                    {niveau.ac.map((ac) => {
                      const projetsAc = ac.projets.map((slug) => projets.find((p) => p.slug === slug)).filter(Boolean);
                      const fiches = ac.fiches ?? [];
                      return (
                        <li key={ac.code} className="ac-entry">
                          <h4 className="ac-entry__titre"><span className="ac-entry__code">{ac.code}</span> {ac.intitule}</h4>
                          <div className="ac-entry__preuves">
                            <p className="ac-entry__groupe">
                              <span className="ac-entry__label">Fiche</span>
                              {fiches.length > 0
                                ? <span className="ac-postits">{fiches.map((f) => <a key={f.href} className="ac-lien ac-lien--fiche" href={f.href}>{f.titre}</a>)}</span>
                                : <em className="ac-entry__vide">à venir</em>}
                            </p>
                            <p className="ac-entry__groupe">
                              <span className="ac-entry__label">Projets</span>
                              {projetsAc.length > 0
                                ? <span className="ac-postits">{projetsAc.map((p) => <a key={p.slug} className="ac-lien" href={lienProjet(p)}>{p.titre}</a>)}</span>
                                : <em className="ac-entry__vide">aucun pour l'instant</em>}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
