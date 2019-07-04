const express = require("express");
const router = express.Router();
const movie_controller = require("../controller/movieController");

router.get("/", movie_controller.showAll);
router.get("/:id", movie_controller.showMovie);
router.post("/addMovie", movie_controller.addMovie);
router.delete("/:id", movie_controller.deleteMovie);
router.put("/:element", movie_controller.updateMovie);
router.put("/update", movie_controller.updateMovie);

module.exports = router;
