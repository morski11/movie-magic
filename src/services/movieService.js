import Movie from "../models/Movie.js";

async function getAll() {
    return await Movie.find();
}

async function createMovie(movieObj) {
    await Movie.create(movieObj);
}

async function getById(movieId) {
    return await Movie.findById(movieId);
}

export const movieService = {
    getAll,
    createMovie,
    getById
}