import { Router } from 'express';
import getAllByUsername from '../../../controllers/donation/get/getAllByUsername.js';

const router = Router();

router.get("/:username",getAllByUsername);

export default router