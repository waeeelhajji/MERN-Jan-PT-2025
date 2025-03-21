import { Router } from "express";

import CakeController from "../controllers/cake.controller.js";

const router = Router()


router.route("/cakes")
    .post(CakeController.create)
    .get(CakeController.readAll)


router.route("/cakes/:id")
    .get(CakeController.readOne)
    .put(CakeController.update)
    .delete(CakeController.delete)



export default router