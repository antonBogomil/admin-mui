import {ACTION_TYPES} from "../types";

const initialState = {
    theme: 'default',
    init: false,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_LOCALE:
            return {
                ...state,
                locale: action.payload,
            };
        case ACTION_TYPES.INIT_SETTINGS:
            return {
                ...state,
                locale: action.payload.locale,
                init: true,
            };
        default :
            return state;
    }
};
