export function getFirstError(err) {
    return Object.values(err.errors).at(0);
}