import {_httpRequest} from "../utils/_httpRequest";

export const userService = {
    login,
    logout,
    getList,
    create
};


function login(username, password) {
    /**HERE HTTP REQUEST SETTINGS*/
    /*HERE TEST ONLY*/
    localStorage.setItem('user', JSON.stringify({username, password}));
    return {
        username, password
    }
}
function auth() {
    return _httpRequest.get('/auth');
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getList(url, params) {
    return _httpRequest.get(url, params)
}


function create(data) {
    console.log(data);
    return _httpRequest.post('/users/add', data);
}