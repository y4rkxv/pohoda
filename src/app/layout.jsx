import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AppSidebar } from '@/components/sidebar';

const Layout = ({ children }) => {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className='w-full'>
          <div className='bg-background px-4 py-2 flex items-center  w-full'>
            <SidebarTrigger />
          </div>
          <div className='p-6'>{children}</div>
        </main>
      </SidebarProvider>
    </TooltipProvider>
  );
};
export default Layout;
