import {ACTION_TYPES} from "../types";
import store from '../../store';

export const userActions = {
    login, logout
};


function login(user) {
    store.dispatch({
        type: ACTION_TYPES.USER_LOGIN,
        payload: user
    });
}

function logout() {
    store.dispatch({
        type: ACTION_TYPES.USER_LOGOUT,
        payload: null
    });
}
