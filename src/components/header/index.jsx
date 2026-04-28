import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { SidebarTrigger } from '@/components/ui/sidebar';
import SunIcon from '@/icons/sun';

const Header = () => {
  return (
    <header className='bg-background  px-6 py-4 w-full'>
      <NavigationMenu className='max-w-none w-full justify-between'>
        <NavigationMenuList>
          <NavigationMenuItem className='flex items-center'>
            <SunIcon className='mr-2 text-foreground' />
            <h1 className='text-foreground font-bold text-2xl'>Pohoda</h1>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem>
            <SidebarTrigger />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
