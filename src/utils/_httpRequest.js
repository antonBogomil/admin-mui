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
	};
	const urlParams = params && queryParams(params);
	return fetch(BASE_URL + url + (params ? `?${urlParams}` : ''), requestOptions).then(fetchHandler)
}

function post(url, data) {
	const requestOptions = {
		method: "POST",
		...commonOptions,
		body: JSON.stringify(data)
	};
	return fetch(BASE_URL + url, requestOptions).then(fetchHandler);
}

function fetchHandler(response) {
	if (response.ok)
		return response.json();
	else
		var error = new Error(response.statusText)
	error.response = response;
	throw error;
}

function queryParams(params) {
	return Object.keys(params)
		.map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
		.join('&');
}