import express from 'express';
import translate from './translate';

const router = express.Router();

router.use('/translate', translate);

export default router;