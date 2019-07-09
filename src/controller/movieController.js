const movies = require("../models/Movie");

async function showAll(req, res) {
  const films = await movies.find();
  res.json(films);
}

async function showMovie(req, res) {
  const movieTitle = req.params.title;
  const movie = await movies.findOne({ title: movieTitle });
  res.json(movie);
}

async function addMovie(req, res) {
  const movieToCreate = new movies(req.body);
  await movieToCreate.save();
  const films = await movies.find();
  res.json(films);
}

async function deleteMovie(req, res) {
  const movieTitle = req.params.title;
  await movies.findOneAndDelete({ title: movieTitle });
  const films = await movies.find();
  res.json(films);
}

async function updateMovie(req, res) {
  const movieTitle = req.params.title;
  await movies.findOneAndUpdate({ title: movieTitle }, req.body, { new: true });
  const films = await movies.find();
  res.json(films);
}

async function like(req, res) {
  const movieTitle = req.params.title;
  const object = await movies.findOne({ title: movieTitle });
  let like = object.likes;
  like++;
  await movies.findOneAndUpdate({ title: movieTitle }, { likes: like });
  res.json(object);
}

async function dislike(req, res) {
  const movieTitle = req.params.title;
  const object = await movies.findOne({ title: movieTitle });
  let like = object.likes;
  if (like > 0) like--;
  await movies.findOneAndUpdate({ title: movieTitle }, { likes: like });
  res.json(object);
}

module.exports = {
  addMovie,
  showMovie,
  showAll,
  deleteMovie,
  updateMovie,
  like,
  dislike
};
