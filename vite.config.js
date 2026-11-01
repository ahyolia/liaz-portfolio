import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));

// Chaque page HTML du site doit être déclarée ici pour être incluse dans le build.
// Clé = nom libre (unique), valeur = chemin du fichier HTML.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Public
        accueil: resolve(root, 'index.html'),
        projets: resolve(root, 'projets/index.html'),
        projetExemple: resolve(root, 'projets/projet-exemple.html'),
        aPropos: resolve(root, 'a-propos/index.html'),

        // Académique (protégé par netlify/edge-functions/protect.js)
        academique: resolve(root, 'academique/index.html'),
        journal: resolve(root, 'academique/journal/index.html'),
        ficheExemple: resolve(root, 'academique/journal/fiche-exemple.html'),
      },
    },
  },
});
