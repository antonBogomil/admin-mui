export const _httpRequest = {
    get, post
};

function get(url, params) {
    var esc = encodeURIComponent;
    let query = params.length ? '' : '?' + Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
    return fetch(url + query).then(_handleResponse);
}

function post(url, data) {
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(data)
    };
    return fetch(url, requestOptions).then(_handleResponse);
}

function _handleResponse(response) {
    if (response.ok || response) {
        return response.json();
    } else {
        const error = response.statusText || 'get request error!';
        return Promise.reject(error);
    }
}
