import React from 'react';
import {Route} from "react-router-dom";
import {LOCALE_CODES} from "./admin/config/locales";

const LocaleRoute = ({component: Component, path = ''}) => {
    return (
        <Route path={`/:locale(${LOCALE_CODES})*${path}`} component={(props) => (<Component {...props}/>)}/>
    );
};

export default LocaleRoute;