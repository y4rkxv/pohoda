import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { CloudSun } from 'lucide-react';

const header = () => {
  return (
    <NavigationMenu className=' bg-neutral-800 px-6 py-4 max-w-none w-full justify-start'>
      <NavigationMenuList>
        <NavigationMenuItem className='flex items-center '>
          <CloudSun size={24} className='text-orange-500 mr-2 size={100}' />
          <h1 className='text-white font-bold text-2xl'>Pohoda</h1>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default header;
