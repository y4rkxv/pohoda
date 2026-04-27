import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import SunIcon from '@/icons/sun';

const header = () => {
  return (
    <NavigationMenu className='bg-header px-6 py-4 max-w-none w-full justify-start'>
      <NavigationMenuList>
        <NavigationMenuItem className='flex items-center '>
          <SunIcon className='text-icon-primary mr-2' />
          <h1 className='text-foreground font-bold text-2xl'>Pohoda</h1>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default header;
