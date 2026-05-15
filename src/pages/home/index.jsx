import { HomeSkeleton } from '@/components/home-skeleton';
import { HomeError } from '@/components/home-error';
import { WeatherOverview } from '@/components/weather-overview';
import { WeatherStats } from '@/components/weather-stats';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TOOLTIP_DELAY } from '@/pages/home/constants';
import { useHome } from './use-home'; 


const Home = () => {
  const { 
    weather, 
    isLoading, 
    error, 
    cityTime, 
    condition, 
    WeatherIcon, 
    tz 
  } = useHome();
  const isWeatherMissing = !weather;
  return isLoading ? (
    <HomeSkeleton />
  ) : error ? (
    <HomeError message={error.message} />
  ) : isWeatherMissing ? null : (
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