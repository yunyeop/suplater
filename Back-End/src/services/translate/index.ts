import axios from "axios";
import { URLSearchParams } from 'url';
import { GOOGLE_TRANSLATER_API_URL, PAPAGO_API_URL } from "../../constants/API";

export interface TranslaterParams {
  source?: string;
  target?: string;
  text?: string;
};

const getPapagoApiData = async (
  source: string = 'en',
  target: string = 'ko',
  text: string
) => {
  const headers = {
    'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET
  };
  const requestBody = { source, target, text};
  const { data } = await axios.post(PAPAGO_API_URL, requestBody, { headers });

  return data.message.result.translatedText;
}

const getGoogleTranslaterApiData = async (
  source: string = 'en',
  target: string = 'ko',
  text: string
) => {
  const requestParams = new URLSearchParams();

  requestParams.append('q', text);
  requestParams.append('source', source);
  requestParams.append('target', target);
  requestParams.append('key', process.env.GOOGLE_API_KEY);

  const { data } = await axios.post(GOOGLE_TRANSLATER_API_URL, requestParams);

  return data.data.translations[0].translatedText;
}

export default {
  getPapagoApiData,
  getGoogleTranslaterApiData,
}
