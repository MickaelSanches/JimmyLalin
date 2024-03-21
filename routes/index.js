const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const newsController = require('../controllers/newsController');
const fightsController = require('../controllers/fightController');

// Route pour la page d'accueil
router.get('/', homeController.getHomePage);

// Route pour afficher la liste des articles de journaux
router.get('/news', newsController.getAllNews);

// Route pour afficher l'agenda des combats
router.get('/fights', fightsController.getFightSchedule);

module.exports = router;