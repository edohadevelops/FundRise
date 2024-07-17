import { Router } from "express";
import createCampaign from '../../controllers/campaign/create.js';
import { authUser } from "../../controllers/auth/auth.js";
import uploadCampaign from "../../middlewares/campaign/upload.js";

const router = Router();

router.post("/",authUser,uploadCampaign.single("campaign_img"),createCampaign);

export default router