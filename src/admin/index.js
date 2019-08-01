import React, {Suspense, useEffect, useState} from 'react';
import PrivateRoute from "../PrivateRoute";
import {Switch} from "react-router-dom";
import theme from './styles/theme';
import withNotification from "./components/withNotification";
import withTheme from "./components/withTheme";
import {useSelector} from "react-redux";
import Dashboard from "./components/Dashboard";
import {userActions} from "../store/actions";
import {userService} from "../services/user.service";
import Login from "./components/Login";


const Admin = (props) => {
	const {user} = useSelector(state => state);
    useEffect(()=>{
        userService.auth();
    },[]);
	console.log(props.match.url);
	const path = props.match.url;
	return (
		<Switch>
            <PrivateRoute path={`${path}/login`}
                          hasAccess={!user}
                          component={Login}
                          redirectTo={`${path}`}
            />
			<PrivateRoute path={`${path}`}
						  component={Dashboard}
						  hasAccess={user}
						  redirectTo={`${path}/login`}
			/>

		</Switch>
	);
};

export default withTheme(withNotification(Admin), theme);
