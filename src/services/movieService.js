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

async function getFilteredMovies(filter = {}) {
    const query = Movie.find();
    if (filter.year) {
        query.where({ year: filter.year });
    }
    if (filter.title) {
        // this is partial match
        query.where({ title: { $regex: filter.title, $options: 'i' } })
    }
    if (filter.genre) {
        query.where({ genre: { $regex: `^${filter.genre}$`, $options: 'i' } });
    }
    return await query;
}

export const movieService = {
    getAll,
    createMovie,
    getById,
    getFilteredMovies
}