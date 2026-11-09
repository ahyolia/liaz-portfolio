// Layout racine des pages anglaises (sous /en/). Même squelette que le français
// (components/Squelette.jsx), avec <html lang="en"> et les textes d'interface anglais.
import Squelette from '../../components/Squelette';

export const metadata = {
  title: 'Camélia Amin Handoyo — Portfolio',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return <Squelette lang="en">{children}</Squelette>;
}
