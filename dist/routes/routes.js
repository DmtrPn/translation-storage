const express = require('express');
const TranslationsController = require('../controllers/translationsController');

const routes = express.Router();

const translationController = new TranslationsController();

routes.get('/api/translations', translationController.actionGetTranslations);
routes.get('/api/translations/search', translationController.actionSearchTranslations);
routes.get('/api/translations/:id', translationController.actionGetTranslationsById);
routes.post('/api/translations/', translationController.actionCreateTranslation);
routes.put('/api/translations/:id', translationController.actionChangeTranslation);
routes.delete('/api/translations/:id', translationController.actionDeleteTranslation);

module.exports = routes;

