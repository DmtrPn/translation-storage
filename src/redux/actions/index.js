import ServerApi from '../../api';

export const REQUEST_TRANSLATIONS = 'REQUEST_TRANSLATIONS';
export const GET_TRANSLATIONS = 'GET_TRANSLATIONS';

export const getTranslations = () => {
    return dispatch => {
        dispatch({
            type: REQUEST_TRANSLATIONS
        });

        return ServerApi.getTranslationsList()
            .then(data => dispatch({
                type: GET_TRANSLATIONS,
                data
                })
            );
    }
};
//
// const GET_TRANSLATIONS_RESULT = 'GET_TRANSLATIONS_RESULT';
// export const getTranslationsResult = (data) => {
//     return { type: GET_TRANSLATIONS_RESULT, data }
// };
//
// export const getTranslationsList = () => {
//     return dispatch => {
//         dispatch(getTranslationsStart());
//         ServerApi.getTranslationsList()
//             .then(data =>
//                 dispatch(getTranslationsResult, data)
//             )
//             .catch(err => {console.log(err)});
//     }
// };