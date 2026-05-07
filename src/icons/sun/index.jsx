import { DEFAULT_ICON_SIZE } from '@/constants';
import { Sun } from 'lucide-react';

const SunIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return <Sun size={size} className='text-icon-primary' {...props} />;
};

export default SunIcon;
