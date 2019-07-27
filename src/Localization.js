import React, {useEffect} from 'react';
import {settingsActions} from "./store/actions";
import {DEFAULT_LOCALE_CODE} from "./admin/config/locales";
import ReactDOM from "react-dom";
import {useSelector} from "react-redux";

const Localization = props => {
    const localeUrl = props.match.params.locale;
    const {locale} = useSelector((state) => state.settings);
    useEffect(() => {
        if (locale !== localeUrl) {
            settingsActions.setLocale(localeUrl || DEFAULT_LOCALE_CODE);
        }
    }, [localeUrl]);
    console.log(locale);
    return props.children
};
Localization.propTypes = {};
export default Localization;
