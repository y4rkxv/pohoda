import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Thermometer, Sunrise, Sunset } from 'lucide-react';
import { formatTemperature } from '@/helpers/format-temperature';
import { formatCityTime } from '@/pages/home/helpers';

const WEATHER_ICON_SIZE = 32;

export const WeatherOverview = ({
  weather,
  condition,
  WeatherIcon,
  cityTime,
  tz,
}) => (
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
            <WeatherIcon size={WEATHER_ICON_SIZE} />
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
);
