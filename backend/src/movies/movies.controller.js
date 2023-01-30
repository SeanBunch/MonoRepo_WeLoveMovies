const movieServices = require("./movies.services");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function list(req, res, next) {
    const data = await movieServices.list(req.query.is_showing);
    res.json({ data });
}

async function read(req, res, next) {
    res.json({ data: res.locals.movie });
}
async function movieExists(req, res, next) {
    const foundMovie = await movieServices.read(req.params.movieId);

    if (foundMovie) {
        res.locals.movie = foundMovie;
        return next();
    }
    return next({
        status: 404,
        message: "Movie cannot be found."
    })
}

async function theatersByMovieId(req, res, next) {
    const data = await movieServices.listTheatersByMovieId(Number(req.params.movieId));

    res.json({ data });
}
async function listMovieReviews(req, res, next) {
    const data = await movieServices.reviewsByMovieId(Number(req.params.movieId));
    
    res.json({ data });
}
module.exports = {
    list,
    read: [movieExists, read],
    theatersByMovieId: [movieExists, asyncErrorBoundary(theatersByMovieId)],
    listMovieReviews: [movieExists, asyncErrorBoundary(listMovieReviews)],
}