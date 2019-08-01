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
		userActions.login(data.user);
		const path = history.location.pathname.replace('/login', '');
		history.push(path);
	})
		.catch((err) => {
			notificationActions.showErrorMessage(err.message);
		});
}

function logout() {
    _httpRequest.get('/logout').then((data) => {
        userActions.logout()
    })
}

function auth() {
	_httpRequest.get('/auth').then((data) => {
		userActions.login(data)
	})
}

function getList(params) {
	return _httpRequest.get('/users', params)
}


function create(data) {
	return _httpRequest.post('/users/add', data);
}
