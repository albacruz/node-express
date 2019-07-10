const users = require("../models/User");

async function showAll(req, res) {
  const usus = await users.find();
  res.json(usus);
}

async function showUser(req, res) {
  const userName = req.params.name;
  const user = await users.findOne({ name: userName });
  res.json(user);
}

async function addUser(req, res) {
  const userToCreate = new users(req.body);
  const real = await users.find({ name: userToCreate.name });
  if (real == null) {
    await userToCreate.save();
    const usus = await users.find();
    res.json(usus);
  } else {
    res.send("Ya existe");
  }
}

async function deleteUser(req, res) {
  const userName = req.params.name;
  await users.findOneAndDelete({ name: userName });
  const usus = await users.find();
  res.json(usus);
}

async function updateUser(req, res) {
  const userName = req.params.name;
  await users.findOneAndUpdate({ name: userName }, req.body, { new: true });
  const user = await users.findOne({ name: userName });
  res.json(user);
}

module.exports = {
  addUser,
  showUser,
  showAll,
  deleteUser,
  updateUser
};
