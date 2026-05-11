import { useCityClock } from '@/hooks/use-city-clock';
import { useWeather } from '@/hooks/use-weather';
import { HomeSkeleton } from '@/components/home-skeleton';
import { HomeError } from '@/components/home-error';
import { WeatherOverview } from '@/components/weather-overview';
import { WeatherStats } from '@/components/weather-stats';
import { iconMap, FALLBACK_ICON } from './constants';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TOOLTIP_DELAY, DEFAULT_CITY } from './constants';

const Home = () => {
  const { data: weather, isLoading, error } = useWeather(DEFAULT_CITY);
  const cityTime = useCityClock(weather?.timezone);

  const condition = weather?.weather[0];
  const WeatherIcon = condition
    ? (iconMap[condition.icon] ?? FALLBACK_ICON)
    : null;
  const tz = weather?.timezone;

  return isLoading ? (
    <HomeSkeleton />
  ) : error ? (
    <HomeError message={error.message} />
  ) : !weather ? null : (
    <TooltipProvider delayDuration={TOOLTIP_DELAY}>
      <div className='space-y-6'>
        <WeatherOverview
          weather={weather}
          condition={condition}
          WeatherIcon={WeatherIcon}
          cityTime={cityTime}
          tz={tz}
        />
        <WeatherStats weather={weather} />
      </div>
    </TooltipProvider>
  );
};

export default Home;
