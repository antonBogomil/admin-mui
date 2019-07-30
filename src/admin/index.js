import React, {Suspense, useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import PrivateRoute from "../PrivateRoute";
import theme from './styles/theme';
import withNotification from "./components/withNotification";
import withTheme from "./components/withTheme";
import {useSelector} from "react-redux";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


const Admin = (props) => {
    const {user} = useSelector(state => state);
    const path = props.match.url;
    return (
        user ? <Route path={path} component={Dashboard}/> : <Redirect to={`${path}/login`}/>
    );
};

export default withTheme(withNotification(Admin), theme);
