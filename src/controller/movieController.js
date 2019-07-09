const movies = require("../models/Movie");

async function showAll(req, res) {
  const films = await movies.find();
  res.json(films); 
};

async function showMovie (req, res){
  const movieTitle = req.params.title;
  const movie = await movies.findOne({title: movieTitle});
  res.json(movie);
};

async function addMovie(req, res) {
  const movieToCreate = new movies(req.body);
  await movieToCreate.save();
  const films = await movies.find();
  res.json(films);
};

async function deleteMovie (req, res){
  const movieTitle = req.params.title;
  await movies.findOneAndDelete({title: movieTitle});
  const films = await movies.find();
  res.json(films);
};

async function updateMovie (req, res){
  const movieTitle = req.params.title;
  await movies.findOneAndUpdate({title: movieTitle}, req.body, {new: true});
  const films = await movies.find();
  res.json(films);
};

async function like (req, res){
  const movieTitle = req.params.title;
  let like = movies.findOne({title: movieTitle}).likes;
  console.log("likes = ", like);
  await movies.findOneAndUpdate({title: movieTitle}, like++, {new: true});
  const films = await movies.find();
  res.json(films);
};

async function dislike(req, res){
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
