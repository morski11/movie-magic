import { Movie } from "../models/Movie.js";

function getAll() {
    return Movie.getMovies();
}

export const movieService = {
    getAll
}