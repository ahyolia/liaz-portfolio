// Formations de la page À propos, de la plus récente à la plus ancienne
// (affichées par components/Formations.jsx, sur une feuille quadrillée).
//
// annees : en manuscrit à gauche ; statut : texte du tampon (En cours, Obtenu…)
// parcours (facultatif) : spécialisation, sous le diplôme
// matieres : pastilles (domaines ou spécialités)

export const formations = [
  {
    annees: '2024 → 2026',
    statut: 'En cours',
    diplome: 'BUT Métiers du Multimédia et de l’Internet (MMI)',
    etablissement: 'Institut Universitaire de Technologie (IUT), Nouméa',
    parcours: 'Parcours Développement web et dispositifs interactifs',
    matieres: ['Développement web', 'Création graphique', 'Stratégies de communication', 'Réalisation audiovisuelle'],
  },
  {
    annees: '2021 → 2023',
    statut: 'Obtenu',
    diplome: 'Baccalauréat général',
    etablissement: 'Lycée Blaise Pascal, Nouméa',
    matieres: ['Numérique et sciences informatiques (NSI)', 'Arts plastiques'],
  },
];
