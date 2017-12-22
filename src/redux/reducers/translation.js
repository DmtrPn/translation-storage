import {
    GET_TRANSLATIONS,
    GET_DETAIL,
    HIDE_DETAIL,
    CHANGE_DETAIL,
    DELETE_TRANSLATION
} from '../actions';

function reducer(state = {}, action) {
    switch (action.type) {
    case GET_TRANSLATIONS:
        return action.data;
    case GET_DETAIL:
        return state.map(translation => {
            if (translation._id === action.id) {
                translation.values = action.values;
            }
            return translation;
        });
    case HIDE_DETAIL:
        return state.map(translation => {
            if (translation._id === action.id) {
                translation.values = null;
            }
            return translation;
        });
    case CHANGE_DETAIL:
        return state.map(translation => {
            if(translation._id === action.id) {
                translation.values = null;
                translation.key = action.key;
            }
            return translation;
        });
    case DELETE_TRANSLATION:
        return state.filter(
            translation => translation._id !== action.id);
    default:
        return state;
    }
}

export default reducer;
