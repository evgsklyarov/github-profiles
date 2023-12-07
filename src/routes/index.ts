import { createBrowserRouter } from 'react-router-dom';

import App from '~/screens/App';
import Profile from '~/screens/Profile';
import Starred from '~/screens/Starred';
import Repository from '~/screens/Repository';
import NotFound from '~/screens/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/:username',
    Component: Profile,
  },
  {
    path: '/:username/starred',
    Component: Starred,
  },
  {
    path: '/:username/repo/:reponame',
    Component: Repository,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);

export default router;
