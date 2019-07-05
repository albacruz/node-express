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

updateMovie = (req, res) => {
  const movieIdToUpdate = req.params.id;
  const updatedMovie = req.body;
  const movie = moviesDB.find(movie => movie.id == movieIdToUpdate);

  movie.title = updatedMovie.title || movie.title;
  movie.director = updatedMovie.director || movie.director;
  movie.genre = updatedMovie.genre || movie.genre;
  movie.releaseDate = updatedMovie.releaseDate || movie.releaseDate;
  movie.rating = updatedMovie.rating || movie.rating;

  res.json(movie);
};

like = (req, res) => {
  const movieId = req.params.id;
  const movie = moviesDB.find(movie => movie.id == movieId);
  movie.likes++;

  res.json(movie);
};

dislike = (req, res) => {
  const movieId = req.params.id;
  const movie = moviesDB.find(movie => movie.id == movieId);
  if (movie.likes > 0) movie.likes--;

  res.json(movie);
};

module.exports = {
  addMovie,
  showMovie,
  showAll,
  deleteMovie,
  updateMovie,
  like,
  dislike
};
