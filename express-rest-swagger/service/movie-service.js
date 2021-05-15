
let movieDatabase = [
    {
        "id": 10002,
        "name": "Die Hard",
        "year": 1999
    }
];


export function createMovie(pMovie){
    movieDatabase.push(pMovie);
    return pMovie;
}

export function deleteMovie(pId){
    movieDatabase = movieDatabase.filter(m => m.id != pId);
}

export function getAllMovies(){
    return movieDatabase;
}

export function getMovieById(pId){
    let movie = movieDatabase.find(m => m.id = pId);
    return movie;
}

export function updateMovie(pId, pUpdateMovie){
    let movie = getMovieById(pId);
    movie.name = pUpdateMovie.name;
    movie.year = pUpdateMovie.year;
}

//let newMovie = JSON.parse(JSON.stringify(movie))
//Object.assign({}, movie)