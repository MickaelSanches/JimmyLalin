'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class News extends Model {
        static associate(models) {
            // Aucune association n'est nécessaire pour le modèle News dans ce contexte
        }
    };
    News.init({
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        slug: DataTypes.STRING, // Champ pour stocker le slug de l'URL de l'article
    }, {
        sequelize,
        modelName: 'News',
    });
    return News;
};
