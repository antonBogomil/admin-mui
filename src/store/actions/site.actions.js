import {ACTION_TYPES} from "../types";
import store from '../../store';
import {history} from "../../utils/history";

export const changeLang = (lang = 'en') => {
    store.dispatch({
        type: ACTION_TYPES.CHANGE_LANG,
        payload: lang
    })
};
export const changeTheme = (name) => {
    return {
        type: ACTION_TYPES.CHANGE_THEME,
        payload: name
    }
};