import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Sun from '@/icons/sun';

const header = () => {
  return (
    <NavigationMenu className='bg-header px-6 py-4 max-w-none w-full justify-start'>
      <NavigationMenuList>
        <NavigationMenuItem className='flex items-center '>
          <Sun />
          <h1 className='text-header-foreground font-bold text-2xl'>Pohoda</h1>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default header;
