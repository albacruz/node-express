const express = require("express");
const app = express();
const routerUsuario = require("../api/routerUsuario");
const routerMovie = require("../api/routerMovie");
app.use(express.json());

app.use("/users", routerUsuario);
app.use("/users/:id", routerUsuario);
app.use("/users/addUser", routerUsuario);
app.use("/users/deleteUser/:id", routerUsuario);
app.use("/users/update/:elemento/:valor", routerUsuario);

app.use("/movies", routerMovie);
app.use("/movies/:id", routerMovie);
app.use("/movies/addMovie", routerMovie);
app.use("/movies/deleteMovie/:id", routerMovie);
app.use("/movies/like/:id", routerMovie);

app.listen(3000, () => console.log("Listening on port 3000!"));
