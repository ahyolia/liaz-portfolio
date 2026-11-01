export const metadata = {
  title: "Mentions légales et confidentialité — Camélia Amin Handoyo",
};

export default function Page() {
  return (
    <main id="contenu">
      <section className="section" aria-labelledby="titre-page">
        <div className="container stack" style={{ "--flow": "var(--space-l)" }}>
          <h1 id="titre-page">Mentions légales</h1>
          <p><span className="todo">À VÉRIFIER ET COMPLÉTER</span></p>

          <div className="receipt-wrap">
            <div className="receipt stack">
              <h2 className="receipt__title">Éditrice du site</h2>
              <p>Camélia Amin Handoyo, étudiante — site personnel non commercial.</p>
              <p>Contact : <a href="mailto:camhdyo@gmail.com">camhdyo@gmail.com</a></p>
              <h2 className="receipt__title">Hébergement</h2>
              <p>Netlify, Inc. — <a href="https://www.netlify.com/">netlify.com</a>. Adresse postale à reprendre depuis le site de Netlify. <span className="todo">À COMPLÉTER</span></p>
              <h2 className="receipt__title">Propriété intellectuelle</h2>
              <p>Les contenus de ce site (textes, visuels, projets) sont la propriété de leur autrice, sauf mention contraire. Les projets réalisés en groupe sont présentés avec l'accord des membres de l'équipe.</p>
            </div>
          </div>

          <h2 id="confidentialite">Politique de confidentialité</h2>
          <div className="notebook stack">
            <p>Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience.</p>
            <p>Les polices sont chargées depuis Google Fonts : à cette occasion, votre adresse IP est transmise à Google.</p>
            <p>L'hébergeur (Netlify) peut conserver des journaux techniques de connexion (adresse IP, date, page demandée) pour assurer la sécurité du service.</p>
            <p>Pour toute question sur vos données : <a href="mailto:camhdyo@gmail.com">camhdyo@gmail.com</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
