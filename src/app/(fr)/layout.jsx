// Layout racine des pages françaises (à la racine du site : /, /projets/…).
// Le squelette (head, header, footer) est partagé avec l'anglais : components/Squelette.jsx.
// Chaque page (src/app/(fr)/**/page.jsx) déclare son titre dans `export const metadata`.
import Squelette from '../../components/Squelette';

export const metadata = {
  title: 'Camélia Amin Handoyo — Portfolio',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return <Squelette lang="fr">{children}</Squelette>;
}
