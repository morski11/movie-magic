import { Router } from "express";
import { userService } from "../services/userService.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../constants/constants.js";
import { isLogged } from "../middlewares/isLoggedMiddleware.js";

const userRouter = Router();

userRouter.get("/register", isLogged, (req, res) => {
    res.render('register.hbs');
});


userRouter.post("/register", async (req, res) => {
    const userData = req.body;

    const userExists = await userService.userExists(userData.email);

    if (userExists) {
        throw new Error('user already exists!');
    }

    userService.createUser(userData);

    res.redirect("/login");
});


userRouter.get("/login", isLogged, (req, res) => {
    res.render('login.hbs');
})


userRouter.post("/login", async (req, res) => {
    const data = req.body;

    const user = await userService.getUserByEmail(data.email);

    if (!user) {
        throw new Error("User not found!");
    }

    const isValid = await validatePassword(data.password, user.password);

    if (!isValid) {
        throw new Error("Password is not valid!");
    }

    const payload = {
        userId: user._id,
        email: user.email
    }

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    res.cookie("auth", token);

    res.redirect("/");
})

userRouter.get("/logout", (req, res) => {
    res.clearCookie('auth');
    res.redirect("/");
})

async function validatePassword(plainPass, hashedPass) {
    return await bcrypt.compare(plainPass, hashedPass);
}

export default userRouter;