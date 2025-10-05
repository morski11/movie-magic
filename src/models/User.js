import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

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


schema.pre('save', async function () {
    const salt = await bcrypt.genSalt(11);

    const hashedPass = await bcrypt.hash(this.password, salt);
    console.log(hashedPass);

    this.password = hashedPass;
})

const User = model('user', schema);


export default User;

