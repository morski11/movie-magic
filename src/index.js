import express from 'express';
import handlebars from 'express-handlebars'
import mongoose from 'mongoose';

import movieController from './controllers/movieController.js';
import homeController from './controllers/homeController.js';
import castController from './controllers/castController.js';

const url = 'mongodb://localhost:27017';

try {
    mongoose.connect(url, { dbName: "movie-magic" });
    console.log('Connected successfully to the DB!');
} catch (err) {
    console.log(err);
}

const app = express();

//make public folder accessible to everyone
app.use(express.static('public'));

app.engine("hbs", handlebars.engine({
    extname: "hbs",
    partialsDir: "views/partials",
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
}));
app.set("view engine", "hbs");

app.use(express.urlencoded());

app.use(movieController);
app.use(homeController);
app.use(castController);

app.get("/*nf", (req, res) => {
    res.render('404.hbs');
})

app.listen(5000, () => { console.log('Server is listening on localhost:5000...') });