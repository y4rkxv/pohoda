import { Cloudy, Droplets, Eye, Gauge, Wind } from 'lucide-react';
import { StatCard } from '@/components/stat-card';
import { METERS_PER_KILOMETER, VISIBILITY_DECIMALS } from './constants';
import { getStatsConfig } from './helpers'

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
