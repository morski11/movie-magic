import { Schema, Types, model } from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, "Title should be atleast 5 characters long"],
        match: [/[a-zA-Z-0-9 ]+/, "Title has some unsupported characters"]
    },
    category: String,
    genre: {
        type: String,
        required: true,
        minLength: [5, "Genre should be atleast 5 characters long"],
        match: [/[a-zA-Z-0-9 ]+/, "Genre has some unsupported characters"]
    },
    director: {
        type: String,
        required: true,
        minLength: [5, "Title should be atleast 5 characters long"],
        match: [/[a-zA-Z-0-9 ]+/, "Title has some unsupported characters"]
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2025
    },
    imageURL: {
        type: String,
        required: true,
        match: [/https?:\/\/.+/, "Invalid url for picture"]
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    description: {
        type: String,
        required: true,
        minLength: [20, "Description is too short. Mininum 20 symbols."],
        match: [/\/w+/, "Invalid characters in the description"]
    },
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }],
    creatorId: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Movie = model('movie', schema);

export default Movie;