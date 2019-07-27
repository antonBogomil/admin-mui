import React from 'react';
import {settingsActions} from "./store/actions";
import {DEFAULT_LOCALE_CODE} from "./admin/config/locales";
import initI18n from "./i18n";
const Localization = props => {
    const locale = props.match.params.locale || DEFAULT_LOCALE_CODE;
    settingsActions.setLocale(locale);
    return props.children
};
Localization.propTypes = {};
export default Localization;
