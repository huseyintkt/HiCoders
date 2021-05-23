import * as movieRepository from '../persistency/movie-repository.js'


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
