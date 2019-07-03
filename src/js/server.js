const express = require("express");
const app = express();
const router = require("../api/router");
app.use(express.json());

const usuarios = [
  { id: 1, name: "Pepe", age: 15 },
  { id: 2, name: "Juan", age: 15 },
  { id: 3, name: "Ele", age: 15 },
  { id: 4, name: "Ale", age: 15 },
  { id: 5, name: "Aarón", age: 15 },
  { id: 6, name: "Darío", age: 15 },
  { id: 7, name: "Migue", age: 15 },
  { id: 8, name: "Albito", age: 15 }
];

/* let throwDice = [{ caras: 0, numero: 0 }];

app.get("/users", (req, res) => {
  res.json(usuarios);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = usuarios.find(user => user.id == userId);

  res.json(user);
});

app.get("/dado/:numero", (req, res) => {
  const caras = req.params.numero;
  throwDice.caras = Number(caras);
  const resultadito = Math.ceil(Math.random() * caras);
  throwDice.numero = resultadito;

  res.json(throwDice);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = Math.random();
  usuarios.push(newUser);
  res.json(newUser);
});

app.post("/users2", (req, res) => {
  if (Object.entries(req.body).length === 0) {
    res.status(400).send("Debes escribir algo");
  } else {
    const newUser = req.body;
    newUser.id = Math.random();
    usuarios.push(newUser);
    res.json(newUser);
  }
});

app.post("/users3", (req, res) => {
  if (Object.entries(req.body).length === 0) {
    res.status(400).send("Debes escribir algo");
  } else {
    const user = usuarios.find(user => user.id == req.body.id);
    const name = usuarios.find(user => user.name == req.body.name);
    const age = usuarios.find(user => user.age == req.body.age);
    if ((user && name && age) != undefined) {
      res.status(400).send("Este usuario ya existe");
    } else {
      const newUser = req.body;
      newUser.id = Math.random();
      usuarios.push(newUser);
      res.json(newUser);
    }
  }
}); */

app.use("/users", router);
app.use("/users/:id", router);

app.listen(3000, () => console.log("Listening on port 3000!"));
