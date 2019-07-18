import {ACTION_TYPES} from "../types";
import store from '../../store';
export const changeLang = (id) => {
    store.dispatch({
        type: ACTION_TYPES.CHANGE_LANG,
        payload: id
    })
};
export const changeTheme = (name) => {
    return {
        type: ACTION_TYPES.CHANGE_THEME,
        payload: name
    }
};