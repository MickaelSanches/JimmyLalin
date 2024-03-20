'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Fight extends Model {
        static associate(models) {
            // Aucune association n'est nécessaire pour le modèle Fight dans ce contexte
        }
    };
    Fight.init({
        date: DataTypes.DATE,
        opponent: DataTypes.STRING,
        location: DataTypes.STRING,
        result: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Fight',
    });
    return Fight;
};

