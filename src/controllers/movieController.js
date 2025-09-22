import { Router } from 'express';
import { movieService } from '../services/movieService.js';

const movieController = Router();

movieController.get("/movies/create", (req, res) => {
    res.render('create.hbs');
});

movieController.get("/movies/:movieId", (req, res) => {
    const movieId = Number(req.params.movieId);

    const movie = movieService.getAll().find(m => m.id == movieId);
    if (!movie) {
        return res.status(404).render("404.hbs")
    };
    res.render('details.hbs', { movie });
});

// movieController.post("/movies/create", (req, res) => {
//     console.log('click create');
//     res.end();
// });

export default movieController;