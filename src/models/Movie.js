import { Schema, Types, model } from "mongoose";

const schema = new Schema({
    title: String,
    category: String,
    genre: String,
    director: String,
    year: Number,
    imageURL: String,
    rating: Number,
    description: String,
    casts: {
        type: Types.ObjectId,
        ref: 'Cast'
    }
});

const Movie = model('movie', schema);

export default Movie;