import React, {useEffect} from 'react';
import loadable from '@loadable/component'
import {Route, Switch,} from "react-router-dom";
import {changeTranslation} from "./i18n";
import Admin from './admin'
import {settingsActions} from "./store/actions";
import {useSelector} from "react-redux";

const Site = loadable(() => import('./site'));
const DEFAULT_LOCALE = 'en';
const App = (props) => {
    const localeURL = props.match.params['locale'] || DEFAULT_LOCALE;
    settingsActions.changeLocale(localeURL);
    return (
        <Switch>
            <Route path='/:locale*/admin' render={(props) => (<Admin {...props}/>)}/>
            <Route path='/:locale*' component={Site}/>
        </Switch>
    );
};


export default App;
