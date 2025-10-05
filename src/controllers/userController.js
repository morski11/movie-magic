import { Router } from "express";
import { userService } from "../services/userService.js";
import bcrypt from 'bcrypt';

const userRouter = Router();

userRouter.get("/register", (req, res) => {
    res.render('register.hbs');
});


userRouter.post("/register", (req, res) => {
    const userData = req.body;

    console.log(userData);
    userService.createUser(userData);

    res.redirect("/login");
});


userRouter.get("/login", (req, res) => {
    res.render('login.hbs');
})


userRouter.post("/login", async (req, res) => {
    const data = req.body;

    const user = await userService.getUserByEmail(data.email);
    console.log(user);

    if (!user) {
        throw new Error("User not found!");
    }

    const isValid = await validatePassword(data.password, user.password);
    console.log('Password result is -', isValid);

    if (!isValid) {
        throw new Error("Password is not valid!");
    }

    res.redirect("/");
})

async function validatePassword(plainPass, hashedPass) {
    console.log(`comparing ${plainPass} with ${hashedPass}}`);
    return await bcrypt.compare(plainPass, hashedPass);
}

export default userRouter;