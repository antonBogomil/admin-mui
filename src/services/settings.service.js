import {history} from "../utils/history";
import {DEFAULT_LOCALE_CODE, LOCALE_CODES} from "../admin/config/locales";
import {changeTranslation} from "../i18n";
export function changeLocaleUrl(locale = DEFAULT_LOCALE_CODE) {
    const REG = new RegExp('^\\/(..?)\\/');
    const currentUrl = history.location.pathname;
    let url = currentUrl;
    const currentCode = currentUrl.match(REG);
    if (currentCode && currentCode[1]) {
        if (locale !== DEFAULT_LOCALE_CODE) {
            url = currentUrl.replace(currentCode[1], locale);
        } else {
            url = currentUrl.replace(`/${currentCode[1]}`, '');
        }
    } else {
        url = '/' + locale + currentUrl
    }
    history.push(url);
}

export function changeLocale(locale) {
    let newUrl = history.location.pathname;
    const REG = new RegExp('^\\/(..?)\\/');
    const result = newUrl.match(REG);
    if (result) {
        if (locale === DEFAULT_LOCALE_CODE) {
            newUrl = newUrl.replace(`/${result[1]}`, '');
        } else {
            newUrl = newUrl.replace(result[1], locale)
        }
    } else {
        newUrl = '/' + locale + newUrl
    }
    changeTranslation(locale);
    history.push(newUrl);
}
