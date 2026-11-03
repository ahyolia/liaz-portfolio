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
    <html lang="fr">
      <head>
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
