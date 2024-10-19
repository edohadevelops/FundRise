import { Router } from 'express';
import { authUser } from '../../controllers/auth/auth.js';
import getFollowed from '../../controllers/campaign/myCampaigns/getFollowed.js';

const router = Router();

router.get("/",authUser,getFollowed);

export default router;