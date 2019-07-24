import React, {Suspense, useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import loadable from '@loadable/component'
import PrivateRoute from "./PrivateRoute";
import theme from './styles/theme';
import withNotification from "./components/withNotification";
import initTranslation from '../i18n';
import withTheme from "./components/withTheme";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const Login = loadable(() => import('./components/Login'));
const Dashboard = loadable(() => import('./components/Dashboard'));
initTranslation();
const Admin = (props) => {
    const {site: {lang}, user} = useSelector(state => state);
    const [, i18n] = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(lang).then();
    }, [lang]);

    return (
        <Suspense fallback={'loading...'}>
            <Switch>
                <Route path='/admin/login' component={Login}/>
                <PrivateRoute path={'/admin'}
                              component={Dashboard}
                              hasAccess={user}
                              redirectTo={'/admin/login'}
                />
            </Switch>
        </Suspense>
    );
};

export default withTheme(withNotification(Admin), theme);