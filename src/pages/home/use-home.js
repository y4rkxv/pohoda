import { useState } from 'react'; 
import { useWeather } from '@/hooks/use-weather';
import { useCityClock } from '@/hooks/use-city-clock';
import { iconMap, FALLBACK_ICON, DEFAULT_CITY } from '@/pages/home/constants';

export const useHome = () => {
  const [city, setCity] = useState(DEFAULT_CITY);
  const { data: weather, isLoading, error } = useWeather(city); 
  const cityTime = useCityClock(weather?.timezone);

  const condition = weather?.weather?.[0];
  const WeatherIcon = condition 
    ? (iconMap[condition.icon] ?? FALLBACK_ICON) 
    : null;
  const tz = weather?.timezone;
  const isWeatherMissing = !weather && !isLoading && !error;

  return {
    weather,
    isLoading,
    error,
    cityTime,
    condition,
    WeatherIcon,
    tz,
    isWeatherMissing,
    setCity
  };
};