import { Router } from "express";
import { castService } from "../services/castService.js";

const router = Router();

router.get("/cast/create", (req, res) => {
    res.render('cast-create');
});

router.post("/cast/create", async (req, res) => {
    const castData = req.body;
    await castService.createCast(castData);
    res.redirect("/");
})

export default router;