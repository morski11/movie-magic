import { create } from "express-handlebars";
import User from "../models/User.js";

function createUser(userData) {
    //TODO check pass  and repass Later
    User.create(userData);
}

async function getUserByEmail(email) {
    return await User.findOne({ email });
}

async function userExists(email) {
    return await User.exists({ email });
}

export const userService = {
    createUser,
    getUserByEmail,
    userExists
}