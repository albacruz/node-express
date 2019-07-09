const express = require("express");
const router = express.Router();
const movie_controller = require("../controller/movieController");

router.get("/", movie_controller.showAll);
router.get("/:title", movie_controller.showMovie);
router.post("/", movie_controller.addMovie);
router.delete("/:title", movie_controller.deleteMovie);
router.put("/:title", movie_controller.updateMovie);
router.put("/like/:title", movie_controller.like);
router.put("/dislike/:title", movie_controller.dislike);

module.exports = router;
