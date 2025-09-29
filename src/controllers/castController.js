import { Router } from "express";

const router = Router();

router.get("/cast/create", (req, res) => {
    res.render('cast-create');
});

export default router;