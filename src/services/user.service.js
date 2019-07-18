import {_httpRequest} from "../utils/_httpRequest";
import {history} from "../utils/history";
import {userActions, notificationActions} from "../store/actions";

export const userService = {
    login,
    logout,
    getList,
    create
};


function login(login, password) {
    _httpRequest.post('/login', {login, password}).then((data) => {
        userActions.login(data);
        history.push('/admin');
    })
        .catch((err) => {
            notificationActions.showNotification(err.message);
        });
}

function logout() {
}

function getList(params) {
    return _httpRequest.get('/users', params)
}


function create(data) {
    return _httpRequest.post('/users/add', data);
}