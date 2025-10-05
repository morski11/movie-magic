import { Router } from 'express';
import { movieService } from '../services/movieService.js';
import { castService } from '../services/castService.js';

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

movieController.get("/movies/:movieId/attach", async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getById(movieId);
    const casts = await castService.getAll();

    const availableCasts = casts.filter(c => !movie.casts.some(mc => mc._id.toString() === c._id.toString()))

    if (!movie) {
        return res.status(404).render("404.hbs")
    };


    res.render('cast-attach.hbs', { movie, casts: availableCasts });
});


movieController.post('/movies/:movieId/attach', async (req, res) => {
    const body = req.body;
    const movieId = req.params.movieId;

    const castId = body.cast;
    console.log(castId);
    await movieService.updateById(movieId, {
        $addToSet: { casts: castId }
    });

    res.redirect(`/movies/${movieId}`);
})


movieController.post("/movies/create", (req, res) => {
    const body = req.body;
    const userId = req.user.userId;
    movieService.createMovie(body, userId);
    res.redirect("/");
});

export default movieController;