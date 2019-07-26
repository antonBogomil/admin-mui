import React, {useEffect} from 'react';
import loadable from '@loadable/component'
import {Route, Router, Switch,} from "react-router-dom";
import Admin from './admin'
import {DEFAULT_LOCALE_CODE, LOCALE_CODES} from "./admin/config/locales";
import {history} from "./utils/history";
import {Provider} from "react-redux";
import store from "./store";
const Site = loadable(() => import('./site'));
const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path={`/:locale(${LOCALE_CODES})*/:path`} component={(props) => (<Admin {...props}/>)}/>
                    <Route path={`/`} component={Site}/>
                    <Route component={() => ("Not found 404")}/>
                </Switch>
            </Router>
        </Provider>
    );
};


export default App;
