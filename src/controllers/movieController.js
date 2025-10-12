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
    const creatorId = movie.creatorId; // can be undefined

    let isCreator = true;

    if (!creatorId || creatorId != req.user.userId) {
        isCreator = false;
    }

    res.render('details.hbs', { movie, rating: ratingCount, isCreator });
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
    await movieService.updateById(movieId, {
        $addToSet: { casts: castId }
    });

    res.redirect(`/movies/${movieId}`);
})


movieController.post("/movies/create",async (req, res) => {
    const body = req.body;
    const userId = req.user.userId;
    await movieService.createMovie(body, userId);
    res.redirect("/");
});


movieController.get("/movies/:movieId/delete", (req, res) => {
    const movieId = req.params.movieId;
    movieService.deleteById(movieId).then(() => res.redirect("/"));
});

movieController.get("/movies/:movieId/edit", async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getById(movieId); 

    res.render('edit.hbs', {movie});
});


movieController.post("/movies/:movieId/edit", async (req, res) => {
    const movieId = req.params.movieId;
    const newMovieData = req.body;

    await movieService.updateById(movieId, newMovieData);

    res.redirect(`/movies/${movieId}`);

});

function getCategoriesWithSelected(movie){

}

export default movieController;