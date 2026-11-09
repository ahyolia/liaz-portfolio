// Bandeau « Intéressé(e) ? Contactez-moi » : en bas de l'accueil (src/app/(fr)/page.jsx et (en)/en/page.jsx).
import { t } from '../i18n';

export default function ContactBand({ lang = 'fr' }) {
  return (
    <section className="band band--yellow torn-top contact-band" aria-labelledby="titre-contact">
      <div className="container contact-band__inner">
        <h2 id="titre-contact" className="contact-band__title">{t(lang).contactBand}</h2>
        <ul className="contact-links">
          <li>
            <a href="https://www.linkedin.com/in/camelia-amin-handoyo/">
              LinkedIn
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#linkedin"></use></svg>
            </a>
          </li>
          <li>
            <a href="mailto:camhdyo@gmail.com">
              {t(lang).email}
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
