import { Cloudy, Droplets, Eye, Gauge, Wind } from 'lucide-react';
import { StatCard } from '@/components/stat-card';
import { METERS_PER_KILOMETER, VISIBILITY_DECIMALS } from '@/constants';

const getStatsConfig = weather => [
  {
    icon: Droplets,
    label: 'Humidity',
    value: `${weather.main.humidity}%`,
  },
  {
    icon: Gauge,
    label: 'Pressure',
    value: `${weather.main.pressure} hPa`,
  },
  {
    icon: Wind,
    label: 'Wind',
    value: `${weather.wind.speed} m/s`,
    hint: weather.wind.deg !== undefined ? `${weather.wind.deg}°` : undefined,
  },
  {
    icon: Eye,
    label: 'Visibility',
    value: `${(weather.visibility / METERS_PER_KILOMETER).toFixed(VISIBILITY_DECIMALS)} km`,
  },
  {
    icon: Cloudy,
    label: 'Cloudiness',
    value: `${weather.clouds.all}%`,
  },
];

export const WeatherStats = ({ weather }) => {
  const stats = getStatsConfig(weather);

  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
      {stats.map(stat => (
        <StatCard
          key={stat.label}
          icon={stat.icon}
          label={stat.label}
          value={stat.value}
          hint={stat.hint}
        />
      ))}
    </div>
  );
};
