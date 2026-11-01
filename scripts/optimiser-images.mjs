// Convertit les grosses images PNG/JPG de public/images/projets/ en WebP
// (plus légères), à côté des originaux qui restent intacts.
// Usage : npm run images
// Puis remplacer .png par .webp dans le code (le script affiche les correspondances).
import { readdir, stat } from 'node:fs/promises';
import { join, extname, basename, dirname } from 'node:path';
import sharp from 'sharp';

const DOSSIER = 'public/images/projets';
const SEUIL = 60 * 1024; // on ne touche pas aux images déjà légères
const LARGEUR_MAX = 1800; // assez pour un affichage en grand (visionneuse)

async function* fichiers(dossier) {
  for (const entree of await readdir(dossier, { withFileTypes: true })) {
    const chemin = join(dossier, entree.name);
    if (entree.isDirectory()) yield* fichiers(chemin);
    else yield chemin;
  }
}

for await (const fichier of fichiers(DOSSIER)) {
  if (!['.png', '.jpg', '.jpeg'].includes(extname(fichier).toLowerCase())) continue;
  const { size } = await stat(fichier);
  if (size < SEUIL) continue;

  // « mockups aima.png » → « mockups-aima.webp » (pas d'espace dans les URL)
  const nom = basename(fichier, extname(fichier)).replace(/\s+/g, '-') + '.webp';
  const sortie = join(dirname(fichier), nom);
  const info = await sharp(fichier)
    .resize({ width: LARGEUR_MAX, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(sortie);

  console.log(`${fichier} (${Math.round(size / 1024)} Ko) → ${nom} (${Math.round(info.size / 1024)} Ko, ${info.width}×${info.height})`);
}
