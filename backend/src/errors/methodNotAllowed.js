function methodeNotAllowed(req, res, next) {
    next({
        status: 405,
        message: `${req.method} not allowed for ${req.originalUrl}`,
    });
}

module.exports = methodeNotAllowed