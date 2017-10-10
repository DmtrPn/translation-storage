const TranslationService = require('../services/translationService');

const translationService = new TranslationService();

class TranslationsController {
    actionGetTranslations(req, res) {
        translationService.getTranslations(function(err, docs) {
            if(err) {
                console.warn(err);
                return res.sendStatus(500);
            }

            const data = {
                translations: docs,
                count: docs.length
            };

            res.send(docs);
        });
    }

    actionGetTranslationsById(req, res) {
        translationService.getTranslationsById(
            req.params.id,
            function(err, docs) {
                if(err) {
                    console.warn(err);
                    return res.sendStatus(404);
                }
                res.send(docs);
            }
        );
    }

    actionChangeTranslation(req, res) {
        const newData = req.body;
        translationService.changeTranslation(
            req.params.id,
            newData,
            function(err, result) {
                if(err) {
                    console.warn(err);
                    return res.sendStatus(404);
                }

                res.send(newData);
            }
        );
    }

    actionCreateTranslation(req, res) {
        translationService.createTranslation(
            req.body,
            function(err, result, newTranslation) {
                if(err) {
                    console.warn(err);
                    return res.sendStatus(500);
                }

                res.send(newTranslation);
            }
        );
    }

    actionDeleteTranslation(req, res) {
        translationService.deleteTranslation(
            req.params.id,
            function (err, result) {
                if(err) {
                    console.warn(err);
                    return res.sendStatus(500);
                }

                res.send(result);
            }
        );
    }

    actionSearchTranslations(req, res) {
        const cb = function(err, docs) {
            if(err) {
                console.warn(err);
                return res.sendStatus(404);
            }

            res.send(docs);
        };
        const serviceMethod = req.query.isField ?
            translationService.searchTranslationsField :
            translationService.searchTranslations;

        serviceMethod(req.query.text, cb);
    }
}

module.exports = TranslationsController;
