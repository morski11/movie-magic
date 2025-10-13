import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const schema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true,
        minlength: [10, "Email should be atleast 10 character long."],
        match: [/^\w*\@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, "Email is not in valid format!"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minLength: [6, "Password should be atleast 6 characters long"]
    }
})

schema.virtual('rePass')
    .get(function () {
        return this._rePass;
    })
    .set(function (val) {
        this._rePass = val;
    });


schema.pre('validate', function () {
    if (this.isNew && this.password !== this._rePass) {
        this.invalidate('password', "Passwords missmatch!");
    }
});

schema.pre('save', async function () {
    const salt = await bcrypt.genSalt(11);

    const hashedPass = await bcrypt.hash(this.password, salt);
    console.log(hashedPass);

    this.password = hashedPass;
})

const User = model('user', schema);


export default User;

