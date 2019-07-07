import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import resources from './dictionaries';
export default function initTranslation(defaultLang) {
    i18n.use(initReactI18next).init({
        resources,
        initImmediate: false,
        lng: defaultLang
    });
    return i18n;
}

