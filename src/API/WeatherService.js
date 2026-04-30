import axios from 'axios';

export default class WeatherService {
  static BASE_URL = 'https://api.openweathermap.org/data/2.5';
  static API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  static async getWeather(city) {
    const response = await axios.get(
      `${this.BASE_URL}/weather?q=${city}&units=metric&lang=uk&appid=${this.API_KEY}`,
    );
    return response.data;
  }
}
