import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { TOOLTIP } from './constants';
import SunIcon from '@/icons/sun';
import HomeIcon from '@/icons/home';
import WidgetsIcon from '@/icons/widgets';
import SettingsIcon from '@/icons/settings';

export const AppSidebar = () => {
  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader>
        <div className='flex items-center gap-2 px-2 py-1 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center'>
          <SunIcon />
          <h1 className='text-foreground font-bold text-xl group-data-[collapsible=icon]:hidden'>
            Pohoda
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip={TOOLTIP.HOME}>
              <Link to='/'>
                <HomeIcon />
                <span>{TOOLTIP.HOME}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip={TOOLTIP.WIDGETS}>
              <Link to='/widgets'>
                <WidgetsIcon />
                <span>{TOOLTIP.WIDGETS}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip={TOOLTIP.SETTINGS}>
              <Link to='/settings'>
                <SettingsIcon />
                <span>{TOOLTIP.SETTINGS}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
