import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import './index.css';
import App from './App';
import serviceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Our Components
import Login from './components/Login';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
        </div>
    </Router>
    , document.getElementById('root')
);
serviceWorker();