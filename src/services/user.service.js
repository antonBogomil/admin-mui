import {_httpRequest} from "../utils/_httpRequest";
import {history} from "../utils/history";
import {userActions, notificationActions} from "../store/actions";

export const userService = {
    login,
    logout,
    getList,
    create,
    auth
};


function login(login, password) {
    _httpRequest.post('/login', {login, password}).then((data) => {
        if (data.user) {
            userActions.login(data.user);
            const path = history.location.pathname.replace('/login', '');
            history.push(path);
        } else if (data.message) {
            notificationActions.showErrorMessage(data.message);
        }
    })
}

function logout() {
    _httpRequest.get('/logout').then((data) => {
        userActions.logout()
    })
}

function auth() {
    _httpRequest.get('/auth')
        .then((data) => {
            if (data.user) {
                userActions.login(data.user)
            } else {
                notificationActions.showErrorMessage(data.message);
            }
        }).catch((err) => {
        console.log(err);
    })
}

function getList(params) {
    return _httpRequest.get('/users', params)
}


function create(data) {
    return _httpRequest.post('/users/add', data);
}
