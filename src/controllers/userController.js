import { Router } from "express";

const userRouter = Router();

userRouter.get("/register", (req, res) => {
    res.render('register.hbs');
});


userRouter.post("/register", (req, res) => {
    const userData = req.body;

    console.log(userData);
    res.end();
})

export default userRouter;