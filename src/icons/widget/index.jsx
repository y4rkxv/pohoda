import { DEFAULT_ICON_SIZE } from '@/constants';
import { LayoutGrid } from 'lucide-react';

const WidgetIcon = ({ size = DEFAULT_ICON_SIZE, ...props }) => {
  return <LayoutGrid size={size} className='text-icon-primary' {...props} />;
};

export default WidgetIcon;
