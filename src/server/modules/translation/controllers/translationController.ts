import { TranslationService } from '../services/translationService';

export class TranslationController {
    actionGetTranslations(req, res) {
        TranslationService.getTranslations(function(err, docs) {
            if(err) {
                console.warn(err);
                return res.sendStatus(500);
            }

            // const data = {
            //     translations: docs,
            //     count: docs.length
            // };

            res.send(docs);
        });
    }

    actionGetTranslationsById(req, res) {
        TranslationService.getTranslationsById(
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
        TranslationService.changeTranslation(
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
        TranslationService.createTranslation(
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
        TranslationService.deleteTranslation(
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
            TranslationService.searchTranslationsField :
            TranslationService.searchTranslations;

        serviceMethod(req.query.text, cb);
    }
}
