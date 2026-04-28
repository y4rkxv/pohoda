import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { TOOLTIP } from '@/constants';
import SunIcon from '@/icons/sun';
import HomeIcon from '@/icons/home';
import WidgetIcon from '@/icons/widget';
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
            <SidebarMenuButton tooltip={TOOLTIP.HOME}>
              <HomeIcon />
              <span>{TOOLTIP.HOME}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={TOOLTIP.WIDGET}>
              <WidgetIcon />
              <span>{TOOLTIP.WIDGET}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={TOOLTIP.SETTINGS}>
              <SettingsIcon />
              <span>{TOOLTIP.SETTINGS}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
