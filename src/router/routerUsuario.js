const express = require("express");
const router = express.Router();
const user_controller = require("../controller/userController");

router.get("/", user_controller.showAll);
router.get("/:id", user_controller.showUser);
router.post("/addUser", user_controller.addUser);
router.delete("/:id", user_controller.deleteUser);
router.put("/:element", user_controller.updateUser);
router.put("/update", user_controller.updateUser);

module.exports = router;
