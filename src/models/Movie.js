class Movie {
  constructor(id, title, director, genre, releaseDate, rating, likes) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseDate = releaseDate;
    this.rating = rating;
    this.likes = likes;
  }
}

module.exports = Movie;
