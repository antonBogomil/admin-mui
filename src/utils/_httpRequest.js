
const BASE_URL = 'http://5cfffd9fd691540014b0e38e.mockapi.io/api/v1';


export const _httpRequest = {
    get, post
};

function get(url, params) {
    var esc = encodeURIComponent;
    // let query = params.length ? '' : '?' + Object.keys(params)
    //     .map(k => esc(k) + '=' + esc(params[k]))
    //     .join('&');
    const requestOptions = {
        method: "GET",
        params
    };
    return fetch(BASE_URL + url, requestOptions).then(_handleResponse);
}

function post(url, data) {
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(data)
    };
    return fetch(BASE_URL + url, requestOptions).then(_handleResponse);
}

function _handleResponse(response) {
    if (response.ok || response) {
        return JSON.parse(response);
    } else {
        const error = response.statusText || 'get request error!';
        return Promise.reject(error);
    }
}
