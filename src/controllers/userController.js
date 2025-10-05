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
})

export default userRouter;