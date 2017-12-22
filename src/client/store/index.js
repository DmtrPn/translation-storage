import { createStore, combineReducers, compose} from 'redux';

import { translationReducer } from './translation/reducer';

const rootReducer = combineReducers({
    translationReducer
});

// Note: this API requires redux@>=3.1.0
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

