// Import des modèles Sequelize
const { News, Fight } = require('./models');

// Fonction pour insérer les données de test pour le modèle News
const insertTestNews = async () => {
    await News.bulkCreate([
        { title: 'Titre de l\'article 1', content: 'Contenu de l\'article 1', slug: 'article-1' },
        { title: 'Titre de l\'article 2', content: 'Contenu de l\'article 2', slug: 'article-2' },
        // Ajoutez d'autres données de test si nécessaire
    ]);
};

// Fonction pour insérer les données de test pour le modèle Fight
const insertTestFights = async () => {
    await Fight.bulkCreate([
        { date: new Date(), opponent: 'Adversaire 1', location: 'Lieu 1', result: 'Victoire' },
        { date: new Date(), opponent: 'Adversaire 2', location: 'Lieu 2', result: 'Défaite' },
        // Ajoutez d'autres données de test si nécessaire
    ]);
};

// Appel des fonctions d'insertion des données de test
insertTestNews();
insertTestFights();
