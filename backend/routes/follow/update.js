import { Router } from 'express';
import { authUser } from '../../controllers/auth/auth.js';
import update from '../../controllers/follow/update.js';

const router = Router();

router.put("/:leader_id",authUser,update)

export default router;