import express from 'express';
import handlebars from 'express-handlebars'
import movies from '../models/Movie.js';
import movieController from './controllers/movieController.js';
import createHomeController from './controllers/homeController.js';

const app = express();

//make public folder accessible to everyone
app.use(express.static('public'));

app.engine("hbs", handlebars.engine());
app.set("view engine", "hbs");

app.use(movieController);
app.use(createHomeController(movies));

app.get("/*nf", (req, res) => {
    res.render('404.hbs');
})

app.listen(5000, () => { console.log('Server is listening on localhost:5000...') });