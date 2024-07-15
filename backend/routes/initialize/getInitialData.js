import { Router } from "express";
import { auth } from '../../controllers/auth/auth.js'
import getInitialData from '../../controllers/initialize/initialize.js'

const router = Router();

router.get("/",auth,getInitialData);

export default router