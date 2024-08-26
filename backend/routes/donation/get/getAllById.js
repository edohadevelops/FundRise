import { Router } from 'express';
import { authUser } from '../../../controllers/auth/auth.js';
import getAllById from '../../../controllers/donation/get/getAllById.js';

const router = Router();

router.get("/:user_id",authUser,getAllById);

export default router;