module.exports = function (router) {
    router.get('/test', function(req, res, next) {
        return res.send("api route section works");
    });
};
