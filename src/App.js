import React from 'react';
import {Provider} from "react-redux";
import {Router, Route, Switch,} from "react-router-dom";
import Admin from "./admin/Admin";
import store from './store';
import initTranslation from "./i18n";
import Home from "./site/Home";
import {history} from './utils/history';
initTranslation(store.getState().site.lang);
const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path='/admin' component={Admin}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;