import { Router } from "express";
import onboardingController from '../../controllers/user/onboarding.js'
import { authUser } from "../../controllers/auth/auth.js";
import uploadProfilePicture from "../../middlewares/user/upload.js";

const router = Router();

router.post("/",authUser,uploadProfilePicture.single("profile_picture"),onboardingController)

export default router;
