import * as express from 'express'
import { getGoogleResult, getKakaoResult, getPapagoResult } from '../controllers/translate';
import { translaterParamCheck } from '../middlewares/validate';

const router = express.Router();

router.get('/papago', translaterParamCheck, getPapagoResult);
router.get('/google', translaterParamCheck, getGoogleResult);
router.get('/kakao', translaterParamCheck, getKakaoResult);

export default router;
