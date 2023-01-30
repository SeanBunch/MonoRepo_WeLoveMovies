const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodeNotAllowed = require("../errors/methodNotAllowed");

router.route("/:movieId/reviews").get(controller.listMovieReviews).all(methodeNotAllowed);
router.route("/:movieId/theaters").get(controller.theatersByMovieId).all(methodeNotAllowed);
router.route("/:movieId").get(controller.read).all(methodeNotAllowed);
router.route("/").get(controller.list).all(methodeNotAllowed);


module.exports = router;
