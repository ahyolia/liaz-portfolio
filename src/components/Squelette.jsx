// Squelette commun à toutes les pages : <html lang>, <head>, lien d'évitement,
// header, footer. Utilisé par les deux layouts racines :
// src/app/(fr)/layout.jsx (lang="fr") et src/app/(en)/layout.jsx (lang="en").
import 'lenis/dist/lenis.css';
import '../styles/main.css';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Animations from './Animations';
import { t } from '../i18n';

export default function Squelette({ lang = 'fr', children }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Avant le premier affichage : masque les éléments animés (.anim-attente)
             jusqu'à ce que src/main.js pose leur état de départ. Rien n'est masqué
             si l'utilisateur réduit les animations, et le masque saute au bout de
             4 s si le script ne se charge pas. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var h=document.documentElement;h.classList.add('anim-attente');setTimeout(function(){h.classList.remove('anim-attente')},4000)}",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500..700;1,9..144,500..700&family=Gochi+Hand&family=IBM+Plex+Mono:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400&display=swap"
        />
      </head>
      <body>
        <a className="skip-link" href="#contenu">{t(lang).evitement}</a>
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
        <BackToTop lang={lang} />
        <Animations />
      </body>
    </html>
  );
}
