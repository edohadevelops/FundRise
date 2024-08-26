import { Router } from 'express';
import { authUser } from '../../controllers/auth/auth.js'
import getAllByUsername from '../../controllers/campaign/getAllByUsername.js';

const router = Router();

router.get("/:username",authUser,getAllByUsername);

export default router