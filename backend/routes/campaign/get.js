import { Router } from "express";
import getAll from "../../controllers/campaign/get.js";


const router = Router();

router.get("/",getAll);

export default router