import { Router } from 'express';
import verifyDonation from '../../controllers/donation/verify.js';

const router = Router();

router.get("/:reference",verifyDonation);

export default router;