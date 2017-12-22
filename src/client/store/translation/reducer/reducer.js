import { handleActions } from 'redux-actions';

import {
    loadTranslations,
    addTranslation,
    changeTranslation,
    removeTranslation
} from '../actions';

export const translationReducer = handleActions({
    [loadTranslations]: load,
    [addTranslation]: add,
    [changeTranslation]: change,
    [removeTranslation]: remove
});

function load(state, {payload}) {
    return {translations: payload.translations};
}

function add(state, {payload}) {
    return {translations: [...state.translations, {...payload}]};
}


function change(state, {payload}) {
    const translations = state.translations.map(translation =>
        translation.id == payload.id ? {...translation, ...payload} : translation);
    return {translations};
}


function remove(state, {payload}) {
    const translations = state.translations.filter(translation => translation.id != payload);
    return {translations};
}
