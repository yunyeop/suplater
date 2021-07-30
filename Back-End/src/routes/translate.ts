import * as express from 'express'
import { getGoogleResult, getPapagoResult } from '../controllers/translate';
import { translaterParamCheck } from '../middlewares/validate';

const router = express.Router();

router.get('/papago', translaterParamCheck, getPapagoResult);
router.get('/google', translaterParamCheck,  getGoogleResult);

export default router;
