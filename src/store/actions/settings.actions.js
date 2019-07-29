import {ACTION_TYPES} from "../types";
import store from '../';
import {changeTranslation} from "../../i18n";

const initSettings = (locale) => {
    store.dispatch({
        type: ACTION_TYPES.INIT_SETTINGS,
        payload: locale,
    });
};
const setLocale = (locale) => {
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
    setLocale,
    initSettings,
    changeTheme
};
