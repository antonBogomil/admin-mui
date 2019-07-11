import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import Admin from "./admin/Admin";
import store from './store';
import initTranslation from "./i18n";
import Home from "./site/Home";
initTranslation(store.getState().site.lang);
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/admin' component={Admin}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;