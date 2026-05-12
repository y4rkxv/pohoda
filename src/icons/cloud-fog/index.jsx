import { DEFAULT_ICON_SIZE } from '@/icons/constants';
import { CloudFog } from 'lucide-react';

const CloudFogIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return <CloudFog size={size} className='text-icon-primary' {...props} />;
};

export default CloudFogIcon;
