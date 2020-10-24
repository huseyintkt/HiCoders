const express = require('express');
const cors = require('cors')
const service = require("./MovieService");
const Movie = require("./Movie");
const app = express();
const PORT = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 
app.use(cors());

// ReST Endpoint
app.get('/movies', function (req, res) {
  let list = service.getAllMovies();
  res.send(list);
});

app.get('/movies/:id', function (req, res) {
    let movie = service.getMovieById(req.params.id);
    res.send(movie);
});

// CREATE a movie
app.post('/movies', function (req, res) {

    let mo = req.body;
    let movie = new Movie(mo.id, mo.name, mo.price, mo.year);
    service.addMovie(movie);
    res.send('Gönderilen filmi database kaydet');
});

app.delete('/movies', function (req, res) {
    res.send('Bütün filmleri sil');
});

app.delete('/movies/:id', function (req, res) {
    service.deleteMovieById(req.params.id);
    res.send('silindi');
});

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))