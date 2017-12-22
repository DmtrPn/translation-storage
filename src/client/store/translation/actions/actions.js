import { createAction } from 'redux-actions';

export const loadTranslations = createAction('LOAD_TRANSLATIONS');
export const changeTranslation = createAction('CHANGE_TRANSLATION');
export const addTranslation = createAction('ADD_TRANSLATION');
export const removeTranslation = createAction('REMOVE_TRANSLATION');
