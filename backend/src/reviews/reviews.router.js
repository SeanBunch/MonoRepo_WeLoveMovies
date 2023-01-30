const router = require("express").Router({ mergeParams: true });
const controller = require("./reviews.controller");
const methodeNotAllowed = require("../errors/methodNotAllowed");

router.route("/:reviewId").put(controller.update).delete(controller.destroy).all(methodeNotAllowed)


module.exports = router;