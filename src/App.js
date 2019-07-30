import React from 'react';
import loadable from '@loadable/component'
import {Route, Router, Switch,} from "react-router-dom";
import {LOCALE_CODES} from "./admin/config/locales";
import {history} from "./utils/history";
import {Provider} from "react-redux";
import store from "./store";
import Localization from "./Localization";
import Admin from './admin';
import initI18n from "./i18n";
import Login from "./admin/components/Login";


const Site = loadable(() => import('./site'));

initI18n();
const LOCALE_PATH = `/:locale(${LOCALE_CODES})*`;
const App = () => {
    // return (
    //     <Router history={history}>
    //         <Switch>
    //             <Route path={`/:locale(${LOCALE_CODES})*`} render={
    //                 (props) => (
    //                     <Provider store={store}>
    //                         <Localization {...props}>
    //                             <Switch>
    //                                 <Route path={`${LOCALE_PATH}/admin/login`}
    //                                        component={Login}/>
    //                                 <Route path={`${LOCALE_PATH}/admin`}
    //                                        component={Admin}/>
    //                                 <Route path={`/`}
    //                                        component={Site}/>
    //                                 <Route render={() => ("Not found 404")}/>
    //                             </Switch>
    //                         </Localization>
    //                     </Provider>
    //                 )}
    //             />
    //         </Switch>
    //     </Router>
    // );
    return null
};


export default App;
