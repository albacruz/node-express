const movieModel = require("../models/Movie");
const moviesDB = require("../database/movies");

showAll = (req, res) => {
  res.json(moviesDB);
};

showMovie = (req, res) => {
  const movieId = req.params.id;
  const movie = moviesDB.find(movie => movie.id == movieId);
  res.json(movie);
};

addMovie = (req, res) => {
  const movie = new movieModel(
    moviesDB.length,
    req.body.title,
    req.body.director,
    req.body.genre,
    req.body.releaseDate,
    req.body.rating,
    req.body.likes
  );
  moviesDB.push(movie);
  res.send("Se ha añadido correctamente");
};

deleteMovie = (req, res) => {
  const movieId = req.params.id;
  const movie = moviesDB.find(movie => movie.id == movieId);
  const movieToRemove = moviesDB.indexOf(movie);
  moviesDB.splice(movieToRemove, 1);
  res.send("Se ha eliminado correctamente");
};

updateMovie = (req, res) => {};

module.exports = {
  addMovie,
  showMovie,
  showAll,
  deleteMovie,
  updateMovie
};
