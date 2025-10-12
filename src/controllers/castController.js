import { Router } from "express";
import { castService } from "../services/castService.js";
import { requireAuth } from "../middlewares/isLoggedMiddleware.js";

const router = Router();

router.get("/cast/create", requireAuth, (req, res) => {
    res.render('cast-create');
});

router.post("/cast/create", requireAuth, async (req, res) => {
    const castData = req.body;
    await castService.createCast(castData);
    res.redirect("/");
})

export default router;