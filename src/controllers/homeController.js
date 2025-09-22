import { Router } from "express";

export default function createHomeController(movies) {
    const homeController = Router();

    homeController.get("/", (req, res) => {
        res.render('home.hbs', { movies });
    });

    homeController.get("/about", (req, res) => {
        res.render('about.hbs');
    })

    return homeController;
}



