import getAll from "../../controllers/campaign/get.js";
import { Router } from "express";

const router = Router();

router.get("/",getAll);

export default router