import { useWeather } from '@/hooks/use-weather';
import { formatTemperature } from '@/helpers/format-temperature';

const Home = () => {
  const { data: weather, isLoading, error } = useWeather('Dnipro');

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {weather && (
        <div className='flex max-w-4xl'>
          <div className='w-80'>
            <h1 className='text-2xl font-bold'>{weather.name}</h1>
            <p className='text-6xl font-bold my-4'>
              {formatTemperature(weather.main.temp)}°C
            </p>
            <p className='mb-4 text-muted-foreground'>
              {weather.weather[0].description}
            </p>

            <div className='flex gap-8'>
              <div>
                <p className='text-sm text-muted-foreground'>Feels like:</p>
                <p className='text-2xl font-bold'>
                  {formatTemperature(weather.main.feels_like)}°C
                </p>
              </div>
              <div>
                <p className='text-sm'>
                  Sunrise:{' '}
                  {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
                </p>
                <p className='text-sm'>
                  Sunset:{' '}
                  {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>

          <div className='space-y-1 w-80'>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Pressure: {weather.main.pressure} hPa</p>
            <p>Wind: {weather.wind.speed} m/s</p>
            <p>Visibility: {weather.visibility} m</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
