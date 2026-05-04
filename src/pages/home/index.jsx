import { useEffect, useState } from 'react';
import { useWeather } from '@/hooks/use-weather';
import { formatTemperature } from '@/helpers/format-temperature';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Cloudy,
  Droplets,
  Eye,
  Gauge,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  Thermometer,
  Wind,
} from 'lucide-react';

const iconMap = {
  '01d': Sun,
  '01n': Moon,
  '02d': Cloud,
  '02n': Cloud,
  '03d': Cloud,
  '03n': Cloud,
  '04d': Cloud,
  '04n': Cloud,
  '09d': CloudDrizzle,
  '09n': CloudDrizzle,
  '10d': CloudRain,
  '10n': CloudRain,
  '11d': CloudLightning,
  '11n': CloudLightning,
  '13d': CloudSnow,
  '13n': CloudSnow,
  '50d': CloudFog,
  '50n': CloudFog,
};

const formatCityTime = (unix, tzOffset = 0) => {
  const d = new Date((unix + tzOffset) * 1000);
  const hh = String(d.getUTCHours()).padStart(2, '0');
  const mm = String(d.getUTCMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
};

const useCityClock = tzOffset => {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);
  const d = new Date(now + (tzOffset ?? 0) * 1000);
  const hh = String(d.getUTCHours()).padStart(2, '0');
  const mm = String(d.getUTCMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
};

const StatCard = ({ icon: Icon, label, value, hint }) => (
  <Card>
    <CardContent className='flex items-center gap-4 p-4'>
      <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted'>
        <Icon className='h-5 w-5 text-muted-foreground' />
      </div>
      <div className='min-w-0'>
        <p className='text-xs text-muted-foreground'>{label}</p>
        <p className='truncate text-lg font-semibold'>{value}</p>
        {hint && <p className='text-xs text-muted-foreground'>{hint}</p>}
      </div>
    </CardContent>
  </Card>
);

const HomeSkeleton = () => (
  <div className='space-y-6'>
    <Card>
      <CardHeader className='space-y-3'>
        <Skeleton className='h-4 w-24' />
        <Skeleton className='h-16 w-40' />
        <Skeleton className='h-4 w-32' />
      </CardHeader>
    </Card>
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className='h-20 w-full' />
      ))}
    </div>
  </div>
);

const Home = () => {
  const { data: weather, isLoading, error } = useWeather('Dnipro');
  const cityTime = useCityClock(weather?.timezone);

  if (isLoading) return <HomeSkeleton />;

  if (error)
    return (
      <Card className='border-destructive/50'>
        <CardHeader>
          <CardTitle className='text-destructive'>
            Something went wrong
          </CardTitle>
          <CardDescription>{error.message}</CardDescription>
        </CardHeader>
      </Card>
    );

  if (!weather) return null;

  const condition = weather.weather[0];
  const WeatherIcon = iconMap[condition.icon] ?? Cloud;
  const tz = weather.timezone;

  return (
    <TooltipProvider delayDuration={150}>
      <div className='space-y-6'>
        <Card className='overflow-hidden'>
          <CardHeader className='flex flex-row items-start justify-between gap-4 space-y-0'>
            <div className='space-y-1'>
              <CardDescription className='uppercase tracking-wide'>
                Current weather · {cityTime} local
              </CardDescription>
              <CardTitle className='text-2xl'>{weather.name}</CardTitle>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-muted'>
                  <WeatherIcon className='h-8 w-8' />
                </div>
              </TooltipTrigger>
              <TooltipContent>{condition.main}</TooltipContent>
            </Tooltip>
          </CardHeader>

          <CardContent className='space-y-4'>
            <div className='flex items-end gap-3'>
              <p className='text-7xl font-bold leading-none tracking-tight'>
                {formatTemperature(weather.main.temp)}°
              </p>
              <div className='pb-2 space-y-0.5'>
                <p className='text-lg capitalize text-muted-foreground leading-tight'>
                  {condition.description}
                </p>
                <p className='text-xs text-muted-foreground'>
                  H: {formatTemperature(weather.main.temp_max)}° · L:{' '}
                  {formatTemperature(weather.main.temp_min)}°
                </p>
              </div>
            </div>

            <Separator />

            <div className='flex flex-wrap gap-x-8 gap-y-2 text-sm'>
              <span className='flex items-center gap-2 text-muted-foreground'>
                <Thermometer className='h-4 w-4' />
                Feels like{' '}
                <span className='font-medium text-foreground'>
                  {formatTemperature(weather.main.feels_like)}°
                </span>
              </span>
              <span className='flex items-center gap-2 text-muted-foreground'>
                <Sunrise className='h-4 w-4' />
                {formatCityTime(weather.sys.sunrise, tz)}
              </span>
              <span className='flex items-center gap-2 text-muted-foreground'>
                <Sunset className='h-4 w-4' />
                {formatCityTime(weather.sys.sunset, tz)}
              </span>
            </div>
          </CardContent>
        </Card>

        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
          <StatCard
            icon={Droplets}
            label='Humidity'
            value={`${weather.main.humidity}%`}
          />
          <StatCard
            icon={Gauge}
            label='Pressure'
            value={`${weather.main.pressure} hPa`}
          />
          <StatCard
            icon={Wind}
            label='Wind'
            value={`${weather.wind.speed} m/s`}
            hint={
              weather.wind.deg !== undefined
                ? `${weather.wind.deg}°`
                : undefined
            }
          />
          <StatCard
            icon={Eye}
            label='Visibility'
            value={`${(weather.visibility / 1000).toFixed(1)} km`}
          />
          <StatCard
            icon={Cloudy}
            label='Cloudiness'
            value={`${weather.clouds.all}%`}
          />
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Home;
