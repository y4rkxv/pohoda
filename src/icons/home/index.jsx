import { DEFAULT_ICON_SIZE } from '@/constants';
import { House } from 'lucide-react';

const HomeIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return <House size={size} className='text-icon-primary' {...props} />;
};

export default HomeIcon;
