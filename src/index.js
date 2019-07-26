import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import './index.css';
import {fakeBackend} from "./_fakeBackend";
import initI18n from "./i18n";

fakeBackend();
initI18n();
ReactDOM.render(
    <App/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
