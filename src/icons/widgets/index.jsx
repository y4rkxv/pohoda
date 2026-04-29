import { DEFAULT_ICON_SIZE } from '@/constants';
import { LayoutGrid } from 'lucide-react';

const WidgetsIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return <LayoutGrid size={size} className='text-icon-primary' {...props} />;
};

export default WidgetsIcon;
