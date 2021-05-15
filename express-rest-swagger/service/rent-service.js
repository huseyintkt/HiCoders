
let rentList = [];

export default function createMovieRent(movieId, rentInfo){
    rentList.push({
        movieId: movieId,
        ...rentInfo
    })
}