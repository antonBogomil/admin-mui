import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import theme from './styles/theme';
import withNotification from "./components/withNotification";
import withTheme from "./components/withTheme";
import {useSelector} from "react-redux";
import loadable from "@loadable/component";


const Login = loadable(() => import('./components/Login'));
const Dashboard = loadable(() => import('./components/Dashboard'));

const Admin = (props) => {
    const {user} = useSelector(state => state);
    const path = props.match.url;
    return (
        <>
            <PrivateRoute path={`${path}`}
                          component={Dashboard}
                          hasAccess={user}
                          redirectTo={`${path}/login`}
            />
            <Route path={`${path}/login`}
                   component={Login}/>
        </>
    );
};

export default withTheme(withNotification(Admin), theme);
