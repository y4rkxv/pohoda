import { CloudSun } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';

const header = () => {
  return (
    <header className='flex items-center bg-neutral-800 px-6 py-4'>
      <CloudSun className='text-orange-500 mr-2' />
      <h1 className='text-white font-bold text-xl'>Pohoda</h1>
      <SidebarTrigger className='ml-auto text-white' />
    </header>
  );
};

export default header;
