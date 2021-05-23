import * as movieRepository from './persistency/movie-repository.js'


let movieDatabase = [
    {
        "id": 10002,
        "name": "Die Hard",
        "year": 1999
    }
];


export async function createMovie(pMovie){
    return await movieRepository.create(pMovie);
}

export async function deleteMovie(pId){
    return await movieRepository.remove(pId);
}

export async function getAllMovies(){
    return await movieRepository.getAll();
}

export async function getMovieById(pId){
    let movie = await movieRepository.findById(pId)
    return movie;
}

export async function updateMovie(pId, pUpdateMovie){
    let movie = await movieRepository.updateMovie(pId, pUpdateMovie);
    return movie;
}

//let newMovie = JSON.parse(JSON.stringify(movie))
//Object.assign({}, movie)