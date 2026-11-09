// Fiche projet Tenjity : module d'accessibilité web et site vitrine, pendant mon
// alternance chez OFFRATEL Lagoon (BUT MMI 3, 2026). Contenu tiré de tenjity.com et
// de l'article « L'AVH teste Tenjity » ; maquettes Figma de la page article.
import ProjectLayout from '../../../../components/projet/ProjectLayout';
import CaseHero from '../../../../components/projet/CaseHero';
import Contexte from '../../../../components/projet/Contexte';
import Demarche from '../../../../components/projet/Demarche';
import Apport from '../../../../components/projet/Apport';
import Galerie from '../../../../components/projet/Galerie';
import Liens from '../../../../components/projet/Liens';

const img = '/images/projets/tenjity';
const site = 'https://tenjity.com';
const article = 'https://tenjity.com/actualites/avh-teste-tenjity-retour-numerique-inclusif';
const figma = 'https://www.figma.com/design/mdGpkGNMP8GSIUE4YrbTP1/Lagoon---Tenjity?node-id=24-2';
const maquette = { width: 1280, height: 1929 };
const panneau = { width: 900, height: 1362 };

export const metadata = {
  title: "Tenjity, un module d'accessibilité web — Camélia Amin Handoyo",
  description:
    "Tenjity, module d'accessibilité web calédonien. Contribution au développement (loupe, mode sombre…) après des tests avec l'association Valentin Haüy, et maquettes puis intégration de la page article du site, pendant mon alternance chez OFFRATEL Lagoon.",
};

export default function Page() {
  return (
    <ProjectLayout slug="tenjity">
      <CaseHero
        slug="tenjity"
        eyebrow="Accessibilité web · alternance"
        titre="Tenjity, rendre le web plus accessible en Nouvelle-Calédonie"
        accroche="Pendant mon alternance chez OFFRATEL Lagoon, j'ai contribué au module d'accessibilité Tenjity, après des tests avec l'association Valentin Haüy, et au site qui le présente."
        couleur="#FFF1B8"
        liens={[
          { href: site, label: 'Essayer Tenjity' },
          { href: article, label: "Lire l'article sur les tests" },
        ]}
      >
        <img src={`${img}/site-accueil.webp`} alt="L'accueil de tenjity.com : « Vous voulez un site web plus accessible ? », avec les réglages du module (zooms, curseur, teintes, mode sombre)" width="1600" height="910" data-depth="0.4" style={{ width: '92%', borderRadius: '0.75rem', boxShadow: '0 18px 40px -20px rgb(0 0 0 / 0.6)' }} />
        <span className="floaty sticker" data-depth="1.8" style={{ '--x': '-2%', '--y': '6%', '--r': '-8deg', '--size': 'auto' }}>Testé avec l'AVH</span>
        <img className="floaty floaty--card" src={`${img}/module-curseur.webp`} alt="" width="1200" height="827" data-depth="1.6" style={{ '--x': '74%', '--y': '70%', '--r': '7deg', '--size': '9rem', '--delay': '-3s', border: '4px solid var(--ink)', borderRadius: '0.5rem' }} />
        <span className="floaty sticker sticker--aqua" data-depth="1.4" style={{ '--x': '6%', '--y': '86%', '--r': '5deg', '--size': 'auto', '--delay': '-2s' }}>RGAA & WCAG</span>
      </CaseHero>

      <Contexte
        outils={[
          { nom: 'Figma', icone: '/images/tools/figma.svg' },
          { nom: 'Vue.js', icone: '/images/tools/vuejs.svg' },
        ]}
        fiche={[
          { label: 'Cadre', valeur: 'Alternance BUT MMI 3, OFFRATEL Lagoon' },
          { label: 'Année', valeur: '2026' },
          { label: 'Mon rôle', valeur: 'Dev front et UI/UX' },
          { label: 'Outils', valeur: 'Figma, Nuxt (Vue.js)' },
        ]}
        statut="En ligne"
      >
        <p>Tenjity est un <b>module d'accessibilité web</b> développé en Nouvelle-Calédonie, proposé par Lagoon. Installé sur un site, il permet à chaque visiteur de <b>l'adapter à ses besoins</b>, grâce aux zooms et à la loupe, à une police pour la dyslexie, au curseur, au lecteur d'écran, au mode sombre, aux teintes et aux contrastes.</p>
        <p>Pendant mon <b>alternance de 3<sup>e</sup> année de BUT MMI</b> chez OFFRATEL Lagoon, j'ai contribué à son développement, notamment sur <span className="hl">la loupe et le mode sombre</span>, à partir des retours de tests menés avec l'<b>association Valentin Haüy</b>.</p>
        <p>J'ai aussi travaillé sur le <b>site <a href={site}>tenjity.com</a></b>, où j'ai dessiné les <b>maquettes de la page article</b> sur Figma, puis je l'ai <b>intégrée</b>.</p>
      </Contexte>

      <Demarche
        etapes={[
          {
            titre: "Les tests avec l'AVH",
            texte: "Cinq adhérents de l'association Valentin Haüy ont testé le module avec nous. Leurs retours ont donné des axes concrets, comme un zoom plus performant, des curseurs plus visibles, des contrastes et des tailles de texte ajustables, et un module plus facile à repérer sur la page.",
            image: { src: `${img}/test-avh.webp`, alt: "Séance de test du module Tenjity avec des adhérents de l'association Valentin Haüy", width: 1600, height: 1200 },
            liens: [{ href: article, label: "Lire l'article sur les tests" }],
          },
          {
            titre: 'Les fonctionnalités du module',
            texte: "J'ai ensuite contribué au développement de fonctionnalités du module, notamment la loupe, qui agrandit la zone survolée, et le mode sombre, pour un affichage moins éblouissant.",
            images: [
              { src: `${img}/module-panneau.webp`, alt: 'Le panneau du module Tenjity : zooms, loupe, règle d’écran, dyslexie, curseur, lecteur d’écran, clavier visuel, mode sombre, teintes', ...panneau },
              { src: `${img}/module-zooms.webp`, alt: 'Les réglages de zoom du module : zoom de la page, du module et du texte', width: 1200, height: 1105 },
            ],
          },
          {
            titre: 'Les maquettes du site',
            texte: "Pour le site tenjity.com, j'ai dessiné sur Figma la page des actualités et la page article, avec la date et l'auteur, le titre, les étiquettes, une grande image, le texte, un lien vers la source et la navigation entre les articles.",
            images: [
              { src: `${img}/maquette-article.webp`, alt: 'Maquette Figma de la page article de Tenjity', ...maquette },
              { src: `${img}/maquette-actualites.webp`, alt: 'Maquette Figma de la page des actualités de Tenjity', ...maquette },
            ],
            liens: [{ href: figma, label: 'Voir les maquettes Figma' }],
          },
          {
            titre: "L'intégration de la page article",
            texte: "J'ai ensuite intégré la page article sur le site. Elle présente aujourd'hui l'article sur les tests avec l'AVH, où j'apparais sur la photo.",
            image: { src: `${img}/article-en-ligne.webp`, alt: "La page article en ligne sur tenjity.com : « L'AVH teste Tenjity pour un numérique plus inclusif »", width: 1440, height: 1000 },
            liens: [{ href: article, label: "Voir la page en ligne" }],
          },
        ]}
      />

      <Apport
        casquettes={[
          {
            titre: 'Accessibilité',
            texte: 'Un module construit avec les personnes qui l’utilisent.',
            competences: ['Tests utilisateurs', 'Handicap visuel', 'RGAA et WCAG', 'Loupe', 'Mode sombre'],
          },
          {
            titre: 'UI/UX et dev front',
            texte: 'Une page pensée sur Figma, puis intégrée sur le site.',
            competences: ['Maquettes Figma', 'Intégration front', 'Nuxt (Vue.js)'],
          },
        ]}
      />

      <Galerie
        titre="Tenjity en images"
        intro="Le module et ses réglages, les maquettes et la page en ligne, et la séance de test avec l'AVH."
        filtres={[
          { id: 'module', label: 'Le module' },
          { id: 'site', label: 'Le site' },
          { id: 'terrain', label: 'Sur le terrain' },
        ]}
        items={[
          { cat: 'module', legende: 'Le panneau du module', images: [{ src: `${img}/module-panneau.webp`, alt: 'Le panneau du module Tenjity et ses fonctionnalités', ...panneau }] },
          { cat: 'module', legende: 'Les zooms', images: [{ src: `${img}/module-zooms.webp`, alt: 'Les réglages de zoom', width: 1200, height: 1105 }] },
          { cat: 'module', legende: 'Le curseur', images: [{ src: `${img}/module-curseur.webp`, alt: 'Les réglages du curseur : taille et couleurs', width: 1200, height: 827 }] },
          { cat: 'module', legende: 'Teintes et luminosité', images: [{ src: `${img}/module-teintes.webp`, alt: 'Les réglages de niveaux de gris et de contraste', width: 1200, height: 890 }] },
          { cat: 'module', variante: 'logo', legende: 'Le mode sombre', images: [{ src: `${img}/module-mode-sombre.webp`, alt: 'Le bouton du mode sombre du module', width: 1496, height: 212, fond: '#1E2A33' }] },
          { cat: 'site', legende: 'La page article en ligne', images: [{ src: `${img}/article-en-ligne-complet.webp`, alt: "La page article complète en ligne sur tenjity.com", width: 1440, height: 1990 }] },
          { cat: 'site', variante: 'page', legende: 'Maquette : page article', images: [{ src: `${img}/maquette-article.webp`, alt: 'Maquette Figma de la page article', ...maquette }] },
          { cat: 'site', variante: 'page', legende: 'Maquette : actualités', images: [{ src: `${img}/maquette-actualites.webp`, alt: 'Maquette Figma de la page des actualités', ...maquette }] },
          { cat: 'terrain', legende: "Les tests avec l'AVH", images: [{ src: `${img}/test-avh.webp`, alt: "Séance de test avec des adhérents de l'association Valentin Haüy", width: 1600, height: 1200 }] },
        ]}
      />

      <Liens
        liens={[
          { href: site, label: 'tenjity.com' },
          { href: article, label: "L'article sur les tests avec l'AVH" },
          { href: figma, label: 'Maquettes Figma' },
        ]}
      />
    </ProjectLayout>
  );
}
