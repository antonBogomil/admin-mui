import {history} from "../utils/history";
import {DEFAULT_LOCALE_CODE, LOCALE_CODES} from "../admin/config/locales";
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
