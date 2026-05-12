import { Cloudy, Droplets, Eye, Gauge, Wind } from 'lucide-react';
import { METERS_PER_KILOMETER, VISIBILITY_DECIMALS } from './constants';

export const getStatsConfig = weather => [
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
