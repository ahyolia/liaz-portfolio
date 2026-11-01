// Configuration Next.js : site 100 % statique, généré dans out/ (publié par Netlify).
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export statique : un fichier HTML par page, sans serveur Node
  output: 'export',
  // URL avec barre finale : /projets/aima/ → out/projets/aima/index.html
  trailingSlash: true,
  // Pas d'optimisation d'image côté serveur (impossible en export statique)
  images: { unoptimized: true },
};

export default nextConfig;
