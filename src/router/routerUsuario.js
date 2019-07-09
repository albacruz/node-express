const express = require("express");
const router = express.Router();
const user_controller = require("../controller/userController");

router.get("/", user_controller.showAll);
router.get("/:name", user_controller.showUser);
router.post("/", user_controller.addUser);
router.delete("/:name", user_controller.deleteUser);
router.put("/:name", user_controller.updateUser);

module.exports = router;
