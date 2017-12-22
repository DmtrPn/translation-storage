import {translationRouter} from '../../../modules/translation/routes';

export const initRoutes = function(app) {
    app.use(translationRouter);
};
