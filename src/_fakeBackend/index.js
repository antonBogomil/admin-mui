import users from './data/users';
import {checkAuth} from "./auth";
import {getPage} from "./utils/utils";

export function fakeBackend() {
    let realFetch = window.fetch;

    window.fetch = function (url, options) {
        const RANDOM_DELAY = 200 + 500 * Math.random();
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url.endsWith('/login') && options.method === 'POST') {
                    const body = JSON.parse(options.body);
                    const {login, password} = body;
                    checkAuth({login, password}, resolve, reject);
                }
                ;
                if (url.endsWith('/users') && options.method === 'GET') {
                    resolve(JSON.stringify({
                        items: getPage(users, options.params),
                        count: users.length,
                        rows: options.params.rows
                    }))
                }
                realFetch(url, options).then(response => resolve(response));
            }, RANDOM_DELAY);
        });
    }
}



