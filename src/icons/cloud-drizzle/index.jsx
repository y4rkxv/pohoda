import { DEFAULT_ICON_SIZE } from '@/icons/constants';
import { CloudDrizzle } from 'lucide-react';

const CloudDrizzleIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return <CloudDrizzle size={size} className='text-icon-primary' {...props} />;
};

export default CloudDrizzleIcon;
