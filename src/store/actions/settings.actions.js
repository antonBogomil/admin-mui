import {ACTION_TYPES} from "../types";
import store from '../';
import {changeTranslation} from "../../i18n";
import {setLocaleSettings} from "../../services/settings.service";

const changeLocale = (locale) => {
    changeTranslation(locale);
    store.dispatch({
        type: ACTION_TYPES.CHANGE_LOCALE,
        payload: locale
    });
};
const changeTheme = (name) => {
    return {
        type: ACTION_TYPES.CHANGE_THEME,
        payload: name
    }
};
export const settingsActions = {
    changeLocale,
    changeTheme
};
