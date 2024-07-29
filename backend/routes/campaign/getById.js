import { Router } from 'express'
import getCampaignById from "../../controllers/campaign/getById.js";
import { auth } from '../../controllers/auth/auth.js';

const router = Router();

router.get("/:campaign_id",auth,getCampaignById);

export default router