// Bandeau « Intéressé(e) ? Contactez-moi » : en bas de l'accueil (src/app/page.jsx).
export default function ContactBand() {
  return (
    <section className="band band--yellow torn-top contact-band" aria-labelledby="titre-contact">
      <div className="container contact-band__inner">
        <h2 id="titre-contact" className="contact-band__title">Intéressé(e) ?<br />Contactez-moi ^^</h2>
        <ul className="contact-links">
          <li>
            <a href="https://www.linkedin.com/in/camelia-amin-handoyo/">
              LinkedIn
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#linkedin"></use></svg>
            </a>
          </li>
          <li>
            <a href="mailto:camhdyo@gmail.com">
              E-mail
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#mail"></use></svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/caamhy/">
              Instagram
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#instagram"></use></svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
