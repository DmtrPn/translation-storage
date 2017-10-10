import ServerApi from '../../api';

export const GET_TRANSLATIONS = 'GET_TRANSLATIONS';
export const getTranslations = () => {
    return dispatch => {
        return ServerApi.getTranslationsList()
            .then(data => {
                return dispatch({
                    type: GET_TRANSLATIONS,
                    data
                });
            });
    };
};

export const GET_DETAIL = 'GET_DETAIL';
export const getTranslationDetail = (id) => {
    return dispatch => {
        return ServerApi.getTranslationsById(id)
            .then(response => {
                return dispatch({
                    type: GET_DETAIL,
                    id,
                    values: response.data.values
                });
            });
    };
};

export const HIDE_DETAIL = 'HIDE_DETAIL';
export const hideTranslationDetail = (id) => {
    return {
        type: HIDE_DETAIL,
        id
    };
};

export const CHANGE_DETAIL = 'CHANGE_DETAIL';
export const changeTranslationDetail = (id, key, values) => {
    return dispatch => {
        return ServerApi.changeTranslation(id, key, values)
            .then(response => {
                return dispatch({
                    type: CHANGE_DETAIL,
                    id,
                    key: response.data.key
                });
            });
    };
};

export const DELETE_TRANSLATION = 'DELETE_TRANSLATION';
export const deleteTranslation = (id) => {
    return dispatch => {
        return ServerApi.deleteTranslation(id)
            .then(response => {
                return dispatch({
                    type: DELETE_TRANSLATION,
                    id
                });
            });
    };
};
