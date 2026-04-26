import { CloudSun } from 'lucide-react';

const header = () => {
  return (
    <header className='flex items-center bg-neutral-800 px-6 py-4'>
      <CloudSun className='text-orange-500 mr-2' />
      <h1 className='text-white font-bold text-xl'>Pohoda</h1>
    </header>
  );
};

export default header;
