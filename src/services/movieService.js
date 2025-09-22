import { Movie } from "../models/Movie.js";

function getAll() {
    return Movie.getMovies();
}

function createMovie(movieObj){
    Movie.createMovie(movieObj);
}

export const movieService = {
    getAll,
    createMovie
}