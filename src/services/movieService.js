import Movie from "../models/Movie.js";

async function getAll() {
    return await Movie.find();
}

async function createMovie(movieObj, userId) {
    await Movie.create({
        ...movieObj,
        creatorId: userId
    });
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
        // this is partial match case insensitive
        query.where({ title: { $regex: filter.title, $options: 'i' } })
    }
    if (filter.genre) {
        // this is exact match case sensitive
        query.where({ genre: { $regex: `^${filter.genre}$`, $options: 'i' } });
    }
    return await query;
}

async function updateById(id, update) {
    return Movie.findByIdAndUpdate(id, update, { new: true });
    // `new: true` returns the updated doc if you want it
}

export const movieService = {
    getAll,
    createMovie,
    getById,
    getFilteredMovies,
    updateById
}