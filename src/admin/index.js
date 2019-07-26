import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import theme from './styles/theme';
import withNotification from "./components/withNotification";
import withTheme from "./components/withTheme";
import {useSelector} from "react-redux";
import loadable from "@loadable/component";
import {settingsActions} from "../store/actions";
import {DEFAULT_LOCALE_CODE} from "./config/locales";
import {changeLocaleUrl} from "../services/settings.service";
import {changeTranslation} from "../i18n";

const Login = loadable(() => import('./components/Login'));
const Dashboard = loadable(() => import('./components/Dashboard'));

const Admin = (props) => {
    const {user, settings: {init, locale}} = useSelector(state => state);
    const urlLocale = props.match.params.locale || DEFAULT_LOCALE_CODE;
    if (!init) {
        settingsActions.initSettings(urlLocale);
    }
    useEffect(() => {
        changeLocaleUrl(locale);
        changeTranslation(locale);
    }, [locale]);
    const path = props.match.url;
    return (
        <>
            <Route path={`${path}/login`} component={Login}/>
            <PrivateRoute path={`${path}`}
                          component={Dashboard}
                          hasAccess={user}
                          redirectTo={`${path}/login`}

            />
        </>
    );
};

export default withTheme(withNotification(Admin), theme);