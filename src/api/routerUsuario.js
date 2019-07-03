const express = require("express");
const router = express.Router();
const usuarios = require("../database/usuarios");

router.get("/", (req, res) => {
  res.json(usuarios);
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  const user = usuarios.find(user => user.id == userId);
  res.json(user);
});

router.post("/", (req, res) => {
  const maxId = usuarios.length;
  const user = req.body;
  user.id = maxId + 1;
  usuarios.push(user);
  res.json(user);
});

router.get("/deleteUser/:id", (req, res) => {
  const userId = req.params.id;
  const user = usuarios.find(user => user.id == userId);
  const userToRemove = usuarios.indexOf(user);
  usuarios.splice(userToRemove, 1);
  res.send("Se ha eliminado correctamente");
});

router.put("/update", (req, res) => {
  res.json(usuarios);
});

module.exports = router;
