import {history} from "../utils/history";
import {DEFAULT_LOCALE_CODE, LOCALE_CODES} from "../admin/config/locales";
export function changeLocale(locale) {
    let newUrl = history.location.pathname.slice(0);
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
    history.push(newUrl);
}
