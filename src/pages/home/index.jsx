import { useWeather } from '@/hooks/use-weather';
import { formatTemperature } from '@/helpers/format-temperature';

const Home = () => {
  const { data: weather, isLoading, error } = useWeather('Dnipro');

  return (
    <div>
      <h1 className='text-2xl font-bold'>Main page</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {weather && (
        <div>
          <p>City: {weather.name}</p>
          <p>Temperature: {formatTemperature(weather.main.temp)}°C</p>
        </div>
      )}
    </div>
  );
};

export default Home;
