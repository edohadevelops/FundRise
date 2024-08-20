import { Router } from 'express';
import getByUser from '../../controllers/user/getByUsername.js';
import { authUser } from '../../controllers/auth/auth.js';

const router = Router();

router.get("/:username",authUser,getByUser)

export default router
