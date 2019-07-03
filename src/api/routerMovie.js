const express = require("express");
const router = express.Router();
const movies = require("../database/movies");

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:id", (req, res) => {
  const movieId = req.params.id;
  const movie = movies.find(movie => movie.id == movieId);
  res.json(movie);
});

router.post("/", (req, res) => {
  const maxId = movies.length;
  const movie = req.body;
  movie.id = maxId;
  movies.push(movie);
  res.json(movie);
});

router.get("/deleteMovie/:id", (req, res) => {
  const movieId = req.params.id;
  const movie = movies.find(movie => movie.id == movieId);
  const movieToRemove = movies.indexOf(movie);
  movies.splice(movieToRemove, 1);

  res.send("Se ha eliminado correctamente");
});

router.get("/like/:id", (req, res) => {
  const movieId = req.params.id;
  const movie = movies.find(movie => movie.id == movieId);
  movie.likes++;

  res.json(movie);
});

router.get("/dislike/:id", (req, res) => {
  const movieId = req.params.id;
  const movie = movies.find(movie => movie.id == movieId);
  if (movie.likes > 0) movie.likes--;

  res.json(movie);
});

module.exports = router;
