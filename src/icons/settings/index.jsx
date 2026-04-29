import { DEFAULT_ICON_SIZE } from '@/constants';
import { Settings } from 'lucide-react';

const SettingsIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return <Settings size={size} className='text-icon-primary' {...props} />;
};

export default SettingsIcon;
