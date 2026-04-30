import { useQuery } from '@tanstack/react-query';
import { getWeather } from '@/api';

const Home = () => {
  const {
    data: weather,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['weather', 'Dnipro'],
    queryFn: () => getWeather('Dnipro'),
  });
  return (
    <div>
      <h1 className='text-2xl font-bold'>Main page</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {weather && (
        <div>
          <p>City: {weather.name}</p>
          <p>Temperature: {Math.round(weather.main.temp)}°C</p>
        </div>
      )}
    </div>
  );
};

export default Home;
