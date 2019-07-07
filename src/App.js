import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import Admin from "./admin/Admin";
import store from './store';
import initTranslation from "./admin/i18n";
import PrivateRoute from "./admin/PrivateRoute";
import Login from "./admin/components/Login";
import Main from "./components/Main";
initTranslation(store.getState().site.lang);
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/admin/login' component={Login}/>
                    <PrivateRoute path='/admin' component={Admin}/>
                    <Route path='/' component={Main}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;