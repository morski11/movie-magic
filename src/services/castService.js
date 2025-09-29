import Cast from "../models/Cast.js";

function createCast(data) {
    Cast.create(data);
}

export const castService = {
    createCast
}
