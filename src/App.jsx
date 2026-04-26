import './App.css';
import Header from './components/ui/Header';
import { SidebarProvider, SidebarInset } from './components/ui/sidebar';
import AppSidebar from './components/ui/AppSidebar';
function App() {
  return (
    <div>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarInset>
          <Header />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

export default App;
