import Cast from "../models/Cast.js";

function createCast(data) {
    Cast.create(data);
}

async function getAll() {
    return await Cast.find();
}

async function getById(id)
{
    return await Cast.findById(id);
}

export const castService = {
    createCast,
    getAll,
    getById
}
