import users from './data/users';
import {checkAuth} from "./auth";
import {getPage} from "./utils";
import Router from "./router";
import {userRoute} from "./router/user";

const router = new Router();

export function fakeBackend() {
    function success(message) {
        console.log(message);
    }

    function error(e) {
        console.error(e);
    }
    const req = {
        url: '/user/login',
        body: "{name: \"Anton\"}"
    };
    router.use('/user', userRoute);
    router.listen(req, {success, error});
    console.log(router);
    // let realFetch = window.fetch;
    // window.fetch = function (url, options) {
    //     const RANDOM_DELAY = 200 + 500 * Math.random();
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             // router({url, options},resolve,reject);
    //             realFetch(url, options).then(response => resolve(response));
    //         }, RANDOM_DELAY);
    //     });
    // }
}




