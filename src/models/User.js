import { Schema, model } from "mongoose";


const schema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = model('user', schema);

export default User;