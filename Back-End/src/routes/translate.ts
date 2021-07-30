import * as express from 'express'
import { getPapagoResult } from '../controllers/translate';
import { translaterParamCheck } from '../middlewares/validate';

const router = express.Router();

router.get('/papago', translaterParamCheck, getPapagoResult);

export default router;