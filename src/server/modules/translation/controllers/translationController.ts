import { TranslationService } from '../services/translationService';

export class TranslationController {
    async actionGetTranslations(req, res) {
        return await TranslationService.getTranslations();

        // res.send(translations);
    }

    async actionGetTranslationsById(req, res) {
        return await TranslationService.getTranslationsById(req.params.id);
        // res.send(translation);
    }

    async actionChangeTranslation(req, res) {
        const newData = req.body;
        await TranslationService.changeTranslation(
            req.params.id,
            newData
        );

        return newData;
        // res.send(newData);
    }

    async actionCreateTranslation(req, res) {
        return await TranslationService.createTranslation(req.body);
        // res.send(newTranslation);
    }

    async actionDeleteTranslation(req, res) {
        return await TranslationService.deleteTranslation(req.params.id);
        // res.send(result);
    }

    async actionSearchTranslations(req, res) {
        const serviceMethod = req.query.isField ?
            TranslationService.searchTranslationsField :
            TranslationService.searchTranslations;

        return await serviceMethod(req.query.text);

        // res.send(result);
    }
}
