import SunIcon from '@/icons/sun';
import MoonIcon from '@/icons/moon';
import CloudIcon from '@/icons/cloud';
import CloudDrizzleIcon from '@/icons/cloud-drizzle';
import CloudRainIcon from '@/icons/cloud-rain';
import CloudLightningIcon from '@/icons/cloud-lightning';
import CloudSnowIcon from '@/icons/cloud-snow';
import CloudFogIcon from '@/icons/cloud-fog';

export const iconMap = {
  '01d': SunIcon,
  '01n': MoonIcon,
  '02d': CloudIcon,
  '02n': CloudIcon,
  '03d': CloudIcon,
  '03n': CloudIcon,
  '04d': CloudIcon,
  '04n': CloudIcon,
  '09d': CloudDrizzleIcon,
  '09n': CloudDrizzleIcon,
  '10d': CloudRainIcon,
  '10n': CloudRainIcon,
  '11d': CloudLightningIcon,
  '11n': CloudLightningIcon,
  '13d': CloudSnowIcon,
  '13n': CloudSnowIcon,
  '50d': CloudFogIcon,
  '50n': CloudFogIcon,
};

export const FALLBACK_ICON = CloudIcon;
