const BASE_URL = '/api';
const commonOptions = {
	headers: new Headers({'content-type': 'application/json'}),
};

export const _httpRequest = {
	get, post
};

function get(url, params) {
	// var esc = encodeURIComponent;
	// let query = params.length ? '' : '?' + Object.keys(params)
	//     .map(k => esc(k) + '=' + esc(params[k]))
	//     .join('&');
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
		return response.json().then(json => {
			return Promise.resolve(json);
		}).catch(err => {
			return Promise.resolve(response);
		});

	} else {
		return response.json().catch(err => {
			throw new Error(response.statusText);
		}).then(json => {
			throw new Error(json.message);
		});
	}
}