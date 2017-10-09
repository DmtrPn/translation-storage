import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppNew from './AppNew';
import { getTranslations } from './redux/actions';

import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

// Note: this API requires redux@>=3.1.0
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

store.dispatch(getTranslations()).then(()=> {
    ReactDOM.render(
        <Provider store={store}>
            <AppNew />
        </Provider>,
        document.getElementById('root')
    );
});




