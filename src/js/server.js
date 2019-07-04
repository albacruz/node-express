const express = require("express");
const app = express();
const routerUsuario = require("../router/routerUsuario");
const routerMovie = require("../router/routerMovie");
app.use(express.json());

app.use("/users", routerUsuario);
app.use("/movies", routerMovie);

app.listen(3000, () => console.log("Listening on port 3000!"));
