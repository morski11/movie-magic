import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>HEADING IS REVEALED</h1>");
});

app.listen(5000, () => { console.log('Server is listening on localhost:5000...') });