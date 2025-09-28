import { Schema, model } from "mongoose";

const schema = new Schema({
    title: String,
    category: String,
    genre: String,
    director: String,
    year: Number,
    imageURL: String,
    rating: Number,
    description: String
});

const Movie = model('movie', schema);

export default Movie;