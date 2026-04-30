import { useState, useEffect } from 'react';
import WeatherService from '@/API/WeatherService';

const Home = () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    WeatherService.getWeather('Dnipro').then(data => setWeather(data));
  }, []);
  return (
    <div>
      <h1 className='text-2xl font-bold'>Main page</h1>
      {weather && (
        <div>
          <p>City: {weather.name}</p>
          <p>Температура: {Math.round(weather.main.temp)}°C</p>
        </div>
      )}
    </div>
  );
};

export default Home;
