import Movie from "../models/Movie.js";

async function getAll() {
    return await Movie.find();
}

function createMovie(movieObj) {
    Movie.createMovie(movieObj);
}

export const movieService = {
    getAll,
    createMovie
}