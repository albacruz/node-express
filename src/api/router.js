const express = require("express");
const router = express.Router();
const usuarios = require("../database/usuarios");

router.get("/", (req, res) => {
  res.json(usuarios);
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  const user = usuarios.find(user => user.id == userId);
  return res.json(user);
});

module.exports = router;
