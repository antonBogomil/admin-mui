import {ACTION_TYPES} from "../types";
export const changeLang = (id) => {
    return {
        type: ACTION_TYPES.CHANGE_LANG,
        payload: id
    }
};
export const changeTheme = (name) => {
    return {
        type: ACTION_TYPES.CHANGE_THEME,
        payload: name
    }
};