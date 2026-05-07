import { DEFAULT_ICON_SIZE } from '@/constants';
import { CloudSnow } from 'lucide-react';

const CloudSnowIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return <CloudSnow size={size} className='text-icon-primary' {...props} />;
};

export default CloudSnowIcon;
