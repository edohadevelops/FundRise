import { Router } from "express";
import { registerController } from "../../controllers/auth/register.js";

const router = Router();

router.post('/',registerController);

export default router;