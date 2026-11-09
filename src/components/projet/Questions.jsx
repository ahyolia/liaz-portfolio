// Section « problème » : les questions de conception et les décisions prises,
// numérotées sur une page de cahier.
//
// Props : titre, questions [{ question, reponse }] (reponse accepte du HTML simple)
import { t } from '../../i18n';

export default function Questions({ titre, questions, lang = 'fr' }) {
  return (
    <section className="section" aria-labelledby="questions">
      <div className="container">
        {/* Le masque des trous coupe l'ombre : elle est portée par .decisions-wrap */}
        <div className="decisions-wrap reveal">
          <div className="notebook decisions">
            <h2 id="questions">{titre ?? t(lang).questions}</h2>
            <ol className="list-reset" role="list">
              {questions.map((q) => (
                <li key={q.question}>
                  <h3>{q.question}</h3>
                  <p dangerouslySetInnerHTML={{ __html: q.reponse }} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
