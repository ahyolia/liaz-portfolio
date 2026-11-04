// Squelette commun à toutes les pages : <head>, lien d'évitement, header, footer.
// Chaque page (src/app/**/page.jsx) est rendue à la place de {children}
// et déclare son titre et sa description dans `export const metadata`.
import 'lenis/dist/lenis.css';
import '../styles/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Animations from '../components/Animations';

export const metadata = {
  title: 'Camélia Amin Handoyo — Portfolio',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
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
        <a className="skip-link" href="#contenu">Aller au contenu</a>
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <Animations />
      </body>
    </html>
  );
}
