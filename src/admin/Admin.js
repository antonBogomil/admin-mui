import React, {Suspense} from 'react';

import {Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import theme from './styles/theme';
import withNotification from "./components/withNotification";
import initTranslation from '../i18n';
import store from "../store";
import withTheme from "./components/withTheme";
initTranslation(store.getState().site.lang);

const Admin = (props) => {
    return (
        <Suspense fallback={'loading...'}>
            <Switch>
                <Route path='/admin/login' component={Login}/>
                <PrivateRoute path={'/admin'} component={Dashboard}/>
            </Switch>
        </Suspense>
    );
};

export default withTheme(withNotification(Admin), theme);