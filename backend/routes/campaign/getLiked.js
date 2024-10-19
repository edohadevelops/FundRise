import { Router } from 'express'
import { authUser } from '../../controllers/auth/auth.js';
import getLikedCampaigns from '../../controllers/campaign/getLiked.js';

const router = Router();

router.get("/",authUser,getLikedCampaigns)

export default router;