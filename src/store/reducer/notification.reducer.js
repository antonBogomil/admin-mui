import {ACTION_TYPES} from "../types";

const initialState = {
    message: null,
    variant: 'default'
};
export default (state = initialState, action) => {
    if (action.type === ACTION_TYPES.SHOW_NOTIFICATION) {
        return {
            ...state,
            message: action.payload.message,
        }
    } else {
        return {
            ...state,
            message: null
        }
    }
};