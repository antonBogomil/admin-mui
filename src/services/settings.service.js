
import locales from "../settings/locales";
import {history} from "../utils/history";

export function setLocaleSettings(locale = 'en') {
    const reg = `/(${locales})`;
    const currentUrl = history.location.pathname;
    let url = currentUrl;
    const m = currentUrl.match(reg);
    if (locale!=='en'){
        if (currentUrl.match(reg)) {
            url = currentUrl.replace(m[1], locale);
        } else {
            url = '/' + locale + currentUrl
        }
    }
    else {
        url = currentUrl.replace(m[0], '');
    }
    console.log(url);
    history.push(url);
}
