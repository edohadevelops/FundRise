import { Router } from 'express';
import { authUser } from '../../controllers/auth/auth.js';
import getNotifications from '../../controllers/notification/get.js';

const router = Router();

router.get("/",authUser,getNotifications);

export default router;