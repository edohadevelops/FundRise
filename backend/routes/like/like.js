import { Router } from "express";
import updateLike from "../../controllers/like/update.js";
import { authUser } from "../../controllers/auth/auth.js";

const router = Router();

router.put("/:campaign_id",authUser,updateLike);

export default router;