import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import './index.css';
import {fakeBackend} from "./_fakeBackend";
import {Provider} from "react-redux";
import store from "./store";
import {history} from './utils/history';
import {Route, Router} from "react-router-dom";
import langs from "./settings/langs";

fakeBackend();
const locales = langs.map((lang) => (lang.code)).join("|");
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path={`/:locale(${locales})*`} render={(props) => <App {...props}/>}/>
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
