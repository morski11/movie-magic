import { Router } from "express";
import { userService } from "../services/userService.js";

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


userRouter.get("/login", (req,res) => {
    res.render('login.hbs');
})

export default userRouter;