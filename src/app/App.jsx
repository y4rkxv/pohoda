import { Routes, Route } from 'react-router-dom';
import Layout from '@/app/layout';
import Home from '@/pages/home';
import Widgets from '@/pages/widgets';
import Settings from '@/pages/settings';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/widgets' element={<Widgets />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;
