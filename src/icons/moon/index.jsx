import { DEFAULT_ICON_SIZE } from '@/icons/constants';
import { Moon } from 'lucide-react';

const MoonIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return <Moon size={size} className='text-icon-primary' {...props} />;
};

export default MoonIcon;
