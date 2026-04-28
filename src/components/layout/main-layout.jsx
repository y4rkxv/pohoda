import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/sidebar';
import SunIcon from '@/icons/sun';

const MainLayout = ({ children }) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className='w-full'>
        <div className='bg-background  px-6 py-4 flex items-center justify-between w-full'>
          <div className='flex items-center gap-2 '>
            <SunIcon className='text-foreground ' />
            <h1 className='text-foreground font-bold text-xl'>Pohoda</h1>
          </div>
          <SidebarTrigger />
        </div>
        <div className='p-6'>{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
