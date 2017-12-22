import * as express from 'express';
import {TranslationController} from './controllers/translationController';

const translationRouter = express.Router();

const translationController = new TranslationController();

translationRouter.get('/api/translations', translationController.actionGetTranslations);
translationRouter.get('/api/translations/search', translationController.actionSearchTranslations);
translationRouter.get('/api/translations/:id', translationController.actionGetTranslationsById);
translationRouter.post('/api/translations/', translationController.actionCreateTranslation);
translationRouter.put('/api/translations/:id', translationController.actionChangeTranslation);
translationRouter.delete('/api/translations/:id', translationController.actionDeleteTranslation);

export {
    translationRouter
};

