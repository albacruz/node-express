const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const routerUsuario = require("../router/routerUsuario");
const routerMovie = require("../router/routerMovie");
app.use(express.json());
app.use(morgan("dev"));

app.use("/users", routerUsuario);
app.use("/movies", routerMovie);

mongoose
  .connect("mongodb://localhost:27017/api_movies", { useNewUrlParser: true })
  .then(db => console.log("Conected to mongodb"))
  .catch(err => console.log(err));

app.listen(3000, () => console.log("Listening on port 3000!"));
