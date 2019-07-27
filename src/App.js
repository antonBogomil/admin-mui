import React, {useEffect} from 'react';
import loadable from '@loadable/component'
import {BrowserRouter, Route, Router, Switch,} from "react-router-dom";
import Admin from './admin'
import {DEFAULT_LOCALE_CODE, LOCALE_CODES} from "./admin/config/locales";
import {history} from "./utils/history";
import {Provider} from "react-redux";
import store from "./store";
import Localization from "./Localization";

const Site = loadable(() => import('./site'));
const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path={`/:locale(${LOCALE_CODES})*`} render={
                    (props) => (
                        <Provider store={store}>
                            <Localization {...props}>
                                <Switch>
                                    <Route path={`/:locale(${LOCALE_CODES})*/admin`}
                                           component={Admin}/>
                                    <Route path={`/`}
                                           component={Site}/>
                                    <Route render={() => ("Not found 404")}/>
                                </Switch>
                            </Localization>
                        </Provider>
                    )}
                />
            </Switch>
        </Router>
    );
};


export default App;
