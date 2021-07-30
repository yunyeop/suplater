import * as express from 'express';
import { HTTP_STATUS_CODE } from '../constants/httpStatus';

const translaterParamCheck = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { text } = req.query;

  if (!text) {
    return res.status(HTTP_STATUS_CODE.BAD_REQUEST).send('Missing text parameter');
  } else {
    next();
  }
}

export {
  translaterParamCheck,
}