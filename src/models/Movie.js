const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: String,
  director: String,
  genre: String,
  releaseDate: Date,
  rating: Number,
  likes: Number
});

module.exports = mongoose.model("movies", MovieSchema);
