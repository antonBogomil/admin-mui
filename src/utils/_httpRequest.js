import {history} from "./history";

const BASE_URL = '/api';
const commonOptions = {
    headers: new Headers({'content-type': 'application/json'}),
};

export const _httpRequest = {
    get, post
};

function get(url, params) {

    const requestOptions = {
        method: "GET",
        ...commonOptions,
        params
    };
    return fetch(BASE_URL + url, requestOptions).then(fetchHandler)
}

function post(url, data) {
    const requestOptions = {
        method: "POST",
        ...commonOptions,
        body: JSON.stringify(data)
    };
    return fetch(BASE_URL + url, requestOptions).then(fetchHandler)
}

function fetchHandler(response) {
    if (response.ok) {
        return response.json()
            .then(json => {
                return Promise.resolve(json);
            }).catch((json) => {
                console.log(json);
            })
    } else {
        console.log(response);
        if (response.status === 500) {
            history.push('/server-error')
        }
    }
}
