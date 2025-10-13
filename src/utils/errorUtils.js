import mongoose from "mongoose";

export function getFirstError(err) {
    console.log(err);
    if (err instanceof mongoose.Error.ValidationError) {
        return Object.values(err.errors).at(0);
    }
    return err.message;
}