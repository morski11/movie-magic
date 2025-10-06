import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants/constants.js';

export default function authMiddleware(req, res, next) {
    const token = req.cookies['auth'];

    // no token means, its guest user
    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);
        req.user = decodedToken;
        req.isAuthenticated = true;
        res.locals.isAuth = true;

        next();
    } catch {
        res.clearCookie('auth');
        res.redirect("/login");
    }

}