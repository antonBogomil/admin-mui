import {ACTION_TYPES} from "../types";
const initialState = {
    lang: 'en',
    theme: 'default'
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_LANG:
            return {
                ...state,
                lang: action.payload,
            };
        case ACTION_TYPES.CHANGE_THEME:
            return {
                ...state,
                theme: action.payload
            };
        default :
            return state;
    }
};