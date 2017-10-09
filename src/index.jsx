import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import store from './redux/store';
import App from './App';
import AppNew from './AppNew';
import { getTranslations } from './redux/actions';
//
// store.dispatch(getTranslations());
// console.log(store.getState());
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

// Note: this API requires redux@>=3.1.0
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

store.dispatch(getTranslations()).then(()=> {
    ReactDOM.render(
        <Provider store={store}>
            <AppNew />
        </Provider>,
        document.getElementById('root')
    );
});




