import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
export const getWeather = async city => {
  const response = await axios.get(
    `${BASE_URL}/weather?q=${city}&units=metric&lang=uk&appid=${API_KEY}`,
  );
  return response.data;
};
