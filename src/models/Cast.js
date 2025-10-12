import { Schema, model } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "Name is too short. Min is 3"],
        match: [/\w+/, "Invalid name characters!"]
    },
    age: {
        type: Number,
        required: true,
        min: [1, "Min acting age is 1 years old"],
        max: [120, "Max acting age is 120 years old"]
    },
    born: {
        type: String,
        required: true,
        minLength: [5, "Minimum length of place of birth is 5"],
        match: [/\w+/, "Invalid characters in born field!"]

    },
    imageURL: {
        type: String,
        required: true,
        match: [/https?:\/\/.+/, "Invalid url for picture"]
    }
});

const Cast = model('cast', schema, 'Casts');

export default Cast;