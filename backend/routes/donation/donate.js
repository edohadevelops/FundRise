import { auth } from "../../controllers/auth/auth.js";
import { Router } from "express";
import donateController from "../../controllers/donation/donate.js";

const router = Router();

router.post("/",donateController);

export default router