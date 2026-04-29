import { Routes, Route } from 'react-router-dom';

import { PAGES_PATHS } from '@/constants';
import Home from '@/pages/home';
import Widgets from '@/pages/widgets';
import Settings from '@/pages/settings';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={PAGES_PATHS.home} element={<Home />} />
      <Route path={PAGES_PATHS.widgets} element={<Widgets />} />
      <Route path={PAGES_PATHS.settings} element={<Settings />} />
    </Routes>
  );
};

export default AppRouter;
