import { DEFAULT_ICON_SIZE } from '@/icons/constants';
import { CloudLightning } from 'lucide-react';

const CloudLightningIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return (
    <CloudLightning size={size} className='text-icon-primary' {...props} />
  );
};

export default CloudLightningIcon;
