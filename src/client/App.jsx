import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import { Header } from './common/Header';
import { TranslationsPage } from './modules/TranslationsPage';
// import { AboutContainer } from './modules/About/AboutContainer';
// import { Icons } from './modules/Icons';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" component={TranslationsPage} />
                </div>
            </Router>
        );
    }
}

export default App;
