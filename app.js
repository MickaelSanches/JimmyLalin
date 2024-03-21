const express = require('express');
const app = express();
const routes = require('./routes');

// Configurations
app.set('view engine', 'ejs'); // Configuration du moteur de modèle EJS

// Middlewares
app.use(express.urlencoded({ extended: true })); // Middleware pour gérer les données de formulaire
app.use(express.static('public')); // Middleware pour servir les fichiers statiques

// Routes
app.use('/', routes); // Utilisation des routes définies dans le fichier routes/index.js

// Port d'écoute
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
