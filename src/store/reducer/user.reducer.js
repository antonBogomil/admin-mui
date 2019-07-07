import {ACTION_TYPES} from "../types";

export default (state = null, action) => {
    switch (action.type) {
        case ACTION_TYPES.USER_LOGIN:
            return action.payload;
        case ACTION_TYPES.USER_LOGOUT:
            return action.payload;
        default:
            return state
    }
};