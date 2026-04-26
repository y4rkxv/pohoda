import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from './sidebar';
import { CloudSun } from 'lucide-react';

const AppSidebar = () => {
  return (
    <Sidebar className='bg-neutral-800'>
      <SidebarHeader className='py-4 flex items-center'>
        <CloudSun className='text-orange-500' size={32} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className='text-white'>Home</SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className='text-white'>
              Widgets
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
