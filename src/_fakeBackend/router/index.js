class Router {
    routes = {};

    use(path, handler) {
        this.routes[path] = new Route({path, handler})
    }

    listen(req, res) {
        const url = req.url;
        console.log(url);
        for (let key in this.routes) {
            if (url.indexOf(key) === 0) {
                const route = this.routes[key];
                route && route.handler(req, res)
            }
        }
    };
}

export default Router;

class Route {
    constructor(props) {
        this.path = props.path;
        this.handler = props.handler;
    };
}
