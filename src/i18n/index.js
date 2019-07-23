import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import Backend from 'i18next-xhr-backend';
import locales from '../_fakeBackend/data/translations';
export default (lang) => {
    i18n.use(Backend)
        .use(initReactI18next)
        .init({
            // backend: {
            //     loadPath: '/api/locales/{{lng}}.json',
            // },
            resources: locales,
            keySeparator: false, // we do not use keys in form messages.welcome
            interpolation: {
                escapeValue: false // react already safes from xss
            }
        });
    return i18n;
}
