import { DEFAULT_ICON_SIZE } from '@/icons/constants';
import { CloudSun } from 'lucide-react';

const CloudySunIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return <CloudSun size={size} className='text-icon-primary' {...props} />;
};

export default CloudySunIcon;
