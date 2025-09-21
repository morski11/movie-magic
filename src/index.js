import express from 'express';
import handlebars from 'express-handlebars'

const app = express();

//make public folder accessible to everyone
app.use(express.static('public'));

app.engine("hbs", handlebars.engine());
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render('home.hbs');
});

app.get("/*nf", (req, res) => {
    res.render('404.hbs');
})

app.listen(5000, () => { console.log('Server is listening on localhost:5000...') });