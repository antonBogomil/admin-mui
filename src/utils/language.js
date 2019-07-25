import {changeLang} from "../store/actions/site.actions";

const DEFAULT_LANG = 'en';

export default function language(urlLang, lang) {
    if (urlLang) {
        if (urlLang !== lang) {
            changeLang(urlLang);
        }
    } else {
        if (lang !== DEFAULT_LANG) {
            changeLang(DEFAULT_LANG);
        }
    }
}

function changeLanguage(lang) {

}