import express from 'express';
var router = express.Router();
import * as service from '../service/movie-service.js'

/* GET movies listing. */
router.get('/', async function(req, res, next) {
  const allMovies = await service.getAllMovies();
  res.send(allMovies);
});

/** Add a new movie */
router.post('/', async function(req, res, next) {
  const newMovie = req.body; 
  const createdMovie = await service.createMovie(newMovie);
  res.status(201).send(createdMovie);
});

/** get a movie by id */
router.get('/:id', async function(req, res, next) {
  let movieId = req.params.id;
  const movie = await service.getMovieById(movieId)
  res.send(movie);
});


/** delete a movie by id */
router.delete('/:id', async function(req, res, next) {
  let movieId = req.params.id;
  await service.deleteMovie(movieId);
  res.status(200).send({});
});

/** update a movie by id */
router.put('/:id', async function(req, res, next) {
  let movieId = req.params.id;
  let movieToBeUpdated = req.body;
  let updatedMovie = await service.updateMovie(movieId, movieToBeUpdated);
  res.status(200).send(updatedMovie);
});

export default router;