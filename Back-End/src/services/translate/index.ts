import axios from "axios";
import { PAPAGO_API_URL } from "../../constants/API";

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

export default {
  getPapagoApiData,
}