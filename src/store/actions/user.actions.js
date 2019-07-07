import {ACTION_TYPES} from "../types";
import {userService} from "../../services/user.service";
import store from '../../store';
export const userActions = {
    login, logout
};


function login(username, password) {
    store.dispatch({
        type: ACTION_TYPES.USER_LOGIN,
        payload: {
            username, password
        }
    });
    userService.login(username,password);
    window.location = '/admin';
}
function auth() {

}
function logout() {
    store.dispatch({
        type: ACTION_TYPES.USER_LOGOUT,
        payload: null
    });
    userService.logout();
    window.location = '/';
}
