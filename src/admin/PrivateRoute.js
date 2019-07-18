import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
    const user = useSelector((state)=>state.user);
    return (
        <Route {...rest} render={(props) => {
            return user ? (<Component {...props}/>) : (<Redirect to={'/admin/login'}/>)
        }}/>
    );
};

export default PrivateRoute;