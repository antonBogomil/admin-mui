import React, {Suspense, useEffect} from 'react';
import PrivateRoute from "../PrivateRoute";
import theme from './styles/theme';
import withNotification from "./components/withNotification";
import withTheme from "./components/withTheme";
import {useSelector} from "react-redux";
import Dashboard from "./components/Dashboard";


const Admin = (props) => {
    const {user} = useSelector(state => state);
    const path = props.match.url;
    return (
        <PrivateRoute path={`${path}`}
                      component={Dashboard}
                      hasAccess={user}
                      redirectTo={`${path}/login`}
        />
    );
};

export default withTheme(withNotification(Admin), theme);
