import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import withTheme from "../utils/withTheme";
import withStyles from "@material-ui/core/styles/withStyles";
import {mainStyle} from "./styles/main.style";
import themeService from "../services/theme.service";
import store from "../store";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute";
const theme = themeService.create(store.getState().site.theme);
const Admin = (props) => {
    return (
        <>
            <Switch>
                <Route path='/admin/login' component={Login}/>
                <PrivateRoute path={'/admin'} component={Dashboard}/>
            </Switch>
        </>
    );
};

export default withTheme(withStyles(mainStyle)(Admin), theme);