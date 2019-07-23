import React from 'react';
import loadable from '@loadable/component'
import {Provider} from "react-redux";
import {Router, Route, Switch,} from "react-router-dom";
import store from './store';
import {history} from './utils/history';

const Home = loadable(() => import('./site/Home'));
const Admin = loadable(() => import('./admin'));
const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path='/admin' component={Admin}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;