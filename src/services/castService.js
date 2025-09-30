import Cast from "../models/Cast.js";

function createCast(data) {
    Cast.create(data);
}

async function getAll() {
    return await Cast.find();
}

export const castService = {
    createCast,
    getAll
}
