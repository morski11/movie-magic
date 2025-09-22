import { Router } from 'express';
import { movieService } from '../services/movieService.js';

const movieController = Router();

movieController.get("/movies/create", (req, res) => {
    res.render('create.hbs');
});

movieController.get("/movies/search", (req, res) => {
    let movies = movieService.getAll();

    const filter = req.query;

    if (filter.title) {
        movies = movies.filter(m => m.title.toLowerCase().includes(filter.title.toLowerCase()));
    }

    if (filter.genre) {
        movies = movies.filter(m => m.genre.toLowerCase() == filter.genre.toLowerCase());
    }
    console.log(filter);

    if (filter.year) {
        movies = movies.filter(m => m.year == Number(filter.year));

    }

    res.render('search.hbs', { movies });
});

movieController.get("/movies/:movieId", (req, res) => {
    const movieId = Number(req.params.movieId);

    const movie = movieService.getAll().find(m => m.id == movieId);
    if (!movie) {
        return res.status(404).render("404.hbs")
    };

    const ratingCount = '&#x2605'.repeat(Math.floor(movie.rating));

    res.render('details.hbs', { movie, rating: ratingCount });
});


movieController.post("/movies/create", (req, res) => {
    console.log('click create');
    const body = req.body;
    movieService.createMovie(body);
    res.redirect("/");
});

export default movieController;