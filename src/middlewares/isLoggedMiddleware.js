export function isLogged(req, res, next) {
    if (req.isAuthenticated) {
        return res.redirect("/");
    }
    return next();
}

export function requireAuth(req, res, next) {
    if (!req.isAuthenticated) {
        return res.redirect("/login");
    }
    next();
}