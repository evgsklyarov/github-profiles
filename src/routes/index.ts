import { createBrowserRouter } from 'react-router-dom';

import App from '~/App';
import NotFound from '~/screens/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '*',
    Component: NotFound
  }
]);

export default router;
