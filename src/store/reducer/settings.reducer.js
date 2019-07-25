import {ACTION_TYPES} from "../types";
const initialState = {
    // theme: 'default',
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_LOCALE:
            return {
                ...state,
                locale: action.payload,
            };
        default :
            return state;
    }
};
