// Configuration Astro : site statique, généré dans dist/ (publié par Netlify).
import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    // Garde les URL d'origine : src/pages/projets/aima.astro → /projets/aima.html,
    // src/pages/projets/index.astro → /projets/index.html (servi sur /projets/)
    format: 'preserve',
  },
  // Pas de barre d'outils de dev Astro par-dessus les pages
  devToolbar: { enabled: false },
});
