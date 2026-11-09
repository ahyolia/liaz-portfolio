// Formations (page À propos) : une feuille quadrillée, une ligne par diplôme.
// Années en manuscrit, diplôme et établissement, matières en pastilles,
// et un tampon (En cours, Obtenu). Données : src/data/formations.js.
import { t } from '../i18n';

export default function Formations({ formations, lang = 'fr' }) {
  return (
    <ol className="formations gridpaper list-reset reveal">
      {formations.map((f) => (
        <li key={f.diplome} className="formation">
          <p className="formation__annees annotation">{f.annees}</p>
          <div className="formation__corps">
            <h3 className="formation__diplome">{f.diplome}</h3>
            <p className="formation__etablissement">{f.etablissement}</p>
            {f.parcours && <p className="formation__parcours"><span className="hl">{f.parcours}</span></p>}
            <ul className="formation__matieres list-reset">
              {f.matieres.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
          <span className={f.statut === t(lang).enCours ? 'stamp formation__stamp' : 'stamp stamp--ink formation__stamp'}>{f.statut}</span>
        </li>
      ))}
    </ol>
  );
}
