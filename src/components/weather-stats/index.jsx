import { Cloudy, Droplets, Eye, Gauge, Wind } from 'lucide-react';
import { StatCard } from '@/components/stat-card';

const METERS_PER_KILOMETER = 1000;
const VISIBILITY_DECIMALS = 1;

export const WeatherStats = ({ weather }) => (
  <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
    <StatCard
      icon={Droplets}
      label='Humidity'
      value={`${weather.main.humidity}%`}
    />
    <StatCard
      icon={Gauge}
      label='Pressure'
      value={`${weather.main.pressure} hPa`}
    />
    <StatCard
      icon={Wind}
      label='Wind'
      value={`${weather.wind.speed} m/s`}
      hint={weather.wind.deg !== undefined ? `${weather.wind.deg}°` : undefined}
    />
    <StatCard
      icon={Eye}
      label='Visibility'
      value={`${(weather.visibility / METERS_PER_KILOMETER).toFixed(VISIBILITY_DECIMALS)} km`}
    />
    <StatCard
      icon={Cloudy}
      label='Cloudiness'
      value={`${weather.clouds.all}%`}
    />
  </div>
);
