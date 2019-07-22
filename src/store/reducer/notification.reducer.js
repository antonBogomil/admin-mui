import {ACTION_TYPES} from "../types";

const initialState = {
    message: null,
    variant: 'primary'
};
export default (state = initialState, action) => {
    if (action.type === ACTION_TYPES.SHOW_NOTIFICATION) {
        return {
            variant: action.payload.variant,
            message: action.payload.message,
        }
    } else {
        return {
            ...state,
            message: null
        }
    }
};