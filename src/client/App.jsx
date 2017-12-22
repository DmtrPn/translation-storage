import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import { Header } from './common/Header';
import { HomeContainer } from './modules/Home/HomeContainer';
import { AboutContainer } from './modules/About/AboutContainer';
import { Icons } from './modules/Icons';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/about" component={AboutContainer} />
                    <Route exact path="/icons" component={Icons} />
                </div>
            </Router>
        );
    }
}

export default App;
