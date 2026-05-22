import { useWeather } from '@/hooks/use-weather';
import { useCityClock } from '@/hooks/use-city-clock';
import { WeatherOverview } from '@/components/weather-overview';
import { WeatherStats } from '@/components/weather-stats';
import { iconMap, FALLBACK_ICON } from '@/pages/home/constants';

export const WeatherCard = ({ city }) => {
  const { data: weather, isLoading, error } = useWeather(city);
  const cityTime = useCityClock(weather?.timezone);

  const condition = weather?.weather?.[0];
  const WeatherIcon = condition 
    ? (iconMap[condition.icon] ?? FALLBACK_ICON) 
    : null;
  const tz = weather?.timezone;

  return isLoading ? (
    <div className="p-6 border rounded-xl animate-pulse text-muted-foreground">
      Loading {city}...
    </div>
  ) : error ? (
    <div className="p-6 border border-destructive rounded-xl text-destructive">
      City "{city}" not found
    </div>
  ) : weather ? (
    <div className="p-6 bg-card border rounded-xl shadow-sm space-y-6">
      <WeatherOverview 
        weather={weather} 
        condition={condition} 
        WeatherIcon={WeatherIcon} 
        cityTime={cityTime} 
        tz={tz} 
      />
      <WeatherStats weather={weather} />
    </div>
  ) : null;
};