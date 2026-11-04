export const metadata = {
  title: "Mentions légales et confidentialité — Camélia Amin Handoyo",
  description: "Mentions légales et politique de confidentialité du portfolio de Camélia Amin Handoyo.",
};

export default function Page() {
  return (
    <main id="contenu">
      <section className="section" aria-labelledby="titre-page">
        <div className="container stack legal" style={{ "--flow": "var(--space-l)" }}>
          <div className="stack" style={{ "--flow": "var(--space-2xs)" }}>
            <h1 id="titre-page">Mentions légales</h1>
            <p className="annotation">Mises à jour en novembre 2026</p>
          </div>

          <div className="receipt-wrap">
            <div className="receipt stack">
              <h2 className="receipt__title">Éditrice du site</h2>
              <p>Ce site est le portfolio personnel et non commercial de Camélia Amin Handoyo, étudiante en BUT MMI à Nouméa (Nouvelle-Calédonie), qui en est aussi la directrice de la publication.</p>
              <p>Pour la contacter, écrivez à <a href="mailto:camhdyo@gmail.com">camhdyo@gmail.com</a>.</p>

              <hr />
              <h2 className="receipt__title">Hébergement</h2>
              <p>Le site est hébergé par Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, États-Unis (<a href="https://www.netlify.com/">netlify.com</a>).</p>

              <hr />
              <h2 className="receipt__title">Propriété intellectuelle</h2>
              <p>Les textes, visuels et projets présentés ici appartiennent à leur autrice, sauf mention contraire. Toute reproduction sans accord préalable est interdite.</p>
              <p>Les projets réalisés en équipe sont présentés avec l'accord de leurs membres, qui sont cités sur chaque fiche. Les projets menés en stage ou en alternance (Lagoon, Lagoon Business, Tenjity, ASSNC) sont montrés à titre d'exemple de mon travail. Leurs marques, logos et contenus restent la propriété de ces entreprises.</p>
              <p>Les logos des outils et logiciels cités appartiennent à leurs éditeurs. Les modèles 3D, images et cartes utilisés dans certains projets d'école (Unity Asset Store, Poly Pizza, cartes Pokémon via l'API TCGdex) restent la propriété de leurs auteurs et ne servent qu'à illustrer ces projets.</p>

              <hr />
              <h2 className="receipt__title">Liens externes</h2>
              <p>Le site renvoie vers d'autres sites (LinkedIn, GitHub, Behance, Figma, YouTube, sites des entreprises). Je ne suis pas responsable de leur contenu ni de leur politique de confidentialité.</p>
            </div>
          </div>

          <h2 id="confidentialite">Politique de confidentialité</h2>
          <div className="notebook stack">
            <h3>Ce que le site ne fait pas</h3>
            <p>Le site ne dépose aucun cookie, n'utilise aucun outil de mesure d'audience et ne contient aucun formulaire. Il ne collecte donc aucune donnée personnelle par lui-même.</p>
            <p>Si vous activez le son avec le bouton du menu, ce choix est simplement mémorisé dans votre navigateur (stockage local). Il n'est jamais envoyé ailleurs, et vous pouvez l'effacer en vidant les données du site.</p>

            <h3>Les services tiers</h3>
            <p>Les polices d'écriture sont chargées depuis Google Fonts, ce qui transmet votre adresse IP à Google au moment de l'affichage des pages.</p>
            <p>Les vidéos YouTube ne se chargent que si vous cliquez dessus, depuis le domaine youtube-nocookie.com. Une fois la lecture lancée, YouTube peut déposer ses propres cookies.</p>
            <p>L'hébergeur Netlify peut conserver des journaux techniques de connexion (adresse IP, date, page demandée) pour assurer la sécurité et le bon fonctionnement du service.</p>

            <h3>Si vous m'écrivez</h3>
            <p>Si vous me contactez par e-mail, j'utilise votre adresse et votre message uniquement pour vous répondre. Je ne les transmets à personne et je les supprime quand ils ne sont plus utiles.</p>

            <h3>Vos droits</h3>
            <p>Vous pouvez demander à consulter, corriger ou supprimer les données vous concernant en écrivant à <a href="mailto:camhdyo@gmail.com">camhdyo@gmail.com</a>. Je vous répondrai dans un délai d'un mois.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
