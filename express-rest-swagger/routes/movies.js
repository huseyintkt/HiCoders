import express from 'express';
var router = express.Router();
import * as service from '../service/movie-service.js'

/* GET movies listing. */
router.get('/', function(req, res, next) {
  const allMovies = service.getAllMovies();
  res.send(allMovies);
});

/** Add a new movie */
router.post('/', function(req, res, next) {
  const newMovie = req.body; 
  service.createMovie(newMovie);
  res.status(201).send();
});

/** get a movie by id */
router.get('/:id', function(req, res, next) {
  let movieId = req.params.id;
  const movie = service.getMovieById(movieId)
  res.send(movie);
});


/** delete a movie by id */
router.delete('/:id', function(req, res, next) {
  let movieId = req.params.id;
  service.deleteMovie(movieId);
  res.status(200);
});

/** delete a movie by id */
router.put('/:id', function(req, res, next) {
  let movieId = req.params.id;
  let updatedMovie = req.body;
  service.updateMovie(movieId, updatedMovie);
  res.status(200);
});

export default router;