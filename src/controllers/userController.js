import { Router } from "express";

const userRouter = Router();

userRouter.get("/register", (req, res) => {
    res.render('register.hbs');
});

export default userRouter;