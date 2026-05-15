import { DEFAULT_ICON_SIZE } from '@/icons/constants';
import { Cloud } from 'lucide-react';

const CloudIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return <Cloud size={size} className='text-icon-primary' {...props} />;
};

export default CloudIcon;
