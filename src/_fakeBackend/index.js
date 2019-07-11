import users from './data/users';

export function fakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, options) {
        console.log(options);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url.endsWith('/auth') && options.method === 'POST') {
                    return
                }
                if (url.endsWith('/users') && options.method === 'GET') {
                    resolve(JSON.stringify({
                        items: getPage(users, options.params),
                        count: users.length,
                        rows: options.params.rows
                    }))
                }
                realFetch(url, options).then(response => resolve(response));
            }, 500);
        });
    }
}


function getPage(data, params) {
    const from = params.rows * params.page;
    const to = from + params.rows;
    console.log(from,to);
    return data.slice(from, to)
}
