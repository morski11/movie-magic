import { Router } from 'express';
import { movieService } from '../services/movieService.js';

const movieController = Router();

movieController.get("/movies/create", (req, res) => {
    res.render('create.hbs');
});

movieController.get("/movies/search", async (req, res) => {
    const filter = req.query;
    let movies = await movieService.getFilteredMovies(filter);

    res.render('search.hbs', { movies });
});

movieController.get("/movies/:movieId", async (req, res) => {
    const movieId = req.params.movieId;

    const movie = await movieService.getById(movieId);
    if (!movie) {
        return res.status(404).render("404.hbs")
    };

    const ratingCount = '&#x2605'.repeat(Math.floor(movie.rating));

    res.render('details.hbs', { movie, rating: ratingCount });
});


movieController.post("/movies/create", (req, res) => {
    const body = req.body;
    movieService.createMovie(body);
    res.redirect("/");
});

export default movieController;