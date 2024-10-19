import { Router } from 'express'
import updateController from "../../controllers/user/edit.js";
import { authUser } from '../../controllers/auth/auth.js';
import uploadProfilePicture from '../../middlewares/user/upload.js';

const router = Router();

router.put("/",authUser,uploadProfilePicture.single("profile_picture"),updateController);

export default router