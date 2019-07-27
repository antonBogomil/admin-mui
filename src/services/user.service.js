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
        const path = history.location.pathname.replace('/login', '');
        history.push(path);
    })
        .catch((err) => {
            notificationActions.showErrorMessage(err.message);
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
