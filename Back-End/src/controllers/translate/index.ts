import * as express from 'express';
import { HTTP_STATUS_CODE } from '../../constants/httpStatus';
import TranslateService, { TranslaterParams } from '../../services/translate';

const getPapagoResult = async (req: express.Request, res: express.Response) => {
  const { source, target, text }: TranslaterParams = req.query;

  try {
    const translatedValue = await TranslateService.getPapagoApiData(source, target, text);
    return res.status(HTTP_STATUS_CODE.OK).send(translatedValue);
  } catch (e) {
    return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send();
  }
}

const getGoogleResult = async (req: express.Request, res: express.Response) => {
  const { source, target, text }: TranslaterParams = req.query;

  try {
    const translatedValue = await TranslateService.getGoogleTranslaterApiData(source, target, text);
    return res.status(HTTP_STATUS_CODE.OK).send(translatedValue);
  } catch (e) {
    return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send();
  }
}

export {
  getPapagoResult,
  getGoogleResult,
}
