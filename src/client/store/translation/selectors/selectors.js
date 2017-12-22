import createCachedSelector from 're-reselect';
import { createSelector } from 'reselect';
import * as lodash from 'lodash';

const getTranslationsState = (state) => state.translations;

export const getTranslations = createSelector(
    getTranslationsState,
    (translations) => translations
);


export const getTranslation = createCachedSelector(
    getTranslations,
    (state, id) => id,
    (translations, id) => {
        return lodash.find(translations, translation => translation.id == id);
    }
)(
    (state, id) => id
);
