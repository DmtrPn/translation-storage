const express = require('express');
const TranslationsController = require('../controllers/translations');

const routes = express.Router();

const translationController = new TranslationsController();

routes.get('/api/translations', translationController.actionGetTranslations);
routes.get('/api/translations/:id', translationController.actionGetTranslationsById);
routes.get('/api/translations/search/:text', translationController.actionSearchTranslations);
routes.post('/api/translations/', translationController.actionCreateTranslation);
routes.put('/api/translations/:id', translationController.actionChangeTranslation);
routes.delete('/api/translations/:id', translationController.actionDeleteTranslation);

module.exports = routes;
