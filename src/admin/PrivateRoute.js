import React from 'react';
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
    const user = localStorage.getItem('user');
    return (
        <Route {...rest} render={(props) => {
            return user ? (<Component {...props}/>) : (<Redirect to={'/admin/login'}/>)
        }}/>
    );
};

export default PrivateRoute;