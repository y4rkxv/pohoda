import { useWeather } from '@/hooks/use-weather';
import { useCityClock } from '@/hooks/use-city-clock';
import { iconMap, FALLBACK_ICON, DEFAULT_CITY } from '@/pages/home/constants';

export const useHome = () => {
  const { data: weather, isLoading, error } = useWeather(DEFAULT_CITY);
  const cityTime = useCityClock(weather?.timezone);

  const condition = weather?.weather?.[0];
  const WeatherIcon = condition 
    ? (iconMap[condition.icon] ?? FALLBACK_ICON) 
    : null;
  const tz = weather?.timezone;

  return {
    weather,
    isLoading,
    error,
    cityTime,
    condition,
    WeatherIcon,
    tz
  };
};