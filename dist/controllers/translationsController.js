const TranslationService = require('../services/translationService');

const translationService = new TranslationService();

class TranslationsController {
    actionGetTranslations(req, res) {
        translationService.getTranslations(function(err, docs) {
            if(err) {
                console.log(err);
                return res.sendStatus(500);
            }

            const data = {
                translations: docs,
                count: docs.length
            };

            console.log(data);

            res.send(data);
        });
    }

    actionGetTranslationsById(req, res) {
        translationService.getTranslationsById(
            req.params.id,
            function(err, docs) {
                if(err) {
                    console.log(err);
                    return res.sendStatus(404);
                }
                console.log('get by id: ', docs);
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
                    console.log(err);
                    return res.sendStatus(404);
                }
                console.log('Change translation: ', newData);
                res.send(newData);
            }
        );
    }

    actionCreateTranslation(req, res) {
        translationService.createTranslation(
            req.body,
            function(err, result, newTranslation) {
                if(err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                console.log('creeate result: ', newTranslation);
                res.send(newTranslation);
            }
        );
    }

    actionDeleteTranslation(req, res) {
        translationService.deleteTranslation(
            req.params.id,
            function (err, result) {
                if(err) {
                    console.log(err);
                    return res.sendStatus(500);
                }

                res.send(result);
            }
        );
    }

    actionSearchTranslations(req, res) {
        translationService.searchTranslations(
            req.params.text,
            function(err, docs) {
                if(err) {
                    console.log(err);
                    return res.sendStatus(404);
                }
                console.log('search result: ', docs);
                res.send(docs);
            }
        );
    }
}

module.exports = TranslationsController;