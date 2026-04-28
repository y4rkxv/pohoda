import './App.css';
import Header from '@/components/header';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './components/sidebar';

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='flex-1 flex flex-col'>
        <Header />
        <div className='flex-1 p-4'></div>
      </main>
    </SidebarProvider>
  );
}

export default App;
