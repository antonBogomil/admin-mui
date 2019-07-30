export const userRoute = function (req, res) {
    if (req.url.endsWith('/login')) {
        res.success('user logged in');
    }
};