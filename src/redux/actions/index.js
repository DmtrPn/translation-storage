import ServerApi from '../../api';

export const GET_TRANSLATIONS = 'GET_TRANSLATIONS';
export const getTranslations = () => {
    return dispatch => {
        return ServerApi.getTranslationsList()
            .then(data => {
                return dispatch({
                type: GET_TRANSLATIONS,
                data
                })
            }
            );
    }
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
                // const translations = this.state.translations.map(translation => {
                //     if (translation._id === id) {
                //         translation.values = response.data.values;
                //     }
                //     return translation;
                // });
                    // console.log(data);

                }
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