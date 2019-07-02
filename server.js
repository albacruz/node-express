const express = require("express");
const app = express();

const usuarios = [
  { id: 1, name: "Pepe" },
  { id: 2, name: "Juan" },
  { id: 3, name: "Ele" },
  { id: 4, name: "Ale" },
  { id: 5, name: "Aarón" },
  { id: 6, name: "Darío" },
  { id: 7, name: "Migue" },
  { id: 8, name: "Albito" }
];

app.get("/users", (req, res) => {
  /* console.log("Request: ", req.headers); */
  res.json(usuarios);
});

app.get("/", (req, res) => {
  /* console.log("Request: ", req.headers); */
  res.send("<h1>Hello World!</h1>");
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = usuarios.find(user => user.id == userId);
  /* console.log("Request: ", req.headers); */
  res.json(user);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
