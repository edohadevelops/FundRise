import { Router } from 'express';
import webhookController from '../../controllers/donation/webhook.js';

const router = Router();

router.post("/",webhookController);

export default router