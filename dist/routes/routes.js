const express = require('express');
const TranslationsController = require('../controllers/translations');

const routes = express.Router();

const translationController = new TranslationsController();

routes.get('/api/translations', translationController.actionGetTranslations);
routes.get('/api/translations/:id', translationController.actionGetTranslationsById);
routes.put('/api/translations/:id', translationController.actionChangeTranslation);

module.exports = routes;
