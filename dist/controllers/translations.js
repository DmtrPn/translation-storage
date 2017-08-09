const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const TranslationService = require('../services/translationService');

const translationService = new TranslationService();

const DATA_PATH = path.join(__dirname, '../../data/translations.json');

const fileData = fs.readFileSync(DATA_PATH, 'utf8');
let translationsData = JSON.parse(fileData);
let translationsCount = translationsData.length;


class TranslationsController {
    actionGetTranslations(req, res) {
        const data = translationService.getTranslations();
        res.send(data);
    }

    actionGetTranslationsById(req, res) {
        const data = translationService.getTranslationsById(req.params.id);
        res.send(data);
    }

    actionChangeTranslation(req, res) {
        const data = translationService.changeTranslation(req.params.id, req.body);
        !data ? res.sendStatus(404) : res.json(data);
    }

    actionCreateTranslation(req, res) {
        const data = translationService.createTranslation(req.body);
        res.send(data);
    }

    actionDeleteTranslation(req, res) {
        const data = translationService.deleteTranslation(req.params.id);
        res.send(data);
    }

    actionSearchTranslations(req, res) {
        const data = translationService.searchTranslations(req.params.text);
        res.send(data);
    }
}

module.exports = TranslationsController;