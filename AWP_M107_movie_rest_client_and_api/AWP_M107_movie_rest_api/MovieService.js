class MovieService{

    constructor(){
        this.database = [];
    }

    addMovie(pMovie){
        this.database.push(pMovie);
    }

    getAllMovies(){
        return this.database;
    }

    getMovieById(pId){
        return this.database.find(m => m.id==pId);
    }

    deleteMovies(){
        this.database = [];
    }

    deleteMovieById(pId){
        console.log(pId)
        this.database = this.database.filter(m => m.id!=pId);
        console.log(this.databases)
    }
}



module.exports = new MovieService();