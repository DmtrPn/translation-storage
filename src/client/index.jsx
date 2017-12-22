import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Provider } from 'react-redux';
import srore from './store';

ReactDOM.render(
    <Provider store={srore}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
