import React, {Suspense, useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import theme from './styles/theme';
import withNotification from "./components/withNotification";
import withTheme from "./components/withTheme";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import loadable from "@loadable/component";

const Login = loadable(() => import('./components/Login'));
const Dashboard = loadable(() => import('./components/Dashboard'));


const Admin = (props) => {
    const {user} = useSelector(state => state);
    const parentUrl = props.match.url;
    return (
        <>
            <Switch>
                <Route path={`${parentUrl}/login`} component={Login}/>
                <PrivateRoute path={`${parentUrl}`}
                              component={Dashboard}
                              hasAccess={user}
                              redirectTo={parentUrl + '/login'}/>
            </Switch>
        </>
    );
};

export default withTheme(withNotification(Admin), theme);