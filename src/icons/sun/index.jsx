import { DEFAULT_ICON_SIZE } from '@/constants';
import { CloudSun } from 'lucide-react';

const SunIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return <CloudSun size={size} className='text-icon-primary' {...props} />;
};

export default SunIcon;
