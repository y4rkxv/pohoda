import { TooltipProvider } from '@/components/ui/tooltip';
import { TOOLTIP_DELAY } from '@/pages/home/constants';
import { useHome } from './use-home'; 
import SearchCity from '@/components/search-city'; 
import { WeatherCard } from '@/components/weather-card';

export const Home = () => {
  const { cities, addCity } = useHome();

  const handleSearchCity = (cityName) => {
    addCity(cityName);
  };

  return (
    <TooltipProvider delayDuration={TOOLTIP_DELAY}>
      <div className='space-y-6'>
        <SearchCity placeholder="Search for a city..." onSearch={handleSearchCity} />
        
        <div className="flex flex-col gap-4">
          {cities.map((city) => (
            <WeatherCard key={city} city={city} />
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Home;