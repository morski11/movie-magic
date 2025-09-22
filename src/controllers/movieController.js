import { Router } from 'express';

const movieController = Router();

movieController.get("/movies/create", (req, res) => {
    res.render('create.hbs');
});

// movieController.post("/movies/create", (req, res) => {
//     console.log('click create');
//     res.end();
// });

export default movieController;