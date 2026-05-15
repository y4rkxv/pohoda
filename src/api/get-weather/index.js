import axios from 'axios';
import { BASE_URL, API_KEY } from '@/api/get-weather/constants';

export const getWeather = async city => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      units: 'metric',
      lang: 'en',
      appid: API_KEY,
    },
  });
  return response.data;
};
