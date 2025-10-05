import { create } from "express-handlebars";
import User from "../models/User.js";

function createUser(userData) {
    //TODO check pass  and repass Later
    User.create(userData);

}

export const userService = {
    createUser
}