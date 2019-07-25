import React, {useEffect} from 'react';
import loadable from '@loadable/component'
import {useSelector} from "react-redux";
import {Route, Switch,} from "react-router-dom";
import {changeLang} from "./store/actions/site.actions";
import initTranslation from "./i18n";
import {useTranslation} from "react-i18next";
import Admin from './admin'
// import language from "./utils/language";

const Site = loadable(() => import('./site'));

initTranslation();


const App = (props) => {
    const {user, site: {lang}} = useSelector(state => state);
    const [, i18n] = useTranslation();
    const urlLang = props.match.params['locale'];
    if (urlLang === undefined && lang !== 'en') {
        changeLang();
    }
    if (urlLang !== lang && urlLang) {
        changeLang(urlLang)
    }
    useEffect(() => {
        i18n.changeLanguage(lang).then();
    }, [lang]);
    return (
        <Switch>
            <Route path='/:locale*/admin' render={(props) => (<Admin {...props}/>)}/>
            <Route path='/:locale*' component={Site}/>
        </Switch>
    );
};


export default App;