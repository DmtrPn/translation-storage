import {GET_TRANSLATIONS} from "../actions/index";

// export { GET_TRANSLATIONS } from '../actions';

function reducer(state ={}, action) {
    switch (action.type) {
        case GET_TRANSLATIONS:
            return action.data;
        default:
            return state;
    }
}

export default reducer;