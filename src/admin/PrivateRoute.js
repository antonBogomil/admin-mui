import React from 'react';
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({component: Component, redirectTo, hasAccess, ...rest}) => {
    return (
        <Route {...rest} render={(props) => {
            return hasAccess ? (<Component {...props}/>) : (<Redirect to={redirectTo}/>)
        }}/>
    );
};

export default PrivateRoute;