import { Schema, model } from "mongoose";

const schema = new Schema({
    name: String,
    Age: Number,
    born: String,
    imageURL: String
});

const Cast = model('cast', schema, 'Casts');

export default Cast;