import { useQuery } from '@tanstack/react-query';
import { getWeather } from '@/api';

export const useWeather = city => {
  return useQuery({
    queryKey: ['weather', city],
    queryFn: () => getWeather(city),
  });
};
