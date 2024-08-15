import { Router } from "express";
import getAll from "../../controllers/campaign/get.js";
import { authUser } from '../../controllers/auth/auth.js'


const router = Router();

router.get("/",authUser,getAll);

export default router