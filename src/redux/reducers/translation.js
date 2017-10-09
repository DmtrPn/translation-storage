import {GET_TRANSLATIONS, GET_DETAIL} from "../actions/index";

// export { GET_TRANSLATIONS } from '../actions';

function reducer(state = {}, action) {
    switch (action.type) {
        case GET_TRANSLATIONS:
            console.log(action.data);
            return action.data;
        case GET_DETAIL:
            console.log('ACTION: ', action);
            const newState = state.translations.map(translation => {
                if (translation._id === action.id) {
                    translation.values = action.values;
                }
                return translation;
            });
            console.log('new state', newState);
            return Object.assign({translations: newState}, state);
        default:
            return state;
    }
}

export default reducer;