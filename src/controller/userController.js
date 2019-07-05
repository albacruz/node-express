const userModel = require("../models/User");
const usersDB = require("../database/usuarios");

showAll = (req, res) => {
  res.json(usersDB);
};

showUser = (req, res) => {
  const userId = req.params.id;
  const user = usersDB.find(user => user.id == userId);
  res.json(user);
};

addUser = (req, res) => {
  const user = new userModel(usersDB.length + 1, req.body.name, req.body.age);
  usersDB.push(user);
  res.send("Se ha añadido correctamente");
};

deleteUser = (req, res) => {
  const userId = req.params.id;
  const user = usersDB.find(user => user.id == userId);
  const userToRemove = usersDB.indexOf(user);
  usersDB.splice(userToRemove, 1);
  res.send("Se ha eliminado correctamente");
};

updateUser = (req, res) => {
  const userIdToUpdate = req.params.id;
  const userToUpdate = req.body;
  const user = usersDB.find(user => user.id == userIdToUpdate);

  user.name = userToUpdate.name || user.name;
  user.age = userToUpdate.age || user.age;

  res.json(user);
};

module.exports = {
  addUser,
  showUser,
  showAll,
  deleteUser,
  updateUser
};
