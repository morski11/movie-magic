import { Router } from "express";
import { castService } from "../services/castService.js";

const router = Router();

router.get("/cast/create", (req, res) => {
    res.render('cast-create');
});

router.post("/cast/create", (req, res) => {
    const castData = req.body;
    castService.createCast(castData);
    res.redirect("/");
})

export default router;