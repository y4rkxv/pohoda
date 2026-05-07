import { DEFAULT_ICON_SIZE } from '@/constants';
import { CloudRain } from 'lucide-react';

const CloudRainIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return <CloudRain size={size} className='text-icon-primary' {...props} />;
};

export default CloudRainIcon;
