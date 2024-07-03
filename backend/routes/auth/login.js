import { Router } from 'express';
import loginController from '../../controllers/auth/login.js';

const router = Router();

router.post('/',loginController);

export default router;